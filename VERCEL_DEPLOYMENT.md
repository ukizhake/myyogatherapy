# Vercel Deployment Guide for Yoga Therapy App

## Overview
This guide will help you deploy the Yoga Therapy application to Vercel with the domain mendonbend.com and configure the yoga-therapy route to redirect to sagekarma.online.

## Prerequisites
- Vercel account (free tier available)
- Domain: mendonbend.com (already configured)
- Access to domain DNS settings

## Step 1: Prepare for Deployment

### 1.1 Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

### 1.2 Verify Project Structure
Ensure your project has these key files:
- `index.html` (main entry point)
- `vercel.json` (deployment configuration)
- `package.json` (project configuration)
- All JavaScript and CSS files
- Data files in the `data/` directory

## Step 2: Deploy to Vercel

### 2.1 Using Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository or upload files
4. Configure project settings:
   - **Framework Preset**: Other
   - **Build Command**: `echo 'Static site - no build required'`
   - **Output Directory**: `.` (root)
   - **Install Command**: `echo 'No dependencies to install'`

### 2.2 Using Vercel CLI
```bash
# Navigate to project directory
cd /path/to/your/yoga-therapy-app

# Deploy
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Set project name: yoga-therapy-app
# - Confirm deployment settings
```

## Step 3: Configure Domain

### 3.1 Add Custom Domain
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add domain: `mendonbend.com`
4. Follow DNS configuration instructions

### 3.2 DNS Configuration
Add these DNS records to your domain provider:

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.19.19
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3.3 Verify Domain
- Wait for DNS propagation (up to 48 hours)
- Vercel will automatically provision SSL certificate

## Step 4: Configure Route Redirect

The `vercel.json` file already includes the redirect configuration:

```json
{
  "rewrites": [
    {
      "source": "/yoga-therapy",
      "destination": "https://sagekarma.online"
    }
  ]
}
```

This means:
- When users visit `mendonbend.com/yoga-therapy`
- They will be redirected to `sagekarma.online`

## Step 5: Premium Features Configuration

### 5.1 Sequence Builder Premium Gating
The sequence builder now includes premium gating:
- Non-premium users see an upgrade prompt
- Premium users get full access to advanced features
- Demo mode available for non-premium users

### 5.2 Premium Manager Integration
The app uses `premium_manager.js` to:
- Check premium status
- Show upgrade prompts
- Manage feature access

## Step 6: Environment Variables (Optional)

If you need environment variables for API keys or other configurations:

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add variables as needed:
   ```
   FIREBASE_API_KEY=your_firebase_key
   FIREBASE_AUTH_DOMAIN=your_domain
   ```

## Step 7: Testing Deployment

### 7.1 Test Main Site
- Visit `mendonbend.com`
- Verify all features work correctly
- Test responsive design

### 7.2 Test Redirect
- Visit `mendonbend.com/yoga-therapy`
- Should redirect to `sagekarma.online`

### 7.3 Test Premium Features
- Test sequence builder premium gating
- Verify upgrade prompts work
- Test demo mode

## Step 8: Monitoring and Analytics

### 8.1 Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor performance and user behavior

### 8.2 Custom Analytics
Consider adding Google Analytics or other tracking:
```html
<!-- Add to index.html head section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check `package.json` scripts
   - Verify all files are committed
   - Check for syntax errors

2. **Domain Not Working**
   - Verify DNS settings
   - Wait for propagation
   - Check domain in Vercel dashboard

3. **Redirect Not Working**
   - Verify `vercel.json` configuration
   - Check for typos in destination URL
   - Clear browser cache

4. **Premium Features Not Working**
   - Check `premium_manager.js` is loaded
   - Verify premium status logic
   - Test in incognito mode

### Support
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

## Maintenance

### Regular Updates
1. Monitor Vercel dashboard for performance
2. Update dependencies as needed
3. Test premium features regularly
4. Monitor redirect functionality

### Backup Strategy
- Keep local copy of all files
- Use Git for version control
- Regular backups of user data (if applicable)

## Security Considerations

1. **HTTPS**: Vercel automatically provides SSL certificates
2. **Headers**: Security headers configured in `vercel.json`
3. **API Keys**: Store sensitive data in environment variables
4. **Premium Access**: Implement proper authentication for premium features

## Performance Optimization

1. **Static Assets**: All assets are served as static files
2. **Caching**: Vercel provides automatic caching
3. **CDN**: Global CDN for fast loading worldwide
4. **Compression**: Automatic gzip compression

---

**Deployment Complete!** 🎉

Your Yoga Therapy app is now live at `mendonbend.com` with premium features and proper domain routing.
