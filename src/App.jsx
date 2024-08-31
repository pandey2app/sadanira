import Navbar from './layouts/Navbar';
import Router from './routes/Router';
import Footer from './layouts/Footer';
import Copyright from './layouts/Copyright';
import { useEffect, useState } from "react";
import Spinner from './components/Spinner';
import Breadcrumbs from './layouts/Breadcrumbs';
import { useLocation } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const pathArray = useLocation().pathname.split('/')


  const goToTop = () => {
    window.scrollTo(0, 0)
  }


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500)

  }, []);
  
  return (
    <>
      {isLoading ?
        <Spinner /> :
        <>
         
          <Navbar />
          {
            pathArray.length > 1 && pathArray[1] !== "" && <Breadcrumbs />
          }
          <Router />
          <Footer />
          <Copyright />
          <p onClick={goToTop} className="btn btn-md-square btn-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></p>
        </>
      }
    </>
  );
}

export default App;
