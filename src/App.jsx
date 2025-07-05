import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {

  const [tab, setTab] = useState("Home");



  return (
    <div className="container-fluid">
      <div
        className="d-flex justify-content-center pt-4"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#f8f9fa' }}
      >
        <Button className="btn" style={{backgroundColor: tab=="Home" ? "black" : "blue"}} type="button" onClick={()=> {setTab("Home")}}>Home</Button>
        <Button className="btn mx-2" style={{backgroundColor: tab=="About" ? "black" : "blue"}} type="button" onClick={()=> setTab("About")} >About</Button>
        <Button className="btn" style={{backgroundColor: tab=="Contact" ? "black" : "blue"}} type="button" onClick={()=> setTab("Contact")} >Contact</Button>
      </div>




      {
        tab && <h1>{tab}</h1>
      }
    </div>
  );
}

export default App;
