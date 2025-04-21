import React from "react";

class FetchShareMarketCORS extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(
      ("http://127.0.0.1:8000/api/recordsddd",
      {
        mode: "no-cors",
        method: "get",
        headers: {
          "Content-Type": "application/json",
        }
      })
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>{" "}
        </div>
      );
    console.log("help .....");
    return (
      <table className="table table-striped table table-hover border border-danger ">
        <thead>
          <tr className="table-danger">
            <th scope="col">INSTRUMENT</th>
            <th scope="col">SYMBOL</th>
            <th scope="col">EXPIRY_DT</th>
            <th scope="col">STRIKE_PR</th>
            <th scope="col">OPTION_TYP</th>
            <th scope="col">OPEN</th>
            <th scope="col">HIGH</th>
            <th scope="col">LOW</th>
            <th scope="col">CLOSE</th>
            <th scope="col">SETTLE_PR</th>
            <th scope="col">CONTRACTS</th>
            <th scope="col">VAL_INLAKH</th>
            <th scope="col">OPEN_INT</th>
            <th scope="col">TIMESTAMP</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.key}>
                <td>{item.INSTRUMENT}</td>
                <td>{item.SYMBOL}</td>
                <td>{item.EXPIRY_DT}</td>
                <td>{item.STRIKE_PR}</td>
                <td>{item.OPTION_TYP}</td>
                <td>{item.OPEN}</td>
                <td>{item.HIGH}</td>
                <td>{item.LOW}</td>
                <td>{item.CLOSE}</td>
                <td>{item.SETTLE_PR}</td>
                <td>{item.CONTRACTS}</td>
                <td>{item.VAL_INLAKH}</td>
                <td>{item.OPEN_INT}</td>
                <td>{item.TIMESTAMP}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default FetchShareMarketCORS;
