import "./components/styles/App.css";
import "../src/components/styles/Variables.css";
import "../src/components/styles/CommonStyles.css";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";
import { useEffect, useState } from "react";
import DatabaseResponse from "./components/utils/DatabaseResponse";

function App() {
  const [data, setData] = useState(undefined);
  useEffect(function () {
    setTimeout(() => {
      const response = DatabaseResponse;
      setData(response);
    }, 1000);
  }, []);
  if (!data) return <div>Loading... </div>;
  return (
    <div className="App">
      <header className="App-header">
        <Content data={data} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
