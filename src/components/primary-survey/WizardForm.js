import { useState } from "react";

import { SurveySteps1 } from "./SurveySteps1";
import { SurveySteps2 } from "./SurveySteps2";
import { SurveySteps3 } from "./SurveySteps3";
import { SurveySteps4 } from "./SurveySteps4";
import { SurveyNavBtns } from "./SurveyNavBtns";
import { Step1 } from "./Step1";
import { Step1Name } from "./Step1Name";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step4Location } from "./Step4Location";

export const WizardForm = () => {
  const [step, setStep] = useState(1);
  const [step1Values, setStep1Values] = useState({});
  const [step1NameValues, setStep1Name] = useState("");
  const [step2Values, setStep2Values] = useState({});
  const [step3Values, setStep3Values] = useState({});
  const [step4Values, setStep4Values] = useState("");
  const [step4LocationValues, setStep4LocationValues] = useState("");

  const surveyAnswers = [step1NameValues, step1Values, step2Values, step3Values, step4Values, step4LocationValues];

  const handleStep1Change = (event) => {
    setStep1Values({ [event.target.id]: event.target.checked });
  };
  const handleStep1NameChange = (event) => {
    setStep1Name(event.target.value);
  };
  const handleStep2Change = (event) => {
    setStep2Values({ ...step2Values, [event.target.id]: event.target.checked });
  };
  const handleStep3Change = (event) => {
    setStep3Values({ [event.target.id]: event.target.checked });
  };
  const handleStep4Change = (event) => {
    setStep4Values(event.target.value);
  };
  const handleStep4LocationChange = (event) => {
    setStep4LocationValues(event.target.value);
  };

  return (
    <>
      {step === 1 && <SurveySteps1 />}
      {step === 2 && <SurveySteps2 />}
      {step === 3 && <SurveySteps3 />}
      {step === 4 && <SurveySteps4 />}
      <form>
        {step === 1 && (
          <div className="general-info-container">
            <Step1Name
              state={step1NameValues}
              onChange={handleStep1NameChange}
            />
            <Step1 state={step1Values} onChange={handleStep1Change} />
          </div>
        )}
        {step === 2 && (
          <Step2 state={step2Values} onChange={handleStep2Change} />
        )}
        {step === 3 && (
          <Step3 state={step3Values} onChange={handleStep3Change} />
        )}
        {step === 4 && (
          <div className="about-you-section">
            <Step4 state={step4Values} onChange={handleStep4Change} />
            <Step4Location state={step4LocationValues} onChange={handleStep4LocationChange} />
          </div>
        )}
      </form>
      {step !== 5 && (
      <SurveyNavBtns currentStep={step} onClick={setStep} answers={surveyAnswers} />
      )}
      </>
  );
};