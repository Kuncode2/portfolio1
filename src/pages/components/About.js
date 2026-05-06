import { useEffect, useRef } from "react";
import styles from "../../../styles/About.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import User from "./icons/user";
import Image from "next/image";
import me from "/public/foto-perfil.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { x: "-200px", opacity: 0 },
      {
        x: "0px",
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "bottom 50%",
          scrub: true,
          toggleAction: "restart pause resume pause",
        },
      }
    );

    gsap.fromTo(
      `.${styles.imgBox}`,
      { scale: 0.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 150%",
          end: "bottom 0%",
          scrub: true,
          toggleAction: "restart pause resume pause",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="mt-64 relative">
      <h2 className="section-title mt-60" ref={ref}>
        Kunal
      </h2>
      <div className="mt-20 flex items-center">
        <div className="title flex items-center">
          <User />
          <h3 className="min-w-max md:ml-4 ml-2 md:text-2xl text-lg font-semibold">
            About me
          </h3>
        </div>
        <div className="line ml-6 w-full"></div>
      </div>

      <div className="md:mt-20 mt-10 md:grid grid-flow-col grid-cols-3">
        <div className="md:col-span-2">
          <p className=" text-secondary leading-relaxed">
          Hello! 👋 I'm kunal Solanki, a Mumbai-based BSC IN CS  graduate fueled by innovation. As a Frontend Developer, 
          I bring hands-on experience with a versatile tech stack including 
          React, Node.js, Express.js, ASP.NET WebAPI, and various libraries.
          </p>

          <p className="mt-4 text-secondary leading-relaxed">
          
          <h1 className={`${styles.about_heading}`}>Tech Journey:</h1>
          <br/>
<h4 className={`${styles.about_title}`}>Frontend:</h4>
I build scalable and high-performance applications using React and Next.js, focusing on reusable components, large-scale API integration, and responsive design. I also optimize performance using techniques like lazy loading and code splitting.          </p>

          <p className="mt-4 text-secondary leading-relaxed">
          
          <h4 className={`${styles.about_title}`}>Backend and DevOps:</h4>
I primarily work with API-driven architectures, collaborating closely with backend teams to integrate and manage complex data flows. I have experience working with large numbers of APIs, ensuring smooth communication between frontend and backend systems while maintaining performance and reliability.          </p>
          <p className="mt-4 text-secondary leading-relaxed mb-4">
          </p>
          <p className="mt-4 text-secondary leading-relaxed mb-4">
      
          <h4 className={`${styles.about_title}`}>Achievements and Pride:</h4>
I take pride in building scalable and production-ready applications, focusing on reusable architecture and efficient data handling. I have worked on complex systems involving large-scale API integrations and continuously aim to improve performance and user experience through practical solutions. 🚀✨
          </p>
          
          <ul
            className={`${styles.topics} grid md:grid-cols-3 grid-cols-2 gap-3 text-sm text-left`}
          >
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>UI/UX Designing</li>
            <li>Typescript</li>
          </ul>
        </div>

        <div className="md:col-span-1 md:mt-0 mt-20">
          <div className={`${styles.imgBox} mx-auto`}>
            <Image className={styles.img} src={me} alt="photo of kunal solanki" />
            <Image
              className={styles.imgGlass}
              src={me}
              alt="photo of kunal solanki"
            />
            <div className={styles.squareImg}>
              <div
                className={`${styles.xBox} ${styles.animate} ${styles.delay3}`}
              >
                <div className={styles.x}>K</div>
              </div>
              <div
                className={`${styles.xBox} ${styles.animate} ${styles.delay7}`}
              >
                <div className={styles.x}>K</div>
              </div>
              <div
                className={`${styles.xBox} ${styles.animate} ${styles.delay11}`}
              >
                <div className={styles.x}>K</div>
              </div>
              <div className={`${styles.xBox} ${styles.animate}`}>
                <div className={styles.x}>K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
