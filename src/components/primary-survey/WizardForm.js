import { useState } from 'react';

import { SurveySteps } from './SurveySteps';
// import { GeneralInfo } from '../components/primary-survey/GeneralInfo';
// import { SurveySkills } from '../components/primary-survey/SurveySkills'
import { SurveyNavBtns } from './SurveyNavBtns'
import { Step1 } from './Step1'

export const WizardForm = () => {
    const [step, setStep] = useState(1);

    return (
        <>
            <SurveySteps />
            <form>
                {step === 1 && <Step1 />}
                {/* {step === 2 && <Step2 />}
                {step === 3 && <Step3 />} */}
            </form>
            <SurveyNavBtns />
        </>
    )
}