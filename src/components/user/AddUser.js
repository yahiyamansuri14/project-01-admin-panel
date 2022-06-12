import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddUser() {

  useEffect( () => {
    async function verifyToken() {
      let accessToken = ''
      try {
        accessToken = await localStorage.getItem('token')
        if(accessToken == null || accessToken == undefined) {
          navigate('/')
        } else {
          setToken(accessToken)
        }
      } catch(e) { }
    }
    verifyToken()
    
  }, [])

  const [token, setToken] = useState()
  const [password, setPassword] = useState()
  const [role, setRole] = useState()
  const [firstName, setFirstName] = useState()
  const [middleName, setMiddleName] = useState()
  const [lastName, setLastName] = useState()
  const [dob, setDob] = useState()
  const [fatherName, setFatherName] = useState()
  const [aadhar_no, setAdharNumber] = useState()
  const [aadhar_enrollment_no, setAdharEnrollmentNo] = useState()
  const [gender, setGender] = useState()
  const [image, setImage] = useState()
  const [address_name, setAddressName] = useState()
  const [address_number, setAddressNumber] = useState()
  const [street, setStreet] = useState()
  const [area, setArea] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [district, setDistrict] = useState()
  const [pincode, setPincode] = useState()
  const [landline, setLandline] = useState()
  const [primary_mobile_no, setPrimaryMobileNo] = useState()
  const [secondary_mobile_no, setSecondaryMobileNo] = useState()
  const [primary_email, setPrimaryEmail] = useState()
  const [secondary_email, setSecondaryEmail] = useState()
  const [bank_ifsc_code, setBankIfscCode] = useState()
  const [bank_name, setBankName] = useState()
  const [account_type, setAccountType] = useState()
  const [account_no, setAccountNumber] = useState() 
  const [base64, setBase64] = useState()
  const navigate = useNavigate()
 

  const stateArray = [
    {'key':1,'name':'Madhya Pradesh'},
    {'key':2,'name':"Chattisgarh"},
    {'key':3,'name':"Maharastra"}
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    let fileReader = new FileReader()
        fileReader.readAsDataURL(image)
        fileReader.onload = () => {
          console.log(fileReader)
      console.log('file is', fileReader.result)
      setBase64(fileReader.result)
        }
    let formData = new FormData()
    formData.append('password',password)
    formData.append('role',role)
    formData.append('firstName',firstName)
    formData.append('middleName',middleName)
    formData.append('lastName',lastName)
    formData.append('dob',dob)
    formData.append('fatherName',fatherName)
    formData.append('aadhar_no',aadhar_no)
    formData.append('aadhar_enrollment_no',aadhar_enrollment_no)
    formData.append('gender',gender)
    formData.append('file',image)
    formData.append('address_name',address_name)
    formData.append('address_number',address_number)
    formData.append('street',street)
    formData.append('area',area)
    formData.append('city',city)
    formData.append('state', state)
    formData.append('district', district)
    formData.append('pincode',pincode)
    formData.append('landline', landline)
    formData.append('primary_email', primary_email)
    formData.append('secondary_email', secondary_email)
    formData.append('primary_mobile_no', primary_mobile_no)
    formData.append('secondary_mobile_no', secondary_mobile_no)
    formData.append('bank_ifsc_code', bank_ifsc_code)
    formData.append('bank_name', bank_name)
    formData.append('account_type', account_type)
    formData.append('account_no', account_no)
    formData.append('base64', base64)
    axios({
      method:"POST",
      url:"http://3.108.219.92:3800/v1/auth/signup",
      data: {
        password, role, firstName, middleName, lastName, dob, fatherName, aadhar_no, aadhar_enrollment_no,
        gender, address_name, address_number, street, area, city,state, district, pincode,landline, primary_email,secondary_email,
        primary_mobile_no, secondary_mobile_no, bank_ifsc_code, bank_name, account_type, account_no, base64
      },
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(async data => {
        let user = data.data.data.data
        console.log(user)
        if(data.data.data.data.loginId) {
          console.log("1")
          toast("User Created Successfully")
        } else {
          console.log("2")
          toast("There is some error while creating user")
        }
    })
    .catch(error => {console.log("3", error) 
    toast("There is some error while creating user")
    })
  }
  


  return (
    <>
    <ToastContainer />
      <div className='container'>
        <form>
        <div className='row m-0 p-0 box-style'>
          <span className="fs-3 text-uppercase itr-heading-text">Create A New User</span>
        </div>
        <div className='row m-0 p-0 '>
          <fieldset className='border p-4 box-style'>
            <legend className='float-none fw-bold '>Personal Information</legend>
          
            <div className='row m-0 p-0 '>
            <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Login Id</label>
                <input type="text" className="form-control" id='first-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="password" className='form-label'>Password</label>
                <input type="text" className="form-control" id='password' onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label' >Type</label>
                <select className='form-select' aria-label="--Select---"value={role} onChange={(e) => setRole(e.target.value)}>
                        <option>--Select--</option>
                        <option value="branch">Branch</option>
                        <option value="bdm">BDM</option>
                        <option value="staff">Staff</option>
                    </select>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>First Name</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => setFirstName(e.target.value) }></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Middle Name</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setMiddleName(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Last Name</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setLastName(e.target.value)}></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Date of Birth</label>
                <input type="date" className="form-control" id='first-name' onChange={(e) => setDob(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Father's Name</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setFatherName(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Adhar No</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setAdharNumber(e.target.value)}></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Adhar Enrollment Id</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => setAdharEnrollmentNo(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Gender</label>
                <select className='form-select' aria-label="--Select--" value={gender} onChange={(e) => setGender(e.target.value)}> 
                        <option>--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Adhar Image:(pdf)</label>
                <input type="file" className="form-control" id='last-name' onChange={(e) => setImage(e.target.files[0])}></input>
              </div>
            </div>

          </fieldset>
        </div>

        <div className='row m-0 p-0 '>
          <fieldset className='border p-4 box-style'>
            <legend className='float-none fw-bold '>Address Details</legend>
            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Name of Premises/Building/Village</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setAddressName(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Flat/Door/Building No</label>
                <input type="text" className="form-control" id='pan' onChange={(e) => setAddressNumber(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Road/Street</label>
                <input type="text" className="form-control" id='pan' onChange={(e) => setStreet(e.target.value)}></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Area/Locality</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => setArea(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Town/City</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setCity(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>State</label>
                <select className='form-select' aria-label="--Select--" value={state} onChange={(e) => setState(e.target.value)}> 
                {stateArray.map((state) => (
                  <option key={state.key} value={state.name}>{state.name}</option>
                ))}
                </select>
                
                {/* <input type="text" className="form-control" id='last-name' onChange={(e) => setState(e.target.value)}></input> */}
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>District</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => setDistrict(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Pin Code</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setPincode(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Country</label>
                <input type="text" className="form-control" id='last-name' value="INDIA" disabled></input>
              </div>
            </div>

          </fieldset>
        </div>

        <div className='row m-0 p-0'>
          <fieldset className='border p-4 box-style'>
            <legend className='float-none fw-bold '>Contact Details</legend>
            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Landline</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setLandline(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Primary Mobile No</label>
                <input type="text" className="form-control" id='pan' onChange={(e) => setPrimaryMobileNo(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Secondary Mobile No</label>
                <input type="text" className="form-control" id='pan' onChange={(e) => setSecondaryMobileNo(e.target.value)}></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Primary Email-Id</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => setPrimaryEmail(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Secondary Email-Id</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setSecondaryEmail(e.target.value)}></input>
              </div>
            </div>
          </fieldset>
        </div>
        <div className='row m-0 p-0'>
          <fieldset className='border p-4 box-style'>
            <legend className='float-none fw-bold '>Bank Details</legend>
            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Bank IFSC Code</label>
                <input type="text" className="form-control" id='last-name' onChange={(e) => setBankIfscCode(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Bank Name</label>
                <input type="text" className="form-control" id='pan' onChange={(e) => setBankName(e.target.value)}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Account Type</label>
                <select className='form-select' aria-label="--Select---" value={account_type} onChange={(e) => setAccountType(e.target.value)}>
                        <option>--Select--</option>
                        <option value="branch">Current</option>
                        <option value="bdm">Saving</option>
                    </select>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Account No</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => setAccountNumber(e.target.value)}></input>
              </div>
            </div>
          </fieldset>
        </div>
        <div className='row m-0 p-3'>
          <button type="submit "className='submit-button' onClick={handleSubmit}>Create</button>
        </div>
        </form>
      </div>

    </>
  )
}
