import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
// import "./App.css";

function App() {
  const navigation = useNavigation();
  return (
    <div className=" flex flex-col h-screen">
      <Header />
      <div className="mx-4 lg:mx-12">
        <div className="text-center">
          {navigation.state === "loading" ? <Loading /> : ""}
        </div>
        <Outlet />
      </div>
      <div className="my-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
