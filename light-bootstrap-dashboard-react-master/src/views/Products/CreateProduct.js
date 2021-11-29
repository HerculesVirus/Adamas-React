import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Switch from "../../components/Switch/Switch";
import { Link, useHistory } from "react-router-dom";

import axios from 'axios';
// react-bootstrap components
import {
    InputGroup, FormControl , 
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";


function CreateProduct() {
    const [status, setStatus] = useState(false);
    let [sendFile,setSendFile] = useState(null);
    let [Name, setName]= useState("")
    let [Des,setDescription] = useState('')
    let [Price , setPrice] = useState("")
    let history= useHistory();

    const onChangeHandler = async event => {
       if(event.target.name === 'price' && event.target.name){
          await setPrice(event.target.value)  
      }
      else if(event.target.files[0]){
        setSendFile(event.target.files[0])
      }
        
    }
    
    const onChangeNameHandler = event => {
      setName(event.target.value)
    }
    const onClickHandler = (e) => {     
        e.preventDefault()
        //FromData into oneObject and send to Axios
        const form = new FormData()
        form.append('title', Name)
        form.append('desc', Des)
        form.append('image', sendFile)
        form.append('status',value)
        form.append('price' , Price)
        //
        axios({
          method: 'post',
          url: 'http://localhost:8000/api/admin/createProduct',
          data: form
        })      
        .then(res => { // then print response status
         console.log(res.statusText)
        })
        .catch(err => console.log("Try to tell the error name "+err) )    
    
      history.push('/admin/listcategory')
    }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4" className="text-center">Create Product</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form >
                  <Row>
                    <Col  md={{ span: 7, offset: 2 }} >
                      <Form.Group>
                        <label>Name <span>*</span></label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Category Title"
                          name = 'Name'
                          type="text"
                          onChange={(e) => onChangeNameHandler(e) }
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ span: 7, offset: 2 }}>
                      <Form.Group>
                        <label>Description</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            onReady={ editor => {
                                // console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const dataCkeditor = editor.getData();
                                setDescription(Des = dataCkeditor)
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                      </Form.Group> 
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ span: 10, offset: 2 }}>
                        <input type="file" name="file" encType="multipart/form-data" onChange={(event) => onChangeHandler(event)}/>
                    </Col>
                    <Col md={{ span: 6, offset: 2 }}>
                        <InputGroup className="mb-3" >
                            <InputGroup.Text>$</InputGroup.Text>
                            <FormControl aria-label="Amount (to the nearest dollar)"  name='price' style={{textAlign : "right"}} onChange={(event)=> onChangeHandler(event)}/>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col md={{ span: 3, offset: 2 }}>  
                        <label>Featured</label>
                        <Switch
                            isOn={status}
                            handleToggle={() => setStatus(!status)}
                        />             
                    </Col>
                    <Col md={{ span: 3, offset: 2 }}>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>   
                    </Col>
                  </Row>
                  <Row>
                      <Col md={{ span: 3, offset: 2 }}>
                          <Button variant="outline-danger" >
                              Close
                          </Button>{' '}
                      </Col>
                      <Col md={{ span: 3, offset: 2 }}>        
                        <Button variant="outline-success" onClick={(e) => onClickHandler(e)}>{' '}
                        <Link to="">Save</Link>
                        </Button>
                      </Col>
                  </Row>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreateProduct;
