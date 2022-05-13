import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
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
				<Button type='submit'>Add user</Button>
			</form>
		</Card>
	);
};

export default AddUser;
