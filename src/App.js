import React from "react";
import "./App.css";
import About from "./components/About";
import Card from "./components/Card";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import data from "./assets/data";
import "aos/dist/aos.css";
import Experience from "./components/Experience";

function App() {
  // const [isPageLoaded, setIsPageLoaded] = useState(false);

  // useEffect(() => {
  //   setInterval(checkIfPageIsLoaded, 1000);
  //   function checkIfPageIsLoaded() {
  //     if (document.readyState === "complete") {
  //       setIsPageLoaded(true);
  //     } else {
  //       setIsPageLoaded(false);
  //     }
  //   }
  // }, []);

  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div>
        <Card name={data.name} title={data.title} social={data.social} />
      </div>
      <div>
        <About title={data.about.title} description={data.about.description} />
        <Skills skills={data.skills} />
        <Experience
          title={data.experience.title}
          companies={data.experience.companies}
        />

        <Projects projects={data.projects} />
      </div>
    </div>
  );
}
export default App;
