
module.exports = [
  {
    method: '*',
    path: '/{any*}',
    options: {
      auth: false,
      tags: ['api', '404'],
    },
    handler: function () {
      return '404 Error! Page Not Found!';
    }
  }
];
