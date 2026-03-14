import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './shared/styles/global.styles';
import HomePage from './features/home/home.component';
import LevelSelectPage from './features/level/level-select/level-select.component';
import LevelIntroPage from './features/level/level-intro/level-intro.component';
import QuizGamePage from './features/quiz/quiz-game/quiz-game.component';
import LevelCompletePage from './features/level/level-complete/level-complete.component';
import CardCollectionPage from './features/card/card-collection/card-collection.component';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/levels" element={<LevelSelectPage />} />
          <Route path="/level/:levelId/intro" element={<LevelIntroPage />} />
          <Route path="/level/:levelId/play" element={<QuizGamePage />} />
          <Route path="/level/:levelId/complete" element={<LevelCompletePage />} />
          <Route path="/collection" element={<CardCollectionPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;