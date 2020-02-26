// class UI{
//   constructor(){

//   }

//   showBook(book){
//     const tr = document.createElement('tr');
//     tr.innerHTML=`
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.isbn}</td>
//     <td><a href="#" class='delete'>X</a></td>
//     `

//     const container = document.querySelector('.table');
//     container.appendChild(tr)
//   }

//   showMessage(msg,className){
//     const div = document.createElement('div');
//     div.className= className;
//     div.innerHTML=`<p>${msg}</p>`

//     const container = document.querySelector('#book-form');
//     const btn = document.querySelector('.submitBtn');
//     container.insertBefore(div,btn)
//     setTimeout(() => {
//       this.clearAlert()
//     }, 2000);
    
//   }

//   clearAlert(){
//     const alert = document.querySelector('.alert');
//     alert.remove()
//   }
// }




// class Book{
//   constructor(title,author,isbn){
//     this.title=title;
//     this.author=author;
//     this.isbn=isbn;
//   }

// }



// const ui = new UI()

// document.querySelector('#book-form').addEventListener('submit',addBook);
// document.querySelector('.table').addEventListener('click',deleteBook)


// function addBook(e){
  
//   const title= document.querySelector('#title').value
//   const author= document.querySelector('#author').value
//   const isbn= document.querySelector('#isbn').value

//   const book = new Book(title,author,isbn)
//   ui.showBook(book)
//   ui.showMessage('book is added','alert alert-success')
//   e.preventDefault();
// }

// function deleteBook(e){
//   if(e.target.classList.contains('delete')){
//     e.target.parentElement.parentElement.remove()
//     ui.showMessage('book is delete','alert alert-danger')
//   }
// }