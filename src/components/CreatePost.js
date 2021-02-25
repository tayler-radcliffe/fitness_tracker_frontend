import React from 'react';
import { useState } from 'react';

const CreatePost = async ({ loginToken }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    async function handleClick() {
      await fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginToken}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver,
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
    }

    return (
        <div>
            <h2>Create New Post:</h2>
            <form>
            <label>Title: </label>
              <input type='text' required onChange={(e) => setTitle(e.target.value)}></input>
              <label>Description: </label>
              <input type='text' required onChange={(e) => setDescription(e.target.value)}></input>
              <label>Price: </label>
              <input type='text' required onChange={(e) => setPrice(e.target.value)}></input>
              <label>Location: </label>
              <input type='text' required onChange={(e) => setLocation(e.target.value)}></input>
              <label>Will Deliver? </label>
              <input type='checkbox' checked={checked} required onChange={(event) => setWillDeliver(event.target.checked)}></input>
              <button onClick={handleClick}>Create Post</button>
            </form>
        </div>
    )
}


  export default CreatePost;
