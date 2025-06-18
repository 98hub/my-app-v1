module.exports = {
  apps: [
    {
      name: "my-app-v1",
      script: "npm", 
      args: "start", 
      env: {
        NODE_ENV: "production", 
      },
    },
  ],
};

// How to use:
// make sure your env variables already in production mode
// pm2 start npm --name "my-app-v1" -- start
