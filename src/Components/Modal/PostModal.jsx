import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const EditPostModal = ({ show, handleClose, post, handleSave }) => {
    const [editedPost, setEditedPost] = useState(post);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPost({ ...editedPost, [name]: value });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={editedPost.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="body">Body</label>
                    <textarea
                        className="form-control"
                        id="body"
                        name="body"
                        rows="4"
                        value={editedPost.body}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        handleSave(editedPost);
                        handleClose();
                    }}
                >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditPostModal;
