import React from 'react'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/user">user</Link>
                </li>
                <li>
                <Link to="/admin">Admin</Link>
                </li>
                <li>
                <Link to="/">index</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default First