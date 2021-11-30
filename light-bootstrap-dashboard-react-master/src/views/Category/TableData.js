import React, { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import { Button} from "react-bootstrap";
import { Link , useHistory } from "react-router-dom";
import EditCategory from "./EditCategory";
import axios from 'axios';
import Moment from 'react-moment';
import moment from 'moment';
//import axios from "axios";
const TableData = (props)=>{
    //Get the Array of Objects in @props.dt
    const [nameState , setNameState] = useState(props.dt)
    let history = useHistory();
    useEffect( () => {
        setNameState(props.dt);
    }, [props])

    const   EditHandler = (e)=> {
        // return (
        // <>
        //     <EditCategory />
        // </>
        // )  
    }
    const handle_Date = (data) => {
      //console.log(data)
      return(
        <Moment format="YYYY/MM/DD">
            {data}
        </Moment>
      )
    }
    const DeleteHandler =  (e) => {
      // console.log(e)
      // console.log(typeof(e))      
      props.delcategory(e)
      //axios
      axios({
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
                <td>{ReactHtmlParser(element.Description)}</td>
                <td>{handle_Date(element.createdAt)}</td>
                <td>{element.status ? "Active": "Not Active"}</td>
                <td>
                    <Button onClick={(e) => EditHandler()}><Link to={`/admin/editcategory/${element._id}`}><i className="fas fa-edit"></i></Link></Button> 
                    <Button onClick={ (e) => DeleteHandler(element._id)}><Link to="/admin/listcategory"><i className="fas fa-trash"></i></Link></Button>
                </td>
              </tr>
              )
          })
        }
      </>
    )
}

export default TableData