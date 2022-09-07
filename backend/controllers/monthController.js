const Month = require('../models/monthModel');
const mongoose = require('mongoose');

// get all months
const getMonths = async (req, res) => {
    const months = await Month.find({}).sort({createdAt: -1})

    res.status(200).json(months)
}


// get a single month
const getMonth = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such month"})
    }

    const month = await Month.findById(id)

    if (!month) {
        return res.status(400).json({error: "No such month"})
    }

    res.status(200).json(month)
}


// create new month
const createMonth = async (req, res) => {
    const {name, year, sum, details} = req.body

    // add a document to database
    try{
        const month = await Month.create({name, year, sum, details})
        res.status(200).json(month)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete a month
const deleteMonth = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such month"})
    }

    const month = await Month.findOneAndDelete({_id: id})

    if (!month) {
        return res.status(400).json({error: "No such month"})
    }

    res.status(200).json(month)
}


// update a month
const updateMonth = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such month"})
    }

    const month = await Month.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!month) {
        return res.status(400).json({error: "No such month"})
    }

    res.status(200).json(month)
}


module.exports = {
    getMonths,
    getMonth,
    createMonth,
    deleteMonth,
    updateMonth
}