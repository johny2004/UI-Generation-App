#!/usr/bin/env node
require('./node-compat.cjs');
const { spawn } = require('child_process');

const child = spawn('npx next dev --turbopack', [], { 
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  process.exit(code);
});
