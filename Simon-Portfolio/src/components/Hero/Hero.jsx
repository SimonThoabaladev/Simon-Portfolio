import React from "react";
// Remember to import image
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Simon Thoabala</h1>
            <p className={styles.description}> A full-stack developer with a year of hands-on
            experience in crafting robust, scalable web solutions. Passionate about leveraging technology 
            to drive innovation and enhance user experience. I thrive in fast-paced environment where 
            creativity and collaboration reign supreme. <br />
            With a keen eye for detail and a commitment to excellence, I specialize in designing and 
            implementing end-to-end solutions that seamlessly integrate front-end and back-end functionality
            . From concptualization to deployement, I pride myself on delivering high-quality, intuitive 
            applications that exceed expectations and delight users. <br />
            My journey into software development began with a thirst for knowledge and a love for 
            problem-solving. Since then, I've honed my skills in a variety of programming languages
            and frameworks, including Java, Python, C, C++ ,PhP , React, Laravel, and Framework7 to name 
            a few. Whether it's building responsive user interface or optimizing server perfomance,
            I'm always eager to tackel new challenges and push the boundaries of what's possible.</p>
                 <a href="milto:sthoabala@hotmail.com" className={styles.contactBtn}>Download C.V</a>
        </div>
        {/* Remember to insert an image */}
        <img
        src={getImageUrl("hero/Simone Thoabala.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    
    </section> );
}