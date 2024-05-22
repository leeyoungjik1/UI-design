const express = require('express')
const Itinerary = require('../models/Itinerary')
const { isAuth } = require('../../auth')
const expressAsyncHandler = require('express-async-handler')
const moment = require('moment')
const momentTimezone = require('moment-timezone');
const { validationResult, oneOf } = require('express-validator')
const {
    validateUserName,
    validateUserNickName,
    validateUserPassword,
    validateUserEmail,
    validateUserId
} = require('../../validator')
const itineraryByDateRouter = require('./ItineraryByDate')

const router = express.Router()
router.use('/bydate', itineraryByDateRouter)

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


// 변경할 전체 일정 리스트 가져오기
router.get('/changelist', [

], isAuth, expressAsyncHandler(async (req, res, next) => {
    const itinerarys = await Itinerary.find({userId: req.user._id})
    // console.log(itinerarys)
    if(itinerarys.length === 0){
        res.status(404).json({code: 404, message: '사용자의 일정 내역 없음'})
    }else{
        const result = itinerarys.map((itinerary) => {
            const {city, dateOfEnd, dateOfStart, description, itineraryByDateId, title, _id, status, open} = itinerary
            return {city, dateOfEnd, dateOfStart, description, itineraryByDateId, title, _id, status, open}
        })
        res.json({code: 200, Itinerarys: result})
    }
}))


// 선택한 일정 하나의 내역 가져오기
router.get('/details/:itineraryId', [

], isAuth, expressAsyncHandler(async (req, res, next) => {
    const itinerary = await Itinerary.findById(req.params.itineraryId).populate({
        path: 'itineraryByDateId',
        populate: {path: 'destinationId'}
    })
    // console.log(itinerary)
    if(!itinerary){
        res.status(404).json({code: 404, message: '해당 일정 내역 없음'})
    }else{
        const {city, dateOfEnd, dateOfStart, description, itineraryByDateId, title, _id, status, open} = itinerary
        res.json({code: 200, city, dateOfEnd, dateOfStart, description, itineraryByDateId, title, _id, status, open})
    }
}))


module.exports = router