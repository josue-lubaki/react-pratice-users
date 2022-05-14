import React, { useState, Fragment } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (newUser) => {
		setUsersList((prevUserList) => {
			return [...prevUserList, newUser];
		});
	};

	return (
		<Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</Fragment>
	);
}

export default App;
