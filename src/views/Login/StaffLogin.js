import React, { Fragment } from "react";
import "../../styles/StaffInformation/staffInformation.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TableJob from "../../Components/Table";
import Nav from "../../Components/Header/Nav";
import callApi from "../../utils/apiCaller";
import { connect } from "react-redux";
import { nhapSo } from "../../Components/Function";
import { ToastContainer, toast } from 'react-toastify';
import { actFetchRequirementCustomer, actFetchServices } from "../../store/actions/index"
class StaffLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "active",
      date: "",
      headTableJob: {
        head: [ "Loại công việc","Ngày bắt đầu","Giờ bắt đầu","Họ tên khách Hàng","Địa chỉ","Nhận việc"],
        body: []
      },
      headrLisstJob: {
        head: [ "STT","Loại công việc","Trạng thái","Ngày bắt đầu","Giờ bắt đầu" ,"Xem"/*,"Địa chỉ","Số điện thoại" */],
        body: []
      },
      history :{
        head: [ "STT","Loại công việc","Trạng thái","Ngày bắt đầu","Giờ bắt đầu","Ngày kết thúc","Chi Tiết"/* "Giờ kết thúc","Họ tên khách Hàng","Địa chỉ","Số điện thoại","Sự cố" */],
        body: []
      },
      checkTable : "requirementCustomer",
      Price : "",
      nameServices : "",
      notify : "null",
      countPagination : null,
      servicesOfProvider : []
    };

    this.handleOnclickOpen = this.handleOnclickOpen.bind(this);
    this.hanleChangeDate = this.hanleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleActive1 = this.handleActive1.bind(this);
    this.handleActive2 = this.handleActive2.bind(this);
    this.handleOnclickClose = this.handleOnclickClose.bind(this)
    this.handleActiveAdd = this.handleActiveAdd.bind(this)
    this.handleOnchangePrice = this.handleOnchangePrice.bind(this)
    this.handleOnclickADD = this.handleOnclickADD.bind(this)
    this.notifySuccess = this.notifySuccess.bind(this)
    this.notifyFail = this.notifyFail.bind(this)
    this.handleOnclickPagination = this.handleOnclickPagination.bind(this)
    this.handleDeleteService = this.handleDeleteService.bind(this)
  }

  handleOnclickOpen = (name) => {
    const table = document.getElementById(name);
    table.style.display = "block";
  };
  hanleChangeDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.date);
    if (this.state.date === "") {
      alert("Vui lòng chọn ngày");
    }
  };

  handleOnclickClose = (name) => {
    document.getElementById(name).style.display = "none"
  }
  handleActive1 = () => {
    document.getElementById("button-job2").classList.remove("active-button")
    document.getElementById("button-job1").classList.add("active-button")
    this.setState({
      ...[this.state],
      checkTable : "requirementCustomer"
    })
  }

   handleActive2 = () => {
    document.getElementById("button-job1").classList.remove("active-button")
    document.getElementById("button-job2").classList.add("active-button")
    this.setState({
      ...[this.state],
      checkTable : "todoList"
    })
  }

  handleActiveAdd = (event) =>{
    const check = document.querySelector(".addPrice.active")
    if (check != null){
      check.className = "addPrice"
    }
    event.target.className += " active"
    this.setState({
      ...[this.state],
      nameServices : event.target.textContent
    })
  }

  handleOnchangePrice = (value) =>{
    this.setState({
      ...[this.state],
      Price : value
    })
  }
  handleOnclickADD = () =>{
    callApi("addprice","POST",{ Id: parseInt(localStorage.getItem("ProviderID")), NameServices : this.state.nameServices, Price : parseInt(this.state.Price) }).then(res =>{
       if(res.data.result === "True" || res.data.result === "Update thành công"){
          this.setState({
            ...[this.state]
          })
          this.notifySuccess()
       }else{
        this.setState({
          ...[this.state]
        })
        this.notifySuccess()
       }
    })
  }

  notifySuccess = () => toast("Thành công!", {
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

  handleOnclickPagination = (event) =>{
    var start = 6 * (parseInt(event.target.textContent)-1)
    alert(start)
    callApi("requirementcustomer","POST",{ PaginationStart : start, PaginationEnd : 6 }).then(res =>{
      try {
        if(res.data.result != null){
          this.setState({
            ...this.state,
            headTableJob:{
              head : this.state.headTableJob.head,
              body: res.data.result
            },
          })
        }else{
          alert("Rỗng")
        }
        this.props.fetrequirementCustomer(res.data.result)
      } catch (error) {
        alert(error)
      }
    })
  }

  handleDeleteService = (value) =>{
    callApi("deleteservices","POST",{ ProviderId : parseInt(localStorage.getItem("ProviderID")), ServicesId : value }).then(res=>{
      try {
        if(res.data.result === "True"){
          this.notifySuccess()
        }
      } catch (error) {
        alert(error)
      }
    })
  }
  async componentDidMount() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");

    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");
    //const addPrice = $$(".addPrice")
    requestIdleCallback(function () {
      line.style.left = tabActive.offsetLeft + "px";
      line.style.width = tabActive.offsetWidth + "px";
    });

    tabs.forEach((tab, index) => {
      const pane = panes[index];
      tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
      };
    });
     
    /* addPrice.forEach((item,index) =>{

    }) */

    // call API việc cần làm
    await callApi("todolist","POST",{ Id : localStorage.getItem("ProviderID"), Status : 0 }).then(res=>{
      try {
        this.setState({
          ...this.state,
          headrLisstJob:{
            head : this.state.headrLisstJob.head,
            body: res.data.result
          }
        })
      } catch (error) {
        alert(error)
      }
    })
    // call API nhận việc
    await callApi("requirementcustomer","POST",{ PaginationStart : 0, PaginationEnd : 6 }).then(res =>{
      try {
        this.setState({
          ...this.state,
          headTableJob:{
            head : this.state.headTableJob.head,
            body: res.data.result
          },
        })
        this.props.fetrequirementCustomer(res.data.result)
      } catch (error) {
        alert(error)
      }
    })
    // call API lịch sử cộng việc
    await callApi("todolist","POST",{ Id : localStorage.getItem("ProviderID"), Status : 1 }).then(res=>{
      try {
        this.setState({
          ...this.state,
          history:{
            head : this.state.headrLisstJob.head,
            body: res.data.result
          }
        })
      } catch (error) {
        alert(error)
      }
    })
    // call API danh sách dịch vục
    await callApi("services","GET").then(res =>{
      try {
        if(res.data.result !== null || res.data.result !== "False"){
          this.props.fetServices(res.data.result)
        }
      } catch (error) {
        alert(error)
      }
    })
    // call API pagination
    await callApi("pagination","POST",{Status : 0}).then(res =>{
      try {
        if(res.data.result !==null){
          this.setState({
            ...this.state,
            countPagination : res.data.result.Count
          })
        }else{
          alert("Faillllllllllllllllll")
        }
      } catch (error) {
        alert(error)
      }
    })
    await callApi("provider/services","POST", { Id : localStorage.getItem("ProviderID") }).then(res=>{
      try {
        if(res.data.result !== null){
          this.setState({
            ...this.state,
            servicesOfProvider : res.data.result
          })
        }
      } catch (error) {
        alert(error)
      }
    })

  }


  render() {
    //let checkTodoList
    let pagination1
    let pagination2
    let calPagination
    var showPagination = []
    if(this.state.countPagination !== null){
      calPagination = Math.ceil(this.state.countPagination/6)
      for(var i = 2; i<= calPagination; i++){
        showPagination.push(
          <div key={i} onClick={this.handleOnclickPagination}>{i}</div>
        )
        if(i === 6){
          break
        }
      }
    }
    let tableShow
    if(this.state.checkTable === "requirementCustomer"){
      tableShow = (<>
        <div className="tablejob-1" id="tablejob-1"> <TableJob typeTable={"requirementcustomer"} addTableHead={ this.state.headTableJob.head} addTableBody={ this.state.headTableJob.body} /></div>
        <div className="center">
          <div className="pagination">
              <div>&laquo;</div>
              <div className="active" onClick={this.handleOnclickPagination}>1</div>
              {showPagination}
              <div >&raquo;</div>
          </div>
        </div>
      </>)
    }
    if(this.state.checkTable === "todoList"){
      console.log(">>>>>>>headLisstJob",this.state.headrLisstJob.body[0])
      if(typeof(this.state.headrLisstJob.body[0]) !== 'string' ){
        tableShow = (
          <div className="tablejob-2" id="tablejob-2"> <TableJob typeTable={"todoList"} addTableHead={ this.state.headrLisstJob.head} addTableBody = { this.state.headrLisstJob.body }/></div>
        )
        pagination1 = (
          <div className="pagination">
            <div >&laquo;</div>
            <div className="active" onClick={this.handleOnclickPagination}>1</div>
            {showPagination}
            <div >&raquo;</div>
          </div>
        )
      }else{
        tableShow = (
          <div className="tablejob-2" id="tablejob-2">
            <h2>Bạn không có việc cần làm</h2>
          </div>
        )
      }
    }
    let checkHistory
    if(typeof(this.state.history.body[0]) !== 'string'){
      checkHistory =(
        <div className="history-table" id=""> <TableJob typeTable={"history"} addTableHead={ this.state.history.head} addTableBody={ this.state.history.body} /></div>
      )
      pagination2 = (
        <div className="pagination">
          <div >&laquo;</div>
          <div className="active" onClick={this.handleOnclickPagination}>1</div>
          {showPagination}
          <div >&raquo;</div>
        </div>
      )
    }else{
      checkHistory= (
        <div className="history-table" id="">
            <h2>Bạn không có lịch sử công việc</h2>
        </div>
      )
    }
    var showServices = []
    console.log(typeof(this.props.services))
    if(typeof(this.props.services) != "undefined"){
      console.log(this.props.services)
      this.props.services.map((item,index) => (
        showServices.push(
          <div key={index}>
            <div className="addPrice" onClick={(event)=> this.handleActiveAdd(event)}>{item.NameServices}</div>
          </div>
        )
      ))
    }


    return (
      <> 
        <Nav isloggin = {this.props.isloggin} handleLogOut={this.props.handleLogOut}/>
        <div className="Body-Home">
          <div className="container p-4">
            <div>
              <div className="tabs">
                <div className="tab-item active">
                  <i className="tab-icon fas fa-code"></i>
                  Thực hiện công việc           
                </div>
                <div className="tab-item">
                  <i className="tab-icon fas fa-cog"></i>
                  Lịch sử công việc
                </div>
                <div className="tab-item">
                  <i className="tab-icon fas fa-plus-circle"></i>
                  Danh sách công việc             
                </div>
                <div className="tab-item">
                  <i className="tab-icon fas fa-plus-circle"></i>
                  Giới thiệu
                </div>
                <div className="line"></div>
              </div>
              <div className="tab-content">

              <div className="tab-pane active">
                  <h2>Thực hiện công việc</h2>
                  <div className="table-job ">
                      <div className="wrapper-button-job">
                        <div className="button-job" id="button-job1" onClick={ () => this.handleActive1()}>List nhận việc</div>
                        <div className="button-job" id="button-job2" onClick={ () => this.handleActive2()}>List công việc cần làm</div>
                      </div>
                      <div className="wrapper-tablejob">
                        {/* <div className="tablejob-1" id="tablejob-1"> <TableJob typeTable={"requirementcustomer"} addTableHead={ this.state.headTableJob.head} addTableBody={ this.state.headTableJob.body} /></div>
                        {checkTodoList} */}
                        {tableShow}
                      </div>
                      <div className="center">
                          {pagination1}
                      </div>
                  </div>
                </div>
                <div className="tab-pane">
                  <h2>Lịch sử công việc</h2>
                  <div className="history-job ">
                    <div className="history-wrapper">
                      {checkHistory}
                    </div>
                    <div className="center">
                         {pagination2}

                      </div>
                  </div>
                </div>
                <div className="tab-pane">
                  <h2>Danh sách công việc</h2>
                  <div className="table-custom align-middle pt-3">
                    <div className="btn btn-danger addition" onClick={() => this.handleOnclickOpen("container-add-job")}>Thêm</div>
                    {this.state.servicesOfProvider.map((item,index) =>(
                      <Fragment key={index}>
                        <div className="wrapper-table">
                          <div className="col">{item.NameServices}</div>
                          <div className="col">{item.Price} VNĐ</div>
                          <div className="col">
                            <button className="btn btn-danger" onClick={() => this.handleDeleteService(item.ServicesId)}>Xóa</button>
                          </div>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div className="tab-pane ">
                  <h2>Giới Thiệu</h2>
                  <div className="col-12">
                    <p>
                      React makes it painless to create interactive UIs. Design
                      simple views for each state in your application, and React
                      will efficiently update and render just the right
                      components when your data changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-add-job" id="container-add-job">
          <div className="wrapper-add-job">
            <AiOutlineCloseCircle className="icon" onClick={ () => this.handleOnclickClose("container-add-job")}/>
            <div className="add-job">
              {showServices}
              <div className="hola">
                <input  
                  value={this.state.Price}
                  onKeyPress = {(event) => nhapSo(event)}
                  onChange={ (event) => this.handleOnchangePrice(event.target.value)}
                  placeholder="Nhập giá tiền" className="Price"/>
                <button className="Add" onClick={this.handleOnclickADD}>Thêm</button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
              />
        {/* <div className="container-report-problem" id="container-report-problem">
              <div className="wrapper-report-problem">
                <AiOutlineCloseCircle className="icon" onClick={ () => this.handleOnclickClose("container-report-problem")}/>
                <h6 >Vui lòng nhập sự cố gặp phải trong quá trình làm việc</h6>
                <textarea rows="14" cols="60"></textarea>
                <button>Lưu</button>
              </div>
        </div> */}    
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    services : state.services
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      fetrequirementCustomer : (requirementCustomer) =>{
        dispatch(actFetchRequirementCustomer(requirementCustomer))
      },
      fetServices : (services) =>{
        dispatch(actFetchServices(services))
      }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(StaffLogin);
