import React, { useState, useRef, useEffect } from 'react';
// Import react-pdf components and configure worker
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CVDisordersPagePart4 = () => {
  const [activeTab, setActiveTab] = useState('valvular_basics');
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
      <div className="w-full bg-teal-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Cardiovascular Disorders</h1>
        <p className="text-xl text-center mt-2">Part One: Pages 41-50 (Valvular Disease & AFib)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('valvular_basics')} 
          className={`px-4 py-2 font-medium ${activeTab === 'valvular_basics' ? 'bg-teal-100 border-b-2 border-teal-600' : ''}`}
        >
          Valvular Basics
        </button>
        <button 
          onClick={() => setActiveTab('aortic')} 
          className={`px-4 py-2 font-medium ${activeTab === 'aortic' ? 'bg-teal-100 border-b-2 border-teal-600' : ''}`}
        >
          Aortic Valve
        </button>
        <button 
          onClick={() => setActiveTab('mitral')} 
          className={`px-4 py-2 font-medium ${activeTab === 'mitral' ? 'bg-teal-100 border-b-2 border-teal-600' : ''}`}
        >
          Mitral Valve
        </button>
        <button 
          onClick={() => setActiveTab('afib')} 
          className={`px-4 py-2 font-medium ${activeTab === 'afib' ? 'bg-teal-100 border-b-2 border-teal-600' : ''}`}
        >
          Atrial Fibrillation
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-teal-100 border-b-2 border-teal-600' : ''}`}
        >
          Self Quiz
        </button>
        <button
          onClick={() => setActiveTab('pdf')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'pdf' ? 'bg-teal-100 border-b-2 border-teal-600' : 'text-gray-600 hover:text-teal-800'}`}
        >
          View PDF Pages (41-50)
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'valvular_basics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Valvular Heart Disease Basics</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Overview</h3>
              <p className="mb-2">Valvular heart disease involves damage to or defects in one of the four heart valves: mitral, aortic, tricuspid, or pulmonary. This damage disrupts normal blood flow through the heart.</p>
              <p>The two main types of valve dysfunction are:</p>
              <ul className="list-disc pl-6 mt-2">
                 <li><strong>Stenosis:</strong> Narrowing or stiffening of the valve, restricting forward blood flow. The heart has to work harder to pump blood through the narrowed valve.</li>
                 <li><strong>Regurgitation (Insufficiency/Incompetence):</strong> The valve does not close properly, allowing blood to leak backward (regurgitate). This reduces the amount of blood pumped forward and can lead to volume overload in the preceding chamber.</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-3 text-teal-800">Murmurs</h3>
              <p className="mb-3">Valvular dysfunction often causes characteristic heart murmurs, which are abnormal sounds resulting from turbulent blood flow. Key features used to describe murmurs include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Timing:</strong> Systolic (heard between S1 and S2 - ventricular contraction) or Diastolic (heard between S2 and S1 - ventricular relaxation/filling).</li>
                <li><strong>Shape/Pattern:</strong> Crescendo (gets louder), decrescendo (gets softer), crescendo-decrescendo (diamond-shaped), plateau (uniform intensity).</li>
                <li><strong>Location:</strong> Point on the chest where the murmur is heard loudest (e.g., aortic area - 2nd right intercostal space, mitral area - apex).</li>
                <li><strong>Radiation:</strong> Where the sound travels (e.g., AS radiates to carotids, MR radiates to axilla).</li>
                <li><strong>Intensity:</strong> Graded on a scale of 1 to 6 (Grade 1 is very faint, Grade 6 is audible without a stethoscope).</li>
                <li><strong>Pitch:</strong> High, medium, or low.</li>
                <li><strong>Quality:</strong> Blowing, harsh, rumbling, musical.</li>
                <li><strong>Maneuvers:</strong> Changes with respiration, Valsalva, squatting, handgrip can help differentiate murmurs.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Common Diagnostic Tool</h3>
              <p><strong>Echocardiogram (Transthoracic or Transesophageal):</strong> This is the primary non-invasive tool for diagnosing valvular heart disease. It uses ultrasound waves to visualize valve structure and motion, assess severity of stenosis or regurgitation, measure valve gradients and areas, evaluate chamber sizes, estimate ejection fraction, and detect complications like LV hypertrophy or pulmonary hypertension.</p>
            </div>
          </div>
        )}

        {activeTab === 'aortic' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Aortic Valve Disease</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Aortic Stenosis (AS)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Narrowing of the aortic valve opening, obstructing blood flow from the left ventricle (LV) into the aorta during systole. This increases pressure work for the LV, leading to LV hypertrophy (LVH).</li>
                <li><strong>Causes:</strong> Most common cause in older adults is calcific degeneration of a normal or congenitally bicuspid valve. Rheumatic heart disease is less common now in developed countries.</li>
                <li><strong>Murmur:</strong> Systolic ejection murmur (crescendo-decrescendo or "diamond-shaped"), typically harsh. Loudest at the right upper sternal border (aortic area). Often radiates to the carotid arteries. May have a delayed and diminished carotid upstroke (pulsus parvus et tardus). An S4 gallop may be present due to LVH.</li>
                <li>
                  <strong>Symptoms (Classic Triad - indicates severe AS and poor prognosis):</strong> Angina (chest pain), Syncope (especially exertional), and Dyspnea (exertional, due to heart failure). 
                  <span className="block text-sm italic mt-1">Mnemonic: <span className="font-bold">S</span>yncope, <span className="font-bold">A</span>ngina, <span className="font-bold">D</span>yspnea (SAD). The onset of symptoms indicates a poor prognosis without valve replacement.</span>
                </li>
                <li><strong>Management:</strong> Monitoring for mild/moderate AS. Symptomatic severe AS requires Aortic Valve Replacement (AVR) - either surgical (SAVR) or transcatheter (TAVR/TAVI). Medical therapy is limited.</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-3 text-teal-800">Aortic Regurgitation (AR) / Insufficiency</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Incomplete closure of the aortic valve during diastole, allowing blood to leak back from the aorta into the LV. This causes LV volume overload, leading to LV dilation and hypertrophy.</li>
                <li><strong>Causes:</strong> Can be due to valve leaflet problems (e.g., endocarditis, rheumatic disease, bicuspid valve) or aortic root dilation (e.g., aneurysm, dissection, Marfan syndrome, syphilis).</li>
                <li><strong>Murmur:</strong> High-pitched, blowing, decrescendo diastolic murmur heard best along the left sternal border, often with the patient sitting up and leaning forward. Severe AR may also have an Austin Flint murmur (a mid-diastolic rumble at the apex due to the regurgitant jet hitting the mitral valve).</li>
                <li><strong>Symptoms:</strong> Often asymptomatic for a long time. Symptoms develop due to LV failure: dyspnea on exertion, orthopnea, PND, fatigue. Palpitations may occur due to forceful LV contraction.</li>
                <li><strong>Peripheral Signs (due to wide pulse pressure - large difference between systolic and diastolic BP):</strong> Bounding "water-hammer" pulses (Corrigan's pulse), head bobbing with heartbeat (de Musset's sign), visible nailbed pulsations (Quincke's pulses), "pistol shot" sounds over femoral arteries (Traube's sign), to-and-fro murmur over femoral artery (Duroziez's sign).</li>
                 <li><strong>Management:</strong> Medical therapy (vasodilators like ACEi/ARBs or nifedipine) can reduce regurgitant volume. Symptomatic severe AR or asymptomatic severe AR with LV dilation/dysfunction requires AVR.</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'mitral' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Mitral Valve Disease</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Mitral Stenosis (MS)</h3>
               <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Narrowing of the mitral valve opening, obstructing blood flow from the left atrium (LA) to the LV during diastole. This increases LA pressure, leading to LA enlargement and pulmonary congestion/hypertension.</li>
                <li><strong>Causes:</strong> Rheumatic heart disease is the overwhelming cause worldwide. Rare causes include congenital MS, calcification.</li>
                <li><strong>Murmur:</strong> Low-pitched, rumbling diastolic murmur heard best at the apex with the bell of the stethoscope, often in the left lateral decubitus position. May be preceded by an "opening snap" (high-pitched sound shortly after S2 when the stiff valve opens). Intensity correlates poorly with severity.</li>
                <li><strong>Symptoms:</strong> Dyspnea (most common, due to pulmonary congestion), fatigue, palpitations (atrial fibrillation is very common due to LA enlargement), hemoptysis (due to rupture of pulmonary capillaries - "pink frothy sputum"), stroke (due to thrombus formation in enlarged LA, especially with AFib), Ortner's syndrome (hoarseness due to recurrent laryngeal nerve compression by enlarged LA).</li>
                <li><strong>Management:</strong> Medical management includes diuretics for congestion, rate control for AFib (beta-blockers, CCBs), anticoagulation for AFib or prior embolism. Percutaneous balloon mitral valvuloplasty (PBMV) is preferred for suitable anatomy; mitral valve replacement (MVR) for others or if PBMV fails.</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-3 text-teal-800">Mitral Regurgitation (MR) / Insufficiency</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Incomplete closure of the mitral valve during systole, allowing blood to leak back from the LV into the LA. This causes volume overload in both the LA and LV, leading to dilation and eventual dysfunction.</li>
                <li><strong>Causes:</strong> Can be primary (problem with the valve leaflets/apparatus itself) or secondary/functional (due to LV dilation distorting the annulus). Primary causes: Mitral Valve Prolapse (MVP - most common in developed countries), rheumatic heart disease, endocarditis, papillary muscle rupture/dysfunction (e.g., post-MI), chordae tendineae rupture. Secondary causes: Ischemic cardiomyopathy, dilated cardiomyopathy.</li>
                <li><strong>Murmur:</strong> Holosystolic (pansystolic), high-pitched, blowing murmur heard best at the apex. Often radiates to the axilla. Intensity may not correlate with severity. May have an S3 gallop due to increased flow into LV in diastole.</li>
                <li><strong>Symptoms:</strong> Chronic MR may be asymptomatic for years. Symptoms include dyspnea, fatigue, orthopnea, palpitations (AFib is common). Acute MR (e.g., papillary muscle rupture) presents dramatically with acute pulmonary edema and cardiogenic shock.</li>
                <li><strong>Management:</strong> Medical therapy focuses on afterload reduction (ACEi/ARBs) and treating heart failure symptoms (diuretics). Surgery (mitral valve repair is preferred over replacement if feasible) is indicated for symptomatic severe MR or asymptomatic severe MR with evidence of LV dysfunction (EF &lt;60%) or significant LV dilation.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Mitral Valve Prolapse (MVP)</h3>
               <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Billowing ("prolapse") of one or both mitral leaflets back into the LA during systole. Often due to myxomatous degeneration (excess connective tissue) of the valve leaflets and chordae.</li>
                <li><strong>Murmur/Sounds:</strong> Characteristic mid-systolic click (caused by sudden tensing of chordae/leaflets), which may or may not be followed by a late systolic murmur of MR. Timing varies with maneuvers: click/murmur occur earlier (closer to S1) with maneuvers that decrease LV volume (Valsalva, standing); later (closer to S2) with maneuvers that increase LV volume (squatting, handgrip).</li>
                <li><strong>Symptoms:</strong> Most people are asymptomatic. Some may experience non-specific symptoms like atypical chest pain, palpitations, dyspnea, fatigue, anxiety.</li>
                <li><strong>Management:</strong> Usually benign. Reassurance for asymptomatic patients without significant MR. Beta-blockers may help palpitations/chest pain. Follow-up echocardiograms to monitor for progression to significant MR. Endocarditis prophylaxis is generally NOT recommended unless prior history of endocarditis.</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'afib' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Atrial Fibrillation (AFib)</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Definition & Pathophysiology</h3>
              <p className="mb-2">AFib is a supraventricular tachyarrhythmia characterized by chaotic, disorganized atrial electrical activity and uncoordinated atrial contraction. This results in an "irregularly irregular" ventricular response.</p>
              <p>It's the most common sustained cardiac arrhythmia. Risk increases significantly with age and presence of underlying heart disease (e.g., HTN, valvular disease, HF, CAD), hyperthyroidism, obesity, sleep apnea, alcohol use.</p>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-3 text-teal-800">Clinical Presentation & ECG Findings</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Symptoms:</strong> Can range from asymptomatic to severe palpitations, fatigue, dyspnea, dizziness, chest pain, or syncope. Symptoms often relate to rapid ventricular rate or loss of atrial "kick" (contribution of atrial contraction to ventricular filling, important in stiff ventricles).</li>
                <li><strong>ECG Findings:</strong>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Absence of distinct P waves (replaced by chaotic fibrillatory 'f' waves, which may be fine or coarse).</li>
                    <li>Irregularly irregular R-R intervals (hallmark ventricular response).</li>
                    <li>Ventricular rate can be slow, normal, or rapid (AFib with Rapid Ventricular Response - RVR).</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Major Complication: Stroke</h3>
              <p>The loss of coordinated atrial contraction allows blood to stagnate, particularly in the left atrial appendage (LAA). This significantly increases the risk of thrombus (clot) formation. If a clot embolizes, it can travel to the brain, causing an ischemic stroke. AFib is a major cause of stroke, especially in the elderly.</p>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold mb-3 text-teal-800">Management Goals</h3>
              <p className="mb-3">Management focuses on three main goals:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li><strong>Rate Control:</strong> Slowing the ventricular rate (usually target &lt;110 bpm at rest if asymptomatic, &lt;80 bpm if symptomatic). Achieved with beta-blockers (e.g., metoprolol), non-dihydropyridine calcium channel blockers (e.g., diltiazem, verapamil), or digoxin (less effective, often used adjunctively).</li>
                <li><strong>Rhythm Control:</strong> Attempting to restore and maintain normal sinus rhythm. Options include electrical cardioversion, antiarrhythmic drugs (e.g., amiodarone, flecainide, sotalol - choice depends on underlying heart disease), or catheter ablation procedures. Rhythm control is often pursued in younger patients, highly symptomatic patients, or when rate control is difficult.</li>
                <li>
                  <strong>Stroke Prevention (Anticoagulation):</strong> Assessing stroke risk using scores like CHA₂DS₂-VASc. 
                  <span className="block text-sm italic mt-1">
                    (C=CHF, H=HTN, A₂=Age ≥75 [2pts], D=Diabetes, S₂=Stroke/TIA [2pts], V=Vascular disease, A=Age 65-74, Sc=Sex category [female]). 
                  </span>
                  Based on score, anticoagulation is recommended, typically with direct oral anticoagulants (DOACs - e.g., apixaban, rivaroxaban, dabigatran, edoxaban) or warfarin. Aspirin alone is generally not sufficient for stroke prevention in AFib. Bleeding risk is assessed using scores like HAS-BLED.
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Self Quiz - Valvular Disease & AFib</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              {/* Question 1 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. What is the most common cause of Aortic Stenosis (AS) in elderly patients in developed countries?</h4>
                <button 
                  onClick={() => toggleAnswer('valve_quiz1')}
                  className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                >
                  {showAnswers['valve_quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['valve_quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Calcific degeneration of a previously normal (or bicuspid) aortic valve.</p>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. Describe the classic murmur associated with Aortic Stenosis (AS). Where is it best heard, and does it radiate?</h4>
                <button 
                  onClick={() => toggleAnswer('valve_quiz2')}
                  className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                >
                  {showAnswers['valve_quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['valve_quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>A harsh, crescendo-decrescendo systolic ejection murmur best heard at the right upper sternal border (aortic area), often radiating to the carotid arteries.</p>
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. What are the three cardinal symptoms of severe Aortic Stenosis (AS)?</h4>
                <button 
                  onClick={() => toggleAnswer('valve_quiz3')}
                  className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                >
                  {showAnswers['valve_quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['valve_quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Angina (chest pain), Syncope (especially exertional), and Dyspnea (due to heart failure). Mnemonic: SAD.</p>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">4. What is the most common sustained cardiac arrhythmia, particularly prevalent in the elderly?</h4>
                <button 
                  onClick={() => toggleAnswer('valve_quiz4')}
                  className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                >
                  {showAnswers['valve_quiz4'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['valve_quiz4'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Atrial Fibrillation (AFib).</p>
                  </div>
                )}
              </div>

              {/* Question 5 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">5. What major complication are patients with Atrial Fibrillation (AFib) at significant risk for, necessitating risk assessment (e.g., CHA₂DS₂-VASc score) and often anticoagulation?</h4>
                <button 
                  onClick={() => toggleAnswer('valve_quiz5')}
                  className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                >
                  {showAnswers['valve_quiz5'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['valve_quiz5'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Thromboembolic events, particularly stroke, due to potential clot formation in the left atrial appendage.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Study Guide PDF - Pages 41-50</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <p className="mb-4 text-center">
                Displaying pages 41-50 from the study guide PDF.
              </p>
              <div 
                ref={pdfContainerRef} 
                className="pdf-container border border-gray-300 mb-4 w-full max-w-3xl" 
                style={{ height: '70vh', overflowY: 'auto' }}
              >
                <Document
                  file="/pdfs/680_CV_disorders_part_one_students_2023 (1)_41-50.pdf"
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
                Ensure the PDF file `680_CV_disorders_part_one_students_2023 (1)_41-50.pdf` is placed in the `public/pdfs` directory.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVDisordersPagePart4; 