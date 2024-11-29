
import Styles from "./Companies.module.css"

export const Companies = () => {
  return (
    <>
        <div className={Styles.Companies}>
            <section id="brand" >
                <div className={Styles.holder} id="row">
                    <img src="./Images/realestate1.png" className={Styles.realEstate} id="brand-img" alt=""/>
                    <img src="./Images/realestate2.png" className={Styles.realEstate} id="brand-img" alt=""/>
                    <img src="./Images/realestate3.png" className={Styles.realEstate} id="brand-img" alt=""/>
                    <img src="./Images/realestate4.png" className={Styles.realEstate} id="brand-img" alt=""/>
                    <img src="./Images/tower.png" className={Styles.realEstate} id="brand-img" alt=""/>
                </div>
            </section>
        </div>
    </>
    
  )
}
