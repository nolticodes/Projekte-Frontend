
let notes = [];

let trashNotes = []

// START
function init() {
    getNotesFromLocalStorage();
    renderNotes();
    getTrashNotesFromLocalStorage();
    renderTrashNotes();
}


// render Notes to HTML
// 1. NOTES
function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);  
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]} <button onclick="moveToTrash(${indexNote})">Papierkorb</button> </p> `
}

// 2. TRASH NOTES
function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);  
    }
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${trashNotes[indexTrashNote]} <button onclick="deleteNote(${indexTrashNote})">Löschen</button> </p> `
}


// Add Notes
function addNote() {
    let noteInputRef = document.getElementById("note_input");

    if(noteInputRef.value != ""){
        notes.push(noteInputRef.value);
    }
    saveNotesToLocalStorage();
    renderNotes();
    noteInputRef.value = ""
}


// NOTE TO ARCHIVE
function moveToTrash(indexNote) {
   let trashNote = notes.splice(indexNote, 1);
   trashNotes.push(trashNote);
   saveNotesToLocalStorage();
   saveTrashNotesToLocalStorage();
   renderNotes();
   renderTrashNotes();
}


// Delete Notes
function deleteNote(indexNote) {
   let trashNote = trashNotes.splice(indexNote, 1);
   renderNotes();
   renderTrashNotes();
}


// SAVE NOTES 
// 1. NOTES
function saveNotesToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes))
}

function getNotesFromLocalStorage() {
    let myLocalStorage = JSON.parse(localStorage.getItem("notes"));
    if(myLocalStorage === null){
        notes 
    }
    else {
        notes = myLocalStorage;
    }
} 

let myLocalStorage = JSON.parse(localStorage.getItem("notes"));
let myLocalTrashStorage = JSON.parse(localStorage.getItem("trashNotes"));



// 2. TRASH NOTES
 function saveTrashNotesToLocalStorage() {
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes))
}

function getTrashNotesFromLocalStorage() {
    if(myLocalTrashStorage === null){
        trashNotes 
    }
    else {
        trashNotes = myLocalTrashStorage;
    }
} 