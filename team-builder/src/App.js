import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './Form';
import TeamMembers from './TeamMembers';
import uuid from 'uuid';

// const initialMembersList = [
//   {id: uuid(), name: 'brenda' role: 'developer' email: brenda@lambda.com},
// ];

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();

  const addNewTeamMember = member => {
    setTeamMembers([...teamMembers, member]);
  };

  const editMember = editedMember => {
    const newTeamMembers = teamMembers.map(member => member.key === editedMember.key ? editedMember : member);
    setTeamMembers(newTeamMembers);
    setMemberToEdit();
  }
  return (
    <div className="App">
      <Form addNewTeamMember={addNewTeamMember} editMember={editMember} memberToEdit={memberToEdit} />
      {teamMembers.map(member => <TeamMembers setMemberToEdit={setMemberToEdit} member={member} />)}
    </div>
  );
}

export default App;
