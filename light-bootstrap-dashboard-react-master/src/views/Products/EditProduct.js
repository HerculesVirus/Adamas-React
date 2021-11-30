import React, { useEffect, useState  } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Switch from "../../components/Switch/Switch";
import axios from 'axios';
import Select from 'react-select';
// react-bootstrap components
import {useParams , useHistory , Link} from "react-router-dom";
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
} from "react-bootstrap";


function EditProduct() {
    console.log("Where is Id")
    let { id } = useParams();
    console.log(id)

    const [status, setStatus] = useState(false);
    const [sendFile,setSendFile] = useState(null);
    const [Name, setName]= useState("")
    const [Des,setDescription] = useState('')
    let [selectOptions , SetSelectOptions] = useState([])
    // let [unique , setUnique]= useState('')
    // let [cat , SetCat] = useState('')
    let history = useHistory()

    //axios
    useEffect(() => {
    let isActive = true;
    axios({
        method: 'post' ,
        url:"http://localhost:8000/api/admin/editproduct/:id",
        data:id
    })
    .then(async res => {
        if (isActive){
            console.log(res.data)
            await (setName(res.data.Name))
            await (setDescription(res.data.Description))
            await (setSendFile(res.data.img))
            await (setStatus(res.data.status))
            
            console.log(Des)
          }     
        })
    .catch( err => console.log(err))
        return () => { isActive = false };
    }, []);
    //Files are Handle here
    const onChangeHandler = event => {
        setSendFile(event.target.files[0])
    }
    // Name is Set here
    const onChangeNameHandler = event => {
      setName(event.target.value)
    }
    //Save Button Handle here
    const onClickHandler = async(e) => {   
      console.log("Event Handler : "+status)  
        e.preventDefault()
        const forms = new FormData()
        forms.append('title', Name)
        forms.append('desc', Des)
        forms.append('image', sendFile)
        forms.append('status',status)
        forms.append('Myid', id)
        await axios({
          method: 'put',
          url: 'http://localhost:8000/api/admin/Save',
          data : forms
        })      
        .then(res => { // then print response status
        console.log(res.statusText)
        })
        .catch(err => console.log("Try to tell the error name "+err) )    
        history.push('/admin/listproduct')  
    }
  return (
    <>
    {console.log(Des)}
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4" className="text-center">Edit Product</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form >
                  <Row>
                    <Col  md={{ span: 7, offset: 2 }} >
                      <Form.Group>
                        <label>Name <span>*</span></label>
                        <Form.Control
                          defaultValue={Name}
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
                            data= {Des}
                            onReady={ editor => {
                            } }
                            onChange={ ( event, editor ) => {
                                const dataCkeditor = editor.getData();
                                setDescription(dataCkeditor)
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
                        <input  defaultValue={sendFile} type="file" name="file" encType="multipart/form-data" onChange={(event) => onChangeHandler(event)}/>
                    </Col>
                    <Col md={{ span: 7, offset: 2 }}>
                        <label>PRICE <span>*</span></label>
                        <InputGroup className="mb-3" >
                            <InputGroup.Text>$</InputGroup.Text>
                            <FormControl aria-label="Amount (to the nearest dollar)"  name='price' style={{textAlign : "right"}} onChange={(event)=> onChangeHandler(event)}/>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col md={{ span: 7, offset: 2 }}>
                          <Select options={selectOptions} onChange={(event) => onChangeSelectHandler(event)}/>
                    </Col>
                    <Col md={{ span: 3, offset: 2 }}>  
                        <label>Featured</label>
                        <Switch
                            isOn={status}
                            handleToggle={() => setStatus(!status)}
                        />             
                    </Col>
                  </Row>
                  <Row>
                      <Col md={{ span: 3, offset: 2 }}>
                          <Button variant="outline-danger" >
                              Close
                          </Button>
                      </Col>
                      <Col md={{ span: 3, offset: 2 }}>        
                        <Button variant="outline-success" onClick={(e) => onClickHandler(e)}>
                        <Link to="#" >Save</Link>
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

export default EditProduct;
