const express = require('express')
const Itinerary = require('../models/Itinerary')
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

const router = express.Router()

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
        const itinerary = new Itinerary({
            userId: req.body.userId,
            title: req.body.title,
            city: req.body.city,
            dateOfStart: req.body.dateOfStart,
            dateOfEnd: req.body.dateOfEnd,
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




module.exports = router