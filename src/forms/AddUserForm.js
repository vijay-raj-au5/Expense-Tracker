import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '', amount: '', date: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username || !user.amount || !user.date) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			{/* <label>Name</label> */}
			<input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder='Title' />
			{/* <label>Username</label> */}
			<input type="number" name="amount" value={user.amount} onChange={handleInputChange} placeholder='Amount'/>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} placeholder='Note'/>
			{/* <label>Username</label> */}
			<input type="date" name="date" value={user.date} onChange={handleInputChange} placeholder='Date'/>
			<button>+ ADD EXPENSE</button>
		</form>
	)
}

export default AddUserForm
