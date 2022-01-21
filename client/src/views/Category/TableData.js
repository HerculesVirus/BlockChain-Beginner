import React, { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
// import EditCategory from "./EditCategory";
import { confirm } from "react-confirm-box";
import axios from 'axios';
import Moment from 'react-moment';
//import axios from "axios";
const TableData = (props)=>{
    //Get the Array of Objects in @props.dt
    const [nameState , setNameState] = useState(props.dt)
    
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
    const DeleteHandler =  async (e) => {
      const result = await confirm("Are you sure?");
      if (result) {
        console.log("You click yes!");
        props.delcategory(e)
        //axios
        axios({
          method: 'delete',
          url: 'http://localhost:8000/api/admin/delete',
          data: {Uni : e}
        }) 
        return;
      }
      console.log("You click No!");
     

    }
    return(
      <>
      {
        nameState && nameState.slice(0).reverse().map((element ,index) => {
              return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{ 
                  <div >
                    <img style={{width : "86px"}} src={`http://localhost:8000/public/img/Category/${element.img}`} alt="img not found"/>
                  </div>
                  // element.img
                }</td>
                <td>{element.Name}</td>
                <td>{ReactHtmlParser(element.Description)}</td>
                <td>{handle_Date(element.createdAt)}</td>
                <td>{element.status ? "Active": "Not Active"}</td>
                <td>
                    <Link to={`/admin/editcategory/${element._id}`}><Button onClick={(e) => EditHandler()}><i className="fas fa-edit"></i></Button></Link> 
                    <Link to="/admin/listcategory"><Button onClick={ (e) => DeleteHandler(element._id)}><i className="fas fa-trash"></i></Button></Link>
                </td>
              </tr>
              )
          })
        }
      </>
    )
}

export default TableData