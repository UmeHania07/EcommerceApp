import React from 'react'

function Contact() {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-3 my-3">
            <h1>Please Contact Us.</h1>
            <p className='fw-bold'>If You Have Any Query.</p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="image/contact.png" alt="contact us" height="400px" width="400px" />
          </div>
          <div className="col-6">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleForm" placeholder="Enter Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
              </div>
              <button type="submit" className="btn btn-outline-primary mt-2">Sent Message</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
