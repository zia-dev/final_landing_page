import './App.css';
import Navbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
import LogoBrand from './components/logo-brand/logo-brand.component';
import Service from './components/service/service.component';
import LearnProcess from './components/learn-process/learn-process.component';
import ManageApp from './components/manage-app/manage-app.component';
import Desire from './components/desire/desire.component';
import Plan from './components/plan/plan.component';
import Testimonial from './components/testimonial/testimonial.component';
import Discover from './components/discover/discover.component';
import Footer from './components/footer/footer.component';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <LogoBrand/>
      <Service/>
      <LearnProcess/>
      <ManageApp/>
      <Desire/>
      <Plan/>
      <Testimonial/>
      <Discover/>
      <Footer/>
    </div>
  );
}

export default App;
