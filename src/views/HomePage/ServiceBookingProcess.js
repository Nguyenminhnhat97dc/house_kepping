import React from "react";
import { GoTasklist } from "react-icons/go";
import { AiOutlineFileProtect } from "react-icons/ai"
import { BsFillHouseDoorFill } from "react-icons/bs"
class ServiceBooking extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col">
          <h2>Quy trình đặt dịch vụ</h2>
          <div className="booking_stt pb-4">
            <div className="d-flex justify-content-start mt-2 pt-2">
                <GoTasklist className="abc" style={{ color: "#dc3545", fontSize: "1.8rem" }} />
                 Chọn dịch vụ, thời gian, địa điểm
            </div>
            <div className="d-flex justify-content-start mt-2 pt-2">
                <AiOutlineFileProtect className="abc" style={{ color: "#dc3545", fontSize: "1.8rem" }} />
                Xác nhận thông tin đặt dịch vụ
            </div>
            <div className="d-flex justify-content-start mt-2 pt-2 ">
                <BsFillHouseDoorFill className="abc" style={{ color: "#dc3545", fontSize: "1.8rem" }} />
                 Nhân viên đến làm việc tại nhà khách hàng
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceBooking;
