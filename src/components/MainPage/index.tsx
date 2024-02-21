import "./index.css";
import MyVeryButton from "../Button";
import { useUsersContext } from "../../store";
import { useState } from "react";
import ButtonNumber from "../ButtonNumber";

interface Page {
  onClickChangePage: (newValue: string | null) => void;
  myName: string;
}
let width: Object;

const MainPage = ({ onClickChangePage, myName }: Page) => {
  const [buttonNumber, setButtonNumber] = useState<number | null>(null);
  const [myChange, setMyChange] = useState<string>("");

  const { users } = useUsersContext();
  const functSetButtonNumber = (type: number | null): void => {
    setButtonNumber(type);
    if (type === null) {
      width = { width: "1385px" };
    } else {
      width = { width: "2090px" };
    }
  };

  const newList: string[] = [];
  const ListWithValue = () => {
    users.forEach((element) => {
      console.log(element);
       if (element.name.slice(0, myChange.length) === myChange) {
         newList.push(element);
       }
    });
  };
  if (myChange.length !== 0) {
    ListWithValue();
  }
  return (
    <div className="divBG">
      <header className="ContainerM">
        <h1>Password Manager</h1>
        <input
          id="3"
          defaultValue={myChange}
          onChange={(event) => setMyChange(event.target.value)}
          placeholder="Nickname search"
          className="myInput"
          type="text"
        />
        <h2>{myName}</h2>
        <button className="myButton" onClick={() => onClickChangePage(null)}>
          Выйти
        </button>
      </header>
      <div className="das">
        <h1>Password Manager</h1>
        <form>
          Select a name:
          <input placeholder="VOVA" defaultValue={"vova"} type="text" />
        </form>
        <form>
          Select a password:
          <input
            defaultValue={"500000"}
            type="range"
            min="-10000000"
            max="10000000"
          />
        </form>
        <button className="welcome">COME IN</button>
      </div>
      <main style={width}>
        <div className="leftMainDiv">
          <MyVeryButton
            onClick={functSetButtonNumber}
            falseOrTrue={0}
            inText="Добавить"
          ></MyVeryButton>
          <MyVeryButton
            onClick={functSetButtonNumber}
            falseOrTrue={1}
            inText="Изменить"
          ></MyVeryButton>
          <MyVeryButton
            onClick={functSetButtonNumber}
            falseOrTrue={2}
            inText="Удалить"
          ></MyVeryButton>
        </div>
        <ButtonNumber
          newList={newList}
          buttonNumber={buttonNumber}
          closeButton={functSetButtonNumber}
        ></ButtonNumber>
      </main>
    </div>
  );
};
export default MainPage;
