import React from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";

export default function NoteDetails({ notes, onDeleteNote }) {
    const { id } = useParams();
    const note = notes.find(n => n._id === id) || { title: "", details: "" };

    return (
        <div className="container">
            <DetailCard note={note} onDeleteNote={onDeleteNote} />
        </div>
    );
}
