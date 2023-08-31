import React from "react";

function ArchiveButton({ archived, onToggleArchive }) {
  return (
    <button className="note-item__archive-button" onClick={onToggleArchive}>
      {archived ? "Keluar dari Arsip" : "Arsipkan"}
    </button>
  );
}

export default ArchiveButton;
