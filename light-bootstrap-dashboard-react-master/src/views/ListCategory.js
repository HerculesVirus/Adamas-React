import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableData from "./TableData";
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



function ListCategory() {
  let [val,setVal] = useState(null)

  useEffect( ()=> {
      getAllRecords();
  }, [])
  const getAllRecords = () => {
    axios.get("http://localhost:8000/api/admin/listcategory")
    .then( async res =>{   
      await setVal(res.data)
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
                  <Card.Title as="h4">Categories</Card.Title>
                  <Button className="ml-auto p-2">
                    <Link to="/admin/addcategory">Add Category</Link>
                  </Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">#</th>
                      <th className="border-0">Img</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Description</th>
                      <th className="border-0">Created At</th>
                      <th className="border-0">STATUS</th>
                      <th className="border-0">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                      <TableData dt={val}/>
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

export default ListCategory;