import { useState, useEffect } from "react";

const useFetch = (url) => {
  // const [data, setData] = useState(null);
  let responce = null;
    fetch(url)
      .then((res) => responce= res.json())
      .then((data) => responce = error);
    return responce;
};

export default useFetch;