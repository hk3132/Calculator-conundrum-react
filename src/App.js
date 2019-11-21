import React from 'react';
import './App.css';

//Create a simple counter button that will increment every time it is clicked.
// class App extends React.Component{
//   state ={
//     counter:0,
//   }
//   clickFunction =()=>{
//     this.setState({
//       counter: this.state.counter +1
//     });
//   }
//   render(){
//   return(
//     <div className="all">
//       <a onClick={this.clickFunction} className="button" href="#">{this.state.counter}</a>
//     </div>
//   )
//   }
// }

//Now we need a button to decrement the number when it is clicked.
// class App extends React.Component{
//   state ={
//     counter:0,
//   }
//   increase =()=>{
//     this.setState({
//       counter: this.state.counter +1
//     });
//   }
//   decrease =()=>{
//     this.setState({
//       counter: this.state.counter -1
//     });
//   }
//   render(){
//   return(
//     <div className="all">
//      <h1>{this.state.counter}</h1>
//       <a onClick={this.increase} className="button" href="#">Increase</a>
//       <a onClick={this.decrease} className="button" href="#">Decrease</a>
//     </div>
//   )
//   }
// }

//Calculator challenge
class App extends React.Component {
  state = {
    result: "",
    number1: "",
    number2: "",
    operator: "",
    numberEntry: 1,
  }

  clear = () => {
    this.setState({
      result: "",
      number1: "",
      number2: "",
      operator: "",
      numberEntry: 1,
    });
  }

  number = (n) => {
    if (this.state.numberEntry === 1) {
      this.setState(
        //to allow multiple digits to be entered into the calculator
        { number1: this.state.number1 + n, 
        result: this.state.number1 + n,
      });
    }
    if (this.state.numberEntry === 2) {
      this.setState(
        { number2: this.state.number2 + n, 
        result: this.state.number2 + n
      });
    }
  }

  operator = (op) => {
    this.setState({
      numberEntry: 2,
      operator: (op),
      result:(op),
    });
  }

  equals = () => {
    if (this.state.operator === "÷") {
      this.setState({
        result: (parseInt(this.state.number1) / parseInt(this.state.number2)).toFixed(3),
      });
    }
    if (this.state.operator === "x") {
      this.setState({
        result: parseInt(this.state.number1) * parseInt(this.state.number2),
      });
    }
    if (this.state.operator === "-") {
      this.setState({
        result: parseInt(this.state.number1) - parseInt(this.state.number2),
      });
    }
    if (this.state.operator === "+") {
      this.setState({
        result: parseInt(this.state.number1) + parseInt(this.state.number2),
      });
    }
  }

  render() {
    console.log(this.state)
    console.log(typeof(this.state.number2))
    return (
      <div className="all">
        <h1>{this.state.result}</h1>
        <div className="line1">
          <button onClick={this.clear} className="clear">clear</button>
          <button onClick={() => this.operator("÷")} className="divide">÷</button>
        </div>
        <div className="line2">
          <button onClick={() => this.number(7)} className="seven">7</button>
          <button onClick={() => this.number(8)} className="eight">8</button>
          <button onClick={() => this.number(9)} className="nine">9</button>
          <button onClick={() => this.operator("x")} className="multiply">x</button>
        </div>
        <div className="line3">
          <button onClick={() => this.number(4)} className="four">4</button>
          <button onClick={() => this.number(5)} className="five">5</button>
          <button onClick={() => this.number(6)} className="six">6</button>
          <button onClick={() => this.operator("-")} className="minus">-</button>
        </div>
        <div className="line4">
          <button onClick={() => this.number(1)} className="one">1</button>
          <button onClick={() => this.number(2)} className="two">2</button>
          <button onClick={() => this.number(3)} className="three">3</button>
          <button onClick={() => this.operator("+")} className="plus">+</button>
        </div>
        <div className="line5">
          <button onClick={() => this.number(0)} className="zero">0</button>
          <button onClick={this.equals} className="equals">=</button>
        </div>
      </div>
    )
  }
}
export default App;


