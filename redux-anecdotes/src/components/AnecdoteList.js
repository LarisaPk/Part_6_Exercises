import React from 'react'
import { vote } from '../reducers/anecdoteReducer' 
import { setMessage, removeMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

  const voteFor = (anecdote) => {
    console.log('vote', anecdote.id)
    props.vote(anecdote)
    props.setMessage(`you voted '${ anecdote.content}'`, 10)
  }

  return (
  <>
    {props.anecdotesToShow.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => voteFor(anecdote)}>vote</button>
        </div>
      </div>
    )}
   </> 
  )
}
const anecdotesToShow = ({anecdotes, filter}) => {
    if ( filter === 'ALL' ) {
      return anecdotes.sort(function(a, b){return a.votes - b.votes})
      .reverse() 
    }
    else {
    return anecdotes.filter(a =>
      a.content
      .toLowerCase()
      .includes(filter.toLowerCase()))
      .sort(function(a, b){return a.votes - b.votes})
      .reverse() 
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    anecdotesToShow: anecdotesToShow(state)
  }
}
const mapDispatchToProps = {
  setMessage, 
  removeMessage, 
  vote
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)