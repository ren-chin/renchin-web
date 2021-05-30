module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/renchin-web/" //任意
      : "/",
};
