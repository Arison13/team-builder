import React, {useState} from "react";
import './form.css'

const initialFormValues = { friendName: '', friendEmail: '', friendRole: ''}

const friendsList =[
    {friendName: 'Ari', friendEmail: 'ari@ari.com', friendRole: 'FrontEnd-Developer'},
]

function Form () {
 const [formValues, setFormValues]= useState(initialFormValues);
 const [friends, setFriends]=useState(friendsList);
 
 const change = evt => {
    const { name, value, } = evt.target;
    // const name = evt.target.name;
    // const value = evt.target.value;
    setFormValues({ ...formValues, [name]: value });
  }
  
  const submit = (evt) => {
    evt.preventDefault();
    const newFriend = {
      friendName: formValues.friendName,
      friendEmail: formValues.friendEmail,
      friendRole: formValues.friendRole
    }
    
    setFriends(friends.concat(newFriend));
    setFormValues(initialFormValues);
  }
 
    return (
        <div className='form'> 
            <h2>Friend Form </h2>
            {friends.map((friend, idx) => (
                <div key={idx}>
                   <p> Friend Name is: {friend.friendName}: Email: {friend.friendEmail} Role: {friend.friendRole} </p>
                </div>
            ))}

            <form onSubmit={submit}>
                <label>Name
                <input
                    type="text"
                    name="friendName"
                    placeholder="Enter Your Name"
                    value={formValues.friendName}
                    onChange={change}
                />
                </label>

                <label>Email
                <input
                    type="email"
                    name="friendEmail"
                    placeholder="Enter Your Email"
                    value={formValues.friendEmail}
                    onChange={change}
                />
                </label>
                <label> Role
                    <select name='friendRole' value={formValues.friendRole} onChange={change}>
                        <option value="">--Pick a Role--</option>
                        <option value="BackEnd Engineer"> BackEnd Engineer</option>
                        <option value="FronEnd Engineer">FronEnd Engineer</option>
                        <option value="Designer">Designer</option>
                        <option value="Data Scientist">Data Scientist</option>
                    </select>
                </label>
            
                <input className='btn' type='submit' value='Become A Friend' />
            </form>
        </div>
    )
}
export default Form;