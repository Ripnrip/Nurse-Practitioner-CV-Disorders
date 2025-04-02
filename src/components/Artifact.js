import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const HypertensionStudyApp = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [showAnswers, setShowAnswers] = useState({});
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(null);

  useEffect(() => {
    const currentRef = pdfContainerRef.current;
    if (currentRef) {
      const handleResize = () => {
        setContainerWidth(currentRef.clientWidth);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleAnswer = (id) => {
    setShowAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full bg-blue-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Hypertension in the Elderly</h1>
        <p className="text-xl text-center mt-2">Interactive Study Guide (Part 2)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('history')} 
          className={`px-4 py-2 font-medium ${activeTab === 'history' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Patient History
        </button>
        <button 
          onClick={() => setActiveTab('physical')} 
          className={`px-4 py-2 font-medium ${activeTab === 'physical' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Physical Exam
        </button>
        <button 
          onClick={() => setActiveTab('diagnosis')} 
          className={`px-4 py-2 font-medium ${activeTab === 'diagnosis' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Diagnosis
        </button>
        <button 
          onClick={() => setActiveTab('guidelines')} 
          className={`px-4 py-2 font-medium ${activeTab === 'guidelines' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Guidelines
        </button>
        <button 
          onClick={() => setActiveTab('diagnostic')} 
          className={`px-4 py-2 font-medium ${activeTab === 'diagnostic' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Diagnostic Tests
        </button>
        <button 
          onClick={() => setActiveTab('treatment')} 
          className={`px-4 py-2 font-medium ${activeTab === 'treatment' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Treatment
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Self Quiz
        </button>
        <button
          onClick={() => setActiveTab('pdf')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'pdf' ? 'bg-blue-100 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-800'}`}
        >
          View PDF Pages (11-20)
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'history' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Important Aspects of the History in Hypertension</h2>
            
            <div className="overflow-x-auto border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Elements to Assess</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Duration of hypertension</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Last known normal blood pressure</li>
                        <li>Course of the blood pressure</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Prior treatment of hypertension</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Drugs: types, doses, side effects</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Intake of agents that may cause hypertension</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Nonsteroidal antiinflammatory drugs</li>
                        <li>Estrogens</li>
                        <li>Adrenal steroids</li>
                        <li>Cocaine</li>
                        <li>Sympathomimetics</li>
                        <li>Excessive sodium</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Family history</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Hypertension</li>
                        <li>Premature cardiovascular disease or death</li>
                        <li>Familial diseases: pheochromocytoma, renal disease, diabetes, gout</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Symptoms of secondary causes</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Muscle weakness</li>
                        <li>Spells of tachycardia, sweating, tremor</li>
                        <li>Thinning of the skin</li>
                        <li>Flank pain</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Symptoms of target-organ damage</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Headaches</li>
                        <li>Transient weakness or blindness</li>
                        <li>Loss of visual acuity</li>
                        <li>Chest pain</li>
                        <li>Dyspnea</li>
                        <li>Claudication</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Presence of other risk factors</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Smoking</li>
                        <li>Diabetes</li>
                        <li>Dyslipidemia</li>
                        <li>Physical inactivity</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Dietary history</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Sodium</li>
                        <li>Processed foods</li>
                        <li>Alcohol</li>
                        <li>Saturated fats</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Psychosocial factors</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Family structure</li>
                        <li>Work status</li>
                        <li>Educational level</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Sexual function</td>
                    <td className="px-6 py-4">
                      <p>Assessment of sexual function</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Features of sleep apnea</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Early morning headaches</li>
                        <li>Daytime somnolence</li>
                        <li>Loud snoring</li>
                        <li>Erratic sleep</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">Which of these historical features would suggest a possible secondary cause of hypertension?</p>
              <button 
                onClick={() => toggleAnswer('secondary-cause')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['secondary-cause'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['secondary-cause'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <ul className="list-disc pl-5">
                    <li>Spells of tachycardia, sweating, and tremor (suggestive of pheochromocytoma)</li>
                    <li>Muscle weakness (could suggest hyperaldosteronism)</li>
                    <li>Thinning of the skin (could suggest Cushing's syndrome)</li>
                    <li>Flank pain (could suggest renal artery stenosis or other kidney disorders)</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'physical' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Physical Examination in Hypertensive Patients</h2>
            
            <div className="overflow-x-auto border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Elements to Assess</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Blood Pressure</td>
                    <td className="px-6 py-4">Accurate measurement of blood pressure</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">General appearance</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Distribution of body fat</li>
                        <li>Skin lesions</li>
                        <li>Muscle strength</li>
                        <li>Alertness</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Fundoscopy</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Hemorrhage</li>
                        <li>Papilledema</li>
                        <li>Cotton wool spots</li>
                        <li>Arteriolar narrowing and arteriovenous nicking</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Neck</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Palpation and auscultation of carotids</li>
                        <li>Thyroid</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Heart</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Size</li>
                        <li>Rhythm</li>
                        <li>Sounds</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Lungs</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Rhonchi</li>
                        <li>Rales</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Abdomen</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Renal masses</li>
                        <li>Bruits over aorta or renal arteries</li>
                        <li>Femoral pulses</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Extremities</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Peripheral pulses</li>
                        <li>Edema</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Neurologic assessment</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-5">
                        <li>Visual disturbance</li>
                        <li>Focal weakness</li>
                        <li>Confusion</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Focus On: Fundoscopic Examination</h3>
              <p className="mb-3">Fundoscopic examination is crucial in hypertensive patients as it allows direct visualization of the effects of hypertension on blood vessels.</p>
              <p className="mb-3">The Keith-Wagener-Barker classification of hypertensive retinopathy:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Grade I:</strong> Mild narrowing or sclerosis of arterioles</li>
                <li><strong>Grade II:</strong> Moderate to marked sclerosis of arterioles with arteriovenous nicking</li>
                <li><strong>Grade III:</strong> Grade II plus flame hemorrhages, cotton-wool spots, and hard exudates</li>
                <li><strong>Grade IV:</strong> Grade III plus papilledema</li>
              </ul>
              <p className="mt-3">Grades III and IV are associated with increased cardiovascular risk and end-organ damage.</p>
            </div>
          </div>
        )}

        {activeTab === 'diagnosis' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Diagnosis of Hypertension</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Diagnostic Criteria</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>All adults 18 years and older without known HTN should be screened for elevated BP (USPSTF et al., 2021).</li>
                <li>To diagnose HTN, the provider should use an average of two or more readings obtained on two or more occasions.</li>
                <li>Out of office BP measurements (ambulatory or home BP monitoring) are recommended to confirm the diagnosis of HTN before starting treatment.</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h4 className="font-bold text-blue-800 mb-2">Key Point:</h4>
                <p>Proper technique and multiple measurements are essential for accurate diagnosis of hypertension, as a single elevated reading may not reflect true hypertension.</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Hypertension Guidelines: JNC8 vs. ACC/AHA</h3>
              <p className="mb-3">There has been confusion due to different guidelines. As of 2023, primary care is slowly abandoning JNC8 guidelines and adopting the ACC/AHA 2017 guidelines.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">JNC8 Diagnostic Criteria</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Age &lt;60 years: SBP ≥140 mm Hg and/or DBP ≥90 mm Hg</li>
                    <li>Age 60 years or older: SBP ≥150 mm Hg and/or DBP ≥90 mm Hg</li>
                    <li>Age 60 years or older with CKD or diabetes: SBP ≥140 mm Hg and/or DBP ≥90 mm Hg</li>
                    <li>Pre-hypertension: SBP ≥120 mm Hg and/or DBP ≥80 mm Hg</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">ACC/AHA 2017 Guidelines</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Normal: SBP &lt;120 mm Hg and DBP &lt;80 mm Hg</li>
                    <li>Elevated: SBP 120-129 mm Hg and DBP &lt;80 mm Hg</li>
                    <li>Stage 1 HTN: SBP 130-139 mm Hg or DBP 80-89 mm Hg</li>
                    <li>Stage 2 HTN: SBP ≥140 mm Hg or DBP ≥90 mm Hg</li>
                    <li>Hypertensive Crisis: SBP &gt;180 mm Hg and/or DBP &gt;120 mm Hg</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-green-800">Practice Question</h3>
              <p className="mb-4">According to the ACC/AHA 2017 guidelines, a 72-year-old patient with a blood pressure of 138/88 mm Hg would be classified as having:</p>
              <button 
                onClick={() => toggleAnswer('bp-classification')}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                {showAnswers['bp-classification'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['bp-classification'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Stage 1 Hypertension</strong></p>
                  <p>According to ACC/AHA 2017 guidelines, Stage 1 HTN is defined as SBP 130-139 mm Hg or DBP 80-89 mm Hg. This patient's BP of 138/88 mm Hg falls within this range.</p>
                  <p>Note that under the JNC8 guidelines, this same reading would be considered normal for a patient over 60 years unless they had CKD or diabetes.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'guidelines' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Hypertension Guidelines</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">ACC/AHA Blood Pressure Categories (2017)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="border border-gray-300 p-2">BP Category</th>
                      <th className="border border-gray-300 p-2">Systolic (mm Hg)</th>
                      <th className="border border-gray-300 p-2">Relationship</th>
                      <th className="border border-gray-300 p-2">Diastolic (mm Hg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-100">
                      <td className="border border-gray-300 p-2 font-medium">Normal</td>
                      <td className="border border-gray-300 p-2">Less than 120</td>
                      <td className="border border-gray-300 p-2 text-center">and</td>
                      <td className="border border-gray-300 p-2">Less than 80</td>
                    </tr>
                    <tr className="bg-yellow-100">
                      <td className="border border-gray-300 p-2 font-medium">Elevated</td>
                      <td className="border border-gray-300 p-2">120-129</td>
                      <td className="border border-gray-300 p-2 text-center">and</td>
                      <td className="border border-gray-300 p-2">Less than 80</td>
                    </tr>
                    <tr className="bg-orange-100">
                      <td className="border border-gray-300 p-2 font-medium">Hypertension Stage 1</td>
                      <td className="border border-gray-300 p-2">130-139</td>
                      <td className="border border-gray-300 p-2 text-center">or</td>
                      <td className="border border-gray-300 p-2">80-89</td>
                    </tr>
                    <tr className="bg-red-100">
                      <td className="border border-gray-300 p-2 font-medium">Hypertension Stage 2</td>
                      <td className="border border-gray-300 p-2">140 or higher</td>
                      <td className="border border-gray-300 p-2 text-center">or</td>
                      <td className="border border-gray-300 p-2">90 or higher</td>
                    </tr>
                    <tr className="bg-red-300">
                      <td className="border border-gray-300 p-2 font-medium">Hypertensive Crisis</td>
                      <td className="border border-gray-300 p-2">Higher than 180</td>
                      <td className="border border-gray-300 p-2 text-center">and/or</td>
                      <td className="border border-gray-300 p-2">Higher than 120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-3 text-blue-800">American Academy of Nurse Practitioners Guidance</h3>
              <p className="mb-3">The American Academy of Nurse Practitioners has acknowledged both guidelines, noting:</p>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                "September 2018 - The American College of Cardiology (ACC) / American Heart Association (AHA) hypertension guideline published in November 2017 introduced new blood-pressure categories lowering the threshold for the diagnosis of hypertension. The 2018 certification examinations use the 2017 ACC/AHA and JNC-8 guidelines to reference test items. While treatment targets may differ among various guidelines, it is important to keep evaluation of the individual's health as the central concern."
              </blockquote>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Key Differences Between Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">JNC8 Focus</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Different thresholds based on age and comorbidities</li>
                    <li>Higher threshold (150/90) for adults ≥60 years without comorbidities</li>
                    <li>Focus on evidence from randomized controlled trials</li>
                    <li>More conservative approach with fewer patients classified as hypertensive</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">ACC/AHA 2017 Focus</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Lower threshold for defining hypertension (130/80)</li>
                    <li>Introduction of "Elevated" category for early intervention</li>
                    <li>More aggressive approach to earlier diagnosis and treatment</li>
                    <li>Greater emphasis on cardiovascular risk to guide treatment decisions</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm">Note: As of 2023, primary care is slowly abandoning JNC8 guidelines and adopting the ACC/AHA 2017 guidelines.</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-green-800">Practice Question</h3>
              <p className="mb-4">Which of the following patients would be classified differently under JNC8 versus ACC/AHA 2017 guidelines?</p>
              <button 
                onClick={() => toggleAnswer('guideline-difference')}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                {showAnswers['guideline-difference'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['guideline-difference'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>A 65-year-old with BP 145/85 without diabetes or CKD</strong></p>
                  <p>Under JNC8: Not hypertensive (threshold for age ≥60 without comorbidities is 150/90)</p>
                  <p>Under ACC/AHA 2017: Stage 2 Hypertension (SBP ≥140 or DBP ≥90)</p>
                  <p>This illustrates the significant difference in classification that can occur, particularly in older adults without comorbidities.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'diagnostic' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Diagnostic Tests</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Urinary Albumin-Creatinine Ratio (UACR)</h3>
              <p className="mb-3">The UACR is a simple, non-invasive test that can help detect early kidney damage in patients with hypertension.</p>
              <p className="mb-3">Normal values are typically less than 30 mg/mmol for urine albumin and less than 10 mg/mmol for urine creatinine.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h4 className="font-bold text-blue-800 mb-2">Other Tests</h4>
              <p>Other tests that may be used in the diagnosis of hypertension include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Electrocardiogram (ECG)</li>
                <li>Echocardiogram</li>
                <li>24-hour ambulatory blood pressure monitoring</li>
                <li>Carotid ultrasonography</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'treatment' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Treatment Options for Hypertension</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Lifestyle Modifications</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Dietary Approaches to Stop Hypertension (DASH) diet</li>
                <li>Reduction of sodium intake</li>
                <li>Regular physical activity</li>
                <li>Weight loss for overweight individuals</li>
                <li>Moderation of alcohol intake</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h4 className="font-bold text-blue-800 mb-2">Pharmacological Treatment</h4>
              <p>Pharmacological treatment should be considered for patients with Stage 1 hypertension who have a history of cardiovascular disease or are at high risk for cardiovascular events.</p>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Self Quiz - Hypertension Part 2</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              {/* Question 1 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. What are the four grades of hypertensive retinopathy (Keith-Wagener-Barker classification), and which grades indicate higher cardiovascular risk?</h4>
                <button 
                  onClick={() => toggleAnswer('htn_quiz1')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['htn_quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['htn_quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p><strong>Grades:</strong></p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Grade I: Mild arteriolar narrowing/sclerosis</li>
                      <li>Grade II: Moderate/marked sclerosis + AV nicking</li>
                      <li>Grade III: Grade II + hemorrhages, cotton-wool spots, exudates</li>
                      <li>Grade IV: Grade III + papilledema</li>
                    </ul>
                    <p className="mt-2"><strong>Higher Risk:</strong> Grades III and IV are associated with increased cardiovascular risk and end-organ damage.</p>
                  </div>
                )}
              </div>
              
              {/* Question 2 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. According to the 2017 ACC/AHA guidelines, how is Stage 1 Hypertension defined (Systolic and Diastolic values)?</h4>
                <button 
                  onClick={() => toggleAnswer('htn_quiz2')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['htn_quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['htn_quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Stage 1 Hypertension is defined as a Systolic Blood Pressure (SBP) of 130-139 mm Hg OR a Diastolic Blood Pressure (DBP) of 80-89 mm Hg.</p>
                  </div>
                )}
              </div>
              
              {/* Question 3 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. Why is obtaining out-of-office blood pressure measurements (like home or ambulatory monitoring) recommended before starting hypertension treatment?</h4>
                <button 
                  onClick={() => toggleAnswer('htn_quiz3')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['htn_quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['htn_quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Out-of-office measurements help confirm the diagnosis of hypertension and rule out "white coat hypertension" (elevated BP only in the clinical setting). They provide a more accurate picture of the patient's usual blood pressure before committing to long-term medication.</p>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">4. Name three key lifestyle modifications recommended for managing hypertension.</h4>
                <button 
                  onClick={() => toggleAnswer('htn_quiz4')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['htn_quiz4'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['htn_quiz4'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Any three of the following:</p>
                    <ul className="list-disc pl-5 mt-1">
                        <li>Weight loss (if overweight/obese)</li>
                        <li>Heart-healthy diet (e.g., DASH diet - rich in fruits, vegetables, low-fat dairy, reduced saturated/total fat)</li>
                        <li>Dietary sodium reduction (&lt;1500 mg/day ideally)</li>
                        <li>Regular aerobic physical activity (e.g., ≥150 min/week moderate-intensity)</li>
                        <li>Moderation of alcohol consumption</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Question 5 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">5. A patient reports spells of tachycardia, sweating, and tremor during the history taking. What potential secondary cause of hypertension might this suggest?</h4>
                <button 
                  onClick={() => toggleAnswer('htn_quiz5')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['htn_quiz5'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['htn_quiz5'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>These symptoms (paroxysms of tachycardia, sweating, tremor) are classic signs suggestive of Pheochromocytoma, a catecholamine-secreting tumor.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
        
        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Study Guide PDF - Pages 11-20</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <p className="mb-4 text-center">
                Displaying pages 11-20 from the study guide PDF.
              </p>
              <div 
                ref={pdfContainerRef} 
                className="pdf-container border border-gray-300 mb-4 w-full max-w-3xl" 
                style={{ height: '70vh', overflowY: 'auto' }}
              >
                <Document
                  file={`${process.env.PUBLIC_URL}/pdfs/680_CV_disorders_part_one_students_2023 (1)_11-20.pdf`}
                  onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                  onLoadError={(error) => console.error('Error loading PDF:', error)}
                  loading={<p>Loading PDF...</p>}
                  error={<p>Error loading PDF. Make sure the file exists in `public/pdfs`.</p>}
                >
                  <Page 
                    pageNumber={pageNumber} 
                    renderTextLayer={false} 
                    width={containerWidth ? containerWidth : undefined}
                  />
                </Document>
              </div>
              {numPages && (
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}
                    disabled={pageNumber <= 1}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span>
                    Page {pageNumber} of {numPages}
                  </span>
                  <button
                    onClick={() => setPageNumber(prev => Math.min(numPages, prev + 1))}
                    disabled={pageNumber >= numPages}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
              <p className="mt-4 text-sm text-gray-600 text-center">
                Ensure the PDF file `680_CV_disorders_part_one_students_2023 (1)_11-20.pdf` is placed in the `public/pdfs` directory.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HypertensionStudyApp;