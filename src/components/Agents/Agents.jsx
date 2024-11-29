
import Styles from "./Agents.module.css"

export const Agents = () => {
  return (
    <div className={Styles.Agent} id="agents">
        <div className={Styles.agentBox}>
            <div className={Styles.agentHeader}>
                Our Featured Agents
            </div>
            <div className={Styles.agentDetail}>
                Meet our top real estate agents, each selected for their proven expertise,<br/> 
                dedication, and success in helping clients find their ideal homes or investments.
            </div>
        </div>
        <div className={Styles.cardHolder}>
            <div className={Styles.agentCard}>
                <div className={Styles.cardTop}>
                    <img src="./Images/profilepic.jpg" className={Styles.agentPic}/>
                    <div className={Styles.agentArea}>
                        Ikeja, Lagos
                    </div>
                    <div className={Styles.agentName}>
                        Paul T. Jones
                    </div>
                </div>
                <hr/>
                <div className={Styles.cardBtn}>
                    <button className={Styles.btn}>
                        <a href="" >Message</a>
                    </button>
                    <button className={Styles.btn}>
                        <a href="" >Call</a>
                    </button>
                </div>
            </div>
            <div className={Styles.agentCard}>
                <div className={Styles.cardTop}>
                    <img src="./Images/profilepic3.jpg" className={Styles.agentPic}/>
                    <div className={Styles.agentArea}>
                        Maryland, Lagos
                    </div>
                    <div className={Styles.agentName}>
                        Gary N. Coleman
                    </div>
                </div>
                <hr/>
                <div className={Styles.cardBtn}>
                    <button className={Styles.btn}>
                        <a href="" >Message</a>
                    </button>
                    <button className={Styles.btn}>
                        <a href="" >Call</a>
                    </button>
                </div>
            </div>
            <div className={Styles.agentCard}>
                <div className={Styles.cardTop}>
                    <img src="./Images/profilepic2.jpg" className={Styles.agentPic}/>
                    <div className={Styles.agentArea}>
                        Ikoyi, Lagos
                    </div>
                    <div className={Styles.agentName}>
                        Lisa A. Sun
                    </div>
                </div>
                <hr/>
                <div className={Styles.cardBtn}>
                    <button className={Styles.btn}>
                        <a href="" >Message</a>
                    </button>
                    <button className={Styles.btn}>
                        <a href="" >Call</a>
                    </button>
                </div>
            </div>         
        </div>
       
        <div className={Styles.cardHolder}>
            <div className={Styles.agentCard}>
                <div className={Styles.cardTop}>
                    <img src="./Images/profilepic4.jpg" className={Styles.agentPic}/>
                    <div className={Styles.agentArea}>
                        Magodo, Lagos
                    </div>
                    <div className={Styles.agentName}>
                        Tayo M. Oke
                    </div>
                </div>
                <hr/>
                <div className={Styles.cardBtn}>
                    <button className={Styles.btn}>
                        <a href="" >Message</a>
                    </button>
                    <button className={Styles.btn}>
                        <a href="" >Call</a>
                    </button>
                </div>
            </div>
            <div className={Styles.agentCard}>
                <div className={Styles.cardTop}>
                    <img src="./Images/profilepic5.jpg" className={Styles.agentPic}/>
                    <div className={Styles.agentArea}>
                        Lekki, Lagos
                    </div>
                    <div className={Styles.agentName}>
                        Joshua J. James
                    </div>
                </div>
                <hr/>
                <div className={Styles.cardBtn}>
                    <button className={Styles.btn}>
                        <a href="" >Message</a>
                    </button>
                    <button className={Styles.btn}>
                        <a href="" >Call</a>
                    </button>
                </div>
            </div>
            <div className={Styles.agentCard}>
                <div className={Styles.cardTop}>
                    <img src="./Images/profilepic6.jpg" className={Styles.agentPic}/>
                    <div className={Styles.agentArea}>
                        Yaba, Lagos
                    </div>
                    <div className={Styles.agentName}>
                        Moni D. Adeoye
                    </div>
                </div>
                <hr/>
                <div className={Styles.cardBtn}>
                    <button className={Styles.btn}>
                        <a href="" >Message</a>
                    </button>
                    <button className={Styles.btn}>
                        <a href="" >Call</a>
                    </button>
                </div>
            </div>
            
        </div>


    </div>
  )
}
