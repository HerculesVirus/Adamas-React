import axios from 'axios'
import { useEffect ,useState } from 'react'
import Cookies from 'js-cookie';
import {
    Form ,
    Container ,
    Row,
    Col,
    Button
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import { Social } from "../Data/SocialData";
// import SocialMedia from './SocialMedia';
import useToken from './useToken'

const Login=() => {
    //Token
    const { token, setToken } = useToken();
    // const [token , setToken] = useState();
    

    if(token || setToken){
        console.log(`Token : ${setToken}`)
        console.log(`token : ${token}`)
    }
    const navigate = useNavigate();
    const [Data , setData] = useState(null)
    const [user , setUser] = useState({
        email: '',
        password : ''
    })
    // useEffect(()=>{
    //     if( Data && Data.data.user){
    //         navigate('/categoryShop')
    //     }
    // },[navigate,Data])
    const handleOnChange = (e)=> {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post('http://localhost:8000/api/publicsite/signin', user)
        .then(data => {
            setData(data)
            if(data && data.token){
                console.log('this is Token')
                Cookies.set('jwt', data.token )
                console.log(data.token)
                setToken(data.token)
            }
            
        })
        .catch(err => console.log(err))
    }
    return(
        <>
         {console.log(Data)}
         {console.log(`token is here: ${token}`)}
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