import React from "react";
import "../../styles/Components/Calendar.scss";
import { FcPrevious, FcNext } from "react-icons/fc";
import { connect } from "react-redux";
import { actAddDayStart } from "../../store/actions/index"
class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    const current = new Date();
    const date = current.getDate();
    const month = current.getMonth() + 1 ;
    const year = current.getFullYear();
    this.state = {
      date: date.toString(),
      month: month,
      year: year,
      getFebDays: 28,
      arrayDayOfMonth: [],
      dayOfMonth: [],
      saveIndex :[],
      saveIndexYear : [],
      saveIndexAnother : [],
      dayStart : [],
      1 :[],
      2 :[],
      3 :[],
      4 :[],
      5 :[],
      6 :[],
      7 :[],
      8 :[],
      9 :[],
      10 :[],
      11 :[],
      12 :[],
      saveAnotherYear : {
        1 :[],
        2 :[],
        3 :[],
        4 :[],
        5 :[],
        6 :[],
        7 :[],
        8 :[],
        9 :[],
        10 :[],
        11 :[],
        12 :[],
      }
    };

    this.handleOnclickShow = this.handleOnclickShow.bind(this);

    this.handleOnclickCloseShow = this.handleOnclickCloseShow.bind(this);

    this.showDayOfMonth = this.showDayOfMonth.bind(this)
    this.handleNextYear = this.handleNextYear.bind(this)
    this.handlePreviousYear = this.handlePreviousYear.bind(this)
    this.handleOnclickMonthPicker = this.handleOnclickMonthPicker.bind(this)
    this.handleOnclickYear = this.handleOnclickYear.bind(this)
    this.handleOnClickDay = this.handleOnClickDay.bind(this)
  }

  handleOnclickShow = () => {
    let month_picker = document.getElementById("month-picker");
    month_picker.classList.add("show");
  };

  handleOnclickCloseShow = (event) => {
    let month_picker = document.getElementById("month-picker");
    month_picker.classList.remove("show");
  };

  handleNextYear = () =>{
    const currentYear = document.querySelector(".year")
    const current = new Date();
    const year = current.getFullYear();
    if(parseInt(currentYear.innerText) === year ){
      this.setState({
        ...this.state,
        year : this.state.year +1
      }, function() { this.showDayOfMonth()})
    }
    const dayActives = document.querySelectorAll(".dayy")
    const currentMonth = document.querySelector(".month")
    const monthInt = parseInt(currentMonth.innerHTML.slice(6))
    
    dayActives.forEach((dayActive) =>{
      if(dayActive.className === "dayy active"){
        dayActive.className = "dayy"
        
      }})
    if(this.state.saveAnotherYear[monthInt].length > 0){
      this.state.saveAnotherYear[monthInt].forEach((index) => {
        console.log(">>>>Đếm Số",index)
        dayActives[index].className += " active"
      })
    }

  }

  handlePreviousYear = () =>{
    const currentYear = document.querySelector(".year")
    const current = new Date();
    const year = current.getFullYear();
    if(parseInt(currentYear.innerText) > year ){
      this.setState({
        ...this.state,
        year : this.state.year - 1
      }, function() { this.showDayOfMonth()})
    }
    const dayActives = document.querySelectorAll(".dayy")
    const currentMonth = document.querySelector(".month")
    const monthInt = parseInt(currentMonth.innerHTML.slice(6))
    
    dayActives.forEach((dayActive) =>{
      if(dayActive.className === "dayy active"){
        dayActive.className = "dayy"
        
      }})
    if(this.state[monthInt].length > 0){
      this.state[monthInt].forEach((index) => {
        console.log(">>>>Đếm Số",index)
        dayActives[index].className += " active"
      })
    }
  }

  handleOnClickDay = (event,value) =>{

    var name = event.target.className
    var index = parseInt(event.target.id)
    const currentMonth = document.querySelector(".month")
    const currentYear = document.querySelector(".year")
    const current = new Date();
    const date = current.getDate();
    const month = current.getMonth() + 1 ;
    const year = current.getFullYear();
    const monthInt = parseInt(currentMonth.innerHTML.slice(6))
    const yearInt = parseInt(currentYear.innerText)
    if(event.target.textContent === "0" || 
          (parseInt(event.target.textContent) < date && monthInt === month ) ||
          (monthInt < month && yearInt <= year)){
          return null
    }
    else
    {
      if (yearInt === year){
        if(name === "dayy"){
          event.target.className = "dayy active"
          let currentDayStart = " "+event.target.innerText+"/"+currentMonth.innerText.slice(6)+"/"+currentYear.innerText
          this.setState({
            ...this.state,
            dayStart : [...this.state.dayStart, currentDayStart],
            [monthInt] : [...this.state[monthInt], index],
          })
        
        }else{
          event.target.className = "dayy"
          var deleteDay = " "+event.target.innerText+"/"+currentMonth.innerText.slice(6)+"/"+currentYear.innerText
          let dayStartCurrent = this.state[monthInt].filter( item => item !== index )
          let dayStartCurrent1 = this.state.dayStart.filter( item => item !== deleteDay )
          this.setState({
            ...this.state,
            dayStart : dayStartCurrent1,
            [monthInt] : dayStartCurrent
          })
        }
      }else{
        if(name === "dayy"){
          event.target.className = "dayy active"
          let currentDayStart = " "+event.target.innerText+"/"+currentMonth.innerText.slice(6)+"/"+currentYear.innerText
          this.setState({
            ...this.state,
            dayStart : [...this.state.dayStart, currentDayStart],
            saveAnotherYear : {
              ...this.state.saveAnotherYear,
              [monthInt] : [...this.state.saveAnotherYear[monthInt], index]
            }
          })
        
        }else{
          event.target.className = "dayy"
          var deleteDay1 = " "+event.target.innerText+"/"+currentMonth.innerText.slice(6)+"/"+currentYear.innerText
          let dayStartCurrent = this.state[monthInt].filter( item => item !== index )
          let dayStartCurrent1 = this.state.dayStart.filter( item => item !== deleteDay1 )
          this.setState({
            ...this.state,
            dayStart : dayStartCurrent1,
            saveAnotherYear : {
              ...this.state.saveAnotherYear,
              [monthInt] : dayStartCurrent
            }
          })
        }
      }
    }
    
  }
  // list day of month
  
  showDayOfMonth = () => {


    function daysIn(month, year) {
      if(parseInt(month) === 2 && isLeap(year) === 1) {
        return 29;
      } else {
        switch (parseInt(month)) {
          case 1:
            return 31;
          case 2:
            return 28;
          case 3:
            return 31;
          case 4: return 30;
          case 5: return 31;
          case 6: return 30;
          case 7: return 31;
          case 8: return 31;
          case 9: return 30;
          case 10: return 31;
          case 11: return 30;
          case 12: return 31;     
          default: return 31;    
        }
        
      }
      
    }
    function isLeap(year) {
      if ((year % 4 !==  0 ) || ((year % 100 === 0))) return 0;
      else return 1;
   }

    function calendar(month, year) {
      let first_day = new Date(year, month-1, 1)
      let startIndex = first_day.getDay()
      startIndex === 0 ? startIndex = 6 : startIndex = startIndex - 1
      var endIndex = daysIn(month, year);
      var result = Array.apply(0, Array(42)).map(function(){ return 0; });
      for (var i = startIndex; i < endIndex + startIndex; i++) {
          result[i] = (i - startIndex) + 1;
      }
      return result;     
    }

    this.setState({
      ...[this.props],
      dayOfMonth: calendar( this.state.month, this.state.year)
    }
    )
    
  } 

  // end list day of month

  handleOnclickMonthPicker = (event) => {
    //const dayActive = document.querySelectorAll(".dayy.active")
    const dayActives = document.querySelectorAll(".dayy")
    const currentMonth = document.querySelector(".month")
    const currentYear = document.querySelector(".year")
    const monthInt = parseInt(currentMonth.innerHTML.slice(6))
    const yearInt = parseInt(currentYear.innerText)
    const current = new Date();
    const year = current.getFullYear();
    dayActives.forEach((dayActive) =>{
      if(dayActive.className === "dayy active"){
        dayActive.className = "dayy"
        /* arrIndexMonthAnother.push(index)
        this.setState({
          ...this.state,
          [monthInt] : arrIndexMonthAnother
        }) */
      }})
    if (yearInt === year){
        if(this.state[monthInt].length > 0){
          this.state[monthInt].forEach((index) => {
            console.log(">>>>Đếm Số",index)
            dayActives[index].className += " active"
          })
        }
    }else{
      if(this.state.saveAnotherYear[monthInt].length > 0){
        this.state.saveAnotherYear[monthInt].forEach((index) => {
          console.log(">>>>Đếm Số",index)
          dayActives[index].className += " active"
        })
      }
    }
  }
  handleOnclickYear = (value) =>{
    const dayActives = document.querySelectorAll(".dayy")
    const current = new Date();
    const year = current.getFullYear();
    console.log(typeof(value),typeof(year))
    //let arrIndex = []
    if(year !== value){
      dayActives.forEach((dayActive,index) =>{
        if(dayActive.className === "dayy active"){
          //arrIndex.push(index)
          //console.log(arrIndex)
          this.setState({
            ...this.state,
            saveIndexYear : [...this.state.saveIndexYear, index]
          })
          dayActive.className = "dayy"
        }
      })
      if(this.state.saveIndexAnother.length > 0){
        this.state.saveIndexAnother.forEach((index) => {
          console.log(">>>>Đếm Số",index)
          dayActives[index].className += " active"
        })
      }
    }
    
    if(year === value && this.state.saveIndex.length > 0){
      this.state.saveIndexYear.forEach((index) => {
        dayActives[index].className = "dayy active"
      })
      if(this.state.saveIndexAnother.length > 0){
        this.state.saveIndexAnother.forEach((index) => {
          dayActives[index].className = "dayy"
        })
      }
    }
  }
  componentDidMount() {

    // calendar algorithm
    this.showDayOfMonth()

    ///// End calendar algorithm
   
  }

  
  componentDidUpdate() { 
    this.props.addDayStart(this.state.dayStart)
    // Change Month
    const $$ = document.querySelectorAll.bind(document);
    const monthOfYears = $$(".month-select");
    
    let month_picker = document.getElementById("month-picker");
    monthOfYears.forEach((monthOfYear, index) => { 
      monthOfYear.onclick = function () {
        month_picker.classList.remove("show");
        changeMonth(monthOfYear.innerText.slice(6));
      };
    });

    const changeMonth = (xyz) => {
      this.setState({
        ...[this.props],
        month: xyz,
      },
      function() { this.showDayOfMonth()}
      )
    };

    // End Change Month

    // Change year
    /* const year_changes = document.querySelectorAll(".year-change");
    const curentYear = document.querySelector(".year");
    year_changes.forEach((year_change, index) => {
      year_change.onclick = function () {
        changeYear(curentYear.innerText.slice(0), index);    
      };
    });
    const changeYear = (value, type) => {
      if (type === 1) {
        this.setState({
          ...[this.props],
          year: parseInt(value) + 1,
        },
          function() { this.showDayOfMonth()}
        )
      } else {
        this.setState({
          ...[this.props],
          year: parseInt(value) - 1,
        },
          function() { this.showDayOfMonth()}
        )
      }
    }; */
    // End change year

/*  const dayActives = document.querySelectorAll(".dayy")
    const currentMonth = document.querySelector(".month")
    const current = new Date();
    const month = current.getMonth() + 1 ;
    if(parseInt(currentMonth.innerHTML.slice(6)) > month){
      dayActives.forEach((dayActive,index) =>{
        dayActive.onclick = () =>{
          if(dayActive.className === "dayy"){
            dayActive.className = "dayy active"
            this.setState({
              ...this.state,
              saveIndexAnother : [...this.state.saveIndexAnother, index]
            })
          }else{
            let newIndex = this.state.saveIndexAnother
             newIndex = newIndex.filter(item => item !== index)
             this.setState({
               ...this.state,
               saveIndexAnother : newIndex
             })
          }
        }
      })
    } */

  }

  /* shouldComponentUpdate(nextProps, nextState) {
    if (this.state.year !== nextState.year || this.state.month !== nextState.month ||
       this.state.dayOfMonth !== nextState.dayOfMonth) {
      return true; 
    }
    return false;
  } */


  render() {
    var dayOfMonth = [];
    for (var i = 0; i < this.state.dayOfMonth.length; i++) {
      dayOfMonth.push(
        <div className="dayy" key={i} id={i} onClick={(event)=> this.handleOnClickDay(event)}>
          {this.state.dayOfMonth[i]}
        </div>
      );
    }
    

    return (
      <div className="calendar-wrapper">
        <div className="calendar">
          <div className="calendar-header">
            <div className="month" onClick={() => this.handleOnclickShow()}>
              Tháng {this.state.month}
            </div>
            <div className="year">
              <FcPrevious className="year-change" onClick={this.handlePreviousYear}/>
              {this.state.year}
              <FcNext className="year-change" onClick={this.handleNextYear}/>
            </div>
          </div>
          <div className="calendar-body">
            <div className="calendar-week-day">
              
              <div>Thứ 2</div>
              <div>Thứ 3</div>
              <div>Thứ 4</div>
              <div>Thứ 5</div>
              <div>Thứ 6</div>
              <div>Thứ 7</div>
              <div>Chủ Nhật</div>
              
            </div>
            <div className="calendar-day">{dayOfMonth}</div>
          </div>
          <div className="month-list" id="month-picker">
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 1</div>
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 2</div>
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 3</div>
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 4</div>
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 5</div>
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 6</div>
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 7</div>
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 8</div>
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 9</div>
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 10</div>
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 11</div>
            <div className="month-select" onClick={ (event) => this.handleOnclickMonthPicker(event) }>Tháng 12</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    dayStart : state.dayStart
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      addDayStart : (dayStart) =>{
        dispatch(actAddDayStart(dayStart))
      },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Calendar);
