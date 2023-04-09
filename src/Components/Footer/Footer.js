import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <section className="Footer">
            <div className="parent">
                <div class="card">
                    <div className="logo">
                        <h3>Pleasing Beauty<span>.</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quasi eveniet veniam dicta blanditiis beatae saepe nobis rerum molestias tempora, recusandae in, </p>
                    </div>
                </div>
                <div class="card">
                    <h3>Contact Info</h3>
                    <p> <span>Address :</span> Kali Charan Nigam Istitute Of Technology Naraini Road Banda Banda, 210001</p>
                    <p> <span>Email :</span> youname@example.com</p>
                    <p> <span>Phone :</span> +91 7523805619</p>
                </div>
                <div class="card">
                    <h3>Quick Links</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Contact</p>
                </div>
                
            </div>
            <div className="bottom-footer">
                <hr />
                <p>all right reserved</p>
            </div>
        </section>
    )
}

export default Footer