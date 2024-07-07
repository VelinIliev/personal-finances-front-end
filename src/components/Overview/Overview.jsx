import Balance from "./Balance.jsx";
import History from "./History.jsx";
import Exchange from "./Exchange.jsx";
import Profile from "./Profile.jsx";

export default function Overview() {
  return (
    <div className="title-group mb-3">
      <h1 className="h2 mb-0">Overview</h1>
      <small className="text-muted">Hello Thomas, welcome back!</small>
      <div className="row my-4">
        <div className="col-lg-7 col-12">
          <Balance/>
          <History/>
          <Exchange/>
        </div>
        <Profile/>
      </div>
    </div>
  )
}