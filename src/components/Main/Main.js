import "./Main.css";
import Column from "./Column/Column";
import List from "./List/List";

function Main({
  isGridOpen,
  isGridDoneOpen,
  isGridInWorkOpen,
  onOpenGrid,
  onOpenGridDone,
  onOpenGridInWork,
  data,
  // dataDone,
  // dataInWork
}) {
  return (
    <div className="main">
      <Column />
      <List
        isGridOpen={isGridOpen}
        isGridDoneOpen={isGridDoneOpen}
        isGridInWorkOpen={isGridInWorkOpen}
        onOpenGrid={onOpenGrid}
        onOpenGridDone={onOpenGridDone}
        onOpenGridInWork={onOpenGridInWork}
        data={data}
        // dataDone={dataDone}
        // dataInWork={dataInWork}
      />
    </div>
  );
}

export default Main;
