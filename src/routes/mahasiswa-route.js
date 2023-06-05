const route = require('express').Router();
const mahasiswa = require('../controllers/mahasiswa');

route.post('/', mahasiswa.addMahasiswa);
route.get('/', mahasiswa.getMahasiswa);
route.get('/:id', mahasiswa.getOneMahasiswa);
route.put('/:id', mahasiswa.updateMahasiswa);
route.delete('/:id', mahasiswa.deleteMahasiswa);

module.exports = route;