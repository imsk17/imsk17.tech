import style from "./About.module.css"
export default function About() {
    return (
        <div id="About" className={style.container}>
            <div className={style.overview}>
                <p className={style.sectiontitle}>
                    About
                </p>
            </div>
            <div className={style.content}>
            <strong className={style.strong}>DEVELOPMENT</strong>
                <p className={style.text}>
                I am an Android and Backend engineer from India living in Greater Noida.
                App Development was my gateway to the creative industry. I love building beautiful Android Experiences and Powerful, Scalable Backend Systems as Well.
                </p>
                <div>
                    <strong className={style.strong}>EDUCATION</strong>
                    <p className={style.text}>
                    I am currently pursuing my Bachelor’s of Technology in Information Technology from <strong className={style.links}><a href="http://gbu.ac.in">Gautam Buddha University</a></strong> located in Greater Noida. The Latest copy of my resume can be found <strong className={style.links}><a href="/Resume.pdf">Here</a></strong>.
                </p>
                </div>
                <div>
                <strong className={style.strong}>OTHER</strong>
                <p className={style.text}>
                I absolutely love listening to music and playing badminton.
                </p>
                </div>
                <div>
                <strong className={style.strong}>HIRING</strong>
                <p className={style.text}>
                I am available for part time and intern roles as Android or a Backend Engineer.
                </p>
                </div>
            </div>
        </div>
    )
}