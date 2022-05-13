import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = () => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const addUserHandler = (event) => {
		event.preventDefault();

		const user = {
			username: enteredUsername,
			age: enteredAge,
		};

		console.log(user);
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					id='username'
					value={enteredUsername}
					onChange={usernameChangeHandler}
				/>
				<label htmlFor='age'>Username</label>
				<input
					type='number'
					id='age'
					value={enteredAge}
					onChange={ageChangeHandler}
				/>
				<Button type='submit'>Add user</Button>
			</form>
		</Card>
	);
};

export default AddUser;
