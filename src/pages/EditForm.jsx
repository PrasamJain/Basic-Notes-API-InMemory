import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Header from '../components/Head';

export default function EditForm({ notes, onUpdateNote }) {
    const { id } = useParams();
    const [note, setNote] = useState({
        title: '',
        details: '',
    });

    useEffect(() => {
        const foundNote = notes.find(n => n._id === id);
        if (foundNote) {
            setNote(foundNote);
        }
    }, [id, notes]);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value });
    };

    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        onUpdateNote(note);
        navigate(`/details/${id}`);
        Swal.fire('Your note has been updated successfully!');
    };

    return (
        <div>
            <Header />
            <h1 className="headline">
                Edit <span>Note</span>
            </h1>
            <form className="note-form" onSubmit={submitHandler}>
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    onChange={changeHandler}
                    placeholder="Title of Note ..."
                />
                <textarea
                    name="details"
                    rows="5"
                    value={note.details}
                    onChange={changeHandler}
                    placeholder="Describe Your Note ..."
                ></textarea>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}
