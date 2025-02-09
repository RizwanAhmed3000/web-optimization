import axios from "axios";
import { useEffect, useState } from "react";
import AddToCart from "../components/table.tsx";
// import sum from "../sum.ts";
// const sum = lazy(() => import("../sum.ts"));

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  // FETCH METHOD FOR GETTING DATA

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("https://api.example.com/data");
  //         const result = await response.json();
  //         setData(result);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  // AXIOS METHOD GETTING FOR DATA

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://api.example.com/data");
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // FETCH METHOD FOR POSTING DATA

  //   const postData = async () => {
  //     const data = { name: "John Doe", age: 30 };

  //     try {
  //       const response = await fetch("https://api.example.com/data", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const result = await response.json();
  //       setResponseMessage(result.message || "Data posted successfully!");
  //     } catch (error) {
  //       console.error("Error posting data:", error);
  //       setResponseMessage("Error posting data");
  //     }
  //   };

  // AXIOS METHOD FOR POSTING DATA

  // const postData = async () => {
  //   const data = { name: "John Doe", age: 30 };

  //   try {
  //     const response = await axios.post("https://api.example.com/data", data);
  //     setResponseMessage(response.data.message || "Data posted successfully!");
  //   } catch (error) {
  //     console.error("Error posting data:", error);
  //     setResponseMessage("Error posting data");
  //   }
  // };

  return (
    <>
      <div>Home</div>
      {/* <button
        onClick={() => {
          import("../sum.ts").then((module) => {
            alert(module.default(2, 2));
          });
        }}
      >
        Add 2 + 2
      </button> */}
      <br />
      <AddToCart />
      <br />
      {/* <button onClick={() => setIsAdmin(!isAdmin)}>Toogle Admin</button> */}
      {isAdmin ? <div>you are Admin</div> : <div>you are not Admin</div>}
    </>
  );
};

export default Home;
