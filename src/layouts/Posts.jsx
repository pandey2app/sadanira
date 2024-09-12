import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsStart } from '../redux/actions/post.action';
import { useNavigate, useParams } from 'react-router-dom';

const Posts = () => {
  const filter = useParams().filter ?? 'all'

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // Get posts from Redux state
  const postsState = useSelector(state => state.post.posts);

  const fetchPosts = useCallback(() => {
    try {
      dispatch(getPostsStart());
    } catch (err) {
      setError('Failed to fetch posts.');
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  const getPostsByHashtag = (hashtag) => {
    navigate(`/posts/${'hashtag' + hashtag.slice(1)}`);
  }

  useEffect(() => {
    fetchPosts();
  });

  useEffect(() => {
    if (filter === 'all') {
      setPosts(postsState);
    } else if (filter.startsWith('hashtag')) {

      setPosts(postsState.filter(post => post.tags.includes(filter.replace("hashtag", "#"))));
    }
  }, [postsState, filter]);

  if (loading) {
    return <p className="text-warning text-center mt-2">Loading posts...</p>;
  }

  if (error) {
    return <p className="text-danger text-center mt-2">{error}</p>;
  }

  return (
    <div className="container">
      <h2>Posts</h2>
      <div className="row">
        {posts?.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4" >
              <div className="card h-100">
                <img
                  src={post.image ?? `${process.env.REACT_APP_BACKEND_ROOT_ADDRESS}/img/default_post_image.jpg`}
                  className="card-img-top"
                  alt={post.title}
                  style={{ objectFit: 'cover', maxHeight: '200px' }}
                />
                <div className="card-body overflow-hidden" style={{maxHeight : '150px'}}>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content.substring(0, 50)}...</p>
                  <div>
                    {post.tags && post.tags.map((tag, index) => (
                      <span key={index} onClick={()=>getPostsByHashtag(tag)} className="me-1" style={{color: "blue", cursor : 'pointer'}}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer d-flex gap-5 justify-content-between">
                  <a href={`/post/view/${post._id}`} className="btn btn-sm btn-primary">Read More</a>
                  <a href={`/members/${post.author._id}`} className="btn btn-sm btn-success">By : {post.author.name}</a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
