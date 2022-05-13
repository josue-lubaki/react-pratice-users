import React from 'react';

import Card from './Card';
import Button from './Button';
import styles from './Error.module.css';

const ErroModal = (props) => {
	return (
		<div>
			<div className={styles.backdrop}/>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={styles.content}>
					<p>{props.message}</p>
				</div>
				<footer className={styles.actions}>
					<Button>Okay</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErroModal;
