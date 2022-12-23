import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
    
  );
}

export default App;
