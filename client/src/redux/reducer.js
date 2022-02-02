import {GET_STUDENT,STUDENT} from './action-type'

const initial = {
    students: [
    ],
    token:'',
    users: []

}

export const appReducer = (state=initial,action) => {
    switch (action.type) {
        case GET_STUDENT: 
        localStorage.setItem('student', JSON.stringify(action.payload));     
        return{
            ...state,    
            students:JSON.parse(localStorage.getItem('student'))  
        }
        case STUDENT:  
        return{
            ...state,   
            token:action.payload
        }
        case 'Get_All_Users':  
        return{
            ...state,   
            users:action.payload 
        }
        case 'delete':  
        return{
            ...state,    
            users:action.payload
        }
        default: return state;
    }
}