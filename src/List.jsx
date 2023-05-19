// import ListElement from "./ListElement"

// function List(props){
//    const resurs = props.arr.map(el =>{
//      return (
// <div>
//     <strong>{el.name}</strong>
//     <i>{el.age}</i>
//     <b>{el.job}</b>
// </div>
//      )
//    })
//     const result =props.arr.map(el => {
//         return (
// <div>
// <h1>{el.age}  {el.name}</h1>
//             <h3>{el.job}</h3>

// </div>
//         )
//     })


//     return (

//        <div>
//         {result}
//        </div>
//     )

// }

// export default List




// import React, { useState } from 'react'
// import '../App.css'

// export default function List() {

//     const user = [
//         { id: 1, name: 'John', age: 23, job: 'freelancer' },
//         { id: 2, name: 'Smith', age: 21, job: 'programmer' },
//         { id: 3, name: 'Alex', age: 26, job: 'programmer' },
//         { id: 4, name: 'Robert', age: 30, job: 'freelancer' },
//     ];

//     const [users, setUsers] = useState(user);
//  function filterJob(item){
//     let result = user.filter(el => el.job === item);
//     setUsers(result)
//  }

//     return (
//         <div className='all'>

//             <div id='btn'>
//                 <button onClick={() => setUsers(user)}>All</button>
//                 <button onClick={() => filterJob('programmer')}>Programmer</button>
//                 <button onClick={() => filterJob('freelancer')}>Freelancer</button>
//                 </div>
//             {
//                users.map(el => (
//                 <div key={el.id}>
//                 <h1 className='myh1'>Name: {el.name} Age: {el.age} Job: {el.job}</h1>
//             </div>  
//                ))
//             }
//         </div>
//     )
// }





// import React, { useState } from 'react'

// export default function List() {

//     const [name, setName] = useState('')
// function log() {
//     <h1></h1>
// }


//   return (
//     <div className='app'>
//         <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
// <button>log</button>
// <h1>{name == 'job' ? name == 'Alex' : name}</h1>

//         </div>



    
//   )
// }
