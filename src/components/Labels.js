import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center flex mt-3 ">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              updateLabel({ label: lbl, checked: !checked })
            }
            className={`form-checkbox h-5 w-5 rounded focus:ring-0 cursor-pointer`}
          />
          <span className={`ml-2 text-${lbl}-400 capitalize text-sm font-bold`}>{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  );
}