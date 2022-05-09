import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

class StarRating extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <div>{this.props.valueStar} <AiOutlineStar /> </div>
            </>
        )
    }
}

export default StarRating