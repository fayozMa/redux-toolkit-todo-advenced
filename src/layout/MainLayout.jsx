//components
import {Navbar,Footer} from "../components"

//rrd
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="site-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default MainLayout