import React from "react";
import "../../styles/StaffInformation/staffInformation.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TableJob from "../../Components/Table";
import { nhapChu, nhapSo } from "../../Components/Function";

class StaffLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "active",
      date: "",
      headTableJob: {
        head: [ "Loại công việc","Giá tiền","Ngày bắt đầu","Giờ bắt đầu","Nhận việc"],
        body: [
          [ "Lau nhà","500.000","dd/MM/yyyy","00:00"],
          [ "Lau nhà","500.000","dd/MM/yyyy","00:00"],
          [ "Lau nhà","500.000","dd/MM/yyyy","00:00"],
          [ "Lau nhà","500.000","dd/MM/yyyy","00:00"],
          [ "Lau nhà","500.000","dd/MM/yyyy","00:00"],
          [ "Lau nhà","500.000","dd/MM/yyyy","00:00"]

        ]
      },
      headrLisstJob: {
        head: [ "Mã Công việc","Loại công việc","Giá tiền","Trạng thái","Ngày bắt đầu","Giờ bắt đầu","Họ tên khách Hàng","Địa chỉ","Số điện thoại","Sự cố" ],
        body: [
          [ "CV01","Lau nhà","500.000","Chưa hoàn thành","dd/MM/yyyy","00:00","Nguyễn Minh A","Cam Rang - Khánh Hòa - Việt Nam","0975661107" ],
          [ "CV02","Lau nhà","500.000","Chưa hoàn thành","dd/MM/yyyy","00:00","Nguyễn Minh B","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV03","Lau nhà","500.000","Chưa hoàn thành","dd/MM/yyyy","00:00","Nguyễn Minh C","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV04","Lau nhà","500.000","Chưa hoàn thành","dd/MM/yyyy","00:00","Nguyễn Minh D","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV05","Lau nhà","500.000","Chưa hoàn thành","dd/MM/yyyy","00:00","Nguyễn Minh E","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV06","Lau nhà","500.000","Chưa hoàn thành","dd/MM/yyyy","00:00","Nguyễn Minh F","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV07","Lau nhà","500.000","Chưa hoàn thành","dd/MM/yyyy","00:00","Nguyễn Minh ","Cam Ranh - Khánh Hòa","0975661107" ],    
        ]
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
        head: [ "Mã Công việc","Loại công việc","Giá tiền","Trạng thái","Ngày bắt đầu","Giờ bắt đầu","Ngày kết thúc","Giờ kết thúc","Họ tên khách Hàng","Địa chỉ","Số điện thoại","Sự cố"],
        body: [
          [ "CV01","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh A","Cam Rang - Khánh Hòa - Việt Nam","0975661107" ],
          [ "CV02","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh B","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV03","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh C","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV04","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh D","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV05","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh E","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV06","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh F","Cam Ranh - Khánh Hòa","0975661107" ],
          [ "CV07","Lau nhà","500.000","Hoàn thành","dd/MM/yyyy","00:00","dd/MM/yyy","00:00","Nguyễn Minh D","Cam Ranh - Khánh Hòa","0975661107" ],    
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
  }

  handleActive2 = () => {
    const active1 = document.getElementById("tablejob-1")
    const active2 = document.getElementById("tablejob-2")
    active1.style.display = "none"
    active2.style.display = "block"
  
  }
  componentDidMount() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");

    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");

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
  }

  render() {
    return (
      <>
        <div className="Body-Home">
          <div className="container p-4">
            <h5 className="mb-5">Thông tin cá nhân</h5>
            <div className="information-wrapper">
              <img src="" alt="Avarta " />
              <div className="information">
                <div>Họ Tên</div>
                <div className="mt-3">Căn cước công dân</div>
                <div className="mt-3">Địa chỉ</div>
                <div className="mt-3">Số điện thoại liên hệ</div>
                <div className="mt-3">Đánh giá</div>
              </div>
            </div>
            <button className="btn-custom" onClick={() => this.handleOnclickOpen("table-chinhSua")}>
              {" "}
              Chỉnh Sữa
            </button>
            <div>
              <div className="tabs">
                <div className="tab-item active">
                  <i className="tab-icon fas fa-code"></i>
                  Giới thiệu
                </div>
                <div className="tab-item">
                  <i className="tab-icon fas fa-cog"></i>
                  Danh sách công việc
                </div>
                <div className="tab-item">
                  <i className="tab-icon fas fa-plus-circle"></i>
                  Thực hiện công việc
                </div>
                <div className="tab-item">
                  <i className="tab-icon fas fa-plus-circle"></i>
                  Lịch sử công việc
                </div>
                <div className="line"></div>
              </div>

              <div className="tab-content">
                <div className="tab-pane active">
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
                  <h2>Thực hiện công việc</h2>
                  <div className="table-job ">
                      <div className="wrapper-button-job">
                        <div className="button-job"  onClick={ () => this.handleActive1()}>List nhận việc</div>
                        <div className="button-job"onClick={ () => this.handleActive2()}>List công việc cần làm</div>
                      </div>
                      <div className="wrapper-tablejob">
                        <div className="tablejob-1" id="tablejob-1"> <TableJob addTableHead={ this.state.headTableJob.head} addTableBody={ this.state.headTableJob.body} /> </div>
                        <div className="tablejob-2" id="tablejob-2"> <TableJob addTableHead={ this.state.headrLisstJob.head} addTableBody = { this.state.headrLisstJob.body }/> </div>
                      </div>
                  </div>
                </div>
                <div className="tab-pane">
                  <h2>Lịch sử công việc</h2>
                  <div className="history-job ">
                    <div className="history-table" id=""> <TableJob addTableHead={ this.state.history.head} addTableBody={ this.state.history.body} /> </div>
                  </div>
                </div>
              </div>
            </div>
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
              <input  type="text" onKeyPress={ (event) => nhapChu(event) }/>
              <label>Địa chỉ:</label>
              <input type="text" />
              <label>Căn cước công dân:</label>
              <input type="text" maxLength="12" onKeyPress={ (event) => nhapSo(event) }/>
              <label>Số điện thoại:</label>
              <input type="text" maxLength="11" onKeyPress={ (event) => nhapSo(event) }/>
              <label>Giới thiệu:</label>
              <textarea className="mt-3" rows="5"></textarea>
            </form>
            <button className="btn btn-danger">Lưu</button>
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
      </>
    );
  }
}

export default StaffLogin;
