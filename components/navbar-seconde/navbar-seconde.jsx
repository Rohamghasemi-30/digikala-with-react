import "../navbar-seconde/navbar-seconde.css"

function NavbarSeconde() {
    return(
        <nav className="navbar-seconde">
            <ul>
                <li className="text-black"><a href="#"><i class="fa-solid fa-bars"></i> دسته بندی کالا ها</a></li>
                <li><a href="#"><i class="fa-solid fa-percent"></i> شگفت انگیز ها</a></li>
                <li><a href="#"><i class="fa-solid fa-basket-shopping"></i> سوپر مارکت</a></li>
                <li><a href="#"><i class="fa-solid fa-credit-card"></i> کارت هدیه</a></li>
                <li><a href="#"><i class="fa-solid fa-fire-flame-curved"></i>  پرفروش ترین ها</a></li>
                <li><a href="#"><i class="fa-brands fa-creative-commons-zero"></i> تخفیف ها و پیشنهاد ها</a></li>
                <li><a href="#">سوالی دارید؟</a></li>
                <li><a href="#">در دیجی کالا بفروشید!</a></li>
            </ul>
            <div className="choose-city">
                <a href="#"><i class="fa-solid fa-location-dot"></i> لطفا شهر خود را اتخاب کنید</a>
            </div>
        </nav>
    );
};

export default NavbarSeconde;