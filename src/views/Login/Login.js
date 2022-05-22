import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/HomePage/Login.scss"
import { BsFacebook } from "react-icons/bs"
import { AiFillGoogleCircle } from "react-icons/ai"
import callApi from "../../utils/apiCaller";
import StaffLogin from "./StaffLogin";
//import {actFetchProvider} from "../../store/actions/index"
import { connect } from "react-redux";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          typeUserInDataBase: [
           {
              user : "user",
              password: "user",
              type: "staff"
           }
          ],
          typeUserCurrent: {
              user : "",
              password: "",
          },
          Profile :[],
          isloggin : false
        }
        this.handleLoggin = this.handleLoggin.bind(this);
        this.handleChangeValueUser = this.handleChangeValueUser.bind(this)
        this.handleChangeValuePassword = this.handleChangeValuePassword.bind(this)
      }

    handleLoggin() {
       callApi('loggin', 'POST', this.state.typeUserCurrent).then(res =>{
           console.log(res.data)
            if(res.data.result !== "False") {
                this.setState({
                    ...[this.state],
                    isloggin : true
                })
                //this.props.fetchProvider(res.data)
                console.log(">>>>>>>ID",res.data.result.ProviderID)
                localStorage.setItem("ProviderID", res.data.result.ProviderID)
                localStorage.setItem("loggin","true")
            }else {
                alert('Sai tài khoản hoặc mật khẩu')
            }
        }).catch(err => alert(err))
    }
    handleLogOut = () => {
        this.setState({
            ...[this.state],
            isloggin : false
        })
    }
    handleChangeValueUser(event) {
        this.setState({ 
            ...[this.props],
            typeUserCurrent:{
                ...this.state.typeUserCurrent,
                user: event.target.value
            }
         })
    }
    handleChangeValuePassword(event) {
        this.setState({ 
            ...[this.props],
            typeUserCurrent:{
                ...this.state.typeUserCurrent,
                password: event.target.value
            }
         })
    }
    render() {
        return (
            <>
            {this.state.isloggin || localStorage.getItem("loggin")?
            <StaffLogin isloggin = {this.state.isloggin} handleLogOut={this.handleLogOut}/>:
            <div className="body-login">
                <form className="form-login">
                    <h2 className="text-center py-3">Đăng Nhập</h2>
                    <input className="false" type="text" placeholder="Địa Chỉ Email" value={this.state.typeUserCurrent.user}  onChange={ (event) =>this.handleChangeValueUser(event) }/>
                    <input type="password" placeholder="Mật khẩu" value={this.state.typeUserCurrent.password} onChange={ this.handleChangeValuePassword }/>
                    <div>
                        <NavLink  to="">Quên Mật khẩu</NavLink>
                        <NavLink  to="" style={ { float:"right"} } className="float-right">Đăng ký</NavLink>
                    </div>
                    <button type="button" to="/checkLogin" className="btn btn-danger btn-login" onClick={ this.handleLoggin}>Đăng Nhập</button>
                    <div className="or"><i>Or</i></div>
                    <span> <BsFacebook  className="fa-facebook"/> </span>
                    <span> <AiFillGoogleCircle  className="fa-google-plus"/></span>
                </form>
            </div>
            }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      provider : state.user
    }
  }

/* const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProvider : (providers) => {
           dispatch(actFetchProvider(providers))
        }
    }
} */

export default connect(mapStateToProps,null)(Login)