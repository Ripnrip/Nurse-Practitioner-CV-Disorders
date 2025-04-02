import React, { useState } from 'react';

const CVDisordersPagePart7 = () => {
  const [activeTab, setActiveTab] = useState('ie_basics');
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full bg-cyan-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Cardiovascular Disorders</h1>
        <p className="text-xl text-center mt-2">Part One: Pages 81-End (Infective Endocarditis)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('ie_basics')} 
          className={`px-4 py-2 font-medium ${activeTab === 'ie_basics' ? 'bg-cyan-100 border-b-2 border-cyan-600' : ''}`}
        >
          IE Basics
        </button>
        <button 
          onClick={() => setActiveTab('diagnosis')} 
          className={`px-4 py-2 font-medium ${activeTab === 'diagnosis' ? 'bg-cyan-100 border-b-2 border-cyan-600' : ''}`}
        >
          Diagnosis (Duke Criteria)
        </button>
        <button 
          onClick={() => setActiveTab('management')} 
          className={`px-4 py-2 font-medium ${activeTab === 'management' ? 'bg-cyan-100 border-b-2 border-cyan-600' : ''}`}
        >
          Management & Complications
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-cyan-100 border-b-2 border-cyan-600' : ''}`}
        >
          Self Quiz
        </button>
        <button
          onClick={() => setActiveTab('pdf')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'pdf' ? 'bg-cyan-100 border-b-2 border-cyan-600' : 'text-gray-600 hover:text-cyan-800'}`}
        >
          View PDF Pages (81-End)
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'ie_basics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 mb-4">Infective Endocarditis (IE) Basics</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Definition & Pathophysiology</h3>
              <p className="mb-2">Infection of the endocardial surface of the heart, most commonly involving the heart valves. Can also affect septal defects, chordae tendineae, or mural endocardium.</p>
              <p>Typically requires endothelial damage, platelet-fibrin thrombus formation (nonbacterial thrombotic endocarditis - NBTE), and subsequent bacteremia allowing microbial adherence and vegetation formation.</p>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <h3 className="text-xl font-bold mb-3 text-cyan-800">Risk Factors</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prosthetic heart valves</li>
                <li>Previous history of endocarditis</li>
                <li>Structural heart disease (valvular disease, congenital heart disease)</li>
                <li>Intravenous drug use (IVDU) - often associated with right-sided IE (tricuspid valve)</li>
                <li>Indwelling intravenous catheters</li>
                <li>Immunosuppression</li>
                <li>Poor dentition or recent dental procedures</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Common Pathogens</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Native Valve IE:</strong> <em>Staphylococcus aureus</em> (increasingly common, often acute/severe), Viridans group streptococci (often subacute, associated with dental procedures), Enterococci.</li>
                <li><strong>Prosthetic Valve IE:</strong> Early (&lt;1 year post-op): Coagulase-negative staphylococci (e.g., <em>S. epidermidis</em>), <em>S. aureus</em>. Late (&gt;1 year post-op): Similar to native valve pathogens.</li>
                <li><strong>IVDU-associated IE:</strong> <em>S. aureus</em> (most common, often affects tricuspid valve).</li>
                <li><strong>Culture-Negative IE:</strong> May be due to prior antibiotic use or fastidious organisms (e.g., HACEK group, Coxiella burnetii, Bartonella).</li>
              </ul>
            </div>

             <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">Which organism is most commonly associated with infective endocarditis in intravenous drug users, and which valve is typically affected?</p>
              <button 
                onClick={() => toggleAnswer('ie-ivdu-question')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['ie-ivdu-question'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['ie-ivdu-question'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> <em>Staphylococcus aureus</em> is the most common pathogen, and the Tricuspid valve is most frequently affected in IVDU-associated IE.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'diagnosis' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 mb-4">Diagnosis of IE (Modified Duke Criteria)</h2>
            <p className="mb-4">Diagnosis requires meeting specific combinations of Major and Minor criteria.</p>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Major Criteria</h3>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Positive Blood Cultures for IE:</strong>
                  <ul className="list-disc pl-8 mt-1">
                    <li>Typical microorganism consistent with IE from 2 separate blood cultures.</li>
                    <li>Microorganism consistent with IE from persistently positive blood cultures (e.g., ≥2 positive cultures drawn &gt;12 hours apart, or 3/3, or majority of ≥4 cultures drawn ≥1 hour apart).</li>
                    <li>Single positive blood culture for <em>Coxiella burnetii</em> or anti-phase I IgG antibody titer &gt;1:800.</li>
                  </ul>
                </li>
                <li>
                  <strong>Evidence of Endocardial Involvement:</strong>
                  <ul className="list-disc pl-8 mt-1">
                    <li>Echocardiogram positive for IE: vegetation, abscess, or new partial dehiscence of prosthetic valve.</li>
                    <li>New valvular regurgitation (worsening or change of preexisting murmur not sufficient).</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <h3 className="text-xl font-bold mb-3 text-cyan-800">Minor Criteria</h3>
              <ul className="list-decimal pl-5 space-y-2">
                <li>Predisposing heart condition or IV drug use.</li>
                <li>Fever (temperature &gt;38.0°C / 100.4°F).</li>
                <li>Vascular phenomena: Major arterial emboli, septic pulmonary infarcts, mycotic aneurysm, intracranial hemorrhage, conjunctival hemorrhages, Janeway lesions (non-tender erythematous macules on palms/soles).</li>
                <li>Immunologic phenomena: Glomerulonephritis, Osler nodes (tender subcutaneous nodules on digits), Roth spots (retinal hemorrhages with pale centers), Rheumatoid factor.</li>
                <li>Microbiological evidence: Positive blood culture not meeting major criteria or serological evidence of active infection with organism consistent with IE.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Diagnostic Interpretation</h3>
              <ul className="list-disc pl-5 space-y-1">
                 <li><strong>Definite IE:</strong> 2 Major criteria, OR 1 Major + 3 Minor criteria, OR 5 Minor criteria.</li>
                 <li><strong>Possible IE:</strong> 1 Major + 1 Minor criterion, OR 3 Minor criteria.</li>
                 <li><strong>Rejected IE:</strong> Firm alternative diagnosis, OR resolution of symptoms with antibiotics ≤4 days, OR no pathologic evidence at surgery/autopsy with antibiotics ≤4 days.</li>
              </ul>
            </div>

             <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">According to the Modified Duke Criteria, which of the following constitutes a Major criterion for diagnosing Infective Endocarditis?</p>
              <button 
                onClick={() => toggleAnswer('duke-major-question')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['duke-major-question'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['duke-major-question'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Examples include: Persistently positive blood cultures with a typical organism OR echocardiographic evidence of vegetation/abscess/new dehiscence OR new valvular regurgitation.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'management' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 mb-4">Management & Complications of IE</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Antibiotic Therapy</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prolonged course of high-dose intravenous antibiotics is required (typically 4-6 weeks).</li>
                <li>Choice of antibiotics depends on the causative organism, susceptibility testing, and whether the valve is native or prosthetic.</li>
                <li>Empiric therapy is started after blood cultures are drawn, covering likely pathogens (e.g., Vancomycin + Ceftriaxone or Gentamicin).</li>
                <li>Therapy is tailored once pathogen and sensitivities are known.</li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <h3 className="text-xl font-bold mb-3 text-cyan-800">Surgical Intervention</h3>
              <p className="mb-3">Surgery (valve repair or replacement) is indicated in cases of:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Heart failure refractory to medical therapy (most common indication).</li>
                <li>Fungal endocarditis or highly resistant organisms.</li>
                <li>Persistent bacteremia despite appropriate antibiotics.</li>
                <li>Perivalvular abscess, fistula, or prosthetic valve dehiscence.</li>
                <li>Recurrent emboli despite antibiotics.</li>
                <li>Large vegetations (&gt;10 mm), especially on anterior mitral leaflet (higher embolic risk).</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Complications</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Cardiac:</strong> Heart failure (due to valve destruction), perivalvular abscess, conduction abnormalities.</li>
                <li><strong>Embolic:</strong> Stroke, splenic/renal infarcts, limb ischemia, pulmonary emboli (especially from right-sided IE).</li>
                <li><strong>Neurologic:</strong> Stroke, mycotic aneurysm rupture, meningitis, abscess.</li>
                <li><strong>Renal:</strong> Glomerulonephritis (immune complex deposition), renal infarcts.</li>
                <li>Metastatic infection (e.g., septic arthritis, vertebral osteomyelitis).</li>
              </ul>
            </div>

             <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">What is the most common indication for surgical intervention in a patient with Infective Endocarditis?</p>
              <button 
                onClick={() => toggleAnswer('ie-surgery-indication')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['ie-surgery-indication'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['ie-surgery-indication'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Heart failure refractory to medical management, usually resulting from severe valvular regurgitation caused by valve destruction.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 mb-4">Self Quiz - Infective Endocarditis</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. Placeholder Question about IE risk factors/pathogens?</h4>
                <button 
                  onClick={() => toggleAnswer('ie-quiz1')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['ie-quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['ie-quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer related to IVDU or common bacteria.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. Placeholder Question about Duke Criteria (Major/Minor)?</h4>
                <button 
                  onClick={() => toggleAnswer('ie-quiz2')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['ie-quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['ie-quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer identifying a Major or Minor criterion.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. Placeholder Question about IE management/complications?</h4>
                <button 
                  onClick={() => toggleAnswer('ie-quiz3')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['ie-quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['ie-quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer about antibiotic duration or a common complication like emboli.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-800 mb-4">Study Guide PDF - Pages 81-End</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="mb-4">Click the link below to view the original PDF pages for this section (opens in a new tab).</p>
              <a
                href="/pdfs/680_CV_disorders_part_one_students_2023 (1)_81-end.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition font-medium"
              >
                Open PDF (Pages 81-End)
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Ensure the PDF file `680_CV_disorders_part_one_students_2023 (1)_81-end.pdf` is placed in the `public/pdfs` directory of your project.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVDisordersPagePart7; 