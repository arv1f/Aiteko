import { useState } from "react";
import "./index.css";

interface Page {
  onClickChangePage: (newValue: string | null) => void;
}

const RegistrationPage = ({ onClickChangePage }: Page) => {
  const [valuePassword, setValuePassword] = useState<string | null>(null);
  const [butError, setButError] = useState<boolean>(false);

  return (
    <div className="divBG">
      <div className="Container">
        <header>
          <h1>Password Manager</h1>
        </header>
        <form>
          Select a name:
          <input placeholder="VOVA" defaultValue={"vova"} id="1" type="text" />
        </form>
        <form>
          Select a password:
          <input
            defaultValue={"534218"}
            onChange={() => {
              setValuePassword(document.getElementById("2").value);
            }}
            id="2"
            type="range"
            min="-10000000"
            max="10000000"
          />
          {valuePassword === null ? "534218" : valuePassword}
        </form>
        <button
          className="welcome"
          onClick={() => onClickChangePage(document.getElementById("1").value)}
        >
          COME IN
        </button>
      </div>
      <form>
        <button
          className="nonBorder"
          onMouseOver={() => setButError(true)}
          onMouseOut={() => setButError(false)}
        >
          <a href="#">Зарегистрироваться</a>
        </button>
        {butError === true && (
          <>
            <div
              style={{
                top: "68%",
                left: "43.2%",
                position: "absolute",
                fontSize: "18px",
                color: "red",
              }}
            >
              <a style={{ color: "black" }}>Вам не</a>
            </div>
            <div
              style={{
                top: "68%",
                left: "53.4%",
                position: "absolute",
                fontSize: "18px",
                color: "red",
              }}
            >
              <a style={{ color: "black" }}>все места заняты</a>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
export default RegistrationPage;
