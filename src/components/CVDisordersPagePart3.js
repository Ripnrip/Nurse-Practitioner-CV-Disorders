import React, { useState, useRef, useEffect } from 'react';
// Import react-pdf components and configure worker
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CVDisordersPagePart3 = () => {
  const [activeTab, setActiveTab] = useState('acs_complications');
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
      <div className="w-full bg-purple-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Cardiovascular Disorders</h1>
        <p className="text-xl text-center mt-2">Part One: Pages 31-40 (ACS Complications/Mgmt Cont.)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('acs_complications')} 
          className={`px-4 py-2 font-medium ${activeTab === 'acs_complications' ? 'bg-purple-100 border-b-2 border-purple-600' : ''}`}
        >
          ACS Complications
        </button>
        <button 
          onClick={() => setActiveTab('special_pops')} 
          className={`px-4 py-2 font-medium ${activeTab === 'special_pops' ? 'bg-purple-100 border-b-2 border-purple-600' : ''}`}
        >
          Special Populations
        </button>
        <button 
          onClick={() => setActiveTab('post_mi_mgmt')} 
          className={`px-4 py-2 font-medium ${activeTab === 'post_mi_mgmt' ? 'bg-purple-100 border-b-2 border-purple-600' : ''}`}
        >
          Post-MI Management
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-purple-100 border-b-2 border-purple-600' : ''}`}
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
        {activeTab === 'acs_complications' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">ACS Complications</h2>
            <p className="text-lg text-gray-700 mb-4">Myocardial infarction can lead to various complications, categorized broadly as electrical or mechanical.</p>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Electrical Complications (Arrhythmias)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Ventricular Arrhythmias (VT/VF):</strong> Most common cause of death in early phase post-MI. Due to ischemia, reentry circuits, or electrolyte imbalances. Management: Defibrillation/cardioversion, antiarrhythmics (amiodarone, lidocaine), ICD for secondary prevention if EF remains low.</li>
                <li><strong>Supraventricular Tachycardias (SVT):</strong> Includes Atrial Fibrillation (AFib - common post-MI due to atrial stretch/inflammation), atrial flutter, AVNRT. Management: Rate control (beta-blockers, calcium channel blockers), rhythm control, anticoagulation (especially for AFib).</li>
                <li><strong>Bradyarrhythmias & Heart Block:</strong> Sinus bradycardia, AV block (1st, 2nd, 3rd degree). Often seen with inferior MI (affecting AV node blood supply). Management: Atropine, temporary pacing, permanent pacemaker if block persists.</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-3 text-purple-800">Mechanical Complications</h3>
              <p className="mb-2">Less common but often catastrophic. Usually occur days after MI due to myocardial necrosis and weakening.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Ventricular Free Wall Rupture:</strong> Leads to hemopericardium and tamponade. Often fatal. Presentation: Sudden hemodynamic collapse, JVD. Management: Emergent pericardiocentesis & surgery.</li>
                <li><strong>Ventricular Septal Rupture (VSR):</strong> Creates a VSD (hole between ventricles). Presentation: New harsh holosystolic murmur, signs of acute heart failure/cardiogenic shock. Management: Vasodilators, IABP (intra-aortic balloon pump) bridge to surgical repair.</li>
                <li><strong>Papillary Muscle Rupture:</strong> Causes acute severe Mitral Regurgitation (MR). Presentation: New holosystolic murmur (often radiates to axilla), acute pulmonary edema/shock. Management: Vasodilators, IABP bridge to urgent mitral valve surgery.</li>
                <li><strong>Left Ventricular Aneurysm:</strong> Scar tissue bulges outward. Risks: Thrombus formation, HF, arrhythmias. Presentation: Persistent ST elevation weeks post-MI, HF symptoms. Management: Anticoagulation, HF meds, possible surgical resection.</li>
              </ul>
            </div>
            
             <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Other Complications</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Heart Failure (Acute or Chronic):</strong> Due to loss of contractile function.</li>
                <li><strong>Cardiogenic Shock:</strong> Severe LV dysfunction leading to tissue hypoperfusion.</li>
                <li><strong>Pericarditis (Acute or Dressler's Syndrome):</strong> Inflammation of the pericardium.</li>
                <li><strong>Thromboembolism:</strong> LV thrombus formation (especially with anterior MI/aneurysm) leading to stroke or peripheral embolism.</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'special_pops' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">ACS in Special Populations</h2>
            <p className="text-lg text-gray-700 mb-4">Presentation and management may differ in certain groups.</p>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Elderly Patients</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Atypical Presentation:</strong> More likely to present with dyspnea, confusion, fatigue, syncope, or abdominal pain rather than classic chest pain.</li>
                <li><strong>Comorbidities:</strong> Higher prevalence of conditions like CKD, DM, previous stroke, which increase risk and complicate management.</li>
                <li><strong>Treatment Considerations:</strong> Benefit from reperfusion and standard therapies, but higher risk of complications (e.g., bleeding with antithrombotics, contrast nephropathy). Dosing adjustments may be needed. Goals of care discussions are important.</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-3 text-purple-800">Women</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Atypical Presentation:</strong> Also more likely to have atypical symptoms (e.g., fatigue, jaw/back pain, nausea) alongside or instead of chest pain.</li>
                <li><strong>Delayed Presentation/Diagnosis:</strong> May lead to worse outcomes.</li>
                <li><strong>Pathophysiology:</strong> Higher proportion of non-obstructive CAD (MINOCA) or plaque erosion rather than rupture compared to men.</li>
                <li><strong>Treatment:</strong> Generally benefit from same therapies as men, but may have higher bleeding risk with some agents.</li>
              </ul>
            </div>

             <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Patients with Diabetes Mellitus (DM)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Atypical Presentation:</strong> "Silent MI" or atypical symptoms are common due to autonomic neuropathy.</li>
                <li><strong>Increased Risk:</strong> DM is a major risk factor for CAD and associated with worse outcomes post-MI.</li>
                <li><strong>Complications:</strong> Higher risk of HF, CKD, cardiogenic shock.</li>
                <li><strong>Management:</strong> Benefit significantly from standard therapies. Glycemic control is important, but intensive control during acute phase is controversial. Statins, ACEi/ARBs are crucial.</li>
              </ul>
            </div>
            
             <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-3 text-purple-800">Patients with Chronic Kidney Disease (CKD)</h3>
               <ul className="list-disc pl-5 space-y-1">
                 <li><strong>Increased Risk & Worse Outcomes:</strong> CKD significantly increases risk of ACS and mortality.</li>
                 <li><strong>Diagnostic Challenges:</strong> Baseline troponin levels may be elevated. Interpretation requires assessing trends.</li>
                 <li><strong>Treatment Considerations:</strong> Higher bleeding risk. Dose adjustments needed for many medications (e.g., LMWH, some P2Y12 inhibitors). Risk of contrast nephropathy with angiography. Benefits of invasive strategies may be less clear in advanced CKD.</li>
               </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'post_mi_mgmt' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Post-MI Management & Secondary Prevention</h2>
            <p className="text-lg text-gray-700 mb-4">Focuses on reducing risk of recurrent events, preventing complications, and improving long-term survival.</p>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Risk Stratification Post-MI</h3>
               <ul className="list-disc pl-5 space-y-1">
                 <li><strong>Assessment of LV Function:</strong> Echocardiogram typically performed before discharge or shortly after to measure LVEF. Key for guiding therapy (e.g., need for ACEi/ARB, MRA, potential ICD).</li>
                 <li><strong>Assessment for Residual Ischemia:</strong> Stress testing may be considered before discharge in stable patients who did not undergo angiography (especially NSTEMI/UA) to guide need for revascularization.</li>
                 <li><strong>Assessment for Arrhythmias:</strong> Monitoring for ventricular arrhythmias. Holter monitoring may be used.</li>
               </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-3 text-purple-800">Guideline-Directed Medical Therapy (GDMT)</h3>
              <p className="mb-2">These medications form the cornerstone of secondary prevention:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Dual Antiplatelet Therapy (DAPT):</strong> Aspirin (lifelong) + P2Y12 inhibitor (e.g., clopidogrel, ticagrelor, prasugrel). Duration typically at least 12 months post-ACS, longer in some cases.</li>
                <li><strong>Beta-Blockers:</strong> Continue indefinitely, especially if LVEF ≤ 40% or HF. Reduces mortality, recurrent MI, arrhythmias.</li>
                <li><strong>Statins:</strong> High-intensity statin therapy (e.g., atorvastatin 80mg, rosuvastatin 40mg) recommended for all post-ACS patients, regardless of baseline LDL. Goal LDL typically &lt;70 mg/dL (or even &lt;55 mg/dL in very high risk).</li>
                <li><strong>ACE Inhibitors (ACEi) or Angiotensin Receptor Blockers (ARBs):</strong> Start and continue indefinitely in patients with LVEF ≤ 40%, HTN, DM, or stable CKD.</li>
                <li><strong>Mineralocorticoid Receptor Antagonists (MRAs):</strong> E.g., spironolactone, eplerenone. Recommended for patients with LVEF ≤ 40% and either symptomatic HF or DM, provided no contraindications (hyperkalemia, significant renal dysfunction).</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Lifestyle Modifications</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Smoking Cessation:</strong> Absolutely critical. Provide counseling and pharmacotherapy.</li>
                <li><strong>Diet:</strong> Heart-healthy diet (e.g., Mediterranean style, DASH), low in saturated/trans fats, sodium.</li>
                <li><strong>Exercise:</strong> Cardiac rehabilitation program recommended. Aim for regular moderate-intensity aerobic activity as tolerated.</li>
                <li><strong>Weight Management:</strong> Achieve and maintain healthy body weight (BMI &lt; 25 kg/m²).</li>
                <li><strong>Blood Pressure Control:</strong> Target typically &lt;130/80 mmHg.</li>
                <li><strong>Diabetes Management:</strong> Optimal glycemic control.</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Self Quiz - ACS Complications/Mgmt</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              {/* Question 1 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. A patient develops a new harsh holosystolic murmur and acute heart failure symptoms 5 days after an MI. Which mechanical complication is most likely?</h4>
                <button 
                  onClick={() => toggleAnswer('comp_quiz1')}
                  className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                >
                  {showAnswers['comp_quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['comp_quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Ventricular Septal Rupture (VSR) or Papillary Muscle Rupture leading to acute Mitral Regurgitation (MR). Both can present with a new murmur and hemodynamic compromise.</p>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. Why might elderly patients or patients with diabetes present with atypical symptoms during an ACS event?</h4>
                <button 
                  onClick={() => toggleAnswer('comp_quiz2')}
                  className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                >
                  {showAnswers['comp_quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['comp_quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Higher likelihood of comorbidities and potential autonomic neuropathy (especially in diabetes) can alter pain perception, leading to symptoms like dyspnea, confusion, fatigue, or syncope instead of classic chest pain.</p>
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. What is the typical minimum duration for Dual Antiplatelet Therapy (DAPT) after an ACS event?</h4>
                <button 
                  onClick={() => toggleAnswer('comp_quiz3')}
                  className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                >
                  {showAnswers['comp_quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['comp_quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>At least 12 months.</p>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">4. Which class of medication is recommended indefinitely post-MI for patients with LVEF ≤ 40% or those with HTN, DM, or stable CKD?</h4>
                <button 
                  onClick={() => toggleAnswer('comp_quiz4')}
                  className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                >
                  {showAnswers['comp_quiz4'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['comp_quiz4'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>ACE Inhibitors (ACEi) or Angiotensin Receptor Blockers (ARBs).</p>
                  </div>
                )}
              </div>

              {/* Question 5 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">5. Besides medications, name three crucial lifestyle modifications for secondary prevention after an MI.</h4>
                <button 
                  onClick={() => toggleAnswer('comp_quiz5')}
                  className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                >
                  {showAnswers['comp_quiz5'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['comp_quiz5'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Any three of: Smoking Cessation, Heart-Healthy Diet, Regular Exercise (Cardiac Rehab), Weight Management, Blood Pressure Control, Diabetes Management.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Study Guide PDF - Pages 31-40</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <p className="mb-4 text-center">
                Displaying pages 31-40 from the study guide PDF.
              </p>
              <div 
                ref={pdfContainerRef} 
                className="pdf-container border border-gray-300 mb-4 w-full max-w-3xl" 
                style={{ height: '70vh', overflowY: 'auto' }}
              >
                <Document
                  file={`${process.env.PUBLIC_URL}/pdfs/680_CV_disorders_part_one_students_2023 (1)_31-40.pdf`}
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
                Ensure the PDF file `680_CV_disorders_part_one_students_2023 (1)_31-40.pdf` is placed in the `public/pdfs` directory.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVDisordersPagePart3; 