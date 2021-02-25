import React from 'react';

const Profile = async() => {

    const userToken = JSON.parse(localStorage.getItem('token'));

    await fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        },
        }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);

        return (
            <div>
                <h1>hi</h1>
            </div>
        )
    }

export default Profile;
