import React from "react";
import DataImage  from"../../assets/Data/Image"
class ImageImport extends React.Component {
    render() {
        return (
            <>
                {DataImage.map( (item,index) =>{
                    return (
                        item.type === this.props.type &&
                            <img src={item.image} key={index}  alt="description"/>
                    )
                })}
            </>
        )
    }
}

export default ImageImport