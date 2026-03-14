#!/usr/bin/env node

/**
 * Antigravity AI Kit CLI
 * 
 * Usage:
 *   npx antigravity-ai-kit init
 *   ag-kit init [options]
 * 
 * @author Emre Dursun
 * @license MIT
 */

const fs = require('fs');
const path = require('path');

const VERSION = '3.0.0';
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
${colors.yellow}   Transform Your IDE into an Autonomous Engineering Team${colors.reset}

   • 19 AI Agents    • 31 Skills
   • 31 Commands     • 14 Workflows
   • Runtime Engine  • Error Budget
`);
}

function showHelp() {
  showBanner();
  console.log(`
${colors.bright}Usage:${colors.reset}
  ag-kit init [options]     Install .agent folder to your project
  ag-kit update             Update to latest version
  ag-kit status             Check installation status (alias: dashboard)
  ag-kit verify             Run manifest integrity checks
  ag-kit scan               Run security scan
  ag-kit plugin list        List installed plugins
  ag-kit plugin install <p> Install plugin from directory
  ag-kit plugin remove <n>  Remove installed plugin
  ag-kit market search <q>  Search marketplace plugins
  ag-kit market info <name> Get marketplace plugin details
  ag-kit market install <n> Install from marketplace
  ag-kit heal [--file <f>]  Detect and diagnose CI failures
  ag-kit --help             Show this help message
  ag-kit --version          Show version

${colors.bright}Options:${colors.reset}
  --force                   Overwrite existing .agent folder
  --path <dir>              Install to specific directory
  --quiet                   Suppress output (for CI/CD)
  --dry-run                 Preview actions without executing
  --apply                   Apply self-healing patches (default: dry-run)
  --file <path>             CI log file for heal command

${colors.bright}Examples:${colors.reset}
  npx antigravity-ai-kit init
  ag-kit init --force
  ag-kit scan
  ag-kit plugin list
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
  
  // Verify source .agent folder exists
  if (!fs.existsSync(sourcePath)) {
    log(`\n❌ Source .agent folder not found at: ${sourcePath}`, 'red');
    log('   The package may be corrupted. Try reinstalling:', 'yellow');
    log('   npm install -g antigravity-ai-kit\n', 'yellow');
    process.exit(1);
  }

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

${colors.bright}Validate your installation:${colors.reset}
  ${colors.cyan}ag-kit verify${colors.reset}   Manifest integrity check
  ${colors.cyan}ag-kit scan${colors.reset}     Security scan

${colors.bright}Quick start:${colors.reset}
  ${colors.cyan}/plan${colors.reset}       Create implementation plan
  ${colors.cyan}/implement${colors.reset}  Execute the plan
  ${colors.cyan}/verify${colors.reset}     Run quality gates

${colors.yellow}📚 Documentation: https://github.com/besync-labs/antigravity-ai-kit${colors.reset}
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
  
  log('   ═══ Capabilities ═══', 'cyan');
  console.log(`   📦 Skills:    ${skills}`);
  console.log(`   ⌨️  Commands:  ${commands}`);
  console.log(`   🔄 Workflows: ${workflows}`);
  
  // Workflow phase + available transitions
  try {
    const workflowEngine = require('../lib/workflow-engine');
    const phase = workflowEngine.getCurrentPhase(process.cwd());
    const available = workflowEngine.getAvailableTransitions(process.cwd());
    console.log(`   🔁 Phase:     ${phase}`);
    if (available.length > 0) {
      const nextPhases = available.map((t) => t.to).join(', ');
      console.log(`   ➡️  Next:      ${nextPhases}`);
    }
  } catch {
    // Engine not available, skip silently
  }
  
  // Error budget
  try {
    const errorBudget = require('../lib/error-budget');
    const report = errorBudget.getBudgetReport(process.cwd());
    const statusIcon = report.status === 'HEALTHY' ? '🟢' : report.status === 'WARNING' ? '🟡' : '🔴';
    console.log(`   ${statusIcon} Budget:   ${report.status}`);
    if (report.violations.length > 0) {
      log(`   ⚠️  Violations: ${report.violations.join(', ')}`, 'yellow');
    }
  } catch {
    // Budget not available, skip silently
  }
  
  // Task metrics
  try {
    const taskModel = require('../lib/task-model');
    const metrics = taskModel.getTaskMetrics(process.cwd());
    if (metrics.total > 0) {
      console.log('');
      log('   ═══ Tasks ═══', 'cyan');
      console.log(`   📋 Open:        ${metrics.counts.open || 0}`);
      console.log(`   🔨 In Progress: ${metrics.counts['in-progress'] || 0}`);
      console.log(`   👁️  In Review:   ${metrics.counts.review || 0}`);
      console.log(`   ✅ Done:        ${metrics.counts.done || 0}`);
      console.log(`   🚫 Blocked:     ${metrics.counts.blocked || 0}`);
      if (metrics.completionRate > 0) {
        console.log(`   📊 Completion:  ${metrics.completionRate}%`);
      }
    }
  } catch {
    // Task model not available, skip silently
  }
  
  // Hook readiness
  try {
    const hookSystem = require('../lib/hook-system');
    const hookReport = hookSystem.getHookReport(process.cwd());
    console.log('');
    log('   ═══ Hooks ═══', 'cyan');
    console.log(`   🪝 Events:    ${hookReport.events.length}`);
    console.log(`   ✅ Ready:     ${hookReport.readyCount}/${hookReport.events.length}`);
  } catch {
    // Hook system not available, skip silently
  }
  
  // Developer identity
  try {
    const identity = require('../lib/identity');
    const current = identity.getCurrentIdentity(process.cwd());
    if (current) {
      console.log('');
      log('   ═══ Identity ═══', 'cyan');
      console.log(`   👤 Developer: ${current.name}`);
      console.log(`   🔑 Role:      ${current.role}`);
    }
  } catch {
    // Identity not available, skip silently
  }
  
  // Plugins
  try {
    const pluginSystem = require('../lib/plugin-system');
    const plugins = pluginSystem.listPlugins(process.cwd());
    if (plugins.length > 0) {
      console.log('');
      log('   ═══ Plugins ═══', 'cyan');
      console.log(`   🔌 Installed: ${plugins.length}`);
      for (const plugin of plugins) {
        console.log(`      • ${plugin.name} v${plugin.version}`);
      }
    }
  } catch {
    // Plugin system not available, skip silently
  }
  
  // Phase 4 dashboard sections (D-5, E-5)
  try {
    const cliCommands = require('../lib/cli-commands');
    cliCommands.renderDashboardSections(process.cwd());
  } catch {
    // Phase 4 modules not available, skip silently
  }
  
  console.log('');
}

