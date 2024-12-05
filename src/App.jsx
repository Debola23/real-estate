import Styles from'./App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Companies } from './components/Companies/Companies'
import { Residencies } from './components/Residencies/Residencies'
import { Agents } from './components/Agents/Agents'
import { Contact } from './components/Contact/Contact'
import { Faq } from './components/Faq/Faq'




function App() {
  return (
    <>
      <div className={Styles.App}>
        <div>
          <div className={Styles.whiteBlur}></div>
          <Navbar/>
          <Hero/>
        </div>
        <div className={Styles.backgroundImg}>
        <div className={Styles.backgroundImg}>
          <Companies/>
            <Residencies/>
            <Agents/>
            <div className={Styles.bar}>
              <div className={Styles.barBox}>
                <div className={Styles.barner}>
                  <div className={Styles.barnerH}>
                    Get started with Us
                  </div>
                  <p>
                    Get access to luxury and comfort<br/> with the tap of a button
                  </p>
                  <button className={Styles.b}>
                      <span className={Styles.circle1}></span>
                      <span className={Styles.circle2}></span>
                      <span className={Styles.circle3}></span>
                      <span className={Styles.circle4}></span>
                      <span className={Styles.circle5}></span>
                      <span className={Styles.text}>Submit</span>
                  </button>
                </div>
              </div>
            </div>
            <Faq/>
            <Contact/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
