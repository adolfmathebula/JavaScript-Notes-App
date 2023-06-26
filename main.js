var notesContainer = document.querySelector('.notes')
var createBtn = document.querySelector('.btn')
var notes = document.querySelectorAll('.input-box')

//retrieve note
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes()

// Store note to localStorage
function storeNote(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create a note Container with delete button
createBtn.addEventListener("click", ()=>{

    let inputBox = document.createElement('p');
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.innerText="Note"
    inputBox.setAttribute("contentEditable", "true");
    img.src="images/delete-icon1.png"
    img.className="delete-note"
    notesContainer.appendChild(inputBox).appendChild(img)
})

// Delete and Update Note
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        storeNote()
    }

    else if(e.target.tagName==="P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach((nt)=>{
            nt.onkeyup = function(){
                storeNote()
            }
        })
    }
})

//prevent reload on heydown
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})