import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css';

// Componenete: função que retorna algum conteudo HTML/CSS/JS (para interfaces). O mais isolado possivel, 
//                um componenete por arquivo. Envolver com <div></div> ou fragmet <></>.
// Propriedade: "atributos" do HTML. Dentro do parametro props.
// Estado:  Informação que o componente vai manipular. Função dentro da função do componenete.

function App() {
  return (
      <div id="app">
          <aside>
              <strong>Cadastrar</strong>
              <form>
                  <div className="input-block">
                    <label htmlFor="github_username">Usuario do Github</label>
                    <input name="github_username" id="github_username" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="techs">Tecnologias</label>
                    <input name="techs" id="techs" required />
                  </div>
                  <div className="input-group">
                    <div className="input-block">
                      <label htmlFor="latitude">Latitude</label>
                      <input name="latitude" id="latitude" required />
                    </div>
                    <div className="input-block">
                      <label htmlFor="longitude">Longitude</label>
                      <input name="longitude" id="longitude" required />
                    </div>
                  </div>
                  <button type="submit">Salvar!</button>
              </form>
          </aside>
          <main>
              <ul>
                <li className="dev-item">
                  <header>
                    <img src="..." alt="Caio Sales"/>
                    <div className="user-info">
                      <strong>Caio Sales</strong>
                      <span>ReactJs, ReactNative, Node.js</span>
                    </div>
                  </header>
                  <p>Biografia</p>
                  <a href="...">Acessar perfil no Github</a>
                </li>
              </ul>
          </main>
      </div>
  );
}

export default App;
