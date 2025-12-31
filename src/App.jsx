import "./App.css";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Education />
      <Interests />
      <Footer />
    </>
  );
}

