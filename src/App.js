import "./App.css";
import { Header } from "./components/top-header/Header";
import { Banner } from "./components/banner/Banner";
import { Marqu } from "./components/marqee/Marqu";
import About from "./components/about/About";
import { OnlineClass } from "./components/online class/OnlineClass";
import { Course } from "./components/our course/Course";
import { Work } from "./components/student work/Work";
import Testimonial from "./components/student testimonial/Testimonial";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Marqu />
      <About />
      <OnlineClass />
      <Course />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
