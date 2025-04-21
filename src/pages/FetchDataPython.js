import { useState, useEffect } from "react";

function FetchDataPython() {
  //const [article, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/records", {
      methods: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
    <table class="table table-striped table table-hover border border-danger ">
      <thead>
        <tr className="table-danger">
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">col1</th>
          <th scope="col">col2</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.key}>
              <td>{item.username}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

}

export default FetchDataPython;
