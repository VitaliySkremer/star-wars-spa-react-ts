import {Header} from "./Module/Header/Header";
import {Footer} from "./Module/Footer/Footer";
import {Hero} from "./Pages/Hero";
import {Ships} from "./Components/UI/Ships/Ships";

function App() {

  return (
    <div className="app">
      <Header/>
      <main>
        <Hero/>
      </main>
      <Footer/>
      <Ships/>
    </div>
  )
}

export default App
