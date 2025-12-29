import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import ButtonGallery from "./pages/ButtonGallery";
import AlertGallery from "./pages/AlertGallery";
import BadgeGallery from "./pages/BadgeGallery";
import CardGallery from "./pages/CardGallery";
import InputGallery from "./pages/InputGallery";
import AvatarGallery from "./pages/AvatarGallery";

function App() {
  const [activePage, setActivePage] = useState("buttons");

  const renderContent = () => {
    switch (activePage) {
      case "buttons":
        return <ButtonGallery />;
      case "alerts":
        return <AlertGallery />;
      case "badges":
        return <BadgeGallery />;
      case "cards":
        return <CardGallery />;
      case "inputs":
        return <InputGallery />;
      case "avatars":
        return <AvatarGallery />;
      default:
        return <ButtonGallery />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      {renderContent()}
    </Layout>
  );
}

export default App;
