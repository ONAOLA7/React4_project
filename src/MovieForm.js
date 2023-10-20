import { useState } from "react";

const MovieForm = ({ setMovieState }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleclick = () => {
    const movie = {
      id: 1,
      title: title,
      Description: description,
      PosterURL: posterURL,
      Rating: rating,
    };

    setMovieState(prev => [...prev, movie])
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="posterUrl"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>

      <button onClick={handleclick}>ADD</button>
    </>
  );
};

export default MovieForm;
