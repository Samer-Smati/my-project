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

export const deleteHandler = (data) => { 
  return (dispatch) => {
  return axios.post("http://localhost:8080/delete",{email:data}).then((res) => { 
      dispatch({ 
      type: 'DELETE',
      payload: res.data,   
    });
  }); 
};
}

export const updateHandler = (data) => { 
  return (dispatch) => {
  return axios.post("http://localhost:8080/updateUser",{data}).then((res) => {
      dispatch({ 
      type: 'UPDATE',
      payload: res.data,   
    });
  }); 
};
}
 
export const SingnUp = (data) => {
  console.log(data) 
  return (dispatch) => {
  return axios.post("http://localhost:8080/api/auth/signup",data).then((res) => { 
      dispatch({ 
      type: 'SingnUp', 
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

export const adminContent = (data) => {
  return (dispatch) => {
  return axios.get("http://localhost:8080/api/superadmin",{
    
      headers: {
        'x-access-token': data.accessToken 
      }
    }).then((res) => {
      dispatch({ 
      type: data.roles[0],  
      payload: res.data,   
    });
  });
};
}

export const allUsers = (data) => { 
  return (dispatch) => {
  return axios.get("http://localhost:8080/users",{
      headers: { 
        'x-access-token': data.accessToken 
      }
    }).then((res) => {
      dispatch({ 
      type: 'Get_All_Users',  
      payload: res.data,   
    });
  });
};
}
