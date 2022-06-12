import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';

export default function EditProduct() {

  const [token, setToken] = useState()
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  const [professional_fees, setProfessionalFees] = useState()
  const [legal_fees, setLegalFees] = useState()
  const [expiry_date, setExpiryDate] = useState()
  const [reward_points, setRewardPoints] = useState()
  const [file, setFile] = useState()
  const [file_url, setFileUrl] = useState()
  const [file_base64, setFile64] = useState()
  const navigate = useNavigate()
  const {state} = useLocation()
  useEffect(() => {
      setName(state.product.name == undefined ? state.product.name : null)
      setCategory(state.product.category == undefined ? state.product.category: null)
      setPrice(state.product.price == undefined ? state.product.price : null)
      setFileUrl(state.product.file_url == undefined ? state.product.file_url: "www.sampleurl.com")
    async function verifyToken() {
      let accessToken = ''
      try {
        accessToken = localStorage.getItem('token')
        accessToken = JSON.parse(accessToken)
        if (accessToken === null || accessToken === undefined) {
          navigate('/')
        } else {
          setToken(accessToken)
        }
      } catch (e) { console.log("Error in token", e) }
      console.log(accessToken)
    }
    verifyToken()

  }, [])




  const handleSubmit = async (e) => {

    async function readFileAsDataURL() {
      let result_base64 = await new Promise((resolve) => {
          let fileReader = new FileReader();
          fileReader.onload = (e) => resolve(fileReader.result);
          fileReader.readAsDataURL(file);
      });
  
      console.log(result_base64); // aGV5IHRoZXJl...
  
      return result_base64;
  }
  let dataURL;
  if(file == undefined || file == null){
    file_base64 = undefined
  } else {
    try {
        dataURL = await readFileAsDataURL() 
      } catch(e) {
    
      }
  }

    
    axios({
      method: "POST",
      url: "http://3.108.219.92:3800/v1/user/product/update",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      data: {
        name: name,
        category: category,
        price: price,
        quantity: quantity,
        professional_fees: professional_fees,
        legal_fees: legal_fees,
        expiry_date: expiry_date,
        file_base64: dataURL,
        file_url: file_url,
        filename: file.name
      }
    }).then(async data => {
      console.log(data)
      let user = data.data.data
      console.log(user)
    }).catch(error => {
      console.log(error)
    })
  }


  return (
    <>
      {console.log(state)}
      <div className='home'>
      
        <Sidebar />
        <div className='homeContainer'>
          <div className='container'>
          
          <form>
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">Create A New Product</span>
            </div>
            <div className='row m-0 p-0'>
              <fieldset className='border p-4'>
                <legend className='float-none fw-bold '>Information</legend>

                <div className='row m-0 p-0'>
                  <div className='col-md-4 col-sm-12'>
                    <label for="first-name" className='form-label'>Product Name</label>
                    <input type="text" className="form-control" id='first-name' value={name} onChange={(e) => { setName(e.target.value) }}></input>
                  </div>
                  <div className='col-md-4 col-sm-12'>
                    <label for="last-name" className='form-label'>Category</label>
                    <select className='form-select' aria-label="--Select--" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                      <option>--Select--</option>
                      <option value="gst-product">GST Product</option>
                      <option value="itr-product">ITR Product</option>  
                      <option value="other-product">Other Product</option>
                    </select>
                  </div>
                  <div className='col-md-4 col-sm-12'>
                    <label for="last-name" className='form-label'>Price</label>
                    <input type="text" className="form-control" id='last-name' value={price} onChange={(e) => { setPrice(e.target.value) }}></input>
                  </div>
                </div>

                <div className='row m-0 p-0'>
                  <div className='col-md-4 col-sm-12'>
                    <label for="first-name" className='form-label'>Quantity</label>
                    <input type="text" className="form-control" id='first-name' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}></input>
                  </div>
                  <div className='col-md-4 col-sm-12'>
                    <label for="last-name" className='form-label'>Professional Fees</label>
                    <input type="text" className="form-control" id='last-name' value={professional_fees} onChange={(e) => { setProfessionalFees(e.target.value) }}></input>
                  </div>
                  <div className='col-md-4 col-sm-12'>
                    <label for="last-name" className='form-label'>Legal Fees</label>
                    <input type="text" className="form-control" id='last-name' value={legal_fees} onChange={(e) => { setLegalFees(e.target.value) }}></input>
                  </div>
                </div>
                <div className='row m-0 p-0'>
                  <div className='col-md-4 col-sm-12'>
                    <label for="last-name" className='form-label'>Expiry Date</label>
                    <input type="date" className="form-control" id='last-name' value={expiry_date} onChange={(e) => { setExpiryDate(e.target.value) }}></input>
                  </div>
                  <div className='col-md-4 col-sm-12'>
                    <label for="last-name" className='form-label'>Reward Points</label>
                    <input type="number" className="form-control" id='last-name' value={reward_points} onChange={(e) => { setRewardPoints(e.target.value) }}></input>
                  </div>
                  <div className='col-md-4 col-sm-12'>
                    <label for="last-name" className='form-label'>Add Sample File</label>
                    <input type="file" className="form-control" id='last-name' onChange={(e) => { setFile(e.target.files[0]) }}></input>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className='row m-0 p-3'>
              <button className='submit-button' onClick={handleSubmit}>Update</button>
            </div>
          </form>
          {/* <div className='row m-0 p-0 border'>
            <span className="fs-3 text-uppercase itr-heading-text">All Product List</span>
          </div> */}
        </div>
        </div>
      </div>
     
    </>
  )
}
