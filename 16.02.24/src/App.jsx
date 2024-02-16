import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import ToDoList from "./components/ToDoList.jsx";

const Background = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background: linear-gradient(blue, 3%, pink);
`;
const Container = styled.div.attrs((props) => ({
  color: props.color || "linear-gradient(blue, 10%, pink)",
}))`
  display: grid;
  position: absolute;
  left: 38%;
  top: 38%;
  gap: 15px;
  width: 500px;
  height: 350px;
  border: solid 3px linear-gradient(blue, 10%, pink);
  padding: 10px;
  border-radius: 5%;
  background-color: transparent;
  background: inherit;
  backdrop-filter: blur(10px);
`;
const Input = styled.input`
  background-color: transparent;
  font-size: 40px;
  border-radius: 15%;
  border: double 4px blue;
`;
const Button = styled.button`
  background-color: transparent;
  background: inherit;
  backdrop-filter: blur(10px);
  font-size: 35px;
`;
const GoodAfternoon = styled.div`
  font-size: 45px;
  text-align: left;
  padding-left: 100px;
  padding-top: 50px;
  display: grid;
  grid-template-columns: 600px 1200px 0px;
`;

/*let storageKey;
function saveData(data) {
  localStorage.setItem(storageKey, JSON.stringify(data));
}
function getData() {
  const data = localStorage.getItem(storageKey);
  return data ? JSON.parse(data) : null;
}*/

export default function App() {
  const [value, setValue] = useState([]);
  const [myChange, setMyChange] = useState("");

  const register = () => {
    if (
      document.getElementById("0").value !== "" &&
      document.getElementById("1").value !== ""
    ) {
      setValue([
        ...value,
        document.getElementById("0").value,
        document.getElementById("1").value,
      ]);
    }
  };
  return (
    <>
      {value.length === 0 && (
        <Container>
          <Input id="0" type="text" placeholder="Come up with a name" />
          <Input id="1" type="password" placeholder="Make up a password" />
          <Button onClick={() => register()}>Sign up</Button>
        </Container>
      )}

      {value.length !== 0 && (
        <Background>
          <GoodAfternoon>
            <div>Your to-do list:</div>
            <Input
              id="3"
              type="text"
              placeholder="Choose a case"
              value={myChange}
              onChange={(event) => setMyChange(event.target.value)}
              style={{ width: "800px" }}
            />
            <div>{value[0]}</div>
          </GoodAfternoon>
          <ToDoList value={myChange}></ToDoList>
        </Background>
      )}
    </>
  );
}
