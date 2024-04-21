import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <div class="jumbotron text-center">
      <h1 class="display-4">Contact Page</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore enim animi suscipit quibusdam expedita quas. Nesciunt dicta numquam id quis quo ut magni, quasi beatae fugit necessitatibus quos eum excepturi.
      </p>
      <hr class="my-4" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vero nulla facere. Eligendi tempora voluptatum maxime ipsum modi quasi officiis sunt maiores facere in asperiores nisi, exercitationem nulla quam libero.
      </p>
      <Link class="btn btn-primary btn-lg" to={'#'} role="button">
        Learn more
      </Link>
    </div>
    </>
  )
}

export default ContactPage