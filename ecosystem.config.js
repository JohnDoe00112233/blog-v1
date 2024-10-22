module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "node_modules/.bin/next",
      args: "start",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
