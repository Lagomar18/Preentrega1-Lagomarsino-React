
import "./css/main.css"
import { Header } from './components/header/Header'
import { ItemListContainer } from './components/ItemListContainer'
import background from "./assets/img/fondo.jpg";

function App() {

  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Header />

        <ItemListContainer greeting="Próximamente podrás ver la mejor indumentaria femenina aquí" />

      </div>

    </>
  )
}

export default App
