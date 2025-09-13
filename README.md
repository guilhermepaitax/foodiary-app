# Foodiary App 🍏

A React Native mobile application built with Expo for tracking and managing your diet in a simple and intuitive way.

## 📱 About

Foodiary is a diet control application that helps users manage their eating habits and track their nutritional journey. The app provides a clean, modern interface with a focus on simplicity and user experience.

## ✨ Features

- **Welcome Screen**: Beautiful onboarding experience with background imagery
- **User Authentication**: Account creation and login functionality
- **Modern UI**: Clean design with custom components and theming
- **Cross-Platform**: Works on iOS, Android, and Web
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **UI Components**: Custom component library
- **Styling**: React Native StyleSheet with theme system
- **Fonts**: Host Grotesk (Google Fonts)

## 📦 Dependencies

### Core Dependencies

- `expo`: ~54.0.6 - Expo SDK
- `react`: 19.1.0 - React library
- `react-native`: 0.81.4 - React Native framework
- `react-native-safe-area-context`: 5.6.1 - Safe area handling
- `react-native-svg`: 15.12.1 - SVG support

### Font Dependencies

- `@expo-google-fonts/host-grotesk`: ^0.4.1 - Custom font family
- `expo-font`: ~14.0.8 - Font loading

### Development Dependencies

- `typescript`: ~5.9.2 - TypeScript compiler
- `eslint`: ^9.35.0 - Code linting
- `@types/react`: ~19.1.13 - React type definitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd foodiary-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm start
   # or
   npm start
   ```

### Running the App

- **Web**: `pnpm web` or `npm run web`
- **iOS**: `pnpm ios` or `npm run ios`
- **Android**: `pnpm android` or `npm run android`
- **With tunnel**: `pnpm start` (includes tunnel for external access)

## 📁 Project Structure

```
foodiary-app/
├── src/
│   ├── ui/
│   │   ├── app.tsx              # Main app component
│   │   ├── components/          # Reusable UI components
│   │   │   ├── app-text.tsx     # Custom text component
│   │   │   ├── button/          # Button component
│   │   │   └── logo.tsx         # Logo component
│   │   ├── screens/             # App screens
│   │   ├── styles/              # Styling and theming
│   │   │   └── theme/           # Theme configuration
│   │   └── assets/              # Images and static assets
│   └── app/                     # App logic (future features)
├── assets/                      # Expo assets (icons, splash screens)
├── app.json                     # Expo configuration
├── package.json                 # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design System

The app uses a custom design system with:

- **Colors**: Lime-based palette with support colors
- **Typography**: Host Grotesk font family with multiple weights
- **Components**: Reusable UI components with consistent styling
- **Theme**: Centralized theme configuration

## 🔧 Development

### Type Checking

```bash
pnpm typecheck
```

### Code Linting

The project uses ESLint for code quality:

```bash
pnpm lint
```

### Path Aliases

The project uses TypeScript path aliases:

- `@ui/*` → `./src/ui/*`
- `@app/*` → `./src/app/*`

## 📱 Platform Support

- ✅ iOS
- ✅ Android

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️
