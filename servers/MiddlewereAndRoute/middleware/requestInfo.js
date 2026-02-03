

export function requestInfo(req, res, next) {
  req.requestTime = new Date().toISOString();
  req.source = "middleware";

  console.log(`[${req.method}] ${req.originalUrl}`);

  next();
}
