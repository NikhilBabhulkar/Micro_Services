require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

require('../DB/db');

const Customer = require('./Customer');

const app = express();
const port = 5000;

app.use(express.json());

app.post('/customer', async (req, res) => {
    try {
        const newCustomer = new Customer({ ...req.body });
        await newCustomer.save();
        res.status(201).send('New Customer created successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error!');
    }
});

app.get('/customers', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error!');
    }
});

app.get('/customer/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).send('Customer not found');
        }
        res.json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error!');
    }
});

app.delete('/customer/:id', async (req, res) => {
    try {
        const customer = await Customer.findByIdAndRemove(req.params.id);
        if (!customer) {
            return res.status(404).send('Customer not found');
        }
        res.json('Customer deleted successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error!');
    }
});

app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`Up and Running on port ${port} - This is Customer service`);
});
