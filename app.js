const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Pool = require('./util/database');
const { error } = require('console');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine','hbs');

// app.get('/', (req, res) =>{
//     res.render(path.join(__dirname, './views', 'index.hbs'));
// })


app.post('/', (req, res, )=>{
    var name = req.body.name;
    var email = req.body.email;
    var phoneno= req.body.phone;
    var address = req.body.address;

    Pool.getConnection((error, connection) => {
        if (error) {
            throw error;
        }

        const sql = 'INSERT INTO booking (name, email, phoneno, address) VALUES (?, ?, ?, ?)';
        connection.query(sql, [name, email, phoneno, address], (error, result) => {
           // connection.release(); // Release the connection
            if (error) {
                throw error;
            }
            res.redirect('/');
        });
    });
});

app.get('/', (req, res) =>{
    Pool.getConnection((error, connection) => {
      if (error) throw error;
  
      const sql = 'SELECT * FROM booking';
      connection.query(sql, (err, rows) => {
        //connection.release(); // Release the connection
        if (err) {
          throw err;
        }
        if(rows.length > 0){
            console.log('fetched data: ');
            rows.forEach((row) =>{
                console.log(row);
            })
           
        }
        res.render( 'index', { data: rows }); 
      });
    });
});

app.get('/delete-booking' , (req, res) =>{
    Pool.getConnection((error, connections) =>{
        if (error) throw error;

        const sql = 'DELETE from booking where id=?';
        var id = req.query.id;
        connections.query(sql, [id], (error, rows)=>{
            if(error) throw error;
            res.redirect('/');
        })
    })
})
  
app.get('/update-booking', (req, res) => {
    Pool.getConnection((error, connection) => {
      if (error) throw error;
  
      const sql = 'SELECT * FROM booking WHERE id = ?';
      var id = req.query.id;
      connection.query(sql, [id], (error, rows) => {
        if (error) throw error;
        res.render('update', { booking: rows[0] });
      });
    });
  });
  

  app.post('/update-booking', (req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var phoneno = req.body.phone;
    var address = req.body.address;
  
    Pool.getConnection((error, connection) => {
      if (error) throw error;
  
      const sql = 'UPDATE booking SET name = ?, email = ?, phoneno = ?, address = ? WHERE id = ?';
      connection.query(sql, [name, email, phoneno, address, id], (error, result) => {
        if (error) throw error;
        res.redirect('/');
      });
    });
  });
  
  
app.listen(8080)






