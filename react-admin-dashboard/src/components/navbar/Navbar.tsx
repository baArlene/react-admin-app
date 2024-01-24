import './navbar.scss'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>CarterDev</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className='icon' />
        <img src="/app.svg" alt="" className='icon' />
        <img src="/expand.svg" alt="" className='icon' />
        <div className="notifications">
          <img src="/notification.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="" />
          <span>Axyl</span>
        </div>
        <img src="/settings.svg" alt="" className='icon' />
      </div>
    </div>
  )
}

export default Navbar