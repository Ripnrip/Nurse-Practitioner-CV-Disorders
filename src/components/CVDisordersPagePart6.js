import React, { useState } from 'react';

const CVDisordersPagePart6 = () => {
  const [activeTab, setActiveTab] = useState('pad');
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full bg-rose-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Cardiovascular Disorders</h1>
        <p className="text-xl text-center mt-2">Part One: Pages 71-80 (PAD & Aortic Disease)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('pad')} 
          className={`px-4 py-2 font-medium ${activeTab === 'pad' ? 'bg-rose-100 border-b-2 border-rose-600' : ''}`}
        >
          PAD
        </button>
        <button 
          onClick={() => setActiveTab('aortic_disease')} 
          className={`px-4 py-2 font-medium ${activeTab === 'aortic_disease' ? 'bg-rose-100 border-b-2 border-rose-600' : ''}`}
        >
          Aortic Disease
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-rose-100 border-b-2 border-rose-600' : ''}`}
        >
          Self Quiz
        </button>
        <button
          onClick={() => setActiveTab('pdf')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'pdf' ? 'bg-rose-100 border-b-2 border-rose-600' : 'text-gray-600 hover:text-rose-800'}`}
        >
          View PDF Pages (71-80)
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'pad' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-rose-800 mb-4">Peripheral Artery Disease (PAD)</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Definition & Pathophysiology</h3>
              <p className="mb-2">Stenotic, occlusive, and aneurysmal diseases of the aorta and peripheral arteries (excluding coronary arteries).</p>
              <p>Primarily caused by atherosclerosis, leading to reduced blood flow to the limbs, especially the lower extremities.</p>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
              <h3 className="text-xl font-bold mb-3 text-rose-800">Clinical Presentation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Intermittent Claudication:</strong> Cramping pain or aching in the calves, thighs, or buttocks brought on by exercise and relieved by rest. Most common symptom.</li>
                <li><strong>Critical Limb Ischemia (CLI):</strong> Rest pain (especially at night, relieved by dangling foot), non-healing ulcers, or gangrene. Indicates severe PAD.</li>
                <li><strong>Physical Exam Findings:</strong> Diminished or absent peripheral pulses, cool skin, pallor on elevation, dependent rubor, hair loss, thickened nails, muscle atrophy.</li>
                <li><strong>Bruits:</strong> May be heard over stenotic arteries (e.g., femoral).</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Diagnosis</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Ankle-Brachial Index (ABI):</strong> Ratio of systolic blood pressure at the ankle to the systolic blood pressure in the arm. Key non-invasive test.
                  <ul className="list-circle pl-5 mt-1">
                    <li>Normal ABI: 1.00 - 1.40</li>
                    <li>Borderline: 0.91 - 0.99</li>
                    <li>Mild PAD: 0.70 - 0.90</li>
                    <li>Moderate PAD: 0.40 - 0.69</li>
                    <li>Severe PAD: &lt;0.40</li>
                    <li>Non-compressible arteries (often due to calcification, common in diabetes): &gt;1.40 (Requires further testing like Toe-Brachial Index).</li>
                  </ul>
                </li>
                <li><strong>Duplex Ultrasonography:</strong> Visualizes arteries and blood flow.</li>
                <li><strong>CTA/MRA/Angiography:</strong> Used for detailed anatomical assessment, especially if revascularization is planned.</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">A patient reports calf pain when walking that is relieved by rest. An ABI measurement is 0.65. What is the most likely diagnosis and severity?</p>
              <button 
                onClick={() => toggleAnswer('pad-question')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['pad-question'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['pad-question'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Moderate Peripheral Artery Disease (PAD). Intermittent claudication is the classic symptom, and an ABI between 0.40 and 0.69 indicates moderate disease severity.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'aortic_disease' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-rose-800 mb-4">Aortic Diseases</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Abdominal Aortic Aneurysm (AAA)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Focal dilation of the abdominal aorta, usually infrarenal. Defined as diameter &gt;3 cm or &gt;50% larger than normal.</li>
                <li><strong>Risk Factors:</strong> Age (&gt;60), smoking, male sex, family history, hypertension, atherosclerosis.</li>
                <li><strong>Presentation:</strong> Often asymptomatic, discovered incidentally. May present with abdominal/back pain or a pulsatile abdominal mass. Rupture is a catastrophic emergency (severe pain, hypotension, pulsatile mass).</li>
                <li><strong>Screening:</strong> USPSTF recommends one-time screening with abdominal ultrasound for men aged 65-75 who have ever smoked.</li>
                <li><strong>Management:</strong> Surveillance for small aneurysms; elective repair (open or endovascular [EVAR]) for larger (&gt;5.5 cm), rapidly expanding, or symptomatic aneurysms.</li>
              </ul>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
              <h3 className="text-xl font-bold mb-3 text-rose-800">Aortic Dissection</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pathophysiology:</strong> Tear in the aortic intima allows blood to enter the media, creating a false lumen. Life-threatening emergency.</li>
                <li><strong>Risk Factors:</strong> Hypertension (most common), connective tissue disorders (Marfan, Ehlers-Danlos), bicuspid aortic valve, preexisting aneurysm, trauma, cocaine use.</li>
                <li><strong>Classification (Stanford):</strong>
                    <ul className="list-circle pl-5 mt-1">
                      <li><strong>Type A:</strong> Involves ascending aorta (surgical emergency).</li>
                      <li><strong>Type B:</strong> Involves only descending aorta (often managed medically unless complications arise).</li>
                    </ul>
                </li>
                <li><strong>Presentation:</strong> Sudden onset of severe, tearing/ripping chest or back pain (often interscapular). May have pulse deficits, neurological symptoms, signs of end-organ ischemia.</li>
                <li><strong>Diagnosis:</strong> CT angiography (CTA) or Transesophageal Echocardiogram (TEE) are primary imaging modalities.</li>
                <li><strong>Management:</strong> Urgent surgical repair for Type A. Medical management (BP and heart rate control) for uncomplicated Type B; endovascular or surgical intervention for complicated Type B.</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">A patient presents with sudden, severe tearing chest pain radiating to the back. Blood pressure is significantly different between the right and left arms. What diagnosis should be suspected immediately?</p>
              <button 
                onClick={() => toggleAnswer('dissection-question')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['dissection-question'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['dissection-question'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Aortic Dissection. The sudden onset of tearing chest/back pain and pulse/BP differentials are classic signs of aortic dissection, a vascular emergency.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-rose-800 mb-4">Self Quiz - PAD & Aortic Disease</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. Placeholder Question about PAD symptoms/diagnosis?</h4>
                <button 
                  onClick={() => toggleAnswer('pad-aortic-quiz1')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['pad-aortic-quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['pad-aortic-quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer related to claudication or ABI interpretation.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. Placeholder Question about AAA screening/management?</h4>
                <button 
                  onClick={() => toggleAnswer('pad-aortic-quiz2')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['pad-aortic-quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['pad-aortic-quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer about who gets screened or when repair is indicated.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. Placeholder Question about aortic dissection types/presentation?</h4>
                <button 
                  onClick={() => toggleAnswer('pad-aortic-quiz3')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['pad-aortic-quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['pad-aortic-quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer about Stanford classification or classic symptoms.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-rose-800 mb-4">Study Guide PDF - Pages 71-80</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="mb-4">Click the link below to view the original PDF pages for this section (opens in a new tab).</p>
              <a
                href="/pdfs/680_CV_disorders_part_one_students_2023 (1)_71-80.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 transition font-medium"
              >
                Open PDF (Pages 71-80)
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Ensure the PDF file `680_CV_disorders_part_one_students_2023 (1)_71-80.pdf` is placed in the `public/pdfs` directory of your project.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVDisordersPagePart6; 