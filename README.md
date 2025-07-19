# Women in Tech Bordeaux

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/women-in-tech-bordeaux)

The official website for Women in Tech Bordeaux community events and initiatives.

🌐 [Visit the website](https://wit-bdx.com)

## 🚀 Project Structure

```text
/
├── public/              # Static assets
│   ├── fonts/           # Custom fonts
│   └── favicon.svg      # Site favicon
├── src/
│   ├── assets/          # Images and media files
│   │   ├── events/      # Event photos
│   │   ├── speakers/    # Speaker photos
│   │   └── sponsors/    # Sponsor logos
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections (Markdown)
│   │   ├── events/      # Event data
│   │   └── organizers/  # Organizer profiles
│   ├── layouts/         # Page layouts
│   └── pages/           # Page components
│       ├── events/      # Event pages
│       └── home/        # Home page sections
└── package.json
```

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) (v1.22 or higher)

> **Important**: This project uses Yarn as its package manager. Please do not use npm to install dependencies as this will generate a package-lock.json file.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `yarn`           | Installs dependencies                            |
| `yarn dev`       | Starts local dev server at `localhost:4321`      |
| `yarn build`     | Build your production site to `./dist/`          |
| `yarn preview`   | Preview your build locally, before deploying     |
| `yarn astro ...` | Run CLI commands like `astro add`, `astro check` |

## 💻 Development

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/women-in-tech.git
   cd women-in-tech
   ```

2. Install dependencies

   ```bash
   yarn
   ```

3. Start the development server

   ```bash
   yarn dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 🖼️ Adding Content

### Adding a new event

1. Create a new markdown file in `src/content/events/`
2. Add event photos in `src/assets/events/{event-name}/`
3. Reference speaker photos from `src/assets/speakers/`

### Adding a new speaker

Add speaker photos in `src/assets/speakers/` using the naming convention `firstname-lastname.jpg`

## 🚀 Deployment

The site is automatically deployed to Netlify when changes are pushed to the main branch.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👀 Want to learn more about Astro?

Feel free to check [Astro documentation](https://docs.astro.build) or join their [Discord server](https://astro.build/chat).
