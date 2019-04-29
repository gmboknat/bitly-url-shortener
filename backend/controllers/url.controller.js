import { BitlyClient } from 'bitly';
import logger from '../helpers/logger';
const bitly = new BitlyClient(process.env.access_token, {});

exports.shorten = (req, res, next) => {
  const url = req.body.url;
  bitly
    .shorten(url)
    .then(result => {
      logger(result);
      res.send(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
};
