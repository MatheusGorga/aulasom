import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "Titulo 1",
        description: "descrição 1",
      },
      {
        id: 2,
        title: "Titulo 2",
        description: "descrição 2",
      },
      {
        id: 3,
        title: "Titulo 3",
        description: "descrição 3",
      },
    ],
  };

  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    this.handleTimeOut();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;
    posts[0].title = "O titulo mudou";

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 5000);
  };

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
