import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const Login = lazy(() => import('../pages/login'));
const Home = lazy(() => import('../pages/student/home'));
