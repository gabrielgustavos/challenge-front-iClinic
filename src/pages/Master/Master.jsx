import { React, useState } from "react";
import { SELECTED_MASTER_NAME, forceSides } from "../../API";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import Luke from "/src/assets/images/luke-skywalker.png";
import Darth from "/src/assets/images/darth-vader.png";

import "./master.sass";

let jedi = "Luke Skywalker";
let sith = "Darth Vader";

let masterName = SELECTED_MASTER_NAME;

const Master = () => {
  const [loading, setLoading] = useState(false);
  return (
    <main className={masterName[0] === sith ? "dark_bg" : "light_bg"}>
      <nav className="back_section">
        <Link to="/">
          <AiOutlineArrowLeft className="arrow_icon" />
          <span
            className={masterName[0] === sith ? "white_back" : "black_back"}
          >
            back
          </span>
        </Link>
      </nav>
      <div className="reverse_colum">
        <nav className="btn_container">
          <button
            onClick={() => forceSides(setLoading)}
            disabled={loading}
            type="button"
            className="btn_refresh"
            loading="lazy"
            id={masterName[0] === sith ? "dark_text_btn" : "light_text_btn"}
          >
            <span> choose your path again, Padawan</span>
          </button>
        </nav>

        <div className="master_img">
          <img
            src={masterName[0] === jedi ? Luke : Darth}
            alt={masterName[0]}
          />
        </div>

        <footer className="footer_container">
          <h1
            className={masterName[0] === jedi ? "light_master" : "dark_master"}
          >
            Your master is <strong>{masterName[0]}</strong>
          </h1>
        </footer>
      </div>
    </main>
  );
};
export default Master;
