import Image from "next/image";
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <div id="Contact" className={style.container}>
      <div className={style.overview}>
        <p className={style.sectiontitle}>Contact</p>
      </div>
      <div className={style.content}>

          <div>
          <strong className={style.title}>
            If you want to collaborate on crafting amazing experience for people
            – you are very welcome to contact me.
          </strong>
          </div>
          <div>
          <p className={style.subtitle}>
            <em>I am available for part time Hiring and Internships.</em>
          </p>
          </div>
          <p>
            <strong className={style.title}>SUMIT KUMAR</strong>
            <p className={style.subtitle}>ANDROID AND BACKEND ENGINEER</p>
            <p className={style.mail}>
              <a href="mailto:imsumitkr17@gmail.com">imsumitkr17@gmail.com</a>
            </p>
          </p>
          <div className={style.socials}>
            <a href="https://github.com/imsk17">
              <div>
                <Image width="35px" height="35px" src="/Github.svg" />
              </div>
            </a>
            <a href="https://twitter.com/imsk_17">
              <div>
                <Image width="35px" height="35px" src="/Twitter.svg" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sumit-kumar-477818190/">
              <div>
                <Image width="35px" height="35px" src="/LinkedIn.svg" />
              </div>
            </a>
          </div>
          <strong className={style.subtitle}>
              Sumit Kumar©
          </strong>
        </div>
      </div>

  );
}
