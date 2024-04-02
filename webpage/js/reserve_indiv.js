const calendarTable = document.getElementById("calendar")
const calendarTableTitle = document.getElementById("calendarTitle")
const selectTimeBox = document.getElementById('select-time-box')
const timeTable = document.getElementById("timetable")
const timeTableWrap = document.getElementById("timetable-wrap")
const btnReserve = document.querySelector('.btn.reserve')
const showDate = document.getElementById('show-date')


const saveReserveArr = []
let loadReserveArr = []
if(JSON.parse(localStorage.getItem('reservation'))){
	loadReserveArr = JSON.parse(localStorage.getItem('reservation'))
}
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
		cell.style.backgroundColor = 'var(--state-color-error)'
		cell.addEventListener('click', selectDateError)
	}else if(todayFixed.getFullYear() === today.getFullYear() && todayFixed.getMonth()+1 === today.getMonth()+1){
		if(todayFixed.getDay() === +cell.id){
			cell.style.backgroundColor = 'var(--gray-color-2)'
			cell.style.color = 'white'
			cell.addEventListener('click', selectDate)
		}else if(todayFixed.getDay() > cell.id){
			cell.style.backgroundColor = 'var(--gray-color-4)'
			cell.addEventListener('click', selectDateError)
		}else{
			cell.style.backgroundColor = 'var(--state-color-success)'
			cell.addEventListener('click', selectDate)
		}
	}else if(todayFixed.getFullYear() === today.getFullYear() && todayFixed.getMonth()+1 > today.getMonth()+1){
		cell.style.backgroundColor = 'var(--gray-color-4)'
		cell.addEventListener('click', selectDateError)
	}else if(todayFixed.getFullYear() > today.getFullYear()){
		cell.style.backgroundColor = 'var(--gray-color-4)'
		cell.addEventListener('click', selectDateError)
	}else{
		cell.style.backgroundColor = 'var(--state-color-success)'
		cell.addEventListener('click', selectDate)
	}
}

function selectDate(e){
	const cellDates = calendarTable.querySelectorAll('.cell-date')
	for(let cellDate of cellDates){
		// console.log(cellDate)
		cellDate.classList.remove("change-back-color")
	}

	e.target.classList.add("change-back-color")

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

		if(loadReserveArr.find(isReserveTime)){
			cell.style.backgroundColor = 'var(--state-color-error)'
			cell.addEventListener('click', selectTimeError)
		}else{
			cell.style.backgroundColor = 'var(--state-color-success)'
			cell.addEventListener('click', selectTime)
		}
	}
}
function selectTime(e){
	selectedTime = e.target.innerText
	console.log(selectedYear, selectedMonth, selectedDate, selectedYMD, selectedTime)
}
function selectTimeError(){
	alert('예약이 완료된 시간입니다.')
}


function addReserve(){
	const reservationInfo = {id: 1, name: 'lee', year: selectedYear, month: Number(selectedMonth), date: Number(selectedDate), dateTotal: selectedYMD, time: selectedTime}
	if(!localStorage.getItem('reservation')){
		localStorage.setItem('reservation', JSON.stringify([reservationInfo]))
	}else{
		var renewReserve = JSON.parse(localStorage.getItem('reservation'))
		renewReserve.push(reservationInfo)
		localStorage.setItem('reservation', JSON.stringify(renewReserve))
	}
}


btnReserve.addEventListener('click', addReserve)