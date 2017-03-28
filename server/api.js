'use strict';
const express = require('express');
const router = express();
const MusicApi = require('music-api');
const net = require('music163-crawler');
var toplist = require("music163-crawler/lib/crawler/toplist");
// const net2 = require('neteaseMusicApi');

router.get('/search/song/:vendor', (req, res) => {
  let key = req.query.key,
      limit = req.query.limit,
      page = req.query.page,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.searchSong(vendor, {
    key,
    limit,
    page,
    raw
  })
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

router.get('/search/album/:vendor', (req, res) => {
  let key = req.query.key,
      limit = req.query.limit,
      page = req.query.page,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  // console.log(key)
  MusicApi.searchAlbum(vendor, {
    key,
    limit,
    page,
    raw
  })
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

router.get('/search/playlist/:vendor', (req, res) => {
  let key = req.query.key,
      limit = req.query.limit,
      page = req.query.page,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.searchPlaylist(vendor, {
    key,
    limit,
    page,
    raw
  })
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

router.get('/get/song/:vendor', (req, res) => {
  let id = req.query.id,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.getSong(vendor, {
    id,
    raw
  })
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

router.get('/get/album/:vendor', (req, res) => {
  let id = req.query.id,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.getAlbum(vendor, {
    id,
    raw
  })
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

router.get('/get/playlist/:vendor', (req, res) => {
  let id = req.query.id,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.getPlaylist(vendor, {
    id,
    raw
  })
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

router.get('/search/suggestion/:key', (req, res) => {
  let key = req.params.key;
  MusicApi.searchSuggestion(key)
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

router.get('/suggestion/xiami', (req, res) => {
  MusicApi.getDailySuggest()
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

router.get('/netTest', (req, res) => {
  toplist.getTopList().then(response => {
    res.json(response);
  });
});

router.get('/songList/:id',(req,res)=>{
  let id = req.query.id;
  toplist.getSongList(id).then(response => {
    // console.log(response);
  })
  // net2.playlists(id, response => {
  //   res.json(response);
  // })
})

module.exports = router;
