# SocialMediaApp - Modern React Social Network

A full-featured social media application built with **React**, **TypeScript**, **Tailwind CSS**, and **Appwrite** backend. This project demonstrates professional-grade frontend development with modern best practices, including real-time data management, authentication, and media handling.

## 🌟 Features

### User Management
- **Authentication System** - Secure sign-up and sign-in with email/password
- **User Profiles** - Create, view, and edit user profiles with custom avatars
- **User Discovery** - Browse all users and discover new connections
- **Profile Updates** - Update name, bio, email, and profile pictures

### Post Management
- **Create Posts** - Share content with images, captions, location, and tags
- **Edit Posts** - Modify post details after creation
- **Delete Posts** - Remove unwanted posts
- **Post Details** - View full post information with engagement metrics
- **Rich Media Support** - Upload and display images with drag-and-drop functionality

### Social Features
- **Home Feed** - Personalized feed with recent posts and top creators
- **Explore** - Discover posts from all users with infinite scroll
- **Like Posts** - Engage with content through likes
- **Save Posts** - Bookmark posts for later viewing
- **Top Creators** - See trending creators on the home feed

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v7** - Client-side routing

### State Management & Data Fetching
- **TanStack React Query v5** - Server state management with caching and synchronization
- **React Context API** - Global authentication state
- **React Hook Form** - Efficient form state management

### UI Components & Form Handling
- **Radix UI** - Headless UI components (Button, Input, Label, Toast)
- **Zod** - TypeScript-first schema validation
- **Lucide React** - Beautiful icon library

### Backend & Database
- **Appwrite** - Backend-as-a-Service (BaaS) for database, authentication, and storage
- **Appwrite SDK** - Official client library for API interactions

### Development Tools
- **ESLint** - Code quality and style enforcement
- **TypeScript ESLint** - TypeScript linting
- **Autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS processing

## 📁 Project Structure

