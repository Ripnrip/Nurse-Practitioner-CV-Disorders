import React, { useState, useRef, useEffect } from 'react';
// Import react-pdf components and configure worker
import { Document, Page, pdfjs } from 'react-pdf';
// Import Heroicons
import { 
  HeartIcon,
  ExclamationCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  BoltIcon, 
  BeakerIcon,
  FireIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
  ChevronDoubleRightIcon,
  ClockIcon
} from '@heroicons/react/24/solid'; // Using solid style
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
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-lg shadow-md border border-orange-200">
              <h3 className="text-xl font-bold mb-4 text-orange-800 border-b pb-2 border-orange-200 flex items-center">
                <div className="rounded-full bg-orange-100 p-2 mr-3">
                  <HeartIcon className="h-5 w-5 text-orange-600" />
                </div>
                Definition & Pathophysiology
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="mb-3">Acute Coronary Syndrome (ACS) refers to a spectrum of conditions associated with sudden, reduced blood flow to the heart muscle (myocardial ischemia or infarction).</p>
                <p className="mb-3">It's most often caused by the rupture or erosion of an atherosclerotic plaque within a coronary artery. This rupture exposes thrombogenic material, leading to platelet aggregation and thrombus formation, which partially or completely occludes the artery.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-5 rounded-lg shadow-md border border-orange-200">
              <h3 className="text-xl font-bold mb-4 text-orange-800 border-b pb-2 border-orange-200 flex items-center">
                <div className="rounded-full bg-orange-100 p-2 mr-3">
                  <ChartBarIcon className="h-5 w-5 text-orange-600" />
                </div>
                Spectrum of ACS
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="mb-3">ACS is classified based on ECG findings and cardiac biomarker levels:</p>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                      <div className="rounded-full bg-yellow-400 p-1.5 mr-2">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-white" />
                      </div>
                      Unstable Angina (UA)
                    </h4>
                    <p className="ml-8 text-gray-700">
                      Symptoms of myocardial ischemia (e.g., chest pain) at rest or with minimal exertion, or a significant change from previous stable angina pattern.
                    </p>
                    <div className="ml-8 mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="bg-white p-2 rounded border border-yellow-200">
                        <span className="font-semibold text-yellow-800">ECG:</span> May show ST depression, T-wave inversion, or be normal.
                      </div>
                      <div className="bg-white p-2 rounded border border-yellow-200">
                        <span className="font-semibold text-yellow-800">Biomarkers:</span> Cardiac troponins are <span className="font-bold">negative</span> (no significant myocardial necrosis).
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-lg shadow-sm border-l-4 border-amber-400">
                    <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                      <div className="rounded-full bg-amber-400 p-1.5 mr-2">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-white" />
                      </div>
                      Non-ST-Segment Elevation Myocardial Infarction (NSTEMI)
                    </h4>
                    <p className="ml-8 text-gray-700">
                      Similar presentation to UA, but with evidence of myocardial necrosis.
                    </p>
                    <div className="ml-8 mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="bg-white p-2 rounded border border-amber-200">
                        <span className="font-semibold text-amber-800">ECG:</span> Similar to UA (ST depression, T-wave inversion, or normal). No ST elevation.
                      </div>
                      <div className="bg-white p-2 rounded border border-amber-200">
                        <span className="font-semibold text-amber-800">Biomarkers:</span> Cardiac troponins are <span className="font-bold">positive</span> (elevated).
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                      <div className="rounded-full bg-orange-500 p-1.5 mr-2">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-white" />
                      </div>
                      ST-Segment Elevation Myocardial Infarction (STEMI)
                    </h4>
                    <p className="ml-8 text-gray-700">
                      Evidence of myocardial necrosis with characteristic ECG changes indicating complete coronary artery occlusion.
                    </p>
                    <div className="ml-8 mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="bg-white p-2 rounded border border-orange-200">
                        <span className="font-semibold text-orange-800">ECG:</span> ST-segment elevation in specific leads, or new Left Bundle Branch Block (LBBB).
                      </div>
                      <div className="bg-white p-2 rounded border border-orange-200">
                        <span className="font-semibold text-orange-800">Biomarkers:</span> Cardiac troponins are <span className="font-bold">positive</span> (elevated).
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800 flex items-start">
                    <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5">i</span>
                    Note: UA and NSTEMI are often grouped together as Non-ST-Segment Elevation ACS (NSTE-ACS) due to similar initial management strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-5 rounded-lg shadow-md border border-orange-200">
              <h3 className="text-xl font-bold mb-4 text-orange-800 border-b pb-2 border-orange-200 flex items-center">
                <div className="rounded-full bg-orange-100 p-2 mr-3">
                  <ExclamationCircleIcon className="h-5 w-5 text-orange-600" />
                </div>
                Common Symptoms
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 p-3 rounded-lg shadow-sm border-l-4 border-red-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-red-400 p-1.5 mr-2">
                        <HeartIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-red-800">Chest pain/pressure/discomfort</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700">(often described as squeezing, heavy, tight; may radiate to jaw, neck, arms, back)</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg shadow-sm border-l-4 border-blue-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-blue-400 p-1.5 mr-2">
                        <ArrowTrendingUpIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-blue-800">Dyspnea</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700">(Shortness of breath)</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-3 rounded-lg shadow-sm border-l-4 border-cyan-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-cyan-400 p-1.5 mr-2">
                        <BeakerIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-cyan-800">Diaphoresis</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700">(Sweating)</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg shadow-sm border-l-4 border-green-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-green-400 p-1.5 mr-2">
                        <ArrowPathIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-green-800">Nausea/Vomiting</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700"></p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-3 rounded-lg shadow-sm border-l-4 border-amber-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-amber-400 p-1.5 mr-2">
                        <BoltIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-amber-800">Fatigue/Weakness</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700"></p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg shadow-sm border-l-4 border-purple-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-purple-400 p-1.5 mr-2">
                        <ClockIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-purple-800">Dizziness/Lightheadedness</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700"></p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 flex items-start">
                    <span className="bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5">!</span>
                    <span>Atypical presentations (e.g., epigastric pain, fatigue only) are more common in women, the elderly, and patients with diabetes.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'diagnosis' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Diagnosis of ACS</h2>
            <p className="text-lg text-gray-700 mb-4">Diagnosis relies on integrating clinical presentation, ECG findings, and cardiac biomarker results.</p>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-5 rounded-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2 border-blue-200 flex items-center">
                <div className="rounded-full bg-blue-100 p-2 mr-3">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-blue-600" />
                </div>
                1. Clinical Presentation (History & Physical)
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-blue-100 p-1.5 mr-3 mt-0.5">
                      <ChevronDoubleRightIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-gray-700">Detailed description of symptoms (PQRST: Provocation/Palliation, Quality, Radiation, Severity, Timing).</p>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-blue-100 p-1.5 mr-3 mt-0.5">
                      <ChevronDoubleRightIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-gray-700">Assessment of cardiovascular risk factors.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-blue-100 p-1.5 mr-3 mt-0.5">
                      <ChevronDoubleRightIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-gray-700">Physical exam may reveal signs of heart failure (rales, JVD, S3), arrhythmias, or hemodynamic instability, but can often be normal.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg shadow-md border border-orange-200">
              <h3 className="text-xl font-bold mb-4 text-orange-800 border-b pb-2 border-orange-200 flex items-center">
                <div className="rounded-full bg-orange-100 p-2 mr-3">
                  <HeartIcon className="h-5 w-5 text-orange-600" />
                </div>
                2. Electrocardiogram (ECG)
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 p-3 rounded-lg border-l-4 border-red-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-red-400 p-1.5 mr-2">
                        <ClockIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-red-800">Crucial first step</p>
                    </div>
                    <p className="ml-8 text-gray-700">Obtain within 10 minutes of presentation for chest pain/ACS symptoms.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-3 rounded-lg border-l-4 border-amber-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-amber-400 p-1.5 mr-2">
                        <ArrowTrendingUpIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-amber-800">STEMI Findings</p>
                    </div>
                    <p className="ml-8 text-gray-700">New ST-segment elevation (≥1 mm in ≥2 contiguous limb leads or ≥2 mm in ≥2 contiguous precordial leads) or new LBBB. Indicates need for immediate reperfusion.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-blue-400 p-1.5 mr-2">
                        <ArrowTrendingDownIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-blue-800">NSTE-ACS Findings (UA/NSTEMI)</p>
                    </div>
                    <p className="ml-8 text-gray-700">ST depression (≥0.5 mm), T-wave inversion (≥1 mm), or transient ST elevation. ECG can also be normal.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-green-400 p-1.5 mr-2">
                        <ArrowPathIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-green-800">Reciprocal Changes</p>
                    </div>
                    <p className="ml-8 text-gray-700">ST depression in leads opposite to those with ST elevation can help confirm STEMI.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-purple-400 p-1.5 mr-2">
                        <ChartBarIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-purple-800">Localization</p>
                    </div>
                    <p className="ml-8 text-gray-700">The leads showing ST elevation often indicate the area of infarction (e.g., II, III, aVF = Inferior; V1-V4 = Anterior).</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-3 rounded-lg border-l-4 border-cyan-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-cyan-400 p-1.5 mr-2">
                        <FireIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-cyan-800">Serial ECGs</p>
                    </div>
                    <p className="ml-8 text-gray-700">Important if initial ECG is non-diagnostic, as changes can evolve.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-lg shadow-md border border-indigo-200">
              <h3 className="text-xl font-bold mb-4 text-indigo-800 border-b pb-2 border-indigo-200 flex items-center">
                <div className="rounded-full bg-indigo-100 p-2 mr-3">
                  <BeakerIcon className="h-5 w-5 text-indigo-600" />
                </div>
                3. Cardiac Biomarkers (Troponins)
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-indigo-50 to-violet-50 p-3 rounded-lg border-l-4 border-indigo-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-indigo-400 p-1.5 mr-2">
                        <BoltIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-indigo-800">Troponin I or Troponin T</p>
                    </div>
                    <p className="ml-8 text-gray-700">Preferred markers due to high sensitivity and specificity for myocardial injury.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-blue-400 p-1.5 mr-2">
                        <ExclamationCircleIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-blue-800">Significance</p>
                    </div>
                    <p className="ml-8 text-gray-700">Elevated levels indicate myocardial necrosis (infarction).</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-3 rounded-lg border-l-4 border-amber-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-amber-400 p-1.5 mr-2">
                        <ClockIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-amber-800">Timing</p>
                    </div>
                    <p className="ml-8 text-gray-700">Begin to rise 2-4 hours after injury onset, peak around 12-24 hours, remain elevated for days.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-teal-400 p-1.5 mr-2">
                        <ArrowPathIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-teal-800">Serial Measurements</p>
                    </div>
                    <p className="ml-8 text-gray-700">Typically drawn on presentation and repeated 3-6 hours later (using high-sensitivity assays may allow earlier rule-out/rule-in).</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 to-red-100 p-3 rounded-lg border-l-4 border-red-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-red-400 p-1.5 mr-2">
                        <ChartBarIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-red-800">Distinguishes UA from NSTEMI</p>
                    </div>
                    <p className="ml-8 text-gray-700">Troponins are <span className="font-bold">negative</span> in UA and <span className="font-bold">positive</span> in NSTEMI and STEMI.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg border-l-4 border-orange-400">
                    <div className="flex items-center mb-1">
                      <div className="rounded-full bg-orange-400 p-1.5 mr-2">
                        <BeakerIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-orange-800">CK-MB</p>
                    </div>
                    <p className="ml-8 text-gray-700">Less specific than troponin; may still be used in some settings, returns to baseline faster (useful for detecting re-infarction).</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg shadow-md border border-purple-200">
              <h3 className="text-xl font-bold mb-4 text-purple-800 border-b pb-2 border-purple-200 flex items-center">
                <div className="rounded-full bg-purple-100 p-2 mr-3">
                  <ChartBarIcon className="h-5 w-5 text-purple-600" />
                </div>
                Risk Stratification
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-700">Tools like <span className="font-bold text-red-700">TIMI</span> (Thrombolysis in Myocardial Infarction) and <span className="font-bold text-blue-700">GRACE</span> (Global Registry of Acute Coronary Events) scores help predict risk of adverse outcomes in NSTE-ACS and guide decisions about invasive strategies.</p>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 flex items-start">
                    <span className="bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5">!</span>
                    <span>Higher risk scores indicate greater benefit from early invasive strategy.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'management' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Management of ACS</h2>
            <p className="text-lg text-gray-700 mb-4">Goals: Relieve ischemia/pain, prevent further thrombus formation/myocardial damage, restore blood flow (especially in STEMI), and prevent complications.</p>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2 border-blue-200 flex items-center">
                <div className="rounded-full bg-blue-100 p-2 mr-3">
                  <BoltIcon className="h-5 w-5 text-blue-600" />
                </div>
                Initial Management (All ACS Suspected)
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="mb-3">Focus on rapid assessment and initiation of therapies:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 p-3 rounded-lg border-l-4 border-red-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-red-400 p-1.5 mr-2">
                        <HeartIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-red-800">ECG</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700">Obtain and interpret within 10 minutes.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-blue-400 p-1.5 mr-2">
                        <ArrowTrendingUpIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-blue-800">Oxygen</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700">Supplemental O2 if O2 saturation &lt; 90% or respiratory distress.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-3 rounded-lg border-l-4 border-amber-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-amber-400 p-1.5 mr-2">
                        <BeakerIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-amber-800">Aspirin (ASA)</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700">Chewable non-enteric coated (162-325 mg) ASAP. Antiplatelet effect.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-3 rounded-lg border-l-4 border-cyan-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-cyan-400 p-1.5 mr-2">
                        <ArrowPathIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-cyan-800">Nitroglycerin (NTG)</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700">Sublingual or IV for ongoing chest pain, HTN, or HF signs. Vasodilator. (Contraindicated if hypotension, recent PDE5 inhibitor use, suspected RV infarction).</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-green-400 p-1.5 mr-2">
                        <ArrowTrendingDownIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-green-800">Pain Control</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700">Morphine IV if pain persists despite NTG. Use cautiously (can mask symptoms, potential adverse effects).</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-center">
                      <div className="rounded-full bg-purple-400 p-1.5 mr-2">
                        <ClockIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-medium text-purple-800">Beta-Blockers</p>
                    </div>
                    <p className="ml-8 text-sm text-gray-700">Oral BB within 24 hours if no contraindications (e.g., signs of HF, low output state, risk of shock). Reduces myocardial oxygen demand.</p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 flex items-start">
                    <span className="bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5">!</span>
                    <span>Mnemonic <span className="font-mono">"MONA"</span> (Morphine, Oxygen, Nitrates, Aspirin) is often taught but order/indication varies. Focus on timely ECG, ASA, and appropriate use of other agents.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg shadow-md border border-orange-200">
              <h3 className="text-xl font-bold mb-4 text-orange-800 border-b pb-2 border-orange-200 flex items-center">
                <div className="rounded-full bg-orange-100 p-2 mr-3">
                  <ChartBarIcon className="h-5 w-5 text-orange-600" />
                </div>
                Management Based on ACS Type
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm space-y-5">
                {/* STEMI Management */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-bold text-lg text-red-800 mb-2 flex items-center">
                    <div className="rounded-full bg-red-400 p-1.5 mr-2">
                      <FireIcon className="h-4 w-4 text-white" />
                    </div>
                    STEMI
                  </h4>
                  <p className="mb-3 text-red-800 font-semibold">Reperfusion is KEY! Goal is to restore blood flow ASAP.</p>
                  <ul className="space-y-3 ml-9">
                    <li className="flex items-start">
                      <div className="rounded-full bg-red-100 p-1 mr-2 mt-0.5">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Primary Percutaneous Coronary Intervention (PCI):</span>
                        <p className="text-gray-700">Preferred strategy if available within recommended timeframes (door-to-balloon typically ≤ 90 minutes). Angioplasty +/- stent.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-red-100 p-1 mr-2 mt-0.5">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Fibrinolysis ("Clot Buster"):</span>
                        <p className="text-gray-700">If PCI is not available promptly (e.g., {'>'} 120 minutes from first medical contact). Administer within 30 minutes of arrival (door-to-needle). Examples: alteplase, tenecteplase.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-red-100 p-1 mr-2 mt-0.5">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Antiplatelet Therapy:</span>
                        <p className="text-gray-700">Dual Antiplatelet Therapy (DAPT) = ASA + P2Y12 inhibitor (e.g., clopidogrel, prasugrel, ticagrelor).</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-red-100 p-1 mr-2 mt-0.5">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Anticoagulation:</span>
                        <p className="text-gray-700">Heparin (unfractionated or LMWH) or bivalirudin often used adjunctively.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* NSTE-ACS Management */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-bold text-lg text-blue-800 mb-2 flex items-center">
                    <div className="rounded-full bg-blue-400 p-1.5 mr-2">
                      <BeakerIcon className="h-4 w-4 text-white" />
                    </div>
                    NSTE-ACS (UA/NSTEMI)
                  </h4>
                  <ul className="space-y-3 ml-9">
                    <li className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-1 mr-2 mt-0.5">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Antiplatelet Therapy:</span>
                        <p className="text-gray-700">DAPT (ASA + P2Y12 inhibitor).</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-1 mr-2 mt-0.5">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Anticoagulation:</span>
                        <p className="text-gray-700">Heparin (UFH or LMWH), fondaparinux, or bivalirudin.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-1 mr-2 mt-0.5">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Risk Stratification:</span>
                        <p className="text-gray-700">Determines timing of intervention.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-1 mr-2 mt-0.5">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Invasive Strategy:</span>
                        <p className="text-gray-700">Coronary angiography +/- revascularization (PCI or CABG). Timing depends on risk (immediate for instability, early for high-risk, delayed/ischemia-guided for lower-risk).</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-1 mr-2 mt-0.5">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Conservative Strategy:</span>
                        <p className="text-gray-700">Medical management initially, angiography if recurrent symptoms/ischemia or positive stress test.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-1 mr-2 mt-0.5">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Medications:</span>
                        <p className="text-gray-700">Continue Beta-blockers, consider ACE inhibitors/ARBs, Statins.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg shadow-md border border-green-200">
              <h3 className="text-xl font-bold mb-4 text-green-800 border-b pb-2 border-green-200 flex items-center">
                <div className="rounded-full bg-green-100 p-2 mr-3">
                  <ArrowPathIcon className="h-5 w-5 text-green-600" />
                </div>
                Long-Term Management (Secondary Prevention)
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-3">Crucial after any ACS event. Includes:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border-l-4 border-blue-400">
                    <p className="font-medium text-blue-800 mb-1">Lifestyle Changes</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Heart-healthy diet</li>
                      <li>• Regular exercise</li>
                      <li>• Smoking cessation</li>
                      <li>• Stress management</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg border-l-4 border-purple-400">
                    <p className="font-medium text-purple-800 mb-1">Medication Adherence</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• DAPT (duration varies)</li>
                      <li>• Beta-blockers</li>
                      <li>• Statins (high-intensity)</li>
                      <li>• ACE-I/ARBs (if indicated)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-3 rounded-lg border-l-4 border-amber-400">
                    <p className="font-medium text-amber-800 mb-1">Follow-up Care</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Cardiac rehabilitation</li>
                      <li>• Regular provider visits</li>
                      <li>• Risk factor monitoring</li>
                      <li>• Depression screening</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 flex items-start">
                    <span className="bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5">!</span>
                    <span>Secondary prevention is critical - the risk of recurrent events is highest in the first year after ACS.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Self Quiz - ACS Basics, Dx, Mgmt</h2>
            
            <div className="bg-gradient-to-br from-gray-50 to-orange-50 p-5 rounded-lg shadow-md border border-orange-200">
              <h3 className="text-xl font-bold mb-4 text-orange-800 border-b pb-2 border-orange-200 flex items-center">
                <div className="rounded-full bg-orange-100 p-2 mr-3">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-orange-600" />
                </div>
                Test Your Knowledge
              </h3>
              
              {/* Question 1 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <div className="rounded-full bg-yellow-100 p-1.5 mr-2">
                    <span className="text-yellow-800 font-bold">1</span>
                  </div>
                  How is Unstable Angina (UA) differentiated from NSTEMI based on diagnostic tests?
                </h4>
                <button 
                  onClick={() => toggleAnswer('acs_quiz1')}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded hover:shadow-md transition duration-300 shadow-sm"
                >
                  {showAnswers['acs_quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs_quiz1'] && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg shadow-inner">
                    <p className="text-gray-700">Both UA and NSTEMI can have similar ECG findings (ST depression, T-wave inversion, or normal ECG). The key difference is cardiac biomarkers: Troponins are <span className="font-bold text-red-700">negative</span> in UA and <span className="font-bold text-red-700">positive</span> in NSTEMI, indicating myocardial necrosis in NSTEMI.</p>
                  </div>
                )}
              </div>
              
              {/* Question 2 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <div className="rounded-full bg-orange-100 p-1.5 mr-2">
                    <span className="text-orange-800 font-bold">2</span>
                  </div>
                  What are the characteristic ECG findings suggestive of a STEMI?
                </h4>
                <button 
                  onClick={() => toggleAnswer('acs_quiz2')}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded hover:shadow-md transition duration-300 shadow-sm"
                >
                  {showAnswers['acs_quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs_quiz2'] && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg shadow-inner">
                    <p className="text-gray-700">New ST-segment elevation (≥1 mm in ≥2 contiguous limb leads or ≥2 mm in ≥2 contiguous precordial leads) or a new Left Bundle Branch Block (LBBB).</p>
                  </div>
                )}
              </div>
              
              {/* Question 3 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <div className="rounded-full bg-red-100 p-1.5 mr-2">
                    <span className="text-red-800 font-bold">3</span>
                  </div>
                  An ECG shows ST elevation in leads II, III, and aVF. Which area of the heart is likely experiencing infarction?
                </h4>
                <button 
                  onClick={() => toggleAnswer('acs_quiz3')}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded hover:shadow-md transition duration-300 shadow-sm"
                >
                  {showAnswers['acs_quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs_quiz3'] && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg shadow-inner">
                    <p className="text-gray-700"><span className="font-bold text-red-700">Inferior wall</span> of the left ventricle.</p>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <div className="rounded-full bg-blue-100 p-1.5 mr-2">
                    <span className="text-blue-800 font-bold">4</span>
                  </div>
                  What is the preferred reperfusion strategy for STEMI if it can be performed within 90 minutes of first medical contact?
                </h4>
                <button 
                  onClick={() => toggleAnswer('acs_quiz4')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded hover:shadow-md transition duration-300 shadow-sm"
                >
                  {showAnswers['acs_quiz4'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs_quiz4'] && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-inner">
                    <p className="text-gray-700"><span className="font-bold text-blue-700">Primary Percutaneous Coronary Intervention (PCI)</span>.</p>
                  </div>
                )}
              </div>

              {/* Question 5 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <div className="rounded-full bg-purple-100 p-1.5 mr-2">
                    <span className="text-purple-800 font-bold">5</span>
                  </div>
                  Beyond Aspirin, what class of medication is crucial for initial antiplatelet therapy in both STEMI and NSTE-ACS? Give an example.
                </h4>
                <button 
                  onClick={() => toggleAnswer('acs_quiz5')}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded hover:shadow-md transition duration-300 shadow-sm"
                >
                  {showAnswers['acs_quiz5'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['acs_quiz5'] && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-inner">
                    <p className="text-gray-700">A <span className="font-bold text-purple-700">P2Y12 inhibitor</span>. Examples include clopidogrel, ticagrelor, or prasugrel (choice depends on clinical scenario and whether PCI is planned).</p>
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
                  file={`${process.env.PUBLIC_URL}/pdfs/680_CV_disorders_part_one_students_2023 (1)_21-30.pdf`}
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