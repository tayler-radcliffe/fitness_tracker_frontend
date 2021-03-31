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


