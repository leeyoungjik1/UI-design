const calendarTable = document.getElementById("calendar")
const calendarTableTitle = document.getElementById("calendarTitle")
const selectTimeBox = document.getElementById('select-time-box')
const timeTable = document.getElementById("timetable")
const timeTableWrap = document.getElementById("timetable-wrap")
const btnReserve = document.querySelector('.btn.reserve')
const showDate = document.getElementById('show-date')
const btnDetailsCheck = document.querySelector('.btn-details.check')
const detailsTotal = document.getElementById('details-total')
const detailsInputs = document.querySelectorAll('#details-container input')
const modalDetails = document.getElementById('modal-details')
const ticketBox = document.getElementById('ticket-box')
const showResultBox = document.getElementById('show-result-box')
const totalPriceBox = document.getElementById('total-price-box')
const saveReserveArr = []
let loadReserveArr = []
// if(JSON.parse(localStorage.getItem('reservation'))){
// 	loadReserveArr = JSON.parse(localStorage.getItem('reservation'))
// }
console.log(loadReserveArr)
const detailsType = {adult: 10000, youth: 5000, child: 3000}
const detailsDiscount = {resident: -2000, pass: -1000}
const detailsOption = {drink: 4000, souvenir: 15000}
const transdetailsType = {adult: "어른", youth: "청소년", child: "어린이"}
const transdetailsDiscount = {resident: "지역민 할인", pass: "지역 패스권"}
const transdetailsOption = {drink: "음료", souvenir: "기념품"}



const sample = [
    {
        "id": 1,
        "name": "lee",
        "year": 2024,
        "month": 4,
        "date": 3,
        "dateTotal": "2024-04-03",
        "time": "10:00 ~ 11:00",
		"details": [
			{type: "adult", discount: ["resident"], option: ["souvenir"], amount: 1, price: 25000},
			{type: "adult", discount: ["resident", "pass"], option: ["souvenir"], amount: 2, price: 35000},
			{type: "youth", discount: ["pass"], option: ["drink", "souvenir"], amount: 1, price: 2000},
			{type: "child", discount: null, option: null, amount: 3, price: 45000}
		],
		"totalprice": 560000
    },
    {
        "id": 2,
        "name": "kim",
        "year": 2024,
        "month": 4,
        "date": 3,
        "dateTotal": "2024-04-03",
        "time": "13:00 ~ 14:00",
		"details": [
			{type: "adult", discount: ["resident"], option: ["souvenir"], amount: 2, price: 25000},
			{type: "adult", discount: null, option: ["drink"], amount: 1, price: 55000},
			{type: "youth", discount: ["resident", "pass"], option: ["drink", "souvenir"], amount: 2, price: 855000},
			{type: "child", discount: ["pass"], option: null, amount: 1, price: 25000}
		],
		"totalprice": 50000
    },
    {
        "id": 3,
        "name": "park",
        "year": 2024,
        "month": 4,
        "date": 4,
        "dateTotal": "2024-04-04",
        "time": "9:00 ~ 10:00",
		"details": [
			{type: "adult", discount: ["resident"], option: ["drink", "souvenir"], amount: 2, price: 35000},
			{type: "child", discount: ["resident"], option: null, amount: 2, price: 5000}
		],
		"totalprice": 160000
    }
]
loadReserveArr = sample
// localStorage.setItem('reservation', JSON.stringify([
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 3,
//         "dateTotal": "2024-04-03",
//         "time": "10:00 ~ 11:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 3,
//         "dateTotal": "2024-04-03",
//         "time": "11:00 ~ 12:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 3,
//         "dateTotal": "2024-04-03",
//         "time": "16:00 ~ 17:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 18,
//         "dateTotal": "2024-04-18",
//         "time": "9:00 ~ 10:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 18,
//         "dateTotal": "2024-04-18",
//         "time": "10:00 ~ 11:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 18,
//         "dateTotal": "2024-04-18",
//         "time": "11:00 ~ 12:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 18,
//         "dateTotal": "2024-04-18",
//         "time": "12:00 ~ 13:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 18,
//         "dateTotal": "2024-04-18",
//         "time": "13:00 ~ 14:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 18,
//         "dateTotal": "2024-04-18",
//         "time": "14:00 ~ 15:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 18,
//         "dateTotal": "2024-04-18",
//         "time": "15:00 ~ 16:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 18,
//         "dateTotal": "2024-04-18",
//         "time": "16:00 ~ 17:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 4,
//         "date": 18,
//         "dateTotal": "2024-04-18",
//         "time": "17:00 ~ 18:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 5,
//         "date": 8,
//         "dateTotal": "2024-05-08",
//         "time": "14:00 ~ 15:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 5,
//         "date": 16,
//         "dateTotal": "2024-05-16",
//         "time": "9:00 ~ 10:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 5,
//         "date": 16,
//         "dateTotal": "2024-05-16",
//         "time": "10:00 ~ 11:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 5,
//         "date": 16,
//         "dateTotal": "2024-05-16",
//         "time": "11:00 ~ 12:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 5,
//         "date": 16,
//         "dateTotal": "2024-05-16",
//         "time": "12:00 ~ 13:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 5,
//         "date": 16,
//         "dateTotal": "2024-05-16",
//         "time": "13:00 ~ 14:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 5,
//         "date": 16,
//         "dateTotal": "2024-05-16",
//         "time": "14:00 ~ 15:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 5,
//         "date": 16,
//         "dateTotal": "2024-05-16",
//         "time": "15:00 ~ 16:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 5,
//         "date": 16,
//         "dateTotal": "2024-05-16",
//         "time": "16:00 ~ 17:00"
//     },
//     {
//         "id": 1,
//         "name": "lee",
//         "year": 2024,
//         "month": 5,
//         "date": 16,
//         "dateTotal": "2024-05-16",
//         "time": "17:00 ~ 18:00"
//     }
// ]))







