const route = require('express').Router();
const mataKuliah = require('../controllers/mataKuliah');

route.post('/', mataKuliah.addMataKuliah);
route.get('/', mataKuliah.getMataKuliah);
route.get('/:id', mataKuliah.getOneMataKuliah);
route.put('/:id', mataKuliah.updateMataKuliah);
route.delete('/:id', mataKuliah.deleteMataKuliah);

module.exports = route;