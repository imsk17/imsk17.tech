import style from "./Landing.module.css";
import Image from "next/image";

export default function Landing() {
  return (
    <div className={style.container}>
      <div className={style.gopher}>
        <Image alt="gopher" src="/Gopher.svg" width="316" height="428"></Image>
      </div>
      <strong className={style.loves}>ANDROID AND BACKEND ENGINEER</strong>
      <div className={style.titlecon}>
        <p className={style.title}>
          Sumit
          <p> Kumar</p>
        </p>
      </div>
      <p className={style.nav}>
        <a href="#About">About</a> /&nbsp;
        <a href="#Contact">Contact</a> /&nbsp;
        <a href="#Work">Work</a> /&nbsp;
        <a href="/Resume.pdf">Resume</a> /&nbsp;
        <a href="#Tools">Tools</a>
      </p>
      <div className={style.android}>
        <Image
          alt="android"
          src="/Android.svg"
          width="250"
          height="150"
        ></Image>
      </div>
    </div>
  );
}
