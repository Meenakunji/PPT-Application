import { useState } from "react";
import "./App.css";
import PresentationSelector from "./Componants/PresentSelector";
import FileSelectorModal from "./Componants/SelectFile";
import ContentToolbar from "./Componants/AddDynamiContent";
// import DynamicContentModal from "./Componants/AddDynamiContent/TemplateModal";
import PptViewer from "./Componants/PptViewer";
import GoogleSignInButton from "./Componants/SignIn";
// import Header from "./Componants/Header";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [step, setStep] = useState(1);

  const [savedPresenataion, setsavedPresenataion] = useState(false);

  const handleStep = (step) => {
    setStep(step + 1);
  };

  console.log(step, "step");

  const [isEditing, setIsEditing] = useState(false);

  const handleTextClick = () => {
    setIsEditing(true);
    console.log("handleTextClick");
  };

  const handleSaved = () => {
    setsavedPresenataion(!savedPresenataion);
    setStep(2);
  };

  const stepBystep = () => {
    if (step === 1) {
      return (
        <div className="container">
          <div className="box">
            <GoogleSignInButton handleStep={handleStep} step={step} />
          </div>
        </div>
      );
    } else if (step === 2) {
      return (
        <div className="container">
          <div className="box">
            <PresentationSelector
              handleStep={handleStep}
              step={step}
              savedPresenataion={savedPresenataion}
            />
          </div>
        </div>
      );
    } else if (step === 3) {
      return (
        <div className="container">
          <div className="box">
            <FileSelectorModal
              showModal={showModal}
              setShowModal={setShowModal}
              handleStep={handleStep}
              step={step}
            />
          </div>
        </div>
      );
    } else if (step === 4) {
      return (
        <div className="container">
          <PptViewer />
          <div className="step-4-box">
            <ContentToolbar
              handleTextClick={handleTextClick}
              handleSaved={handleSaved}
            />
          </div>
        </div>
      );
    }
  };

  return <>{stepBystep()}</>;
}

export default App;
