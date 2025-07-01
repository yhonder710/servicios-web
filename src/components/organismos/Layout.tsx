import { Outlet } from "react-router-dom";
import { Naybar } from "./Naybar";
import { Footer } from "./Footer";


export function Layout() {
  return (
    <div className="Layout">
      <Naybar />
      <Outlet />
      <Footer />
    </div>
  )
}
