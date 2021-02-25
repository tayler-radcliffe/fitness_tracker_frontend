// export function storeUserToken(token) {
//     localStorage.setItem('token', JSON.stringify(token));
//   }
  
//   export function getCurrentToken() {
//     const token = JSON.parse(localStorage.getItem('token'));
//     return token;
//   }
  
//   export function clearCurrentToken() {
//     localStorage.removeItem('token');
//   }

export const fetchPosts = async () => {
  const response = await fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts')
  const data = await response.json();
  console.log(data);
  return data;
}
