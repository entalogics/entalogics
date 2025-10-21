# Entalogics Agency Website

This is the official marketing website for Entalogics, a full-stack development agency specializing in custom software, AI applications, and browser development. The site is built with Next.js, Tailwind CSS, and TypeScript to be fast, responsive, and modern.

![Entalogics Homepage](https://user-images.githubusercontent.com/your-image-url.png) <!-- Replace with a real screenshot URL -->

## ✨ Features

- **Fully Responsive Design**: Looks great on all devices, from mobile to desktop.
- **Dark/Light Mode**: User-selectable theme that persists across sessions.
- **Interactive Hero Section**: Features a 3D rotating tag cloud of technologies.
- **Comprehensive Quote Form**: A multi-step form for users to request a quote, with client-side and server-side validation.
- **Email Notifications**: Automatically sends quote details to the admin and a confirmation email to the user via Resend.
- **Embedded Scheduling**: Integrates with Cal.com for easy discovery call scheduling.
- **Smooth Animations**: Uses Framer Motion for subtle and professional animations.
- **Clean & Modern UI**: Styled with Tailwind CSS for a consistent and beautiful interface.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Email API**: [Resend](https://resend.com/)
- **Scheduling**: [Cal.com](https://cal.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🛠️ Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/entalogics/entalogics.git
    cd entalogics-website
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of your project and add the following variables.

    ```env
    # Your API key from Resend for sending quote emails
    RESEND_API_KEY=your_resend_api_key

    # The "from" email address (must be a verified domain in Resend)
    EMAIL_USER=quote@yourdomain.com
    ```

### Running the Development Server

To start the local development server, run:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🌐 Deployment

This site is optimized for deployment on [Vercel](https://vercel.com/).

1.  **Connect your GitHub repository** to a new Vercel project.
2.  **Add your environment variables** from `.env.local` to the Vercel project settings under **Settings > Environment Variables**.
3.  Vercel will automatically build and deploy your site on every push to the main branch.

## 📁 Project Structure

```
.
├── pages/                # Next.js pages and API routes
│   ├── api/
│   │   └── quote.ts      # API endpoint for quote form
│   ├── _app.tsx          # Global App component
│   ├── _document.tsx     # Custom Document for fonts/scripts
│   ├── index.tsx         # Homepage
│   └── quote.tsx         # Request a Quote page
│
├── src/                  # Source files
│   ├── components/       # Reusable React components
│   ├── context/          # React Context (e.g., ThemeContext)
│   └── data/             # Static data for components
│
├── public/               # Static assets (images, fonts)
├── tailwind.config.js    # Tailwind CSS configuration
└── next.config.js        # Next.js configuration
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/entalogics/entalogics/issues) if you want to contribute.
