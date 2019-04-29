import { BitlyClient } from 'bitly';
import logger from '../helpers/logger';
const bitly = new BitlyClient('f51f80f697de9e1e94e0e309ba9b7761c8f1c6cb', {});

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
