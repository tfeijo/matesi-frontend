import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/public/Home';

import English from '../pages/public/Courses/English';
import French from '../pages/public/Courses/French';
import German from '../pages/public/Courses/German';
import Korean from '../pages/public/Courses/Korean';
import Spanish from '../pages/public/Courses/Spanish';

import Methodology from '../pages/public/Methodology';
import About from '../pages/public/About';
import WorkingUs from '../pages/public/WorkingUs';
import Contact from '../pages/public/Contact';
import Login from '../pages/public/Login';
import Enroll from '../pages/public/Enroll';

import Mailbox from '../pages/private/Mailbox';
import Students from '../pages/private/Students';

import ProtectedRoute from './Route';

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />

    <Route
      path="/cursos/ingles"
      element={
        <ProtectedRoute>
          <English />
        </ProtectedRoute>
      }
    />
    <Route
      path="/cursos/espanhol"
      element={
        <ProtectedRoute>
          <Spanish />
        </ProtectedRoute>
      }
    />
    <Route
      path="/cursos/frances"
      element={
        <ProtectedRoute>
          <French />
        </ProtectedRoute>
      }
    />
    <Route
      path="/cursos/coreano"
      element={
        <ProtectedRoute>
          <Korean />
        </ProtectedRoute>
      }
    />
    <Route
      path="/cursos/alemao"
      element={
        <ProtectedRoute>
          <German />
        </ProtectedRoute>
      }
    />

    <Route
      path="/metodologia"
      element={
        <ProtectedRoute>
          <Methodology />
        </ProtectedRoute>
      }
    />
    <Route
      path="/sobre-nos"
      element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      }
    />
    <Route
      path="/trabalhe-conosco"
      element={
        <ProtectedRoute>
          <WorkingUs />
        </ProtectedRoute>
      }
    />
    <Route
      path="/contato"
      element={
        <ProtectedRoute>
          <Contact />
        </ProtectedRoute>
      }
    />
    <Route
      path="/matricular"
      element={
        <ProtectedRoute>
          <Enroll />
        </ProtectedRoute>
      }
    />
    <Route
      path="/entrar"
      element={
        <ProtectedRoute>
          <Login />
        </ProtectedRoute>
      }
    />

    <Route
      path="/mensagens/*"
      element={
        <ProtectedRoute isAdmin>
          <Mailbox />
        </ProtectedRoute>
      }
    />
    <Route
      path="/matriculados"
      element={
        <ProtectedRoute isAdmin>
          <Students />
        </ProtectedRoute>
      }
    />

    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
