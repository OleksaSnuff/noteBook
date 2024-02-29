import { refs } from './refs';
import { createNoteMarkup } from './createNoteMarkup';
export function onFormSubmit(event) {
  event.preventDefault();
  const newNote = {};
  new FormData(event.currentTarget).forEach((value, key) => {
    newNote[key] = value;
  });
  console.log(newNote);

  const markup = createNoteMarkup(newNote);
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}
