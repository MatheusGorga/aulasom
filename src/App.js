import { Component } from "react";
import "./App.css";
import { Posts } from "./components/Posts/Index";
import { loadPost } from "./utils/load-posts";

class App extends Component {
  state = {
    posts: [],
  };

  /* https://jsonplaceholder.typicode.com/posts */

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPost();
    this.setState({ posts: postsAndPhotos });
  };

  /* 
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => this.setState({ posts }));
   */

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default App;
