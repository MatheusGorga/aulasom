import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
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

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
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
