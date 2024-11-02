import BOOK_DATA from "../../data/books";
import { ActionTypes } from "../constants/ActionTypes";

export const fetchBooks = ()=> async(dispatch)=>{
    dispatch({type:ActionTypes.FETCH_BOOKS, payload: BOOK_DATA});
}

export const setBooks =(books)=> {
    return {
        type:ActionTypes.SET_BOOKS,
        payload:books
    }
}

export const addBook = (book) =>{
    return{
        type:ActionTypes.ADD_BOOKS,
        payload:book
    }

}

export const removeBook = () =>{
    return{
        type:ActionTypes.REMOVE_BOOKS,
    }

}

