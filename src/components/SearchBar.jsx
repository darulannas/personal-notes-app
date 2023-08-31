import React from "react";

function SearchBar({ searchKeyword, onChange }) {
  return <input type="text" className="note-search" placeholder="Cari catatan..." value={searchKeyword} onChange={onChange} />;
}

export default SearchBar;
