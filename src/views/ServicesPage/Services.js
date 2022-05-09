import { Component, React } from "react";
import { connect } from "react-redux";
import "../../styles/Servicespage/All.scss";
import DataServices from "../../assets/Data/Services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiCalendar } from "react-icons/bi"
import { AiOutlineCloseCircle } from "react-icons/ai"
//import StarRating from "../../Components/StarRating/StarRating";
//import DataStaff from "../../assets/Data/Staff";
//import { NavLink } from "react-router-dom";
import Nav from "../../Components/Header/Nav";
import Calendar from "../../Components/Calendar/Calendar ";
class Services extends Component {
  constructor(props){
    super(props);
    this.state = {
      tooglebutton : 'true',
      listjob: []
    }
  }
    
    handleOnclickSelect = (event) =>{
      var count = 0
      for ( var i = 0 ; i< this.state.listjob.length; i++) {
        if( this.state.listjob[i]  === event.target.textContent) {
          count ++
          event.target.className = "select"
        } 
      }
      console.log(count)
      if(count === 0 ){
        this.setState({ ...[this.props], listjob: [...this.state.listjob, event.target.textContent] })
        event.target.className += " active"
      } else {
        let currentListjob = this.state.listjob
        currentListjob = currentListjob.filter( item => item !== event.target.textContent);
        console.log(">>>>",currentListjob)
        this.setState({ ...[this.props], listjob: currentListjob})
      }
      
      console.log(event.target.className)
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

  render() {
    const notify = () => toast("Wow so easy!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,

    });
    return (
      <>
      <Nav />
      <div className="Body-Home1">
        <div className="container p-4 ">
          <div className="selected-wrapper">
            { this.state.listjob.length > 0 ? 
              this.state.listjob.map((item,index) => {
                return (
                  <div className="selected" key={index}> {item}</div>
                )
              }) :
              <div> Vui lòng chọn dịch vụ </div>  
          }
          </div>
          <div className="row mt-5">
            <div className="col-md-3">
              <div className="select-warrper p-2 d-flex">
                {DataServices.map((item) => {
                  return (
                    <div className="col-md-6 col-xs-3"  key={item.id}>
                        <div className="select" 
                          onClick={(event) => this.handleOnclickSelect(event)}>{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          
            <div className="col-md-9">
                <div className="information-customer-wrapper">
                  <div className="information-customer-header">
                    Vui lòng nhập đầy đủ thông tin bên dưới
                  </div>
                  <div className="information-customer-body">
                    <form>
                      <input placeholder="Họ Tên" />
                      <input placeholder="Địa chỉ"/>
                      <input placeholder="Số Điện Thoại"/>
                      <span>
                        <input placeholder="Ngày" value="" className="date" disabled/>
                        <BiCalendar className="icon" onClick={() => this.handleOnclickOpenCalendar()} />
                      </span>
                      <div className="calendarr-wrapper" id="calendar">
                        <div className="calendarr">
                          <Calendar />
                          <AiOutlineCloseCircle className="icon" id="icon" onClick={ this.handleOnClickCloseCalendar }/>
                        </div>
                      </div>
                      <input type="time" placeholder="Giờ"/>
                    </form>
                  </div>
                  <div className="information-customer-footer">
                    <button onClick={notify}>Gửi!</button>
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
  };
};

export default connect(mapStateToProps)(Services);
