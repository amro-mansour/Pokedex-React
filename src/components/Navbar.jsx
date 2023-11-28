import logo from '../assets/logo.svg'

export default function Navbar() {

  return (
    <div className="nav-bar">
      <img src={logo} width='60px' className='logo' alt="poke ball logo" />
      <h2 className='navbar-title'>Pokèdex App</h2>
    </div>
  )
}