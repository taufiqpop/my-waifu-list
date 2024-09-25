import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

// Games
import GenshinImpact from './components/contents/games/GenshinImpact';
import HonkaiStarRail from './components/contents/games/HonkaiStarRail';
import WutheringWaves from './components/contents/games/WutheringWaves';

// Anime 2017
import AkashicRecords from './components/contents/anime/2017/AkashicRecords';
import ClassroomOfTheElite from './components/contents/anime/2017/ClassroomOfTheElite';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* Games */}
            <Route path="/games/genshin-impact" element={<GenshinImpact />} />
            <Route path="/games/honkai-star-rail" element={<HonkaiStarRail />} />
            <Route path="/games/wuthering-waves" element={<WutheringWaves />} />

            {/* Anime 2017 */}
            <Route path="/anime/2017/akashic-records" element={<AkashicRecords />} />
            <Route path="/anime/2017/classroom-of-the-elite" element={<ClassroomOfTheElite />} />

        </Routes>
    );
};

export default AppRouter;
