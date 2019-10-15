import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

const notes = [
    {
        title: 'Wash dishes',
        body: 'Remember to was dishes'
    },

    {
        title: 'Clean bathroom',
        body: 'Rembmer to unclog drains and clean bathtub'
    },

    {
        title: 'Pay electric bill',
        body: 'Electric bill is due'
    }
];


// Elements
const notesDiv = document.getElementById('notes');

// Components
const createBtn = document.getElementById('create-btn');
const removeBtn = document.getElementById('remove-btn');
const searchField = document.getElementById('search-field');
const filterBy = document.getElementById('filter-by');


// Filter
const filters = {
    searchNotes: ''
}

function renderNotes(notes, filters) {
    const filteredNotes = notes.filter(function (note) {        
        return note.title.toLowerCase().includes(filters.searchNotes.toLowerCase());
    });

    notesDiv.innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.className = 'note';
        noteEl.textContent = note.title;
        notesDiv.appendChild(noteEl);
    });
}

renderNotes(notes, filters);

createBtn.addEventListener('click', function() {
    const newNote = document.createElement('p');
    newNote.className = 'note';
    newNote.textContent = 'All sleep no play';
    notesDiv.appendChild(newNote);
});

removeBtn.addEventListener('click', function() {
    const noteList = document.querySelectorAll('.note');    
    noteList.forEach(function(note) {
        note.remove();
    });
});

searchField.addEventListener('input', function(e) {
    filters.searchNotes = e.target.value;
    renderNotes(notes, filters);    
});

filterBy.addEventListener('change', function(e) {
    console.log(e.target.value);
});

const user = {
    id: 1,
    name: 'Chris Redfield',
    age: 45
}

const userJSON = JSON.stringify(user);



localStorage.setItem('user1', userJSON)

const userObj = JSON.parse(localStorage.getItem('user1'))

console.log(userObj.name)