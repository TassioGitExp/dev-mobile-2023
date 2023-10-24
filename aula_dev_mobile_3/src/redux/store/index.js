import {configureStore} from 'redux'
import rootReducer from '../reducers/index'

const Store = configureStore(rootReducer)

export default Store