module.exports = {
    apps: [
      {
        name: "nocodb-backend",
        script: "pnpm",
        args: "start:backend",
        cwd: "/Users/transmux/Projects/nocodb/deploy",
        env: {
          NC_DB: "pg://localhost:6712?u=transmux&p=postgres&d=nocodb",
          HOST: "0.0.0.0",
        },
        watch: false,
      },
      {
        name: "nocodb-frontend",
        script: "pnpm",
        args: "start:frontend",
        cwd: "/Users/transmux/Projects/nocodb/deploy",
        watch: false,
        env: {
          NUXT_HOST: "0.0.0.0",
          PORT: 6713,
        },
      },
    ],
  };
  