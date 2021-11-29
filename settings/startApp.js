module.exports = (app) => {
  app.listen(process.env.PORT || 3005, () => {
    console.log(
      'Express server listening on port %d in %s mode',
      process.env.PORT || 3005,
      app.settings.env,
    );
  });
};
