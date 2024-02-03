export function createNoteMarkup(newNote) {
    return `<li class="task-list-item">
            <button class="task-list-item-btn">Видалити</button>
            <h3>${newNote.taskName}</h3>
            <p>${newNote.taskText}</p>
        </li>`;
}