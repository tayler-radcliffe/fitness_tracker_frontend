import { ControlCameraOutlined } from "@material-ui/icons";
import { useState } from "react";

export function storeLoginToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  }
  
  export function getCurrentToken() {
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
  }
  
  export function clearCurrentToken() {
    localStorage.removeItem('token');
  }


export const fetchRoutines = async () => {
  const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json();

  return data;
}

export const fetchUserRoutines = async (user) => {
  try{
     const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/taylerann/routines`, {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${getCurrentToken()}`
         },
     });
     const data = await response.json();
     return data;
 } catch (error) {
   throw error;
 }
}


export const fetchActivites = async () => {
  const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json();

  return data;
}


export const fetchUsername = async () => {
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCurrentToken()}`
      },
    })
    const data = await response.json();

    return data;
}



export const createRoutine = async ({routineName, routineGoal, isPublic}) => {
  await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getCurrentToken()}`
        },
      body: JSON.stringify({
          name: routineName,
          goal: routineGoal,
          isPublic: isPublic
    })
  }).then(response => response.json())
  .then(result => {
      console.log(result);
  })
  .catch(console.error);
}


