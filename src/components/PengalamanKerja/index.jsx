import React from "react";

const index = ({ title, date, desc, pencapaian, posisi, text }) => {
  return (
    <div className="py-2 px-3 bg-white dark:bg-blackSecondary ring-2 ring-gray-200 dark:ring-gray-900 rounded-md ">
      <div className="flex justify-between items-center mb-3 ">
        <div className="flex flex-col ">
          <span className="font-bold">{title}</span>
          <span c>{posisi}</span>
        </div>
        <p className="font-semibold">{date}</p>
      </div>

      <p>{desc?.paragraf}</p>
      {desc.tanggungJawab && (
        <ul className="list-disc ms-5">
          {desc.tanggungJawab.map((item, index) => (
            <li key={index}>
              <span className="">{item}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-3">{text} :</p>
      {pencapaian && (
        <ul className="list-disc ms-5">
          {pencapaian.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default index;
