
import '../../assets/css/check.css';
import { Col ,Container , Row , Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import BillingAddress from './BillingAddress';
// import PaymentCartlist from './PaymentCartlist';

const PaymentCard =()=> {
    //State
    const [err, setError] = useState({
        fullname : false ,
        email : false,
        address : false,
        city : false ,
        state : false,
        zip : false

    })
    const [billAddress , setBillAddress] = useState({
        fullname : '',
        email : '',
        address : '',
        city : '' ,
        state : '',
        zip : ''
    })
    //Schema
    const BillingSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });


    const handleOnChange = (e)=>{

        setBillAddress({
            ...billAddress ,
            [e.target.name] : e.target.value
        })
    }
    useEffect(()=>{
        console.log(billAddress)
    }, [billAddress])
    const handleBillingAddress =(e)=>{
        e.preventDefault();
        console.log('Form Billing Submit')
        console.log(billAddress.fullname)
        console.log(`billAddress.email : ${billAddress.email === ''}`)
        //1
        // if(billAddress.fullname === '' ){
        //     console.log(billAddress.fullname)
        //     setError({
        //         ...err,
        //         fullname :true
        //     })
        // }
        // if(billAddress.fullname !==''){
        //     console.log('Fulname is defined')
        //     setError({
        //         ...err,
        //         fullname :false
        //     })
        // }
        // //2
        // if(billAddress.email === '' ){
        //     console.log(`billAddress.email : ${billAddress.email} in empty way`)
        //     setError({
        //         ...err,
        //         email :true
        //     })
        // }
        // if(billAddress.email !== ''){
        //     setError({
        //         ...err,
        //         email :false
        //     })
        // }
        // //3
        // else if(billAddress.address === '' ){
        //     console.log(billAddress.address)
        //     setError({
        //         ...err,
        //         address :true
        //     })
        // }
        // else if(billAddress.address !==''){
        //     setError({
        //         ...err,
        //         address : false
        //     })
        // }
        // //4
        // else if(billAddress.city=== '' ){
        //     console.log(billAddress.city)
        //     setError({
        //         ...err,
        //         city :true
        //     })
        // }
        // else if(billAddress.city !==''){
        //     setError({
        //         ...err,
        //         city :false
        //     })
        // }
        // //5
        // else if(billAddress.state === '' ){
        //     console.log(billAddress.state)
        //     setError({
        //         ...err,
        //         state :true
        //     })
        // }
        // else if(billAddress.state !==''){
        //     setError({
        //         ...err,
        //         state :false
        //     })
        // }
        // //6
        // else if(billAddress.zip === '' ){
        //     console.log(billAddress.zip)
        //     setError({
        //         ...err,
        //         zip :true
        //     })
        // }
        // else if(billAddress.zip !==''){
        //     setError({
        //         ...err,
        //         zip :false
        //     })
        // }


    }
    return (
        <>
        {console.log(err)}
        <div className="checkout-form mt-4">
            <Container>
                <Row>
                    <Col md={12} className='left-container'>
                        {/* <div className="checkout-container"> */}
                        <div>
                            <h1>BillingAddress</h1>
                            <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                            }}
                            validationSchema={BillingSchema}
                            onSubmit={values => {
                                // same shape as initial values
                                console.log(values);
                            }}
                            >
                            {({ errors, touched }) => (
                                <Form>
                                <Field name="firstName" />
                                {errors.firstName && touched.firstName ? (
                                    <div>{errors.firstName}</div>
                                ) : null}
                                <Field name="lastName" />
                                {errors.lastName && touched.lastName ? (
                                    <div>{errors.lastName}</div>
                                ) : null}
                                <Field name="email" type="email" />
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                <button type="submit">Submit</button>
                                </Form>
                            )}
                            </Formik>
                        </div>
                        {/* </div> */}
                    </Col>
                    {/* <Col md={3}>
                        <PaymentCartlist/>
                    </Col> */}
                </Row>
            </Container>
        </div>
        </>
    )
}

export default PaymentCard;