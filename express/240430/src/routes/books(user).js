const express = require('express')
const Book = require('../models/Book')
const User = require('../models/User')
const History = require('../models/History')
const {isAuth, isAdmin, generateToken} = require('../../auth')
const expressAsyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const moment = require('moment')

const router = express.Router()

router.get('/borrow', isAuth, expressAsyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    if(!user){
        res.status(404).json({code: 404, message: '대출 도서 조회 유저 정보 없음'})
    }else{
        if(user.rentedBooks.length === 0){
            res.status(404).json({code: 404, message: '대출 도서 없음'})
        }else{
            res.json({code: 200, rentedBooks: user.rentedBooks})
        }
    }
}))
router.get('/borrow/:bookId', isAuth, expressAsyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    const searchedBook = user.rentedBooks.find(bookId => {
        return bookId.toString() === req.params.bookId
    })

    if(!searchedBook){
        res.status(404).json({code: 404, message: '사용자 대출 도서 상세정보 조회 에러'})
    }else{
        const book = await Book.findById(searchedBook)
        res.json(book)
    }
}))
router.post('/borrow/:bookId', isAuth, expressAsyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    const book = await Book.findById(req.params.bookId)
    if(!book){
        res.status(404).json({code: 404, message: '대출할 도서 조회 에러'})
    }else{
        if(user.rentedBooks.length > 0 && user.rentedBooks.find(bookId => bookId.toString() === book._id.toString())){
            res.status(404).json({code: 404, message: '대출할 도서 중복 에러'})
        }else{
            user.rentedBooks.push(book._id)
            const history = new History({
                borrowedBookId: book._id,
                borrowedUserId: user._id,
                // expiredAt: new Date().setDate(new Date().getDate()+14)
                expiredAt: moment().add(14, 'days')
            })
            const rentedBookUser = await user.save()
            const newHistory = await history.save()
            const {name, userId, isAdmin, rentedBooks, lastModifiedAt} = rentedBookUser

            res.json({
                code: 200,
                token: generateToken(rentedBookUser),
                name, userId, isAdmin, rentedBooks, lastModifiedAt, newHistory
            })
        }
    }
}))
router.delete('/borrow/:bookId', isAuth, expressAsyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id)
    const searchedBook = user.rentedBooks.find(bookId => {
        return bookId.toString() === req.params.bookId
    })

    if(!searchedBook){
        res.status(404).json({code: 404, message: '사용자 삭제할 대출 도서 조회 에러'})
    }else{
        const deletedBook = user.rentedBooks.filter(bookId => {
            return bookId.toString() !== req.params.bookId
        })
        user.rentedBooks = deletedBook
        const deletedBookUser = await user.save()
        const {name, userId, isAdmin, rentedBooks, lastModifiedAt} = deletedBookUser
        res.json({
            code: 200,
            token: generateToken(deletedBookUser),
            name, userId, isAdmin, rentedBooks, lastModifiedAt
        })
    }
}))





router.get('/history', isAuth, expressAsyncHandler(async (req, res, next) => {
    const historys = await History.find({borrowedUserId: req.user._id}).populate('borrowedUserId', ['name', 'userId']).populate('borrowedBookId', ['bookId', 'title'])
    if(historys.length === 0){
        res.status(404).json({code: 404, message: '사용자 대출 내역 없음'})
    }else{
        historys.forEach(async function(history){
            if(history.borrowStatus !== '연체' 
            && history.borrowStatus !== '반납'
            && !moment().isBefore(history.expiredAt)){
                history.borrowStatus = '연체'
                await history.save()
            }
        })
        res.json({code: 200, historys})
    }
}))
router.put('/history/return/:historyId', isAuth, expressAsyncHandler(async (req, res, next) => {
    const history = await History.findOne({borrowedUserId: req.user._id, _id: req.params.historyId})
    if(!history){
        res.status(404).json({code: 404, message: '반납할 대출 내역 없음'})
    }else{
        if(history.borrowStatus === '반납'){
            res.status(401).json({code: 401, message: '이미 반납이 완료된 도서'})
        }else{
            history.borrowStatus = '반납'
            history.returnedAt = new Date()
    
            const updatedHistory = await history.save()
            res.json({
                code: 200,
                updatedHistory
            })
        }
    }
}))
router.put('/history/extend/:historyId', isAuth, expressAsyncHandler(async (req, res, next) => {
    const history = await History.findOne({borrowedUserId: req.user._id, _id: req.params.historyId})
    if(!history){
        res.status(404).json({code: 404, message: '연장할 대출 내역 없음'})
    }else{
        if(history.borrowStatus === '반납'){
            res.status(401).json({code: 401, message: '이미 반납이 완료된 도서'})
        }else{
            console.log(moment().isBefore(history.expiredAt))
            const dxpiredDate = moment(history.expiredAt)
            history.borrowStatus = '연장'
            history.expiredAt = dxpiredDate.add(7, 'days')
            const updatedHistory = await history.save()
            res.json({
                code: 200,
                updatedHistory
            })
        }
    }
}))




module.exports = router