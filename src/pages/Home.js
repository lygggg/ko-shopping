import React from "react";
import axios from "axios";

const getHome = async () => {
  const { data } = await axios.get(
    "https://c2c71aa1-a8be-4a3b-bd59-4b1498e1fe06.mock.pstmn.io/home"
  );
  console.log(data.themes);
};

const Home = () => {
  return (
    <div>
      <button onClick={getHome}>클릭</button>
    </div>
  );
};

export default Home;
