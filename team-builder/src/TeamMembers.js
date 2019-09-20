import React from 'react';

function TeamMembers(props) {
    const {
        setMemberToEdit,
        member: { name, email, role }
      } = props;
      return (
        <div>
          <p>
              Name: {name}
          </p> 
          <p>
             Email: {email}
          </p> 
          <p>
              Role: {role}
          </p>
          <button onClick={() => setMemberToEdit(props.member)}>edit</button>
        </div>
      );
    };
export default TeamMembers;