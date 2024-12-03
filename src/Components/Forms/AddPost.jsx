import React from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../network/postsApis";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";

function AddPost() {
    const dispatch = useDispatch();

    const validate = (values) => {
        const errors = {};

        if (!values.title) {
            errors.title = "Title is required";
        } else if (values.title.length < 5) {
            errors.title = "Title must be at least 10 characters";
        }

        if (!values.body) {
            errors.body = "Body is required";
        } else if (values.body.length < 10) {
            errors.body = "Body must be at least 10 characters";
        }

        return errors;
    };


    const formik = useFormik({
        initialValues: {
            title: "",
            body: "",
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            dispatch(addPost(values))
                .then(() => {
                    toast.success("Post added successfully");
                    resetForm(); 
                })
                .catch(() => {
                    toast.error("Failed to add post");
                });
        },
    });

    return (
        <div className="add-post-form">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        name="title"
                        className={`form-control ${formik.touched.title && formik.errors.title ? "is-invalid" : ""
                            }`}
                        placeholder="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <div className="invalid-feedback">{formik.errors.title}</div>
                    ) : null}
                </div>


                <div className="form-group mb-3">
                    <textarea
                        name="body"
                        className={`form-control ${formik.touched.body && formik.errors.body ? "is-invalid" : ""
                            }`}
                        placeholder="Body"
                        rows="4"
                        value={formik.values.body}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.body && formik.errors.body ? (
                        <div className="invalid-feedback">{formik.errors.body}</div>
                    ) : null}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-success">
                    <FontAwesomeIcon icon={faPlus} /> Add Post
                </button>
            </form>
        </div>
    );
}

export default AddPost;
