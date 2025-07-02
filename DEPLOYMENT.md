# Deploying to Cloudflare Pages

This guide provides step-by-step instructions for deploying your Kimi Daily Byte blog to Cloudflare Pages.

## Prerequisites

1. A [Cloudflare account](https://dash.cloudflare.com/sign-up)
2. Your code pushed to a GitHub repository

## Deployment Steps

### 1. Prepare Your Repository

Make sure your repository contains all the necessary files:

- All project files (including the `.cloudflare` directory)
- Commit and push all changes to your GitHub repository

### 2. Connect to Cloudflare Pages

1. Log in to your [Cloudflare dashboard](https://dash.cloudflare.com)
2. In the sidebar, click on **Pages**
3. Click **Create a project**
4. Select **Connect to Git**

### 3. Configure Your Build Settings

1. Select your GitHub account and repository
2. Configure your build settings:
   - **Project name**: `kimi-daily-byte` (or your preferred name)
   - **Production branch**: `main` (or your default branch)
   - **Framework preset**: Select **Astro**
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables**: Add any if needed (none required by default)

3. Click **Save and Deploy**

### 4. Wait for Deployment

Cloudflare Pages will now build and deploy your site. This process typically takes a few minutes. You can monitor the progress in the Cloudflare dashboard.

### 5. Access Your Deployed Site

Once the deployment is complete, you can access your site at the provided URL, typically in the format:
`https://your-project-name.pages.dev`

## Custom Domain Setup (Optional)

To use a custom domain with your Cloudflare Pages site:

1. In your Cloudflare Pages project, click on **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain name and follow the instructions
4. If your domain is already managed by Cloudflare, it will be configured automatically
5. If not, you'll need to update your DNS settings with your domain registrar

## Continuous Deployment

Cloudflare Pages automatically deploys your site when you push changes to your repository. Each commit to your main branch will trigger a new production deployment.

### Preview Deployments

When you create a pull request, Cloudflare Pages will create a preview deployment. This allows you to test changes before merging them into your main branch.

## Troubleshooting

### Build Failures

If your build fails, check the build logs in the Cloudflare dashboard for error messages. Common issues include:

- Missing dependencies
- Syntax errors in your code
- Incorrect build configuration

### Custom Domain Issues

If you're having trouble with your custom domain:

1. Verify that your DNS records are correctly configured
2. Check that your domain is properly added in the Cloudflare Pages settings
3. Allow time for DNS propagation (up to 48 hours in some cases)

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)
- [Cloudflare Pages GitHub Integration](https://developers.cloudflare.com/pages/platform/git-integration/)
