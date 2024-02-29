import { refs } from "./refs";
import { createNoteMarkup } from "./createNoteMarkup";
import { localStorageApi } from "./localStorageApi";


export function renderNotes() {
    const notesArray = localStorageApi.getAllNotes();
    const markup = notesArray.map(createNoteMarkup).join("");
    refs.taskList.innerHTML = markup;
}