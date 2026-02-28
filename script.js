const books = [
  {name: "Java Programming", price: 299, img: "https://via.placeholder.com/120x160"},
  {name: "Python Basics", price: 349, img: "https://via.placeholder.com/120x160"},
  {name: "Web Development", price: 399, img: "https://via.placeholder.com/120x160"},
  {name: "C Programming", price: 199, img: "https://via.placeholder.com/120x160"}
];

const bookList = document.getElementById("bookList");

function displayBooks(data) {
  bookList.innerHTML = "";
  data.forEach(book => {
    bookList.innerHTML += `
      <div class="book">
        <img src="${book.img}">
        <h3>${book.name}</h3>
        <p>₹${book.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });
}

function searchBooks() {
  const text = document.getElementById("search").value.toLowerCase();
  const filtered = books.filter(b => b.name.toLowerCase().includes(text));
  displayBooks(filtered);
}

displayBooks(books);