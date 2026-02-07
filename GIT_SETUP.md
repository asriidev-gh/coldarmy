# Commit and push to Git

Your `.gitignore` is set so `.env.local` (and other secrets) are **not** committed.

## One-time: set your Git identity (if not set already)

```powershell
git config --global user.email "andy.radam@gmail.com"
git config --global user.name "Your Name"
```

## If you see lock errors ("could not lock config file", "index.lock")

Run in PowerShell from the project folder:

```powershell
cd d:\Code\ColdArmy\website
Remove-Item -Force .git\config.lock -ErrorAction SilentlyContinue
Remove-Item -Force .git\index.lock -ErrorAction SilentlyContinue
```

Then run the steps below.

## First-time: init, commit, add remote, push

```powershell
cd d:\Code\ColdArmy\website
git init
git add .
git commit -m "Initial commit: Cold Army aircon website"
```

Add your remote (use your own GitHub repo URL):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/cold-army-website.git
```

Push (use `main` or `master` depending on your default branch):

```powershell
git branch -M main
git push -u origin main
```

## Later: commit and push changes

```powershell
cd d:\Code\ColdArmy\website
git add .
git commit -m "Your commit message"
git push
```

---

**Important:** Never commit `.env.local` — it contains your Resend API key. It’s already in `.gitignore`.
