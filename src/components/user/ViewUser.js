import React from 'react'
import Avatar from '../../assets/avatar-img.png'

export default function ViewUser() {


  return (
    <>
      <div className='container'>
        <div className='row m-0 p-0 border'>
          <span className="fs-3 text-uppercase itr-heading-text">User Information</span>
        </div>
        <div className='row m-0 p-0'>
        <div className='col-md-4 col-sm-12 p-3'>
                <img src={Avatar} alt="..." style={{'height':'200px', 'width':'200px'}}/>
              </div>
        </div>

        <div className='row m-0 p-0'>
          <fieldset className='border p-4'>
            <legend className='float-none fw-bold '>Personal Information</legend>

            <div className='row m-0 p-0'>
            <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Login Id</label>
                <input type="text" className="form-control" id='first-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Password</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Type</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>First Name</label>
                <input type="text" className="form-control" id='first-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Middle Name</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Last Name</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Date of Birth</label>
                <input type="text" className="form-control" id='first-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Father's Name</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Adhar No</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Adhar Enrollment Id</label>
                <input type="text" className="form-control" id='first-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Gender</label>
                <input type="text" className="form-control" id='first-name' disabled></input>
              </div>
             
            </div>

          </fieldset>
        </div>

        <div className='row m-0 p-0'>
          <fieldset className='border p-4'>
            <legend className='float-none fw-bold '>Address Details</legend>
            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Name of Premises/Building/Village</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Flat/Door/Building</label>
                <input type="text" className="form-control" id='pan' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Road/Street</label>
                <input type="text" className="form-control" id='pan' disabled></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Area/Locality</label>
                <input type="text" className="form-control" id='first-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Town/City</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>State</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>District</label>
                <input type="text" className="form-control" id='first-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Pin Code</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Country</label>
                <input type="text" className="form-control" id='last-name' value="INDIA" disabled></input>
              </div>
            </div>

          </fieldset>
        </div>

        <div className='row m-0 p-0'>
          <fieldset className='border p-4'>
            <legend className='float-none fw-bold '>Contact Details</legend>
            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Landline</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Primary Mobile No</label>
                <input type="text" className="form-control" id='pan' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Secondary Mobile No</label>
                <input type="text" className="form-control" id='pan' disabled></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Primary Email-Id</label>
                <input type="text" className="form-control" id='first-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Secondary Email-Id</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
            </div>
          </fieldset>
        </div>
        <div className='row m-0 p-0'>
          <fieldset className='border p-4'>
            <legend className='float-none fw-bold '>Bank Details</legend>
            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="last-name" className='form-label'>Bank IFSC Code</label>
                <input type="text" className="form-control" id='last-name' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Bank Name</label>
                <input type="text" className="form-control" id='pan' disabled></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                <label for="pan" className='form-label'>Account Type</label>
                <input type="text" className="form-control" id='pan' disabled></input>
              </div>
            </div>

            <div className='row m-0 p-0'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Account No</label>
                <input type="text" className="form-control" id='first-name' disabled></input>
              </div>
            </div>
          </fieldset>
        </div>
        {/* <div className='row m-0 p-3'>
          <button className='submit-button'>Update</button>
        </div> */}
      </div>
    </>
  )
}
