import React, { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import EditCategory from "./EditCategory";
import axios from 'axios';
//import axios from "axios";
const TableData = (props)=>{
    //Get the Array of Objects in @props.dt
    const [nameState , setNameState] = useState(props.dt)
    //ComponentDidUpdate
    useEffect( () => {
        setNameState(props.dt);
    }, [props])

    const   EditHandler = (e)=> {
        return (
        <>
            <EditCategory />
        </>
        )  
    }
    const DeleteHandler = async (e) => {
      console.log(e)
      console.log(typeof(e))
      //axios
      await axios({
        method: 'delete',
        url: 'http://localhost:8000/api/admin/delete',
        data: {Uni : e}
      })
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
                    <Button onClick={ (e) => DeleteHandler(element._id)}><i className="fas fa-trash"></i></Button>
                </td>
              </tr>
              )
          })
        }
      </>
    )
}

export default TableData