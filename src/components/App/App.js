import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { DB } from "../../utils/db";

function App() {
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isGridDoneOpen, setIsGridDoneOpen] = useState(false);
  const [isGridInWorkOpen, setIsGridInWorkOpen] = useState(true);
  const [dB, setDB] = useState([]);

  useEffect(() => {
    setDB(DB);
  }, [dB]);

  return (
    <div className="root">
      <Header />
      <Main
        isGridOpen={isGridOpen}
        isGridDoneOpen={isGridDoneOpen}
        isGridInWorkOpen={isGridInWorkOpen}
        onOpenGrid={() => {
          setIsGridOpen(!isGridOpen);
          setIsGridDoneOpen(false);
          setIsGridInWorkOpen(false);
        }}
        onOpenGridDone={() => {
          setIsGridDoneOpen(!isGridDoneOpen);
          setIsGridOpen(false);
          setIsGridInWorkOpen(false);
        }}
        onOpenGridInWork={() => {
          setIsGridInWorkOpen(!isGridInWorkOpen);
          setIsGridOpen(false);
          setIsGridDoneOpen(false);
        }}
        data={DB}
      />
    </div>
  );
}

export default App;
