import { useState } from "react";
import "./App.css";
import PresentationSelector from "./Componants/PresentSelector";
import FileSelectorModal from "./Componants/SelectFile";
import ContentToolbar from "./Componants/AddDynamiContent";
import DynamicContentModal from "./Componants/AddDynamiContent/TemplateModal";
import PptViewer from "./Componants/PptViewer";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showContainetModal, setshowContainetModal] = useState(false);
  const [showContent, setshowContent] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [step, setStep] = useState(1);
  const [clickCount, setClickCount] = useState(0);

  const handleShow = () => {
    setShowModal(true);
    setStep(2);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleShowContent = () => {
    if (selectedOption === "metric") {
      setClickCount((prevCount) => prevCount + 1);
    }

    setshowContainetModal(false);
    setshowContent(true);
  };

  const handleSelect = () => {
    setShowModal(false);
    setStep(3);
  };

  const handleShowContainetModal = () => {
    setshowContainetModal(true);
  };

  const clickCountArray = Array.from(
    { length: clickCount },
    (_, index) => index
  );

  const stepBystep = () => {
    if (step === 1) {
      return (
        <div className="container">
          <PptViewer />
          <div className="box">
            <PresentationSelector handleShow={handleShow} />
          </div>
        </div>
      );
    } else if (step === 2) {
      return (
        <div className="container">
          <PptViewer />
          <div className="box">
            <FileSelectorModal
              showModal={showModal}
              setShowModal={setShowModal}
              handleSelect={handleSelect}
            />
          </div>
        </div>
      );
    } else if (step === 3) {
      return (
        <div className="container">
          <PptViewer />
          <div className="box">
            <ContentToolbar
              handleShowContainetModal={handleShowContainetModal}
              clickCountArray={clickCountArray}
              showContent={showContent}
              selectedOption={selectedOption}
            />
            <DynamicContentModal
              showContainetModal={showContainetModal}
              setshowContainetModal={setshowContainetModal}
              selectedOption={selectedOption}
              handleOptionChange={handleOptionChange}
              handleShowContent={handleShowContent}
            />
          </div>
        </div>
      );
    }
  };

  return <>{stepBystep()}</>;
}

export default App;
