const express = require("express");

const app = express();

app.use(express.static("public"));
//----------------------------------------

app.set("view engine", "ejs");

const books = [
    { name: 'לא רציונלי לא במקרה', author: 'דן אריאלי', imgUrl: 'https://www.e-vrit.co.il/Images/Products/ebooks2/predictably_irrational_master.jpg' },
    { name: 'מהלך מוטעה', author: 'הרלן קובן', imgUrl: 'images/08fcab7a30ba4fa050cd19ec1c9f6c88.jpeg' },
    { name: 'קיצור תולדות האנושות', author: 'יובל נח הררי', imgUrl: 'images/kitzur_toldot_haenoshut_master.jpeg' },
    { name: 'ההיסטוריה של המחר', author: 'יובל נח הררי', imgUrl: 'images/כריכת_ההיסטוריה_של_המחר.jpeg' },
];

app.get("/:id?", async (req, res) => {
    const id = req.params.id
    if (id) {
        res.render("index", {books: books, selectedBook: books[id]})
    } else {
        res.render("index", { books: books, selectedBook: null });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});