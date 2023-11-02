const express = require('express')
const taskScm = require('../model/taskSchema')
const asyncWrapper = require('../middleware/wrapper')


const getAllTask = asyncWrapper(async (req, res) => {
        const task = await taskScm.find({})
        res.status(200).json(task)
    
})

const addTask = asyncWrapper(async (req, res) => {
        const task = await taskScm.create(req.body)
        res.status(201).json({"msg":"Success", "result":task})

})

const singleTask = asyncWrapper(async (req, res) => {
        const name = req.params.name
        const task = await taskScm.findOne({name:name})
        if(!task){
            return res.status(200).json({"msg":"no task found"})
        }
        res.status(200).json(task)

})

const updateTask = asyncWrapper(async (req, res) => {
        const task = await taskScm.findOneAndUpdate({name:req.params.name}, req.body, {
            new:true,
            runValidators:true
        })
        res.status(201).json(task)

})

const deleteTask = asyncWrapper(async (req, res) => {
        const task = await taskScm.findOneAndDelete(req.params)
        res.status(201).json({status:"success", task})

})
module.exports = {
    getAllTask,
    addTask,
    singleTask,
    updateTask,
    deleteTask
}