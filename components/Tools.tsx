import style from "./Tools.module.css"
export default function Tools() {
    return (
        <div id="Tools" className={style.container}>
            <div className={style.overview}>
                <p className={style.sectiontitle}>
                    Tools
                </p>
            </div>
            <div className={style.content}>
              <p className={style.text}>
                <div>
                <strong>Languages I am Familiar With -</strong>
                <p className={style.textcon}>
                  1 - Golang<br/>
                  2 - Python<br/>
                  3 - Kotlin<br/>
                  4 - Dart<br/>
                  5 - TypeScript/JavaScript<br/>
                  6 - SQL
                </p>
                </div>
                <div>
                  <br/>
                <strong>Tech I Want To Learn-</strong>
                <p className={style.textcon}> 
                  1 - Rust Language<br/>
                  2 - Phoenix Framework<br/>
                  3 - Elixir Language<br/>
                  4 - Crystal Language<br/>
                  5 - AWS<br></br>
                  6 - Kubernetes/DevOps
                </p >
                </div>
                <div>
                  <br/>
                <strong>My Favourites-</strong>
                <p className={style.textcon}>
                  IDEs - IntelliJ IDEA<br/>
                  Code Editor - Visual Studio Code<br/>
                  Operating System - Arch Linux<br/>
                  Game Series - Assassins Creed <br/>
                  Musician - Sia<br></br>
                </p>
                </div>
              </p>
            </div>
        </div>
    )
}