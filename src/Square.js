import React, { Component } from 'react';

class Square extends Component{
    constructor(props){
        super(props)
        this.state = {
            beenClicked: false
            /*each square starts out having not been clicked*/
        }
    }

    squareClick = (e) => {
        /* only does logic if square has not been clicked*/
        let { beenClicked } = this.state
        if (beenClicked === false){
            this.setState({beenClicked: true})
            this.props.handleClick(e)
        } else {
            alert("This has already been clicked.")
        }
    }

    render(){

        let { value } = this.props
        let { squareClick } = this
        return(
            <div
                /*dynamically styles the square based on the beenclicked property*/
                class={ this.state.beenClicked === false ? "question" : value }
                title={value}
                //id={value}
                onClick={squareClick}
                >
            </div>
        )
    }
}

export default Square
