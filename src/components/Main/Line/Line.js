import "./Line.css";
import React, { useState, useEffect } from "react";

function Line({ A, B, C, D, E, F, G, H, I, J, K, L, M }) {
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    const data = [A, B, C, D, E, F, G, H, I, J, K, L, M];
    setRenderData(data);
  }, [A, B, C, D, E, F, G, H, I, J, K, L, M]);

  return (
    <ul className={`${renderData[4] ? "line_type_title" : "line"}`}>
      {renderData.map((item, i) =>
        item ? (
          <li
            key={i}
            className={`line__item 
          ${i === 0 && "line__item_type_A"} 
          ${i === 1 && "line__item_type_B"}
          ${i === 2 && "line__item_type_C"}
          ${i === 3 && "line__item_type_D"}
          ${i === 4 && "line__item_type_E"}
          ${i === 5 && "line__item_type_F"}
          ${i === 6 && "line__item_type_G"}
          ${i === 7 && "line__item_type_H"}
          ${i === 8 && "line__item_type_I"}
          ${i === 9 && "line__item_type_J"}
          ${i === 10 && "line__item_type_K"}
          ${i === 11 && "line__item_type_L"}
          ${i === 12 && "line__item_type_M"}`}
          >
            {item}
          </li>
        ) : (
          <select key={i} className="line__select" name="status">
            <option value="1">Выполнена</option>
            <option value="2">На паузе</option>
            <option value="3">В работе</option>
          </select>
        )
      )}
    </ul>
  );
}

export default Line;
