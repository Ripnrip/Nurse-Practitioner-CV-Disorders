import React, { useState, useRef, useEffect } from 'react';
// Import react-pdf components and configure worker
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CVDisordersPagePart5 = () => {
  const [activeTab, setActiveTab] = useState('cardiomyopathy');
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
      <div className="w-full bg-indigo-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Cardiovascular Disorders</h1>
        <p className="text-xl text-center mt-2">Part One: Pages 51-60 (Cardiomyopathy & Pericardial Disease)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('cardiomyopathy')} 
          className={`px-4 py-2 font-medium ${activeTab === 'cardiomyopathy' ? 'bg-indigo-100 border-b-2 border-indigo-600' : ''}`}
        >
          Cardiomyopathy
        </button>
        <button 
          onClick={() => setActiveTab('pericardial')} 
          className={`px-4 py-2 font-medium ${activeTab === 'pericardial' ? 'bg-indigo-100 border-b-2 border-indigo-600' : ''}`}
        >
          Pericardial Disease
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-indigo-100 border-b-2 border-indigo-600' : ''}`}
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
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Cardiomyopathies</h2>
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

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="text-xl font-bold mb-3 text-indigo-800">Hypertrophic Cardiomyopathy (HCM)</h3>
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
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Pericardial Diseases</h2>
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

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="text-xl font-bold mb-3 text-indigo-800">Pericardial Effusion</h3>
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
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Self Quiz - Cardiomyopathy & Pericardial Disease</h2> 
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              {/* Question 1 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. Which type of cardiomyopathy is characterized by enlargement of the ventricles and impaired systolic function (reduced EF)?</h4>
                <button 
                  onClick={() => toggleAnswer('myopathy_quiz1')}
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                >
                  {showAnswers['myopathy_quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['myopathy_quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Dilated Cardiomyopathy (DCM).</p>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. Hypertrophic Cardiomyopathy (HCM) typically involves hypertrophy of which part of the heart, and what is the primary mode of inheritance?</h4>
                <button 
                  onClick={() => toggleAnswer('myopathy_quiz2')}
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                >
                  {showAnswers['myopathy_quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['myopathy_quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Marked ventricular hypertrophy, often asymmetric septal hypertrophy. It is primarily genetic (autosomal dominant).</p>
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. What type of cardiomyopathy involves stiff, non-compliant ventricles that impair diastolic filling, often caused by conditions like amyloidosis or sarcoidosis?</h4>
                <button 
                  onClick={() => toggleAnswer('myopathy_quiz3')}
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                >
                  {showAnswers['myopathy_quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['myopathy_quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Restrictive Cardiomyopathy (RCM).</p>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">4. Describe the classic chest pain associated with acute pericarditis.</h4>
                <button 
                  onClick={() => toggleAnswer('myopathy_quiz4')}
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                >
                  {showAnswers['myopathy_quiz4'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['myopathy_quiz4'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Sharp, pleuritic chest pain that is worse with inspiration or lying flat, and often relieved by sitting up and leaning forward.</p>
                  </div>
                )}
              </div>

              {/* Question 5 */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">5. What is Beck's Triad, and what condition does it suggest?</h4>
                <button 
                  onClick={() => toggleAnswer('myopathy_quiz5')}
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                >
                  {showAnswers['myopathy_quiz5'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['myopathy_quiz5'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Beck's Triad consists of: 1) Hypotension, 2) Distended Neck Veins (elevated JVP), and 3) Muffled Heart Sounds. It suggests Cardiac Tamponade.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Study Guide PDF - Pages 51-60</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <p className="mb-4 text-center">
                Displaying pages 51-60 from the study guide PDF.
              </p>
              <div 
                ref={pdfContainerRef} 
                className="pdf-container border border-gray-300 mb-4 w-full max-w-3xl" 
                style={{ height: '70vh', overflowY: 'auto' }}
              >
                <Document
                  file="/pdfs/680_CV_disorders_part_one_students_2023 (1)_51-60.pdf"
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
                Ensure the PDF file `680_CV_disorders_part_one_students_2023 (1)_51-60.pdf` is placed in the `public/pdfs` directory.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVDisordersPagePart5; 