import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onToggleArchive }) {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {activeNotes.length === 0 ? (
          <p className="notes-list__empty-message">Tidak ada catatan aktif.</p>
        ) : (
          activeNotes.map((note) => <NotesItem key={note.id} id={note.id} archived={note.archived} onDelete={onDelete} onToggleArchive={() => onToggleArchive(note.id)} {...note} />)
        )}
      </div>
      <h2>Arsip</h2>
      <div className="notes-list">
        {archivedNotes.length === 0 ? (
          <p className="notes-list__empty-message">Tidak ada catatan diarsipkan.</p>
        ) : (
          archivedNotes.map((note) => <NotesItem key={note.id} id={note.id} archived={note.archived} onDelete={onDelete} onToggleArchive={() => onToggleArchive(note.id)} {...note} />)
        )}
      </div>
    </div>
  );
}

export default NotesList;
