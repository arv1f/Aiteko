import { useRef } from "react";
import { useUsersContext } from "../store/index";
import { User } from "../interfaces";

interface ButNum {
  closeButton: (newValue: number | null) => void;
  buttonNumber: number | null;
  newList: string[];
}
const ButtonNumber = ({ newList, buttonNumber, closeButton }: ButNum) => {
  //const [addObjBut, setAddObjBut] = useState<boolean>(false);
  const addName = useRef<string>("");
  const addPassword = useRef<string>("");
  const addUrl = useRef<string>("");
  const idInList = useRef<string>("");
  const { users, addUser, editUser, deleteUser } = useUsersContext();

  const addObj = () => {
    addUser({
      name: addName.current.value,
      password: addPassword.current.value,
      url: addUrl.current.value,
    });
  };
  const editObj = () => {
    editUser(
      Number(idInList.current.value),
      addName.current.value,
      addPassword.current.value,
      addUrl.current.value,
    );
  };
  const delObj = () => {
    deleteUser(Number(idInList.current.value));
  };

  switch (buttonNumber) {
    case null:
      return (
        <div>
          <div className="rightMainDiv">
            <ul>
              {newList.length === 0 &&
                users.map((product: User, index) => {
                  return (
                    <li>
                      {index}) name: <b>{product.name}</b>, password:{" "}
                      <b>{product.password}</b>, url: <b>{product.url}</b>.
                    </li>
                  );
                })}
              {newList.length !== 0 &&
                newList.map((product: User, index) => {
                  return (
                    <li>
                      {index}) name: <b>{product.name}</b>, password:{" "}
                      <b>{product.password}</b>, url: <b>{product.url}</b>.
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      );
    case 0:
      return (
        <div>
          <div>
            <div
              className="rightMainDiv"
              style={{ width: "660px", gap: "0px" }}
            >
              <form style={{ position: "absolute", top: "15%" }}>
                Name: <br />
                <input
                  defaultValue={"vova"}
                  ref={addName}
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
              </form>
              <form style={{ position: "absolute", top: "24%" }}>
                Password: <br />
                <input
                  defaultValue={"1234"}
                  ref={addPassword}
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
              </form>
              <form style={{ position: "absolute", top: "33%" }}>
                Url: <br />
                <input
                  defaultValue={"sberbank.ry"}
                  ref={addUrl}
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
              </form>
              <button
                style={{ position: "absolute", top: "45%" }}
                onClick={() => {
                  addObj();
                }}
              >
                Добавить
              </button>
              <button
                style={{ position: "absolute", top: "70%" }}
                onClick={() => {
                  closeButton(null);
                }}
              >
                Закрыть
              </button>
            </div>
            <div
              className="rightMainDiv"
              style={{
                position: "absolute",
                left: "60%",
                zIndex: "1",
                top: "12.4%",
              }}
            >
              <ul>
                {newList.length === 0 &&
                  users.map((product: User, index) => {
                    return (
                      <li>
                        {index}) name: <b>{product.name}</b>, password:{" "}
                        <b>{product.password}</b>, url: <b>{product.url}</b>.
                      </li>
                    );
                  })}
                {newList.length !== 0 &&
                  newList.map((product: User, index) => {
                    return (
                      <li>
                        {users.indexOf(product)}) name: <b>{product.name}</b>,
                        password: <b>{product.password}</b>, url:{" "}
                        <b>{product.url}</b>.
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <div>
            <div
              className="rightMainDiv"
              style={{ width: "660px", gap: "0px" }}
            >
              <form style={{ position: "absolute", top: "15%" }}>
                Name: <br />
                <input
                  defaultValue={"vova"}
                  ref={addName}
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
              </form>
              <form style={{ position: "absolute", top: "24%" }}>
                Password: <br />
                <input
                  defaultValue={"1234"}
                  ref={addPassword}
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
              </form>
              <form style={{ position: "absolute", top: "33%" }}>
                Url: <br />
                <input
                  defaultValue={"sberbank.ry"}
                  ref={addUrl}
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
              </form>
              <form style={{ position: "absolute", top: "45%" }}>
                Number in the list (starting from 0): <br />
                <input
                  defaultValue={"0"}
                  ref={idInList}
                  type="text"
                  style={{ backgroundColor: "transparent" }}
                />
              </form>
              <button
                style={{ position: "absolute", top: "55%" }}
                onClick={() => {
                  editObj();
                }}
              >
                Изменить
              </button>
              <button
                style={{ position: "absolute", top: "70%" }}
                onClick={() => {
                  closeButton(null);
                }}
              >
                Закрыть
              </button>
            </div>
            <div
              className="rightMainDiv"
              style={{
                position: "absolute",
                left: "60%",
                zIndex: "1",
                top: "12.4%",
              }}
            >
              <ul>
              {newList.length === 0 &&
                  users.map((product: User, index) => {
                    return (
                      <li>
                        {index}) name: <b>{product.name}</b>, password:{" "}
                        <b>{product.password}</b>, url: <b>{product.url}</b>.
                      </li>
                    );
                  })}
                {newList.length !== 0 &&
                  newList.map((product: User, index) => {
                    return (
                      <li>
                        {users.indexOf(product)}) name: <b>{product.name}</b>,
                        password: <b>{product.password}</b>, url:{" "}
                        <b>{product.url}</b>.
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <div>
            <div className="rightMainDiv" style={{ width: "660px" }}>
              <form action=""></form>
              <form action=""></form>
              <form action=""></form>
              <form style={{ position: "absolute", top: "15%" }}>
                Number in the list (starting from 0): <br />
                <input
                  defaultValue={"0"}
                  ref={idInList}
                  type="text"
                  style={{ backgroundColor: "transparent" }}
                />
              </form>
              <button
                style={{ position: "absolute", top: "25%" }}
                onClick={() => {
                  delObj();
                }}
              >
                Удалить
              </button>
              <button
                style={{ position: "absolute", top: "70%" }}
                onClick={() => {
                  closeButton(null);
                }}
              >
                Закрыть
              </button>
            </div>
            <div
              className="rightMainDiv"
              style={{
                position: "absolute",
                left: "60%",
                zIndex: "1",
                top: "12.4%",
              }}
            >
              <ul>
              {newList.length === 0 &&
                  users.map((product: User, index) => {
                    return (
                      <li>
                        {index}) name: <b>{product.name}</b>, password:{" "}
                        <b>{product.password}</b>, url: <b>{product.url}</b>.
                      </li>
                    );
                  })}
                {newList.length !== 0 &&
                  newList.map((product: User, index) => {
                    return (
                      <li>
                        {users.indexOf(product)}) name: <b>{product.name}</b>,
                        password: <b>{product.password}</b>, url:{" "}
                        <b>{product.url}</b>.
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      );
  }
};
export default ButtonNumber;
