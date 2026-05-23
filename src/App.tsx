import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './shared/styles/global.styles';
import { ErrorBoundary, LoadingSpinner } from './shared/components';

// 懒加载路由
const HomePage = React.lazy(() => import('./features/home/home.component'));
const LevelSelectPage = React.lazy(() => import('./features/level/level-select/level-select.component'));
const LevelIntroPage = React.lazy(() => import('./features/level/level-intro/level-intro.component'));
const QuizGamePage = React.lazy(() => import('./features/quiz/quiz-game/quiz-game.component'));
const LevelCompletePage = React.lazy(() => import('./features/level/level-complete/level-complete.component'));
const CardCollectionPage = React.lazy(() => import('./features/card/card-collection/card-collection.component'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<LoadingSpinner size="large" text="炫卡加载中..." />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/levels" element={<LevelSelectPage />} />
            <Route path="/level/:levelId/intro" element={<LevelIntroPage />} />
            <Route path="/level/:levelId/play" element={<QuizGamePage />} />
            <Route path="/level/:levelId/complete" element={<LevelCompletePage />} />
            <Route path="/collection" element={<CardCollectionPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;