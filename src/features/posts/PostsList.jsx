import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";
import "./style.css";
import { Link } from "react-router-dom";
import DeletePostButton from "../../Components/Button/DeletePostButton";
import EditPostButton from "../../Components/Button/EditPostButton";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsData.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <div className="posts-container">
        <div className="container">
          <div className="">
            <div className="">
              {posts &&
                posts.map((post) => (
                  <div className="card post-item" key={post.id}>
                    <div className="card-body">
                      <h5>
                        <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
                        {post.id} - {post.title}
                        </Link>
                      </h5>
                      <p className="card-text mb-2">{post.body}</p>
                      <div className="postControlButtons">
                        <EditPostButton post={post} />
                        <DeletePostButton postId={post.id} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default PostsList;
