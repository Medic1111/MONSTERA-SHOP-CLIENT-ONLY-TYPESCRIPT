import React, { useContext } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import PlantList from "./components/PlantList/PlatList";
import Modal from "./components/Modal/Modal";
import { UiCtx } from "./store/ui-ctx";

function App() {
  const uiMgr = useContext(UiCtx);

  return (
    <React.Fragment>
      {uiMgr.showModal && <Modal />}
      <Header />
      <Hero />
      <PlantList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
