class FixedAuthentication {
  Authenticate = async (req, res, next, role) => {
    try {
      req.role = role;
      next()
    } catch (error) {
      res.status(500).send({
        message: "Unable to parse the request",
      });
    }
  };

  Customer = (req, res, next) => {
    this.Authenticate(req, res, next, "customer");
  };
  Agent = (req, res, next) => {
    this.Authenticate(req, res, next, "agent");
  };
  Admin = (req, res, next) => {
    this.Authenticate(req, res, next, "admin");
  };
}

module.exports = new FixedAuthentication()