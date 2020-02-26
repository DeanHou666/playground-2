class UI {
  showBook(book) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class='delete'>X</a></td>
    `
    const table = document.querySelector('.table');
    table.appendChild(tr);
  }

  showMessage(msg,className){
    const div = document.createElement('div');
    div.className=className
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('#book-form');
    const submitbtn = document.querySelector('.submitBtn')
    container.insertBefore(div,submitbtn)
    setTimeout(() => {
      document.querySelector('.alert').remove()
    }, 2000);
  }

  clearForm(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  deleteBook(target){
    target.parentElement.remove()
    this.showMessage('book delete','alert alert-warning')
  }
  
}

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn
  }
}

const ui = new UI()


document.addEventListener('DOMContentLoaded',starter);

document.querySelector('#book-form').addEventListener('submit',function(e){
  e.preventDefault();
  const title = document.querySelector('#title')
        author = document.querySelector('#author')
        isbn = document.querySelector('#isbn')


  if(title.value != '' && author.value !='' && isbn.value !=''){
    const book = new Book(title.value,author.value,isbn.value);
    ui.showBook(book)
    ui.showMessage('book added','alert alert-success')
    Store.addBook(book)

  }else{
    ui.showMessage('check input','alert alert-danger')
  }
  ui.clearForm()
})


function starter(){
  Store.getBook();
  Store.displayBook();
}


document.querySelector('.table').addEventListener('click',function deleteBook(e){
  if(e.target.classList.contains('delete')){
    ui.deleteBook(e.target.parentElement)
    Store.deleteBook(e.target.parentElement.previousElementSibling.textContent)
  }

})

class Store {
  static getBook(){
    let books;
    if(localStorage.getItem('books') === null){
      books=[];
    }else{
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBook(){
    const books = this.getBook();
    const ui = new UI();
    books.forEach(book =>{
      ui.showBook(book);
    })
  }

  static  addBook(book){
    const books = this.getBook()
    books.push(book)
    localStorage.setItem('books',JSON.stringify(books));
  }

  static deleteBook(isbn){
    let books = this.getBook();
    books.forEach((book,index) =>{
      if(isbn === book.isbn){
        books.splice(index,1)
        localStorage.setItem('books',JSON.stringify(books))
      }
    })
  }


}