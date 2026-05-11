# GlamWorld — User Guide

## Main Link
The app runs at: **http://localhost:3000**

This is the homepage. Everyone starts here.

---

## How Roles Work

When someone registers on GlamWorld, they are automatically given the **CONTESTANT** role.

There is no "become admin" button. The **Admin role is set manually in the database** by the developer.

| Role | How you get it | What you see differently |
|---|---|---|
| **ADMIN** | Developer sets it in the database | Sees `/admin` link, can manage everything |
| **CONTESTANT** | Automatic when you register | Sees Dashboard, can join competitions |
| **PUBLIC** | Default if no profile created | Can browse and vote only |

### How to check your role?
There is no "you are an admin" label on screen yet. The way to know:
- If you can visit **http://localhost:3000/admin** and see the dashboard → you are Admin
- If it redirects you to the homepage → you are not Admin

### How to make someone Admin?
Open terminal and run:
```
psql -U postgres -d glamworld
```
Then run:
```sql
UPDATE "User" SET role = 'ADMIN' WHERE email = 'youremail@gmail.com';
```
Then `\q` to exit.

---

## All Links with full URL

### Everyone (no login needed)
| What | Link |
|---|---|
| Homepage | http://localhost:3000 |
| All Competitions | http://localhost:3000/competitions |
| Login | http://localhost:3000/login |
| Register | http://localhost:3000/register |

### Contestant (must be logged in)
| What | Link |
|---|---|
| My Dashboard | http://localhost:3000/dashboard |
| My Profile | http://localhost:3000/dashboard/profile |

### Admin (must be logged in + Admin role)
| What | Link |
|---|---|
| Admin Dashboard | http://localhost:3000/admin |
| Create Competition | http://localhost:3000/admin/create-competition |

> **Note:** Competition and contestant profile links include an ID in the URL.
> Example: `http://localhost:3000/competitions/cmp04b1hi00009gs14oy0uxbm`
> You get these links by clicking from the competition list or admin dashboard.

---

## Who uses which link?

### Public User (no account)
1. Visit **http://localhost:3000**
2. Browse competitions at **http://localhost:3000/competitions**
3. To vote → go to **http://localhost:3000/register** and create an account first

### Contestant
1. Register at **http://localhost:3000/register**
2. Fill profile at **http://localhost:3000/dashboard/profile**
3. Join competitions at **http://localhost:3000/competitions**
4. Share your profile link (example: `http://localhost:3000/contestants/your-id`)

### Admin
1. Login at **http://localhost:3000/login**
2. Go to **http://localhost:3000/admin** — this is your control panel
3. Create a competition at **http://localhost:3000/admin/create-competition**
4. Click any competition title in the admin dashboard to open it and approve/score contestants

---

## Step by Step Flows

### Admin creates and runs a competition
```
1. http://localhost:3000/admin/create-competition  → fill details → Create
2. http://localhost:3000/admin                     → click competition → Mark as Active
3. Wait for contestants to join
4. http://localhost:3000/admin/competitions/[id]   → Approve or Reject each contestant
5. For Jury type → enter scores on the same page
6. When done → click Mark as Completed
```

### Contestant joins a competition
```
1. http://localhost:3000/register         → create account
2. http://localhost:3000/dashboard/profile → fill all details + upload photos
3. http://localhost:3000/competitions     → open a competition → Join Competition
4. Wait for admin to approve
5. Once approved → your name appears in the competition leaderboard
```

### Public user votes
```
1. http://localhost:3000/register     → create account (required to vote)
2. http://localhost:3000/competitions → open a PUBLIC VOTING competition
3. Click Vote next to a contestant
4. One vote per competition — cannot change after voting
```

---

## Competition Types

### Public Voting
- Anyone with an account can vote
- One vote per person per competition
- Leaderboard updates instantly after voting
- Winner = contestant with most votes

### Jury Based
- Admin scores each approved contestant
- 5 categories: **Presentation, Confidence, Styling, Profile, Professionalism**
- Each category scored from **0 to 10**
- Overall score = average of 5 (shown as X.XX / 10)
- Winner = contestant with highest overall score

---

## Contestant Public Profile
Every contestant has a shareable profile link.

Example: **http://localhost:3000/contestants/[contestant-id]**

To find your link:
1. Go to **http://localhost:3000/competitions**
2. Open any competition you are approved in
3. Click your own name — that is your public profile
4. Click **Share Profile** — the link is copied to your clipboard
5. Send it to anyone — they can view it without logging in

Profile shows: photo, bio, stats, competition history, scores/votes

---

## Competition Status Flow
```
UPCOMING → ACTIVE → COMPLETED
```
- **UPCOMING** — visible but contestants cannot join yet (actually they can, admin controls this)
- **ACTIVE** — open for joining and voting/scoring
- **COMPLETED** — closed, results are final

Admin changes status using the button on the competition page in admin panel.

---

## Tech Stack (for developers)
- **Frontend:** Next.js 16, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL + Prisma
- **Auth:** NextAuth v5 (Google + Email/Password)
- **Image Storage:** Cloudinary
