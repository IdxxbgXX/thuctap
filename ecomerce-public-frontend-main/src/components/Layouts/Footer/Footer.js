import React from "react"
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container '>
                    <div className="row">
                        <div className='box col-sm-6 col-md-3 col-lg-3'>
                            <h1>Online Shop</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>

                        </div>

                        <div className='box col-sm-6 col-md-3 col-lg-3'>
                            <h2>About Us</h2>
                            <ul>
                                <li>Careers</li>
                                <li>Our Stores</li>
                                <li>Our Cares</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className='box col-sm-6 col-md-3 col-lg-3'>
                            <h2>Customer Care</h2>
                            <ul>
                                <li>Help Center </li>
                                <li>How to Buy </li>
                                <li>Track Your Order </li>
                                <li>Corporate & Bulk Purchasing </li>
                                <li>Returns & Refunds </li>
                            </ul>
                        </div>
                        <div className='box col-sm-6 col-md-3 col-lg-3'>
                            <h2>Contact Us</h2>
                            <ul>
                                <li>70 Washington Square South, New York, NY 10012, United States </li>
                                <li>Email: uilib.help@gmail.com</li>
                                <li>Phone: +1 1123 456 780</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
