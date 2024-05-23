const express = require('express')
const Itinerary = require('../models/Itinerary')
const ItineraryByDate = require('../models/ItineraryByDate')
const { isAuth } = require('../../auth')
const expressAsyncHandler = require('express-async-handler')
const moment = require('moment')
const { validationResult, oneOf } = require('express-validator')
const {
    validateUserName,
    validateUserNickName,
    validateUserPassword,
    validateUserEmail,
    validateUserId
} = require('../../validator')

// URL 주소: /api/itinerarys/bydate

const router = express.Router()


// 새 일자별 일정 생성
router.post('/create/:itineraryId', [

], isAuth, expressAsyncHandler(async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        res.status(400).json({
            code: 400,
            message: 'Invaild Form data for itineraryByDate',
            error: errors.array()
        })
    }else{
        // itinerary 배열에 새로 생성된 byDate id값 추가
        const itinerary = await Itinerary.findById(req.params.itineraryId).populate({
            path: 'itineraryByDateIds',
            populate: {path: 'destinationIds'}
        })
        const itineraryByDate = new ItineraryByDate({
            itineraryId: req.params.itineraryId,
            day: req.body.day,
            date: req.body.date,
            accommodationName: req.body.accommodationName,
            accommodationAddress: req.body.accommodationAddress,
            accommodationCost: req.body.accommodationCost,
            accommodationInfo: req.body.accommodationInfo
        })
        itinerary.itineraryByDateIds.push(itineraryByDate._id)
        const newItineraryByDate = await itineraryByDate.save()
        itinerary.save()
        if(!newItineraryByDate){
            res.status(400).json({code: 400, message: 'Invalid Itinerarys Data'})
        }else{
            res.json({
                code: 200,
                newItineraryByDate
            })
        }
    }
}))

// 숙소 정보 수정
router.put('/:ItineraryByDateId', [

], isAuth, expressAsyncHandler(async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        res.status(400).json({
            code: 400,
            message: 'Invaild Form data for ItineraryByDate',
            error: errors.array()
        })
    }else{
        const itineraryByDate = await ItineraryByDate.findById(req.params.ItineraryByDateId).populate('destinationIds')
        // console.log(itinerary)
        if(!itineraryByDate){
            res.status(404).json({code: 404, message: '해당 일자별 일정 내역 없음'})
        }else{
            itineraryByDate.accommodationName = req.body.accommodationName || itineraryByDate.accommodationName
            itineraryByDate.accommodationAddress = req.body.accommodationAddress || itineraryByDate.accommodationAddress
            itineraryByDate.accommodationCost = req.body.accommodationCost || itineraryByDate.accommodationCost
            itineraryByDate.accommodationInfo = req.body.accommodationInfo || itineraryByDate.accommodationInfo
            itineraryByDate.lastModifiedAt = moment()

            const updateditineraryByDate = await itineraryByDate.save()
            res.json({
                code: 200,
                message: 'ItineraryByDate updated',
                updateditineraryByDate
            })
        }
    }
}))


module.exports = router