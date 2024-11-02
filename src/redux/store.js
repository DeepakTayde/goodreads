import { applyMiddleware, createStore } from "redux";
import RootReducer from "./reducers/RootReducer";
import { thunk } from "redux-thunk";

const store = createStore(RootReducer, 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(thunk)
)
export default store;