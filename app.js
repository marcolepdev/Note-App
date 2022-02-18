let userName = prompt("Hello, what\'s your name?");

let h2 = document.querySelector('.user');
h2.textContent = `Hello ${userName}!`;
let textarea = document.querySelector('#text');
let addNote = document.querySelector('#add-note');
let warnContainer = document.querySelector('.warn-container');
let noteContainer = document.querySelector('.notes-container');
let deleteAllNotes = document.querySelector('#delete-all-notes');
let closeIcon = document.querySelector('.close-icon');
let resetText = document.querySelector('#reset-text');
let defaultWarnContainer = document.querySelector('.default-warn-container');
let enlargeContainer = document.querySelector('.enlarge-container');
let bigContainer = document.querySelector('.big-container');


//warn container generated dynamically when the app opens up

let defaultWarnText = document.createElement('p');
defaultWarnText.classList.add('default-warn-text');
defaultWarnText.innerHTML = 'No notes, please create one';
defaultWarnContainer.appendChild(defaultWarnText);





function addNewNote() {
        //get day of today

        var today= new Date();
        var date = today.getDate();
        var month = today.getMonth()+1;
        var year = today.getFullYear();
        var time = today.getHours();
        var minutes = today.getMinutes();
        minutes = minutes > 9 ? minutes : '0' + minutes;
        
        
        
        //create elements
        
        warnContainer.style.visibility = 'hidden';
        textarea.style.borderColor = 'transparent';
        var note = document.createElement('div');
        var dayAndTimeContainer = document.createElement('div');
        var dayContainer = document.createElement('div');
        var timeContainer = document.createElement('div');
        var timeContainer = document.createElement('div');
        var textContainer = document.createElement('div');
        var paragraph = document.createElement('p');
        var enlargeContainer = document.createElement('div');
        var closeIcon = document.createElement('button');
        
        
        //add class
        note.classList.add('note');
        note.style.visibility = 'visible';
        dayAndTimeContainer.classList.add('day-and-time');
        dayAndTimeContainer.style.visibility = 'visible';
        dayContainer.classList.add('day');
        timeContainer.classList.add('time');
        dayContainer.innerHTML = "Date: " + date + "/" + month + "/" + year;
        timeContainer.innerHTML = "Time: " + time + ":" + minutes;
        closeIcon.innerHTML = '<i class="fas fa-times fa-1x"></i>';
        closeIcon.classList.add('close-icon');
        closeIcon.style.visibility ='visible';
        timeContainer.classList.add('time');
        textContainer.classList.add('text-container');
        paragraph.classList.add('note-paragraph');
        paragraph.innerHTML = textarea.value;
        enlargeContainer.classList.add('enlarge-container');
        enlargeContainer.innerHTML = '<i class="fas fa-expand-alt"></i>';
        
        
        
        
        //append element
        noteContainer.appendChild(note);
        note.appendChild(dayAndTimeContainer);
        note.appendChild(textContainer);
        dayAndTimeContainer.appendChild(dayContainer);
        dayAndTimeContainer.appendChild(timeContainer);
        dayAndTimeContainer.appendChild(closeIcon);
        textContainer.appendChild(paragraph);
        note.appendChild(enlargeContainer);
        
        
        
        
        
        
        //setting textarea to empty string
        textarea.value ="";
        
        
        
        
        
        
                closeIcon.onclick = () => {

                        if (noteContainer.children.length > 0){
                            noteContainer.removeChild(note);

                            if (noteContainer.children.length === 0){
                                defaultWarnContainer.style.visibility = 'visible';

                            }
                            
                            }
 }


 enlargeContainer.onclick  = ()=>{
    let modalWindow = document.createElement('div');
    let modalContent = document.createElement('div');
    let modalTitle = document.createElement('div');
    let modalText = document.createElement('div');
    let closeWindow = document.createElement('button');


    





    modalWindow.classList.add('modal-window');


    modalContent.classList.add('modal-content');
    modalTitle.classList.add('modal-title');
    modalText.classList.add('inner-text');
    closeWindow.classList.add('close-window');
    
    modalWindow.style.display = 'block';
    modalContent.style.display = "block";
    closeWindow.innerHTML ="CLOSE";

    modalTitle.innerHTML= `Created: ${date}/${month}/${year} &nbsp; Time: ${time}:${minutes}`;
    bigContainer.appendChild(modalWindow);
    modalWindow.appendChild(modalContent);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalText);
    modalText.innerHTML=paragraph.innerHTML;
    modalContent.appendChild(closeWindow);



   
    if(paragraph.innerHTML.length <= "149"){
        modalText.style.height = "150px";
        modalContent.style.height= "330px";
        console.log('149');

    } else if(paragraph.innerHTML.length >= "150"){
        modalText.style.height = "350px";
        modalContent.style.height= "400px";
        console.log('200');
    }



               closeWindow.addEventListener('click', ()=>{
                   bigContainer.removeChild(modalWindow);
               })

 }
 
 

}

addNote.addEventListener('click', () => {

//if textarea is empty
    if (textarea.value === ""){

        var warnParagraph = document.createElement('p');

        //add style

        warnParagraph.classList.add('warn-paragraph');
        warnParagraph.innerHTML = "Please type something"
        warnContainer.style.visibility = 'visible';
        textarea.style.border = '1px solid red';

        //appen items
        warnContainer.appendChild(warnParagraph);

        //if textarea is not empty
        
            } else if (noteContainer.children.length === 0 && textarea !== ""){
                defaultWarnContainer.style.visibility = 'hidden';
                addNewNote();
            } else if(noteContainer.children.length > 0 && textarea !== ""){
                addNewNote();
            }
})


deleteAllNotes.addEventListener('click', () => {
    while(noteContainer.firstChild){
        noteContainer.firstChild.remove();
    }
    defaultWarnContainer.style.visibility = 'visible';

})


resetText.addEventListener('click', ()=>{
textarea.value = "";
textarea.style.border = '1px solid transparent';
})