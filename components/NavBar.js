import Link from 'next/link'

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a href="#" className="navbar-brand">FuckPrize</a>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
