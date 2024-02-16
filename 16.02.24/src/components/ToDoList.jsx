import styled from "styled-components";
import { useState } from "react";
import "./ToDoList.css";

const MyList = styled.ul`
  margin-top: 10px;
  height: auto;
  list-style-type: none;
  font-size: 35px;
  text-align: left;
  padding-left: 100px;
  padding-top: 50px;
`;
const Li = styled.li`
  color: white;
`;
const CaseInput = styled.input`
  width: 400px;
  height: 45px;
  background: violet;
  border: solid 1px white;
  border-radius: 10px;
  font-size: 35px;
`;
const CaseButton = styled.button`
  width: 85px;
  height: 55px;
  top: 179.3px;
  left: 735px;
  position: absolute;
  background: violet;
  padding: 0px;
`;

export default function ToDoList({ value }) {
  const [myList, setMyList] = useState([""]); //"qweqwedsd", "qwd", "sfa"]);
  //const [myCase, setCase] = useState('');

  let newList = [];
  function ListWithValue() {
    myList.forEach((element) => {
      if (element.slice(0, value.length) === value) {
        newList.push(element);
      }
    });
  }

  const deleteCase = (product) => {
    setMyList((delCase) => {
      const id = delCase.findIndex((p) => p === product);
      return [...delCase.slice(0, id), ...delCase.slice(id + 1)];
    });
    console.log(myList);
  };

  const newCase = () => {
    setMyList([...myList, document.getElementById("4").value]);
    myList.push(document.getElementById("4").value);
    ListWithValue();
  };
  if (myList[0] === "") {
    myList.shift();
  }
  if (value.length !== 0) {
    ListWithValue();
    return (
      <MyList>
        <div>
          new business:{" "}
          <CaseInput placeholder={"new case"} id="4" type="text" />{" "}
          <CaseButton onClick={() => newCase()}>Add</CaseButton>
        </div>
        {newList.map((product) => {
          return (
            <Li>
              <button className="buttona">
                <a href="#">{product}</a>
              </button>
              <button
                className="buttona"
                onClick={() => {
                  deleteCase(product);
                }}
              >
                <a href="#">Удалить</a>
              </button>
            </Li>
          );
        })}
      </MyList>
    );
  } else {
    return (
      <MyList>
        <div>
          new business:{" "}
          <CaseInput placeholder={"new case"} id="4" type="text" />{" "}
          <CaseButton onClick={() => newCase()}>Add</CaseButton>
        </div>
        {myList.map((product) => {
          return (
            <Li>
              <button className="buttona">
                <a href="#">{product}</a>
              </button>
              <button
                className="buttona"
                onClick={() => {
                  deleteCase(product);
                }}
              >
                <a href="#">Удалить</a>
              </button>
            </Li>
          );
        })}
      </MyList>
    );
  }
}
