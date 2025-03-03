// import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Toaster } from "react-hot-toast";
import { EditorPage } from "./pages/EditorPage";
function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              iconTheme: {
                primary: "#4aed88",
                // secondary: "#fff",
                secondary: "black",
              },
            },
          }}
        ></Toaster>
      </div>
      {/* RAM RAM */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
