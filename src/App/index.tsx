import React from "react";

import { useThemeData, ThemeProvider } from '../Providers/ThemeProvider';
import BackdropFilter from 'react-backdrop-filter';
import { FaMoon } from 'react-icons/fa';

import "./app.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppData/>
    </ThemeProvider>
  );
};

const AppData: React.FC = () => {
  const { theme, toggleTheme } = useThemeData();

  return (
    <div>
      <div className="info-box">
        <button className="w-full rounded-none hover:bg-indigo-500">Bekijk werkervaring</button>
      </div>
      <div className="navbar">
        <BackdropFilter 
          filter="blur(14px)"
        >
          <div className="custom-container flex justify-between">
            <h1 className="text-5xl font-rewind mt-1.5">Simon</h1>
            <div className="nav-container">
              <a className="nav-item">Home</a>
              <a className="nav-item">About</a>
              <a className="nav-item">Personal</a>

              <button onClick={() => toggleTheme()} className="icon-button dark:bg-indigo-900 my-4">
                <FaMoon size="15px" color={theme === "dark" ? "#fff" : "#000"}/>
              </button>
            </div>
          </div>
        </BackdropFilter>
      </div>
      <div>
        <h1 className="font-extrabold">test</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam fuga quos illum modi enim? Totam accusamus exercitationem aspernatur cupiditate error ipsa labore, aliquid eos voluptate deserunt pariatur ipsam dolorum!
      </div>
    </div>
  );

}

export default App;
