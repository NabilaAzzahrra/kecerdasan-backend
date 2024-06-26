const express = require('express');
const router = express.Router();
const { Type } = require('../models');

router.get('/', async (req, res) => {
  const types = await Type.findAll();
  return res.json(types);
});

router.get('/:id', async (req, res) => {
  const types = await Type.findOne({
      where: {
          id: req.params.id
      }
  });
  return res.json(types);
});

router.post('/', async (req, res) => {
  const data = {
      jenis_kecerdasan: req.body.jenis_kecerdasan,
      keterangan: req.body.keterangan,
      jurusan: req.body.jurusan
  }
  const type = await Type.create(data);
  return res.json({
      message: 'Berhasil disimpan',
      data: type
  });
});

router.patch('/:id', async (req, res) => {
  const data = {
    jenis_kecerdasan: req.body.jenis_kecerdasan,
    keterangan: req.body.keterangan,
    jurusan: req.body.jurusan
  }
  await Type.update(data, {
      where: {
          id: req.params.id
      }
  });
  const type = await Type.findOne({
      where: {
          id: req.params.id
      }
  });
  return res.json({
      message: 'Berhasil diubah',
      data: type
  });
});

router.delete('/:id', async (req, res) => {
  await Type.destroy({
      where: {
          id: req.params.id
      }
  });
  return res.json({
      message:'BERHASIL DIHAPUS'
  });
});

module.exports = router;
