import React, { useState } from 'react';

const CVDisordersPagePart4 = () => {
  const [activeTab, setActiveTab] = useState('valvular_basics');
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full bg-indigo-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Cardiovascular Disorders</h1>
        <p className="text-xl text-center mt-2">Part One: Pages 51-60 (Valvular Heart Disease)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('valvular_basics')} 
          className={`px-4 py-2 font-medium ${activeTab === 'valvular_basics' ? 'bg-indigo-100 border-b-2 border-indigo-600' : ''}`}
        >
          Valvular Basics
        </button>
        <button 
          onClick={() => setActiveTab('aortic')} 
          className={`px-4 py-2 font-medium ${activeTab === 'aortic' ? 'bg-indigo-100 border-b-2 border-indigo-600' : ''}`}
        >
          Aortic Valve
        </button>
        <button 
          onClick={() => setActiveTab('mitral')} 
          className={`px-4 py-2 font-medium ${activeTab === 'mitral' ? 'bg-indigo-100 border-b-2 border-indigo-600' : ''}`}
        >
          Mitral Valve
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-indigo-100 border-b-2 border-indigo-600' : ''}`}
        >
          Self Quiz
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'valvular_basics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Valvular Heart Disease Basics</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Overview</h3>
              <p className="mb-4">Valvular heart disease involves damage to or defects in one of the four heart valves: mitral, aortic, tricuspid, or pulmonary. This can lead to either stenosis (narrowing, restricting blood flow) or regurgitation (insufficiency/leakage, allowing backflow).</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="text-xl font-bold mb-3 text-indigo-800">Murmurs</h3>
              <p className="mb-3">Valvular dysfunction often causes characteristic heart murmurs, which are abnormal sounds heard during auscultation. Key features of murmurs include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Timing:</strong> Systolic (between S1 and S2) or Diastolic (between S2 and S1).</li>
                <li><strong>Shape:</strong> Crescendo, decrescendo, crescendo-decrescendo, plateau.</li>
                <li><strong>Location:</strong> Area on the chest where the murmur is loudest (e.g., aortic area, mitral area).</li>
                <li><strong>Radiation:</strong> Where the sound travels (e.g., carotid arteries, axilla).</li>
                <li><strong>Intensity:</strong> Graded on a scale of 1-6.</li>
                <li><strong>Pitch:</strong> High, medium, or low.</li>
                <li><strong>Quality:</strong> Blowing, harsh, rumbling, musical.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Common Diagnostic Tool</h3>
              <p><strong>Echocardiogram (Echo)</strong> is the primary tool for diagnosing and assessing the severity of valvular heart disease. It visualizes valve structure and function, measures valve areas and gradients, and assesses chamber sizes and function.</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">What is the difference between stenosis and regurgitation in valvular heart disease?</p>
              <button 
                onClick={() => toggleAnswer('stenosis-regurg')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['stenosis-regurg'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['stenosis-regurg'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Stenosis is the narrowing of a valve opening, obstructing forward blood flow. Regurgitation (or insufficiency) is the incomplete closure of a valve, allowing backward leakage of blood.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'aortic' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Aortic Valve Disease</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Aortic Stenosis (AS)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Narrowing of aortic valve orifice, obstructing LV outflow.</li>
                <li><strong>Causes:</strong> Calcific degeneration (most common in elderly), bicuspid aortic valve (younger patients), rheumatic heart disease.</li>
                <li><strong>Murmur:</strong> Harsh systolic crescendo-decrescendo murmur, loudest at right upper sternal border, often radiates to carotids.</li>
                <li><strong>Symptoms (Classic Triad):</strong> Angina, Syncope, Dyspnea (often indicates poor prognosis).</li>
                <li><strong>Other Signs:</strong> Pulsus parvus et tardus (weak and delayed carotid pulse), S4 gallop.</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="text-xl font-bold mb-3 text-indigo-800">Aortic Regurgitation (AR) / Insufficiency</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Incomplete closure of aortic valve, causing backflow from aorta into LV during diastole. Leads to LV volume overload.</li>
                <li><strong>Causes:</strong> Valve leaflet disease (e.g., endocarditis, rheumatic), aortic root dilation (e.g., Marfan syndrome, aneurysm, dissection).</li>
                <li><strong>Murmur:</strong> High-pitched, blowing diastolic decrescendo murmur, loudest at left sternal border (may also have Austin Flint murmur - mid-diastolic rumble).</li>
                <li><strong>Symptoms:</strong> Dyspnea, fatigue, palpitations (due to LVH and forceful contractions).</li>
                <li><strong>Other Signs:</strong> Wide pulse pressure, bounding pulses (Corrigan's pulse, water-hammer pulse), head bobbing (de Musset's sign), Quincke's pulses (nailbed pulsations).</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">A systolic crescendo-decrescendo murmur heard best at the right upper sternal border, radiating to the carotids, is characteristic of which valvular lesion?</p>
              <button 
                onClick={() => toggleAnswer('as-murmur')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['as-murmur'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['as-murmur'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Aortic Stenosis (AS).</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'mitral' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Mitral Valve Disease</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Mitral Stenosis (MS)</h3>
               <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Narrowing of mitral valve orifice, obstructing flow from LA to LV during diastole. Leads to LA pressure overload.</li>
                <li><strong>Causes:</strong> Rheumatic heart disease is the most common cause worldwide.</li>
                <li><strong>Murmur:</strong> Low-pitched, rumbling mid-diastolic murmur with presystolic accentuation, heard best at the apex with the bell of the stethoscope, often preceded by an opening snap.</li>
                <li><strong>Symptoms:</strong> Dyspnea (due to pulmonary congestion), fatigue, palpitations (often AFib), hemoptysis.</li>
                <li><strong>Other Signs:</strong> Loud S1, opening snap, signs of pulmonary hypertension or right heart failure.</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="text-xl font-bold mb-3 text-indigo-800">Mitral Regurgitation (MR) / Insufficiency</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Incomplete closure of mitral valve, causing backflow from LV into LA during systole. Leads to LA and LV volume overload.</li>
                <li><strong>Causes:</strong> Mitral valve prolapse (MVP), papillary muscle dysfunction/rupture (post-MI), rheumatic heart disease, endocarditis, annular dilation (due to LVH/failure).</li>
                <li><strong>Murmur:</strong> Holosystolic (pansystolic), high-pitched, blowing murmur, heard best at the apex, often radiates to the axilla.</li>
                <li><strong>Symptoms:</strong> Often asymptomatic for years. Can develop dyspnea, fatigue, palpitations (AFib). Acute MR (e.g., papillary muscle rupture) causes sudden severe dyspnea/pulmonary edema.</li>
                <li><strong>Other Signs:</strong> Soft S1, S3 gallop (if severe), laterally displaced apical impulse.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Mitral Valve Prolapse (MVP)</h3>
               <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Billowing of one or both mitral leaflets into the LA during systole. Often associated with myxomatous degeneration.</li>
                <li><strong>Murmur:</strong> Mid-systolic click, often followed by a late systolic murmur (indicating MR). Timing varies with maneuvers (click/murmur earlier with Valsalva/standing, later with squatting).</li>
                <li><strong>Symptoms:</strong> Usually asymptomatic. May have atypical chest pain, palpitations, anxiety.</li>
                <li><strong>Complications:</strong> Can progress to significant MR, endocarditis, arrhythmias.</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">A holosystolic murmur heard best at the apex, radiating to the axilla, is characteristic of which valvular lesion?</p>
              <button 
                onClick={() => toggleAnswer('mr-murmur')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['mr-murmur'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['mr-murmur'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Mitral Regurgitation (MR).</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Self Quiz - Valvular Heart Disease</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. Placeholder Question about identifying AS murmur?</h4>
                <button 
                  onClick={() => toggleAnswer('valve-quiz1')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['valve-quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['valve-quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer describing AS murmur characteristics.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. Placeholder Question about identifying AR murmur/signs?</h4>
                <button 
                  onClick={() => toggleAnswer('valve-quiz2')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['valve-quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['valve-quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer describing AR murmur or peripheral signs.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. Placeholder Question about identifying MS or MR murmur?</h4>
                <button 
                  onClick={() => toggleAnswer('valve-quiz3')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['valve-quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['valve-quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer describing MS or MR murmur characteristics.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVDisordersPagePart4; 