let today = new Date()
let todayFixed = new Date()
let startTime = "9"
let endTime = "18"
let maxOfReserveNum = endTime - startTime


buildCalendar()


function buildCalendar(){
	let row = null
	let cnt = 0

	calendarTableTitle.innerHTML = today.getFullYear()+"년 "+(today.getMonth()+1)+"월"

	const firstDate = new Date(today.getFullYear(), today.getMonth(), 1)
	const lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0)

	while(calendarTable.rows.length > 2){
		calendarTable.deleteRow(calendarTable.rows.length -1)
	}

	row = calendarTable.insertRow()
	for(i = 0; i < firstDate.getDay(); i++){
		cell = row.insertCell()
		cnt += 1
	}
	for(i = 1; i <= lastDate.getDate(); i++){
		cell = row.insertCell()
		cnt += 1

		cell.setAttribute('id', i)
		cell.innerHTML = i
		cell.style.border = '1px solid var(--gray-color-5)'
		cell.className = 'cell-date'

		if(cnt % 7 == 0){
			cell.innerHTML = i
			cell.style.color = 'blue'
			row = calendar.insertRow();
		}
		if(cnt % 7 == 1) {
			cell.innerHTML = i
			cell.style.color = 'red'
		}

		applyColorCell()
	}
	if(cnt % 7 != 0){
		for(i = 0; i < 7 - (cnt % 7); i++){
			cell = row.insertCell()
		}
	}
}
function applyColorCell(){
	let reservedCnt = 0

	loadReserveArr.forEach(function(reserve){
		if(reserve.year === today.getFullYear() && reserve.month === today.getMonth()+1 && reserve.date === i){
			reservedCnt++
		}
	})
	if(reservedCnt === maxOfReserveNum){
		cell.classList.add("back-color-com")
		cell.addEventListener('click', selectDateError)
	}else if(todayFixed.getFullYear() === today.getFullYear() && todayFixed.getMonth()+1 === today.getMonth()+1){
		if(todayFixed.getDay() === +cell.id){
			cell.classList.add("back-color-today")
			cell.addEventListener('click', selectDate)
		}else if(todayFixed.getDay() > cell.id){
			cell.classList.add("back-color-impos")
			cell.addEventListener('click', selectDateError)
		}else{
			cell.classList.add("back-color-pos")
			cell.addEventListener('click', selectDate)
		}
	}else if(todayFixed.getFullYear() === today.getFullYear() && todayFixed.getMonth()+1 > today.getMonth()+1){
		cell.classList.add("back-color-impos")
		cell.addEventListener('click', selectDateError)
	}else if(todayFixed.getFullYear() > today.getFullYear()){
		cell.classList.add("back-color-impos")
		cell.addEventListener('click', selectDateError)
	}else{
		cell.classList.add("back-color-pos")
		cell.addEventListener('click', selectDate)
	}
}
function changeBackColorClicked(e){
	const cells = document.querySelectorAll(`.${e.target.classList[0]}`)
	for(let cell of cells){
		cell.classList.remove("back-color-clicked")
	}
	e.target.classList.add("back-color-clicked")
}
function selectDate(e){
	changeBackColorClicked(e)

	selectedYear = today.getFullYear()
	selectedMonth = ( 1 + today.getMonth() )
	selectedDate = e.target.id

	showDate.innerText = selectedYear + '년 ' + selectedMonth + '월 ' + selectedDate + '일'

	selectedDate = selectedDate >= 10 ? selectedDate : '0' + selectedDate
	selectedMonth = selectedMonth >= 10 ? selectedMonth : '0' + selectedMonth
	selectedYMD = selectedYear + "-" + selectedMonth + "-" + selectedDate
	// console.log(selectedYear, selectedMonth, selectedDate, selectedYMD)

	showDate.style.display ='block'
	selectTimeBox.style.display ='none'
	timeTableWrap.style.display ='block'
	timeTableMaker(selectedMonth, selectedDate)
}
function selectDateError(){
	alert('예약이 완료된 날짜입니다.')
}

