import axios from 'axios'
import { useEffect , useState } from 'react';
import '../App.css'
import {
    Form ,
    Container ,
    Row,
    Col,
    Button
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import isLoginAction from '../redux/login/loginAction';
// import isLoginAction from '../redux/login/loginAction';


const Login=() => {
    //Token
     const dispatch = useDispatch()
     const navigate = useNavigate();
    // const currentState = useSelector( state => 
    //     state.bool
    // )
    //State
    const [Data , setData] = useState(null)
    const [user , setUser] = useState({
        email: '',
        password : ''
    })
    useEffect(()=>{
        if( Data && Data.data.user){
            // console.log(Data.data.token)
            dispatch(isLoginAction(true))
            localStorage.setItem('token' ,Data.data.token)
            navigate('/categoryShop')
        }
    },[navigate,Data,dispatch])
    //HandleChange
    const handleOnChange = (e)=> {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    //submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/publicsite/signin', user)
        .then(data => {
            setData(data)            
        })
        .catch(err => console.log(err))
        // if(isLogin){     
        //     console.log(`currentState : ${currentState}`)
        //     dispatch(isLoginAction(isLogin))
        // }
    }
    return(
        <>
         {/* {console.log(Data)} */}
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={(e)=> handleSubmit(e)} className="p-5">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address<span>*</span></Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={(e)=> handleOnChange(e) }/>
                                <div className='error'>{Data && Data.data.email}</div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password<span>*</span></Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={(e)=> handleOnChange(e)} />
                                <div className='error'>{Data && Data.data.password}</div>
                            </Form.Group>

                            <div className="d-flex justify-content-center">
                                <Button variant="primary" type="submit" >
                                    Sign in
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>  
        </>
    )
}

export default Login;