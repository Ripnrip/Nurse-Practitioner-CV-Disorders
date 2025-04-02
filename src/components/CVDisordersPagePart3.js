import React, { useState } from 'react';

const CVDisordersPagePart3 = () => {
  const [activeTab, setActiveTab] = useState('hf_basics');
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full bg-teal-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Cardiovascular Disorders</h1>
        <p className="text-xl text-center mt-2">Part One: Pages 41-50 (Heart Failure)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('hf_basics')} 
          className={`px-4 py-2 font-medium ${activeTab === 'hf_basics' ? 'bg-teal-100 border-b-2 border-teal-600' : ''}`}
        >
          HF Basics
        </button>
        <button 
          onClick={() => setActiveTab('diagnosis')} 
          className={`px-4 py-2 font-medium ${activeTab === 'diagnosis' ? 'bg-teal-100 border-b-2 border-teal-600' : ''}`}
        >
          Diagnosis
        </button>
        <button 
          onClick={() => setActiveTab('management')} 
          className={`px-4 py-2 font-medium ${activeTab === 'management' ? 'bg-teal-100 border-b-2 border-teal-600' : ''}`}
        >
          Management Principles
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-teal-100 border-b-2 border-teal-600' : ''}`}
        >
          Self Quiz
        </button>
        <button
          onClick={() => setActiveTab('pdf')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'pdf' ? 'bg-purple-100 border-b-2 border-purple-600' : 'text-gray-600 hover:text-purple-800'}`}
        >
          View PDF Pages (31-40)
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'hf_basics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Heart Failure (HF) Basics</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Definition</h3>
              <p className="mb-4">Heart failure is a complex clinical syndrome resulting from any structural or functional impairment of ventricular filling or ejection of blood. It leads to characteristic symptoms (e.g., dyspnea, fatigue) and signs (e.g., edema, rales).</p>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-3 text-teal-800">Types of Heart Failure (Based on Ejection Fraction)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Heart Failure with Reduced Ejection Fraction (HFrEF):</strong> LVEF ≤ 40%. Also known as systolic heart failure.</li>
                <li><strong>Heart Failure with Preserved Ejection Fraction (HFpEF):</strong> LVEF ≥ 50%. Also known as diastolic heart failure.</li>
                <li><strong>Heart Failure with Mid-Range Ejection Fraction (HFmrEF):</strong> LVEF 41-49%.</li>
              </ul>
              <p className="mt-3 text-sm">Note: Management strategies differ significantly between HFrEF and HFpEF.</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Common Causes</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Coronary Artery Disease (CAD) / Myocardial Infarction (MI)</li>
                <li>Hypertension (HTN)</li>
                <li>Valvular Heart Disease</li>
                <li>Cardiomyopathies (Dilated, Hypertrophic, Restrictive)</li>
                <li>Diabetes Mellitus (DM)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">A patient with shortness of breath has an echocardiogram showing a Left Ventricular Ejection Fraction (LVEF) of 35%. How would their heart failure be classified?</p>
              <button 
                onClick={() => toggleAnswer('hf-classification')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['hf-classification'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['hf-classification'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Heart Failure with Reduced Ejection Fraction (HFrEF), as the LVEF is ≤ 40%.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'diagnosis' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Diagnosis of Heart Failure</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Clinical Evaluation</h3>
              <p className="mb-3">Diagnosis relies on a combination of:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>History:</strong> Symptoms like dyspnea on exertion (DOE), orthopnea, paroxysmal nocturnal dyspnea (PND), fatigue, edema.</li>
                <li><strong>Physical Examination:</strong> Signs like elevated jugular venous pressure (JVP), S3 gallop, pulmonary rales (crackles), peripheral edema.</li>
                <li><strong>Risk Factors:</strong> Assessment for underlying causes like HTN, CAD, DM.</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-3 text-teal-800">Key Diagnostic Tests</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong>Natriuretic Peptides (BNP or NT-proBNP):</strong>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Elevated levels support HF diagnosis, especially in acute settings.</li>
                    <li>Normal levels make acute HF unlikely.</li>
                    <li>BNP {'>'} 100 pg/mL or NT-proBNP {'>'} 300 pg/mL are common thresholds.</li>
                  </ul>
                </li>
                <li>
                  <strong>Echocardiogram (Echo):</strong>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Essential for diagnosis, determining LVEF, assessing cardiac structure and function, and identifying potential causes (e.g., valvular disease).</li>
                    <li>Distinguishes HFrEF from HFpEF.</li>
                  </ul>
                </li>
                <li><strong>Electrocardiogram (ECG):</strong> Can show evidence of prior MI, LVH, arrhythmias. A completely normal ECG makes systolic dysfunction unlikely.</li>
                <li><strong>Chest X-ray (CXR):</strong> May show cardiomegaly, pulmonary congestion (e.g., Kerley B lines, pleural effusions).</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">Which diagnostic test is considered essential for classifying heart failure based on ejection fraction?</p>
              <button 
                onClick={() => toggleAnswer('hf-classify-test')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['hf-classify-test'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['hf-classify-test'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Echocardiogram (Echo). It directly measures the Left Ventricular Ejection Fraction (LVEF), which is the primary criterion for classifying HF into HFrEF, HFmrEF, and HFpEF.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'management' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Management Principles of Heart Failure</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">General Goals</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Improve symptoms and quality of life.</li>
                <li>Reduce hospitalizations.</li>
                <li>Slow disease progression.</li>
                <li>Improve survival.</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-3 text-teal-800">Non-Pharmacological Management</h3>
               <ul className="list-disc pl-5 space-y-2">
                <li>Sodium restriction ({'<'}2-3 g/day).</li>
                <li>Fluid restriction (often 1.5-2 L/day) in select patients (e.g., hyponatremia, volume overload).</li>
                <li>Regular aerobic exercise as tolerated.</li>
                <li>Weight monitoring (to detect fluid retention).</li>
                <li>Smoking cessation and alcohol limitation.</li>
                <li>Vaccinations (influenza, pneumococcal).</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Pharmacological Management (Focus on HFrEF)</h3>
              <p className="mb-3">Guideline-Directed Medical Therapy (GDMT) for HFrEF typically involves a combination of:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>ACE Inhibitor (ACEI), Angiotensin Receptor Blocker (ARB), or Angiotensin Receptor-Neprilysin Inhibitor (ARNI):</strong> Cornerstone therapy.</li>
                <li><strong>Beta-Blocker (evidence-based):</strong> Specifically carvedilol, metoprolol succinate, or bisoprolol.</li>
                <li><strong>Mineralocorticoid Receptor Antagonist (MRA):</strong> Spironolactone or eplerenone.</li>
                <li><strong>SGLT2 Inhibitor:</strong> Dapagliflozin or empagliflozin (now indicated regardless of diabetes status).</li>
                <li><strong>Diuretics (Loop):</strong> For symptom management (volume overload), e.g., furosemide. Do not improve mortality.</li>
              </ul>
              <p className="mt-3 text-sm">Note: Management of HFpEF focuses on managing comorbidities (HTN, AFib, obesity) and symptom relief with diuretics. Few therapies have shown mortality benefit in HFpEF.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">Which class of medications is primarily used for symptom relief (reducing congestion) in heart failure, but does not typically improve long-term mortality?</p>
              <button 
                onClick={() => toggleAnswer('hf-symptom-med')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['hf-symptom-med'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['hf-symptom-med'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Loop Diuretics (e.g., furosemide, bumetanide, torsemide). They are very effective at managing fluid overload and improving symptoms like dyspnea and edema, but they do not have a proven mortality benefit in HF.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Self Quiz - Heart Failure</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. Placeholder Question about classifying HF (HFrEF vs HFpEF)?</h4>
                <button 
                  onClick={() => toggleAnswer('hf-quiz1')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['hf-quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['hf-quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer related to LVEF thresholds.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. Placeholder Question about key diagnostic tests for HF?</h4>
                <button 
                  onClick={() => toggleAnswer('hf-quiz2')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['hf-quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['hf-quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer mentioning Echo, BNP/NT-proBNP.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. Placeholder Question about cornerstone medications for HFrEF?</h4>
                <button 
                  onClick={() => toggleAnswer('hf-quiz3')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['hf-quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['hf-quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer listing the main GDMT classes (ACEI/ARB/ARNI, Beta-blocker, MRA, SGLT2i).</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Study Guide PDF - Pages 31-40</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="mb-4">Click the link below to view the original PDF pages for this section (opens in a new tab).</p>
              <a
                href="/pdfs/680_CV_disorders_part_one_students_2023 (1)_31-40.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition font-medium"
              >
                Open PDF (Pages 31-40)
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Ensure the PDF file `680_CV_disorders_part_one_students_2023 (1)_31-40.pdf` is placed in the `public/pdfs` directory of your project.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVDisordersPagePart3; 