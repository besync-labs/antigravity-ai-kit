#!/usr/bin/env node

/**
 * Antigravity AI Kit CLI
 * 
 * Usage:
 *   npx @emredursun/antigravity-ai-kit init
 *   ag-kit init [options]
 * 
 * @author Emre Dursun
 * @license MIT
 */

const fs = require('fs');
const path = require('path');

const VERSION = '2.0.0';
const AGENT_FOLDER = '.agent';

// ANSI colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step, message) {
  console.log(`${colors.cyan}[${step}]${colors.reset} ${message}`);
}

function showBanner() {
  console.log(`
${colors.bright}${colors.blue}
   _____          __  .__                            .__  __          
  /  _  \\   _____/  |_|__|  ________________ ___  ___|__|/  |_ ___.__.
 /  /_\\  \\ /    \\   __\\  | / ___\\_  __ \\__  \\\\  \\/ /|  \\   __<   |  |
/    |    \\   |  \\  | |  |/ /_/  >  | \\// __ \\\\   / |  ||  |  \\___  |
\\____|__  /___|  /__| |__|\\___  /|__|  (____  /\\_/  |__||__|  / ____|
        \\/     \\/        /_____/            \\/                \\/     
${colors.reset}
${colors.green}🚀 Antigravity AI Kit v${VERSION}${colors.reset}
${colors.yellow}   Transform Your IDE into an AI Engineering Team${colors.reset}

   • 17 AI Agents    • 26 Skills
   • 31 Commands     • 11 Workflows
`);
}

function showHelp() {
  showBanner();
  console.log(`
${colors.bright}Usage:${colors.reset}
  ag-kit init [options]     Install .agent folder to your project
  ag-kit update             Update to latest version
  ag-kit status             Check installation status
  ag-kit --help             Show this help message
  ag-kit --version          Show version

${colors.bright}Options:${colors.reset}
  --force                   Overwrite existing .agent folder
  --path <dir>              Install to specific directory
  --quiet                   Suppress output (for CI/CD)
  --dry-run                 Preview actions without executing

${colors.bright}Examples:${colors.reset}
  npx @emredursun/antigravity-ai-kit init
  ag-kit init --force
  ag-kit init --path ./my-project
`);
}

function copyFolderSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyFolderSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function countItems(dir, type = 'dir') {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    if (type === 'dir') {
      return entries.filter(e => e.isDirectory()).length;
    }
    return entries.filter(e => e.isFile() && e.name !== 'README.md' && e.name.endsWith('.md')).length;
  } catch {
    return 0;
  }
}

function initCommand(options) {
  const targetDir = options.path || process.cwd();
  const agentPath = path.join(targetDir, AGENT_FOLDER);
  const sourcePath = path.join(__dirname, '..', AGENT_FOLDER);
  
  if (!options.quiet) {
    showBanner();
  }
  
  // Check if already exists
  if (fs.existsSync(agentPath) && !options.force) {
    log(`\n⚠️  ${AGENT_FOLDER} folder already exists!`, 'yellow');
    log('   Use --force to overwrite\n', 'yellow');
    process.exit(1);
  }
  
  if (options.dryRun) {
    log('\n🔍 Dry run mode - no changes will be made\n', 'cyan');
    log(`   Would copy: ${sourcePath}`, 'cyan');
    log(`   To: ${agentPath}\n`, 'cyan');
    return;
  }
  
  // Copy .agent folder
  logStep('1/3', 'Copying .agent folder...');
  
  try {
    copyFolderSync(sourcePath, agentPath);
    log('   ✓ Copied successfully', 'green');
  } catch (err) {
    log(`   ✗ Failed to copy: ${err.message}`, 'red');
    process.exit(1);
  }
  
  // Verify installation
  logStep('2/3', 'Verifying installation...');
  const skills = countItems(path.join(agentPath, 'skills'), 'dir');
  const commands = countItems(path.join(agentPath, 'commands'), 'file');
  const workflows = countItems(path.join(agentPath, 'workflows'), 'file');
  log(`   ✓ Skills: ${skills}, Commands: ${commands}, Workflows: ${workflows}`, 'green');
  
  // Final message
  logStep('3/3', 'Setup complete!');
  
  if (!options.quiet) {
    console.log(`
${colors.green}✅ Antigravity AI Kit installed successfully!${colors.reset}

${colors.bright}Next steps:${colors.reset}
  1. Open your project in an AI-powered IDE
  2. Run ${colors.cyan}/status${colors.reset} to verify
  3. Use ${colors.cyan}/help${colors.reset} to see available commands

${colors.bright}Quick start:${colors.reset}
  ${colors.cyan}/plan${colors.reset}       Create implementation plan
  ${colors.cyan}/implement${colors.reset}  Execute the plan
  ${colors.cyan}/verify${colors.reset}     Run quality gates

${colors.yellow}📚 Documentation: https://github.com/emredursun/antigravity-ai-kit${colors.reset}
`);
  }
}

function statusCommand() {
  showBanner();
  
  const agentPath = path.join(process.cwd(), AGENT_FOLDER);
  
  if (!fs.existsSync(agentPath)) {
    log('❌ Not installed in current directory', 'red');
    log('   Run: ag-kit init\n', 'yellow');
    return;
  }
  
  log('✅ Antigravity AI Kit is installed\n', 'green');
  
  const skills = countItems(path.join(agentPath, 'skills'), 'dir');
  const commands = countItems(path.join(agentPath, 'commands'), 'file');
  const workflows = countItems(path.join(agentPath, 'workflows'), 'file');
  
  console.log(`   📦 Skills:    ${skills}`);
  console.log(`   ⌨️  Commands:  ${commands}`);
  console.log(`   🔄 Workflows: ${workflows}\n`);
}

// Parse arguments
const args = process.argv.slice(2);
const command = args[0];

const options = {
  force: args.includes('--force'),
  quiet: args.includes('--quiet'),
  dryRun: args.includes('--dry-run'),
  path: null,
};

// Parse --path option
const pathIndex = args.indexOf('--path');
if (pathIndex !== -1 && args[pathIndex + 1]) {
  options.path = args[pathIndex + 1];
}

// Execute command
switch (command) {
  case 'init':
    initCommand(options);
    break;
  case 'status':
    statusCommand();
    break;
  case 'update':
    log('🔄 Update not yet implemented - reinstall with: npx @emredursun/antigravity-ai-kit init --force', 'yellow');
    break;
  case '--version':
  case '-v':
    console.log(VERSION);
    break;
  case '--help':
  case '-h':
  case undefined:
    showHelp();
    break;
  default:
    log(`Unknown command: ${command}`, 'red');
    log('Run ag-kit --help for usage\n', 'yellow');
    process.exit(1);
}
