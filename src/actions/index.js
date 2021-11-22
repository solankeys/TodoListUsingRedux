import {
  ADD_ITEMS,
  REMOVE_ITEMS,
  CLEAR_ALL,
} from '../action-types/action-types'

export const addToDo = (data) => {
  return {
    type: ADD_ITEMS,
    payLoad: {
      id: new Date().getTime().toString(),
      data: data,
    },
  }
}

export const removeItems = (id) => {
  return {
    type: REMOVE_ITEMS,
    id,
  }
}

export const clearItems = () => {
  return {
    type: CLEAR_ALL,
  }
}