function prevCalendar(){
	today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate())
	buildCalendar()
}

function nextCalendar(){
	today = new Date(today.getFullYear(), today.getMonth()+1, today.getDate())
	buildCalendar()
}




//————time table——————
const price = "<%=price%>"

//사용자가 시간표에서 선택한 시간
var selectedFirstTime = 24*1
var selectedFinalTime = 0*1

//시간표 제작
function isReserveTime(reserve){
	// console.log(reserve.date)
	return reserve.dateTotal === selectedYMD && reserve.time === inputCellText
}

function timeTableMaker(selectedMonth, selectedDate){
	row = null
	month = selectedMonth
	date = selectedDate
	// console.log(selectedYMD)

	while(timeTable.rows.length > 0){
		timeTable.deleteRow(timeTable.rows.length-1)
	}

	for (i = 0; i < endTime - startTime; i++){
		cellTime = startTime*1 + i
		cellStartTimeText = cellTime + ":00"
		cellEndTimeText = (cellTime + 1) + ":00"
		inputCellText = cellStartTimeText + " ~ " +  cellEndTimeText
				
		row = timeTable.insertRow()
		cell = row.insertCell()
		cell.setAttribute('id', cellTime)
		cell.innerHTML = inputCellText
		cell.className = 'cell-time'

		if(loadReserveArr.find(isReserveTime)){
			cell.classList.add("back-color-com")
			cell.addEventListener('click', selectTimeError)
		}else{
			cell.classList.add("back-color-pos")
			cell.addEventListener('click', selectTime)
		}
	}
}
function selectTime(e){
	changeBackColorClicked(e)
	showDetailsModal()
	selectedTime = e.target.innerText
	console.log(selectedYear, selectedMonth, selectedDate, selectedYMD, selectedTime)
}
function selectTimeError(){
	alert('예약이 완료된 시간입니다.')
}



function showDetailsModal(){
    document.body.style.overflow = 'hidden'
	modalDetails.style.zIndex = '6'
	modalDetails.style.opacity = '1'
	detailsCheck()
}

function detailsCheck(){
	const detailsObject = {type: null, discount: [], option: [], amount: null, price: null}
	let totalPrice = 0
	let discountPrice = 0
	let optionPrice = 0
	let amountSelected = null

	for(let detailsInput of detailsInputs){
		if(detailsInput.checked){
			switch(detailsInput.name){
				case 'type':
					detailsObject.type = detailsInput.value
					typePrice = detailsType[detailsInput.value]
					break;
				case 'discount':
					detailsObject.discount.push(detailsInput.value)
					discountPrice = discountPrice + detailsDiscount[detailsInput.value]
					break;
				case 'option':
					detailsObject.option.push(detailsInput.value)
					optionPrice = optionPrice + detailsOption[detailsInput.value]
					break;
			}
		}else if(detailsInput.name === 'amount'){
			detailsObject.amount = detailsInput.valueAsNumber
			amountSelected = detailsInput.valueAsNumber
		}
	}
	totalPrice = (typePrice + discountPrice + optionPrice) * amountSelected
	detailsObject.price = totalPrice
	detailsTotal.innerText = `합계: ${totalPrice.toLocaleString()}원`
	detailsObjectCon = detailsObject
}

