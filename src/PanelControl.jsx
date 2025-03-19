import Footer from "./Footer";
import MainContent from "./MainContent";
import "./PanelControl.css";
import Sidebar from "./Sidebar";
function PanelControl() {
  return (
    <section className="container">
      <MainContent />
      <Sidebar />
      <Footer />
    </section>
  );
}
export default PanelControl;
