import React, { useState } from "react";

const Item = ({ name, age }) => {
  return (
    <li>
      name:{name} / {age}
    </li>
  );
};

export default function Morking() {
  const [data, setDate] = useState("");
  const [err, setErr] = useState("");

  const url =
    "https://github.com/techoi/raw-data-api/blob/main/simple-api.json";

  const getData = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDate(json.data);
      })
      .catch((err) => {
        setErr(err);
      });
  };

  //   if (err) {
  //     return <p>{err}</p>;
  //   }

  return (
    <div>
      <button onClick={getData}></button>
      {data && <ul>{data.people.map((per) => ({ data }))}</ul>}
    </div>
  );
}
