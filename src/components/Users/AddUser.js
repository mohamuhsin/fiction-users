import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

    const [enteredUsername, setenteredUsername] = useState('');
    const [enteredAge, setenteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
}

const usernameChangeHandler = (event) => {
setenteredUsername(event.target.value);
}

const ageChangeHandler = (event) => {
    setenteredAge(event.target.value);
    }

return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username' onChange={usernameChangeHandler}>Username</label>
        <input id='username' type='text' />
        <label htmlFor='age' onChange={ageChangeHandler}>Age (Years)</label>
        <input id='age' type='number' />
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
)
}
export default AddUser;