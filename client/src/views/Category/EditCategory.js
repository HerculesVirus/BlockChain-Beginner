import React, { useEffect, useState  } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Switch from "../../components/Switch/Switch";
import axios from 'axios';
// react-bootstrap components
import {useParams , useHistory , Link} from "react-router-dom";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";


function EditCategory() {

    let { id } = useParams();

    const [status, setStatus] = useState(false);
    const [sendFile,setSendFile] = useState(null);
    const [Name, setName]= useState("")
    const [Des,setDescription] = useState('')
    let [showImg , setShowImg] = useState(null)
    let history = useHistory()

    //axios

      useEffect(() => {
          let isActive = true;
          axios({
            method: 'get' ,
            url:`http://localhost:8000/api/admin/editcategory/${id}`
          })
          .then(async res => {
            if (isActive){
              await (setName(res.data.Name))
              await (setDescription(res.data.Description))
              await (setSendFile(res.data.img))
              await (setStatus(res.data.status))
              console.log(res.data.img)
              //console.log(Des)
            }     
          })
          .catch( err => console.log(err))
        return () => { isActive = false };
      }, [id]);
    
    const onChangeHandler = event => {
        setSendFile(event.target.files[0])
        setShowImg(URL.createObjectURL(event.target.files[0]))
    }
    const onChangeNameHandler = event => {
      setName(event.target.value)
    }
    const onClickHandler = async(e) => {   
      //console.log("Event Handler : "+status)  
        e.preventDefault()
        const forms = new FormData()
        forms.append('title', Name)
        forms.append('desc', Des)
        forms.append('image', sendFile)
        forms.append('status',status)
        
        await axios({
          method: 'put',
          url: `http://localhost:8000/api/admin/editcategory/${id}`,
          data : forms
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
                            editor={ ClassicEditor }
                            data= {Des}
                            onReady={ editor => {
                            } }
                            onChange={ ( event, editor ) => {
                                const dataCkeditor = editor.getData();
                                setDescription(dataCkeditor)
                            } }
                            onBlur={ ( event, editor ) => {
                                // console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                // console.log( 'Focus.', editor );
                            } }
                        />
                      </Form.Group> 
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ span: 10, offset: 2 }}>
                      <div>
                        {showImg ? 
                        <img style={{width : "86px"}} src={showImg} alt="new img"/>
                         : (sendFile && <img style={{width : "86px"}} src={ `http://localhost:8000/public/img/Category/${sendFile}`} alt="new img"/>)}
                        </div>
                        <input  defaultValue={sendFile} type="file" name="file" encType="multipart/form-data" onChange={(event) => onChangeHandler(event)}/>
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
                        <Link to="" >
                          <Button variant="outline-success" onClick={(e) => onClickHandler(e)}>Save</Button>
                        </Link>
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
