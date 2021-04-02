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


export async function fetchUserRoutines() {
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/taylerann/routines`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCurrentToken()}`
        },
    });
    const data = await response.json();

    return data;
}

