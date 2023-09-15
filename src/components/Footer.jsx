import "../App.css"

export default function Footer() {
  return (
    <footer>
      <nav>
        <a className="nav-faq" href="">FAQ</a>
        <a className="nav-terms" href="">Terms & Conditions</a>
        <a className="nav-customer" href="">Customer Service</a>
        <small className="nav-copyright">{`© ${new Date().getFullYear()} Cupcaked. All rights reserved`}</small>
      </nav>
    </footer>
  )
}