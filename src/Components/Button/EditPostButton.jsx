import React ,{ useState }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import EditPostModal from "../Modal/PostModal";
import { updatePost } from "../../features/posts/postsSlice"; // Assume updatePost is a Redux thunk


const EditPostButton = ({ post }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleSave = (editedPost) => {
        dispatch(updatePost(editedPost)); // Update post in Redux store
    };

    return (
        <>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                <FontAwesomeIcon icon={faEdit} /> Update
            </button>
            <EditPostModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                post={post}
                handleSave={handleSave}
            />
        </>
    )
}

export default EditPostButton