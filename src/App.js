import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DataAtom from "./atoms/DataAtom";

function App() {
  return (
    <RecoilRoot>
      <div className="justify-center bg-white">
        <Header />
        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
        <Footer />
        <DataAtom />;
      </div>
    </RecoilRoot>
  );
}

export default App;
