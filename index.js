const express = require('express')
const mysql = require('mysql')
const app = express()
const expressPort = 3000;
//const sqlPort = 3306

app.use(express.json())

// DB //
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'RestApi'

})

db.connect((err) => {
    if(err) {
        console.log ('DB Pas CO !!');
    } else {
        console.log ('C GOOD');
    } 
});

//app.listen(sqlPort, () => {
//    console.log('mysql Port:', sqlPort);
//});

app.listen(expressPort, () => {
    console.log('Port :', expressPort);

});


//  items //
app.get('/items', (req, res) => {
    db.query('SELECT * FROM items', (err, results) => {
        if(err) {
            res.status(500).send("Erreur serveur")
        } else {
            res.json(results)
        }
    })
})


// crée item
app.post('/items', (req, res) => {
    const {name, price, description, id_category} = req.body
    
    db.query('INSERT INTO items (name, price, description) VALUES (?, ?, ?)', 
        [name, price, description],
        (err, result) => {
            if(err) {
                console.log("Erreur 1:", err)
                res.status(500).send("Erreur serveur")
                return
            }
            
            const items_id = result.insertId
            
            // control //
            console.log("ID Valide =","item id =",items_id,"category id =", id_category)
            
            // Part2 // 
            db.query('INSERT INTO items_categories (item_id, category_id) VALUES (?, ?)',
                [items_id, id_category],
                (err2, result2) => {
                    if(err2) {
                        console.log("Erreur N°2:", err2)
                        res.status(500).send("Erreur Part2")
                        return
                    }
                    res.status(201).json({
                        id: items_id,
                        name,
                        price,
                        description,
                        id_category   
                    })
                }
            )
    })
})
    


// 1 item //
app.get('/items/:id', (req, res) => {
    db.query('SELECT * FROM items WHERE id = ?',
        [req.params.id],
        (err, results) => {
            if(err) {
                res.status(500).send("Erreur serveur")
            } else if(results.length === 0) {
                res.status(404).send("Item non trouvé")
            } else {
                res.json(results[0])
            }
    })
})


// modif item //
app.put('/items/:id', (req, res) => {
    const {name, price} = req.body
    db.query('UPDATE items SET name = ?, price = ? WHERE id = ?',
        [name, price, req.params.id],
        (err, result) => {
            if(err) {
                res.status(500).send("Erreur serveur")
            } else {
                res.json({id: req.params.id, name, price})
            }
    })
})


// delete item //
app.delete('/items/:id', (req, res) => {
    db.query('DELETE FROM items WHERE id = ?',
        [req.params.id],
        (err, result) => {
            if(err) {
                res.status(500).send("Erreur serveur")
            } else {
                res.json({message: "Item supprimé"})
            }
    })
})

