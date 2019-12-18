import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer' 
import { setMessage, removeMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


const AnecdoteForm = (props) => {
  
  const addNewAnecdote = async  (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.addAnecdote(content)
    props.setMessage(`you created '${ content}'`,10)
  }

  return (
  <>
  <h2>create new</h2>    
  <form onSubmit={addNewAnecdote}>
    <div><input name="anecdote"/></div>
    <button type="submit">create</button>
  </form>
  </>
  )
}
const mapDispatchToProps = {
  setMessage, 
  removeMessage,
  addAnecdote
}
export default connect(
  null,
  mapDispatchToProps  
)(AnecdoteForm)