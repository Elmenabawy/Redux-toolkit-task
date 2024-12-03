import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function PostDetails() {
  const param = useParams();
  const posts = useSelector((state) => state.postsData.posts);


  const post = posts.find((p) => p.id === parseInt(param.id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container d-flex align-items-center vh-100 ">
      <div className="card post-item">
        <div className="card-body">
          <h5>
            {post.id} - {post.title}
          </h5>
          <p className="card-text">{post.body}</p>
          <div className="postControlButtons">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faEdit} /> Update
            </button>
            <button className="btn btn-danger">
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
