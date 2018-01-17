import React from 'react'
import PropTypes from 'prop-types'
import "./main.css"
class Main extends React.Component {

handleClick=()=>{
this.props.click()
}
handleClose=()=>{
this.props.close()
}
  render () {
    return(
      <div className="main">
        <div className="main-main"  onClick={()=>{
            this.handleClose()
          }}>
        </div>
        <div className="top" onClick={()=>{
            this.handleClick()
          }}>
        </div>
      </div>
    )
  }
}

export default Main;
