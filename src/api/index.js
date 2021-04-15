import { useEffect, useState } from "react";

export function storeLoginToken(token) {
  localStorage.setItem('token', token);
}

export function getCurrentToken() {
  const token = localStorage.getItem('token');
  return token;
}

export function clearCurrentToken() {
  localStorage.removeItem('token');
}


export const fetchRoutines = async () => {
  const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/routines', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json();

  return data;
}



export const fetchUserRoutines = async (username) => {

  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}


export const fetchActivities = async () => {

  try {
    const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}


export const fetchUsername = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  const data = await response.json();
  console.log(data);

  return data;
}
