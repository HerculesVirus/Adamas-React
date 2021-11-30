import React, { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import { Button} from "react-bootstrap";
import { Link , useHistory } from "react-router-dom";
import EditProduct from "./EditProduct";
import axios from 'axios';
import Moment from 'react-moment';



const ListTableData = (props)=>{
    //Get the Array of Objects in @props.dt
    const [nameState , setNameState] = useState(props.dt)
    let history = useHistory();
    useEffect( () => {
        setNameState(props.dt);
    }, [props])

    const   EditHandler = (e)=> {
        return (
        <>
            <EditProduct />
        </>
        )  
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
      // history.push('/admin/listcategory')
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
                <td>{element.price}</td>
                <td>{element.Category.name}</td>
                <td>{handle_Date(element.createdAt)}</td>
                <td>{element.Featured ? "Active": "Not Active"}</td>
                <td>
                  {console.log(element._id)}
                    <Link to={`/admin/editproduct/${element._id}`}><Button ><i className="fas fa-edit"></i></Button> </Link> 
                    <Button onClick={ (e) => DeleteHandler(element._id)}><Link to="/admin/listproduct"><i className="fas fa-trash"></i></Link></Button>
                </td>
              </tr>
              )
          })
        }
      </>
    )
}

export default ListTableData;