import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer title="Tienda Deportiva Deportem" />
    </ChakraProvider>
  );
}

export default App;
