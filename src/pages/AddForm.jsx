import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../components/Head";

export default function AddForm({ onAddNote }) {
    const [note, setNote] = useState({
        title: "",
        details: "",
    });

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value });
    };

    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        onAddNote({ ...note, _id: Date.now().toString() }); // Use Date.now() for unique ID
        navigate('/');
        Swal.fire({
            title: 'Your note has been added successfully!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    };

    return (
        <div>
            <Header />
            <h1 className="headline">
                Add <span>Note</span>
            </h1>
            <form className="note-form" onSubmit={submitHandler}>
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    onChange={changeHandler}
                    placeholder="Title of Note ..."
                    required
                />
                <textarea
                    name="details"
                    rows="5"
                    value={note.details}
                    onChange={changeHandler}
                    placeholder="Describe Your Note ..."
                    required
                ></textarea>
                <button type="submit">Save Note</button>
            </form>
        </div>
    );
}
