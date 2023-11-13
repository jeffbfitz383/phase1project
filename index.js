//NOTE - None of the below will work with the current HTML file but can be restuctured once html skeleton is complete

fetch("https://openlibrary.org/books/OL26832992M.json")
  .then((r)=>r.json())
  .then((book)=> {

  fetch("https://openlibrary.org/authors/OL6839743A.json")
  .then((r)=>r.json())
  .then((authors)=> {
    addBookDetails(book, authors)
  })
  }
  )

//Testing purpose only ⬇️
function addBookDetails(book, authors){
    const bookImg = document.querySelector("#book-img")
    const bookTitle = document.querySelector("#book-title")
    const bookSubTitle = document.querySelector("#book-subtitle")
    const bookAuthor = document.querySelector("#book-author")
    const bookDescription = document.querySelector("#book-description")

    let coverSlug = book.covers

    bookImg.src = (`https://covers.openlibrary.org/b/id/${coverSlug}.jpg`)
    bookTitle.textContent = book.title;
    bookSubTitle.textContent = book.subtitle;
    bookAuthor.textContent = authors.name;
    bookDescription.textContent = book.description;
}


//Hover mouseover event - expand size of book on hover 

const bookNavImg = bookNavImg;

bookNavImg.addEventListener("mouseover", function () {
    //increase the size of bookNavImg 
})


//Click event - add to main 

const something = something;

something.addEventListener("click", function() {
    addBookToMain(book)
})

//Submit event - add comments 

const form = form;

form.addEventListener("submit", function(e){
    e.preventDefault();

    e.target.something.value; 


})