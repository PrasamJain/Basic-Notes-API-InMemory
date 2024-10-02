import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import NoteDetails from "./pages/NoteDetails";
import EditForm from "./pages/EditForm";
import AboutUs from "./pages/AboutUs";
import { useState } from "react";

const initialNotes = [
];

function App() {
    const [notes, setNotes] = useState(initialNotes);

    // Function to add a new note
    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    // Function to update an existing note
    const updateNote = (updatedNote) => {
        setNotes(notes.map(note => (note._id === updatedNote._id ? updatedNote : note)));
    };

    // Function to delete a note
    const deleteNote = (id) => {
        setNotes(notes.filter(note => note._id !== id));
    };

    return (
        <>
            <Router>
                
                <Routes>
                    <Route path={"/"} element={<Home notes={notes} onDeleteNote={deleteNote} />} />
                    <Route path={"/add"} element={<AddForm onAddNote={addNote} />} />
                    <Route path={"/details/:id"} element={<NoteDetails notes={notes} onDeleteNote={deleteNote} />} />
                    <Route path={"/edit/:id"} element={<EditForm notes={notes} onUpdateNote={updateNote} />} />
                    <Route path={"/about"} element={<AboutUs />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
