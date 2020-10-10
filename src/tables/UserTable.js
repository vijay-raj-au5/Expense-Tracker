import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Amount</th>
        <th>Note</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.amount}</td>
            <td>{user.username}</td>
            <td>{user.date}</td>

            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                X
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Expenses</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
