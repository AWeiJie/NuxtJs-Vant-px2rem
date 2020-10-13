module.exports = {
  apps: [
    {
      name: "gysaH5-SEO",
      script: "npm",
      args: "run start",
      watch: [".nuxt"], // 监控输出目录
      exec_mode: "cluster",
      env: {
        HOST: "0.0.0.0",
        PORT: 3300,
        NODE_ENV: "dev",
        MODE: "dev",
        MODE_CLIENT: "test"
      },
      env_test: {
        HOST: "0.0.0.0",
        NODE_ENV: "test",
        MODE: "test",
        PORT: 3300,
        MODE_CLIENT: "test"
      },
      env_production: {
        NODE_ENV: "production",
        MODE: "production",
        HOST: "0.0.0.0",
        PORT: 3300
      },
      output: "/www/wwwlogs/love_web_nuxt/console.log",
      error: "/www/wwwlogs/love_web_nuxt/consoleError.log"
    }
  ],
  // deploy: {
  //   test: {
  //     user: 'test/',
  //     host: ['127.0.0.1'],
  //     port: '3300',
  //     path:'/mnt/E/project/h5-seo',
  //     ref: 'origin/relsase/conbine_test',
  //     repo: 'git@47.107.73.162:gysa_web_mp/h5-seo.git',
  //     // ssh_options: 'StrictHostKeyChecking=no',
  //     'post-deploy': 'cross-env MODE=test MODE_CLIENT=test pm2 start ecosystem.config.js --env test'
  //   }
  // }
};
