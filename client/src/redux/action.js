import {GET_STUDENT,STUDENT} from './action-type'
import axios from 'axios' 

export const myStudentHandler = (data) => { 
    return (dispatch) => {
    return axios.post("http://localhost:8080/api/auth/signin",data).then((res) => { 
        dispatch({ 
        type: GET_STUDENT, 
        payload: res.data,   
      });
    });
  };
}

export const studentContent = (data) => {
    return (dispatch) => {
    return axios.get("http://localhost:8080/api/student",{
        headers: {
          'x-access-token': data
        }
      }).then((res) => {
        dispatch({ 
        type: STUDENT,  
        payload: res.data,   
      });
    });
  };
}
