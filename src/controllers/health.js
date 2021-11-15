const health = async (req, h) => {
  req.log('info', 'Server is healthy!');
  req.log(['a', 'b'], 'Request into hello world');
  // you can also use a pino instance, which will be faster
  req.logger.info('In handler %s', req.path);
  return h
    .response({
      status: 'OK!',
    })
    .code(200);
};

module.exports = { health };
