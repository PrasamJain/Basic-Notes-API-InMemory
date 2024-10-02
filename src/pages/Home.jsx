// Home.jsx
import React, { useState } from "react";
import AddNote from "../components/AddNote";
import NoteCard from "../components/NoteCard";
import Header from "../components/Head";

export default function Home({ notes, onDeleteNote }) {
    const msgStyle = {
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: "50vh",
        color: "#aaa",
        letterSpacing: "1px",
        fontSize: "1.3em",
    };

    const [filteredNotes, setFilteredNotes] = useState(notes);

    const handleSearch = (query) => {
        const lowercasedQuery = query.toLowerCase();
        const filtered = notes.filter((note) => {
            // Split title and details into words
            const titleWords = note.title.toLowerCase().split(' ');
            const detailWords = note.details.toLowerCase().split(' ');
    
            // Check if any word in the title or details starts with the query
            return titleWords.some(word => word.startsWith(lowercasedQuery)) ||
                   detailWords.some(word => word.startsWith(lowercasedQuery));
        });
        setFilteredNotes(filtered);
    };
    

    return (
        <div>
            <Header onSearch={handleSearch} />
            <h1 className="headline">
                Save Your <span>Notes</span> Here
            </h1>

            <div className="cards">
                {filteredNotes && filteredNotes.length > 0 ? (
                    filteredNotes.map((note) => (
                        <NoteCard key={note._id} note={note} onDeleteNote={onDeleteNote} />
                    ))
                ) : (
                    <p style={msgStyle}>No Notes To Show</p>
                )}
            </div>
            <AddNote />
        </div>
    );
}
