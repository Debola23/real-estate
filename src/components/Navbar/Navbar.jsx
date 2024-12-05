import {useState} from "react";
import styles from'./Navbar.module.css'
import { Link } from "react-router-dom"



export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  


  return (
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
                  <a href="#residencies" className={styles.linkcl}>Residencies</a>
              </li>
              <li className={styles.listcl}>
                  <a href="#agents" className={styles.linkcl}>Agents</a>
              </li>
              <li className={styles.listcl}>
                <Link to="/real-estate/property" className={styles.linkcl}>Property</Link>
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
  )
}
