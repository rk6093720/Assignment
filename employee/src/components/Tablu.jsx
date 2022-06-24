import './tablu.css'
 const Tablu = ({data}) => {

    // console.log(data)
    return (
      <div id="main">
        <table className="table">
          <thead>
            <tr>
              <th>
                Name</th>
                <th>Email   </th>
              <th> Password </th>
              <th> Age </th>
              <th> Address </th>
              <th> Department </th>
              <th>Salary</th>
              <th>MaritalStatus</th>
            </tr>
          </thead>
          <tbody className="tablebody">
            {data.map((event)=>(
                <tr key={event.id} className="">
                <td className="name">{event.name}</td>
                <td className="email">{event.email}</td>
                <td className="password">{event.password}</td>
                <td className="age">{event.age}</td>
                <td className="address">{event.address}</td>
                <td className="department">{event.department}</td>
                <td className="salary">{event.salary}</td>
                <td className="MaritalStatus">{event.MartialStatus}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    );
  };


  export { Tablu };