import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div>
      <div className="container py-4 my-4">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className='text-primary fw-bold mb-3'>About Us</h1>
            <p className="lead ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum corrupti rerum dignissimos rem,
              dolore atque nihil vitae impedit reprehenderit non nemo error ea eaque earum amet iusto doloremque accusantium.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quisquam adipisci, quo enim dignissimos quam similique
              doloribus cum consectetur aspernatur in laudantium molestias temporibus pariatur sit est, nihil, deleniti repudiandae.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3 py-2">Contact Us</NavLink>
          </div>
          <div className="col-md-6 ">
            <img src="image/meeting1.jpg" alt="about us" height="350px"  className='imageTag' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
