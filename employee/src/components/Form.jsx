



import { useState } from "react";
import './form.css';

function Form(){
    const [form, setForm]= useState({
     name:"",
     email:"",
     password:"",
    age:18,
    address:"",
    department:"",
    salary:0,
    MartialStatus:""
    })
    
    const handleonChange=(e)=>{
        const {id, value}= e.target;
        setForm({...form, 
            [id]:value})
    }

    const Submit=(e)=>{
        e.preventDefault(); 
        fetch("http://localhost:8080/displaypic",{
            method:"POST",
            body:JSON.stringify(form),
            headers:
            {"Content-type":"application/json"}
        });
        console.log(form);
    }
    return (
      <div className="form">
        FORM
        <form onSubmit={Submit} className="addstudent">
      <div>
        <label >Name</label>
      
        <input
          type="text"
          id="name"
          value={form.name}
          placeholder="enter your Name"
          onChange={handleonChange}
        />
      </div>
      <br />
      <div>
        <label>email</label>
        <input type="email"
        id="email"
        value={form.email}
        placeholder="enter your email address" 
        onChange={handleonChange}/>
        
      </div>
      <br />
         <div>
                 <label>Password</label>
                 <input type="password"
                 id="password"
                 value={form.password}
                 onChange={handleonChange}
                 placeholder="enter your password" />
         </div>
      <br />
      <div>
        <label >Age</label>
        
        <input
          type="text"
          id="age"
          value={form.age}
          placeholder="enter your age"
          onChange={handleonChange}
        />
      </div>
      <br />
      <div>
        <label >Address</label>
       

        
        <input
          type="text"
          id="address"
          value={form.address}
          placeholder="enter  your Address"
          onChange={handleonChange}
        />
      </div>
      <br />
      <div>
        <label >Department</label>
        <select
          value={form.department} 
          id="department"
          onChange={handleonChange}
        >
          <option value="Department">Department</option>
          <option value="computerscience">computerscience</option>
          <option value="science">science</option>
          <option value="sportsmanager">sportsmanager</option>
          <option value="Artist">Artist</option>
          <option value="actor">actor</option>
        </select>
      </div>
      <br />
      <div>
        <label>Salary</label>
        
        <input
          type="number"
          id="salary"
          value={form.salary}
          placeholder="enter Salary"
          onChange={handleonChange}
        />
      </div>
      <br />
        <div>
          <label >MartialStatus</label>
          <select 
          value={form.MartialStatus}
          id="MartialStatus"
          onChange={handleonChange}>
            <option value="MartialStatus">MartialStatus</option>
            <option value="married">married</option>
            <option value="unmarried">unmarried</option>

  
          </select>
        </div>
        <br />
    
      <input className="submit" type="submit" value="Submit" />
    </form>
    </div>
    )
}
export { Form }