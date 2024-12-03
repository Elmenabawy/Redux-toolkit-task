import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {deletePost}  from '../../features/posts/postsSlice';
import { toast } from 'react-toastify';

const DeletePostButton = ({ postId }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
            dispatch(deletePost(postId))
                .then(() => {
                    toast.success('Post deleted successfully');
                })
                .catch((error) => {
                    toast.error('Failed to delete the post');
                    console.error('Error deleting post:', error);
                });
    };

    return (
        <>
            <button className="btn btn-danger" onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
        </>
    )
}

export default DeletePostButton