import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import React, { useState, useEffect } from "react";
import TopLoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate an API request that takes time to complete
    const fetchData = async () => {
      setIsLoading(true);

      for (let i = 0; i <= 100; i += 10) {
        setProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <TopLoadingBar color="#007bff" progress={progress} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/services" component={Services} /> 
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
