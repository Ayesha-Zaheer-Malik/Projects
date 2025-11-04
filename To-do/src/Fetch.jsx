import React, { useState } from "react";

export function Fetching() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  async function handleFetch() {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${user}`);
      const json = await res.json();
      console.log("Fetched data:", json);
      setData(json);
      setError(null);
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong!");
    }
  }

  return (
    <>
      <h2>Fetching...</h2>

      <input
        type="text"
        placeholder="Search User..."
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleFetch}>Search</button>

      {/* Show error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show data */}
      {data && data.length > 0 ? (
        <div>
          <h3>User Details:</h3>
          {data.map((u) => (
            <div key={u.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
              <p><strong>ID:</strong> {u.id}</p>
              <p><strong>Name:</strong> {u.name}</p>
              <p><strong>Username:</strong> {u.username}</p>
              <p><strong>Email:</strong> {u.email}</p>
              <p><strong>City:</strong> {u.address.city}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No user found</p>
      )}
    </>
  );
}


export default Fetching;
