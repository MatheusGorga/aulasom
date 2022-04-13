import { Component } from "react";
import "./styles.css";
import { Posts } from "../../components/Posts/Index";
import { loadPost } from "../../utils/load-posts";
import { Button } from "../../components/Button";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
  };

  /* https://jsonplaceholder.typicode.com/posts */

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPost();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePost = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPostes = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPostes);

    this.setState({
      posts,
      page: nextPage,
    });
  };

  /* 
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => this.setState({ posts }));
   */

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className="container">
        <Posts posts={posts} />
        <div className="button-container">
          <Button
            disabled={noMorePosts ? true : false}
            text="Load more posts"
            onClick={this.loadMorePost}
          />
        </div>
      </section>
    );
  }
}

export default Home;
