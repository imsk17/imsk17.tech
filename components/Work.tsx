import style from "./Work.module.css";
export default function Work() {
  return (
    <div id="Work" className={style.container}>
      <div className={style.overview}>
        <p className={style.sectiontitle}>Work</p>
      </div>
      <div className={style.content}>
        <div>
          <strong className={style.title}>HANG</strong>
          <p className={style.subtitle}>
            <em >
              An Voice Chatting Platform For Zoomers, Scalable to Moon.
            </em>
          </p>
          <p className={style.stack}>
            Tech Stack Used -<p>For Web - Phoenix, Elixir</p>
            <p>For App - Kotlin</p>
          </p>
        </div>

        <div>
          <strong className={style.title}>GBU AGENDA</strong>
          <p className={style.subtitle}>
            <em >
              A Schedule App For My University.
            </em>
          </p>
          <p className={style.stack}>
            Tech Stack Used -<p>For App - Flutter, Dart, Riverpod</p>
            <p>For Backend - Python, SQLite, FastAPI</p>
          </p>
        </div>
        <div>
          <strong className={style.title}>MATTERMOST CLIENT</strong>
          <p className={style.subtitle}>
            <em>
              An Open Source Android Client for{" "}
              <strong className={style.links}>
                <a href="https://mattermost.com">Mattermost</a>.
              </strong>
            </em>
          </p>
          <p className={style.stack}>
            Tech Stack Used -
            <p>For App - Kotlin, Jetpack Compose, Coroutines</p>
          </p>
        </div>
        <div>
          <strong className={style.title}>NYAA  CHAN SEARCH BOT</strong>
          <p className={style.subtitle}>
            <em>
              A Telegram Bot Which Scrapes {" "}
              <strong className={style.links}>
                <a href="https://nyaa.si">Nyaa</a>.
              </strong>
            </em>
          </p>
          <p className={style.stack}>
            Language Used - Golang 
          </p>
        </div>
      </div>
    </div>
  );
}
