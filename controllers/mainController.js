const mongoose = require('mongoose');
const db = require('../config/db');
const model = require('../models/model');

let Db = db;

const addProduct = async (req,res) => {
    try{
        const data = await model.Product.create(req.body);
        res.status(200).json({data});
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const getProducts = async (req,res) => {
    try{
        const products = await model.Product.find({});
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const getProductById = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await model.Product.findById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const updateProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await model.Product.findByIdAndUpdate(id, req.body);

        if (!product){
            return res.status(404).json({message: "Product Not Found"});
        }

        const updatedProduct = await model.Product.findById(id);

        res.status(200).json(updateProduct);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const deleteProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await model.Product.findByIdAndDelete(id);

        if (!product){
            return res.status(404).json({messagae: "Product Not Found"});
        }

        res.status(200).json({message: "Product Deleted"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
module.exports = {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
