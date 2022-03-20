/* import React, { useState } from 'react';

function PersonList() {
    const [persons, setpersons] = useState([{
        username: 'Ajit',
        age: 10
    }, {
        username: 'Ajay',
        age: 20
    }]);
    return <div>
        {persons.map((person, index) => {
            return <p key={index}>User name :{person.username.filter()} - Age : {person.age}</p>
        })}
    </div>;
}

export default PersonList; */

import React, { useState } from 'react';

function PersonList() {
    const [persons, setpersons] = useState([
        {
            userName: 'sanjay',
            age: 26
        }, {
            userName: 'kiran',
            age: 25
        }
    ]);
    return <div>
        {
            persons.map((person, index) => {
                return <p key={index}>person name : {person.userName.filter()} age : {person.age} </p>

            })
        }
    </div>
}

export default PersonList;
