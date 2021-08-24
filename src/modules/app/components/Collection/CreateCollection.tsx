
import { Component, useState } from "react";
import React from 'react';
import { Container, ThemeField, InputGroup, UploadLabel, PrevImageDiv } from "./style";
import { Input,Button, ComponentInfo,  ErrorMessage, Title, FileLabel, FileInput, Form } from "./style";
import { ButtonGroup } from "../../../../shared/components/button";
import { useDispatch,useSelector } from 'react-redux';
import { createCollection } from "../../../../logic/actions/wallet";
import { useEffect } from "react";
//import TextField from '@material-ui/core/TextField';

interface collectionDataType {
  collectionName: string,
  selectedFile: File | undefined,
  themename: string,
  nftnumber: number,
  componentsnumber: number,
  initialprice: number,
  incrementprice: number
}

const CreateCollection = () => {
  const [collectionData, setCollectionData] = useState<collectionDataType>({
    collectionName: "",
    selectedFile: undefined,
    themename: "", nftnumber: 5000,
    componentsnumber: 15, initialprice: 1,
    incrementprice: 1
  })
  
  const [show, setShow] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [showTotalComponent, setShowTotalComponent]=useState<boolean>(false)
  const [finalComponentPrice,setFinalComponentPrice]=useState<number>(0)
  const[totalComponents,setTotalComponents]=useState<number>(0)
  const [showFinalPrice,setShowFinalPrice]=useState<boolean>(false)
  const [secondTerm,setSecondTerm]=useState<number>(0)
  const dispatch=useDispatch()
  // { <img src ={URL.createObjectURL(selectedFile)} 
  const [imagePreview, setImagePreview]=useState('')
  const { createCollectionData } = useSelector(
    (state: any) => state.wallet
  );
  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    const minsize = 143969
    const validFileExtensions = ["image/jpg", "image/jpeg", "image/bmp", "image/png"];
    if (!fileList) return;
    setImagePreview(URL.createObjectURL(fileList[0]))
    const file = fileList[0].size
    const filetype = fileList[0].type
    var found = validFileExtensions.includes(filetype);
    if (file >= minsize) {
      if (found) {
        setCollectionData({ ...collectionData, selectedFile: fileList[0] })
        setMessage("file upload successfully")
        setShow(true)
      }
      else {
        setMessage("type not supported please provide image only")
      }
    }
    else {
      setMessage("size is less than required please provide image with greater resolution")
    }
  };
  const showForm = () => {
    setShow(true)
  }
   const showData = (event: any) => {
  // event.preventDefault()
      dispatch(createCollection(collectionData))
  
    }
    useEffect(() => {
       const totalcomponents=(collectionData.nftnumber * collectionData.componentsnumber) - 1 
       const secondterm=collectionData.initialprice+collectionData.incrementprice;
       setSecondTerm(secondterm) 
       const totalincrementprice= totalcomponents * collectionData.incrementprice;
       const finalprice=collectionData.initialprice+ totalincrementprice;
       setFinalComponentPrice(finalprice)   
    },[collectionData.incrementprice, collectionData.componentsnumber, 
      collectionData.initialprice,collectionData.nftnumber]);

     useEffect(() =>{
      const numberOfcomponents= collectionData.nftnumber * collectionData.componentsnumber;
      setTotalComponents(numberOfcomponents)
     },[collectionData.nftnumber,collectionData.componentsnumber])
    
  return (
    <Container>
      <Button  onClick={showForm}>Create Collection </Button>
      {show ?
        <Form>
          <Title>Upload the Art</Title> 
           <FileInput type="file" id="file" style={{display: "none"}}
            onChange={(e) => handleImageChange(e)}
            required />
           <UploadLabel htmlFor="file">
           <span style={{fontSize:"70px" ,padding:"15px"}} className='fal fa-cloud-upload-alt'> </span>
           Upload</UploadLabel>
           <span>File types supported: JPG,PNG,GIF</span>
           <Title>What is name of your collection?</Title>
          <Input width="300px" value={collectionData.collectionName} type="text"
            onChange={e => (setCollectionData({ ...collectionData, collectionName: (e.target.value) }))}
            required />
          <Title>What is the theme to follow for this collection?</Title>
          <ThemeField value={collectionData.themename} type="text"
            onChange={e => (setCollectionData({ ...collectionData, themename: (e.target.value) }))}
            required />
          <ComponentInfo>
          <div style={{display:"flex", flexDirection:"column"}}>  
          <Title>How many NFT's to be created under this collection? </Title>
          <span>Min - 100 | Max - 5000 </span>
          <Input width="300px"
            value={collectionData.nftnumber}
            placeholder="enter the number of NFT's"
            type="number"
            min="100"
            onChange={e => (setCollectionData({ ...collectionData, nftnumber: (parseInt(e.target.value)) }))}
            required
          />
          <Title>What is the minimum number of components to 
             create a NFT?
             </Title>
             <span>Min - 5 | Max - 15 </span>
          <Input width="300px"
            value={collectionData.componentsnumber}
            placeholder="enter the number of NFT's"
            type="number"
            min="5"
            onChange={e => (setCollectionData({ ...collectionData, componentsnumber: (parseInt(e.target.value)) }), setShowTotalComponent(true))}
            required
          />
         </div>
         {showTotalComponent ?
        <div style={{display:"flex", flexDirection:"column", margin:"20px"}}> 
          <Title style={{fontWeight:500}}>Total number of components = 
            { totalComponents} || 0
          </Title>
               </div>
:<div></div>}
           </ComponentInfo>
          <ComponentInfo>
          <div style={{display:"flex", flexDirection:"column"}}>
           <Title>What is the price of the 1st component in USD?</Title>
           <span>Min - 0.0001 | Max - ∞</span>
            <Input width="300px"
              value={collectionData.initialprice}
              placeholder="price for the 1st component in US"
              type="number"
              min="0"
              onChange={e => (setCollectionData({ ...collectionData, initialprice: (parseFloat(e.target.value)) }))}
              required
            />
            <Title>What is the price increment for subsequent components in USD?</Title>
            <span>Min - 0.0001 | Max-∞</span>
            <Input width="300px" 
              value={collectionData.incrementprice}
              placeholder="price increment for subsequent component in USD"
              type="number"
              min="0"
              required
              onChange={e => (setCollectionData({ ...collectionData, incrementprice: (parseFloat(e.target.value) )  } ) ,setShowFinalPrice(true)  ) }
            />
           </div> 
           <div style={{display:"flex", flexDirection:"column",marginTop:"20px"}}>
            {showFinalPrice ?
           <> 
          <Title style={{fontWeight:500}}>The price of the first component is ={collectionData.initialprice.toFixed(6) || 0}  </Title>
          <Title style={{fontWeight:500}}> price of the 2nd component is ={secondTerm || 0}  </Title>
          <Title style={{fontWeight:500}}> Price of {totalComponents} component is  = {finalComponentPrice || 0} 
           
</Title>
<Title style={{fontWeight:500}}>The total price of the art is {finalComponentPrice || 0}</Title>
</>
:<div></div>}
</div>
</ComponentInfo>
          {message ? <ErrorMessage>{message}</ErrorMessage> : <div></div>}
          <ButtonGroup>
          <Button>Cancel</Button>
            <Button  onClick={showData}>  Save</Button>
            <Button> Save as draft</Button>
          </ButtonGroup>
        </Form>
        : <div></div>}
     </Container>
     )

}
export default CreateCollection