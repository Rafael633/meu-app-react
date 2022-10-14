import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div id="sidebar">
        <h1>Menu</h1>
        <nav>
          <ul>
            <li>
              <a href={"/"}>Inicial</a>
            </li>
            <li>
              <a href={"/sobre/"}>Sobre</a>
            </li>
            <li>
              <a href={`/noticias/`}>Noticias</a>
            </li>
            <li>
              <a href={`/contador/`}>Contador</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;