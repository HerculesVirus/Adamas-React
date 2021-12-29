//import axios from 'axios'
import { useEffect , useState } from 'react';
import '../../App.css'
import {
    Form ,
    Container ,
    Row,
    Col,
    Button
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../../redux/Auth/loginAction';
// import { LoginWithGoogle } from '../../redux/Auth/loginAction';


const Login=() => {

     const dispatch = useDispatch()
     const navigate = useNavigate();
    //REQ state
    const [user , setUser] = useState({
        email: '',
        password : ''
    })
    //selector
    const selector = useSelector ( state => state.auth)

    //HandleChange
    const handleOnChange = (e)=> {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    useEffect(()=>{
        if(selector?.user){
            console.log(selector.user)
            localStorage.setItem('token' , selector.user.token)
            navigate("/");
        }
    })
    // const handleGoogleSignIn = (e) => {
    //     console.log(`Button is pressed`)
    //     dispatch(LoginWithGoogle())
    // }
    //submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        // window.open(`http://localhost:8000/api/google`)
        dispatch(fetchLogin(user))
    //     localStorage.setItem('token' , selector?.user && selector.user.token)
    }

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={(e)=> handleSubmit(e)} className="p-5">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address<span>*</span></Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={(e)=> handleOnChange(e) }/>
                                <div className='error'>{selector?.error && selector?.error.email}</div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password<span>*</span></Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={(e)=> handleOnChange(e)} />
                                <div className='error'>{selector?.error && selector?.error.password}</div>
                            </Form.Group>

                            <div className="d-flex justify-content-center Form-button">
                                <Button className="bg-color mb-3" variant="primary" type="submit" >
                                    Sign in
                                </Button>

                            </div>

                        </Form>
                        <div>
                                <a href={`http://localhost:8000/api/google`}>
                                    Sign in with google
                                </a>
                        </div>
                    </Col>
                </Row>
            </Container>  
        </>
    )
}

export default Login;