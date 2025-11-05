import React, { useState, useCallback } from "react";

export function UserList() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  
  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  
  const handleFetch = useCallback(async (query) => {
    

    
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?id=${query}`
      );
      const json = await res.json();
      console.log("Fetched data:", json);
      setData(json);
      setError(null);
    
  }, []);

  
  const debouncedFetch = useCallback(debounce(handleFetch, 500), [handleFetch]);

 
  const handleChange = (e) => {
    const value = e.target.value;
    setUser(value);
    debouncedFetch(value);
  };

 
  const handleSearchClick = () => {
    handleFetch(user); 
  };

  console.log("User list component rendered");

  return (
    <>
      <h2>Fetch User Data</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search User..."
          value={user}
          onChange={handleChange}
          id="user-input"
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
        />
        <button
          onClick={handleSearchClick}
          id="user-btn"
          style={{
            display: "inline-block",
            verticalAlign: "middle",
          }}
        >
          Search
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && data.length > 0 ? (
        <div>
          <h3>User Details:</h3>
          {data.map((u) => (
            <div
              key={u.id}
              style={{
                border: "1px solid gray",
                margin: "10px",
                padding: "10px",
              }}
            >
              <p>ID: {u.id}</p>
              <p>Name: {u.name}</p>
              <p>Username: {u.username}</p>
              <p>Email: {u.email}</p>
              <p>City: {u.address.city}</p>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default UserList;
