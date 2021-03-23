import 'bootstrap/dist/css/bootstrap.min.css';
import CreateLink from "./components/createLink.component";
import Navbar from "./components/navbar.component";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      <div className="container">
        <CreateLink />
      </div>
    </div>
  );
}

export default App;
