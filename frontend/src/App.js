import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

// Componenete: função que retorna algum conteudo HTML/CSS/JS (para interfaces). O mais isolado possivel,
//                um componenete por arquivo. Envolver com <div></div> ou fragmet <></>.
// Propriedade: "atributos" do HTML. Dentro do parametro props.
// Estado:  Informação que o componente vai manipular. Função dentro da função do componenete.

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function hadleAddDev(data) {
    console.log(data);
    const response = await api.post("/devs", data);
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={hadleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map((dev) => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
