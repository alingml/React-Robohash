import React, { useState, useEffect } from "react";
import CardsList from "../Components/CardsList";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Components/Scroll";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchField: "",
//     };
//   }

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [count, setCount] = useState(0);

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  const filteredRobots = robots.filter((robot) => {
    return robot.name
      .toLocaleLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <SearchBox searchChange={onSearchChange} />
      <button onClick={() => setCount(count + 1)}>
        Current value: {count}{" "}
      </button>
      <Scroll>
        <CardsList robots={filteredRobots} />;
      </Scroll>
    </div>
  );
};

export default App;
