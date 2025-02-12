const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newNote = new Note({ title, description });
        await newNote.save();

        return res.status(200).json({ success: true, message: "Note Created Successfully" });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ success: false, message: "Error in Adding Note" });
    }
});

router.get('/', async (req, res) => {
    try{
        const notes = await Note.find()
        return res.status(200).json({success: true, notes})
    }catch(err){
        return res.status(500).json({success: false, message: "can't retrive Notes"})
    }
})

router.put("/:id", async (req, res) => {
    try{
        const {id} = req.params
        const updateNote = await Note.findByIdAndUpdate(id, req.body)
        return res.status(200).json({success: true, updateNote})
    }catch(err){
        return res.status(500).json({success: false, message: "can't update Notes"})
    }
})

module.exports = router;
