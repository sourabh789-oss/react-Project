import React, { useContext, useState } from "react";
import { AppData } from "../Context/ApplicationData";
import "../index.css";

const Card = () => {
  const { data } = useContext(AppData);
  const cardsPerPage = 6;
  const pageButtons = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const [buttonStart, setButtonStart] = useState(1);

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = data.slice(startIndex, startIndex + cardsPerPage);

  return (
    <>
      <section className="grid grid-cols-3 gap-4">
        {currentCards?.map((element, idx) => {
          return (
            <div className="w-52 h-60 rounded-md bg-white border border-black shadow-md">
              <p className="hidProperty">{element?.title}</p>
              <p className="hidProperty">{element?.body}</p>
            </div>
          );
        })}
      </section>

      <div className="flex gap-2 mt-5 justify-center">
         {
            buttonStart > 1 && (
                 <button
          disabled={buttonStart === 1}
          onClick={() => {
            setButtonStart(buttonStart - pageButtons);
          }}
        >
          {"<"}
        </button>
            )

         }
       

        {Array.from(
          {
            length: Math.min(pageButtons, totalPages - buttonStart + 1),
          },
          (_, i) => {
            const page = buttonStart + i;

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  currentPage === page ? "bg-blue-500 text-white" : ""
                }`}
              >
                {page}
              </button>
            );
          },
        )}

        <button className="text-gray-500"
          disabled={buttonStart + pageButtons > totalPages}
          onClick={() => {
            setButtonStart(buttonStart + pageButtons);
          }}
        >
          {">>"}
        </button>
      </div>
    </>
  );
};

export default Card;
