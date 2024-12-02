import "./App.css";
import React from "react";
import Form from "./components/formSearch/Form";
import FormResult from "./components/formSearch/FormResult";
import useSearch from "./hooks/useSearch";

function App() {
  const { filteredData, handleSearch } = useSearch();

  return (
    <div className="App">
      <Form onSearch={handleSearch} />
      <FormResult data={filteredData} />
    </div>
  );
}

export default App;
