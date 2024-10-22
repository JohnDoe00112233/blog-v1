module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "yarn",
      args: "start",
      interpreter: "/bin/bash", // Chạy Yarn qua Bash
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
