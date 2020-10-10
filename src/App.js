import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import {Total} from './Total'

const App = () => {
	// Data
	const usersData = []

	const initialFormState = { id: null, name: '', username: '', amount: 0, date: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username, amount: user.amount, date:user.date })
	}

	return (
		<div className="container">
			<div class='header'>
				<h1>MY EXPENSES</h1>
				<Total users={users} />
			</div>
			
			<hr/>
			

			<div className="flex-row">
				<div className="flex-large">
				<br/>
				<br/>
					{editing ? (
						<Fragment>
							{/* <h2>Edit user</h2> */}
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							{/* <h2>Add user</h2> */}
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
				<br/>
					{/* <h2>View users</h2> */}
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
