import {useState} from "react";
import styles from "./Property.module.css"
import { Contact } from "../Contact/Contact";


export const Property = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
     <div className={styles.property}>
       <div className={styles.Navbar}>
        <nav>
          <a href="/">
            <img src={"./Images/homelogo.png"} alt="" className={styles.hl} />  
          </a>
          <div className={styles.menu}>
            <img className={styles.hamBtn} 
                      src={
                          menuOpen ? ("./Images/close.png") : ("./Images/menu.png")
                      }
                      alt="menu-button"
                      onClick={() => setMenuOpen(!menuOpen) }
            />

            <ul className={`${styles.list} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
              <li className={styles.listcl}>
                  <a href="/" className={styles.linkcl}>Residencies</a>
              </li>
              <li className={styles.listcl}>
                  <a href="/" className={styles.linkcl}>Agents</a>
              </li>
              <li className={styles.listcl}>
                  <a href="" className={styles.linkcl} id="property">Property</a>
              </li>
              <li className={styles.listcl}>
                  <button className={styles.btn} >
                    <a href="mailto:homes@email.com" >Contact us</a>
                  </button>
              </li>
            </ul>
          </div>
        </nav>
      </div> 
      <div>
        <img src="./Images/housesale.jpg" className={styles.heroImg}/>
        <h1 className={styles.heroT}>
          Luxury & Comfort
          <br/>
          At Your Fingertips
        </h1>
      </div>
        <div className={styles.propertyGrid}>
          <div className={styles.housebox}>
              <div className={styles.carBoxes2}>
                  <div className={styles.carBoxes3}>
                      <img src="./Images/property1.jpg" alt="house_img" className={styles.cari}/>
                      <div className={styles.forSale} id="badge">For Sale</div>
                      <div className={styles.carDeets}>
                          <div className={styles.namePrice}>
                              <div className={styles.namePrice1}>
                                  <p className={styles.pnp}>
                                    Brick Lane Realty
                                  </p>
                                  <p className={styles.pnp2}>
                                    Victoria Island(VI)
                                  </p>
                                  <p className={styles.pnp3}>
                                    $87,000,000
                                  </p>
                              </div>
                          </div>
                        <div className={styles.cInfo}>
                        
                        </div>
                        <div className={styles.rentB}>
                          <a href="/">Purchase</a>
                        </div>
                      </div>
                  </div>
              </div>
              <div className={styles.carBoxes2}>
                  <div className={styles.carBoxes3}>
                      <img src="./Images/property2.jpg" alt="house_img" className={styles.cari}/>
                      <div className={styles.forSale}>For Sale</div>
                      <div className={styles.carDeets}>
                          <div className={styles.namePrice}>
                              <div className={styles.namePrice1}>
                                  <p className={styles.pnp}>
                                    The Real Estate Corner
                                  </p>
                                  <p className={styles.pnp2}>
                                    Lekki
                                  </p>
                                  <p className={styles.pnp3}>
                                    $140,000,000
                                  </p>
                              </div>
                          </div>
                        <div className={styles.cInfo}>
                        
                        </div>
                        <div className={styles.rentB}>
                          <a href="/">Purchase</a>
                        </div>
                      </div>
                  </div>
              </div>
              <div className={styles.carBoxes2}>
                  <div className={styles.carBoxes3}>
                      <img src="./Images/property3.jpg" alt="house_img" className={styles.cari}/>
                      <div className={styles.forSale} id="badge">For Sale</div>
                      <div className={styles.carDeets}>
                          <div className={styles.namePrice}>
                              <div className={styles.namePrice1}>
                                  <p className={styles.pnp}>
                                    Fairmount Properties
                                  </p>
                                  <p className={styles.pnp2}>
                                    Ikoyi
                                  </p>
                                  <p className={styles.pnp3}>
                                    $180,000,000
                                  </p>
                              </div>
                          </div>
                        <div className={styles.cInfo}>
                        
                        </div>
                        <div className={styles.rentB}>
                          <a href="/">Purchase</a>
                        </div>
                      </div>
                  </div>
              </div>
              <div className={styles.carBoxes2}>
                  <div className={styles.carBoxes3}>
                      <img src="./Images/property4.jpg" alt="house_img" className={styles.cari}/>
                      <div className={styles.forSale} id="badge">For Sale</div>
                      <div className={styles.carDeets}>
                          <div className={styles.namePrice}>
                              <div className={styles.namePrice1}>
                                  <p className={styles.pnp}>
                                    Herringbone Realty
                                  </p>
                                  <p className={styles.pnp2}>
                                    Ikeja
                                  </p>
                                  <p className={styles.pnp3}>
                                    $103,000,000
                                  </p>
                              </div>
                          </div>
                        <div className={styles.cInfo}>
                        
                        </div>
                        <div className={styles.rentB}>
                          <a href="/">Purchase</a>
                        </div>
                      </div>
                  </div>
              </div>
              <div className={styles.carBoxes2}>
                  <div className={styles.carBoxes3}>
                      <img src="./Images/property5.jpg" alt="house_img" className={styles.cari}/>
                      <div className={styles.forSale} id="badge">For Sale</div>
                      <div className={styles.carDeets}>
                          <div className={styles.namePrice}>
                              <div className={styles.namePrice1}>
                                  <p className={styles.pnp}>
                                    Banyon Tree Realty
                                  </p>
                                  <p className={styles.pnp2}>
                                    Magodo
                                  </p>
                                  <p className={styles.pnp3}>
                                    $70,000,000
                                  </p>
                              </div>
                          </div>
                        <div className={styles.cInfo}>
                        
                        </div>
                        <div className={styles.rentB}>
                          <a href="/">Purchase</a>
                        </div>
                      </div>
                  </div>
              </div>
              <div className={styles.carBoxes2}>
                  <div className={styles.carBoxes3}>
                      <img src="./Images/property6.jpg" alt="house_img" className={styles.cari}/>
                      <div className={styles.forSale} id="badge">For Sale</div>
                      <div className={styles.carDeets}>
                          <div className={styles.namePrice}>
                              <div className={styles.namePrice1}>
                                  <p className={styles.pnp}>
                                    Brick Lane Realty
                                  </p>
                                  <p className={styles.pnp2}>
                                    Victoria Island(VI)
                                  </p>
                                  <p className={styles.pnp3}>
                                    $98,000,000
                                  </p>
                              </div>
                          </div>
                        <div className={styles.cInfo}>
                        
                        </div>
                        <div className={styles.rentB}>
                          <a href="/">Purchase</a>
                        </div>
                      </div>
                  </div>
              </div>
              <div className={styles.carBoxes2}>
                  <div className={styles.carBoxes3}>
                      <img src="./Images/property7.jpeg" alt="house_img" className={styles.cari}/>
                      <div className={styles.forSale} id="badge">For Sale</div>
                      <div className={styles.carDeets}>
                          <div className={styles.namePrice}>
                              <div className={styles.namePrice1}>
                                  <p className={styles.pnp}>
                                    Orchird Road
                                  </p>
                                  <p className={styles.pnp2}>
                                    Lekki
                                  </p>
                                  <p className={styles.pnp3}>
                                    $248,000,000
                                  </p>
                              </div>
                          </div>
                        <div className={styles.cInfo}>
                        
                        </div>
                        <div className={styles.rentB}>
                          <a href="/">Purchase</a>
                        </div>
                      </div>
                  </div>
              </div>
              <div className={styles.carBoxes2}>
                  <div className={styles.carBoxes3}>
                      <img src="./Images/property8.jpeg" alt="house_img" className={styles.cari}/>
                      <div className={styles.forSale} id="badge">For Sale</div>
                      <div className={styles.carDeets}>
                          <div className={styles.namePrice}>
                              <div className={styles.namePrice1}>
                                  <p className={styles.pnp}>
                                    Montana Road
                                  </p>
                                  <p className={styles.pnp2}>
                                    Magodo
                                  </p>
                                  <p className={styles.pnp3}>
                                    $298,000,000
                                  </p>
                              </div>
                          </div>
                        <div className={styles.cInfo}>
                        
                        </div>
                        <div className={styles.rentB}>
                          <a href="/">Purchase</a>
                        </div>
                      </div>
                  </div>
              </div>
              <div className={styles.carBoxes2}>
                  <div className={styles.carBoxes3}>
                      <img src="./Images/property9.jpeg" alt="house_img" className={styles.cari}/>
                      <div className={styles.forSale} id="badge">For Sale</div>
                      <div className={styles.carDeets}>
                          <div className={styles.namePrice}>
                              <div className={styles.namePrice1}>
                                  <p className={styles.pnp}>
                                    Pinestone Avenu
                                  </p>
                                  <p className={styles.pnp2}>
                                    Ikeja
                                  </p>
                                  <p className={styles.pnp3}>
                                    $480,000,000
                                  </p>
                              </div>
                          </div>
                        <div className={styles.cInfo}>
                        
                        </div>
                        <div className={styles.rentB}>
                          <a href="/">Purchase</a>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
    <Contact/>
    
    </>
  )
}

