import style from "./Hamburger.module.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

let navEl = ["About", "Contact", "Work", "Tools"];

let Ham = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className={style.container}>
        <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
      </div>
      {isOpen ? (
        <div className={style.containerNav}>
          <nav className={style.list}>
            <ul>
              {navEl.map((e) => (
                <li>
                  <a onClick={() => setOpen(!isOpen)} href={"#" + e}>
                    <strong>{e}</strong>
                  </a>
                </li>
              ))}
              <li>
                <a href="/Resume.pdf">
                  <strong>Resume</strong>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Ham;
