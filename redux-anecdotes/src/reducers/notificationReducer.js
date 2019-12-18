const initialState = ''

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MESSAGE':
        return action.message
      case 'REMOVE_MESSAGE':
        return '' 
      default:
        return state
    }
  }
  
  export const setMessage = (message, time) => {
    return async dispatch => { 
    await 
      dispatch({
       type: 'SET_MESSAGE',
       message,
      })
      setTimeout(() => {
        dispatch({
        type: 'REMOVE_MESSAGE'
        })
      }, time*1000)
    }
  }

  export const removeMessage = ()  => {
    return {
      type: 'REMOVE_MESSAGE'
    }
  }
  
  export default notificationReducer