let detailsObjectCon = null

function selectDetails(){
	// console.log(detailsObjectCon)
	document.body.style.overflow = 'visible'
	modalDetails.style.zIndex = '-5'
	modalDetails.style.opacity = '0'
	showResultBox.style.display = 'none'
	makeTicket()
	calcTotal()
}


function makeTicket(){
	const ticketDiv = document.createElement('div')
	ticketDiv.className = "ticket-container"
	ticketDiv.innerHTML = `
		<div class="ticket-top">
			<div class="ticket-value type">${transdetailsType[detailsObjectCon.type]}</div>
			<div class="ticket-value price total">${detailsObjectCon.price.toLocaleString()} 원</div>
		</div>
		<div class="ticket-middle">
			<div>
				<div class="ticket-value type-price">${transdetailsType[detailsObjectCon.type]} <b>${detailsType[detailsObjectCon.type].toLocaleString()} 원</b></div>
				<div class="ticket-value date">${selectedYMD} (수)</div>
				<div class="ticket-value time">${selectedTime}</div>
			</div>
			<div class="ticket-value amount">${detailsObjectCon.amount} 매</div>
		</div>
		<div class="ticket-bottom">
			${makeTicketOption()}
		</div>
		<div class="ticket-btns">
			<button class="btn-ticket modify">수정</button>
			<button class="btn-ticket del">삭제</button>
		</div>
	`
	ticketBox.appendChild(ticketDiv)
}
function makeTicketOption(){
	let sample = ''
	if(detailsObjectCon.option[0]){
		detailsObjectCon.option.forEach(function(option){
			sample = sample + `<div class="ticket-value option-price">• ${transdetailsOption[option]} <b>${detailsOption[option].toLocaleString()} 원</b></div>`
		})
	}else{
		sample = `<div class="ticket-value option-price">• 추가 옵션 없음</div>`
	}
	return sample
}

let totalPrice = 0
function calcTotal(){
	totalPrice = totalPrice + detailsObjectCon.price
	totalPriceBox.innerText = `합계: ${totalPrice.toLocaleString()} 원`
}

btnDetailsCheck.addEventListener('click', selectDetails)
for(let detailsInput of detailsInputs){
	detailsInput.addEventListener('input', detailsCheck)
}






function addReserve(){
	const reservationInfo = {
		id: 1,
		name: 'lee',
		year: selectedYear,
		month: Number(selectedMonth),
		date: Number(selectedDate),
		dateTotal: selectedYMD,
		time: selectedTime
	}
	if(!localStorage.getItem('reservation')){
		localStorage.setItem('reservation', JSON.stringify([reservationInfo]))
	}else{
		var renewReserve = JSON.parse(localStorage.getItem('reservation'))
		renewReserve.push(reservationInfo)
		localStorage.setItem('reservation', JSON.stringify(renewReserve))
	}
}


// {
// 	"id": 1,
// 	"name": "lee",
// 	"year": 2024,
// 	"month": 4,
// 	"date": 3,
// 	"dateTotal": "2024-04-03",
// 	"time": "10:00 ~ 11:00",
// 	"details": [
// 		{type: "adult", discount: ["resident"], option: ["souvenir"], amount: 1, price: 25000},
// 		{type: "adult", discount: ["resident", "pass"], option: ["souvenir"], amount: 2, price: 35000},
// 		{type: "youth", discount: ["pass"], option: ["drink", "souvenir"], amount: 1, price: 2000},
// 		{type: "child", discount: null, option: null, amount: 3, price: 45000}
// 	],
// 	"totalprice": 560000
// },


btnReserve.addEventListener('click', addReserve)








