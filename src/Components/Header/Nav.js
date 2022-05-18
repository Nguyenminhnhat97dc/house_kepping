import React, { Component } from "react";
import "../../styles/HomePage/Nav.scss";
import { NavLink,Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai"
import { nhapChu, nhapSo } from "../../Components/Function";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";
import {actFetchProvider} from "../../store/actions/index"
class Nav extends Component {
  constructor(props) {
      super(props)
      this.state = {
        isLoggedIn: false,
        Name :"",
        CCCD: "",
        Address: "",
        Phone: "",
      }

      this.handleOpenProfile = this.handleOpenProfile.bind(this)
      this.handleOnclickClose = this.handleOnclickClose.bind(this)
      this.handleLogOut = this.handleLogOut.bind(this)
      this.handleOnchangeInformation = this.handleOnchangeInformation.bind(this)
      this.handleUpdateInformation = this.handleUpdateInformation.bind(this)
  }

  handleOpenProfile = (name) => {
    const check =  document.getElementById(name)
    if (check.style.display === "block"){
      check.style.display = "none"
    }else {
      check.style.display = "block"
    }
  }

  handleOnclickClose = (name) => {
    document.getElementById(name).style.display = "none"
  }

 async componentDidMount() {
    document.onclick = function(e){
      if(e.target.id !== "wrapper-profile" && e.target.id !== "toggle" && e.target.id !== "chinbSua" && e.target.id !== "close-icon"){
        document.getElementById("wrapper-profile").style.display = "none"
      }
    }
    callApi('provider/id','POST',{Id : parseInt(localStorage.getItem("ProviderID"))}).then(res =>{
      this.setState({
        ...[this.state],
        Name : res.data.result.Name,
        CCCD :"abc",
        Address: res.data.result.Address,
        Phone: res.data.result.Phone
      })
    })
    this.setState({
      isLoggedIn : this.props.isloggin,
    })
  }
  handleLogOut = () => {
    localStorage.removeItem("loggin")
    localStorage.removeItem("ProviderID")
    this.props.handleLogOut()
  }
  handleOnchangeInformation = (event) =>{
    const value = event.target.value
    this.setState({
      ...this.state,
      [event.target.name] : value
    })
  }

  handleUpdateInformation = (event) =>{

  }
  render() {

    let navVigation
    if (this.state.isLoggedIn === true|| localStorage.getItem("loggin") ) {
      navVigation = (
        <div className="topnav">
          <div className="container-wrapper-image ">
            <div className="wrapper-image">
              <img src={require("../../assets/Images/avatar.jpg")} alt="avatar" className="img"  id="toggle"  onClick={
                () => this.handleOpenProfile("wrapper-profile")
              }/>
            </div>
          </div>
        </div>
      )
    }
    else {
      navVigation= (
        <div className="topnav">
          <NavLink to="/" className="active">
              Home
            </NavLink>
            <NavLink to="/introduce">Giới thiệu</NavLink>
            <div className="drop">
              <NavLink to="/services">Dịch vụ</NavLink>
              {/* <div className="dropdown-content">
                <NavLink to="">Link 1</NavLink>
                <NavLink to="">Link 2</NavLink>
                <NavLink to="">Link 3</NavLink>
              </div> */}
            </div>
            <Link className="login" to="/login">Đăng nhập</Link>
        </div>
      )
    }
    return (
      <>
        {navVigation}
        <div className="wrapper-profile" id="wrapper-profile">
          <div className="profile">
            <img src={require("../../assets/Images/avatar.jpg")} alt="avatar" />
          </div>
          <div className="profile">
            <div className="profile-head">Họ tên: {this.state.Name}</div>
            <div className="profile-head">CCCD:{this.state.CCCD}</div>
            <div className="profile-head">Địa chỉ liên hệ: {this.state.Address}</div>
            <div className="profile-head">Số điện thoại: {this.state.Phone}</div>
          </div>
          <div className="wrapper-setting-profile">
            <button className="setting-profile" onClick={ () => this.handleOpenProfile("table-chinhSua") } id="chinbSua"> Chỉnh Sữa </button>
            <button className="setting-profile"onClick={this.handleLogOut}>Đăng xuất</button>
          </div>
          <div>
            
          </div>
        </div>
        <div className="table-chinhSua" id="table-chinhSua">
          <div className="chinhSua">
            <AiOutlineCloseCircle
              className="close-icon"
              id="close-icon"
              onClick={ () => this.handleOnclickClose("table-chinhSua")}
            />
            <form className="form-information">
              <label>Họ Tên:</label>
              <input  type="text" value={this.state.Name} name="Name" onChange={this.handleOnchangeInformation} onKeyPress={ (event) => nhapChu(event) }/>
              <label>Địa chỉ:</label>
              <input type="text" value={this.state.Address} name="Address"onChange={this.handleOnchangeInformation}/>
              <label>Căn cước công dân:</label>
              <input type="text"value={this.state.CCCD} name="CCCD"  maxLength="12"onChange={this.handleOnchangeInformation} onKeyPress={ (event) => nhapSo(event) }/>
              <label>Số điện thoại:</label>
              <input type="text" value={this.state.Phone} name="Phone" maxLength="11"onChange={this.handleOnchangeInformation} onKeyPress={ (event) => nhapSo(event) }/>
              <label>Giới thiệu:</label>
              <textarea className="mt-3" rows="5"></textarea>
            </form>
            <button className="btn btn-danger">Lưu</button>
          </div>
        </div>
      </>
    );
  }
} 
const mapStateToProps = state => {
  return {
    providers : state.result
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchProvider : (ID) =>{
      dispatch(actFetchProvider(ID))
    },
    fetchUpdateProvider: () =>{
      
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav)
