import Opening from "./components/Opening";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bismillah from "./components/Bismillah";
import Story from "./components/Story";
import CoupleCards from "./components/CoupleCards";
import MarriageAyah from "./components/MarriageAyah";
import DateReveal from "./components/DateReveal";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Wishes from "./components/Wishes";
import ThankYou from "./components/ThankYou";
import MusicPlayer from "./components/MusicPlayer";
import ScrollDecorations from "./components/ScrollDecorations";

function App() {
  return <main>
    <ScrollDecorations />
    <Opening />
    <Navbar />
    <Hero />
    <Bismillah />
    <Story />
    <CoupleCards />
    <MarriageAyah />
    <DateReveal />
    <Countdown />
    <Events />
    <Venue />
    <RSVP />
    <Wishes />
    <ThankYou />
    <MusicPlayer />
  </main>;
}
export default App;
