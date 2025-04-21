import React from "react";

class FetchData extends React.Component {
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
    fetch("http://127.0.0.1:5000/api/records")
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

    return (
      <table class="table table-striped table table-hover border border-danger ">
        <thead>
          <tr className="table-danger">
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">street</th>
            <th scope="col">suite</th>
            <th scope="col">city</th>
            <th scope="col">zipcode</th>
            <th scope="col">lat</th>
            <th scope="col">lng</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.key}>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.street}</td>
                <td>{item.address.suite}</td>
                <td>{item.address.city}</td>
                <td>{item.address.zipcode}</td>
                <td>{item.address.geo.lat}</td>
                <td>{item.address.geo.lng}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default FetchData;
