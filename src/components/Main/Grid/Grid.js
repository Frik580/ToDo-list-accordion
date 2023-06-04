import "./Grid.css";
import React, { useState, useEffect } from "react";
import Line from "../Line/Line";

function Grid({ onOpenGrid, isGridOpen, title, data }) {
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    setRenderData(data);
    console.log(renderData);
  }, [data, renderData]);

  return (
    <div className={`grid ${isGridOpen && "grid_active"}`}>
      <div className="grid__top">
        <p className="grid__title">{title}</p>
        <div className="grid__navigation">
          <button
            onClick={onOpenGrid}
            className={`hover ${
              isGridOpen ? "grid__close-button" : "grid__open-button"
            }`}
            type="button"
          />
        </div>
      </div>
      <div className="grid__bottom">
        {renderData.map((item) => (
          <Line
            key={item.id}
            A={item.date}
            B={item.task_id}
            C={item.project_id}
            D={item.task}
            F={item.responsible}
            G={item.reassign}
            H={item.priority}
            I={item.comment}
            J={item.time_plan}
            K={item.time_fact}
            L={item.start}
            M={item.end}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
