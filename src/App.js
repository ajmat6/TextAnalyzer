// import logo from './logo.svg';
// import "./App.css";
import react, { useState } from 'react'
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
// import Alert from './components/Alert';
// import { createRoot } from "react-dom/client";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); //Wheather dark mode is enabled or not
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null); //null alert means no alert
    }, 2000);
  }

  // changeMode function:
  const changeMode = (e) => {
    if (mode === 'light') {
      setmode('dark');
      //Because this changeMode function is in App.js, therfore its body is whole website body so we can change its background color from here easily.
      document.body.style.backgroundColor = '#282c34';
      showalert("Dark Mode Enabled!", "success");
      //Changing the title dynamically when dark mode is enabled and you can do many more functionality like that.
      document.title = "TextAnalyzer - Dark Mode";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enabled!", "success");
      document.title = "TextAnalyzer - Light Mode";
    }
  }

  return (
    <>
      {/* If props values are not passed, then it will take defaultProps values */}
      {/* passing mode in the navbar. */}
      {/* <Router> */}
      <Navbar title="TextAnalyzer" aboutme="About Us" mode={mode} changeMode={changeMode} />
      {/* <Alert alert={alert} /> */}


      <div className="container">
        {/* Passing showalert function as a prop in the Textform component */}
        <TextForm heading="Enter the text" mode={mode} showalert={showalert} />
        {/* <About /> */}
        {/* <BrowserRouter>
        <Routes>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <TextForm heading="Enter the text" mode={mode} showalert={showalert} />
        </Route>
        </Routes>
        </BrowserRouter> */}
      </div>
      {/* </Router> */}
    </>
  );
}

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

export default App;
