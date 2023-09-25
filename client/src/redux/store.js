import {createStore} from 'redux'
import cartReducer from './reducer/cartReducer'

const store = createStore(cartReducer)

export default store