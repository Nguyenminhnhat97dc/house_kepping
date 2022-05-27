import { Component, React } from "react";
import ImageImport from "../../Components/Image/Image";
import  "../../styles/Introduce/Introduce.scss";
import Nav from "../../Components/Header/Nav";
class Introduce extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="Body-Home">
        <div className="container p-4">
          <h3 style={{color :"rgb(97, 218, 251)"}} className="mb-5">Công Ty TNHH Dịch Vụ Giáo Dục ABC - Tên thương hiệu: ABCXYZ </h3>
          <div className="row mt-4">
            <div className="col-md-7 col-sm-12" style={{ fontSize:'19px' }}>
              GiupViecTot.vn (giúp việc tốt) với 05 năm trong lĩnh vực dịch vụ
              giúp việc theo giờ & vệ sinh công nghiệp và hơn 08 năm kinh nghiệm
              trong lĩnh vực giáo dục đã tạo ra giá trị xã hội từ các loại dịch
              vụ mang lại.
              <br />
              <br />

               Giúp đỡ, tạo việc làm ổn định cho hơn 600 chị em phụ
              nữ có thu nhập ở mức khá, được tham gia đầy đủ các loại bảo hiểm
              xã hội, y tế, thất nghiệp… <br /> <br />

              Giúp đỡ, giải phóng phụ nữ làm việc
              ngoài xã hội với cường độ cao khỏi gánh nặng công việc trong gia
              đình, có nhiều thời gian hơn dành cho sự nghiệp, học hành, nghỉ
              ngơi, giải trí… <br /> <br />

              Giúp đỡ các Công ty vừa và nhỏ có nơi làm việc
              sạch sẽ, gọn gàng, thơm mát, thông thoáng và sáng bóng.<br /> <br />

              Cám ơn,cám ơn, cám ơn khách hàng đã sử dụng dịch vụ. GiupViecTot.vn BIẾT
              ƠN khách hàng là người trực tiếp cùng với GiupViecTot.vn tạo ra
              việc làm cho chị em phụ nữ làm nghề giúp việc.<br /> <br /><br /> <br />
              
              GiupViecTot BIẾT ƠN cán bộ nhân viên đã gắn bó lâu dài và cùng nhau vượt lên mỗi ngày
              để thành công trong suốt nhiều năm qua. Nhờ điều đó GiupViecTot.vn
              mạnh mẽ hơn, yêu thương và biết ơn hơn.
            </div>
            <div className="col-md-5"> 
              <ImageImport type={'ImageIntroduce'} />
            </div>
          </div>
        </div>
      </div>
      </>
     
    );
  }
}

export default Introduce;
