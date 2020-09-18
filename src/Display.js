import React, {Component} from 'react'
import './Display.css'

class Result extends Component{
    render(){
        return(
            <div className="display">
                <p className="quest">{this.props.quest}</p>
                <h2 className="result">{this.props.result}</h2>
            </div>
        )
    }
}

export default Result