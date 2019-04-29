import express from 'express';
import UrlController from '../controllers/url.controller';
const router = express.Router();

router.post('/shorten', UrlController.shorten);

module.exports = router;
