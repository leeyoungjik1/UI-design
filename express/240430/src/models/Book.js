const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const bookSchema = new Schema({
    bookId: {
        type: ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    release: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book



// const book = new Book({
//     bookId: '000000000000000000000005',
//     title: '3번책',
//     release: '2024-01-01',
//     author: 'e저자'
// })
// book.save().then(() => console.log('책 추가 완료'))