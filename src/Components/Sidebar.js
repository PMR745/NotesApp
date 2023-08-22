import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <div className="logo">PMR Notes</div>
                <button onClick={onAddNote}>
                    <FontAwesomeIcon icon={faCirclePlus} className="icon" />
                    <div className="extra">Add Note</div>
                </button>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map((note) => (

                    <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>
                                <FontAwesomeIcon icon={faTrashCan} className="icon" />
                                {/* <div className="extra">Delete</div> */}
                            </button>
                        </div>
                        <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                        <small className="note-meta">
                            Last Modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;