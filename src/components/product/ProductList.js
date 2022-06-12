import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function ProductList() {
  const [token, setToken] = useState()
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState()
  const [name, setName] = useState()
  const [id, setProductId] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    console.log("product list rendered")
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
      console.log(token)
      axios({
        method: "GET",
        url: "http://3.108.219.92:3800/v1/user/allproduct",
        data: {},
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      }).then(data => {
        console.log(data.data.data)
        setProducts(data.data.data)
      }).catch(error => {
        console.log(error)
      })
    }
    verifyToken()

  }, [])

  const getAllProducts = () => {
    axios({
      method: "GET",
      url: "http://3.108.219.92:3800/v1/user/allproduct",
      data: {},
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(data => {
      // console.log(data.data.data)
      setProducts(data.data.data)
    }).catch(error => {
      console.log(error)
    })
  }

  const handleSubmit = () => {
    let data = { category }
    axios({
      method: "POST",
      url: "http://3.108.219.92:3800/v1/user/products/bycategory",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      data: data
    }).then(data => {
      if (data.status == 200) {
        if (data.data.length > 0)
          setProducts(data.data)
        else {
          getAllProducts()
        }
      } else {
        console.log("Some error while searching")
      }
    }).catch(error => {
      console.log(error)
    })
  }

  const handleDelete = (id) => {
    console.log("Product is is", id);
    let data = { id }
    console.log(data)

    axios({
      method: "POST",
      url: "http://3.108.219.92:3800/v1/user/product/delete",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      data: data
    }).then(async data => {
      // console.log(data)
      // console.log(data.data)
      if(data.status == 200) {
        await toast.success('Product Deleted Successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
          
      } else {
        toast.error('There is some error while deleting product please try again letter', {
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
      toast.error('There is some error while deleting product please try again letter', {
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

  const handleFilter = () => {
    let product_list = products
    let product_temp = products.filter(product => {
      if(product.name == name || product.category == category || product.product_id == id) {
        return product
      }
    })
    console.log("filtered products are", product_temp)
    if(product_temp.length > 0) {
      setProducts(product_temp)
    } else {
      toast.info('No Record Found', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      setProducts(product_list)
    }
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
        <Sidebar />
        <div className='homeContainer'>
          <div className='container'>
            <div className='row m-0 p-3'>
              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>Enter Id</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => { setProductId(e.target.value) }}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>Enter Name</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => { setName(e.target.value) }}></input>
              </div>

              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>Enter Category</label>
                <select className='form-select' aria-label="--Select--" value={category} onChange={(e) => {setCategory(e.target.value)}}>
                        <option>--Select--</option>
                        <option value="gst-product">GST Product</option>
                        <option value="itr-product">ITR Product</option>
                        <option value="other-product">Other Product</option>
                    </select>
              </div>
              <div className='col-md-3 col-sm-12 mt-4'>
                < button className='submit-button'  onClick={handleFilter}>Search</button>
              </div>
            </div>
            
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">All Products</span>
            </div>
            <div className='row m-0 p-0'>
              <table className='table table-bordered text-center'>
                <thead>
                  <tr>
                    <td className='fw-bolder'>Product ID</td>
                    <td className='fw-bolder'>Product Name</td>
                    <td className='fw-bolder'>Product Category</td>
                    <td className='fw-bolder'>Product Price</td>
                    <td className='fw-bolder'>Professional Fees</td>
                    <td className='fw-bolder'>Legal Fees</td>
                    <td className='fw-bolder'>Quantity</td>
                    {/* <td>Is Active</td> */}
                    <td className='fw-bolder'>Expiry Date</td>
                    <td className='fw-bolder'>Edit</td>
                    <td className='fw-bolder'>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr>
                      <td>{product.product_id}</td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                      <td>{product.professional_fees}</td>
                      <td>{product.legal_fees}</td>
                      <td>{product.quantity}</td>
                      {/* <td>{product.is_active}</td> */}
                      <td>{product.expiry_date}</td>
                      <td className='fw-bolder color-blue cursor-pointer' onClick={() => navigate(`/product/update/${product._id} `, { state: { product } })}>Edit</td>
                      <td className='fw-bolder text-danger cursor-pointer' onClick={() => { handleDelete(product._id) }}>Delete</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
