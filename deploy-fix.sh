#!/bin/bash
# Script to commit and push Tailwind v3 fix

echo "🔧 Committing Tailwind v3 fix..."
git add package.json package-lock.json postcss.config.mjs

git commit -m "🎨 Fix CSS not loading: Downgrade to Tailwind v3.4.1 for production compatibility"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Done! Vercel will auto-rebuild in 2-3 minutes"
echo "🌐 Check: https://umik-s-kitchen.vercel.app"
