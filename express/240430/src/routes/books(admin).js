const express = require('express')
const Book = require('../models/Book')
const {isAuth, isAdmin} = require('../../auth')
const expressAsyncHandler = require('express-async-handler')

const router = express.Router()

router.post('/register', isAuth, isAdmin, expressAsyncHandler(async (req, res, next) => {
    const book = new Book({
        bookId: req.body.bookId,
        title: req.body.title,
        cetegory: req.body.cetegory,
        description: req.body.description,
        release: req.body.release,
        author: req.body.author
    })
    const newBook = await book.save()
    if(!newBook){
        res.status(400).json({code: 400, message: '책 등록 정보 에러'})
    }else{
        const {bookId, title, cetegory, description, release, author, createdAt} = newBook
        res.json({
            code: 200,
            bookId, title, cetegory, description, release, author, createdAt
        })
    }
}))
router.put('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res, next) => {
    const book = await Book.findById(req.params.id)
    if(!book){
        res.status(404).json({code: 404, message: '수정 책 정보 없음'})
    }else{
        book.title = req.body.title || book.title
        book.cetegory = req.body.cetegory || book.cetegory
        book.description = req.body.description || book.description
        book.release = req.body.release || book.release
        book.author = req.body.author || book.author
        book.lastModifiedAt = new Date()

        const updatedBook = await book.save()
        const {bookId, title, cetegory, description, release, author, createdAt} = updatedBook
        res.json({
            code: 200,
            bookId, title, cetegory, description, release, author, createdAt
        })
    }
}))
router.get('/get', isAuth, isAdmin, expressAsyncHandler(async (req, res, next) => {
    const books = await Book.find()
    if(!books){
        res.status(404).json({code: 404, message: '전체 책 조회 내역 없음'})
    }else{
        res.json(books)
    }
}))
router.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res, next) => {
    const book = await Book.findByIdAndDelete(req.params.id)
    if(!book){
        res.status(404).json({code: 404, message: '삭제 책 정보 없음'})
    }else{
        res.status(204).json({code: 204, message: '책 삭제 완료'})
    }
}))



module.exports = router