function verifyCommand() {
  showBanner();
  logStep('1/1', 'Running manifest integrity checks...\n');

  try {
    const verify = require('../lib/verify');
    const report = verify.runAllChecks(process.cwd());

    for (const result of report.results) {
      const icon = result.status === 'pass' ? '✓' : result.status === 'fail' ? '✗' : '⚠';
      const color = result.status === 'pass' ? 'green' : result.status === 'fail' ? 'red' : 'yellow';
      log(`   ${icon} ${result.message}`, color);
    }

    console.log('');
    log(`   Passed: ${report.passed}  Failed: ${report.failed}  Warnings: ${report.warnings}`, report.failed > 0 ? 'red' : 'green');
    console.log('');

    if (report.failed > 0) {
      process.exit(1);
    }
  } catch (/** @type {any} */ error) {
    log(`   ✗ Verification failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

function updateCommand(updateOptions) {
  showBanner();

  const agentPath = path.join(updateOptions.path || process.cwd(), '.agent');
  if (!fs.existsSync(agentPath)) {
    log('\n❌ No .agent/ folder found. Run: ag-kit init\n', 'red');
    process.exit(1);
  }

  const sourceRoot = path.join(__dirname, '..');
  const targetRoot = updateOptions.path || process.cwd();

  try {
    const updater = require('../lib/updater');
    const isDryRun = updateOptions.dryRun;

    if (isDryRun) {
      log('\n🔍 Dry run mode — no changes will be made\n', 'cyan');
    }

    logStep('1/2', isDryRun ? 'Analyzing differences...' : 'Applying updates...');

    const report = updater.applyUpdate(sourceRoot, targetRoot, isDryRun);

    if (report.added.length > 0) {
      log(`\n   📁 New files (${report.added.length}):`, 'green');
      for (const file of report.added) {
        log(`      + ${file}`, 'green');
      }
    }

    if (report.updated.length > 0) {
      log(`\n   📝 Updated files (${report.updated.length}):`, 'cyan');
      for (const file of report.updated) {
        log(`      ~ ${file}`, 'cyan');
      }
    }

    if (report.skipped.length > 0) {
      log(`\n   🔒 Preserved files (${report.skipped.length}):`, 'yellow');
      for (const file of report.skipped) {
        log(`      ○ ${file}`, 'yellow');
      }
    }

    logStep('2/2', 'Summary');
    console.log(`\n   Added: ${report.added.length}  Updated: ${report.updated.length}  Skipped: ${report.skipped.length}  Unchanged: ${report.unchanged.length}\n`);

    if (report.added.length === 0 && report.updated.length === 0) {
      log('   ✅ Already up to date!\n', 'green');
    } else if (!isDryRun) {
      log('   ✅ Update complete!\n', 'green');
    }
  } catch (/** @type {any} */ error) {
    log(`   ✗ Update failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

function scanCommand() {
  showBanner();
  logStep('1/1', 'Running enhanced security scan...\n');

  try {
    const scanner = require('../lib/security-scanner');
    const report = scanner.getSecurityReport(process.cwd());

    log(`   📂 Files scanned: ${report.filesScanned}`, 'cyan');
    console.log('');

    if (report.findings.length === 0) {
      log('   ✅ No security findings — all clear!\n', 'green');
    } else {
      for (const finding of report.findings) {
        const icon = finding.severity === 'critical' ? '🔴' : finding.severity === 'high' ? '🟠' : finding.severity === 'medium' ? '🟡' : '⚪';
        log(`   ${icon} [${finding.severity.toUpperCase()}] ${finding.detail}`, finding.severity === 'critical' ? 'red' : finding.severity === 'high' ? 'yellow' : 'reset');
        console.log(`      File: ${finding.file}${finding.line ? `:${finding.line}` : ''}`);
      }
      console.log('');
    }

    log(`   🔴 Critical: ${report.criticalCount}  🟠 High: ${report.highCount}  🟡 Medium: ${report.mediumCount}  ⚪ Low: ${report.lowCount}`, report.clean ? 'green' : 'red');
    console.log('');

    if (!report.clean) {
      process.exit(1);
    }
  } catch (/** @type {any} */ error) {
    log(`   ✗ Security scan failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

function pluginCommand(subCommand, pluginArg) {
  showBanner();

  try {
    const pluginSystem = require('../lib/plugin-system');

    switch (subCommand) {
      case 'list': {
        const plugins = pluginSystem.listPlugins(process.cwd());
        if (plugins.length === 0) {
          log('   No plugins installed\n', 'yellow');
        } else {
          log(`   ═══ Installed Plugins (${plugins.length}) ═══\n`, 'cyan');
          for (const plugin of plugins) {
            console.log(`   🔌 ${plugin.name} v${plugin.version}`);
            console.log(`      Author: ${plugin.author}`);
            console.log(`      Installed: ${plugin.installedAt}`);
            console.log('');
          }
        }
        break;
      }
      case 'install': {
        if (!pluginArg) {
          log('   ✗ Usage: ag-kit plugin install <path>\n', 'red');
          process.exit(1);
        }
        const pluginPath = path.resolve(pluginArg);
        logStep('1/1', `Installing plugin from ${pluginPath}...`);
        const result = pluginSystem.installPlugin(pluginPath, process.cwd());
        if (result.success) {
          log('\n   ✅ Plugin installed successfully!', 'green');
          console.log(`      Agents: ${result.installed.agents}  Skills: ${result.installed.skills}  Workflows: ${result.installed.workflows}  Hooks: ${result.installed.hooks}\n`);
        } else {
          log('\n   ✗ Plugin installation failed:', 'red');
          for (const error of result.errors) {
            log(`      • ${error}`, 'red');
          }
          console.log('');
          process.exit(1);
        }
        break;
      }
      case 'remove': {
        if (!pluginArg) {
          log('   ✗ Usage: ag-kit plugin remove <name>\n', 'red');
          process.exit(1);
        }
        logStep('1/1', `Removing plugin: ${pluginArg}...`);
        const result = pluginSystem.removePlugin(pluginArg, process.cwd());
        if (result.success) {
          log('\n   ✅ Plugin removed successfully!\n', 'green');
        } else {
          log(`\n   ✗ ${result.error}\n`, 'red');
          process.exit(1);
        }
        break;
      }
      default:
        log('   Usage: ag-kit plugin <list|install|remove>', 'yellow');
        console.log('');
        break;
    }
  } catch (/** @type {any} */ error) {
    log(`   ✗ Plugin command failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Parse arguments
const args = process.argv.slice(2);
const command = args[0];

const options = {
  force: args.includes('--force'),
  quiet: args.includes('--quiet'),
  dryRun: args.includes('--dry-run'),
  apply: args.includes('--apply'),
  path: null,
  file: null,
};

// Parse --path option
const pathIndex = args.indexOf('--path');
if (pathIndex !== -1 && args[pathIndex + 1]) {
  options.path = args[pathIndex + 1];
}

// Parse --file option
const fileIndex = args.indexOf('--file');
if (fileIndex !== -1 && args[fileIndex + 1]) {
  options.file = args[fileIndex + 1];
}

// Execute command
switch (command) {
  case 'init':
    initCommand(options);
    break;
  case 'status':
  case 'dashboard':
    statusCommand();
    break;
  case 'update':
    updateCommand(options);
    break;
  case 'verify':
    verifyCommand();
    break;
  case 'scan':
    scanCommand();
    break;
  case 'plugin':
    pluginCommand(args[1], args[2]);
    break;
  case 'market': {
    const cliCommands = require('../lib/cli-commands');
    cliCommands.marketCommand(process.cwd(), args[1], args[2], options);
    break;
  }
  case 'heal': {
    const cliCmd = require('../lib/cli-commands');
    cliCmd.healCommand(process.cwd(), { file: options.file, apply: options.apply });
    break;
  }
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
