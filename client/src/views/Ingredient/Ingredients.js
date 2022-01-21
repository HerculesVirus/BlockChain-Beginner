import React from "react";
import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from 'react-select';
import Web3 from "web3";
import { CONTRACT_ADDRESS , CONTRACT_ABI } from '../../components/config/config'
import { Form , Container ,Row , Col,Button , Card, FormGroup, FormControl } from 'react-bootstrap';
import axios from "axios";
import Swal from 'sweetalert2';


const Ingredients = ()=> {
    const option = [
        { value: '1', label: 'Chocolate' },
        { value: '2', label: 'Strawberry' },
        { value: '3', label: 'Vanilla' },
        { value: '4', label: 'Mango'}
    ]

    //State 
    const [address , setAddress ] = useState(null)
    const [token, setToken] = useState(null)
    const [price, setPrice] = useState(0)
    const [selectedOption ,setSelectedOption] = useState(null)
    const [selectValue, setSelectValue] = useState(0)
    const [qty, setQty] = useState(0)
    const [IName , setIName] = useState(null)
    const [id,setIngId] = useState(null)
    //
    const [account ,setAccount] = useState(null)
    const [pizza , setPizzaNFT] = useState(null)

    //Hook
    useEffect(()=>{
        loadBlockChainData()
    },[])

    useEffect(()=>{
        if(id){
            TransComplete()
        }
    },[id])
    //Methods
    const loadBlockChainData = async ()=>{
        //Fetch account
        await window.ethereum.eth_requestAccounts;   // after depreceated const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        var web3 = window.web3;           // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof web3 !== "undefined") {
            web3 = new Web3(Web3.givenProvider);
        } 
        else {
            web3 = new Web3("http://127.0.0.1:9545");
        }
        const network = await web3.eth.net.getNetworkType()
        console.log(`network : ${network}`)
        
        // setweb(web3);
        const account = await web3.eth.getAccounts();
        await setAccount(account[0]);
        console.log(`account[0] : ${account[0]}`)

        const pizzaNFT = new web3.eth.Contract(CONTRACT_ABI , CONTRACT_ADDRESS)
        await setPizzaNFT(pizzaNFT)

        console.log(pizzaNFT)
        // const Ingredient = await pizzaNFT.methods.createIngredient().call()
        // console.log(Ingredient)
    }


    const getWeb3 = async () => {
        if (window.ethereum) {
            const web3 = new Web3(Web3.givenProvider);
          return web3;
        } 
        else {
          return false;
        }
    };
    const ethereumRequest = async (RequestABI) => {
        const web3 = await getWeb3();
        if (!web3) {
          console.log("no web3 instance");
          return false;
        }
        try {
          console.log(CONTRACT_ADDRESS);
          console.log(account);
          const myNewData = RequestABI;
          console.log(myNewData);
          // const gasLimit = await web3.eth.estimateGas({
          //     from: account,
          //     nonce: txCount,
          //     to: contractAddress,
          //     data: myNewData,
          // });
          // const gas2 = await web3.eth.getGasPrice();
          const transactionParameters = {
            // nonce: web3.utils.toHex(txCount), // ignored by MetaMask
            // gasPrice: web3.utils.toHex(gas2), // customizable by user during MetaMask confirmation.
            // gasLimit: web3.utils.toHex(gasLimit), // customizable by user during MetaMask confirmation.
            to: CONTRACT_ADDRESS, // Required except during contract publications.
            from: account, // must match user's active address.
            data: myNewData, // Optional, but used for defining smart contract creation and interaction.
            // value: weiPrice
          };
          // As with any RPC call, it may throw an error
          const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
          });
          console.log(txHash);
          //When Transaction complete then get the Id by that event
          const completeTransaction = await txHash
          //   var res =0;
          console.log(`txHash is get but the transaction is yet is not completed`)
          console.log(completeTransaction)
          await pizza.events.allEvents()
          .on('data', async (event) => {
                console.log(event);
                console.log(`get the _id :`)
                await setIngId(event.returnValues._ingredientId)
                console.log(event.returnValues._ingredientId)

            return await event.returnValues._ingredientId;
          })
          .on('error',console.error);
        } catch (e) {
          console.log(e);
        }
    };
    //Try general OnChange Handler
    const onChangeHandler = (e)=>{
        switch(e.target.name){
            case "token":
                setToken(e.target.value)
                break;
            case "price":
                setPrice(parseInt(e.target.value))
                break;
            case "qty":
                try{
                    setQty(parseInt(e.target.value))
                }
                catch(e){
                    console.log(`Wrong value you have entered`)
                }
                break;
            case "IName":
                setIName(e.target.value)    
                break;
            case "":
                break;
            default:
                console.log(`unknown name is called or empty`)
                break;
        }
    }
    const onChangeSelectHandler= (e)=>{
        console.log(e.value)
        setSelectedOption({value : e.value , label : e.label})
        setSelectValue(parseInt(e.value))

    }
    function removeTags(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        // Regular expression to identify HTML tags in 
        // the input string. Replacing the identified 
        // HTML tag with a null string.
        return str.replace( /(<([^>]+)>)/ig, '');
    }
    const TransComplete = ()=>{
        console.log(`_ingredientid : `)
        console.log(id)
        axios({
            method: 'POST',
            url : `http://localhost:8000/v1/receipies/addIngredients` ,
            data : {
                    token : token,
                    price : price, 
                    artist : "0xFD8477eE8D0Fe0D54C6a4EE12757cAeEc4d1Ef6f",
                    inType : selectValue,
                    quantity : qty ,
                    name : IName,
                    _ingredientId : id
                }
        })
        .then( res => {
            console.log('response of the API') 
            console.log(res.data.message)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Ingredient Data saved',
                    showConfirmButton: false,
                    timer: 1500
                })
        })
        .catch(err => console.log("Try to tell the error name "+err))
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        //( string memory ingredientTokenURI, uint256 price, address artist, uint256 ingType, uint256 totalCount, string memory name)
        const newAddress = removeTags(address)
        console.log(`selectValue: ${selectValue}`)
        console.log(`token : ${token} , price : ${price} : artist : ${newAddress} , inType : ${selectValue} , Qty : ${qty} , IName : ${IName}`)
        console.log(`pizaa`)
        console.log(pizza)
        const Ingredient = await pizza.methods.createIngredient(token,price,"0xFD8477eE8D0Fe0D54C6a4EE12757cAeEc4d1Ef6f",selectValue,qty,IName).encodeABI();
        const validate  = await ethereumRequest(Ingredient);
        console.log(`validate : ${validate}`)
        if(validate){
            const form  = new FormData();
            form.append('token' , token)
            form.append('price' , price)
            form.append('artist' , "0xFD8477eE8D0Fe0D54C6a4EE12757cAeEc4d1Ef6f")
            form.append('inType' , selectValue)
            form.append('quantity' , qty)
            form.append('name' , IName)

            console.log(`validate : ${validate}`)

        }
        // const getter = await pizza.methods.getTotalRarityRewards().call()
        // console.log(`getter : ${getter}`)
        //console.log(`Ingredient : ${Ingredient}`)
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3" className='text-center'>ADD Ingredient</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={(e)=>handleSubmit(e)}>
                                    <Row>
                                        <Col md={{ span: 7, offset: 2 }}>
                                            <FormGroup>
                                                <label>TokenURL<span>*</span></label>
                                                <FormControl 
                                                    defaultValue=""
                                                    placeholder="0x0000000003002030230020302030203"
                                                    name = 'token'
                                                    type="text"
                                                    onChange={(e) => onChangeHandler(e) }
                                                >
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ span: 7, offset: 2 }}>
                                            <FormGroup>
                                                <label>Price <span>*</span></label>
                                                <FormControl
                                                    defaultValue=""
                                                    placeholder="price"
                                                    name= "price"
                                                    type = "text"
                                                    onChange={(e)=> onChangeHandler(e)}
                                                >
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ span: 7, offset: 2 }}>
                                            <FormGroup>
                                                <label>Artist address</label>
                                                <CKEditor
                                                    editor = {ClassicEditor}
                                                    onReady = { editor =>{
                                                        //console.log( 'Editor is ready to use!', editor );
                                                    }}
                                                    onChange= { (event , editor)=>{
                                                        const dataCkeditor = editor.getData()
                                                        setAddress(dataCkeditor)
                                                    }}
                                                    onBlur={ (event , editor) =>{}}
                                                    onFocus={ (event , editor)=> {}}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ span: 7, offset: 2 }}>
                                            <FormGroup>
                                                <label>Type<span>*</span></label>
                                                <Select 
                                                    value={selectedOption}
                                                    onChange={(e)=>onChangeSelectHandler(e)}
                                                    options={option}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={{ span: 7, offset: 2 }} style={{paddingLeft : "15px"}}>
                                            <FormGroup>
                                                <label>Quantity<span>*</span></label>
                                                <FormControl
                                                    defaultValue=""
                                                    placeholder="1234"
                                                    name="qty"
                                                    type='text'
                                                    onChange={(e) => onChangeHandler(e)}
                                                >
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ span: 7 ,offset: 2}}>
                                            <FormGroup>
                                                <label>Ingredient Name<span>*</span></label>
                                                <FormControl
                                                    defaultValue=""
                                                    placeholder='like . Coffe...'
                                                    type='text'
                                                    name="IName"
                                                    onChange={(e)=> onChangeHandler(e)}
                                                >
                                                </FormControl>
                                            </FormGroup>

                                        </Col>
                                        <Col md={{ span: 1 ,offset: 5}}>
                                            <Button 
                                                variant="primary" 
                                                type="submit"
                                            >
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Ingredients