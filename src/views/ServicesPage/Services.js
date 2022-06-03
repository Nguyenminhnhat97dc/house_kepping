import {  PureComponent, React } from "react";
import { connect } from "react-redux";
import "../../styles/Servicespage/All.scss";
//import DataServices from "../../assets/Data/Services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiCalendar } from "react-icons/bi"
import { AiOutlineCloseCircle } from "react-icons/ai"
//import StarRating from "../../Components/StarRating/StarRating";
//import DataStaff from "../../assets/Data/Staff";
//import { NavLink } from "react-router-dom";
import Nav from "../../Components/Header/Nav";
import Calendar from "../../Components/Calendar/Calendar ";
import callApi from "../../utils/apiCaller";
import { nhapChu, nhapSo } from "../../Components/Function";
class Services extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      tooglebutton : 'true',
      ListServices :[],
      informationCustomer:{
        nameCustomer : "",
        addressCustomer : "",
        phoneCustomer : "",
        listjob: [],
        dayStart : "",
        timeStart : ""
      }
    }
    this.handleOnClickAddRequirement = this.handleOnClickAddRequirement.bind(this)
    this.notifySuccess = this.notifySuccess.bind(this)
    this.notifyFail = this.notifyFail.bind(this)
  }
    
    handleOnclickSelect = (event) =>{
      var count = 0
      for ( var i = 0 ; i< this.state.informationCustomer.listjob.length; i++) {
        if( this.state.informationCustomer.listjob[i]  === event.target.textContent) {
          count ++
          event.target.className = "select"
        } 
      }
      
      if(count === 0 ){
        this.setState({ ...[this.state],
          informationCustomer :{
            ...this.state.informationCustomer,
            listjob: [...this.state.informationCustomer.listjob, event.target.textContent]
          }
          })
        event.target.className += " active"
      } else {
        let currentListjob = this.state.informationCustomer.listjob
        currentListjob = currentListjob.filter( item => item !== event.target.textContent);
        
        //this.setState({ ...[this.state], listjob: currentListjob})
        this.setState({ ...[this.state],
          informationCustomer :{
            ...this.state.informationCustomer,
            listjob: currentListjob
          }
          })
      }
    
    }

    handleOnclickDelete = () => {
        alert('đã xóa');
    }

    handleOncickDropdown = () => {
        var abc = document.getElementById("abc")
        if(this.state.tooglebutton === 'true') {
            abc.style.display = "block"
            this.setState( { tooglebutton: "false" })
        } else {
            abc.style.display = "none"
            this.setState( { tooglebutton: "true" })
        }
    }

    handleOnclickOpenCalendar = () => {
      document.getElementById("calendar").style.display = "block"
    }

    handleOnClickCloseCalendar = () => {
      document.getElementById("calendar").style.display = "none"
    }

    handleOnChangeInformation = (event) =>{
      const value = event.target.value
      if( event.target.name !== "dayStart"){
        this.setState({
        ...this.state,
        informationCustomer:{
          ...this.state.informationCustomer,
          [event.target.name] : value
        }})
      }
    }

    handleOnClickAddRequirement = () =>{
      if(this.state.informationCustomer.listjob.length > 0 && this.state.informationCustomer.addessCustomer !== "" && this.props.dayStart !==""
      && this.state.informationCustomer.nameCustomer !=="" && this.state.informationCustomer.phoneCustomer !=="" && this.state.informationCustomer.timeStart !==""){
        let nameServices = this.state.informationCustomer.listjob
        let dayStart = this.props.dayStart
        let services = ""
        for ( var i = 0; i< nameServices.length; i++){
          services = services + ", " + nameServices[i]
        }
        let daystart = ""
        for ( i = 0; i< dayStart.length; i++){
          daystart = daystart + "," + dayStart[i]
        }
        callApi("requirement","POST",{
        Name : this.state.informationCustomer.nameCustomer,
        Address : this.state.informationCustomer.addressCustomer,
        Phone : this.state.informationCustomer.phoneCustomer,
        NameServices : services.slice(2),
        DayStart  : daystart.slice(2),
        TimeStart : this.state.informationCustomer.timeStart
        }).then(res =>{
          this.notifySuccess()
          document.getElementById("Information").style.color = "black"
        })
      }else{
        this.notifyFail()
        if(this.state.informationCustomer.listjob.length === 0){
          document.getElementById("Services").style.color = "red"
        }
        if( this.state.informationCustomer.addessCustomer === "" || this.state.informationCustomer.dayStart === ""
        || this.state.informationCustomer.nameCustomer === "" || this.state.informationCustomer.phoneCustomer === "" || this.state.informationCustomer.timeStart === ""){
          document.getElementById("Information").style.color = "red"
      }
    }
    
  }
  notifySuccess = () => toast("Gửi yêu cầu thành công...!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,

  });

  notifyFail = () => toast.error("Vui lòng thử lại", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,

  });
    componentDidMount(){
      // Call API List Services
      callApi("services","GET").then(res =>{
        if(res.data.result !== null || res.data.result !== "False"){
          this.setState({
            ...this.state,
            ListServices : res.data.result
          })
        }
      })
    }
    componentDidUpdate(){
      
    // Activeclass current Day

/*     const dayActives = document.querySelectorAll(".dayy")
    const currentMonth = document.querySelector(".month")
    const currentYear = document.querySelector(".year")
    const current = new Date();
    const date = current.getDate();
    const month = current.getMonth() + 1 ;
    const year = current.getFullYear(); */
    //const removeActive = document.querySelectorAll(".dayy.active") 
/*     dayActives.forEach((dayActive) => {
      
      dayActive.onclick = () => {
        console.log(dayActive.className)
        if(dayActive.textContent === "0" || 
          (parseInt(dayActive.textContent) < date && parseInt(currentMonth.innerHTML.slice(6)) === month ) ||
          parseInt(currentMonth.innerHTML.slice(6)) < month){
          return null
        }else{
          if(dayActive.className === "dayy active"){
            dayActive.className = " dayy";
            var deleteDay = " "+dayActive.innerHTML+"/"+currentMonth.innerText.slice(6)+"/"+currentYear.innerText
            console.log(deleteDay)
            console.log(this.state.informationCustomer.dayStart)
            let dayStartCurrent = this.state.informationCustomer.dayStart.filter( item => item !== deleteDay )
            console.log(dayStartCurrent)
            this.setState({
              ...this.state,
              informationCustomer:{
                ...this.state.informationCustomer,
                dayStart : dayStartCurrent
              }
            })
          }else{
            dayActive.className += " active";
            this.setState({
              ...this.state,
              informationCustomer:{
                ...this.state.informationCustomer,
                dayStart : [...this.state.informationCustomer.dayStart, " "+dayActive.innerHTML+"/"+currentMonth.innerText.slice(6)+"/"+currentYear.innerText]
              }
            })
          }
        }
        
      }
    }); */

    // End ActiveClass currentDay
    }
  render() {
    return (
      <>
      <Nav />
      <div className="Body-Home1">
        <div className="container p-4 ">
          <div className="selected-wrapper">
            { this.state.informationCustomer.listjob.length > 0 ? 
              this.state.informationCustomer.listjob.map((item,index) => {
                return (
                  <div className="selected" key={index}> {item}</div>
                )
              }) :
              <h2 id="Services" style={ {color: "black"} }> Vui lòng chọn dịch vụ </h2>  
          }
          </div>
          <div className="row mt-5">
            <div className="col-md-3">
              <div className="select-warrper p-2 d-flex">
                {this.state.ListServices.map((item,index) => {
                  return (
                    <div className="col-md-6 col-xs-3"  key={index}>
                        <div className="select" 
                          onClick={(event) => this.handleOnclickSelect(event)}>{item.NameServices}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          
            <div className="col-md-9">
                <div className="information-customer-wrapper">
                  <div className="information-customer-header" id="Information">
                    Vui lòng nhập đầy đủ thông tin bên dưới
                  </div>
                  <div className="information-customer-body">
                    <form >
                      <input placeholder="Họ Tên" name="nameCustomer" 
                        onKeyPress={ event => nhapChu(event)}
                        value={this.state.informationCustomer.nameCustomer} 
                        onChange={ (event)=> this.handleOnChangeInformation(event)}/>
                      <input placeholder="Địa chỉ" name="addressCustomer"  value={this.state.informationCustomer.addressCustomer} onChange={ (event)=> this.handleOnChangeInformation(event)}/>
                      <input placeholder="Số Điện Thoại" name="phoneCustomer" 
                        onKeyPress={ (event) =>  nhapSo(event)}
                        value={this.state.informationCustomer.phoneCustomer} 
                        onChange={ (event)=> this.handleOnChangeInformation(event)}/>
                      <span>
                        <input placeholder="Ngày/tháng/năm, ngày/tháng/năm ..." name="dayStart" value={this.props.dayStart} className="date" disabled onChange={ (event)=> this.handleOnChangeInformation(event)}/>
                        <BiCalendar className="icon" onClick={() => this.handleOnclickOpenCalendar()} />
                      </span>
                      <div className="calendarr-wrapper" id="calendar">
                        <div className="calendarr">
                          <Calendar />
                          <AiOutlineCloseCircle className="icon" id="icon" onClick={ this.handleOnClickCloseCalendar }/>
                        </div>
                      </div>
                      <input type="time" name="timeStart" value={this.state.informationCustomer.timeStart} placeholder="Giờ" onChange={ (event)=> this.handleOnChangeInformation(event)}/>
                    </form>
                  </div>
                  <div className="information-customer-footer">
                    <button className="sendd" onClick={this.handleOnClickAddRequirement}>Gửi!</button>
                    <ToastContainer
                      position="top-center"
                      autoClose={1000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover={false}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

// Lấy data từ redux
const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
    dayStart : state.dayStart
  };
};

export default connect(mapStateToProps)(Services);
