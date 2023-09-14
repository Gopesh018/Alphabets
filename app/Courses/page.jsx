import React from 'react'
import "../css/courses.css"

function courses() {
  return (
    <div className="course-container">
      <div className="page-1">
        <h2><b>Discover Our Play School Courses</b> Where Little Explorers Grow</h2>

        <p>Welcome to Alphabets play school's Courses Page. We believe in nurturing young minds and fostering a love for learning from the very beginning. Our play school courses are designed to provide a safe, fun, and educational environment for your little ones.</p>
      </div>

      <div className="page-2">

        <h3>Courses</h3>

        <h4>At Alphabets play school, we offer a variety of courses specially crafted for young children:</h4>

        <div className="card-box">

          <div className="cards">
            <div className="img-box">
              <img src="Easy-Craft-ideas-for-kids-d6c8148.webp" alt=" toddler playgroup image" />
            </div>
           <div className="t-box">
           <b>Toddler playgroup</b>
            <p>A gentle introduction to social interaction and early learning for ages 1-2.</p>
           </div>
          </div>

          <div className="cards">
            <div className="img-box">
              <img src="photo-1501686637-b7aa9c48a882.avif" alt="preschool image" />
            </div>
            <div className="t-box">
            <b>Preschool Program</b>
            <p>Engaging activities, creative play, and kindergarten readiness for ages 3-5.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default courses