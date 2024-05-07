const express = require('express')
const Book = require('../models/Book')
const User = require('../models/User')
const {isAuth, isAdmin, generateToken} = require('../../auth')
const expressAsyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const { Types: { ObjectId }} = mongoose

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
            const rentedBookUser = await user.save()
            const {name, userId, isAdmin, rentedBooks, lastModifiedAt} = rentedBookUser
            res.json({
                code: 200,
                token: generateToken(rentedBookUser),
                name, userId, isAdmin, rentedBooks, lastModifiedAt
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





module.exports = router