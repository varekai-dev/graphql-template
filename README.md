# React + TypeScript + Vite + GraphQL + Zustand + Zod

A modern React application built with best practices, following Feature-Sliced Design (FSD) architecture.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **GraphQL** - API layer with TypeScript codegen
- **Zustand** - State management
- **Zod** - Schema validation
- **Tailwind CSS** - Styling
- **Biome** - Linting and formatting

## Project Structure (FSD Architecture)

```
src/
├── app/           # Application initialization, providers, routing
├── pages/         # Page components
├── widgets/       # Complex UI blocks composed of features
├── features/      # User interactions and business features
├── entities/      # Business entities (models, stores)
└── shared/        # Reusable infrastructure code
    ├── api/       # API clients and GraphQL queries
    ├── config/    # Configuration files
    ├── lib/       # Utility libraries
    └── ui/        # Reusable UI components
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Building

```bash
npm run build
```

### Linting & Formatting

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix

# Format code
npm run format
```

### GraphQL Code Generation

Update `codegen.ts` with your GraphQL endpoint, then:

```bash
# Generate types once
npm run codegen

# Watch mode (regenerate on changes)
npm run codegen:watch
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_GRAPHQL_ENDPOINT=https://your-graphql-endpoint.com/graphql
```

## Path Aliases

The project uses path aliases for cleaner imports:

- `@app/*` → `src/app/*`
- `@pages/*` → `src/pages/*`
- `@widgets/*` → `src/widgets/*`
- `@features/*` → `src/features/*`
- `@entities/*` → `src/entities/*`
- `@shared/*` → `src/shared/*`

## Best Practices

- Follow Feature-Sliced Design architecture principles
- Use TypeScript strict mode
- Validate data with Zod schemas
- Use Zustand for global state management
- Follow Biome linting rules (company-level strictness)
- Implement accessibility features (aria-labels, keyboard navigation)
- Use early returns for cleaner code
- Prefer const over function declarations

## License

MIT