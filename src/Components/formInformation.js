import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai"
import callApi from "../utils/apiCaller";
import {  toast } from 'react-toastify';
class FormInformation extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          typeForm : "",
          content : {},
          nameServices : [],
          priceServices : {}
        }

        this.handleOnclickClose = this.handleOnclickClose.bind(this)   
        this.handleOnclickReceive = this.handleOnclickReceive.bind(this)
        this.notifySuccess = this.notifySuccess.bind(this)
        this.notifyFail = this.notifyFail.bind(this)
        this.handleOnclickAccept = this.handleOnclickAccept.bind(this)
    }

    handleOnclickClose = (name) => {
      const check = document.querySelectorAll("#form-container")
      if(check[1])
        check[1].style.display = "none"
      document.getElementById(name).style.display = "none"
    }

    handleOnclickReceive = () =>{
      callApi("addtodolist","POST",{ ProviderId : parseInt(localStorage.getItem("ProviderID")), RequirementsCustomerId : this.state.content.Id }).then(res =>{
        try {
          if(res.data.result === "True"){
            const check = document.querySelectorAll("#form-container")
            if(check.length > 1){
              check[0].style.display = "none"
              check[1].style.display = "none"
            }
            this.notifySuccess()
          }else{
            this.notifyFail()
          }
        } catch (error) {
          alert(error)
        }
      })
    }

    handleOnclickAccept = ()=>{
      callApi("update_todolist","POST",{ ProviderId : parseInt(localStorage.getItem("ProviderID")), RequirementCustomerId : this.state.content.Id }).then(res =>{
        try {
          if(res.data.result === "True"){
            this.notifySuccess()
            const check = document.querySelectorAll("#form-container")
            if(check.length > 0){
              check[0].style.display = "none"
              check[1].style.display = "none"
            }
            document.getElementById("form-container").style.display = "none"
          }else{
            this.notifyFail()
          }
        } catch (error) {
          alert(error)
        }
      })
    }

    notifySuccess = () => toast("Thành công", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
  
    });
  
    notifyFail = () => toast("Nhận việc thất bại", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
  
    });

    componentDidMount(){
      callApi("priceservices","POST",{ Id : localStorage.getItem("ProviderID") }).then(res=>{
        try {
          if(res.data.result != null){
            this.setState({
              ...this.state,
              priceServices : res.data.result
            })
          }
        } catch (error) {
          alert(error)
        }
      })
    }

    shouldComponentUpdate(nextState) {
      if ( this.state.typeForm !== nextState.typeForm || 
           this.state.content !== nextState.content
         ) {
        return true; // re-render
      }
    
      return false;
    }
    componentDidUpdate(){
      if(typeof(this.props.content) !== "undefined"){
        //console.log(">>>>>>>>>",this.props.content)
        var mystring = this.props.content.NameServices
        this.setState({
          typeForm : this.props.typeForm,
          content : this.props.content,
          nameServices : [...mystring.split(", ")]
        })
      }
    }
    render(){
      let headerTable
      let informationTable
      let information
      let showButton
      if(this.state.typeForm === "requirementcustomer" && typeof(this.props.content) !== "undefined"){
        information = (
          <>
            <div>Họ Tên: {this.state.content.NameCustomer}</div>
            <div>Địa chỉ: {this.state.content.AddressCustomer}</div>
            <div>Số điện thoại: {this.state.content.PhoneCustomer}</div>
            <div>Ngày bắt đầu: {this.state.content.DayStart}</div>
            <div>Giờ bắt đầu: {this.state.content.TimeStart}</div>
            <div> Các dịch vụ cần</div>
          </>
        )
        showButton = (
          <button className="nhanviec" onClick={this.handleOnclickReceive}>Nhận việc</button>
        )
      }else{
        if(typeof(this.props.content)  === "undefined"){
          information = (
            <h3>Công việc đã được người khác nhận!!!</h3>
          )
        }
      }
      if(this.props.typeForm === "todoList" && typeof(this.props.content) !== "undefined"){
        information = (
          <>
            <div>Họ Tên: {this.props.content.NameCustomer}</div>
            <div>Địa chỉ: {this.props.content.AddressCustomer}</div>
            <div>Số điện thoại: {this.props.content.PhoneCustomer}</div>
            <div>Ngày bắt đầu: {this.props.content.DayStart}</div>
            <div>Giờ bắt đầu: {this.props.content.TimeStart}</div>
            <div>Trạng thái: {this.props.content.Status === "0" ?  "Chưa Hoàn thành" : "Hoàn Thành"}</div>
            <div>Danh sách dịch vụ</div>
          </>
        )
        showButton = (
          <button className="nhanviec" onClick={this.handleOnclickAccept}>Hoàn thành</button>
        )
      }
      if(this.props.typeForm === "history" && typeof(this.props.content) !== "undefined"  ){
        information = (
          <>
            <div>Họ Tên: {this.props.content.NameCustomer}</div>
            <div>Địa chỉ: {this.props.content.AddressCustomer}</div>
            <div>Số điện thoại: {this.props.content.PhoneCustomer}</div>
            <div>Ngày bắt đầu: {this.props.content.DayStart}</div>
            <div>Giờ bắt đầu: {this.props.content.TimeStart}</div>
            <div>Ngày kết thúc:{this.props.content.DayEnd} </div>
            <div>Trạng thái: {this.props.content.Status === "0" ?  "Chưa Hoàn thành" : "Hoàn Thành"}</div>
            <div>Danh sách dịch vụ</div>
          </>
        )
      }
      if((this.state.typeForm === "requirementcustomer" && typeof(this.props.content) !== "undefined") ||
        (this.props.typeForm === "todoList" && typeof(this.props.content) !== "undefined") ||
      (this.props.typeForm === "history" && typeof(this.props.content) !== "undefined")
      ){
        let price = this.state.priceServices
        //console.log(">>Dịch vụ chưa có giá",this.state.nameServices)
        if(Object.values(price).length > 0){
          this.state.nameServices.map( async(item) => {
            return (
              price = await price.filter( itemm => itemm.NameServices !== item)
            )
          })
        }  
        let newPrice = this.state.priceServices
        //console.log(">>>",price)
        if(Object.values(price).length > 0){
          price.map( async(item) => {
            return (
              newPrice = await newPrice.filter( itemm => itemm.NameServices !== item.NameServices)
            )
          })
        }
        //console.log("dịch vụ đã có giá",newPrice)
        if(Object.values(newPrice).length > 0){
          headerTable =(
            <thead>
              <tr>
                <th>Tên dịch vụ</th>
                <th>Giá tiền</th>
              </tr>
            </thead>
          )
          informationTable = (
            newPrice.map( (item,index) => (
              <tr key={index}>
                <td>{item.NameServices}</td>
                <td>{item.Price} VNĐ</td>
              </tr>
          )))
        }
        /* newPrice.length !== 0 ? 
        informationTable = (
          newPrice.map( (item,index) => (
            <tr key={index}>
              <td>{item.NameServices}</td>
              <td>{item.Price}</td>
            </tr>
        )))
        : informationTable = null */
      }
        return(
          <>
            <div className="form-container" id="form-container">
              <div className="form-wrapper">
                <div className="form-header">
                    <div className="label">Thông tin chi tiết</div>
                    <AiOutlineCloseCircle className="icon" onClick={()=> this.handleOnclickClose("form-container")}/>
                    <div className="content">
                      {information}
                      <table className="table table-striped" id="myTable">
                        {headerTable}
                        <tbody>
                          {informationTable}        
                        </tbody>
                      </table>
                      {showButton}
                    </div>
                </div>
              </div>
            </div>
            {/* <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
              /> */}
          </>
            
        )
    }
}


export default FormInformation