
import Styles from "./Contact.module.css"

export const Contact = () => {


  
  return (
    <div className={Styles.contact} id="contact">
      <div className={Styles.contactContainer}>
        <div className={Styles.contactLeft} id="contactfl">
            <span className={Styles.contactH}>
                Contact
            </span>
            <span className={Styles.contactInfo}>
                25, Smith Jonson Rd, Isheri Magodo.
            </span>
            <div className={Styles.contactLink}>
                <span>Property</span>
                <span>Services</span>
                <span>About Us</span>
                <span>Newsletter</span>
            </div>
        </div>
        <div className={Styles.contactRight} >
          <a href="/">
            <img src={"./Images/homelogo.png"} alt="" className={Styles.contactImg} />  
          </a>
          <span className={Styles.contactInfoo}>
            Our vision is to make all people 
            <br/>
            the best place to live for them.
            <div className={Styles.number}>
              <a href="/">
                +234 815 555 443 67
              </a>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}
