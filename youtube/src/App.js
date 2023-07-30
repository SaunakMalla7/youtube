import "./App.css";
import Content from "./content/Content";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Content />
      </main>
    </>
  );
}

export default App;
