import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
      <nav>
          <Link to="/portfolio/">portfolio</Link>
          <Link to="/blog/">blog</Link>
          <Link to="/contact/">contact</Link>
      </nav>
  )
}
