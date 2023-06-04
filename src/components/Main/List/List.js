import "./List.css";
import Line from "../Line/Line";
import Grid from "../Grid/Grid";

function List({
  isGridOpen,
  isGridDoneOpen,
  isGridInWorkOpen,
  onOpenGrid,
  onOpenGridDone,
  onOpenGridInWork,
  data,
  // dataDone,
  // dataInWork,
}) {
  return (
    <section className="list">
      <h1 className="list__title">Задачи</h1>
      <div className="list__table">
        <Line
          A="Дата"
          B="Шифр задачи"
          C="Шифр проекта"
          D="Задача"
          E="Статус"
          F="Ответственный"
          G="Переназначить"
          H="Приоритет"
          I="Комментарий"
          J="План время"
          K="Факт время"
          L="Начал"
          M="Завершил"
        />
        <Grid
          isGridOpen={isGridDoneOpen}
          onOpenGrid={onOpenGridDone}
          title="Выполненные задачи"
          data={data}
        />
        <Grid
          isGridOpen={isGridInWorkOpen}
          onOpenGrid={onOpenGridInWork}
          title="Задачи на сегодня"
          data={data}
        />
        <Grid
          isGridOpen={isGridOpen}
          onOpenGrid={onOpenGrid}
          title="Предстоящие задачи"
          data={data}
        />
      </div>
    </section>
  );
}

export default List;
