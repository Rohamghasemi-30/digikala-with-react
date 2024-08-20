import "./navbar-first.css"
function NavbarOne() {
 return(
    <div className="nav-one">
    <div className="logo">
      <img src="../public/image/logo.svg" alt="" />
    </div>
    <div className="search-box">
      <input type="search" placeholder='جستوجو'/>
    </div>
    <div className="login">
       <a href="#"><button className="btn-login">ورود | ثبت‌نام</button></a>
        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
  </div>
 );
}

export default NavbarOne;
