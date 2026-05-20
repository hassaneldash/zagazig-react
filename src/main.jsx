import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  // BrowserRouter,
  // Routes,
  // Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
// import About from './pages/About';
import NotFound404 from './pages/NotFound404';
// import QueryParameters from './pages/QueryParameters';
// import PathParameters from './pages/PathParameters';
import MainLayout from './layouts/MainLayout';
import { LoginForm } from './components/login-form';
import { SignupForm } from './components/signup-form';
import { ThemeProvider } from './context/ThemeContext';
import { Provider } from 'react-redux';
import store from './store/redux/store';
import TaskForm, { createTaskAction } from './forms/TaskForm';
// import Users from './pages/Users';
// import { protectedLoader } from './loaders/protectedLoader';
// import UserDetails from './pages/UserDetails';

const router = createBrowserRouter(
  [
    // Not Found 404 Page => Wildcard Route 404
    {
      path: '*',
      element: <NotFound404 />,
    },
    {
      path: 'login',
      element: <LoginForm />,
    },
    {
      path: 'register',
      element: <SignupForm />,
    },
    {
      path: '',
      element: <MainLayout />,
      children: [
        // Root Route
        {
          index: true,
          element: <App />,
        },

        // Static Routes
        {
          path: 'about',
          // element: <About />,
          // loader: protectedLoader,
          lazy: async () => {
            const module = await import('./pages/About');
            return {
              Component: module.default,
            };
          },
        },
        {
          path: 'query',
          // element: <QueryParameters />,
          lazy: async () => {
            const module = await import('@/pages/QueryParameters');
            return {
              Component: module.default,
            };
          },
        },
        {
          path: 'users',
          // element: <Users />,
          lazy: async () => {
            const module = await import('./pages/UsersPage');
            return {
              Component: module.default,
              loader: module.loader,
              ErrorBoundary: module.ErrorBoundary,
            };
          },
        },

        // Dynamic Route
        {
          path: 'path/:id/:name',
          // element: <PathParameters />,
          lazy: async () => {
            const module = await import('@/pages/PathParameters');
            return {
              Component: module.default,
            };
          },
        },

        {
          path: 'users/:id',
          // element: <UserDetails />,
          lazy: async () => {
            const module = await import('@/pages/UserDetails');
            return {
              Component: module.default,
            };
          },
        },

        {
          path: 'create',
          element: <TaskForm />,
          action: createTaskAction,
        },
      ],
    },
  ],
  {
    basename: '/zagazig-react', // Todo
  },
);

createRoot(document.getElementById('root')).render(
  // Declarative Mode
  // <StrictMode>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<App />} />
  //       <Route path='/about' element={<About />} />
  //     </Routes>
  //   </BrowserRouter>
  // </StrictMode>,

  // Data Mode
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        {' '}
        {/* Wrap entire application */}
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);

// Terminal: npm i react-router

// Send Data to Backend
// 1. Inside Body
// 1.1 Form Method="POST"
// 1.2 JS => FetchAPI/Axios =>

// 2. Inside URL
// 2.1 Query Parameters => Form Method="GET" ✅
// 2.2 Path/Route Parameters =>

// Deployment
// 1. npm i -D gh-pages
