<<<<<<< HEAD
class ExpressError extends Error {
  constructor(msg, status) {
    super();
    this.msg = msg;
    this.status = status;
    console.error(this.stack);
  }
}
module.exports = ExpressError;
=======
class ExpressError extends Error {
  constructor(msg, status) {
    super();
    this.msg = msg;
    this.status = status;
    console.error(this.stack);
  }
}
module.exports = ExpressError;
>>>>>>> ccaa30df6e9bbce17b84adca21e8159c53fe557d
