export function onFormSubmit(event) {
    event.preventDefault();
    const newNote = {}
    new FormData(event.currentTarget).forEach((value, key) => {
        newNote[key] = value;
        
    })
    console.log(newNote)
}
