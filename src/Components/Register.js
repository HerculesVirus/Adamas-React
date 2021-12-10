import {
    Form,
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';
//import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Register = ()=> {
     //SweetAlert
    // Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Your work has been saved',
    //     showConfirmButton: false,
    //     timer: 1500
    // })
    let navigate = useNavigate();
    //states
    const [user,setUser] = useState({
        fname : '',
        email : '',
        password : '',
        cpass : ''
    })
    const [err , setErr] = useState(null)
    const [newData , setnewData] = useState(null)
    const handleOnChange =(e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    useEffect(()=>{
        if(newData && newData.data.user){
            navigate('/signin')
        }
    },[newData,navigate])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        if(user.password === user.cpass){
            axios({
                method: 'post',
                url: 'http://localhost:8000/api/publicsite/register',
                data: {'name' : user.fname , email : user.email , password : user.password},
                withCredentials: true
              }) 
              .then( async data =>{
                console.log('I am here')
                await setnewData(data)
              } )
              .catch(err => console.log(`goes in err part${err}`))
              setErr('')

              
        }
        else{
            console.log("password is not matched")
            setErr("password is not matched")
        }
    }
    return(
        <>
        {console.log(newData)}
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={(e)=> handleSubmit(e)}>
                            <Form.Group className="mb-3" controlId="formFirstName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" name='fname' placeholder="Enter your Full Name" onChange={(e)=>handleOnChange(e)}/>
                                <div className='error'>{newData && newData.data.name}</div>
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Last Name" onChange={(e)=>handleOnChange(e)}/>
                            </Form.Group> */}

                            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e)=>handleOnChange(e)} />
                            </Form.Group> */}
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address<span>*</span></Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" onChange={(e)=>handleOnChange(e)}/>
                                <div className='error'>{newData && newData.data.email}</div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password<span>*</span></Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password"  onChange={(e)=>handleOnChange(e)} />
                                <div className='error'>{newData && newData.data.password}</div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formConfirmPassword">
                                <Form.Label>Confirm Password<span>*</span></Form.Label>
                                <Form.Control type="password" name='cpass' placeholder="Re-type Password"  onChange={(e)=>handleOnChange(e)} />
                                <div className='error'>{err}</div>
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" type="submit" >
                                    Register
                                </Button>

                            </div>
                            {(newData && newData.data.message) ? 
                                <Form.Text className='success'>
                                    {newData && newData.data.message}   
                                </Form.Text> 
                                :
                                    ''
                                } 
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
    
}
export default Register;