import { refs } from "./refs";
import { createNoteMarkup } from "./createNoteMarkup";
import { localStorageApi } from "./localStorageApi";
import { nanoid } from "nanoid";

export function onFormSubmit(event) {
    event.preventDefault();
    const newNote = { id: nanoid() };
    new FormData(event.currentTarget).forEach((value, key) => {
        newNote[key] = value;
        
    })
    console.log(newNote);

    localStorageApi.addNote(newNote);
    const markup = createNoteMarkup(newNote);
    refs.taskList.insertAdjacentHTML('beforeend', markup);
}
