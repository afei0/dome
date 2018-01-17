import React from 'react'
import PropTypes from 'prop-types'
import Main from "./Component/Main/Main"
import List from "./Component/List/List"
class App extends React.Component {
  state={
    num:1
  }
  handleClick=()=>{
      console.log(1)
    this.setState({
      num:0
    })
  }
  handleClose=()=>{
    this.setState({
      num:1
    })
  }
  render () {
    return(
      <div>
        <Main click={this.handleClick} close={this.handleClose}/>
        <List num={this.state.num}/>
      </div>
    )
  }
}

export default App;
