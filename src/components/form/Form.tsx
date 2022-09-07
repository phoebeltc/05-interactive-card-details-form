import React, { useState, useContext } from "react";
import styles from "./Form.module.scss";
import IconComplete from "../../images/icon-complete.svg";
import Card from "../card/Card";
import { useDataContext } from "../../DataContext";



const Form: React.FC = () => {
    const data = useDataContext();
    const[nameIsValid, setNameIsValid] = useState(true);
    const[cardNumberIsValid, setCardNumberIsValid] = useState(true);
    const[cvcIsValid, setCvcIsValid] = useState(true);
    const[monthIsValid, setMonthIsValid] = useState(true);
    const[yearIsValid, setYearIsValid] = useState(true);
    const[expDateIsFilled, setexpDateIsFilled] = useState(true);
    const[success, setSuccess] = useState(false);
    
    const nameChange = (e:any) => {
        data.setName(e.target.value);
    }

    const handleChange = (event:any) => {
        const result = event.target.value.replace(/\D/g, '').replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g, '$1 $2 $3 $4');
        data.setCardNumber(result);
    }

    const cvcChange = (e:any) => {
        const result = e.target.value.replace(/\D/g, '')
        data.setCvc(result);
    }

    const monthChange = (e:any) => {
        const result = e.target.value.replace(/\D/g, '');
        data.setMonth(result);
    }

    const yearChange = (e:any) => {
        const result = e.target.value.replace(/\D/g, '')
        data.setYear(result);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();

        if (data.cardNumber.length !== 19){
            setCardNumberIsValid(false);
        } else {
            setCardNumberIsValid(true);
        }

        if (data.name as string === ''){
            setNameIsValid(false);
        } else {
            setNameIsValid(true);
        }

        if (data.cvc === '' ) {
            setCvcIsValid(false);
        } else {
            setCvcIsValid(true);
        }

        if (data.month === '' ) {
            setMonthIsValid(false);
        } else {
            setMonthIsValid(true);
        }

        if (data.year === '' ) {
            setYearIsValid(false);
        } else {
            setYearIsValid(true);
        }

        if (data.month === '' || data.year === '') {
            setexpDateIsFilled(false);
        } else {
            setexpDateIsFilled(true);
        }



        if (data.cardNumber.length !== 19 || data.name == '' || data.cvc === '' || data.month === '' || data.year === '') {
            setSuccess(false);
            console.log("Not Valid!");
            
        } else {
            console.log("Form Valid!");
            setSuccess(true);
        }

    }

    const handleContinue = (e:any) => {
        data.setCardNumber('');
        data.setName('');
        data.setCvc('');
        data.setMonth('');
        data.setYear('');
        setCardNumberIsValid(true);
        setNameIsValid(true);
        setCvcIsValid(true);
        setMonthIsValid(true);
        setYearIsValid(true);
        setexpDateIsFilled(true);
        setSuccess(false);
    }

    return<>

    {!success &&
    
    <form action="/" className={styles.form}>
        
        <div>
        <label htmlFor="name" className={styles.title}>CARDHOLDER NAME</label>
        <input className={`${styles.input} ${nameIsValid ? '' : styles.inputNotValid}`} type="text" id="name" placeholder="e.g. Jane Appleseed" value={data.name} maxLength={30} onChange={nameChange} />
        {!nameIsValid && <p className={styles.invalidText}>Can't be blank</p>}
        </div>

        <div className={styles.field}>
        <label htmlFor="number" className={styles.title}>CARD NUMBER</label><br />
        <input className={`${styles.input} ${cardNumberIsValid ? '' : styles.inputNotValid}`} type="text" id="number" placeholder="e.g. 1234 5678 9123 0000" value={data.cardNumber} onChange={handleChange} maxLength={19} />
        {!cardNumberIsValid && <p className={styles.invalidText}>Card number has to be 16 digits</p>}
        </div>

        <div className={styles.formSplit}>
        <div>
        <label className={styles.title} htmlFor="date">EXP. DATE (MM/YY)</label><br />
        <div className={styles.dateSplit}>
        <input className={`${styles.dateInput} ${monthIsValid ? '' : styles.inputNotValid}`} type="text" id="date-mm" placeholder="MM" maxLength={2} value={data.month} onChange={monthChange} />
        <input className={`${styles.dateInput} ${yearIsValid ? '' : styles.inputNotValid}`} type="text" id="date-yy" placeholder="YY" maxLength={2} value={data.year} onChange={yearChange} min={22} max={28} />
        </div>
        {!expDateIsFilled && <p className={styles.invalidText}>Can't be blank</p>}
        </div>

        <div>
        <label className={styles.title} htmlFor="cvc">CVC</label><br />
        <input className={`${styles.input} ${cardNumberIsValid ? '' : styles.inputNotValid}`} type="text" id="cvc" placeholder="e.g. 123" value={data.cvc} onChange={cvcChange} maxLength={3} />
        {!cvcIsValid && <p className={styles.invalidText}>Can't be blank</p>}
        </div>
        </div>

        <button className={styles.button} onClick={handleSubmit}>Confirm</button>

    </form>}
 
    {success && 
    <div className={styles.form}>
        <img src={IconComplete} className={styles.icon} alt="complete" />
        <h1>THANK YOU!</h1>
        <p>We’ve added your card details</p>
        <button className={styles.button} onClick={handleContinue}>Continue</button>
    </div>
    }

    </>
}

export default Form; 
