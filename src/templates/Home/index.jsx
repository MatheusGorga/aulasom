import React, { useCallback, useEffect, useState } from 'react';
import './styles.css';
import { Posts } from '../../components/Posts/Index';
import { loadPost } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { InputText } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [serchValue, setSerchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filterePosts = serchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(serchValue.toLocaleLowerCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPost();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePost = () => {
    const nextPage = page + postsPerPage;
    const nextPostes = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPostes);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSerchValue(value);
  };

  return (
    <section className="container">
      <h1>Posts - Curso</h1>
      <div className="input-container">
        <InputText serchValue={serchValue} handleChange={handleChange} />
      </div>

      {filterePosts.length > 0 ? <Posts posts={filterePosts} /> : <h3>nenhum post encontrado</h3>}

      <div className="button-container">
        {!serchValue && <Button disabled={noMorePosts ? true : false} text="Load more posts" onClick={loadMorePost} />}
      </div>
    </section>
  );
};

/* class Home2 extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
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
} */

export default Home;
