import React, { useEffect, useId, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Sidebar from '../sidebar/Sidebar'

export default function ViewGstRegistration() {
    const navigate = useNavigate()
    const [token, setToken] = useState()
    const [bdm_email, setBdmEmail] = useState()
    const [bdm_id, setBdmId] = useState()
    const [bdm_list, setAllBdm] = useState()
    const { state } = useLocation()
    const gst = state.gst
    useEffect(() => {
        async function checkToken() {
            let token;
            try {
                token = await JSON.parse(localStorage.getItem('token'))
                if (token === null || token === undefined) {
                    navigate('/')
                }
                console.log("token set")
                setToken(token)
            } catch (e) {
                console.log(e)
            }
            axios({
                method: "GET",
                url: "http://3.108.219.92:3800/v1/user/bdm/all",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(data => {
                // console.log(data)
                console.log(data.data)
                setAllBdm(data.data)
            }).catch(error => {
                console.log(error)
            })
        }
        checkToken()

    }, [])


    const handleSubmit = () => {
        let id = gst._id
        let arr = bdm_list.filter(bdm => {return bdm.loginId == bdm_id})
        let data = { id, bdm_email, bdm_id }
        console.log(data)
        axios({
            method: "POST",
            url: "http://3.108.219.92:3800/v1/user/gst/registration/assigntobdm",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: data
        }).then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error)
        })

    }


    return (
        <>
            {console.log(gst)}
            <div className='home'>
                <Sidebar />
                <div className='homeContainer'>
                    <div className='container'>
                        <div className='row m-0 p-4'>
                            <span className='heading-text'>GST REGISTRATION INFO</span>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-5 col-sm-12'>
                                <span className='subheading-text'>GST FILE Details</span>
                                <table className='table'>
                                    <tr>
                                        <th className='table-data-cell'>Coupon Id</th>
                                        <td className='table-data-cell'>{gst.gst_file_info.coupon_id != undefined ? gst.gst_file_info.coupon_id : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Coupon Name</th>
                                        <td className='table-data-cell'>{gst.gst_file_info.coupon_name != undefined ? gst.gst_file_info.coupon_name : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>GST Ack No</th>
                                        <td className='table-data-cell'>{gst.gst_file_info.gst_ack_no != undefined ? gst.gst_file_info.gst_ack_no : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>GST No</th>
                                        <td className='table-data-cell'>{gst.gst_file_info.gst_no != undefined ? gst.gst_file_info.gst_no : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>GST Portal Username</th>
                                        <td className='table-data-cell'>{gst.gst_file_info.gst_portal_username != undefined ? gst.gst_file_info.gst_portal_username : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>GST Portal Username</th>
                                        <td className='table-data-cell'>{gst.gst_file_info.gst_portal_password != undefined ? gst.gst_file_info.gst_portal_password : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>GST Type</th>
                                        <td className='table-data-cell'>{gst.gst_file_info.gst_type != undefined ? gst.gst_file_info.gst_type : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>GST Subtype</th>
                                        <td className='table-data-cell'>{gst.gst_file_info.gst_subtype != undefined ? gst.gst_file_info.gst_subtype : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Login ID</th>
                                        <td className='table-data-cell'>{gst.gst_file_info.loginId != undefined ? gst.gst_file_info.loginId : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Month</th>
                                        <td className='table-data-cell'>{gst.gst_file_info.month != undefined ? gst.gst_file_info.month : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Year</th>
                                        <td className='table-data-cell'>{gst.gst_file_info.year != undefined ? gst.gst_file_info.year : null}</td>
                                    </tr>

                                </table>
                            </div>
                            <div className='col-md-1 col-sm-12'>

                            </div>
                            <div className='col-md-5 col-sm-12'>
                                <span className='subheading-text'>BUSINESS Details</span>
                                <table className='table'>
                                    <tr>
                                        <th className='table-data-cell'>GST Client ID</th>
                                        <td className='table-data-cell'>{gst.business_info.gst_client_id != undefined ? gst.business_info.gst_client_id : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business Name</th>
                                        <td className='table-data-cell'>{gst.business_info.business_name != undefined ? gst.business_info.business_name : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business Address</th>
                                        <td className='table-data-cell'>{gst.business_info.business_address != undefined ? gst.business_info.business_address : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business District</th>
                                        <td className='table-data-cell'>{gst.business_info.business_district != undefined ? gst.business_info.business_district : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business State</th>
                                        <td className='table-data-cell'>{gst.business_info.business_state != undefined ? gst.business_info.business_state : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business Ward</th>
                                        <td className='table-data-cell'>{gst.business_info.business_ward != undefined ? gst.business_info.business_ward : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business Pincode</th>
                                        <td className='table-data-cell'>{gst.business_info.business_pincode != undefined ? gst.business_info.business_pincode : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business Pan No</th>
                                        <td className='table-data-cell'>{gst.business_info.business_pan_no != undefined ? gst.business_info.business_pan_no : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business Mobile</th>
                                        <td className='table-data-cell'>{gst.business_info.business_mobile != undefined ? gst.business_info.business_mobile : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Entity Details</th>
                                        <td className='table-data-cell'>{gst.business_info.entity_detail != undefined ? gst.business_info.entity_detail : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business Nature</th>
                                        <td className='table-data-cell'>{gst.business_info.business_nature != undefined ? gst.business_info.business_nature : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business Objective</th>
                                        <td className='table-data-cell'>{gst.business_info.business_object != undefined ? gst.business_info.business_object : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business Annual Turnover</th>
                                        <td className='table-data-cell'>{gst.business_info.business_annual_turnover != undefined ? gst.business_info.business_annual_turnover : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business Total Purchase Amount</th>
                                        <td className='table-data-cell'>{gst.business_info.business_total_purchase_amount != undefined ? gst.business_info.business_total_purchase_amount : null}</td>
                                    </tr>
                                    <tr>
                                        <th className='table-data-cell'>Business Total Sales Amount</th>
                                        <td className='table-data-cell'>{gst.business_info.business_total_sales_amount != undefined ? gst.business_info.business_total_sales_amount : null}</td>
                                    </tr>
                                </table>
                            </div>

                            <div className='row m-0 p-0'>
                                <div className='col-md-5 col-sm-12'>
                                    <span className='subheading-text'>Direcotr Details</span>

                                    <table className='table'>
                                        <tr>
                                            <th className='table-data-cell'>Director Name</th>
                                            <td className='table-data-cell'>{gst.director_basic_detail.director_name != undefined ? gst.director_basic_detail.director_name : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Father Name</th>
                                            <td className='table-data-cell'>{gst.director_basic_detail.director_father_name != undefined ? gst.director_basic_detail.director_father_name : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Dob</th>
                                            <td className='table-data-cell'>{gst.director_basic_detail.director_dob != undefined ? gst.director_basic_detail.director_dob : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Mobile</th>
                                            <td className='table-data-cell'>{gst.director_basic_detail.director_mobile != undefined ? gst.director_basic_detail.director_mobile : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Email</th>
                                            <td className='table-data-cell'>{gst.director_basic_detail.director_email != undefined ? gst.director_basic_detail.director_email : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Address</th>
                                            <td className='table-data-cell'>{gst.director_basic_detail.director_address != undefined ? gst.director_basic_detail.director_address : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Pincode</th>
                                            <td className='table-data-cell'>{gst.director_basic_detail.director_pincode != undefined ? gst.director_basic_detail.director_pincode : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Pan No</th>
                                            <td className='table-data-cell'>{gst.director_basic_detail.director_pan_no != undefined ? gst.director_basic_detail.director_pan_no : null}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className='col-md-1 col-sm-12'></div>
                                <div className='col-md-5 col-sm-12'>
                                    <span className='subheading-text'>Authorized Person Details</span>

                                    <table className='table'>
                                        <tr>
                                            <th className='table-data-cell'>Directore Name</th>
                                            <td className='table-data-cell'>{gst.authorized_signature_basic_detail.authorized_name != undefined ? gst.authorized_signature_basic_detail.authorized_name : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Father Name</th>
                                            <td className='table-data-cell'>{gst.authorized_signature_basic_detail.authorized_father_name != undefined ? gst.authorized_signature_basic_detail.authorized_father_name : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Dob</th>
                                            <td className='table-data-cell'>{gst.authorized_signature_basic_detail.authorized_dob != undefined ? gst.authorized_signature_basic_detail.authorized_dob : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Mobile</th>
                                            <td className='table-data-cell'>{gst.authorized_signature_basic_detail.authorized_mobile != undefined ? gst.authorized_signature_basic_detail.authorized_mobile : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Email</th>
                                            <td className='table-data-cell'>{gst.authorized_signature_basic_detail.authorized_email != undefined ? gst.authorized_signature_basic_detail.authorized_email : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Address</th>
                                            <td className='table-data-cell'>{gst.authorized_signature_basic_detail.authorized_address != undefined ? gst.authorized_signature_basic_detail.authorized_address : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Pincode</th>
                                            <td className='table-data-cell'>{gst.authorized_signature_basic_detail.authorized_pincode != undefined ? gst.authorized_signature_basic_detail.authorized_pincode : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Director Pan No</th>
                                            <td className='table-data-cell'>{gst.authorized_signature_basic_detail.authorized_pan_no ? gst.authorized_signature_basic_detail.authorized_pan_no : null}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div className='row m-0 p-0'>
                                <div className='col-md-5 col-sm-12'>
                                    <span className='subheading-text'>Bank Details</span>

                                    <table className='table'>
                                        <tr>
                                            <th className='table-data-cell'>Account Holder Name</th>
                                            <td className='table-data-cell'>{gst.bank_details.account_holder_name != undefined ? gst.bank_details.account_holder_name : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Account Type</th>
                                            <td className='table-data-cell'>{gst.bank_details.account_type != undefined ? gst.bank_details.account_type : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Bank Address</th>
                                            <td className='table-data-cell'>{gst.bank_details.bank_address != undefined ? gst.bank_details.bank_address : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Bank Name</th>
                                            <td className='table-data-cell'>{gst.bank_details.bank_name != undefined ? gst.bank_details.bank_name : null}</td>
                                        </tr>
                                        <tr>
                                            <th className='table-data-cell'>Account Holder Name</th>
                                            <td className='table-data-cell'>{gst.bank_details.ifsc_code != undefined ? gst.bank_details.ifsc_code : null}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className='col-md-1 col-sm-12'></div>
                                <div className='col-md-5 col-sm-12'>
                                    <span className='subheading-text'>Operations</span>
                                    <div className='row m-0 p-0'>
                                        <div className='col-md-8 col-sm-12'>
                                            <label for="last-name" className='form-label'>Enter Email to Assign</label>
                                            <select className='form-select' aria-label="--Select--" value={bdm_id} onChange={(e) => setBdmId(e.target.value)}>
                                                <option>--Select--</option>
                                                {
                                                    bdm_list ? bdm_list.map(bdm => {
                                                        return(
                                                            <option value={bdm.loginId}>{bdm.loginId}</option>
                                                        )
                                                    }) : null
                                                }
                                                {/* <option value="1">Original Return</option>
                                                <option value="1">Revised Return</option> */}
                                            </select>
                                            {/* <input type="email" className="form-control" id='last-name' onChange={(e) => setBdmEmail(e.target.value)}></input> */}
                                        </div>

                                        <div className='col-md-4 col-sm-12 mt-4'>

                                            <button className='btn btn-primary' onClick={handleSubmit}>Assign</button>
                                        </div>
                                        <div className='row m-0 p-0'>
                                            <div className='col-md-8 col-sm-12'>
                                                <label for="last-name" className='form-label'>Update Status</label>
                                                <select className='form-select' aria-label="--Select--">
                                                    <option>--Select--</option>
                                                    <option value="1">Under Review</option>
                                                    <option value="1">Under Processing</option>
                                                    <option value="">Panding for ARN</option>
                                                    <option value="">Panding for GST No</option>
                                                    <option value="">Rejection from GST Department</option>
                                                    <option value="">GST Form Delivered</option>
                                                    <option value="">GST Form Rejected</option>
                                                </select>
                                            </div>
                                            <div className='col-md-4 col-sm-12 mt-4'>

                                                <button className='btn btn-primary' onClick={handleSubmit}>Update Status</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


