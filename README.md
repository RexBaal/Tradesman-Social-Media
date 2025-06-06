# SkillTradeConnect

SkillTradeConnect is a simple Next.js and TypeScript application designed for tradespeople to share jobs and connect with each other. This project serves as the basis for a future social platform.

## Setup

1. Install [Node.js](https://nodejs.org/) (version 18 or later).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

## Building and Running

To create a production build, run:

```bash
npm run build
```

Then start the compiled app with:

```bash
npm start
```

Use `npm run type-check` if you want to run the TypeScript compiler in `noEmit` mode.

## Project Structure

- `pages/` – Next.js pages. Visit `/sign-in` and `/sign-up` to see the placeholder authentication screens.
- `public/images/` – Static images used by the site. Add any new images here and reference them as `/images/<file>` in your components.

## Contributing

Feel free to open issues or pull requests if you have suggestions or improvements for SkillTradeConnect.
