import React from "react";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="bg-body-tertiary pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footerLogo">
                            <img src={logo} alt="error" className="pb-3" />
                            <p>Hakato Kitaro Sushi welcomes you to experience authentic Japanese dining in the heart of Fukuoka. From traditional sushi to chef’s specials, we take pride in serving fresh flavors with warm hospitality.</p>
                            <p>Japan, 〒810-0004 Fukuoka, Chuo Ward,
                                Watanabedori, 5 Chome−2−9 1F</p>
                            <p>Phone :+81924068682</p>
                            <p>Email : info@Example.com</p>
                        </div>
                    </div>
                    <div className="col-md-4 px-md-5">
                        <h4 className="py-3">Usefull link</h4>
                        <p><a href="#" className="text-decoration-none text-black">Home</a></p>
                        <p><a href="#" className="text-decoration-none text-black">About</a></p>
                        <p><a href="#" className="text-decoration-none text-black">Menu</a></p>
                        <p><a href="#" className="text-decoration-none text-black">Blog</a></p>
                        <p><a href="#" className="text-decoration-none text-black">Contact</a></p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="py-3">Opening Hour</h4>
                        <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                        <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
                        <p>Holidays: Closed</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">

                        <div className="text-center py-3">
                            <p className="mb-0">© 2023 Hakato Kitaro Sushi. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-md-6 py-3 text-center">
                        <span>
                            <a href="#" className="text-decoration-none text-black px-2">Privacy Policy</a>|
                            <a href="#" className="text-decoration-none text-black px-2">Cookies Policy</a>|
                            <a href="#" className="text-decoration-none text-black px-2">Terms & conditions</a>|
                            <a href="#" className="text-decoration-none text-black px-2">Privacy Policy</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;