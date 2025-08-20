import React from "react";
import ContactForm from "../../components/contactForm";

const Contact = () => {
    return (
        <>
            < ContactForm />
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6489250763493!2d130.403512!3d33.588463499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191a704506917%3A0xf5b99d5d30c5fc3c!2sHakata%20Kitaro%20Sushi!5e0!3m2!1sen!2sin!4v1755677412735!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}   // ✅ React style object
                    allowFullScreen         // ✅ camelCase, boolean prop
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase
                ></iframe>

            </div>
        </>
    )
}
export default Contact;