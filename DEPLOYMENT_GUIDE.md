# 🚀 MendOnBend Deployment Guide

## Automatic Vercel Deployment Setup

### 1. Connect GitHub to Vercel (One-time setup)

1. **Go to [Vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "New Project"**
3. **Import your repository**: `ukizhake/myyogatherapy`
4. **Configure project settings**:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave empty (handled by vercel.json)
   - **Output Directory**: `./` (leave as default)
   - **Install Command**: Leave empty

5. **Click "Deploy"**

### 2. Automatic Deployment Workflow

Once connected, **every time you push to GitHub**:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

**Vercel will automatically**:
- ✅ Detect the push to main branch
- ✅ Start a new deployment
- ✅ Build your site (using vercel.json config)
- ✅ Deploy to your live URL
- ✅ Send you deployment notifications

### 3. Your Deployment URLs

After setup, you'll have:
- **Production URL**: `https://your-project-name.vercel.app`
- **Custom domain** (optional): `mendonbend.com`
- **Branch previews**: Every PR gets a preview URL

### 4. Custom Domain Setup (Optional)

1. **In Vercel Dashboard** → Your Project → Settings → Domains
2. **Add your domain**: `mendonbend.com`
3. **Configure DNS** (in your domain provider):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```
4. **Vercel will auto-provision SSL**

### 5. Environment Variables (If needed later)

For any future API keys or secrets:
1. **Vercel Dashboard** → Project → Settings → Environment Variables
2. **Add variables** like:
   - `OPENAI_API_KEY` (for future AI features)
   - `STRIPE_PUBLISHABLE_KEY` (for payments)
   - `ANALYTICS_ID` (for tracking)

### 6. Deployment Status

Monitor deployments:
- **Vercel Dashboard**: Real-time deployment logs
- **GitHub**: Deployment status on commits
- **Email notifications**: Success/failure alerts

### 7. Performance Features

Your vercel.json includes:
- ✅ **Clean URLs**: `/about` instead of `/about.html`
- ✅ **Caching**: Optimized for static assets
- ✅ **Security headers**: XSS protection, content sniffing
- ✅ **Redirects**: SEO-friendly URL handling
- ✅ **Edge network**: Global CDN for fast loading

### 8. Troubleshooting

If deployment fails:

1. **Check build logs** in Vercel dashboard
2. **Verify file paths** are correct
3. **Test locally** with:
   ```bash
   npx vercel dev
   ```
4. **Check vercel.json** syntax

### 9. Quick Commands

```bash
# Test deployment locally
npx vercel dev

# Manual deployment (if needed)
npx vercel --prod

# Check deployment status
npx vercel list

# View deployment logs
npx vercel logs
```

### 10. Workflow Summary

```
Local Development → Git Push → GitHub → Vercel Webhook → Auto Deploy → Live Site
```

**Typical deployment time**: 30-60 seconds

---

## 🎉 You're All Set!

Once connected, your workflow becomes:
1. **Edit code** locally
2. **Commit & push** to GitHub
3. **Vercel automatically deploys**
4. **Live site updates** in under a minute

Your MendOnBend platform will always be up-to-date with your latest changes! 🕉️✨
