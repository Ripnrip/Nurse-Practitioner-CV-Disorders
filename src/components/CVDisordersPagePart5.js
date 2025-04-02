import React, { useState } from 'react';

const CVDisordersPagePart5 = () => {
  const [activeTab, setActiveTab] = useState('cardiomyopathy');
  const [showAnswers, setShowAnswers] = useState({});

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
        <p className="text-xl text-center mt-2">Part One: Pages 61-70 (Cardiomyopathy & Pericardial Disease)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('cardiomyopathy')} 
          className={`px-4 py-2 font-medium ${activeTab === 'cardiomyopathy' ? 'bg-orange-100 border-b-2 border-orange-600' : ''}`}
        >
          Cardiomyopathy
        </button>
        <button 
          onClick={() => setActiveTab('pericardial')} 
          className={`px-4 py-2 font-medium ${activeTab === 'pericardial' ? 'bg-orange-100 border-b-2 border-orange-600' : ''}`}
        >
          Pericardial Disease
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-orange-100 border-b-2 border-orange-600' : ''}`}
        >
          Self Quiz
        </button>
        <button
          onClick={() => setActiveTab('pdf')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'pdf' ? 'bg-indigo-100 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-800'}`}
        >
          View PDF Pages (51-60)
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'cardiomyopathy' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Cardiomyopathies</h2>
            <p className="text-lg text-gray-700">Diseases of the heart muscle itself.</p>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Dilated Cardiomyopathy (DCM)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Enlargement of one or both ventricles with impaired systolic function (reduced EF). Most common type.</li>
                <li><strong>Causes:</strong> Idiopathic (most common), genetic, viral myocarditis, alcohol abuse, toxins (e.g., doxorubicin), peripartum, ischemic.</li>
                <li><strong>Presentation:</strong> Symptoms of HFrEF (dyspnea, edema, fatigue).</li>
                <li><strong>Diagnosis:</strong> Echo shows LV dilation and reduced EF.</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold mb-3 text-orange-800">Hypertrophic Cardiomyopathy (HCM)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Marked ventricular hypertrophy (especially septal), often asymmetric, leading to diastolic dysfunction and potentially LV outflow obstruction (HOCM).</li>
                <li><strong>Causes:</strong> Primarily genetic (autosomal dominant mutations in sarcomere proteins).</li>
                <li><strong>Presentation:</strong> Dyspnea, angina, syncope (especially with exertion), palpitations. Risk of sudden cardiac death (SCD), particularly in young athletes.</li>
                <li><strong>Diagnosis:</strong> Echo shows marked LV hypertrophy, often asymmetric septal hypertrophy. ECG often shows LVH criteria.</li>
                <li><strong>Murmur (HOCM):</strong> Harsh systolic murmur at left lower sternal border, increases with Valsalva/standing, decreases with squatting/handgrip (opposite of AS murmur).</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Restrictive Cardiomyopathy (RCM)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Stiff, non-compliant ventricles impair diastolic filling. Systolic function (EF) may be normal or near-normal initially. Least common type.</li>
                <li><strong>Causes:</strong> Amyloidosis, sarcoidosis, hemochromatosis, radiation therapy, idiopathic.</li>
                <li><strong>Presentation:</strong> Symptoms of right and left heart failure (prominent right-sided symptoms), fatigue.</li>
                <li><strong>Diagnosis:</strong> Echo shows normal/near-normal LV size and EF, marked atrial enlargement, evidence of diastolic dysfunction. Biopsy may be needed.</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">A young athlete experiences syncope during exercise. An ECG shows LVH, and an echocardiogram reveals asymmetric septal hypertrophy. What is the most likely diagnosis?</p>
              <button 
                onClick={() => toggleAnswer('hcm-question')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['hcm-question'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['hcm-question'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Hypertrophic Cardiomyopathy (HCM). This condition is a leading cause of sudden cardiac death in young athletes and is characterized by unexplained left ventricular hypertrophy, often asymmetric.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'pericardial' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Pericardial Diseases</h2>
            <p className="text-lg text-gray-700">Diseases affecting the pericardium, the sac surrounding the heart.</p>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Acute Pericarditis</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Inflammation of the pericardium.</li>
                <li><strong>Causes:</strong> Idiopathic (presumed viral) most common, infection (viral, bacterial, fungal), post-MI (Dressler syndrome), uremia, malignancy, autoimmune disease, radiation.</li>
                <li><strong>Presentation:</strong> Sharp, pleuritic chest pain (worse with inspiration, lying flat; relieved by sitting up/leaning forward), fever, pericardial friction rub (scratchy sound on auscultation).</li>
                <li><strong>ECG Changes:</strong> Diffuse ST-segment elevation (concave up), PR segment depression. These changes evolve over time.</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold mb-3 text-orange-800">Pericardial Effusion</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Accumulation of excess fluid in the pericardial space.</li>
                <li><strong>Causes:</strong> Can result from any cause of pericarditis, heart failure, trauma, malignancy.</li>
                <li><strong>Presentation:</strong> Can be asymptomatic if small/slowly accumulating. Larger effusions can cause dyspnea, cough, chest fullness.</li>
                <li><strong>Diagnosis:</strong> Echo is the primary diagnostic tool. CXR may show enlarged cardiac silhouette ("water bottle heart"). ECG may show low voltage QRS complexes and electrical alternans (beat-to-beat variation in QRS amplitude) if large.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Cardiac Tamponade</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Life-threatening condition where pericardial effusion accumulates rapidly or becomes large enough to compress the heart chambers, impairing diastolic filling and reducing cardiac output.</li>
                <li><strong>Presentation (Beck's Triad):</strong> Hypotension, Distended Neck Veins (elevated JVP), Muffled Heart Sounds. Other signs: pulsus paradoxus (abnormally large drop in systolic BP during inspiration).</li>
                <li><strong>Diagnosis:</strong> Clinical suspicion + Echo showing effusion with diastolic collapse of right atrium/ventricle.</li>
                <li><strong>Treatment:</strong> Urgent pericardiocentesis (drainage of fluid).</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">A patient presents with sharp chest pain that improves when leaning forward, a scratchy sound on auscultation, and diffuse concave ST elevation on ECG. What is the most likely diagnosis?</p>
              <button 
                onClick={() => toggleAnswer('pericarditis-question')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['pericarditis-question'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['pericarditis-question'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Acute Pericarditis. The combination of pleuritic chest pain relieved by leaning forward, a pericardial friction rub, and diffuse ST elevation (often with PR depression) is classic for acute pericarditis.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Self Quiz - Cardiomyopathy & Pericardial Disease</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. Placeholder Question differentiating cardiomyopathy types?</h4>
                <button 
                  onClick={() => toggleAnswer('myopathy-quiz1')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['myopathy-quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['myopathy-quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer contrasting DCM, HCM, RCM pathophysiology/findings.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. Placeholder Question about acute pericarditis presentation?</h4>
                <button 
                  onClick={() => toggleAnswer('myopathy-quiz2')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['myopathy-quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['myopathy-quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer describing classic pain, rub, ECG changes.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. Placeholder Question about cardiac tamponade signs?</h4>
                <button 
                  onClick={() => toggleAnswer('myopathy-quiz3')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['myopathy-quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['myopathy-quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer mentioning Beck's triad or pulsus paradoxus.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Study Guide PDF - Pages 51-60</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="mb-4">Click the link below to view the original PDF pages for this section (opens in a new tab).</p>
              <a
                href="/pdfs/680_CV_disorders_part_one_students_2023 (1)_51-60.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition font-medium"
              >
                Open PDF (Pages 51-60)
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Ensure the PDF file `680_CV_disorders_part_one_students_2023 (1)_51-60.pdf` is placed in the `public/pdfs` directory of your project.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVDisordersPagePart5; 