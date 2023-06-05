const Mahasiswa = require('../models/Mahasiswa');

const addMahasiswa = async (req, res) => {
    const {
        nama,
        nim,
        kelas,
        jenis_kelamin
    } = req.body
    const data = {
        nama,
        nim,
        kelas,
        jenis_kelamin
    }
    try {
        const doc = new Mahasiswa(data);
        await doc.save();
        return res.status(201).json({
            message: "Added data successfully",
            data: doc
        })
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const getMahasiswa = async (req, res) => {
    try {
        const doc = await Mahasiswa.find();
        return res.status(200).json({
            message: "Get data successfully",
            data: doc
        })
    } catch (err) {
        return res.status(500).json({error : err.message})
    }
}

const getOneMahasiswa = async (req, res) => {
    const { id } = req.params;
    try {
        const findId = await Mahasiswa.findById(id);
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

const updateMahasiswa = async (req, res) => {
    const {
        nama,
        nim,
        kelas,
        jenis_kelamin
    } = req.body
    const { id } = req.params;
    const newData = {
        nama,
        nim,
        kelas,
        jenis_kelamin
    }
    try {
        const findId = await Mahasiswa.findByIdAndUpdate(id, newData, { new: true })
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

const deleteMahasiswa = async (req, res) => {
    const { id } = req.params;
    try {
        const doc = await Mahasiswa.findByIdAndRemove(id);
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
    addMahasiswa,
    getMahasiswa,
    getOneMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
}