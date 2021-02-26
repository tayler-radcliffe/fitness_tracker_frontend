import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Post (props) {
    const {
        post,
        // handleEdit = () => {},
        // handleDelete = () => {}
    } = props

    console.log(post);
    const postId = post._id;

    const history = useHistory()

    function handleDelete() {

    }

    function handleEdit() {
        
    }

    if(!post) {
        return <div></div>
    }
    return (
        <div>
            <h2>{post.title}</h2>
            <h3>{post.description}</h3>
            <h3><strong>Price:</strong> {post.price}</h3>
            <h3><strong>Seller:</strong> {post.author.username}</h3>
            <h3><strong>Location:</strong> {post.location}</h3>
            <h3><strong>Will Deliver:</strong> {post.willDeliver}</h3>


        {post.isAuthor ? (
            <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            </div>
        ) :                 
        <button onClick={() => history.push(`/message/${postId}`)}>
           Send Message
    </button>}

        </div>
    )
}