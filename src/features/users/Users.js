import React from "react";
// add any needed imports here
import {useDispatch, useSelector} from "react-redux" 

function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users) 
  function handleDispatch(e){
    e.preventDefault()
    dispatch({type: "users/add", payload: formData})
  return (
    <div>
       <form onSubmit={handleDispatch}>
        </form>
      <ul>
        Users!
       
  {users.map(user=>(
  <li key= {user.id}> {user.username}</li>
  )}
<p>{users.length}</p>
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
