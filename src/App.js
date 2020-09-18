import React, {Component} from 'react';
import './App.css';
import Display from './Display'
import Button from './Button'
import {evaluate} from 'mathjs'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      quest: '',
      result: ''
    }
  }

  onClick = (button) => {
    if(button === '='){
      this.calculate()
    }

    else if(button === 'C'){
      this.reset()
    }

    else if(button === 'CE'){
      this.backspace()
    }

    else if(button === '.'){
      if(!this.state.result.includes('.')){
        this.setState({
          result: this.state.result + button
        })
      }
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () =>{
    try{
      this.setState({
        quest: this.state.result,
        result: evaluate(this.state.result) + ''
      })
    } catch(e) {
      this.setState({
        result: 'error'
      })
    }
  }

  reset = () =>{
    this.setState({
      quest: '',
      result: ''
    })
  }

  backspace = () =>{
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  }

  render(){
    return (
      <div className="App">
          <Display result={this.state.result} quest={this.state.quest}/>
          <Button onClick={this.onClick} result={this.state.result}/>
      </div>
    );
  }
 
}

export default App;
