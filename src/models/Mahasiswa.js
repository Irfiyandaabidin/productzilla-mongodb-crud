const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    nim: {
        type: Number,
        required: true,
    },
    kelas: {
        type: String,
        required: true
    },
    jenis_kelamin: {
        type: String,
        required: true
    }
})

const Mahasiswa = new mongoose.model('Mahasiswa', mahasiswaSchema);

module.exports = Mahasiswa;