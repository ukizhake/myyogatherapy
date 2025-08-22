#!/bin/bash

# 🚀 MendOnBend Vercel Setup Script
# This script helps you set up automatic deployment to Vercel

echo "🕉️ Setting up MendOnBend for Vercel deployment..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "vercel.json" ]; then
    echo -e "${RED}❌ Error: vercel.json not found. Are you in the MendOnBend project directory?${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Found vercel.json configuration${NC}"

# Check if git repository is set up
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Error: Not a git repository. Please run 'git init' first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Git repository detected${NC}"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠️ Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Vercel CLI installed successfully${NC}"
    else
        echo -e "${RED}❌ Failed to install Vercel CLI. Please install manually: npm install -g vercel${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✅ Vercel CLI found${NC}"
fi

echo ""
echo -e "${BLUE}📋 Deployment Setup Options:${NC}"
echo ""
echo "1. 🌐 Automatic GitHub Integration (Recommended)"
echo "2. 📱 Manual CLI Deployment"
echo "3. ℹ️ Show setup instructions only"
echo ""

read -p "Choose an option (1-3): " choice

case $choice in
    1)
        echo ""
        echo -e "${BLUE}🌐 Setting up GitHub Integration...${NC}"
        echo ""
        echo "Please follow these steps:"
        echo ""
        echo "1. Go to https://vercel.com"
        echo "2. Sign in with your GitHub account"
        echo "3. Click 'New Project'"
        echo "4. Import your repository: ukizhake/myyogatherapy"
        echo "5. Use these settings:"
        echo "   - Framework: Other"
        echo "   - Root Directory: ./"
        echo "   - Build Command: (leave empty)"
        echo "   - Output Directory: ./"
        echo "6. Click 'Deploy'"
        echo ""
        echo -e "${GREEN}✨ After setup, every 'git push' will trigger automatic deployment!${NC}"
        ;;
    2)
        echo ""
        echo -e "${BLUE}📱 Manual CLI Deployment...${NC}"
        echo ""
        echo "Running: vercel --prod"
        echo ""
        vercel --prod
        ;;
    3)
        echo ""
        echo -e "${BLUE}ℹ️ Setup Instructions:${NC}"
        echo ""
        cat DEPLOYMENT_GUIDE.md
        ;;
    *)
        echo -e "${RED}❌ Invalid option. Please run the script again.${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}🎉 Setup complete!${NC}"
echo ""
echo -e "${BLUE}📋 Quick Commands:${NC}"
echo "• Test locally: vercel dev"
echo "• Deploy manually: vercel --prod"
echo "• Check status: vercel list"
echo "• View logs: vercel logs"
echo ""
echo -e "${GREEN}🕉️ Your MendOnBend platform is ready for the world!${NC}"
