const express = require("express")
const Note = require("../models/Note")

const router = express.Router()

router.post('/add', async (req, res) => {
    try{
        const {title, description} = req.body;
        const newNote = new Note({
            title,
            description
        });
        await newNote.save()
        return res
        .status(200)
        .json({success: true, message: "Note Created Successfully"})
    } catch(err){
        console.log(err.message);
        return res
        .status(500)
        .json({success: true, message: "Error in Adding Note"})
    }
})

// export default router;
module.exports = router;