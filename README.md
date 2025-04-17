# Free APIs Directory

A modern, searchable directory of free public APIs built with Next.js. This application provides an easy way to discover and explore a collection of over 1,400 free APIs across various categories.

![Free APIs Directory](https://img.shields.io/badge/APIs-1400%2B-brightgreen)
![Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black)
![License](https://img.shields.io/badge/License-MIT-blue)

## Features

- **Comprehensive API Collection**: Access to 1,400+ free APIs across multiple categories
- **Advanced Search**: Find APIs by name, description, or category
- **Filtering Options**: Filter by HTTPS support, authentication requirements, and CORS compatibility
- **Responsive Design**: Built with Tailwind CSS for a seamless experience on all devices
- **Category Browsing**: Explore APIs organized by categories like Animals, Development, Finance, and more
- **Featured APIs**: Discover highlighted APIs on the homepage

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/habitual69/free-apis.git
   cd free-apis
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
├── public/             # Static assets
├── src/                # Source code
│   ├── app/            # Next.js App Router
│   │   ├── api/        # API routes
│   │   │   └── apis/   # API endpoint serving resources.json
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   └── page.js     # Home page
├── resources.json      # API data source
└── ...                 # Configuration files
```

## API Usage

### Endpoints

- **GET /api/apis**: Returns the complete list of APIs from the resources.json file

### Example Response

```json
{
  "count": 1467,
  "entries": [
    {
      "API": "Cat Facts",
      "Description": "Daily cat facts",
      "Auth": "",
      "HTTPS": true,
      "Cors": "no",
      "Link": "https://alexwohlbruck.github.io/cat-facts/",
      "Category": "Animals"
    },
    // More API entries...
  ]
}
```

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Headless UI](https://headlessui.com/) - Unstyled, accessible UI components
- [Lucide React](https://lucide.dev/) - Icon library

## Deployment

The application can be easily deployed on Vercel:

```bash
npm run build
# or
yarn build
```

For more details on deployment, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Add or update APIs in the resources.json file
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Data sourced from various public API directories
- Built with Next.js and React
- Styled with Tailwind CSS
