import React from 'react'
import Link from "next/link";

const Homepage = () => {
  return (
    <div> 
      <h1 className='pink'>This is our sophisticated Homepage</h1>
      <p className='maroon'>Here you can find the detailed layout of our web page and its services worldwide.</p>

<div>
        <nav>
          <li>
            <Link href="/" className='red'>Homepage</Link>
          </li>
          <li>
            <Link href="/AboutPage" className='gold' target="_blank">AboutPage</Link>
          </li>
          <li>
            <Link href="/ContactPage" className='blue'>ContactPage</Link>
          </li>
          <li>
            <Link href="/ProductPage" className='yellow'>ProductPage</Link>
          </li>
          <li>
            <Link href="/ServicesPage" className='green'>ServicesPage</Link>
          </li>
          
        </nav>
      </div>
    </div>

  )
}

export default Homepage;