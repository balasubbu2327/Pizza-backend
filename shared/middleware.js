const jwt = require('jsonwebtoken');

const middleware = {
  async auth(req, res, next) {
    req.user = null;
    try{
      if(req.headers && req.headers.authorization){
        const [_, token] = req.headers.authorization.split(" ");
         const user = await jwt.verify(token, process.env.JWT_SECRET);
         console.log(user);
        next();
      } else {
        res.status(403).send({ error: "No authorization headers" });
      }
    } catch(error) {
      res.status(403).send({ error: error.message});
    }
  },
  logging(req, res, next) {
    console.log(`${new Date()} - ${req.method} - ${req.url}`);
    next();
  },
  maintenance(req, res, next) {
    process.env.IS_MAINTENANCE == "true"
      ? res.send({ message: "site is under maintenance" })
      : next();
  },
};

module.exports = middleware;