const mataKuliah = require('../models/Mata-kuliah');

const addMataKuliah = async (req, res) => {
    const {
        kode,
        nama,
        sks,
        kelas
    } = req.body
    const data = {
        kode,
        nama,
        sks,
        kelas
    }
    try {
        const doc = new mataKuliah(data);
        await doc.save();
        return res.status(201).json({
            message: "Added data successfully",
            data: doc
        })
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const getMataKuliah = async (req, res) => {
    try {
        const doc = await mataKuliah.find();
        return res.status(200).json({
            message: "Get data successfully",
            data: doc
        })
    } catch (err) {
        return res.status(500).json({error : err.message})
    }
}

const getOneMataKuliah = async (req, res) => {
    const { id } = req.params;
    try {
        const findId = await mataKuliah.findById(id);
        if (!findId) {
                return res.status(404).json({
                message: "Id not found"
            })
        }
        return res.status(200).json({
            message: "Get data successfully",
            data: findId
        })
    } catch (err) {
        return res.status(500).json({error : err.message})
    }
}

const updateMataKuliah = async (req, res) => {
    const {
        kode,
        nama,
        sks,
        kelas
    } = req.body
    const { id } = req.params;
    const newData = {
        kode,
        nama,
        sks,
        kelas
    }
    try {
        const findId = await mataKuliah.findByIdAndUpdate(id, newData, { new: true })
        if (!findId) {
            return res.status(404).json({
                message : "Id not found"
            })
        }
        return res.status(200).json({
            message: "Update data successfully",
            data: findId
        })
    } catch (err) {
        return res.status(500).json({
            error : err.message
        })
    } 
}

const deleteMataKuliah = async (req, res) => {
    const { id } = req.params;
    try {
        const doc = await mataKuliah.findByIdAndRemove(id);
        if (!doc) {
            return res.status(404).json({
                message : "Id not found"
            })
        }
        return res.status(200).json({
            message: "Deleted data successfully"
        })
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    addMataKuliah,
    getMataKuliah,
    getOneMataKuliah,
    updateMataKuliah,
    deleteMataKuliah
}