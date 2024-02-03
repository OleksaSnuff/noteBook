const LOCAL_STORAGE_KEY = "notes";

function addNote(newNote) {
    const notesArray = getAllNotes();
    notesArray.push(newNote);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notesArray));
}

function getAllNotes() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export const localStorageApi = {
    addNote,
    getAllNotes,
};
