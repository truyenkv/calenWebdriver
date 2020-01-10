1. Create the folder calenWebdriver
2. Install wdio/cli for using test runner: npm i --save-dev @wdio/cli
3. Generate Configuration File: ./node_modules/.bin/wdio config -y
4. Create the test folder: mkdir -p ./test/specs
5. Input some text and run command: ./node_modules/.bin/wdio wdio.conf.js
6. Install Babel Setup: npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register