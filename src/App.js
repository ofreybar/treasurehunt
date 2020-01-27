import React, { Component } from 'react';
import Board from './Board.js'
import './App.css';

class App extends Component {

    render(){
        return(
            <>
                <h1 id="pageTitle">Brenden, Ofrey, and Samuel</h1>
                <div id="displayZone">
                    <Board />
                </div>
            </>
        )
    }
}

export default App;
