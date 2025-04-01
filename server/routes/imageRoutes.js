// server/routes/imageRoutes.js
const express = require('express');
const db = require('../db');
const router = express.Router();

router.post('/saveImageDetails', (req, res) => {
    const { email, imageUrl, firestoreUrl } = req.body;
    const sql = 'INSERT INTO image_details (email, image_url, firestore_url) VALUES (?, ?, ?)';

    db.query(sql, [email, imageUrl, firestoreUrl], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to save data' });
        }
        res.status(200).json({ message: 'Image details saved successfully' });
    });
});

module.exports = router;
