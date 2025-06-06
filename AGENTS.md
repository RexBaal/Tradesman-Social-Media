# AGENTS.md

## Project: SkillTradeConnect (Tradesman Social Media Platform)

Welcome to the automation and agent workflow for this repository.  
This file documents all automated agents, what they do, and how they should be run.

---

## 🧑‍🔧 Agents List

### 1. **Code Linting & Formatting Agent**
- **Purpose:** Keep code clean, readable, and bug-free.
- **Runs:** On every push and pull request.
- **Commands:**
  - `npm run lint` (ESLint)
  - `npm run format` (Prettier)

### 2. **Testing Agent**
- **Purpose:** Ensure all features work as intended and new code doesn’t break anything.
- **Runs:** On all feature branches and before deploys.
- **Commands:**
  - `npm test`
  - Optionally, `npm run test:e2e` for end-to-end tests

### 3. **Build Agent**
- **Purpose:** Ensure the Next.js site builds before deployment.
- **Runs:** On every push to main or staging, and before deploys.
- **Commands:**
  - `npm run build`

### 4. **Security Agent**
- **Purpose:** Scan dependencies for vulnerabilities.
- **Runs:** On any update to `package.json` or `package-lock.json`.
- **Commands:**
  - `npm audit`

### 5. **Environment/Secrets Monitor**
- **Purpose:** Alert on changes to environment files or secrets.
- **Runs:** On every commit that touches `.env`, `.env.local`, or similar.
- **Action:** Notifies the owner and requires manual review.

### 6. **Documentation Agent**
- **Purpose:** Enforce documentation for new features, pages, or API endpoints.
- **Runs:** On feature PRs.
- **Action:** Fails PR if no matching docs are added for new public APIs.

---

## 🟦 Workflow Overview

1. **Every code push or PR triggers:**
    - Lint/format check
    - Tests
    - Build check
2. **On `main`/production branches:**
    - Full build/test/audit before deploy
3. **On secrets or env changes:**
    - Manual review required

---

## 📝 **How to Trigger Agents Manually**

```bash
npm run lint
npm run format
npm test
npm run build
npm audit
