const express = require('express')
const Itinerary = require('../models/Itinerary')
const ItineraryByDate = require('../models/ItineraryByDate')
const Destination = require('../models/Destination')
const { isAuth } = require('../../auth')
const expressAsyncHandler = require('express-async-handler')
const moment = require('moment')
const momentTimezone = require('moment-timezone')
const mongoose = require('mongoose')
const { validationResult, oneOf } = require('express-validator')
const {
    validateUserName,
    validateUserNickName,
    validateUserPassword,
    validateUserEmail,
    validateUserId
} = require('../../validator')
const itineraryByDateRouter = require('./ItineraryByDate')
const destinationRouter = require('./Destination')

// URL 주소: /api/itinerarys

const router = express.Router()
router.use('/bydate', itineraryByDateRouter)
router.use('/destination', destinationRouter)

// 새 일정 생성
router.post('/create', [

], isAuth, expressAsyncHandler(async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        res.status(400).json({
            code: 400,
            message: 'Invaild Form data for itinerary',
            error: errors.array()
        })
    }else{
        const ChangeDateOfStart = momentTimezone(req.body.dateOfStart).tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss")
        const ChangeDateOfEnd = momentTimezone(req.body.dateOfEnd).tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss")
        const itinerary = new Itinerary({
            userId: req.body.userId,
            title: req.body.title,
            city: req.body.city,
            dateOfStart: ChangeDateOfStart,
            dateOfEnd: ChangeDateOfEnd,
            description: req.body.description,
            isPublic: req.body.isPublic
        })
        const newItinerary = await itinerary.save()
        if(!newItinerary){
            res.status(400).json({code: 400, message: 'Invalid Itinerarys Data'})
        }else{
            const {userId, title, city, dateOfStart, dateOfEnd, description, open} = newItinerary
            
            res.json({
                code: 200,
                userId, title, city, dateOfStart, dateOfEnd, description, open
            })
        }
    }
}))


// 해당 사용자 전체 일정 리스트 가져오기
router.get('/list', [

], isAuth, expressAsyncHandler(async (req, res, next) => {
    let itinerarys = null
    if(req.query.filter === 'lastModifiedAt'){
        itinerarys = await Itinerary.find({userId: req.user._id})
        .sort({lastModifiedAt: -1})
        .populate({
            path: 'itineraryByDateIds',
            populate: {path: 'destinationIds'}
        })
    }else{
        itinerarys = await Itinerary.find({userId: req.user._id})
        .sort({dateOfStart: 1})
        .populate({
            path: 'itineraryByDateIds',
            populate: {path: 'destinationIds'}
        })
    }
    if(itinerarys.length === 0){
        res.status(404).json({code: 404, message: '사용자의 일정 내역 없음'})
    }else{
        const result = itinerarys.map((itinerary) => {
            const {city, dateOfEnd, dateOfStart, description, itineraryByDateIds, title, _id, status, open, isDone, lastModifiedAt} = itinerary
            return {city, dateOfEnd, dateOfStart, description, itineraryByDateIds, title, _id, status, open, isDone, lastModifiedAt}
        })
        res.json({code: 200, Itinerarys: result})
    }
}))

// 해당 일정 전체 예상 비용 가져오기
router.get('/totalcost', [

], isAuth, expressAsyncHandler(async (req, res, next) => {
    const accommodationCosts = await ItineraryByDate.aggregate([
        {$match: {itineraryId: new mongoose.Types.ObjectId(req.query.itineraryId)}},
        {$group: {
            _id: "$itineraryId",
            total: {$sum: "$accommodationCost"}
        }}
    ])
    const destinationCosts = await Destination.aggregate([
        {$match: {itineraryId: new mongoose.Types.ObjectId(req.query.itineraryId)}},
        {$group: {
            _id: "$itineraryId",
            total: {$sum: "$cost"}
        }}
    ])
    console.log(accommodationCosts)
    console.log(destinationCosts)
    let totalcost = 0
    if(accommodationCosts.length !== 0 || destinationCosts.length !== 0){
        totalcost = accommodationCosts[0].total + destinationCosts[0].total
    }
    // console.log(totalcost)
    res.json({code: 200, totalcost})
}))


// 선택한 일정 수정
router.put('/changelist/:itineraryId', [

], isAuth, expressAsyncHandler(async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        res.status(400).json({
            code: 400,
            message: 'Invaild Form data for itinerary',
            error: errors.array()
        })
    }else{
        const itinerary = await Itinerary.findById(req.params.itineraryId).populate({
            path: 'itineraryByDateIds',
            populate: {path: 'destinationIds'}
        })
        // console.log(itinerary)
        if(!itinerary){
            res.status(404).json({code: 404, message: '해당 일정 내역 없음'})
        }else{
            itinerary.title = req.body.title || itinerary.title
            itinerary.city = req.body.city || itinerary.city
            itinerary.dateOfStart = req.body.dateOfStart ? momentTimezone(req.body.dateOfStart).tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss") : itinerary.dateOfStart
            itinerary.dateOfEnd = req.body.dateOfEnd ? momentTimezone(req.body.dateOfEnd).tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss") : itinerary.dateOfEnd
            itinerary.description = req.body.description || itinerary.description
            itinerary.isPublic = req.body.isPublic || itinerary.isPublic
            if(req.body.isDone !== undefined){
                itinerary.isDone = req.body.isDone
            }
            itinerary.lastModifiedAt = moment()

            const updatedItinerary = await itinerary.save()
            res.json({
                code: 200,
                message: 'Itinerary updated',
                updatedItinerary
            })
        }
    }
}))

// 선택한 일정 삭제
router.delete('/changelist/:itineraryId', isAuth, expressAsyncHandler(async (req, res, next) => {
    const itinerary = await Itinerary.findByIdAndDelete(req.params.itineraryId)
    const itineraryByDate = await ItineraryByDate.deleteMany({itineraryId: req.params.itineraryId})
    const destination = await Destination.deleteMany({itineraryId: req.params.itineraryId})
    // console.log(itinerary)
    if(!itinerary){
        res.status(404).json({code: 404, message: '해당 일정 내역 없음'})
    }else{
        res.status(204).json({code: 204, message: 'Itinerary deleted successfully'})
    }
}))


// 선택한 일정 하나의 내역 가져오기
router.get('/details/:itineraryId', [

], isAuth, expressAsyncHandler(async (req, res, next) => {
    const itinerary = await Itinerary.findById(req.params.itineraryId).populate({
        path: 'itineraryByDateIds',
        populate: {path: 'destinationIds'}
    })
    // console.log(itinerary)
    if(!itinerary){
        res.status(404).json({code: 404, message: '해당 일정 내역 없음'})
    }else{
        const {city, dateOfEnd, dateOfStart, description, itineraryByDateIds, title, _id, isPublic, status, open} = itinerary
        res.json({code: 200, city, dateOfEnd, dateOfStart, description, itineraryByDateIds, title, _id, isPublic, status, open})
    }
}))




module.exports = router