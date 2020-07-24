const { useState } = require("react")

export const useStep = () => {
  const [step, setStep] = useState(1);

  const next = newSubgenre => {
    let newStep = step;
    if (!newSubgenre && step === 2) {
      newStep++
    }
    if (step < 4) setStep(newStep + 1)
  };

  const prev = newSubgenre => {
    let newStep = step;
    if (!newSubgenre && step === 4) {
      newStep--
    }
    if (step > 1) setStep(newStep - 1);
  };

  return { step, next, prev, setStep };
};