import {loadFields} from '../../utils/connectDB'

/**
 * ACTION TYPES
 */
export const GET_FIELDS = 'GET_FIELDS'


/**
 * ACTION CREATORS
 */
const getFields = fields => ({type: GET_FIELDS, fields})

/**
 * THUNK CREATORS
 */
export const fetchFields = (data) =>
  dispatch => {
    const result = loadFields(data)
    result
    .then(response => dispatch(getFields(response)))
    .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_FIELDS:
      return action.fields
    default:
      return state
  }
}
