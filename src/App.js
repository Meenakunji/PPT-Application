import { useState } from "react";
import "./App.css";
import PresentationSelector from "./Componants/PresentSelector";
import FileSelectorModal from "./Componants/SelectFile";
import ContentToolbar from "./Componants/AddDynamiContent";
import DynamicContentModal from "./Componants/AddDynamiContent/TemplateModal";
import Dashboard from "./Componants/DataDashboard";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showContent, setshowContent] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleShow = () => {
    setShowModal(true);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleShowContent = () => {
    setshowContent(true);
  };

  return (
    <div className="App">
      <div className="box">
        <PresentationSelector handleShow={handleShow} />
      </div>
      <div className="box"></div>

      <FileSelectorModal showModal={showModal} setShowModal={setShowModal} />
      <div className="box">
        <ContentToolbar />
      </div>
      <div className="box">
        <DynamicContentModal
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          handleShowContent={handleShowContent}
        />
      </div>
      <div className="box">
        <Dashboard showContent={showContent} selectedOption={selectedOption} />
      </div>
    </div>
  );
}

export default App;
