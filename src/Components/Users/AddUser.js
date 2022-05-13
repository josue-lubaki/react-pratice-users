import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const addUserHandler = (event) => {
		event.preventDefault();

		// validations
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
			return;

		if (+enteredAge < 1) return;

		const user = {
			id: Math.random().toString(),
			username: enteredUsername,
			age: enteredAge,
		};

		props.onAddUser(user);
		console.log(user);
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<div>
			<ErrorModal title='An error occured' message='Something went wrong' />
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
		</div>
	);
};

export default AddUser;
