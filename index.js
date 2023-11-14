bookArray = ["OL26832992M", "OL25536640M", "OL1736028M", "OL7408140M", "OL34017486M", "OL34878707M"];
authorArray = ["OL6839743A", "OL7031499A", "OL398460A", "OL2670651A", "OL1396390A", "OL318513A"];

// let currentBook;

document.addEventListener('DOMContentLoaded', () => {

    for (i=0; i < bookArray.length; i++){
        let book = bookArray[i];
        let author = authorArray[i];
        fetchBooks(book, author)
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

    let bookName = document.querySelector("#book-name");
    let bookAuthor = document.querySelector("#book-author")
    let bookImage = document.querySelector("#main-book-image")

    bookName.textContent = book.title;
    bookAuthor.textContent = authors.name;
    bookImage.src = bookNavImg;

}

    //Ability to add comments anywhere
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

