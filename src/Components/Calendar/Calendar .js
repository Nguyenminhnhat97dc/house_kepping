import React from "react";
import "../../styles/Components/Calendar.scss";
import { FcPrevious, FcNext } from "react-icons/fc";
class Calendar extends React.Component {
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
    };

    this.handleOnclickShow = this.handleOnclickShow.bind(this);

    this.handleOnclickCloseShow = this.handleOnclickCloseShow.bind(this);

    this.showDayOfMonth = this.showDayOfMonth.bind(this)

    this.handleChange = this.handleChange.bind(this)
  }

  handleOnclickShow = () => {
    let month_picker = document.getElementById("month-picker");
    month_picker.classList.add("show");
  };

  handleOnclickCloseShow = (event) => {
    let month_picker = document.getElementById("month-picker");
    month_picker.classList.remove("show");
  };

  handleChange() {
    // Update component state whenever the data source changes

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



  componentDidMount() {
    console.log(">>>RunDisMount")
    // calendar algorithm
    this.showDayOfMonth()

    ///// End calendar algorithm
   
  }

  
  componentDidUpdate() {   
    console.log(">>>>>Run DidUpdate")
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
    const year_changes = document.querySelectorAll(".year-change");
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
    };
    // End change year

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.year !== nextState.year || this.state.month !== nextState.month ||
       this.state.dayOfMonth !== nextState.dayOfMonth) {
      return true; 
    }
    return false;
  }


  render() {
    var dayOfMonth = [];
    for (var i = 0; i < this.state.dayOfMonth.length; i++) {
      dayOfMonth.push(
        <div className="dayy" key={i}>
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
            <div className="year" >
              <FcPrevious className="year-change" />
              {this.state.year}
              <FcNext className="year-change" />
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
            <div className="month-select">Tháng 1</div>
            <div className="month-select">Tháng 2</div>
            <div className="month-select">Tháng 3</div>
            <div className="month-select">Tháng 4</div>
            <div className="month-select">Tháng 5</div>
            <div className="month-select">Tháng 6</div>
            <div className="month-select">Tháng 7</div>
            <div className="month-select">Tháng 8</div>
            <div className="month-select">Tháng 9</div>
            <div className="month-select">Tháng 10</div>
            <div className="month-select">Tháng 11</div>
            <div className="month-select">Tháng 12</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
