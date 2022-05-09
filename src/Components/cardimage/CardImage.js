import React from "react";
import "../../styles/HomePage/CardImage.scss";
import { NavLink } from "react-router-dom";
class Card extends React.Component {
  render() {

    return (
      <>
        <div className="warpper">
        {this.props.cardname.map((item) => {
          return (
            <div className="card_a " key={item.id}>
              <img src={item.image} alt="abcxyz" />
              <div className="container ">
                  <h4>
                    <div className="text-center mt-2 " style={{color:'#ff3547'}}>{item.title}</div>
                  </h4>
                  <div className="block-ellipsis">
                    <p>{item.description}</p>
                  </div>
                  
              </div>
            </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center p-3">
          <NavLink type="button" color="danger" className="btn btn-danger rounded-pill" to="services" >Đặt dịch vụ ngay</NavLink>
        </div>
      </>
    );
  }
}

export default Card;
