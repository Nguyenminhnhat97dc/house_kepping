import {  PureComponent, React } from "react";
//import SliderData from "../../Components/SlideShow/SliderData";
//import Slideshow from "../../Components/SlideShow/Slideshow";
import ServicesIntroduce from "./ServicesIntroduce";
import ServiceBooking from "./ServiceBookingProcess";
import Nav from "../../Components/Header/Nav";
class Home extends PureComponent {
    render() {
        return (
            <>
              <Nav />
{/*               <div className="Body-Home">
                <Slideshow  slides={SliderData}/>
              </div> */}
              <div className="Body-Home">
                <ServicesIntroduce />
              <hr />
                <ServiceBooking />
              </div>
            </>
         
        )
    }
}
export default Home