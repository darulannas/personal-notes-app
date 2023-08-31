import React from "react";
import NotesList from "./NotesList";
import { getInitialData, showFormattedDate } from "../utils/index";
import NotesInput from "./NotesInput";
import SearchBar from "./SearchBar";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onToggleArchiveNoteHandler = this.onToggleArchiveNoteHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      searchKeyword: event.target.value,
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onToggleArchiveNoteHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      });

      return {
        notes: updatedNotes,
      };
    });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

    return (
      <div>
        <div className="note-app__header">
          <h1>Notes</h1>
          <SearchBar searchKeyword={this.state.searchKeyword} onChange={this.handleSearchChange} />
        </div>
        <div className="note-app__body">
          <NotesInput addNote={this.onAddNoteHandler} />
          <NotesList notes={filteredNotes} onDelete={this.onDeleteNoteHandler} onToggleArchive={this.onToggleArchiveNoteHandler} />
        </div>
      </div>
    );
  }
}

export default NotesApp;
