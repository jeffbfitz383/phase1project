let currentBook;

document.addEventListener('DOMContentLoaded', () => {

    fetchEloquent();
    fetchCracking();
    fetchCodeComplete();
    fetchPragmatic();
    fetchWorkingEffectively();
    fetchCleanCode();
})

//Fetch Eloquent JavaScript Book
function fetchEloquent() {
    fetch("https://openlibrary.org/books/OL26832992M.json")
        .then((r) => r.json())
        .then((book) => {

            fetch("https://openlibrary.org/authors/OL6839743A.json")
                .then((r) => r.json())
                .then((authors) => {
                    createNav(book, authors),
                   // popOnHover(),
                    attachForm()
                })
        }
        )
}

// Fetch Cracking the Code Interview
function fetchCracking() {
    fetch("https://openlibrary.org/books/OL25536640M.json")
        .then((r) => r.json())
        .then((book) => {

            fetch("https://openlibrary.org/authors/OL7031499A.json")
                .then((r) => r.json())
                .then((authors) => {
                    createNav(book, authors),
                        popOnHover()
                    attachForm()
                })
        }
        )
}

// Fetch Code Complete
function fetchCodeComplete() {
    fetch("https://openlibrary.org/books/OL1736028M.json")
        .then((r) => r.json())
        .then((book) => {

            fetch("https://openlibrary.org/authors/OL398460A.json")
                .then((r) => r.json())
                .then((authors) => {
                    createNav(book, authors),
                        popOnHover()
                })
        }
        )
}

//Fetch Pragmatic Programmer
function fetchPragmatic() {
    fetch("https://openlibrary.org/books/OL7408140M.json")
        .then((r) => r.json())
        .then((book) => {

            fetch("https://openlibrary.org/authors/OL2670651A.json")
                .then((r) => r.json())
                .then((authors) => {
                    createNav(book, authors),
                        popOnHover()
                })
        }
        )
}

//Fetch Working Effectively With Legacy Code
function fetchWorkingEffectively() {
    fetch("https://openlibrary.org/books/OL34017486M.json")
        .then((r) => r.json())
        .then((book) => {

            fetch("https://openlibrary.org/authors/OL1396390A.json")
                .then((r) => r.json())
                .then((authors) => {
                    createNav(book, authors),
                        popOnHover()
                })
        }
        )
}

//Fetch Clean Code
function fetchCleanCode() {
    fetch("https://openlibrary.org/books/OL34878707M.json")
        .then((r) => r.json())
        .then((book) => {

            fetch("https://openlibrary.org/authors/OL318513A.json")
                .then((r) => r.json())
                .then((authors) => {
                    createNav(book, authors),
                        popOnHover()
                })
        }
        )
}

function createNav(book, authors) {
    const bookNav = document.querySelector("#books");

    const bookNavCard = document.createElement("div")
    bookNavCard.classList.add("book-nav-card");

    const bookNavImg = document.createElement("img");
    const bookNavTitle = document.createElement("h6");
    const bookNavAuthor = document.createElement("p");


    //IMPORTANT - We need to store all of these inside a div card 
    bookNav.appendChild(bookNavCard);
    bookNavCard.append(bookNavImg);
    bookNavCard.append(bookNavTitle);
    bookNavCard.append(bookNavAuthor);

    let coverSlug = book.covers;

    bookNavImg.src = (`https://covers.openlibrary.org/b/id/${coverSlug}.jpg`);
    bookNavTitle.textContent = book.title;
    bookNavAuthor.textContent = authors.name;

    bookNavImg.id = 'ImageID';



    bookNavImg.addEventListener(('mouseover'), () => {
        popOnHover(bookNavImg)



    })
    bookNavImg.addEventListener(('mouseout'), () => {
        popBackIn(bookNavImg)


    })

    bookNavImg.addEventListener(('click'), () => {
        clickOnBook(book, authors, bookNavImg.src)


    })
}

function popOnHover(image) {
    image.style.height = "230px";


}

function popBackIn(image) {
    image.style.height = "200px";
}

function clickOnBook(book, authors, bookNavImg) {

    currentBook = book;

    console.log(currentBook);



    console.log("clicked");
    let bookName = document.querySelector("#book-name");
    let bookAuthor = document.querySelector("#book-author")
    let bookImage = document.querySelector("#main-book-image")

    bookName.textContent = book.title;
    bookAuthor.textContent = authors.name;
    bookImage.src = bookNavImg;

}

function attachForm() {
    
    const commentForm = document.querySelector("#comment-form")
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const comment = event.target["comment-input"].value;
        console.log(comment);
    const board = document.querySelector("#comment-board") 
    const newComment = document.createElement("p");
    newComment.textContent = comment;
    board.append(newComment);   
    })

}

console.log("hello");

//NOTE - None of the below will work with the current HTML file but can be restuctured once html skeleton is complete



//Hover mouseover event - expand size of book on hover 

// const bookNavImg = bookNavImg;

// bookNavImg.addEventListener("mouseover", function () {
//     //increase the size of bookNavImg 
// })


// //Click event - add to main 

// const something = something;

// something.addEventListener("click", function() {
//     addBookToMain(book)
// })

// //Submit event - add comments 

// const form = form;

// form.addEventListener("submit", function(e){
//     e.preventDefault();

//     e.target.something.value; 


// })