const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback" ORDER BY "id" ASC;').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/pizza', error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    console.log(req.body); // {feeling: '10', understanding: '10', support: '10', comments: 'Comment' }
    let feedback = req.body

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
        
    console.log('Posting feedback');
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]).then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error POST /feedback', error)
        res.sendStatus(500);
    });
})

router.delete("/:id", (req, res) => {
    let id = req.params.id
    console.log(id);

    pool.query('DELETE FROM "feedback" WHERE "id"=$1 ;', [id]).then((results) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
    })
    
})


module.exports = router;


