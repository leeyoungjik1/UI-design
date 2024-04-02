//————time table——————
var price = "<%=price%>";
var startTime = "<%=startTime%>";
var endTime = "<%=endTime%>";
//사용자가 시간표에서 선택한 시간
var selectedFirstTime = 24*1;
var selectedFinalTime = 0*1;

timeTableMaker(4, 2)
//시간표 제작
function timeTableMaker(selectedMonth, selectedDate){
    row = null
	month = selectedMonth;
	date = selectedDate;
	var timeTable = document.getElementById("timeTable");

    while(timeTable.rows.length > 0){
        timeTable.deleteRow(timeTable.rows.length-1);
    }

    for (i = 0; i < endTime - startTime; i++){
        cellTime = startTime*1 + i;
        cellStartTimeText = cellTime + ":00";
        cellEndTimeText = (cellTime + 1) + ":00";
        inputCellText = cellStartTimeText + " ~ " +  cellEndTimeText;
                
        row = timeTable.insertRow();
        cell = row.insertCell();
        cell.setAttribute('id', cellTime);
        cell.innerHTML = inputCellText;
    }
};
//시간표 초기화
function tableinit(){

};
//시간표 및 예약시간과 결제시간을 초기화
// function selectedTimeAndTotalPriceInit(){…};