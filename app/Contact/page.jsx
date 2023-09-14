import React from 'react'
import '../css/contact.css'

function contact() {
  return (
    <div className="contact-container">
      <div className="intro-box">
        <h1>Alphabets Play School</h1>
        <h5><span>Address :</span> Bhagwan Mahaveer Rd, Vasant Kunj,New Delhi, 110070</h5>
        <h5><span>Phone :</span> 011 4104 0577</h5>
        <h5><span>Email :</span> alphabetsplay123@gmail.com</h5>
      </div>
      <div className="query-box">
        <h2>General Inquiries:</h2>
        <h5>
          For general inquiries, admissions, or questions about our programs, please contact us at <b>alphabetsplay123@gmail.com</b>.
        </h5>
        <h2>Admissions</h2>
        <h5>
          If you have questions or need assistance with the admission process, please contact our admissions team at <b>alphabetsplayadmission@gmail.com</b> .
        </h5>
        <h2></h2>
      </div>
    </div>
  )
}

export default contact