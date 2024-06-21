import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [zip, setZip] = useState("");

  // console.log("Data ==> ", [name, email, phn, zip]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    try {
      const res = await fetch('http://localhost:8081/users', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          name: name,
          phone: phn,
          email: email,
          zip: zip
        })
      });
  
      if (res.ok) {
        const response = await res.json();
        console.log("Response from API ==> ", response);
      } else {
        console.error("Failed to add user:", res.status);
      }
  
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  
  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="phn"
          onChange={(e) => setPhn(e.target.value)}
        />
        <input
          type="text"
          placeholder="zip"
          onChange={(e) => setZip(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
