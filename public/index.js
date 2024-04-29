const getBook = (i) => {
    fetch('/books/' + i).then((res) => res.json()).then(data => {
        renderBook(data);
    })
}

const renderBook = (book) => {
    const bookDetailsContainer = document.getElementsByClassName('book-details-container')[0];
    bookDetailsContainer.innerHTML = ''
    const imgElement = document.createElement('img');
    imgElement.classList.add('book-img')
    imgElement.src = book.imgUrl
    const nameContainer = document.createElement('div');
    nameContainer.innerHTML = book.name;
    const authorContainer = document.createElement('div');
    authorContainer.innerHTML = book.author;
    bookDetailsContainer.appendChild(imgElement)
    bookDetailsContainer.appendChild(nameContainer)
    bookDetailsContainer.appendChild(authorContainer)
}