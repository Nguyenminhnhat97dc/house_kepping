import React from "react";
import "../../styles/StaffInformation/staffInformation.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TableJob from "../../Components/Table";
import Nav from "../../Components/Header/Nav";
import callApi from "../../utils/apiCaller";
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
        head: [ "STT","Loại công việc","Trạng thái","Ngày bắt đầu","Giờ bắt đầu"/* ,"Họ tên khách Hàng","Địa chỉ","Số điện thoại" */],
        body: []
      },
      listJob:[
        {
          id:1,
          name: "Làu nhà"
        },
        {
          id:2,
          name: "Rửa chén"
        },
        {
          id:3,
          name: "Giặt đồ"
        },
        {
          id:4,
          name: "Chăm sóc cây"
        },
        {
          id:5,
          name: "Quét nhà"
        },
        {
          id:6,
          name: "Đánh bóng"
        },
      ],
      history :{
        head: [ "STT","Loại công việc","Giá tiền","Trạng thái","Ngày bắt đầu","Giờ bắt đầu","Ngày kết thúc","Giờ kết thúc","Họ tên khách Hàng","Địa chỉ","Số điện thoại","Sự cố"],
        body: [
          [ "CV01","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh A","Cam Rang - Khánh Hòa - Việt Nam","0975661107" ],
          [ "CV02","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh B","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV03","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh C","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV04","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh D","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV05","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh E","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV06","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh F","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV07","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh F","Cam Ranh - Khánh Hòa","0975661107" ],
        ]
      },
      
    };

    this.handleOnclickOpen = this.handleOnclickOpen.bind(this);
    this.hanleChangeDate = this.hanleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleActive1 = this.handleActive1.bind(this);
    this.handleActive2 = this.handleActive2.bind(this);
    this.handleOnclickClose = this.handleOnclickClose.bind(this)
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
    const active1 = document.getElementById("tablejob-1")
    const active2 = document.getElementById("tablejob-2")
    active1.style.display = "block"
    active2.style.display = "none"
    document.getElementById("button-job2").classList.remove("active-button")
    document.getElementById("button-job1").classList.add("active-button")
  }

  handleActive2 = () => {
    const active1 = document.getElementById("tablejob-1")
    const active2 = document.getElementById("tablejob-2")
    if(active1 && active2){
      active1.style.display = "none"
      active2.style.display = "block"
    }
    document.getElementById("button-job1").classList.remove("active-button")
    document.getElementById("button-job2").classList.add("active-button")
  
  }
  async componentDidMount() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");

    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");
    const myTable = $("#myTable")
    const tableclick = $$("table tbody tr")
    tableclick.forEach((item,index) => {
      item.ondblclick = function(){
        console.log(myTable.rows[index+1].cells[index].innerHTML)
      };
    })
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
    // call API nhận việc
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
    // call API việc cần làm
    await callApi("requirementcustomer","GET",null).then(res =>{
      try {
        this.setState({
          ...this.state,
          headTableJob:{
            head : this.state.headTableJob.head,
            body: res.data.result
          },
        })
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
  }
  render() {
    let checkTodoList
    let pagination1
    let pagination2
    console.log(">>>>>>>>>.Body",typeof(this.state.headrLisstJob.body[0]))
    if(typeof(this.state.headrLisstJob.body[0]) !== 'string' ){
      checkTodoList = (
        <div className="tablejob-2" id="tablejob-2"> <TableJob typeTable={"todoList"} addTableHead={ this.state.headrLisstJob.head} addTableBody = { this.state.headrLisstJob.body }/></div>
      )
      pagination1 = (
        <div className="pagination">
          <div >&laquo;</div>
          <div className="active" >1</div>
          <div >2</div>
          <div >3</div>
          <div >4</div>
          <div >5</div>
          <div >6</div>
          <div >&raquo;</div>
        </div>
      )
    }else{
      checkTodoList = (
        <div className="tablejob-2" id="tablejob-2">
          <h2>Bạn không có việc cần làm</h2>
        </div>
      )
    }
    let checkHistory
    if(typeof(this.state.history.body[0]) !== 'string'){
      checkHistory =(
        <div className="history-table" id=""> <TableJob addTableHead={ this.state.history.head} addTableBody={ this.state.history.body} /></div>
      )
      pagination2 = (
        <div className="pagination">
          <div >&laquo;</div>
          <div className="active" >1</div>
          <div >2</div>
          <div >3</div>
          <div >4</div>
          <div >5</div>
          <div >6</div>
          <div >&raquo;</div>
        </div>
      )
    }else{
      checkHistory= 
      <div className="history-table" id="">
          <h2>Bạn không có lịch sử công việc</h2>
      </div>
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
                        <div className="tablejob-1" id="tablejob-1"> <TableJob typeTable={"requirementcustomer"} addTableHead={ this.state.headTableJob.head} addTableBody={ this.state.headTableJob.body} /></div>
                        {checkTodoList}
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
                    <div className="wrapper-table">
                      <div className="col">Lau nhà</div>
                      <div className="col">500.000 VNĐ</div>
                      <div className="col">
                        <button
                          className="btn btn-danger"
                          
                        >
                          Xóa
                        </button>
                      </div>
                    </div>

                    <div className="wrapper-table">
                      <div className="col">Lau nhà</div>
                      <div className="col">500.000 VNĐ</div>
                      <div className="col">
                        <button className="btn btn-danger">Xóa</button>
                      </div>
                    </div>

                    <div className="wrapper-table">
                      <div className="col">Lau nhà</div>
                      <div className="col">500.000 VNĐ</div>
                      <div className="col">
                        <button className="btn btn-danger">Xóa</button>
                      </div>
                    </div>
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
              <div><div>Lau nhà</div></div>
              <div><div>Lau nhà</div></div>
              <div><div>Lau nhà</div></div>
              <div><div>Lau nhà</div></div>
              <div><div>Lau nhà</div></div>
              <div><div>Lau nhà</div></div>
            </div>
          </div>
        </div>
        <div className="container-report-problem" id="container-report-problem">
              <div className="wrapper-report-problem">
                <AiOutlineCloseCircle className="icon" onClick={ () => this.handleOnclickClose("container-report-problem")}/>
                <h6 >Vui lòng nhập sự cố gặp phải trong quá trình làm việc</h6>
                <textarea rows="14" cols="60"></textarea>
                <button>Lưu</button>
              </div>
        </div>

        <div className="form-container" id="form-container">
            <div className="form-wrapper">
              <div className="form-header">
                  <div className="label">Thông tin chi tiết</div>
                  <AiOutlineCloseCircle className="icon" onClick={()=> this.handleOnclickClose("form-container")}/>
                  <div className="content">
                    <div>Họ Tên: Nguyễn Minh Nhật</div>
                    <div>Địa chỉ: Cam Ranh Khánh Hòa</div>
                    <div>Số điện thoại: 0975661107</div>
                    <div>Ngày Thuê: 18/5/2022, 19/5/2022, 20/5,2022</div>
                    <div>Giờ bắt đầu: 10:00</div>
                    <div> Các dịch vụ cần</div>
                    <table className="table table-striped" id="myTable">
                      <thead>
                        <tr>
                          <th>Tên dịch vụ</th>
                          <th>Giá tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Lau nhà</td>
                          <td>500000&nbsp;VNĐ</td>
                        </tr>
                        <tr>
                          <td>Lau nhà</td>
                          <td>500000&nbsp;VNĐ</td>
                        </tr>
                        <tr>
                          <td>Lau nhà</td>
                          <td>500000&nbsp;VNĐ</td>
                        </tr>
                        
                      </tbody>
                    </table>
                    <button className="nhanviec">Nhận việc</button>
                  </div>
              </div>
            </div>
        </div>
      </>
    )
  }
}

export default StaffLogin;
