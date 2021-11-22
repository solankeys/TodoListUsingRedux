import {
  ADD_ITEMS,
  CLEAR_ALL,
  REMOVE_ITEMS,
} from '../action-types/action-types'

const initialState = {
  list: [],
}

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      const { id, data } = action.payLoad

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      }
    case REMOVE_ITEMS:
      const newList = state.list.filter((elem) => elem.id !== action.id)

      return {
        ...state,
        list: newList,
      }
    case CLEAR_ALL:
      return {
        ...state,
        list: [],
      }
    default:
      return state
  }
}

export default todoReducers
