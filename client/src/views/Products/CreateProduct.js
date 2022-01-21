import React, { useEffect, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Switch from "../../components/Switch/Switch";
import { Link, useHistory } from "react-router-dom";
import Select from 'react-select';

import axios from 'axios';
// react-bootstrap components
import {
  InputGroup, 
  FormControl , 
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";



function CreateProduct() {
    const [status, setStatus] = useState(false);
    let [sendFile,setSendFile] = useState(null);
    let [showImg , setShowImg] = useState(null)
    let [Name, setName]= useState("")
    let [Des,setDescription] = useState('')
    let [Price , setPrice] = useState("")
    let [selectOptions , SetSelectOptions] = useState([])
    let [id , setID]= useState('')
    let [cat , SetCat] = useState('')
    
    let history= useHistory();
    //Genral Change Handler
    const onChangeHandler = async event => {
       if( event.target.name === 'price' && event.target.name !== undefined){
          setPrice(event.target.value)  
          console.log(event.target.value)
      }
      else if(event.target.files[0]){
        setSendFile(event.target.files[0])
        setShowImg(URL.createObjectURL(event.target.files[0]))
      }  
    }
    //onChangeSelectHandler
    const onChangeSelectHandler = async(event)=>{
      console.log(event.id)
      console.log(event.label)
      await setID(event.id)
      await SetCat(event.label)
    }
    //GET ALL DATA from api
    const getOptions=async()=>{
      const res = await axios.get('http://localhost:8000/api/admin/listcategory')
      const CategoriesName = res.data
  
      const options = CategoriesName.map(d => ({
        "id" : d._id,
        "label" : d.Name
      }))
      SetSelectOptions(options)
    }
    //onChangeNameHandler
    const onChangeNameHandler = event => {
      setName(event.target.value)
    }
    //Save Button Handler
    const onClickHandler = (e) => {     
        e.preventDefault()
        //FromData into oneObject and send to Axios
        const forms = new FormData()
        console.log("Name: "+Name)
        forms.append('title', Name)
        forms.append('desc', Des)
        forms.append('image', sendFile)
        forms.append('status',status)
        forms.append('price' , Price)
        forms.append('Category',cat)
        forms.append('Cat_ID', id)
        console.log(forms)
        //
        axios({
          method: 'post',
          url: 'http://localhost:8000/api/admin/createproduct',
          data: forms
        })      
        .then(res => { // then print response status
         console.log(res.statusText)
        })
        .catch(err => console.log("Try to tell the error name "+err) )    
        history.push('/admin/listproduct')
    }
    useEffect(()=> {
      getOptions()
    },[])
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4" className="text-center">Create Product</Card.Title>
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
                            onReady={ editor => {
                                // console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const dataCkeditor = editor.getData();
                                setDescription(Des = dataCkeditor)
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
                    <Col md={{ span: 7, offset: 2 }}>
                      {showImg && 
                        <div>
                          <img style={{width : "86px"}} src={showImg} alt="new Img "/>
                        </div>}
                        <input type="file" name="file" encType="multipart/form-data" onChange={(event) => onChangeHandler(event)}/>
                    </Col>
                    <Col md={{ span: 7, offset: 2 }}>
                        <label>PRICE <span>*</span></label>
                        <InputGroup className="mb-3" >
                            <InputGroup.Text>$</InputGroup.Text>
                            <FormControl aria-label="Amount (to the nearest dollar)"  name='price' style={{textAlign : "right"}} onChange={(event)=> onChangeHandler(event)}/>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col md={{ span: 7, offset: 2 }}>
                          <Select options={selectOptions} onChange={(event) => onChangeSelectHandler(event)}/>
                    </Col>
                    <Col md={{ span: 3, offset: 2 }}>  
                        <label>Featured</label>
                        <Switch
                            isOn={status}
                            handleToggle={() => setStatus(!status)}
                        />             
                    </Col>
                  </Row>
                  <Row>
                      <Col md={{ span: 3, offset: 2 }}>
                          <Link to="/admin/listproduct">
                            <Button variant="outline-danger" >
                              Close
                            </Button>
                          </Link>
                      </Col>
                      <Col md={{ span: 3, offset: 2 }}> 
                        <Link to=""><Button variant="outline-success" onClick={(e) => onClickHandler(e)}>Save</Button></Link> 
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

export default CreateProduct;
