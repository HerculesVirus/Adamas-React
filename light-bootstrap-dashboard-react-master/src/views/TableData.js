import React, { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import EditCategory from "./EditCategory";
//import axios from "axios";
const TableData = (props)=>{
    //Get the Array of Objects in @props.dt
    const [nameState , setNameState] = useState(props.dt)
    //ComponentDidUpdate
    useEffect(async() => {
        setNameState(props.dt);

    }, [props])

    const   EditHandler = (e)=> {
        return (
        <>
            <EditCategory />
        </>
        )
        
    }
    return(
      <>
      {
        nameState && nameState.map((element ,index) => {
              return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{element.Name}</td>
                <td>{element.img}</td>
                <td>{  ReactHtmlParser(element.Description)}</td>
                <td>Nothing</td>
                <td>{element.status ? "Active": "Not Active"}</td>
                <td>
                    <Button onClick={(e) => EditHandler()}><Link to={`/admin/editcategory/${element._id}`}><i className="fas fa-edit"></i></Link></Button> 
                    <Button><i className="fas fa-trash"></i></Button>
                </td>
              </tr>
              )
          })
        }
      </>
    )
}

export default TableData