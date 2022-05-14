import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import styles from './AddUser.module.css';

const AddUser = (props) => {
	const usernameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredUsername = usernameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

		// validations
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values)',
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0)',
			});
			return;
		}

		const user = {
			id: Math.random().toString(),
			username: enteredUsername,
			age: +enteredAge,
		};

		props.onAddUser(user);
		usernameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<Wrapper>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}

			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input type='text' id='username' ref={usernameInputRef} />
					<label htmlFor='age'>Username</label>
					<input type='number' id='age' ref={ageInputRef} />
					<Button type='submit'>Add user</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
