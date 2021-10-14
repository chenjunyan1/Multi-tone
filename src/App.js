import './App.css';
import Color from './Color';



import React, { Component } from 'react'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arr: [],
      num: 1
    }
  }
  handClick = () => {
    const { arr, num } = this.state;
    this.setState({
      num: num + 1
    })
    console.log(num)
    arr.push(num);
    this.setState({
      arr: arr
    })
  }
  render() {
    const { arr } = this.state;
    return (

      <div className="App">
        <div className="add" onClick={this.handClick}>
          add
        </div>
        <div className="contrast">
          {
            arr.map((item, index) => {
              return (
                < Color key={index} Index={item} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

