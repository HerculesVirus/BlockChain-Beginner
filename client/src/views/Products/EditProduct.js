import React, { useEffect, useState  } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Switch from "../../components/Switch/Switch";
import axios from 'axios';
import Select from 'react-select';
// react-bootstrap components
import {useParams , useHistory , Link} from "react-router-dom";
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


function EditProduct() {
    const { id } = useParams();
    console.log(id)

    const [status, setStatus] = useState(false);
    const [sendFile,setSendFile] = useState(null);
    const [showImg , setShowImg] = useState(null)
    const [Name, setName]= useState("")
    const [Des,setDescription] = useState('')
    let   [selectOptions , setSelectOptions] = useState([])
    let   [cat , setCat] = useState('')
    let   [CatID , setCatID] = useState('')
    let   [price ,setPrice] = useState('')
    let   history = useHistory()

    const getOptions=async()=>{
      const res = await axios.get('http://localhost:8000/api/admin/listcategory')
      const CategoriesName = res.data
  
      const options = CategoriesName.map(d => ({
        "id" : d._id,
        "label" : d.Name
      }))
      setSelectOptions(options)
    }
    //axios
    useEffect(() => {
      getOptions()
      let isActive = true;
      axios({
          method: 'get' ,
          url:`http://localhost:8000/api/admin/editproduct/${id}`,
      })
      .then(async res => {
        if (isActive){
          //console.log(res.data.Category)
          await (setName(res.data.Name))
          await (setDescription(res.data.Description))
          await (setSendFile(res.data.img))
          await (setPrice(res.data.price))
          await (setCat(res.data.Category.name))
          await (setCatID(res.data.Category.id))
          await (setStatus(res.data.Featured))
        }     
      })
      .catch( err => console.log(err))
        return () => { isActive = false };
    }, [id]);
        //onChangeSelectHandler
        const onChangeSelectHandler = async(event)=>{
          // console.log("Onchange event")
          // console.log(event.id)
          // console.log(event.label)
          await setCatID(event.id)
          await setCat(event.label)
        }
    //Pricef
    const onChangePriceHandler = event => {
      setPrice(event.target.value) 
    }
    //Files are Handle here
    const onChangeHandler = event => {
        setSendFile(event.target.files[0])
        setShowImg(URL.createObjectURL(event.target.files[0]))
    }
    // Name is Set here
    const onChangeNameHandler = event => {
      setName(event.target.value)
    }

    //Save Button Handle here
    const onClickHandler = async(e) => {   
      console.log("Event Handler : "+status)  
        e.preventDefault()
        const forms = new FormData()
        forms.append('title', Name)
        forms.append('desc', Des)
        forms.append('image', sendFile)
        forms.append('status',status)
        forms.append('price' , price)
        forms.append('name',cat)
        forms.append('Cat_ID', CatID)
        await axios({
          method: 'put',
          url: `http://localhost:8000/api/admin/editproduct/${id}`,
          data : forms
        })      
        .then(res => { // then print response status
        console.log(res.statusText)
        })
        .catch(err => console.log("Try to tell the error name "+err) )    
        history.push('/admin/listproduct')  
    }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4" className="text-center">Edit Product</Card.Title>
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
                    <Col md={{ span: 10, offset: 2 }}>
                        <div>
                          {showImg ? 
                          <img style={{width : "86px"}} src={showImg} alt="new img"/>
                          : (sendFile && <img style={{width : "86px"}} src={ `http://localhost:8000/public/img/Product/${sendFile}`} alt="new img"/>)}
                        </div>
                        <input  defaultValue={sendFile} type="file" name="file" encType="multipart/form-data" onChange={(event) => onChangeHandler(event)}/>
                    </Col>
                    <Col md={{ span: 7, offset: 2 }}>
                        <label>PRICE <span>*</span></label>
                        <InputGroup className="mb-3" >
                            <InputGroup.Text>$</InputGroup.Text>
                            {/* { console.log(price)} */}
                            <FormControl aria-label="Amount (to the nearest dollar)" defaultValue={price} style={{textAlign : "right"}} onChange={(event)=> onChangePriceHandler(event)}/>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col md={{ span: 7, offset: 2 }}>
                      {/* {console.log("Category_Name : "+cat+" value : "+CatID)} */}
                          <Select options={selectOptions}  value={{"id" : CatID, "label" : cat  }} onChange={(event) => onChangeSelectHandler(event)}/>
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
                        <Link to="#" >
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

export default EditProduct;
