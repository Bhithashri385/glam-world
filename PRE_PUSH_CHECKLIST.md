# Pre-Push to GitHub Checklist

## ✅ Security & Environment

- [ ] `.env` file is NOT tracked in git (verify: `git ls-files | grep .env`)
- [ ] `.env.local` created with YOUR actual local credentials
- [ ] `.env.example` contains placeholder values ONLY
- [ ] All credentials in `.env` and `.env.local` are machine-local
- [ ] No passwords/secrets visible in any tracked files

**Verify:**
```bash
git ls-files | grep -E "env|secret|password|key"
# Should return NOTHING
```

## ✅ Code Organization

- [ ] `/src/app/admin` - Admin pages & routes
- [ ] `/src/app/competitions` - Public competition pages
- [ ] `/src/app/contestants` - Public contestant pages
- [ ] `/src/app/dashboard` - Contestant dashboard
- [ ] `/src/app/api` - All API routes
- [ ] `/src/lib` - Utilities (auth, db, upload, etc.)
- [ ] `/src/components` - Reusable React components
- [ ] `/prisma/schema.prisma` - Database schema
- [ ] `.gitignore` - Excludes `.env`, `node_modules`, `.next`, `.build`

## ✅ Database

- [ ] Schema has all 7 tables: User, Contestant, ContestantImage, Competition, CompetitionEntry, Vote, ScoreResult
- [ ] All enums defined: Role, CompetitionType, CompetitionStatus, ImageType, EntryStatus
- [ ] Unique constraints for duplicate vote prevention: `@@unique([competitionId, voterId])`
- [ ] Foreign key relationships properly defined

## ✅ Authentication

- [ ] NextAuth configured with Google OAuth
- [ ] Email/Password login with bcrypt hashing
- [ ] User roles: ADMIN, CONTESTANT, PUBLIC
- [ ] Protected routes for admin endpoints
- [ ] Session management via NextAuth

## ✅ Features

- [ ] Registration API: `/api/auth/register`
- [ ] Login/Google OAuth: `/api/auth/[...nextauth]`
- [ ] Competitions API: `/api/competitions`, `/api/competitions/[id]`
- [ ] Contestants API: `/api/contestants`, `/api/contestants/[id]`
- [ ] Upload to DigitalOcean Spaces: `/api/upload`
- [ ] Voting system: `/api/vote` with duplicate prevention
- [ ] Scoring: `/api/score` with 5-category system
- [ ] Leaderboard components ready

## ✅ Installation & Deployment

Package.json has:
- [ ] `npm run dev` - Development server
- [ ] `npm run build` - Production build
- [ ] `npm start` - Production server
- [ ] `npm run lint` - Linting
- [ ] `npm run security:scan` - Secret scanner

## 📝 Required for Deployment

When deploying to DigitalOcean:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run migrations:**
   ```bash
   npx prisma migrate deploy
   ```

3. **Build:**
   ```bash
   npm run build
   ```

4. **Start with PM2:**
   ```bash
   pm2 start npm --name pageant-app -- start
   ```

## 🔐 Environment Variables Needed on Server

```
DATABASE_URL=postgresql://user:pass@host:5432/glamworld
NEXTAUTH_SECRET=<long-random-secret>
NEXTAUTH_URL=https://yourdomain.com
AUTH_SECRET=<long-random-secret>
AUTH_URL=https://yourdomain.com
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
DO_SPACES_ENDPOINT=https://nyc3.digitaloceanspaces.com
DO_SPACES_REGION=nyc3
DO_SPACES_BUCKET=glamworld
DO_SPACES_ACCESS_KEY=<your-spaces-access-key>
DO_SPACES_SECRET_KEY=<your-spaces-secret-key>
APP_URL=https://yourdomain.com
```

## 🚀 Final Push Commands

```bash
# 1. Verify no secrets are committed
git diff --cached

# 2. Check git status
git status

# 3. Stage all changes
git add .

# 4. Create descriptive commit
git commit -m "Complete MVP implementation: auth, profiles, competitions, voting, scoring, leaderboard"

# 5. Push to GitHub
git push origin main
```

---

✅ **All items checked? You're ready to push!**
