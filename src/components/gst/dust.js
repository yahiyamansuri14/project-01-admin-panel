<div className='container'>
                        <div className='row m-0 p-0 '>
                            <span className="fs-3 text-uppercase itr-heading-text">GST Registration</span>
                        </div>

                        <div className='row m-0 p-0'>
                            <fieldset className='border p-4'>
                                <legend className='float-none fw-bold '>Business Details</legend>
                                <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Coupon No</label>
                                <input type="text" className="form-control" id='last-name' disabled value={gst.gst_file_info.coupon_id ? gst.gst_file_info.coupon_id : null}></input>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Coupon Name</label>
                                <input type="text" className="form-control" id='last-name'  disabled value={gst.gst_file_info.coupon_name ? gst.gst_file_info.coupon_name : null}></input>
                            </div>
                        </div>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>GST Type</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Entity Details</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Nature of Business</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="last-name" className='form-label'>Firm/Company/Legal Name</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Business Pan Number</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Mobile Number</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>State</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>District</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-12 col-sm-12'>
                                        <label for="last-name" className='form-label'>Address</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Ward/Circle</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Pin Code</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Annual Turnover</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-12 col-sm-12'>
                                        <label for="last-name" className='form-label'>Business Object:(Description of Business)</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                        <div className='row m-0 p-0'>
                            <fieldset className='border p-4'>
                                <legend className='float-none fw-bold'>Proprietor/Partner/Director/Member's Basic Details</legend>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Name as Per PAN Card</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="pan" className='form-label'>Father's Name</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="pan" className='form-label'>DOB</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="pan" className='form-label'>PAN Number</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>

                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="first-name" className='form-label'>Aadhar Number</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Mobile Number</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Email Id</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Pin Code</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>

                                <div className='row m-0 p-0'>
                                    <div className='col-md-12 col-sm-12'>
                                        <label for="first-name" className='form-label'>Address</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>

                            </fieldset>
                        </div>

                        <div className='row m-0 p-0'>
                            <fieldset className='border p-4'>
                                <legend className='float-none fw-bold'>Authorized signature Basic Details</legend>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Name as Per PAN Card</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="pan" className='form-label'>Father's Name</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="pan" className='form-label'>DOB</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="pan" className='form-label'>PAN Number</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>

                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="first-name" className='form-label'>Aadhar Number</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Mobile Number</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Email Id</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Pin Code</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>

                                <div className='row m-0 p-0'>
                                    <div className='col-md-12 col-sm-12'>
                                        <label for="first-name" className='form-label'>Address</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                </div>

                            </fieldset>
                        </div>

                        <div className='row m-0 p-0'>
                            <fieldset className='border p-4'>
                                <legend className='float-none fw-bold '>Bank Details</legend>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Account Holder Name</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="pan" className='form-label'>Account Number</label>
                                        <input type="text" className="form-control" id='last-name' ></input>
                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Account Type</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="pan" className='form-label'>IFSC Code</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                </div>

                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="first-name" className='form-label'>Bank Name</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                    <div className='col-md-9 col-sm-12'>
                                        <label for="first-name" className='form-label'>Bank Address</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className='row m-0 p-0'>
                            <fieldset className='border p-4'>
                                <legend className='float-none fw-bold'>Attachments</legend>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Photo:(.jpeg or .jpg)</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="pan" className='form-label'>Aadhar Card:(.pdf)</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="pan" className='form-label'>Cancle Cheque / Bank Statement(.pdf)</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="pan" className='form-label'>Light Bill:(.pdf)</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                </div>

                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="first-name" className='form-label'>Rent Aggrement:(.pdf)</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Deed / Rent Aggrement / Co-Letter:(.pdf)</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Authorization Letter:(.pdf)</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="last-name" className='form-label'>Other Document:(.pdf)</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                </div>

                                <div className='row m-0 p-0'>
                                    <div className='col-md-3 col-sm-12'>
                                        <label for="first-name" className='form-label'>Pancard:(.pdf)</label>
                                        <input type="text" className="form-control" id='last-name' ></input>

                                    </div>
                                </div>

                            </fieldset>
                        </div>

                        <div className='row m-0 p-3'>
                            <button className='submit-button'>Submit</button>
                        </div>
                    </div>