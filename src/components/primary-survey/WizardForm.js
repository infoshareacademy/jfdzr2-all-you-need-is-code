import { useState } from 'react';

import { SurveySteps1 } from './SurveySteps1';
import { SurveySteps2 } from './SurveySteps2';
import { SurveySteps3 } from './SurveySteps3';
import { SurveySteps4 } from './SurveySteps4';
import { SurveyNavBtns } from './SurveyNavBtns'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'

export const WizardForm = () => {
    const [step, setStep] = useState(1);
    const [step1Values, setStep1Values] = useState({});
    const [step2Values, setStep2Values] = useState({});
    const [step3Values, setStep3Values] = useState({});
    const [step4Values, setStep4Values] = useState({});

    const handleStep1Change = (event) => {
        setStep1Values({[event.target.id]: event.target.checked});
    }
    const handleStep2Change = (event) => {
        setStep2Values({...step2Values,[event.target.id]: event.target.checked});
    }
    const handleStep3Change = (event) => {
        setStep3Values({[event.target.id]: event.target.checked});
    }
    const handleStep4Change = (event) => {
        setStep4Values(event.target.value);
    }

    // console.log({values})

    return (
        <>
            {step === 1 && <SurveySteps1 />}
            {step === 2 && <SurveySteps2 />}
            {step === 3 && <SurveySteps3 />}
            {step === 4 && <SurveySteps4 />}
            <form>
                {step === 1 && <Step1 state={step1Values} onChange={handleStep1Change} />}
                {step === 2 && <Step2 state={step2Values} onChange={handleStep2Change} />}
                {step === 3 && <Step3 state={step3Values} onChange={handleStep3Change}/>}
                {step === 4 && <Step4 state={step4Values} onChange={handleStep4Change} />}
            </form>
            <SurveyNavBtns currentStep={step} onClick={setStep} />
        </>
    )
}


