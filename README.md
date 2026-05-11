# GlamWorld 🌟

A modern web platform for managing beauty and talent competitions with public voting, jury scoring, and contestant management. Built with Next.js, Prisma, and PostgreSQL.

## Features

- **Public Voting System**: Users can vote on entries in public voting competitions
- **Jury Scoring**: Administrators can score entries across multiple categories (Presentation, Confidence, Styling, Profile, Professionalism)
- **Competition Management**: Create and manage competitions with different types (PUBLIC_VOTING, JURY)
- **User Authentication**: NextAuth with Google OAuth and credential-based login
- **Role-Based Access Control**: Admin, Contestant, and Public roles with different permissions
- **Image Management**: Upload and manage contestant profile images to DigitalOcean Spaces
- **Leaderboards & Results**: Track scores and votes with public result sharing

## Tech Stack

- **Framework**: Next.js 15+ with TypeScript
- **Architecture**: App Router + API Route Handlers + Server Actions (where needed)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth v5
- **Storage**: DigitalOcean Spaces (S3-compatible)
- **Styling**: Tailwind CSS
- **Password Hashing**: bcrypt

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- DigitalOcean Spaces account (for file uploads)

### Installation

1. **Clone and install dependencies**:
```bash
npm install
```

2. **Set up environment variables** (`.env`):
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/glamworld"

# Authentication
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"
AUTH_SECRET="your-secret-here"
AUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# DigitalOcean Spaces
DO_SPACES_ENDPOINT="https://nyc3.digitaloceanspaces.com"
DO_SPACES_REGION="nyc3"
DO_SPACES_BUCKET="glamworld"
DO_SPACES_ACCESS_KEY="your-access-key"
DO_SPACES_SECRET_KEY="your-secret-key"
```

3. **Set up the database**:
```bash
npx prisma migrate dev
```

4. **Run the development server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── competitions/  # Competition CRUD
│   │   ├── entries/       # Entry management
│   │   ├── vote/          # Public voting
│   │   ├── score/         # Jury scoring
│   │   └── upload/        # Image uploads
│   ├── admin/             # Admin pages (protected)
│   ├── dashboard/         # Contestant dashboard
│   ├── competitions/      # Public competition browsing
│   ├── login/             # Authentication UI
│   └── register/          # Registration UI
├── components/            # Reusable React components
├── lib/                   # Utility functions
│   ├── auth.ts           # NextAuth configuration
│   ├── db.ts             # Prisma client
│   └── do-spaces.ts      # DigitalOcean Spaces integration
└── generated/            # Prisma generated types
```

## API Routes

### Authentication
- `POST /api/auth/register` - Register new account
- `POST /api/auth/[...nextauth]` - NextAuth endpoints

### Competitions
- `GET /api/competitions` - List all competitions
- `POST /api/competitions` - Create competition (admin)
- `GET /api/competitions/[id]` - Get competition details
- `PUT /api/competitions/[id]` - Update competition (admin)

### Entries
- `GET /api/entries` - List competition entries
- `POST /api/entries` - Create entry (contestant)
- `PATCH /api/entries/[id]` - Update entry status (admin)

### Contestants
- `GET /api/contestants` - Get current authenticated contestant profile
- `POST /api/contestants` - Create/update current authenticated contestant profile
- `GET /api/contestants/[id]` - Get public contestant profile details

### Voting & Scoring
- `POST /api/vote` - Submit a vote (public)
- `POST /api/score` - Submit jury scores (admin)

### File Management
- `POST /api/upload` - Upload image to DigitalOcean Spaces
- `DELETE /api/upload` - Delete uploaded image

## User Roles

| Role | Access | Capabilities |
|------|--------|--------------|
| **PUBLIC** | Public pages | Browse competitions, vote |
| **CONTESTANT** | Dashboard | Join competitions, upload images |
| **ADMIN** | Admin panel | Manage competitions, approve entries, score entries, manage users |

### Setting Admin Role

Open psql terminal:
```bash
psql -U postgres -d glamworld
```

Run:
```sql
UPDATE "User" SET role = 'ADMIN' WHERE email = 'admin@example.com';
```

## Key Pages

### Public
- `/` - Homepage with featured competitions
- `/competitions` - Browse all active competitions
- `/competitions/[id]` - Vote in competitions
- `/login` - Sign in
- `/register` - Create account

### Contestant
- `/dashboard` - View joined competitions and stats
- `/dashboard/competitions` - Browse competition entries
- `/dashboard/profile` - Edit profile and upload images

### Admin
- `/admin` - Dashboard with statistics
- `/admin/create-competition` - Create new competition
- `/admin/competitions/[id]` - Manage specific competition
  - Approve/reject entries
  - Score entries (jury competitions)
  - View results
- `/admin/users` - Dedicated user management page

## Database Schema Highlights

- **User**: Authentication and role management
- **Contestant**: Profile info, images, stats
- **Competition**: Event details, type (PUBLIC_VOTING or JURY)
- **CompetitionEntry**: Submission by contestants
- **Vote**: Public votes with unique constraint (competitionId, voterId)
- **ScoreResult**: Jury category scores and overall score

## Development

### Prisma Commands

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# View database in studio
npx prisma studio

# Reset database (development only)
npx prisma migrate reset
```

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Scan for potential leaked secrets
npm run security:scan
```

## Deployment

### DigitalOcean App Platform

1. Create `.do/app.yaml` for deployment configuration
2. Connect your GitHub repository
3. Set environment variables in app settings
4. Deploy automatically on push

### Vercel

```bash
vercel deploy
```

## Security Before GitHub Push

- Keep real secrets only in local `.env` files (already ignored by `.gitignore`)
- Commit only `.env.example` placeholders, never real keys/passwords
- Run `npm run security:scan` before commit/push
- If any secret was committed at any time, rotate it immediately

## Known Issues & Roadmap

- [ ] User management interface in admin panel
- [ ] Shareable leaderboard/results page
- [ ] Email notifications for competitions
- [ ] Bulk entry upload
- [ ] Advanced filtering and search

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
