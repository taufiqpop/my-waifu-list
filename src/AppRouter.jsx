import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

// Games
import GenshinImpact from './components/contents/games/GenshinImpact';
import HonkaiStarRail from './components/contents/games/HonkaiStarRail';
import WutheringWaves from './components/contents/games/WutheringWaves';

// Anime 1996
import DetectiveConan from './components/contents/anime/1996/DetectiveConan';

// Anime 2010
import AngelBeats from './components/contents/anime/2010/AngelBeats';
import HyakkaRyouran from './components/contents/anime/2010/HyakkaRyouran';
import KissXSis from './components/contents/anime/2010/KissXSis';

// Anime 2011
import InfiniteStratos from './components/contents/anime/2011/InfiniteStratos';

// Anime 2012
import HighSchoolDxD from './components/contents/anime/2012/HighSchoolDxD';
import SwordArtOnline from './components/contents/anime/2012/SwordArtOnline';

// Anime 2013
import Danganronpa from './components/contents/anime/2013/Danganronpa';
import DateALive from './components/contents/anime/2013/DateALive';
import MyTeenRomanticComedy from './components/contents/anime/2013/MyTeenRomanticComedy';

// Anime 2014
import AkameGaKill from './components/contents/anime/2014/AkameGaKill';
import NoGameNoLife from './components/contents/anime/2014/NoGameNoLife';
import TrinitySeven from './components/contents/anime/2014/TrinitySeven';

// Anime 2015
import AssassinationClassroom from './components/contents/anime/2015/AssassinationClassroom';
import Charlotte from './components/contents/anime/2015/Charlotte';
import ShokugekiNoSouma from './components/contents/anime/2015/ShokugekiNoSouma';
import HimoutoUmaruChan from './components/contents/anime/2015/HimoutoUmaruChan';
import RakudaiKishiNoCavalry from './components/contents/anime/2015/RakudaiKishiNoCavalry';
import TheTestamentOfSisterNewDevil from './components/contents/anime/2015/TheTestamentOfSisterNewDevil';

// Anime 2016
import KonoSuba from './components/contents/anime/2016/KonoSuba';
import MyHeroAcademia from './components/contents/anime/2016/MyHeroAcademia';

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
import GoblinSlayer from './components/contents/anime/2018/GoblinSlayer';

// Anime 2019
import DemonSlayer from './components/contents/anime/2019/DemonSlayer';
import LoveIsWar from './components/contents/anime/2019/LoveIsWar';
import ThatTimeIReincarnatedAsASlime from './components/contents/anime/2019/ThatTimeIReincarnatedAsASlime';

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
import BlueArchiveTheAnimation from './components/contents/anime/2024/BlueArchiveTheAnimation';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* Games */}
            <Route path="/games/genshin-impact" element={<GenshinImpact />} />
            <Route path="/games/honkai-star-rail" element={<HonkaiStarRail />} />
            <Route path="/games/wuthering-waves" element={<WutheringWaves />} />

            {/* Anime 1996 */}
            <Route path="/anime/1996/detective-conan" element={<DetectiveConan />} />

            {/* Anime 2010 */}
            <Route path="/anime/2010/angel-beats" element={<AngelBeats />} />
            <Route path="/anime/2010/hyakka-ryouran" element={<HyakkaRyouran />} />
            <Route path="/anime/2010/kiss-x-sis" element={<KissXSis />} />

            {/* Anime 2011 */}
            <Route path="/anime/2011/infinite-stratos" element={<InfiniteStratos />} />

            {/* Anime 2012 */}
            <Route path="/anime/2012/sword-art-online" element={<SwordArtOnline />} />
            <Route path="/anime/2012/high-school-dxd" element={<HighSchoolDxD />} />

            {/* Anime 2013 */}
            <Route path="/anime/2013/danganronpa" element={<Danganronpa />} />
            <Route path="/anime/2013/date-a-live" element={<DateALive />} />
            <Route path="/anime/2013/my-teen-romantic-comedy" element={<MyTeenRomanticComedy />} />

            {/* Anime 2014 */}
            <Route path="/anime/2014/akame-ga-kill" element={<AkameGaKill />} />
            <Route path="/anime/2014/no-game-no-life" element={<NoGameNoLife />} />
            <Route path="/anime/2014/trinity-seven" element={<TrinitySeven />} />

            {/* Anime 2015 */}
            <Route path="/anime/2015/assassination-classroom" element={<AssassinationClassroom />} />
            <Route path="/anime/2015/charlotte" element={<Charlotte />} />
            <Route path="/anime/2015/shokugeki-no-souma" element={<ShokugekiNoSouma />} />
            <Route path="/anime/2015/himouto-umaru-chan" element={<HimoutoUmaruChan />} />
            <Route path="/anime/2015/rakudai-kishi-no-cavalry" element={<RakudaiKishiNoCavalry />} />
            <Route path="/anime/2015/the-testament-of-sister-new-devil" element={<TheTestamentOfSisterNewDevil />} />

            {/* Anime 2016 */}
            <Route path="/anime/2016/konosuba" element={<KonoSuba />} />
            <Route path="/anime/2016/my-hero-academia" element={<MyHeroAcademia />} />

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
            <Route path="/anime/2018/goblin-slayer" element={<GoblinSlayer />} />

            {/* Anime 2019 */}
            <Route path="/anime/2019/demon-slayer" element={<DemonSlayer />} />
            <Route path="/anime/2019/love-is-war" element={<LoveIsWar />} />
            <Route path="/anime/2019/that-time-i-got-reincarnated-as-a-slime" element={<ThatTimeIReincarnatedAsASlime />} />

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
            <Route path="/anime/2024/blue-archive-the-animation" element={<BlueArchiveTheAnimation />} />
        </Routes>
    );
};

export default AppRouter;
