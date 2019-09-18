import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {

  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  const addTeamMember = member => {
    setTeamList([...teamList, member]);
  }

  const changeMemberToEdit = member => {
    setMemberToEdit(member);
  }
  return (
    <div className="App">
     <h1>Team Builder</h1>
     <Form/>
    </div>
  );
}

export default App;
