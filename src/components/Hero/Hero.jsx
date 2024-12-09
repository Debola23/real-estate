import styles from'./Hero.module.css'
import CountUp from 'react-countup'
import { motion } from 'framer-motion';


export const Hero = () => {
  return (
        <div className={styles.Hero}>
            <div className={styles.heroLeft}>
               <motion.div 
                initial={{y:"2rem", opacity: 0 }}
                animate={{y: 0, opacity: 1 }}
                transition={{duration: 3, type:"spring" }}
                className={styles.description}>
                    <div className={styles.orangeCircle}/>
                    Discover The Best<br/> Property For You
                </motion.div>
               
               <p>
                    Choose from our various property the one that suits you,<br/>
                    choose us and forget all dificulties in finding you a home.
               </p>
                <div className={styles.customInput}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={styles.svgIcon} fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                    </svg>
                    <button className={styles.btn}>
                        <a href="" >Search</a>
                    </button>
                    <label>
                        <input placeholder=""  type="text" className={styles.input} />
                    </label>
                    
                </div>
                <div className={styles.stats}>
                    <div className={styles.flexStats}>
                        <span>
                            <CountUp start={7000} end={8200} duration={4} />
                            <span className={styles.plus}>+</span>
                        </span>
                        <div className={styles.statsInfo}>Premium Products</div>
                    </div>
                    <div className={styles.flexStats}>
                        <span>
                            <CountUp start={1000} end={2340} duration={4} />
                            <span className={styles.plus}>+</span>
                        </span>
                        <div className={styles.statsInfo}>Happy Customers</div>
                    </div>
                    <div className={styles.flexStats}>
                        <span>
                            <CountUp start={14} end={87}  />
                            <span className={styles.plus}>+</span>
                        </span>
                        <div className={styles.statsInfo}>Agents</div>
                    </div>
                </div>
            </div>
            <div className={styles.heroRight}>
                <motion.div 
                initial={{x:"6rem", opacity: 0 }}
                animate={{x: 0, opacity: 1 }}
                transition={{duration: 3, type:"spring" }}
                className={styles.imgContainer}>
                    <img src="./Images/img2.jpg" alt=""  className={styles.img}/>
                </motion.div>
            </div>
        </div>
  )
}
