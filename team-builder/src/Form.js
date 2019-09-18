import React, {useState, useEffect} from 'react';

function Form (props) {
    const [member, setMember] = useState ({
        name: '',
        email: '',
        role: '',
    });

    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="name..." value={member.name} onChange={handleChange}/>
            <label htmlFor="role">Role</label>
            <input role="role" type="text" palceholder="role..." value={member.role} onChange={handleChange}/>
            <label htmlFor="email">Email</label>
            <input email="email" type="text" placeholder="someone@example.com" value={member.email} onChange={handleChange}/>
        </form>
    )
}

export default Form;