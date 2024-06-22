import React, { useState } from "react";

const About = () => {
  const [data, setData] = useState({});
  console.log("Data ==>", data);
  
  const getData = async () => {
    try {
      const apiRes = await fetch("http://localhost:8081/users",{
        method:'GET',
        headers:{
          "Content-type":'application/json'
        }
      });

      // console.log("ApiRes ==>", JSON.stringify(apiRes));
      
      if (apiRes.ok) {
        const res = await apiRes.json()
        setData(res);
      }
    } catch (error) {
      console.log("GET ERROR ==>", error);
    }
  };
  return (
    <div>
      <h1>About Page..</h1>
      <button onClick={getData}>Get Data</button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default About;
