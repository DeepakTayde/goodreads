import { combineReducers } from "redux"
import { bookReducer, selectedBookReducer } from "./BookReducers"


const RootReducer = combineReducers({
    allBooks : bookReducer,
    book : selectedBookReducer

})

export default RootReducer