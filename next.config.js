module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/staking",
        permanent: true,
      },
    ];
  },
};
