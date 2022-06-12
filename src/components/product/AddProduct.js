import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';


export default function AddProduct() {

  const [token, setToken] = useState()
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [subcategory, setSubCategory] = useState()
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  const [professional_fees, setProfessionalFees] = useState()
  const [legal_fees, setLegalFees] = useState()
  const [expiry_date, setExpiryDate] = useState()
  const [reward_points, setRewardPoints] = useState()
  const [file, setFile] = useState()
  const [file_base64, setFile64] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    console.log("Add product render")
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
    // console.log("token in handle submit", token)
    e.preventDefault()
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
    let filename;
    try {
      dataURL = await readFileAsDataURL()
      filename = file.name
    } catch (e) {

    }
    console.log(dataURL)

    axios({
      method: "POST",
      url: "http://3.108.219.92:3800/v1/user/add/product",
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
        filename: filename,
        subcategory: subcategory
      }
    }).then(async data => {
      if (data.status == 200) {
        toast.success('Product Added Successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      } else {
        toast.error('There is some error while adding product', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }

    }).catch(error => {
      toast.error('There is some error while adding product', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    })
  }


  return (
    <>

      <div className='home'>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
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
                    <div className='col-md-3 col-sm-12'>
                      <label for="first-name" className='form-label'>Product Name</label>
                      <input type="text" className="form-control" id='first-name' onChange={(e) => { setName(e.target.value) }}></input>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                      <label for="last-name" className='form-label'>Category</label>
                      <select className='form-select' aria-label="--Select--" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                        <option>--Select--</option>
                        <option value="gst-product">GST Product</option>
                        <option value="itr-product">ITR Product</option>
                        <option value="tds-product">TDS Product</option>
                        <option value="other-product">Other Product</option>
                      </select>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                      <label for="last-name" className='form-label'>Sub Category</label>
                      <select className='form-select' aria-label="--Select--" value={subcategory} onChange={(e) => { setSubCategory(e.target.value) }}>
                        <option>--Select--</option>
                        <option value="composition">composition</option>
                        <option value="non-composition">non-composition</option>
                        <option value="non-composition">ITR Product</option>
                        <option value="other-product">Other Product</option>
                      </select>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                      <label for="last-name" className='form-label'>Price</label>
                      <input type="text" className="form-control" id='last-name' onChange={(e) => { setPrice(e.target.value) }}></input>
                    </div>
                  </div>

                  <div className='row m-0 p-0'>
                    <div className='col-md-3 col-sm-12'>
                      <label for="first-name" className='form-label'>Quantity</label>
                      <input type="text" className="form-control" id='first-name' onChange={(e) => { setQuantity(e.target.value) }}></input>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                      <label for="last-name" className='form-label'>Professional Fees</label>
                      <input type="text" className="form-control" id='last-name' onChange={(e) => { setProfessionalFees(e.target.value) }}></input>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                      <label for="last-name" className='form-label'>Legal Fees</label>
                      <input type="text" className="form-control" id='last-name' onChange={(e) => { setLegalFees(e.target.value) }}></input>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                      <label for="last-name" className='form-label'>Expiry Date</label>
                      <input type="date" className="form-control" id='last-name' onChange={(e) => { setExpiryDate(e.target.value) }}></input>
                    </div>
                  </div>
                  <div className='row m-0 p-0'>

                    <div className='col-md-3 col-sm-12'>
                      <label for="last-name" className='form-label'>Reward Points</label>
                      <input type="number" className="form-control" id='last-name' onChange={(e) => { setRewardPoints(e.target.value) }}></input>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                      <label for="last-name" className='form-label'>Add Sample File</label>
                      <input type="file" className="form-control" id='last-name' onChange={(e) => { setFile(e.target.files[0]) }}></input>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className='row m-0 p-3'>
                <button className='submit-button' onClick={handleSubmit}>Create</button>
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
