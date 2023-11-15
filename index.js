let currentBook;

bookArray = ["OL26832992M", "OL25536640M", "OL1736028M", "OL7408140M", "OL34017486M", "OL34878707M"];
authorArray = ["OL6839743A", "OL7031499A", "OL398460A", "OL2670651A", "OL1396390A", "OL318513A"];

// let currentBook;

document.addEventListener('DOMContentLoaded', () => {

    for (i=0; i < bookArray.length; i++){
        let book = bookArray[i];
        let author = authorArray[i];
        fetchBooks(book, author);
    }
})



function fetchBooks(book, author) {
    fetch(`https://openlibrary.org/books/${book}.json`)
        .then((r) => r.json())
        .then((book) => {
            fetch(`https://openlibrary.org/authors/${author}.json`)
                .then((r) => r.json())
                .then((authors) => {
                    createNav(book, authors);
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
        addBookToMain(book, authors, bookNavImg.src)

    })

    addBookToMain(book, authors, bookNavImg.src);
}

function popOnHover(image) {
    image.style.height = "230px";
}

function popBackIn(image) {
    image.style.height = "200px";
}


//Click Event Listener - Clicked Book From Nav --> Shows up in main
function addBookToMain(book, authors, bookNavImg) {



    let bookName = document.querySelector("#book-name");
    let bookAuthor = document.querySelector("#book-author");
    let bookImage = document.querySelector("#main-book-image");

    bookName.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${authors.name}`;
    bookImage.src = bookNavImg;

    if (book.title === "Eloquent JavaScript"){
        currentBook = 1;
    }

    console.log(currentBook);

}

//Comment Functionality - Ability to Leave A Comment on The Page
const commentForm = document.querySelector("#comment-form")
commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = event.target["comment-input"].value;
    console.log(comment);
const board = document.querySelector("#comment-board") 
const newComment = document.createElement("p");
newComment.textContent = comment;
board.append(newComment);   
console.log(currentBook);
event.target.reset();
})


//OPTIONAL FUN ANIMATION - TURN OFF BY DEFAULT

// window.addEventListener('mousemove', createBook);


// function createBook(e) {
//     let book = document.createElement('div');
//     book.textContent = '📖';
//     book.style["font-size"] = `100px`;
//     document.body.appendChild(book);

//     book.style.position = 'absolute';
//     book.style.left = e.pageX + 'px';
//     book.style.top = e.pageY + 'px';

//     let animation = book.animate([
//         { transform: 'scale(1)', opacity: 1, offset: 0 },
//         { transform: 'scale(2)', opacity: 0, offset: 1 },
//     ], {
//         duration: 500,
//         iterations: 1
//     });

//     animation.onfinish = () => {
//         document.body.removeChild(book);
//     };
// }