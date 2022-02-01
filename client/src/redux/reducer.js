import {GET_STUDENT,STUDENT} from './action-type'

const initial = {
    students: [
    ],
    token:''
}
export const appReducer = (state=initial,action) => {
    switch (action.type) {
        case GET_STUDENT:  
        return{
            ...state,   
            students:action.payload
        }
        case STUDENT:  
        return{
            ...state,   
            token:action.payload
        }
        default: return state;
    }
}