import React, { useState } from 'react';

const CardiovascularStudyApp = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full bg-blue-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Cardiovascular Disorders in the Elderly</h1>
        <p className="text-xl text-center mt-2">Interactive Study Guide - Part 1</p>
      </div>

      <div className="flex border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('overview')} 
          className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('assessment')} 
          className={`px-4 py-2 font-medium ${activeTab === 'assessment' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Assessment
        </button>
        <button 
          onClick={() => setActiveTab('aging-effects')} 
          className={`px-4 py-2 font-medium ${activeTab === 'aging-effects' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Aging Effects
        </button>
        <button 
          onClick={() => setActiveTab('hypertension')} 
          className={`px-4 py-2 font-medium ${activeTab === 'hypertension' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Hypertension
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Self Quiz
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Course Overview</h2>
              <p className="mb-2">This study guide covers <span className="font-bold">Common Cardiovascular Disorders in the Elderly</span> based on:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Chapter 7: Chest Pain</li>
                <li>Chapter 10: CV Disorders</li>
              </ul>
              <p className="text-sm text-gray-600">Based on "Nursing in the Care of Older Adults" (Kennedy-Malone, Groenke-Duffy)</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Major CVD Risk Factors</h3>
              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 p-4">
                    <h4 className="font-bold text-lg mb-2">The "Fatal Four"</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li className="text-red-600 font-semibold">Hypertension</li>
                      <li className="text-red-600 font-semibold">Diabetes mellitus</li>
                      <li className="text-red-600 font-semibold">Dyslipidemia</li>
                      <li className="text-red-600 font-semibold">Smoking</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      Higher rates of CVD in older people: absolute number of cases per risk factor tends to increase with age
                    </p>
                    <p className="mt-2 text-gray-700">
                      Multiple risk factors act in concert with age-related CV changes to promote the development and progression of heart and vascular disorders
                    </p>
                  </div>
                  <div className="md:w-1/2 p-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-bold text-center mb-2">Key Concept</h4>
                      <p className="text-center italic">
                        "Multiple risk factors combine with normal aging changes to dramatically increase cardiovascular disease risk in the elderly."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'assessment' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Assessment of the Cardiovascular System</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Key Symptoms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">Dizziness</h4>
                  <p>Feeling lightheaded or unsteady</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">Syncope</h4>
                  <p>Temporary loss of consciousness</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">Orthopnea</h4>
                  <p>Shortness of breath when lying flat</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">Angina</h4>
                  <p>Chest pain due to reduced blood flow to heart muscle</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">Edema</h4>
                  <p>Swelling due to fluid accumulation in tissues</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">Claudication</h4>
                  <p>Pain in the legs during walking that improves with rest</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Challenge Yourself!</h3>
              <p className="mb-4">Which of these symptoms are most directly related to heart failure?</p>
              <button 
                onClick={() => toggleAnswer('symptoms')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers.symptoms ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers.symptoms && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><span className="font-bold">Orthopnea and Edema</span> are classic signs of heart failure. Orthopnea occurs due to fluid redistribution when lying flat, and edema results from fluid retention.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'aging-effects' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Principal Effects of Aging on the CV System</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="border border-gray-300 p-2">Age Effect</th>
                    <th className="border border-gray-300 p-2">Clinical Implication</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-2">↑ Arterial stiffness</td>
                    <td className="border border-gray-300 p-2">↑ Afterload and systolic BP</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-2">↓ Myocardial relaxation & compliance</td>
                    <td className="border border-gray-300 p-2">↑ Risk of diastolic heart failure and atrial fibrillation</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-2">Impaired responsiveness to β-adrenergic stimulation</td>
                    <td className="border border-gray-300 p-2">↓ Maximum cardiac output; impaired thermoregulation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-2">↓ Sinus node function and conduction velocity</td>
                    <td className="border border-gray-300 p-2">↑ Risk of sick sinus syndrome, left anterior fascicular block, and bundle branch block</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-2">Impaired endothelium-dependent vasodilation</td>
                    <td className="border border-gray-300 p-2">↑ Demand ischemia and risk of coronary artery disease and peripheral arterial disease</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-2">↓ Baroreceptor responsiveness</td>
                    <td className="border border-gray-300 p-2">↑ Risk of orthostatic hypotension</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-2">↓ Exercise response</td>
                    <td className="border border-gray-300 p-2">↓ Exercise capacity and ↑ cardiac complications with illness</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-3">Clinical Effects of CV Changes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">At Rest</h4>
                  <p>In healthy older adults, age-related changes have modest clinically relevant effects on cardiac hemodynamics and performance at rest</p>
                  <p className="mt-2 text-sm">Resting heart rate, ejection fraction, stroke volume, and cardiac output are well preserved even at very advanced age</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">With Increased Demands</h4>
                  <p>Ability to respond to increased demands associated with exercise or illness declines progressively with advancing age</p>
                  <p className="mt-2 text-sm">Peak aerobic capacity declines inexorably with age</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hypertension' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Hypertension in the Elderly</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Key Statistics</h3>
              <ul className="space-y-2">
                <li>• High prevalence of HTN only a third of elderly patients meets B/P target recommendations</li>
                <li>• Affects 86 million U.S. Adults 20 years or older</li>
                <li>• Half hypertensive patients are not well controlled</li>
                <li>• 15% of hypertensive patients are not even aware they have HTN</li>
                <li>• Up to 95% are diagnosed with essential hypertension</li>
                <li>• Higher in African Americans, with higher mortality rate</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-3 text-green-800">Benefits of HTN Control</h3>
              <p className="mb-3">Reduction of 10 mmHg systolic and 5 mmHg diastolic at age 65 associated with:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <h4 className="font-bold text-green-600 text-2xl">25%</h4>
                  <p>Reduction of MI</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <h4 className="font-bold text-green-600 text-2xl">40%</h4>
                  <p>Reduction of stroke</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <h4 className="font-bold text-green-600 text-2xl">50%</h4>
                  <p>Reduction of CHF</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <h4 className="font-bold text-green-600 text-2xl">20%</h4>
                  <p>Reduction of mortality</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">HTN Risk Factors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Changeable Risk Factors</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Overweight or Obesity</li>
                    <li>High sodium salt usage</li>
                    <li>Alcohol use</li>
                    <li>Lack of physical activity</li>
                    <li>Smoking</li>
                    <li>Stress</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Unchangeable Risk Factors</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Aging</li>
                    <li>Race</li>
                    <li>Family history</li>
                    <li>Gender</li>
                    <li>Prehypertension or gestational hypertension</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4">
                <img 
                  src="/api/placeholder/700/200" 
                  alt="Hypertension risk factors" 
                  className="max-w-full h-auto rounded"
                />
                <p className="text-xs text-gray-500 mt-1">Note: Image placeholder represents the risk factors chart from slide 10</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Self Quiz</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. What are the four major risk factors for CVD?</h4>
                <button 
                  onClick={() => toggleAnswer('quiz1')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers.quiz1 ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers.quiz1 && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Hypertension, Diabetes mellitus, Dyslipidemia, and Smoking</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. What percentage of elderly patients with hypertension meets their blood pressure target recommendations?</h4>
                <button 
                  onClick={() => toggleAnswer('quiz2')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers.quiz2 ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers.quiz2 && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Only about one-third of elderly patients meet their blood pressure target recommendations.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. How do age-related cardiovascular changes affect the elderly during rest versus during increased demands?</h4>
                <button 
                  onClick={() => toggleAnswer('quiz3')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers.quiz3 ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers.quiz3 && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p><strong>At rest:</strong> Age-related changes have modest clinically relevant effects on cardiac performance (resting heart rate, ejection fraction, stroke volume, and cardiac output are well preserved even at very advanced age)</p>
                    <p className="mt-2"><strong>During increased demands:</strong> The ability to respond to increased demands from exercise or illness declines progressively with advancing age; peak aerobic capacity declines inexorably with age</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">4. Case Study: An 80-year-old patient experiences dizziness when standing up. Which age-related cardiovascular change most likely explains this symptom?</h4>
                <button 
                  onClick={() => toggleAnswer('quiz4')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers.quiz4 ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers.quiz4 && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Decreased baroreceptor responsiveness, which increases the risk of orthostatic hypotension.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full bg-gray-100 p-4 text-center">
        <p className="text-gray-600">Based on "Nursing in the Care of Older Adults" (Kennedy-Malone, Groenke-Duffy)</p>
        <p className="text-gray-600">Revised and updated Dr. Delacroix 2023</p>
      </div>
    </div>
  );
};

export default CardiovascularStudyApp;
