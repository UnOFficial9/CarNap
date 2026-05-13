import HomeButton from "./components/homeBtn"
import { useEffect } from "react";

const ContactsPage = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, [])
    return(
        <div className="container">
            <HomeButton />
            <p>Наша адреса: CarNap вулиця Гліба Бабіча, 1, Київ, 02000 </p>
            <p>Телефон: +38(067) 714 07 47</p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.301539006579!2d30.59724497591417!3d50.41685327158582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5bd732ad7eb%3A0x9c2f5fa3c634f363!2sCarNap!5e0!3m2!1suk!2sua!4v1770139026362!5m2!1suk!2sua" 
            style={{border:'0', width: '100%', minHeight: '600px'}} loading="lazy" ></iframe>
            <img src="images/contacts.png" alt="Фотографія сервіс центру" style={{border:'0', width: '100%', minHeight: '600px'}}/>
        </div>
    )
}
export default ContactsPage