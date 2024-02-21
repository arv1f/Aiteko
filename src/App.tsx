import { useState } from "react";
import RegistrationPage from "./components/RegistrationPage/index.tsx";
import MainPage from "./components/MainPage/index.tsx";

export default function App() {
  const [page, setPage] = useState<string | null>(null);
  const callback = (type: string | null): void => {
    setPage(type);
  };
  return (
    <>
      {!page && (
        <RegistrationPage onClickChangePage={callback}></RegistrationPage>
      )}
      {page && (
      <MainPage onClickChangePage={callback} myName={page}></MainPage>
      )}
    </>
  );
}
