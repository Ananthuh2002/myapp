import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/first">First</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Links