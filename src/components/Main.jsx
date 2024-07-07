import Nav from "./Nav.jsx";
import Overview from "./Overview/Overview.jsx";
import Footer from "./Footer.jsx";
import Wallet from "./Wallet/Wallet";
import BigProfile from "./Profile/BigProfile";

export default function Main() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav/>
        <div className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
          <Overview />
          <Wallet />
          <BigProfile />
          <Footer/>
        </div>
      </div>
    </div>
  )
}