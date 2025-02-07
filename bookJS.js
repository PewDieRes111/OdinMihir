const arrayOfBooks =[];

function book (title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    }

const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const isRead = document.getElementById("read");
const displayInfo = document.getElementById("display");

document.getElementById("clear").onclick = function(){
    arrayOfBooks.length=0;
    display();
};

document.getElementById("read").onclick = function(){
    for(let index=0; index<arrayOfBooks.length; index++){
        arrayOfBooks[i][3] != read;
        }
};

document.getElementById("addBook").onclick = function(){
    const titleOfBook = title.value;
    const authorOfBook = author.value;
    const pagesOfBook = pages.value;
    const readTheBook = isRead.value;
    const newBook=new book (titleOfBook,authorOfBook,pagesOfBook,readTheBook);
    arrayOfBooks.push(newBook(title,author,pages,read));
    display();
};

function display() {
    for (let index = 0; index < arrayOfBooks.length; index++) {
        displayInfo = displayInfo + arrayOfBooks[index];
        displayInfo.value =displayInfo;
    }
}
