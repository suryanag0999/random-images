import React, { useState } from "react";

const DuckGenerator = () => {
  const [duckUrl, setDuckUrl] = useState("");
  const [error, setError] = useState("");

  const fetchDuck = async () => {
    try {
      setError(""); // Reset error message
      const response = await fetch("https://cors-anywhere.herokuapp.com/https://random-d.uk/api/random");

      if (!response.ok) {
        throw new Error("Failed to fetch duck. Try again!");
      }

      const data = await response.json();
      setDuckUrl(data.url);
    } catch (err) {
      setError(err.message);
      setDuckUrl(""); // Clear image if there's an error
    }
  };

  return (
    <div className="container">
      <h1>🦆 Random Duck Generator</h1>
      <button onClick={fetchDuck} className="duck-button">Generate Random Duck</button>
      {error && <p className="error">{error}</p>}
      {duckUrl && <img src={duckUrl} alt="Random Duck" className="duck-image" />}
    </div>
  );
};

export default DuckGenerator;
