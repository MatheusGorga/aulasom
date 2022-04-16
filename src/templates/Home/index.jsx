import React, { Component } from "react";
import "./styles.css";
import { Posts } from "../../components/Posts/Index";
import { loadPost } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { InputText } from "../../components/TextInput";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    serchValue: "",
  };

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

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ serchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, serchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filterePosts = serchValue
      ? allPosts.filter((post) => {
          return post.title
            .toLowerCase()
            .includes(serchValue.toLocaleLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <h1>Posts - Curso</h1>
        <div className="input-container">
          <InputText serchValue={serchValue} handleChange={this.handleChange} />
        </div>

        {filterePosts.length > 0 ? (
          <Posts posts={filterePosts} />
        ) : (
          <h3>nenhum post encontrado</h3>
        )}

        <div className="button-container">
          {!serchValue && (
            <Button
              disabled={noMorePosts ? true : false}
              text="Load more posts"
              onClick={this.loadMorePost}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
