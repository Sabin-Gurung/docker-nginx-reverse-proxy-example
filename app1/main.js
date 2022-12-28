console.log("hello");

fetch("http://api.localhost", { mode: "cors" })
  .then((res) => res.json())
  .then((res) => console.log(res));
