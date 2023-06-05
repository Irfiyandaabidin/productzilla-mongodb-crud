const mongoose = require('mongoose');

const mataKuliahSchema = new mongoose.Schema({
    kode: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    sks: {
        type: Number,
        required: true
    },
    kelas: {
        type: String,
        required: true
    }
})

const MataKuliah = new mongoose.model('MataKuliah', mataKuliahSchema);

module.exports = MataKuliah;