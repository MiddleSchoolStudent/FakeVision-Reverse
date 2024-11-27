# fv.pro-Reverse

https://fv.pro has some very advanced detection and it uses https://obfuscator.io/ for the obfuscation. Because the file is so large, https://deobfuscate.io/ can't unobfuscate it directly, and it can make your browser get stuck.

After analyzing the obfuscation methods, we use AST to extract functions from the source code and implement dynamic staking with puppeteer to achieve dynamic de-obfuscation.

## Usage

```bash
npm i
node ./index.js
```
