import React, {useState} from "react";


function Form (){


    return (
        <div className='form'> 
            <form>
                <label>Name
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value=''
                />
                </label>

                <label>Email
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value=''
                />
                </label>
                <label> Role
                    <select name='role'>
                        <option>--Pick a Role--</option>
                        <option>BackEnd Engineer</option>
                        <option>FronEnd Engineer</option>
                        <option>Designer</option>
                        <option>Data Scientist</option>
                    </select>
                </label>

            </form>
        </div>
    )
}
export default Form;