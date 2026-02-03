export function responseWrapper(req, res, next) {
  const originalJson = res.json;

  res.json = function (data) {
    originalJson.call(this, {
      success: true,
      time: req.requestTime,
      data
    });
  };

  next();
}
