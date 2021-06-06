const addBook = document.querySelector("#add-book");
const tableBody = document.querySelector("#tbody");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookStatus = document.querySelector("#status");

let myLibrary = [];
let serialNum = 1;
class Book {
  constructor(detail){
  this.serial = detail.serial;
  this.title = detail.title;
  this.author = detail.author;
  this.pages = detail.pages;
  this.status = detail.status;
  }
}

function render() {
  const bookEl = document.createElement("tr");
  myLibrary.forEach((book) => {
    console.log(book);
    bookEl.innerHTML = `
    <td id="">${book.serial}</td>
    <td id="title">${book.title}</td>
    <td id="author">${book.author}</td>
    <td id="linkDom">${book.pages} </td>
    <td class"btn-status" data.choice>${book.status}</td>
    <td> <button id="delete"> X </button> </td>
`;
    tableBody.appendChild(bookEl);
  });
}
function addBookToLibrary() {
  const newBook = new Book({
    serial: serialNum++,
    title: bookTitle.value,
    author: bookAuthor.value,
    pages: bookPages.value,
    status: bookStatus.value,
  });
  console.log(newBook);
  myLibrary.push(newBook);
}

addBook.addEventListener("click", function () {
  if (
    bookTitle.value === "" ||
    bookAuthor.value === "" ||
    bookPages.value === "" ||
    bookStatus.value === ""
  ) {
    alert("Fill with correct information!");
  } else {
    addBookToLibrary();
    console.log(myLibrary);
    clearInput();
    render();
  }
});

function clearInput() {
  document.querySelector("#book-title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#status").value = "";
}
tableBody.addEventListener("click", (event) => {
  if (event.target.getAttribute("id").includes("delete")) {
    event.target.parentElement.parentElement.remove();
    console.log(--serialNum);
  } else {
    return;
  }
});
