import Counteries from '../components/Counteries';
import Navbar from '../components/Navbar';

const HomePage = () => (
  <>
    <Navbar />
    <div className="container">
      <Counteries />
    </div>
  </>
);

export default HomePage;
