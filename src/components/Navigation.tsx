import react from "react"
import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <nav className="navigation">
      <span className="megaBigFontSize">react 2023</span>

      <span>
        <br/>
        <Link to="/">Products</Link> <br/>
        <Link to="/about">AboutPage</Link>
      </span>
    </nav>
  )
}
