import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function UserList() {

    const [ listOfUSer , setListOfUSer ] = useState([])

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( res => {
                console.log(res.data)
                setListOfUSer(res.data)
            } )
            .catch( err => console.log(err) )
    } , [])

  return (
    <div style={{maxWidth: 1200 , margin:'0 auto'}}>
        {/* Hello Users */}
        <h1 style={{textAlign: 'center'}}> This is checkpoint : <a href='https://jsonplaceholder.typicode.com/users' target={'_blank'}> API-jsonplaceholder  </a></h1>
        
        <h2 style={{marginLeft: 10}}> Let's exploit the table of Users :</h2>

        {/* &nbsp; */}
        <div className='container_table'>
            <table>
                <tr>
                    <th> Full Name </th>
                    <th> Email </th>
                    <th> Phone </th>
                    <th> Website </th>
                    <th> Company (name) </th>
                </tr>
                {listOfUSer.map((e) => (
                    <tr key={e.id} onClick={()=> { alert(`User-id${e.id}/moreInfo`)}}>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.phone}</td>
                        <td>{e.website}</td>
                        <td>{e.company.name}</td>
                    </tr>
                ))}
            </table>
        </div>
    </div>
  )
}
