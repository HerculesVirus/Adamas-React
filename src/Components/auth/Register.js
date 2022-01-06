//import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Form,
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchRegister } from '../../redux/Auth/loginAction';



const Register = ()=> {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    //states
    const [user,setUser] = useState({
        fname : '',
        email : '',
        password : '',
        cpass : ''
    })
    const [err , setErr] = useState(null)
    const [Reg , setReg] = useState(null)
    //HandleChange
    const handleOnChange =(e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    //ComponentDidUpdate
    useEffect(()=>{
        if(Reg && Reg.data.user){
            console.log(Reg.data.token)
            localStorage.setItem('token', Reg.data.token)
            navigate('/signin')
        }
    },[Reg,navigate])
    //Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        const data = {'name' : user.fname , email : user.email , password : user.password}
        if(user.password === user.cpass){
            const callback= async (data)=>{
                console.log('I am here')
                await setReg(data)
            }
            dispatch(fetchRegister(data,callback))
            setErr('')  
        }
        else{
            console.log("password is not matched")
            setErr("password is not matched")
        }
    }
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={(e)=> handleSubmit(e)}>
                            <Form.Group className="mb-3" controlId="formFirstName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" name='fname' placeholder="Enter your Full Name" onChange={(e)=>handleOnChange(e)}/>
                                <div className='error'>{Reg && Reg.data.name}</div>
                            </Form.Group>
                           
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address<span>*</span></Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" onChange={(e)=>handleOnChange(e)}/>
                                <div className='error'>{Reg && Reg.data.email}</div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password<span>*</span></Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password"  onChange={(e)=>handleOnChange(e)} />
                                <div className='error'>{Reg && Reg.data.password}</div>
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
                            {(Reg && Reg.data.message) ? 
                                <Form.Text className='success'>
                                    {Reg && Reg.data.message}   
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