import React, { useState } from 'react';

const CVDisordersPagePart2 = () => {
  const [activeTab, setActiveTab] = useState('acs');
  const [showAnswers, setShowAnswers] = useState({});

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
        <p className="text-xl text-center mt-2">Part One: Pages 31-40 (ACS/MI)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('acs')} 
          className={`px-4 py-2 font-medium ${activeTab === 'acs' ? 'bg-purple-100 border-b-2 border-purple-600' : ''}`}
        >
          ACS Overview
        </button>
        <button 
          onClick={() => setActiveTab('ecg_mi')} 
          className={`px-4 py-2 font-medium ${activeTab === 'ecg_mi' ? 'bg-purple-100 border-b-2 border-purple-600' : ''}`}
        >
          ECG in MI
        </button>
        <button 
          onClick={() => setActiveTab('location')} 
          className={`px-4 py-2 font-medium ${activeTab === 'location' ? 'bg-purple-100 border-b-2 border-purple-600' : ''}`}
        >
          MI Location
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-purple-100 border-b-2 border-purple-600' : ''}`}
        >
          Self Quiz
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'acs' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Acute Coronary Syndrome (ACS) Overview</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Spectrum of ACS</h3>
              <p className="mb-4">ACS is a spectrum of conditions resulting from acute myocardial ischemia:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Unstable Angina (UA):</strong> Ischemia without infarction (no biomarker elevation).</li>
                <li><strong>Non-ST-Segment Elevation Myocardial Infarction (NSTEMI):</strong> Infarction with elevated cardiac biomarkers but no significant ST-segment elevation on ECG.</li>
                <li><strong>ST-Segment Elevation Myocardial Infarction (STEMI):</strong> Infarction with elevated cardiac biomarkers and significant ST-segment elevation on ECG, indicating complete coronary artery occlusion.</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-3 text-purple-800">Clinical Presentation</h3>
              <p className="mb-3">Common symptoms include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Chest pain or discomfort (pressure, tightness, squeezing)</li>
                <li>Pain radiating to jaw, neck, shoulders, arms (especially left)</li>
                <li>Shortness of breath (dyspnea)</li>
                <li>Diaphoresis (sweating)</li>
                <li>Nausea and vomiting</li>
                <li>Fatigue, lightheadedness</li>
              </ul>
              <p className="mt-3 text-sm">Note: Atypical presentations (e.g., epigastric pain, fatigue only) are more common in women, elderly, and patients with diabetes.</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">What is the key difference between Unstable Angina and NSTEMI?</p>
              <button 
                onClick={() => toggleAnswer('ua-nstemi')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['ua-nstemi'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['ua-nstemi'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> The presence of myocardial necrosis (infarction), indicated by elevated cardiac biomarkers (e.g., Troponin). Unstable Angina involves ischemia without infarction (normal biomarkers), while NSTEMI involves infarction (elevated biomarkers).</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'ecg_mi' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">ECG Changes in Myocardial Infarction</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Key ECG Findings</h3>
              <p className="mb-3">Specific ECG changes can indicate ischemia, injury, and infarction:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>ST-Segment Elevation:</strong> Indicates acute myocardial injury, typically seen in STEMI. Defined as new elevation at the J-point in ≥2 contiguous leads (
                  <span className="font-mono text-sm">{"> "}1 mm</span> in most leads, 
                  <span className="font-mono text-sm">{"> "}2 mm</span> in V2-V3 for men ≥40, 
                  <span className="font-mono text-sm">{"> "}2.5 mm</span> in V2-V3 for men &lt;40, 
                  <span className="font-mono text-sm">{"> "}1.5 mm</span> in V2-V3 for women).
                </li>
                <li><strong>ST-Segment Depression:</strong> Indicates myocardial ischemia. May be seen in UA, NSTEMI, or as reciprocal changes in STEMI.</li>
                <li><strong>T-Wave Inversion:</strong> Can indicate ischemia or infarction (often appears later). Deep, symmetric T-wave inversions are particularly suggestive.</li>
                <li><strong>Pathological Q Waves:</strong> Indicate prior or evolving infarction (necrosis). Defined as Q wave duration ≥0.04 sec or depth ≥1/3 of R wave height in ≥2 contiguous leads.</li>
                <li><strong>Hyperacute T Waves:</strong> Tall, peaked T waves seen very early in STEMI.</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold mb-3 text-purple-800">Evolution of ECG Changes in STEMI</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Immediate (minutes):</strong> Hyperacute T waves.</li>
                <li><strong>Minutes to Hours:</strong> ST-segment elevation begins.</li>
                <li><strong>Hours to Days:</strong> ST elevation peaks, T wave inverts, Q waves may develop.</li>
                <li><strong>Days to Weeks:</strong> ST segments normalize, T wave inversion persists, Q waves persist.</li>
                <li><strong>Weeks to Months/Years:</strong> T waves may normalize, Q waves usually persist indefinitely.</li>
              </ol>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">What do pathological Q waves on an ECG typically signify?</p>
              <button 
                onClick={() => toggleAnswer('q-waves')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['q-waves'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['q-waves'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Pathological Q waves typically signify myocardial necrosis (infarction) that has already occurred. They represent electrically silent scar tissue and usually persist long-term after an MI.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'location' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Localizing Myocardial Infarction with ECG</h2>
            
            <div className="overflow-x-auto border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location of MI</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leads with ST Elevation / Q Waves</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coronary Artery Involved (Typical)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Anterior</td>
                    <td className="px-6 py-4 font-mono">V3, V4</td>
                    <td className="px-6 py-4">Left Anterior Descending (LAD)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Septal</td>
                    <td className="px-6 py-4 font-mono">V1, V2</td>
                    <td className="px-6 py-4">LAD (septal branches)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Lateral</td>
                    <td className="px-6 py-4 font-mono">I, aVL, V5, V6</td>
                    <td className="px-6 py-4">Left Circumflex (LCx) or LAD (diagonal branches)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Inferior</td>
                    <td className="px-6 py-4 font-mono">II, III, aVF</td>
                    <td className="px-6 py-4">Right Coronary Artery (RCA) (most common) or LCx</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Posterior</td>
                    <td className="px-6 py-4">
                      ST depression in V1-V3 (reciprocal)<br/>
                      Tall R waves in V1-V2<br/>
                      (Confirm with posterior leads V7-V9 if available)
                    </td>
                    <td className="px-6 py-4">RCA or LCx</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Right Ventricular</td>
                    <td className="px-6 py-4">
                      ST elevation in V4R (right-sided lead)<br/>
                      Often associated with inferior MI
                    </td>
                    <td className="px-6 py-4">RCA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Anteroseptal</td>
                    <td className="px-6 py-4 font-mono">V1, V2, V3, V4</td>
                    <td className="px-6 py-4">LAD</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Anterolateral</td>
                    <td className="px-6 py-4 font-mono">V3, V4, V5, V6, I, aVL</td>
                    <td className="px-6 py-4">LAD and/or LCx</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Inferolateral</td>
                    <td className="px-6 py-4 font-mono">II, III, aVF, V5, V6, I, aVL</td>
                    <td className="px-6 py-4">RCA and LCx</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">ST-segment elevation in leads II, III, and aVF on an ECG is most indicative of an MI in which location?</p>
              <button 
                onClick={() => toggleAnswer('inferior-mi')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['inferior-mi'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['inferior-mi'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Inferior wall myocardial infarction. This pattern typically points to occlusion of the Right Coronary Artery (RCA) or, less commonly, the Left Circumflex Artery (LCx).</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Self Quiz - ACS/MI</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. Placeholder Question differentiating ACS types?</h4>
                <button 
                  onClick={() => toggleAnswer('acs-quiz1')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['acs-quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs-quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer related to UA vs NSTEMI vs STEMI.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. Placeholder Question about ECG changes in MI?</h4>
                <button 
                  onClick={() => toggleAnswer('acs-quiz2')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['acs-quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs-quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer related to ST elevation/depression, T waves, Q waves.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. Placeholder Question about localizing an MI using ECG?</h4>
                <button 
                  onClick={() => toggleAnswer('acs-quiz3')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['acs-quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs-quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer linking specific leads to MI locations (e.g., inferior, anterior).</p>
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

export default CVDisordersPagePart2; 