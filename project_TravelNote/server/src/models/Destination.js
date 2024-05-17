const mongoose = require('mongoose')
const moment = require('moment')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const DestinationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: '미정'
    },
    timeOfStart: {
        type: Date,
        required: true
    },
    timeOfEnd: {
        type: Date,
        required: true
    },
    description: {
        type: String
    },
    destinationInfo: {
        type: Object
    },
    cost: {
        type: Number,
        default: 0
    },
    isDone: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: moment()
    },
    lastModifiedAt: {
        type: Date,
        default: moment()
    }
})

DestinationSchema.virtual('status').get(function(){
    return this.isDone ? "완료" : "예정"
})

DestinationSchema.path('category').validate(function(value){
    return /음식점|카페|바|관광명소|쇼핑센터|기타|미정/.test(value)
}, 'category `{VALUE}` 는 유효하지 않은 카테고리입니다.')

const Destination = mongoose.model('Destination', DestinationSchema)
module.exports = Destination



// const destination = new Destination({
//     title: '감천문화마을',
//     category: '기타',
//     timeOfStart: moment(),
//     timeOfEnd: moment().add(7, "h"),
//     description: '감천문화마을 가기',
//     destinationInfo: {
//         "id": "ChIJUToRo7fpaDURo_ZMItcBfpc",
//         "displayName": "감천문화마을",
//         "formattedAddress": "대한민국 부산광역시 사하구 감내2로 203",
//         "location": {
//             "lat": 35.0973904,
//             "lng": 129.0105924
//         }
//     }
// })
// destination.save().then(() => console.log('destination created !'))