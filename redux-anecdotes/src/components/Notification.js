import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

const message = props.message

  const style = {
    display: message ? '': 'none',
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log('notification props state',state)
  return {
    message: state.message,
  }
}
export default connect(
  mapStateToProps,
)(Notification)