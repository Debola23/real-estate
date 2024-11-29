import { Slidebox } from "../Carousel/Slidebox";
import Styles from "./Residencies.module.css"


export const Residencies = () => {
  return (
        <div className={Styles.Residencies} id="residencies">
            <div className={Styles.rContainer}>
                <div className={Styles.rBox}>
                    <div className={Styles.rHead}>
                        <span>
                            Best Deals
                        </span>
                        <span>
                            Popular Locations
                        </span>
                    </div>
                </div>
            </div>
            <div className={Styles.swiper}>
                <div className={Styles.slider}>
                    <Slidebox/>
                </div>
            </div>
        </div>
  )
}

export default Residencies;

