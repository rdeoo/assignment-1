const darkThemeButton = document.querySelector(".darktheme");
const leftside = document.querySelector(".take-notes");
const rideside = document.querySelector(".divclass");
const h1text = document.querySelector(".mainh1");
const footertext = document.querySelector(".pfooter");
const aboutDocsText = document.querySelector(".aboutdoc");
const textarea = document.querySelector("textarea");
const h2text = document.querySelector("h2");
const ulText = document.querySelector("ul");
// const leftside = document.querySelector()

function DarkLightToggle()
{
    leftside.classList.toggle("asidecolor");
    rideside.classList.toggle("bodycolor");
    h1text.classList.toggle("bodytext");
    footertext.classList.toggle("bodytext");
    aboutDocsText.classList.toggle("bodytext");
    textarea.classList.toggle("textareaColor");
    textarea.classList.toggle("asidetext");
    h2text.classList.toggle("asidetext");
    ulText.classList.toggle("asidetext");
    

}
darkThemeButton.addEventListener("click", DarkLightToggle);

function changeText()
{
    // if it says click me change to clicekd
    // else change it to click me
if(darkThemeButton.textContent === "Dark Theme"){darkThemeButton.textContent = "Light Theme"}
else{darkThemeButton.textContent = "Dark Theme"}
}
darkThemeButton.addEventListener("click", changeText);

const savebutton = document.querySelector(".save")
const cancelbutton = document.querySelector(".cancel")

function cancelButtonFunction()
{
    textarea.classList.add("cancelButtonFunc")
    savebutton.classList.add("cancelButtonFunc")
    cancelbutton.classList.add("cancelButtonFunc")
}
cancelbutton.addEventListener("click", cancelButtonFunction)

const newNoteButton = document.querySelector(".newnote")

function newNoteButtonFunction()
{
    if(textarea.classList.contains("cancelButtonFunc")){
        textarea.classList.remove("cancelButtonFunc")
        savebutton.classList.remove("cancelButtonFunc")
        cancelbutton.classList.remove("cancelButtonFunc")
    }else{textarea.value = ""}
}

newNoteButton.addEventListener("click", newNoteButtonFunction)

const notesArray = [
    { title: "note 1", body: "this is my first note" },
    { title: "note 2", body: "this is my second note" },
  ];

function SaveButtonFunction()
{
    const nTitle = prompt("Enter title for this note")
    const nBody = textarea.value
    notesArray.push({title: nTitle, body: nBody});
    const newLI = document.createElement("li");
    newLI.textContent = nTitle;
    ulText.appendChild(newLI)
}
savebutton.addEventListener("click", SaveButtonFunction)
