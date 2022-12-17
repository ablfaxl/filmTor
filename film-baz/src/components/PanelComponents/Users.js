import React, { useContext, useState } from 'react'
import '../PanelComponents/Users.css'
import {DbContex} from '../Context/Contex'
import {AiFillDelete} from 'react-icons/ai'
// import { List } from '../Context/Contex'
function Users() {
  // const {list} = List();
  const Db = useContext(DbContex);


  const deleteUser =  (id) =>{
    const db = { ...Db.list };
    db.Users.splice(id,1)
    Db.setList(db)
    console.log("succses")
  } 
  const changeRole = (e)=>{
  console.log(e.target.value)

  }
  const newTr = Db.list.Users.map((item, id) => (
    <tr key={id}>
      <td> {item.firstName} </td>
      <td> {item.password} </td>
      <td> {item.email} </td>
      <td>
        {item.isAdmin ? 'admin' : 'user'} 
        {/* <select onChange={changeRole}>
          <option value="true">admin</option>
          <option value="false">{!item.isAdmin == false ? 'user': 'user'}</option>

        </select> */}
      </td>
      <td> {item.id} </td>
      <td onClick={() => deleteUser(id)}
      ><AiFillDelete className='td1' /></td>

    </tr>
  ))
  return (
  <>
<div>
<table>
  <thead className='userInfo'>
    <tr>
    <th>User</th>
    <th>Password</th>
    <th>Email</th>
    <th>Role</th>
    <th>ID</th>
    <th>Delete</th>
    {/* <th>Phone</th>   */}
    </tr>
  </thead>
  <tbody>
    {newTr}
  </tbody>
  
</table>
</div>
  </>
  )
}

export default Users
 // clone bs hmishe bznm 