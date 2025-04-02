import React, { useState, useRef, useEffect } from 'react';
// Import react-pdf components and configure worker
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker source (ensure this matches the setup in Part 1)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CVDisordersPagePart2 = () => {
  const [activeTab, setActiveTab] = useState('acs_basics');
  const [showAnswers, setShowAnswers] = useState({});
  // State for PDF viewer and width
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(null);

  // Effect to measure container width
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
      <div className="w-full bg-orange-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Cardiovascular Disorders</h1>
        <p className="text-xl text-center mt-2">Part One: Pages 21-30 (ACS Basics, Diagnosis, Mgmt)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('acs_basics')}
          className={`px-4 py-2 font-medium ${activeTab === 'acs_basics' ? 'bg-orange-100 border-b-2 border-orange-600' : ''}`}
        >
          ACS Basics
        </button>
        <button 
          onClick={() => setActiveTab('diagnosis')}
          className={`px-4 py-2 font-medium ${activeTab === 'diagnosis' ? 'bg-orange-100 border-b-2 border-orange-600' : ''}`}
        >
          Diagnosis
        </button>
        <button 
          onClick={() => setActiveTab('management')}
          className={`px-4 py-2 font-medium ${activeTab === 'management' ? 'bg-orange-100 border-b-2 border-orange-600' : ''}`}
        >
          Management
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-orange-100 border-b-2 border-orange-600' : ''}`}
        >
          Self Quiz
        </button>
        <button
          onClick={() => setActiveTab('pdf')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'pdf' ? 'bg-orange-100 border-b-2 border-orange-600' : 'text-gray-600 hover:text-orange-800'}`}
        >
          View PDF Pages (21-30)
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'acs_basics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">ACS Basics</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Definition & Pathophysiology</h3>
              <p className="mb-3">Acute Coronary Syndrome (ACS) refers to a spectrum of conditions associated with sudden, reduced blood flow to the heart muscle (myocardial ischemia or infarction).</p>
              <p className="mb-3">It's most often caused by the rupture or erosion of an atherosclerotic plaque within a coronary artery. This rupture exposes thrombogenic material, leading to platelet aggregation and thrombus formation, which partially or completely occludes the artery.</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold mb-3 text-orange-800">Spectrum of ACS</h3>
              <p className="mb-3">ACS is classified based on ECG findings and cardiac biomarker levels:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Unstable Angina (UA):</strong> 
                  Symptoms of myocardial ischemia (e.g., chest pain) at rest or with minimal exertion, or a significant change from previous stable angina pattern. 
                  <span className="font-semibold">ECG:</span> May show ST depression, T-wave inversion, or be normal. 
                  <span className="font-semibold">Biomarkers:</span> Cardiac troponins are <span className="font-bold">negative</span> (no significant myocardial necrosis).
                </li>
                <li>
                  <strong>Non-ST-Segment Elevation Myocardial Infarction (NSTEMI):</strong>
                  Similar presentation to UA, but with evidence of myocardial necrosis. 
                  <span className="font-semibold">ECG:</span> Similar to UA (ST depression, T-wave inversion, or normal). No ST elevation.
                  <span className="font-semibold">Biomarkers:</span> Cardiac troponins are <span className="font-bold">positive</span> (elevated).
                </li>
                 <li>
                  <strong>ST-Segment Elevation Myocardial Infarction (STEMI):</strong>
                  Evidence of myocardial necrosis with characteristic ECG changes indicating complete coronary artery occlusion.
                  <span className="font-semibold">ECG:</span> ST-segment elevation in specific leads, or new Left Bundle Branch Block (LBBB).
                  <span className="font-semibold">Biomarkers:</span> Cardiac troponins are <span className="font-bold">positive</span> (elevated).
                </li>
              </ul>
              <p className="mt-3 text-sm">Note: UA and NSTEMI are often grouped together as Non-ST-Segment Elevation ACS (NSTE-ACS) due to similar initial management strategies.</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Common Symptoms</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Chest pain/pressure/discomfort (often described as squeezing, heavy, tight; may radiate to jaw, neck, arms, back)</li>
                <li>Dyspnea (Shortness of breath)</li>
                <li>Diaphoresis (Sweating)</li>
                <li>Nausea/Vomiting</li>
                <li>Fatigue/Weakness</li>
                <li>Dizziness/Lightheadedness</li>
              </ul>
               <p className="mt-3 text-sm text-gray-600">Atypical presentations (e.g., epigastric pain, fatigue only) are more common in women, the elderly, and patients with diabetes.</p>
            </div>
          </div>
        )}
        
        {activeTab === 'diagnosis' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Diagnosis of ACS</h2>
            <p className="text-lg text-gray-700 mb-4">Diagnosis relies on integrating clinical presentation, ECG findings, and cardiac biomarker results.</p>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">1. Clinical Presentation (History & Physical)</h3>
               <ul className="list-disc pl-5 space-y-1">
                 <li>Detailed description of symptoms (PQRST: Provocation/Palliation, Quality, Radiation, Severity, Timing).</li>
                 <li>Assessment of cardiovascular risk factors.</li>
                 <li>Physical exam may reveal signs of heart failure (rales, JVD, S3), arrhythmias, or hemodynamic instability, but can often be normal.</li>
               </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold mb-3 text-orange-800">2. Electrocardiogram (ECG)</h3>
               <ul className="list-disc pl-5 space-y-2">
                 <li><strong>Crucial first step:</strong> Obtain within 10 minutes of presentation for chest pain/ACS symptoms.</li>
                 <li><strong>STEMI Findings:</strong> New ST-segment elevation (≥1 mm in ≥2 contiguous limb leads or ≥2 mm in ≥2 contiguous precordial leads) or new LBBB. Indicates need for immediate reperfusion.</li>
                 <li><strong>NSTE-ACS Findings (UA/NSTEMI):</strong> ST depression (≥0.5 mm), T-wave inversion (≥1 mm), or transient ST elevation. ECG can also be normal.</li>
                 <li><strong>Reciprocal Changes:</strong> ST depression in leads opposite to those with ST elevation can help confirm STEMI.</li>
                 <li><strong>Localization:</strong> The leads showing ST elevation often indicate the area of infarction (e.g., II, III, aVF = Inferior; V1-V4 = Anterior).</li>
                 <li><strong>Serial ECGs:</strong> Important if initial ECG is non-diagnostic, as changes can evolve.</li>
               </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">3. Cardiac Biomarkers (Troponins)</h3>
               <ul className="list-disc pl-5 space-y-1">
                 <li><strong>Troponin I or Troponin T:</strong> Preferred markers due to high sensitivity and specificity for myocardial injury.</li>
                 <li><strong>Significance:</strong> Elevated levels indicate myocardial necrosis (infarction).</li>
                 <li><strong>Timing:</strong> Begin to rise 2-4 hours after injury onset, peak around 12-24 hours, remain elevated for days.</li>
                 <li><strong>Serial Measurements:</strong> Typically drawn on presentation and repeated 3-6 hours later (using high-sensitivity assays may allow earlier rule-out/rule-in).</li>
                 <li><strong>Distinguishes UA from NSTEMI:</strong> Troponins are <span className="font-bold">negative</span> in UA and <span className="font-bold">positive</span> in NSTEMI and STEMI.</li>
                 <li><strong>CK-MB:</strong> Less specific than troponin; may still be used in some settings, returns to baseline faster (useful for detecting re-infarction).</li>
               </ul>
            </div>
             <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold mb-3 text-orange-800">Risk Stratification</h3>
              <p>Tools like TIMI (Thrombolysis in Myocardial Infarction) and GRACE (Global Registry of Acute Coronary Events) scores help predict risk of adverse outcomes in NSTE-ACS and guide decisions about invasive strategies.</p>
            </div>
          </div>
        )}
        
        {activeTab === 'management' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Management of ACS</h2>
            <p className="text-lg text-gray-700 mb-4">Goals: Relieve ischemia/pain, prevent further thrombus formation/myocardial damage, restore blood flow (especially in STEMI), and prevent complications.</p>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Initial Management (All ACS Suspected)</h3>
              <p className="mb-2">Focus on rapid assessment and initiation of therapies:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>ECG:</strong> Obtain and interpret within 10 minutes.</li>
                <li><strong>Oxygen:</strong> Supplemental O2 if O2 saturation {'<'} 90% or respiratory distress.</li>
                <li><strong>Aspirin (ASA):</strong> Chewable non-enteric coated (162-325 mg) ASAP. Antiplatelet effect.</li>
                <li><strong>Nitroglycerin (NTG):</strong> Sublingual or IV for ongoing chest pain, HTN, or HF signs. Vasodilator. (Contraindicated if hypotension, recent PDE5 inhibitor use, suspected RV infarction).</li>
                <li><strong>Pain Control:</strong> Morphine IV if pain persists despite NTG. Use cautiously (can mask symptoms, potential adverse effects).</li>
                <li><strong>Beta-Blockers:</strong> Oral BB within 24 hours if no contraindications (e.g., signs of HF, low output state, risk of shock). Reduces myocardial oxygen demand.</li>
              </ul>
              <p className="mt-2 text-sm">Mnemonic <span className="font-mono">"MONA"</span> (Morphine, Oxygen, Nitrates, Aspirin) is often taught but order/indication varies. Focus on timely ECG, ASA, and appropriate use of other agents.</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold mb-3 text-orange-800">Management Based on ACS Type</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-2">STEMI</h4>
                <p className="mb-2"><span className="font-bold">Reperfusion is KEY!</span> Goal is to restore blood flow ASAP.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Primary Percutaneous Coronary Intervention (PCI):</strong> Preferred strategy if available within recommended timeframes (door-to-balloon typically ≤ 90 minutes). Angioplasty +/- stent.</li>
                  <li><strong>Fibrinolysis ("Clot Buster"):</strong> If PCI is not available promptly (e.g., {'>'}120 minutes from first medical contact). Administer within 30 minutes of arrival (door-to-needle). Examples: alteplase, tenecteplase.</li>
                  <li><strong>Antiplatelet Therapy:</strong> Dual Antiplatelet Therapy (DAPT) = ASA + P2Y12 inhibitor (e.g., clopidogrel, prasugrel, ticagrelor).</li>
                  <li><strong>Anticoagulation:</strong> Heparin (unfractionated or LMWH) or bivalirudin often used adjunctively.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">NSTE-ACS (UA/NSTEMI)</h4>
                 <ul className="list-disc pl-5 space-y-1">
                   <li><strong>Antiplatelet Therapy:</strong> DAPT (ASA + P2Y12 inhibitor).</li>
                   <li><strong>Anticoagulation:</strong> Heparin (UFH or LMWH), fondaparinux, or bivalirudin.</li>
                   <li><strong>Risk Stratification:</strong> Determines timing of intervention.</li>
                   <li><strong>Invasive Strategy:</strong> Coronary angiography +/- revascularization (PCI or CABG). Timing depends on risk (immediate for instability, early for high-risk, delayed/ischemia-guided for lower-risk).</li>
                   <li><strong>Conservative Strategy:</strong> Medical management initially, angiography if recurrent symptoms/ischemia or positive stress test.</li>
                   <li>Continue Beta-blockers, consider ACE inhibitors/ARBs, Statins.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
               <h3 className="text-xl font-bold mb-3">Long-Term Management (Secondary Prevention)</h3>
               <p>Crucial after any ACS event. Includes lifestyle changes (diet, exercise, smoking cessation) and medications like DAPT (duration varies), Beta-blockers, Statins (high-intensity), ACE inhibitors/ARBs (especially if EF low, HTN, DM, CKD).</p>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Self Quiz - ACS Basics, Dx, Mgmt</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              {/* Question 1 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. How is Unstable Angina (UA) differentiated from NSTEMI based on diagnostic tests?</h4>
                <button 
                  onClick={() => toggleAnswer('acs_quiz1')}
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                  {showAnswers['acs_quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs_quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Both UA and NSTEMI can have similar ECG findings (ST depression, T-wave inversion, or normal ECG). The key difference is cardiac biomarkers: Troponins are <span className="font-bold">negative</span> in UA and <span className="font-bold">positive</span> in NSTEMI, indicating myocardial necrosis in NSTEMI.</p>
                  </div>
                )}
              </div>
              
              {/* Question 2 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. What are the characteristic ECG findings suggestive of a STEMI?</h4>
                <button 
                  onClick={() => toggleAnswer('acs_quiz2')}
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                  {showAnswers['acs_quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs_quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>New ST-segment elevation (≥1 mm in ≥2 contiguous limb leads or ≥2 mm in ≥2 contiguous precordial leads) or a new Left Bundle Branch Block (LBBB).</p>
                  </div>
                )}
              </div>
              
              {/* Question 3 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. An ECG shows ST elevation in leads II, III, and aVF. Which area of the heart is likely experiencing infarction?</h4>
                <button 
                  onClick={() => toggleAnswer('acs_quiz3')}
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                  {showAnswers['acs_quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs_quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Inferior wall of the left ventricle.</p>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">4. What is the preferred reperfusion strategy for STEMI if it can be performed within 90 minutes of first medical contact?</h4>
                <button 
                  onClick={() => toggleAnswer('acs_quiz4')}
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                  {showAnswers['acs_quiz4'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs_quiz4'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Primary Percutaneous Coronary Intervention (PCI).</p>
                  </div>
                )}
              </div>

              {/* Question 5 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">5. Beyond Aspirin, what class of medication is crucial for initial antiplatelet therapy in both STEMI and NSTE-ACS? Give an example.</h4>
                <button 
                  onClick={() => toggleAnswer('acs_quiz5')}
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                  {showAnswers['acs_quiz5'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs_quiz5'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>A P2Y12 inhibitor. Examples include clopidogrel, ticagrelor, or prasugrel (choice depends on clinical scenario and whether PCI is planned).</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Study Guide PDF - Pages 21-30</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <p className="mb-4 text-center">
                Displaying pages 21-30 from the study guide PDF.
              </p>
              <div 
                ref={pdfContainerRef} 
                className="pdf-container border border-gray-300 mb-4 w-full max-w-3xl" 
                style={{ height: '70vh', overflowY: 'auto' }}
              >
                <Document
                  file="/pdfs/680_CV_disorders_part_one_students_2023 (1)_21-30.pdf"
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
                Ensure the PDF file `680_CV_disorders_part_one_students_2023 (1)_21-30.pdf` is placed in the `public/pdfs` directory.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVDisordersPagePart2; 