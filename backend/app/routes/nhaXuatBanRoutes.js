const express = require('express');
const router = express.Router();
const { NhaXuatBan } = require('../models/models');
const ApiError = require('../api-error');


// toan bo danh sach NXB
router.get('/', async (req, res, next) => {
    try {
        const nhaXuatBanList = await NhaXuatBan.find();
        res.json(nhaXuatBanList);
    } catch (err) {
        next(err);
    }
});

// lay NXB theo ID
router.get('/:id', async (req, res, next) => {
    try {
        const nhaXuatBan = await NhaXuatBan.findById(req.params.id);
        if (!nhaXuatBan) {
            return next(new ApiError(404, 'NhaXuatBan not found'));
        }
        res.json(nhaXuatBan);
    } catch (err) {
        next(err);
    }
});

// them thoong tin NXB vaof CSDL
router.post('/', async (req, res, next) => {
    try {
        const newNhaXuatBan = new NhaXuatBan(req.body);
        const savedNhaXuatBan = await newNhaXuatBan.save();
        res.status(201).json(savedNhaXuatBan);
    } catch (err) {
        next(err);
    }
});

// Cap nhat TT theo ID
router.put('/:id', async (req, res, next) => {
    try {
        const updatedNhaXuatBan = await NhaXuatBan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedNhaXuatBan) {
            return next(new ApiError(404, 'NhaXuatBan not found'));
        }
        res.json(updatedNhaXuatBan);
    } catch (err) {
        next(err);
    }
});

// xoa theo ID
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedNhaXuatBan = await NhaXuatBan.findByIdAndDelete(req.params.id);
        if (!deletedNhaXuatBan) {
            return next(new ApiError(404, 'NhaXuatBan not found'));
        }
        res.json({ message: 'NhaXuatBan deleted successfully' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
