import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

// Games
import GenshinImpact from './components/contents/games/GenshinImpact';
import HonkaiStarRail from './components/contents/games/HonkaiStarRail';
import WutheringWaves from './components/contents/games/WutheringWaves';

// Anime 2010
import AngelBeats from './components/contents/anime/2010/AngelBeats';
import KissXSis from './components/contents/anime/2010/KissXSis';

// Anime 2012
import SwordArtOnline from './components/contents/anime/2012/SwordArtOnline';

// Anime 2013
import Danganronpa from './components/contents/anime/2013/Danganronpa';
import DateALive from './components/contents/anime/2013/DateALive';

// Anime 2014
import AkameGaKill from './components/contents/anime/2014/AkameGaKill';
import NoGameNoLife from './components/contents/anime/2014/NoGameNoLife';
import TrinitySeven from './components/contents/anime/2014/TrinitySeven';

// Anime 2015
import Charlotte from './components/contents/anime/2015/Charlotte';
import ShokugekiNoSouma from './components/contents/anime/2015/ShokugekiNoSouma';
import HimoutoUmaruChan from './components/contents/anime/2015/HimoutoUmaruChan';
import TheTestamentOfSisterNewDevil from './components/contents/anime/2015/TheTestamentOfSisterNewDevil';

// Anime 2016
import KonoSuba from './components/contents/anime/2016/KonoSuba';

// Anime 2017
import AkashicRecords from './components/contents/anime/2017/AkashicRecords';
import ClassroomOfTheElite from './components/contents/anime/2017/ClassroomOfTheElite';
import EromangaSensei from './components/contents/anime/2017/EromangaSensei';
import GabrielDropOut from './components/contents/anime/2017/GabrielDropOut';
import InAnotherWorldWithMySmartphone from './components/contents/anime/2017/InAnotherWorldWithMySmartphone';
import Kakegurui from './components/contents/anime/2017/Kakegurui';
import MasamuneRevenge from './components/contents/anime/2017/MasamuneRevenge';

// Anime 2018
import RascalDoesNotDreamOfBunnyGirlSenpai from './components/contents/anime/2018/RascalDoesNotDreamOfBunnyGirlSenpai';

// Anime 2019
import LoveIsWar from './components/contents/anime/2019/LoveIsWar';

// Anime 2021
import RedoOfHealer from './components/contents/anime/2021/RedoOfHealer';
import TheDetectiveIsAlreadyDead from './components/contents/anime/2021/TheDetectiveIsAlreadyDead';
import MushokuTensei from './components/contents/anime/2021/MushokuTensei';

// Anime 2022
import LycorisRecoil from './components/contents/anime/2022/LycorisRecoil';

// Anime 2023
import FrierenBeyondJourneyEnd from './components/contents/anime/2023/FrierenBeyondJourneyEnd';
import OshiNoKo from './components/contents/anime/2023/OshiNoKo';
import TearmoonEmpire from './components/contents/anime/2023/TearmoonEmpire';
import TheDreamingBoyIsARealist from './components/contents/anime/2023/TheDreamingBoyIsARealist';

// Anime 2024
import AlyaSometimesHidesHerFeelingsInRussian from './components/contents/anime/2024/AlyaSometimesHidesHerFeelingsInRussian';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* Games */}
            <Route path="/games/genshin-impact" element={<GenshinImpact />} />
            <Route path="/games/honkai-star-rail" element={<HonkaiStarRail />} />
            <Route path="/games/wuthering-waves" element={<WutheringWaves />} />

            {/* Anime 2010 */}
            <Route path="/anime/2010/angel-beats" element={<AngelBeats />} />
            <Route path="/anime/2010/kiss-x-sis" element={<KissXSis />} />

            {/* Anime 2012 */}
            <Route path="/anime/2012/sword-art-online" element={<SwordArtOnline />} />

            {/* Anime 2013 */}
            <Route path="/anime/2013/danganronpa" element={<Danganronpa />} />
            <Route path="/anime/2013/date-a-live" element={<DateALive />} />

            {/* Anime 2014 */}
            <Route path="/anime/2014/akame-ga-kill" element={<AkameGaKill />} />
            <Route path="/anime/2014/no-game-no-life" element={<NoGameNoLife />} />
            <Route path="/anime/2014/trinity-seven" element={<TrinitySeven />} />

            {/* Anime 2015 */}
            <Route path="/anime/2015/charlotte" element={<Charlotte />} />
            <Route path="/anime/2015/shokugeki-no-souma" element={<ShokugekiNoSouma />} />
            <Route path="/anime/2015/himouto-umaru-chan" element={<HimoutoUmaruChan />} />
            <Route path="/anime/2015/the-testament-of-sister-new-devil" element={<TheTestamentOfSisterNewDevil />} />

            {/* Anime 2016 */}
            <Route path="/anime/2016/konosuba" element={<KonoSuba />} />

            {/* Anime 2017 */}
            <Route path="/anime/2017/akashic-records" element={<AkashicRecords />} />
            <Route path="/anime/2017/classroom-of-the-elite" element={<ClassroomOfTheElite />} />
            <Route path="/anime/2017/eromanga-sensei" element={<EromangaSensei />} />
            <Route path="/anime/2017/gabriel-dropout" element={<GabrielDropOut />} />
            <Route path="/anime/2017/in-another-world-with-my-smartphone" element={<InAnotherWorldWithMySmartphone />} />
            <Route path="/anime/2017/kakegurui" element={<Kakegurui />} />
            <Route path="/anime/2017/masamune-revenge" element={<MasamuneRevenge />} />

            {/* Anime 2018 */}
            <Route path="/anime/2018/rascal-does-not-dream-of-bunny-girl-senpai" element={<RascalDoesNotDreamOfBunnyGirlSenpai />} />

            {/* Anime 2019 */}
            <Route path="/anime/2019/love-is-war" element={<LoveIsWar />} />

            {/* Anime 2021 */}
            <Route path="/anime/2021/redo-of-healer" element={<RedoOfHealer />} />
            <Route path="/anime/2021/the-detective-is-already-dead" element={<TheDetectiveIsAlreadyDead />} />
            <Route path="/anime/2021/mushoku-tensei" element={<MushokuTensei />} />

            {/* Anime 2022 */}
            <Route path="/anime/2022/lycoris-recoil" element={<LycorisRecoil />} />

            {/* Anime 2023 */}
            <Route path="/anime/2023/frieren-beyond-journey-end" element={<FrierenBeyondJourneyEnd />} />
            <Route path="/anime/2023/oshi-no-ko" element={<OshiNoKo />} />
            <Route path="/anime/2023/tearmoon-empire" element={<TearmoonEmpire />} />
            <Route path="/anime/2023/the-dreaming-boy-is-a-realist" element={<TheDreamingBoyIsARealist />} />

            {/* Anime 2024 */}
            <Route path="/anime/2024/alya-sometimes-hides-her-feelings-in-russian" element={<AlyaSometimesHidesHerFeelingsInRussian />} />
        </Routes>
    );
};

export default AppRouter;
