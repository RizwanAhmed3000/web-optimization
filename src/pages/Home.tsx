import { useState } from "react";
// import sum from "../sum.ts";
// const sum = lazy(() => import("../sum.ts"));

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <div>Home</div>
      <button
        onClick={() => {
          import("../sum.ts").then((module) => {
            alert(module.default(2, 2));
          });
        }}
      >
        Add 2 + 2
      </button>
      <br />
      <br />
      <button onClick={() => setIsAdmin(!isAdmin)}>Toogle Admin</button>
      {isAdmin ? <div>you are Admin</div> : <div>you are not Admin</div>}
    </>
  );
};

export default Home;
