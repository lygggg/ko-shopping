import React from "react";
import axios from "axios";

import Theme from "./Theme";

const getHome = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_PSTM_API}/home`);
  console.log(data.themes);
};

const Home = () => {
  return (
    <div>
      <Theme />
      <button onClick={getHome}>클릭</button>
    </div>
  );
};

export default Home;
