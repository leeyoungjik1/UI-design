const express = require('express')
const ItineraryByDate = require('../models/ItineraryByDate')
const Destination = require('../models/Destination')
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

// URL 주소: /api/itinerarys/destination

const router = express.Router()


// 새 목적지 일정 생성
router.post('/create/:itineraryByDateId', [

], isAuth, expressAsyncHandler(async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        res.status(400).json({
            code: 400,
            message: 'Invaild Form data for destination',
            error: errors.array()
        })
    }else{
        const ChangeTimeOfStart = momentTimezone(req.body.timeOfStart).tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss")
        const ChangeTimeOfEnd = momentTimezone(req.body.timeOfEnd).tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss")
        // destinationIds 배열에 새로 생성된 destination id값 추가
        const itineraryByDate = await ItineraryByDate.findById(req.params.itineraryByDateId).populate('destinationIds')
        const destination = new Destination({
            title: req.body.title,
            address: req.body.address,
            category: req.body.category,
            timeOfStart: ChangeTimeOfStart,
            timeOfEnd: ChangeTimeOfEnd,
            description: req.body.description,
            cost: req.body.cost,
            destinationInfo: req.body.destinationInfo,
            itineraryId: itineraryByDate.itineraryId
        })
        itineraryByDate.destinationIds.push(destination._id)
        const newDestination = await destination.save()
        itineraryByDate.save()
        if(!newDestination){
            res.status(400).json({code: 400, message: 'Invalid Destination Data'})
        }else{
            const {title, address, category, timeOfStart, timeOfEnd, description, destinationInfo, cost, status} = newDestination

            res.json({
                code: 200,
                title, address, category, timeOfStart, timeOfEnd, description, destinationInfo, cost, status
            })
        }
    }
}))


module.exports = router