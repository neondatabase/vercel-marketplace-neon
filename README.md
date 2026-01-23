<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://neon.com/brand/neon-logo-dark-color.svg?new">
  <source media="(prefers-color-scheme: light)" srcset="https://neon.com/brand/neon-logo-light-color.svg?new">
  <img width="250px" alt="Neon Logo" src="https://neon.com/brand/neon-logo-dark-color.svg?new">
</picture>

# Neon Postgres

A minimal template for building full-stack React applications using Next.js, Vercel, and Neon.

## Getting Started

Click the "Deploy" button to clone this repo, create a new Vercel project, setup the Neon integration, and provision a new Neon database:

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fneondatabase-labs%2Fvercel-marketplace-neon%2Ftree%2Fmain&project-name=my-vercel-neon-app&repository-name=my-vercel-neon-app&products=[{%22type%22:%22integration%22,%22integrationSlug%22:%22neon%22,%22productSlug%22:%22neon%22,%22protocol%22:%22storage%22}])

Once the process is complete, you can clone the newly created GitHub repository and start making changes locally.

## Demo

View live demo: [vercel-marketplace-neon.vercel.app](https://vercel-marketplace-neon.vercel.app/)

![Vercel with Neon](./docs/home.png)

## Local Setup

### Installation

Install the dependencies:

```bash
npm install
```

You can use the package manager of your choice. For example, Vercel also supports `bun install` out of the box.

### Development

#### Create a .env file in the project root

```bash
cp .env.example .env
```

#### Get your database URL

Run `vercel env pull` to fetch the environment variables from your Vercel project.

Alternatively, obtain the database connection string from the Connection Details widget on the [Neon Dashboard](https://console.neon.tech/) and add it to the `.env` file:

```txt
DATABASE_URL=<postgres://user:pass@host/db>
```

#### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

#### Neon MCP Server

```
npx neonctl@latest init
```

The init command installs the Neon MCP (Model Context Protocol) server and authenticates it to Neon using a Neon API key.

## Learn More

To learn more about Neon, check out the Neon documentation:

- [Neon on Vercel Fluid Compute](https://neon.com/docs/guides/vercel-connection-methods) - learn about differnet datatabase connection methods on Fluid.
- [Neon Documentation](https://neon.tech/docs/introduction) - learn about Neon's features and SDKs.
- [Neon Discord](https://discord.gg/9kf3G4yUZk) - join the Neon Discord server to ask questions and join the community.
- [ORM Integrations](https://neon.tech/docs/get-started-with-neon/orms) - find Object-Relational Mappers (ORMs) that work with Neon.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

Commit and push your code changes to your GitHub repository to automatically trigger a new deployment.
