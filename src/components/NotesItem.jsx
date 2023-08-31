import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NotesItem({ title, createdAt, body, id, archived, onDelete, onToggleArchive }) {
  return (
    <div className="note-item">
      <NotesItemBody title={title} createdAt={createdAt} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton archived={archived} onToggleArchive={onToggleArchive} />
      </div>
    </div>
  );
}

export default NotesItem;
