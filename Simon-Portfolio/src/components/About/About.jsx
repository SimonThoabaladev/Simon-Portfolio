import React from "react";

import styles  from "./About.module.css";

export const About = () => {
    return (<section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        {/* Rember to get an image */}
        <div className={StyleSheet.content}><img src="" alt="" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src="" alt=""  />
                <div className={styles.aboutItems}>
                    <h3>FrontEnd Developer</h3>
                    <p>I'm a frontEnd developer, as a frontEnd developer, I specialize in crafting intuitive
                        user experience through code and design. From creating responsive layout to implementing 
                        interactive elements, my focus is on bringing websites and web applications to life.
                        I strive to ensure that every project I work on not only meets but exceeds user expectations.
                        With a keen eye for detail and a passion for staying updated on the latest web technologies,
                        I am dedicated to delivering visually stunning and seamlessly functional frontEnd solutions.
      </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src="" alt="" />
                <div className={styles.aboutItems}>
                    <h3>BackEnd Developer</h3>
                    <p>I'm a BackEnd developer,As a BackEnd developer, my expertise lies in building the foundation 
                        that powers websites and applications. I specialize in designing and implementing server side logic, databases, and 
                        APIs to ensure seamless functionality and data management. From optimizing database queries to securing sensative information,
                        my focus is on creating robust and scalable solutions that meet the unique needs of each project.
                        With deep understanding of programming languages like Java, Python or PHP, I work behind the scene to ensure 
                        that everything runs smoothly, allowing frontEnd interfaces to shine. My passion for problem solving and attention to detail drive me to
                        continuosly refine and improve the BackEnd infrastructure, ultimately enhancing the overall user experience. 
              </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src="" alt="" />
                <div className={styles.aboutItems}>
                    <h3>Wordpress Developer</h3>
                    <p>As a WordPress developer, I am committed to crafting dynamic and user-friendly websites that meet the unique needs of each client. With a keen eye for design and a strong foundation in web development technologies, I specialize in creating custom WordPress themes and plugins that elevate online presence and functionality. My proficiency extends to implementing responsive design principles, optimizing site performance, and ensuring seamless integration of third-party tools and APIs. I thrive in collaborative environments, working closely with clients and stakeholders to understand their objectives and deliver solutions that exceed expectations. With a dedication to staying abreast of emerging trends and best practices in web development, I am poised to contribute to projects that demand creativity, innovation, and technical excellence.






</p>
                </div>
            </li>
        </ul>
        </div>
    </section>); 
};