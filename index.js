document.addEventListener('DOMContentLoaded', ()=>{
    
  fetchEloquent();
  fetchCracking();
  fetchCodeComplete();
  fetchPragmatic();
  fetchWorkingEffectively();
  fetchCleanCode();
  })

  //Fetch Eloquent JavaScript Book
  function fetchEloquent(){
      fetch("https://openlibrary.org/books/OL26832992M.json")
      .then((r)=>r.json())
      .then((book)=> {
    
      fetch("https://openlibrary.org/authors/OL6839743A.json")
      .then((r)=>r.json())
      .then((authors)=> {
        createNav(book, authors),
        popOnHover()
      })
      }
      )}

// Fetch Cracking the Code Interview
function fetchCracking(){
  fetch("https://openlibrary.org/books/OL25536640M.json")
  .then((r)=>r.json())
  .then((book)=> {

  fetch("https://openlibrary.org/authors/OL7031499A.json")
  .then((r)=>r.json())
  .then((authors)=> {
    createNav(book, authors),
    popOnHover()
  })
  }
  )}

  // Fetch Code Complete
function fetchCodeComplete(){
  fetch("https://openlibrary.org/books/OL1736028M.json")
  .then((r)=>r.json())
  .then((book)=> {

  fetch("https://openlibrary.org/authors/OL398460A.json")
  .then((r)=>r.json())
  .then((authors)=> {
    createNav(book, authors),
    popOnHover()
  })
  }
  )}

  //Fetch Pragmatic Programmer
  function fetchPragmatic(){
    fetch("https://openlibrary.org/books/OL7408140M.json")
    .then((r)=>r.json())
    .then((book)=> {
  
    fetch("https://openlibrary.org/authors/OL2670651A.json")
    .then((r)=>r.json())
    .then((authors)=> {
      createNav(book, authors),
      popOnHover()
    })
    }
    )}

  //Fetch Working Effectively With Legacy Code
  function fetchWorkingEffectively(){
    fetch("https://openlibrary.org/books/OL34017486M.json")
    .then((r)=>r.json())
    .then((book)=> {
  
    fetch("https://openlibrary.org/authors/OL1396390A.json")
    .then((r)=>r.json())
    .then((authors)=> {
      createNav(book, authors),
      popOnHover()
    })
    }
    )}

  //Fetch Clean Code
  function fetchCleanCode(){
    fetch("https://openlibrary.org/books/OL34878707M.json")
    .then((r)=>r.json())
    .then((book)=> {
  
    fetch("https://openlibrary.org/authors/OL318513A.json")
    .then((r)=>r.json())
    .then((authors)=> {
      createNav(book, authors),
      popOnHover()
    })
    }
    )}
    
function createNav(book, authors){
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

    bookNavImg.id ='ImageID';
    
    

    bookNavImg.addEventListener(('mouseover'), ()=>{
      popOnHover(bookNavImg)
      


})
      bookNavImg.addEventListener(('mouseout'), ()=>{
      popBackIn(bookNavImg)


})

bookNavImg.addEventListener(('click'), ()=>{
  clickOnBook(bookNavImg)


})
}

function popOnHover(image){
  image.style.height = "230px";
  
  
}

function popBackIn(image){
      image.style.height = "200px";
}

  function clickOnBook(book, authors){
    console.log("clicked");
    let  bookName = document.querySelector("#book-name");
    bookName.textContent = book.title;


  }

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