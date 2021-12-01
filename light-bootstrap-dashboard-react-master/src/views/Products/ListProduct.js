import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListTableData from "./ListTableData";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";



function ListProduct(props) {
    //array of Objects are set in below state
  let [val,setVal] = useState(null)

    const delcal=(id)=>{
      console.log("Delcal: "+id)
      //DElete that object and then Val have new list of objects
      val.map((Element, index) =>{
          if(Element._id === id){
            val.splice(index,1)
            
          }
      })
      console.log("Delcal end of this : "+val)
  }
  useEffect( ()=> {
      getAllRecords();
  }, [])
  const getAllRecords = () => {
    axios.get("http://localhost:8000/api/admin/listproduct")
    .then( async res =>{   
      await setVal(res.data)
      //console.log()
    } )
    .catch( err => console.log(err))

   
    
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header style={{display: "flex"}}>               
                  <Card.Title as="h4">Products</Card.Title>
                  <div className="ml-auto p-2">
                    <Link to="/admin/createproduct"><Button>Add Products</Button></Link>
                  </div>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">#</th>
                      <th className="border-0">Img</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Description</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Category</th>
                      <th className="border-0">Created At</th>
                      <th className="border-0">STATUS</th>
                      <th className="border-0">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {console.log("This should going on: "+val)} */}
                      <ListTableData dt={val} delcategory={delcal}/>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ListProduct;
