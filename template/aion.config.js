
module.exports = {
  apps : [{
    name: 'aion-server',
    script: './server.js',
    args: 'start',
    exec_mode: 'fork_mode',

    env: {
      NODE_ENV: 'production',
      PORT: '8080'
    }
  }]
};
