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

    return (
        <>
            {step === 1 && <SurveySteps1 />}
            {step === 2 && <SurveySteps2 />}
            {step === 3 && <SurveySteps3 />}
            {step === 4 && <SurveySteps4 />}
            <form>
                {step === 1 && <Step1 />}
                {step === 2 && <Step2 />}
                {step === 3 && <Step3 />}
                {step === 4 && <Step4 />}
            </form>
            <SurveyNavBtns currentStep={step} onClick={setStep} />
        </>
    )
}


