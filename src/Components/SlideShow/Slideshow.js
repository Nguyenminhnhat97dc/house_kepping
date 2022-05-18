/* import React from "react";
import  SliderData  from "./SliderData";
import '../../styles/HomePage/Slideshow.scss'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

class Slideshow extends React.Component {
    state = {
        current : 0,
        length : this.props.slides.length
    }
    nextSlide = () => {
        if( this.state.current === this.state.length -1)
        {
            this.setState({ current : 0 })
        } else {
            this.setState({ current : this.state.current + 1 })
        }
    }
    prevSlide = () => {
        this.setState( 
            this.state.current === 0 ? 
            this.setState({ current : this.state.length -1}) : 
            this.setState({ current : this.state.current -1})
            )
    }
    
    render() {
        return (
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={() => this.prevSlide()}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={() => this.nextSlide()}/>

                {SliderData.map((slide, index) =>
                    <div className={index === this.state.current ? 'slide active' : 'slide'} key={index}>
                        {index === this.state.current && (
                            <img src={slide.image} alt='travel ' key={index} className="image"/>
                        )}
                    </div>
                )}
                
            </section>
        )
    }
}

export default Slideshow */