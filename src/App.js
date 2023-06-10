// import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
// import Products from './Components/Products';
// import Blogs from './Components/Blogs';
import './app.css'
function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <Navbar/>
      {/* <Blogs/> */}
      {/* <Home/> */}
      {/* <Products/> */}
      <Newsletter/>
    </div>
  );
}

export default App;
