#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const versionType = process.argv[2] || 'patch';

if (!['patch', 'minor', 'major'].includes(versionType)) {
  console.error('❌ Invalid version type. Use: patch, minor, or major');
  process.exit(1);
}

console.log(`🚀 Starting ${versionType} release...`);

try {
  // Run pre-publish checks
  console.log('🔍 Running pre-publish checks...');
  execSync('bun run lint', { stdio: 'inherit' });
  execSync('bun run typecheck', { stdio: 'inherit' });
  execSync('bun run test', { stdio: 'inherit' });
  execSync('bun run build', { stdio: 'inherit' });

  // Bump version
  console.log(`📈 Bumping ${versionType} version...`);
  execSync(`npm version ${versionType}`, { stdio: 'inherit' });

  // Get the new version
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const newVersion = packageJson.version;

  console.log(`✅ Release ${newVersion} is ready!`);
  console.log('');
  console.log('Next steps:');
  console.log('1. Push the changes: git push && git push --tags');
  console.log('2. Create a GitHub release to trigger automated publishing');
  console.log('3. Or publish manually: npm publish');
} catch (error) {
  console.error('❌ Release failed:', error.message);
  process.exit(1);
}
