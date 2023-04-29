import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],
  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("javascript");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p>Select TRending books</p>
      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            title="click me"
            style={{
              padding: "0.5rem",
              margin: "1rem",
              border: "2px solid #D1D5DB",
              cursor: "pointer",
              borderRadius: "0.5rem"
            }}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        <ul>
          {bookDB[selectedGenre].map((book) => (
            <li
              style={{
                listStyle: "none",
                border: "1px solid #D1D5DB",
                padding: "1rem",
                borderRadius: "0.5rem",
                margin: "1rem 0rem",
                backgroundColor: "#D1D5DB"
                // textAlign: "left",
                // maxWidth:"50%",
              }}
              key={book.name}
            >
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
