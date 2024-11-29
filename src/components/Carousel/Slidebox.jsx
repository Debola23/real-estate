
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Styles from "./Slidebox.module.css"

export const Slidebox = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1441 },  
          items: 4
        },
        largeDesktop: {
          breakpoint: { max: 1440, min: 1025 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1024, min: 769 },
          items: 2.6
        },
        tablet: {
          breakpoint: { max: 768, min: 481 },
          items: 1.8
        },
        largeMobile: {
          breakpoint: { max: 680, min: 440 },
          items: 1.5
        },
        mobile: {
          breakpoint: { max: 440, min: 0 },
          items: 1.259
        }
      };

  return (
    <div className={Styles.grid}>
         <Carousel responsive={responsive}>
            <div className={Styles.card}>
                <div className={Styles.cardImg}>
                    <img src="./Images/residency1.jpg" className={Styles.imageFluid} alt="" id="pef-img"/>
                </div>
                <div className={Styles.cardInfo}>
                    <p className={Styles.textTitle}>IKOYI</p>
                    <p className={Styles.textBody}>Near, Parkview Estate</p>
                </div>
                <div className={Styles.cardFooter}>
                    <span className={Styles.textTitle}> <span className={Styles.orangeText}>₦</span>163,340,000</span>
                    <div className={Styles.cardButton}>
                        <img src="./Images/acquisition.png" alt="" className={Styles.svgIcon}/>
                    </div>
                </div>
            </div>
            <div className={Styles.card}>
                <div className={Styles.cardImg}>
                    <img src="./Images/residency9.jpg" className={Styles.imageFluid} alt="" id="pef-img"/>
                </div>
                <div className={Styles.cardInfo}>
                    <p className={Styles.textTitle}>VICTORIA ISLAND (VI)</p>
                    <p className={Styles.textBody}>Near, Oriental Gardens</p>
                </div>
                <div className={Styles.cardFooter}>
                    <span className={Styles.textTitle}> <span className={Styles.orangeText}>₦</span>60,000,000</span>
                    <div className={Styles.cardButton}>
                        <img src="./Images/acquisition.png" alt="" className={Styles.svgIcon}/>
                    </div>
                </div>
            </div>
            <div className={Styles.card}>
                <div className={Styles.cardImg}>
                    <img src="./Images/residency2.jpg" className={Styles.imageFluid} alt="" id="pef-img"/>
                </div>
                <div className={Styles.cardInfo}>
                    <p className={Styles.textTitle}>YABA</p>
                    <p className={Styles.textBody}>Near UNILAG</p>
                </div>
                <div className={Styles.cardFooter}>
                    <span className={Styles.textTitle}> <span className={Styles.orangeText}>₦</span>29,000,000</span>
                    <div className={Styles.cardButton}>
                        <img src="./Images/acquisition.png" alt="" className={Styles.svgIcon}/>
                    </div>
                </div>
            </div>
            <div className={Styles.card}>
                <div className={Styles.cardImg}>
                    <img src="./Images/residency3.jpg" className={Styles.imageFluid} alt="" id="pef-img"/>
                </div>
                <div className={Styles.cardInfo}>
                    <p className={Styles.textTitle}>IKEJA</p>
                    <p className={Styles.textBody}>Near, GRA Ikeja</p>
                </div>
                <div className={Styles.cardFooter}>
                    <span className={Styles.textTitle}> <span className={Styles.orangeText}>₦</span>77,000,000</span>
                    <div className={Styles.cardButton}>
                        <img src="./Images/acquisition.png" alt="" className={Styles.svgIcon}/>
                    </div>
                </div>
            </div>
            <div className={Styles.card}>
                <div className={Styles.cardImg}>
                    <img src="./Images/residency4.jpg" className={Styles.imageFluid} alt="" id="pef-img"/>
                </div>
                <div className={Styles.cardInfo}>
                    <p className={Styles.textTitle}>MAGODO</p>
                    <p className={Styles.textBody}>Near, Magodo phase 2(Isheri)</p>
                </div>
                <div className={Styles.cardFooter}>
                    <span className={Styles.textTitle}> <span className={Styles.orangeText}>₦</span>64,000,000</span>
                    <div className={Styles.cardButton}>
                        <img src="./Images/acquisition.png" alt="" className={Styles.svgIcon}/>
                    </div>
                </div>
            </div>
            <div className={Styles.card}>
                <div className={Styles.cardImg}>
                    <img src="./Images/residency5.jpg" className={Styles.imageFluid} alt="" id="pef-img"/>
                </div>
                <div className={Styles.cardInfo}>
                    <p className={Styles.textTitle}>FESTAC</p>
                    <p className={Styles.textBody}>Near, Festac mall</p>
                </div>
                <div className={Styles.cardFooter}>
                    <span className={Styles.textTitle}> <span className={Styles.orangeText}>₦</span>73,000,000</span>
                    <div className={Styles.cardButton}>
                        <img src="./Images/acquisition.png" alt="" className={Styles.svgIcon}/>
                    </div>
                </div>
            </div>
            <div className={Styles.card}>
                <div className={Styles.cardImg}>
                    <img src="./Images/residency6.jpg" className={Styles.imageFluid} alt="" id="pef-img"/>
                </div>
                <div className={Styles.cardInfo}>
                    <p className={Styles.textTitle}>IKEJA</p>
                    <p className={Styles.textBody}>Alausa</p>
                </div>
                <div className={Styles.cardFooter}>
                    <span className={Styles.textTitle}> <span className={Styles.orangeText}>₦</span>84,000,000</span>
                    <div className={Styles.cardButton}>
                        <img src="./Images/acquisition.png" alt="" className={Styles.svgIcon}/>
                    </div>
                </div>
            </div>
            <div className={Styles.card}>
                <div className={Styles.cardImg}>
                    <img src="./Images/residency7.jpg" className={Styles.imageFluid} alt="" id="pef-img"/>
                </div>
                <div className={Styles.cardInfo}>
                    <p className={Styles.textTitle}>IKEJA</p>
                    <p className={Styles.textBody}>Maryland</p>
                </div>
                <div className={Styles.cardFooter}>
                    <span className={Styles.textTitle}> <span className={Styles.orangeText}>₦</span>107,000,000</span>
                    <div className={Styles.cardButton}>
                        <img src="./Images/acquisition.png" alt="" className={Styles.svgIcon}/>
                    </div>
                </div>
            </div>
      
        </Carousel>
    </div>


 
       
     
         
             
            
     
        
   
  )
}
