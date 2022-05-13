import React from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = () => {
	const addUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input type='text' id='username' />
				<label htmlFor='age'>Username</label>
				<input type='number' id='age' />
				<button type='submit'>Add user</button>
			</form>
		</Card>
	);
};

export default AddUser;
