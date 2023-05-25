import React from 'react';
const AddUser = (props) => {
return (
    <form>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age (Years)</label>
        <button type='submit'>Add User</button>
    </form>
)
}
export default AddUser;