class Authentication {
  static ensureRole(role) {
    return async (req, res, next) => {
      try {
        req.role = role;
        return next();
      } catch (err) {
        return res.status(500).send({
          msg: "Unable to parse request",
          err,
        });
      }
    };
  }
}

module.exports = Authentication;
