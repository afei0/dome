import React from 'react'
import PropTypes from 'prop-types'
import "./list.css"
class List extends React.Component {
  constructor(props){
  super(props)
  this.state={
    num:1
  }
}
componentWillReceiveProps(nextProps) {
    this.setState({
      num:nextProps.num
    })
  }
  render () {
    let {num}=this.state
    return(
      <div className="list" style={{left:num*-300+"px"}}>

      </div>
    )
  }
}

export default List;
