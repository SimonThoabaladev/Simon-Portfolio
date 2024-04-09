import React, { useState } from "react";


import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { value } from "dom7";



// const formInitialDetails = {
//   name: '',
//   email: '',
//   message: '' 

// }
// const [formDetails, setFormDetails] = usState(formInitialDetails);
// const [buttonText, setButtonText] = useState('Send');
// const [status, setStatus] = useState({});


const onFormUpdate = (category, value) => {
  setFormDetails({
    ...formDetails,
    [category]: value
  })
}


export const Contact = () => {


    return (
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
          <img
        src={getImageUrl("contacts/emailIcon.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
            <a href="mailto:sthoabala@hotmail.com">sthoabala@hotmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contacts/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/simon-thoabala-b9b770265">linkedin.com/Simon Thoabala</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contacts/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/Simon-th-tech">github.com/Simon Thoabala</a>
          </li>
        </ul>
         {/* div form */}
         <div className={styles.formContainer}>
            <form action="">
                <input type="text" required placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                <input type="email"  required placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                <textarea rows={0} placeholder="Message"/>
                <button href="mailto:sthoabala@hotmail.com">Submit</button>
            </form>
        </div>




        <div><p>Copyright &copy;2024 SimonPortfolio.Design by <span>Simon Thoabala</span></p></div>
      </footer>
    );
  };
  