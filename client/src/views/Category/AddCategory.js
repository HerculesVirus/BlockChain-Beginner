import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Switch from "../../components/Switch/Switch";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";


function AddCategory() {
    const [status, setStatus] = useState(false);
    let [sendFile,setSendFile] = useState(null);
    let [showImg , setShowImg] = useState(null)
    let [Name, setName]= useState("")
    let [Des,setDescription] = useState('')
    let history= useHistory();

    const onChangeHandler = event => {
        setSendFile(event.target.files[0])
        setShowImg(URL.createObjectURL(event.target.files[0]))
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
        form.append('status',status)
        //
        axios({
          method: 'post',
          url: 'http://localhost:8000/api/admin/addcategory',
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
                <Card.Title as="h4" className="text-center">ADD Category</Card.Title>
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
                            // data="<p>Hello from CKEditor 5!</p>"
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                //console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const dataCkeditor = editor.getData();
                                setDescription(Des = dataCkeditor)
                                // console.log( { event, editor, dataCkeditor } );
                            } }
                            onBlur={ ( event, editor ) => {
                                //console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                //console.log( 'Focus.', editor );
                            } }
                        />
                      </Form.Group> 
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ span: 10, offset: 2 }}>
                        {console.log(showImg)}
                        <div>
                        {showImg && 
                          <img style={{width : "86px"}} src={showImg} alt="new img"/>
                        }
                        </div>
                        <input type="file" name="file" encType="multipart/form-data" onChange={(event) => onChangeHandler(event)}/>
                    </Col>
                    <Col md={{ span: 3, offset: 2 }}>  
                        <label>Status</label>
                        <Switch
                          isOn={status}
                          handleToggle={() => setStatus(!status)}
                        />             
                    </Col>
                  </Row>
                  <Row>
                      <Col md={{ span: 3, offset: 2 }}>
                          <Link to ="/admin/listcategory">
                            <Button variant="outline-danger" >
                              Close
                            </Button>
                          </Link>
                      </Col>
                      <Col md={{ span: 3, offset: 2 }}>        
                        <Link to="">
                          <Button variant="outline-success" onClick={(e) => onClickHandler(e)}>Save</Button>
                        </Link> 
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

export default AddCategory;
