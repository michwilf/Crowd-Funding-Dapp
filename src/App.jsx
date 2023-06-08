import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Home from "./views/Home"
import Project from "./views/Project"
import { useEffect, useState } from "react"
import { Wallet } from "ethers"
import { isWalletConnected } from "./services/blockchain"
import { ToastContainer } from "react-toastify"

const App = () => {
  const [loaded, setLoaded] = useState(false)

  const fetchData = async () => {
    await isWalletConnected();
    console.log('Blockchain loaded');
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();

    // Clean-up function (if needed)
    return () => {
      // Perform any necessary clean-up here
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <Header />
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      ) : null}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
