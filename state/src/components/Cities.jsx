import React from 'react'

const Cities = ({cities}) => {
  return (
    
    <div>Country
      
    
     {
     cities.map((city)=>(
           <div className='container'>
          
              <div  className='left'>id: {city.id}</div>
               <div className='right'>name:{city.name}</div>
               <div>population:{city.population}</div>
          
           </div>
        
     ))}
    </div>
    
  )
}

export default Cities