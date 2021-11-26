import React, { useEffect, useState  } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Switch from "../components/Switch/Switch";
import axios from 'axios';
// react-bootstrap components
import {useParams,} from "react-router-dom";
import {
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


function EditCategory() {

    let { id } = useParams();

    const [value, setValue] = useState(false);
    const [sendFile,setSendFile] = useState(null);
    const [Name, setName]= useState("")
    const [Des,setDescription] = useState('')

    //axios
    function useAsync(){
      useEffect(() => {
        let isActive = true;
       axios({
          method: 'post' ,
          url:"http://localhost:8000/api/admin/editcategory/:id",
          data:id
        })
        .then(async res => {
          if (isActive){
            await (setName(res.data.Name))
            await (setDescription(res.data.Description))
            await (setSendFile(res.data.img))
            await (setValue(res.data.status))
          }     
        })
        .catch( err => console.log(err))
        return () => { isActive = false };
      }, []);
    }
    useAsync()
    const onChangeHandler = event => {
        setSendFile(event.target.files[0])
    }
    const onChangeNameHandler = event => {
      setName(event.target.value)
    }
    const onClickHandler = async(e) => {     
        e.preventDefault()
        const forms = new FormData()
        forms.append('title', Name)
        forms.append('desc', Des)
        forms.append('image', sendFile)
        forms.append('status',value)
        forms.append('Myid', id)
        await axios({
          method: 'put',
          url: 'http://localhost:8000/api/admin/savedata',
          data : forms
        })      
        .then(res => { // then print response status
        console.log(res.statusText)
        })
        .catch(err => console.log("Try to tell the error name "+err) )      
    }
  return (
    <>
    {}
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4" className="text-center">Edit Category</Card.Title>
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
                            //defaultValue={ currentData && currentData.Description}
                            editor={ ClassicEditor }
                            data= {Des}
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                // editor.setData(data);
                                //console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const dataCkeditor = editor.getData();
                                setDescription(dataCkeditor)

                                //console.log( { event, editor, dataCkeditor } );
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
                    <Col md={{ span: 3, offset: 2 }}>  
                        <label>Status</label>
                        <Switch
                            isOn={value}
                            handleToggle={() => setValue(!value)}
                        />             
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
                        {/* <Link to="/admin/category">Save</Link> */} Save
                        </Button>
                      </Col>
                  </Row>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
            {/*()*/}
        </Row>
      </Container>
    </>
  );
}

export default EditCategory;
