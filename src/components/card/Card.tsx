import React from 'react';
import styles from "./Card.module.scss";
import cardFront from "../../images/bg-card-front.png";
import cardBack from "../../images/bg-card-back.png";
import cardLogo from "../../images/card-logo.svg";
import Form from "../form/Form";
import { useDataContext } from "../../DataContext";



const Card:React.FC = () => {
    const data = useDataContext();
    return <>

    <div className={styles.canva}>
         <div className={styles.bgImg}>

            <div className={styles.container}>
                <div className={styles.cardBackDetails}> 
                     <div className={styles.cardCvc}>
                        {data.cvc ?
                        (<div>{data.cvc}</div>) : 
                        (<div>000</div>) 
                        }</div>
                </div>
 
                <div className={styles.cardFrontDetails}>
                    <img src={cardLogo} alt="card-logo" className={styles.cardLogo} />
                    <div className={styles.cardNumber}>
                        {data.cardNumber ?
                        (<div>{data.cardNumber}</div>) : 
                        (<div>0000 0000 0000 0000</div>) 
                        }
                        </div>
                    <div className={styles.cardDetailBottom}>
                    <div className={styles.cardName}>
                        {data.name ?
                        (<div>{data.name.toUpperCase()}</div>) : 
                        (<div>JANE APPLESEED</div>)
                        }
                    </div>
                    <div className={styles.cardDate}>
                        {data.month ?
                        (<div>{data.month}</div>) : 
                        (<div>00</div>) 
                        }/{data.year ?
                        (<div>{data.year}</div>) : 
                        (<div>00</div>) 
                        }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
}

export default Card; 