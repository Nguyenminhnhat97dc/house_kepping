import React from "react";
import Card from "../../Components/cardimage/CardImage";
import CardImage from "../../Components/cardimage/DataCarImage";

class ServicesIntroduce extends React.Component {
  render() {
    return (
      <>
        <div className="mb-5 pt-2">
          <h2>Một số dịch vụ của donnha.io </h2>
        </div>
        <Card cardname={CardImage} />
      </>
    );
  }
}

export default ServicesIntroduce;
