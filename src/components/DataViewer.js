import React from "react";

/**
 * Takes structured data and displays it in a paragraph
 * @param {*} data
 */
const DataViewer = ({ data }) => {
  return (
    <div>
      {data.map((dataElement, index) => (
        <p
          key={`data-display-${index}`}
          className="button-like width--is--100pc">
          {dataElement.data}
        </p>
      ))}
    </div>
  );
};

export default DataViewer;
