import React from 'react'

const Countries = ({countries}) => {
  return (
    
    <div>Country
      
    
     {
     countries.map((country)=>(
           <div className='container'>
          
              <div  className='left'>id: {country.id}</div>
               <div className='right'>name:{country.name}</div>
          
           </div>
        
     ))}
    </div>
    
  )
}

export default Countries