```
src/
├── _auth/                    # Authentication pages and forms
│   ├── AuthLayout.tsx       # Auth page layout wrapper
│   └── forms/
│       ├── SigninForm.tsx   # Login form
│       └── SignupForm.tsx   # Registration form
├── _root/                    # Main app pages
│   ├── RootLayout.tsx       # Main layout with sidebars
│   └── pages/
│       ├── Home.tsx          # Home feed with recent posts
│       ├── Explore.tsx       # Post discovery page
│       ├── CreatePost.tsx    # Create new post
│       ├── EditPost.tsx      # Edit existing post
│       ├── PostDetails.tsx   # Full post view
│       ├── Profile.tsx       # User profile page
│       ├── AllUsers.tsx      # Browse all users
│       ├── Saved.tsx         # Saved posts
│       └── UpdateProfile.tsx # Edit user profile
├── components/
│   ├── forms/
│   │   └── PostForm.tsx      # Reusable post creation/edit form
│   ├── shared/               # Reusable components
│   │   ├── BottomBar.tsx     # Mobile navigation
│   │   ├── LeftSidebar.tsx   # Main navigation sidebar
│   │   ├── TopBar.tsx        # Header with logo/auth
│   │   ├── PostCard.tsx      # Post display component
│   │   ├── PostStats.tsx     # Like/save counters
│   │   ├── GridPostList.tsx  # Grid layout for posts
│   │   ├── UserCard.tsx      # User profile card
│   │   ├── FileUploader.tsx  # Image upload handler
│   │   └── Loader.tsx        # Loading spinner
│   └── ui/                   # Radix UI components
│       ├── button.tsx
│       ├── input.tsx
│       ├── form.tsx
│       ├── label.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       └── toaster.tsx
├── lib/
│   ├── appwrite/
│   │   ├── api.ts            # Appwrite API service layer
│   │   └── config.ts         # Appwrite configuration
│   ├── react-query/
│   │   ├── queryAndMutations.ts # TanStack Query hooks
│   │   ├── queryKeys.ts      # Query key management
│   │   └── QueryProvider.tsx # Query client provider
│   ├── validation/
│   │   └── index.ts          # Zod validation schemas
│   └── utils.ts              # Utility functions
├── context/
│   └── AuthContext.tsx       # Authentication context provider
├── hooks/
│   ├── use-toast.ts          # Toast notification hook
│   └── useDebounce.ts        # Debounce custom hook
├── types/
│   └── index.ts              # TypeScript type definitions
├── constants/
│   └── index.ts              # App constants and routes
├── App.tsx                   # Main app component with routes
├── main.tsx                  # React entry point
└── index.css                 # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Appwrite account (or self-hosted instance)

### Installation

1. **Clone the repository**
   ```bash
   git clonehttps://github.com/Khizar-cyber-dev/ReactJs-Social-Media-app
   cd ReactJs-Social-Media-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Appwrite**
   - Create a `.env.local` file in the project root:
   ```env
   VITE_APPWRITE_ENDPOINT=https://your-appwrite-instance.com/v1
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_STORAGE_ID=your_storage_id
   VITE_APPWRITE_USER_COLLECTION_ID=your_user_collection_id
   VITE_APPWRITE_POST_COLLECTION_ID=your_post_collection_id
   VITE_APPWRITE_SAVES_COLLECTION_ID=your_saves_collection_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 🏗️ Architecture & Patterns

### State Management
- **Global Auth State**: Managed via `AuthContext` for user authentication status
- **Server State**: Handled by React Query for API data caching and synchronization
- **Form State**: React Hook Form for optimal form performance

### API Layer
- **Service Pattern**: `lib/appwrite/api.ts` encapsulates all backend calls
- **React Query Hooks**: Custom hooks in `lib/react-query/queryAndMutations.ts` for data fetching
- **Query Keys**: Centralized in `queryKeys.ts` for consistency

### Validation
- **Zod Schemas**: Type-safe form validation with runtime type checking
- **Schemas**: Sign-up, sign-in, post creation, and profile update validations

### Component Organization
- **Layout Components**: `AuthLayout`, `RootLayout` for page structure
- **Shared Components**: Reusable UI elements (PostCard, UserCard, etc.)
- **Form Components**: Dedicated form handling with validation
- **UI Components**: Radix UI primitives for consistent design

## 🔐 Security Features

- ✅ Password minimum requirements (8 characters)
- ✅ Email validation
- ✅ JWT-based authentication via Appwrite
- ✅ Protected routes (private routes require authentication)
- ✅ CORS configuration
- ✅ Input validation and sanitization

## 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Responsive layouts for all screen sizes
- Bottom navigation for mobile devices
- Side navigation for desktop views
- Grid-based layouts that adapt to viewport

## ⚡ Performance Optimizations

- ✅ **Code Splitting**: Route-based lazy loading via React Router
- ✅ **Caching**: React Query caches frequently accessed data
- ✅ **Infinite Scroll**: Efficient loading of large datasets
- ✅ **Image Optimization**: Lazy loading images with intersection observer
- ✅ **Bundle Size**: Vite's efficient bundling and tree-shaking
- ✅ **TypeScript**: Compile-time type checking prevents runtime errors

## 🎨 Styling

- **Tailwind CSS**: Utility-first styling framework
- **Custom CSS**: Global styles in `index.css`
- **Responsive Classes**: Mobile-first, breakpoint-based design
- **Animation**: `tailwindcss-animate` for smooth transitions

## 🧪 Type Safety

The entire project is written in **TypeScript** with:
- Strict type checking enabled
- Comprehensive type definitions in `src/types/index.ts`
- Type-safe API responses from Appwrite
- Zod runtime validation that generates TypeScript types

## 📚 Key Files

| File | Purpose |
|------|---------|
| [App.tsx](src/App.tsx) | Main app component with route definitions |
| [AuthContext.tsx](src/context/AuthContext.tsx) | Global authentication state management |
| [api.ts](src/lib/appwrite/api.ts) | Backend API service layer |
| [queryAndMutations.ts](src/lib/react-query/queryAndMutations.ts) | React Query hooks for data fetching |
| [validation/index.ts](src/lib/validation/index.ts) | Zod validation schemas |
| [types/index.ts](src/types/index.ts) | Type definitions |
| [vite.config.ts](vite.config.ts) | Vite build configuration |
| [tailwind.config.js](tailwind.config.js) | Tailwind CSS configuration |

## 🚀 Future Enhancements

- [ ] Real-time notifications with Appwrite Realtime
- [ ] Comment system on posts
- [ ] Follow/unfollow functionality
- [ ] Direct messaging
- [ ] Post analytics and insights
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA) support
- [ ] Unit and integration tests with Vitest
- [ ] E2E tests with Cypress/Playwright

## 📝 Environment Variables

Create a `.env.local` file with the following variables:

```env
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_STORAGE_ID=your_storage_id
VITE_APPWRITE_USER_COLLECTION_ID=your_user_collection_id
VITE_APPWRITE_POST_COLLECTION_ID=your_post_collection_id
VITE_APPWRITE_SAVES_COLLECTION_ID=your_saves_collection_id
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Author: Khizar Asim
Email: hafizkhizarasim7@gmail.com
GitHub: https://github.com/Khizar-cyber-dev
LinkedIn: https://www.linkedin.com/in/khizar-asim-developer

---

**Happy coding! 🎉**
