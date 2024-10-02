import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Head";

export default function DetailCard({ note, onDeleteNote }) {
    const btnStyle = {
        padding: "0.5em 1em",
        fontSize: "1.1em",
        letterSpacing: "1px",
        background: "linear-gradient(#0004ec, #000000)",
        color: "#ffffff",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        textDecoration: "none",
    };
    
    const navigate = useNavigate();
    
    const deleteNote = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                onDeleteNote(note._id); // Call the delete function passed from parent
                navigate("/");
                Swal.fire("Deleted!", "Your Note has been deleted.", "success");
            }
        });
    };

    return (
        <div>
            <Header />
            <div className="note-details">
                <h1 className="title">{note.title}</h1>
                <p className="details">{note.details}</p>
                <div className="action">
                    <Link style={btnStyle} to={`/edit/${note._id}`}>
                        Edit
                    </Link>
                    <button style={btnStyle} onClick={deleteNote}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
