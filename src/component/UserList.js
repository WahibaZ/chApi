import React, { useEffect, useState }from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Row,Col} from "react-bootstrap";

const UserList=()=> {
    
    const[listofusers, setlistofusers]=useState([])
    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => { setlistofusers(response.data) })
        .catch(error => { console.error('error fetching data', error) });
    }
        ,[]); 
  return (
    <div>
        <h1> List of users</h1>
         
        <Row>
            { 
                listofusers.map(user => (
                    <Col md={4} key={user.id} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{user.phone}</Card.Subtitle>
                                <Card.Text>{user.email} </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            )  
            ) 
            }
        </Row>

       

    </div>
  )
}

export default UserList