import React, { useState } from 'react';

function PersonDetail() {
    const [person, setperson] = useState({
        username: 'Guru',
        age: 10
    });
    return <div><p>{person.username}</p></div>;
}

export default PersonDetail;
