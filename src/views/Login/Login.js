import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/HomePage/Login.scss"
import { BsFacebook } from "react-icons/bs"
import { AiFillGoogleCircle } from "react-icons/ai"
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
          link: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeValueUser = this.handleChangeValueUser.bind(this)
        this.handleChangeValuePassword = this.handleChangeValuePassword.bind(this)
      }

    handleSubmit(event) {
        if (this.state.typeUserInDataBase.length > 0 ) {
            this.state.typeUserInDataBase[0].type === "staff" ? localStorage.setItem("links" , "staffInformation") : localStorage.setItem("links", "customerInformation")
        } else {
            alert(" Sai tài khoản hoặc mật khẩu ") 
        }

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
        console.log(">>>>>Link",this.state.link)
        return (
            <div className="body-login">
                <form className="form-login" >
                    <h2 className="text-center py-3">Đăng Nhập</h2>
                    <input type="text" placeholder="Địa Chỉ Email" value={this.state.typeUserCurrent.user}  onChange={ (event) =>this.handleChangeValueUser(event) }/>
                    <input type="password" placeholder="Mật khẩu" value={this.state.typeUserCurrent.password} onChange={ this.handleChangeValuePassword }/>
                    <div>
                        <NavLink  to="">Quên Mật khẩu</NavLink>
                        <NavLink  to="" style={ { float:"right"} } className="float-right">Đăng ký</NavLink>
                    </div>
                    <NavLink type="button" to="/checkLogin" className="btn btn-danger btn-login" onClick={ this.handleSubmit } >Đăng Nhập</NavLink>
                    <div className="or"><i>Or</i></div>
                    <span> <BsFacebook  className="fa-facebook"/> </span>
                    <span> <AiFillGoogleCircle  className="fa-google-plus"/></span>
                </form>
            </div>
        )
    }
}

export default Login