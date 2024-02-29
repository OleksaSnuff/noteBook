export function createNoteMarkup(newNote) {
    return `<li class="task-list-item">
            <button class="task-list-item-btn" data-id="${newNote.id}">Видалити</button>
            <h3>${newNote.taskName}</h3>
            <p>${newNote.taskText}</p>
        </li>`;
}