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
  CakeIcon,
  ClockIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
  NoSymbolIcon,
  ScaleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/solid'; // Using solid style
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker source (replace with the correct path if needed)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CVDisordersPagePart1 = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAnswers, setShowAnswers] = useState({});
  // State for PDF viewer
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // Ref and state for container width
  const pdfContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(null);

  // Effect to measure container width
  useEffect(() => {
    const currentRef = pdfContainerRef.current;
    if (currentRef) {
      const handleResize = () => {
        setContainerWidth(currentRef.clientWidth);
      };
      // Set initial width
      handleResize();
      // Add resize listener
      window.addEventListener('resize', handleResize);
      // Cleanup listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  const toggleAnswer = (id) => {
    setShowAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full bg-blue-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Cardiovascular Disorders in the Elderly</h1>
        <p className="text-xl text-center mt-2">Interactive Study Guide - Part 1</p>
      </div>

      <div className="flex border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('overview')} 
          className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('assessment')} 
          className={`px-4 py-2 font-medium ${activeTab === 'assessment' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Assessment
        </button>
        <button 
          onClick={() => setActiveTab('aging-effects')} 
          className={`px-4 py-2 font-medium ${activeTab === 'aging-effects' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Aging Effects
        </button>
        <button 
          onClick={() => setActiveTab('hypertension')} 
          className={`px-4 py-2 font-medium ${activeTab === 'hypertension' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Hypertension
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Self Quiz
        </button>
        <button
          onClick={() => setActiveTab('pdf')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'pdf' ? 'bg-red-100 border-b-2 border-red-600' : 'text-gray-600 hover:text-red-800'}`}
        >
          View PDF Pages (1-10)
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Overview of Cardiovascular Disorders</h2>
            
            {/* Key Concepts Section with enhanced styling */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2 border-blue-200">Key Concepts</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-blue-400">
                  <div className="flex items-start">
                    <div className="rounded-full bg-blue-400 p-2 mr-3 flex-shrink-0">
                      <HeartIcon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">Cardiovascular disease (CVD) is the leading cause of death globally, encompassing a range of conditions affecting the heart and blood vessels.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-red-400">
                  <div className="flex items-start">
                    <div className="rounded-full bg-red-400 p-2 mr-3 flex-shrink-0">
                      <ExclamationCircleIcon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">Major risk factors include hypertension, hyperlipidemia, diabetes, smoking, obesity, and sedentary lifestyle. Many are modifiable.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-green-400">
                  <div className="flex items-start">
                    <div className="rounded-full bg-green-400 p-2 mr-3 flex-shrink-0">
                      <BeakerIcon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">Understanding pathophysiology, clinical presentation, diagnosis, and management is crucial for effective nursing care.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scope Section with enhanced styling */}
            <div className="bg-gradient-to-br from-gray-50 to-indigo-50 p-5 rounded-lg shadow-md border border-indigo-200">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4 border-b pb-2 border-indigo-200">Scope of This Section (Pages 1-10)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-indigo-400">
                  <div className="flex items-start">
                    <div className="rounded-full bg-indigo-400 p-2 mr-3 flex-shrink-0">
                      <ArrowTrendingUpIcon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">Focuses on foundational knowledge, risk factors, and initial assessment strategies.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-indigo-400">
                  <div className="flex items-start">
                    <div className="rounded-full bg-indigo-400 p-2 mr-3 flex-shrink-0">
                      <ArrowTrendingDownIcon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">Introduces the impact of aging on the cardiovascular system.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-indigo-400">
                  <div className="flex items-start">
                    <div className="rounded-full bg-indigo-400 p-2 mr-3 flex-shrink-0">
                      <BoltIcon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">Provides a brief overview of hypertension basics as a major risk factor.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* New section: Importance for Nursing Practice */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg shadow-md border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-700 mb-4 border-b pb-2 border-amber-200">Importance for Nursing Practice</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-amber-400 p-1.5 mr-3 mt-0.5 flex-shrink-0">
                      <FireIcon className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700">Early detection and intervention can significantly reduce morbidity and mortality</p>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-amber-400 p-1.5 mr-3 mt-0.5 flex-shrink-0">
                      <FireIcon className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700">Patient education about modifiable risk factors is a key nursing responsibility</p>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-amber-400 p-1.5 mr-3 mt-0.5 flex-shrink-0">
                      <FireIcon className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700">Nurses play a vital role in medication adherence and lifestyle modification support</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'assessment' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Assessment of the Cardiovascular System</h2>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-5 border-b pb-2 border-blue-200">Key Symptoms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Dizziness */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-blue-400">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full bg-blue-400 p-2 mr-3">
                      <ExclamationCircleIcon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-blue-700 text-lg">Dizziness</h4>
                  </div>
                  <p className="text-gray-700 ml-12">Feeling lightheaded or unsteady</p>
                </div>
                
                {/* Syncope */}
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-purple-400">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full bg-purple-400 p-2 mr-3">
                      <BoltIcon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-purple-700 text-lg">Syncope</h4>
                  </div>
                  <p className="text-gray-700 ml-12">Temporary loss of consciousness</p>
                </div>
                
                {/* Orthopnea */}
                <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-teal-400">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full bg-teal-400 p-2 mr-3">
                      <BeakerIcon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-teal-700 text-lg">Orthopnea</h4>
                  </div>
                  <p className="text-gray-700 ml-12">Shortness of breath when lying flat</p>
                </div>
                
                {/* Angina */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-red-400">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full bg-red-400 p-2 mr-3">
                      <HeartIcon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-red-700 text-lg">Angina</h4>
                  </div>
                  <p className="text-gray-700 ml-12">Chest pain due to reduced blood flow to heart muscle</p>
                </div>
                
                {/* Edema */}
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-amber-400">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full bg-amber-400 p-2 mr-3">
                      <FireIcon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-amber-700 text-lg">Edema</h4>
                  </div>
                  <p className="text-gray-700 ml-12">Swelling due to fluid accumulation in tissues</p>
                </div>
                
                {/* Claudication */}
                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg shadow-sm transition duration-300 hover:shadow-md border-l-4 border-indigo-400">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full bg-indigo-400 p-2 mr-3">
                      <BoltIcon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-indigo-700 text-lg">Claudication</h4>
                  </div>
                  <p className="text-gray-700 ml-12">Pain in the legs during walking that improves with rest</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Challenge Yourself!</h3>
              <p className="mb-4 text-gray-700">Which of these symptoms are most directly related to heart failure?</p>
              <button 
                onClick={() => toggleAnswer('symptoms')}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition shadow-sm hover:shadow-md"
              >
                {showAnswers.symptoms ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers.symptoms && (
                <div className="mt-4 p-4 bg-white rounded-lg shadow-inner">
                  <p><span className="font-bold">Orthopnea and Edema</span> are classic signs of heart failure. Orthopnea occurs due to fluid redistribution when lying flat, and edema results from fluid retention.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'aging-effects' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Principal Effects of Aging on the CV System</h2>
            
            <div className="overflow-hidden shadow-lg rounded-lg">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                    <th className="p-4 text-left font-semibold">Age Effect</th>
                    <th className="p-4 text-left font-semibold">Clinical Implication</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-red-50 transition duration-150">
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="rounded-full bg-red-100 p-1.5 mr-3">
                          <ArrowTrendingUpIcon className="h-4 w-4 text-red-600" />
                        </div>
                        <span className="font-medium">Arterial stiffness</span>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="rounded-full bg-red-100 p-1.5 mr-3">
                          <ArrowTrendingUpIcon className="h-4 w-4 text-red-600" />
                        </div>
                        <span>Afterload and systolic BP</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-red-50 transition duration-150">
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="rounded-full bg-green-100 p-1.5 mr-3">
                          <ArrowTrendingDownIcon className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="font-medium">Myocardial relaxation & compliance</span>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-start">
                        <div className="rounded-full bg-red-100 p-1.5 mr-3 mt-0.5">
                          <ArrowTrendingUpIcon className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          Risk of <span className="font-bold text-red-700">diastolic heart failure</span> and <span className="font-bold text-red-700">atrial fibrillation</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-red-50 transition duration-150">
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <span className="font-medium ml-9">Impaired responsiveness to β-adrenergic stimulation</span>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="rounded-full bg-green-100 p-1.5 mr-3">
                          <ArrowTrendingDownIcon className="h-4 w-4 text-green-600" />
                        </div>
                        <span>Maximum cardiac output; impaired thermoregulation</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-red-50 transition duration-150">
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="rounded-full bg-green-100 p-1.5 mr-3">
                          <ArrowTrendingDownIcon className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="font-medium">Sinus node function and conduction velocity</span>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-start">
                        <div className="rounded-full bg-red-100 p-1.5 mr-3 mt-0.5">
                          <ArrowTrendingUpIcon className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          Risk of <span className="font-bold text-red-700">sick sinus syndrome</span>, <span className="font-bold text-red-700">left anterior fascicular block</span>, and <span className="font-bold text-red-700">bundle branch block</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-red-50 transition duration-150">
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <span className="font-medium ml-9">Impaired endothelium-dependent vasodilation</span>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-start">
                        <div className="rounded-full bg-red-100 p-1.5 mr-3 mt-0.5">
                          <ArrowTrendingUpIcon className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          Demand ischemia and risk of <span className="font-bold text-red-700">coronary artery disease</span> and <span className="font-bold text-red-700">peripheral arterial disease</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-red-50 transition duration-150">
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="rounded-full bg-green-100 p-1.5 mr-3">
                          <ArrowTrendingDownIcon className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="font-medium">Baroreceptor responsiveness</span>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="rounded-full bg-red-100 p-1.5 mr-3">
                          <ArrowTrendingUpIcon className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          Risk of <span className="font-bold text-red-700">orthostatic hypotension</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-red-50 transition duration-150">
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="rounded-full bg-green-100 p-1.5 mr-3">
                          <ArrowTrendingDownIcon className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="font-medium">Exercise response</span>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="flex">
                          <div className="rounded-full bg-green-100 p-1.5 mr-2">
                            <ArrowTrendingDownIcon className="h-4 w-4 text-green-600" />
                          </div>
                          <span>Exercise capacity and</span>
                          <div className="rounded-full bg-red-100 p-1.5 mx-2">
                            <ArrowTrendingUpIcon className="h-4 w-4 text-red-600" />
                          </div>
                          <span>cardiac complications with illness</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2 border-blue-200">Clinical Effects of CV Changes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <h4 className="font-bold text-lg text-blue-700 mb-2">At Rest</h4>
                  <p className="text-gray-700">In healthy older adults, age-related changes have modest clinically relevant effects on cardiac hemodynamics and performance at rest</p>
                  <p className="mt-2 text-sm text-gray-600">Resting heart rate, ejection fraction, stroke volume, and cardiac output are well preserved even at very advanced age</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <h4 className="font-bold text-lg text-blue-700 mb-2">With Increased Demands</h4>
                  <p className="text-gray-700">Ability to respond to increased demands associated with exercise or illness declines progressively with advancing age</p>
                  <p className="mt-2 text-sm text-gray-600">Peak aerobic capacity declines inexorably with age</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hypertension' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Hypertension in the Elderly</h2>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2 border-blue-200">Key Statistics</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-red-500 text-white font-bold text-center mr-3 flex-shrink-0 pt-0.5">!</span>
                  <span className="text-gray-700">High prevalence of HTN — only a third of elderly patients meets B/P target recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-center mr-3 flex-shrink-0 pt-0.5">#</span>
                  <span className="text-gray-700">Affects <span className="font-bold text-blue-700">86 million</span> U.S. Adults 20 years or older</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-red-500 text-white font-bold text-center mr-3 flex-shrink-0 pt-0.5">½</span>
                  <span className="text-gray-700">Half of hypertensive patients are <span className="font-bold text-red-700">not well controlled</span></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-center mr-3 flex-shrink-0 pt-0.5">?</span>
                  <span className="text-gray-700"><span className="font-bold text-amber-700">15%</span> of hypertensive patients are not even aware they have HTN</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-purple-500 text-white font-bold text-center mr-3 flex-shrink-0 pt-0.5">!</span>
                  <span className="text-gray-700">Up to <span className="font-bold text-purple-700">95%</span> are diagnosed with essential hypertension</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-indigo-500 text-white font-bold text-center mr-3 flex-shrink-0 pt-0.5">↑</span>
                  <span className="text-gray-700">Higher in African Americans, with higher mortality rate</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-800 border-b pb-2 border-green-200">Benefits of HTN Control</h3>
              <p className="mb-4 text-gray-700">Reduction of 10 mmHg systolic and 5 mmHg diastolic at age 65 associated with:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 text-center transform transition hover:scale-105 hover:shadow-md">
                  <h4 className="font-bold text-green-600 text-3xl mb-1">25%</h4>
                  <p className="text-gray-700">Reduction of MI</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 text-center transform transition hover:scale-105 hover:shadow-md">
                  <h4 className="font-bold text-green-600 text-3xl mb-1">40%</h4>
                  <p className="text-gray-700">Reduction of stroke</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 text-center transform transition hover:scale-105 hover:shadow-md">
                  <h4 className="font-bold text-green-600 text-3xl mb-1">50%</h4>
                  <p className="text-gray-700">Reduction of CHF</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 text-center transform transition hover:scale-105 hover:shadow-md">
                  <h4 className="font-bold text-green-600 text-3xl mb-1">20%</h4>
                  <p className="text-gray-700">Reduction of mortality</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2 border-blue-200">HTN Risk Factors</h3>
              
              {/* Changeable risk factors with visual representation */}
              <div className="mb-6">
                <h4 className="font-bold text-lg text-blue-700 mb-3 flex items-center">
                  <div className="rounded-full bg-blue-100 p-1 mr-2">
                    <ArrowTrendingDownIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  Changeable Risk Factors
                </h4>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-red-100 p-3 mb-2">
                        <ScaleIcon className="h-8 w-8 text-red-500" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">Overweight or Obesity</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-blue-100 p-3 mb-2 relative">
                        <span className="text-2xl">🧂</span>
                      </div>
                      <p className="text-sm font-medium text-gray-700">High sodium salt usage</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-purple-100 p-3 mb-2">
                        <BeakerIcon className="h-8 w-8 text-purple-500" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">Alcohol use</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-blue-100 p-3 mb-2 relative">
                        <span className="text-2xl">🛋️</span>
                      </div>
                      <p className="text-sm font-medium text-gray-700">Lack of physical activity</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-gray-100 p-3 mb-2">
                        <FireIcon className="h-8 w-8 text-gray-500" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">Smoking</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-yellow-100 p-3 mb-2">
                        <BoltIcon className="h-8 w-8 text-yellow-500" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">Stress</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Unchangeable risk factors with visual representation */}
              <div>
                <h4 className="font-bold text-lg text-indigo-700 mb-3 flex items-center">
                  <div className="rounded-full bg-indigo-100 p-1 mr-2">
                    <ArrowTrendingUpIcon className="h-5 w-5 text-indigo-600" />
                  </div>
                  Unchangeable Risk Factors
                </h4>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-yellow-100 p-3 mb-2">
                        <ClockIcon className="h-8 w-8 text-yellow-500" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">Aging</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-orange-100 p-3 mb-2">
                        <GlobeAltIcon className="h-8 w-8 text-orange-500" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">Race</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-green-100 p-3 mb-2">
                        <UserGroupIcon className="h-8 w-8 text-green-500" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">Family history</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-indigo-100 p-3 mb-2 relative">
                        <span className="text-2xl">⚧️</span>
                      </div>
                      <p className="text-sm font-medium text-gray-700">Gender</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-pink-100 p-3 mb-2 relative">
                        <span className="text-2xl">🤰</span>
                      </div>
                      <p className="text-sm font-medium text-gray-700">Gestational hypertension</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Self Quiz - Part 1</h2>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2 border-blue-200">Test Your Knowledge</h3>
              
              {/* Question 1 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                <h4 className="font-bold text-gray-800 mb-3">1. What are the "Fatal Four" major cardiovascular risk factors?</h4>
                <button 
                  onClick={() => toggleAnswer('quiz1_1')} 
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-sm hover:shadow-md"
                >
                  {showAnswers['quiz1_1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['quiz1_1'] && (
                  <div className="mt-3 p-4 bg-blue-50 rounded-lg shadow-inner">
                    <p className="text-gray-700"><span className="font-bold text-blue-700">Hypertension, Diabetes Mellitus, Dyslipidemia, and Smoking</span>.</p>
                  </div>
                )}
              </div>
              
              {/* Question 2 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-400">
                <h4 className="font-bold text-gray-800 mb-3">2. An elderly patient reports becoming short of breath whenever they lie down flat to sleep. What is the medical term for this symptom, and what condition is it strongly associated with?</h4>
                <button 
                  onClick={() => toggleAnswer('quiz1_2')}
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition shadow-sm hover:shadow-md"
                >
                  {showAnswers['quiz1_2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['quiz1_2'] && (
                  <div className="mt-3 p-4 bg-teal-50 rounded-lg shadow-inner">
                    <p className="text-gray-700"><span className="font-bold text-teal-700">Orthopnea</span>. It is strongly associated with <span className="font-bold text-teal-700">Heart Failure</span>.</p>
                  </div>
                )}
              </div>
              
              {/* Question 3 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                <h4 className="font-bold text-gray-800 mb-3">3. Which specific age-related cardiovascular change is most directly linked to an increased risk of orthostatic hypotension in the elderly?</h4>
                <button 
                  onClick={() => toggleAnswer('quiz1_3')}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition shadow-sm hover:shadow-md"
                >
                  {showAnswers['quiz1_3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['quiz1_3'] && (
                  <div className="mt-3 p-4 bg-purple-50 rounded-lg shadow-inner">
                    <p className="text-gray-700"><span className="font-bold text-purple-700">Decreased baroreceptor responsiveness</span>.</p>
                  </div>
                )}
              </div>
              
              {/* Question 4 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                <h4 className="font-bold text-gray-800 mb-3">4. What structural change in the aging heart increases the risk for diastolic heart failure and atrial fibrillation?</h4>
                <button 
                  onClick={() => toggleAnswer('quiz1_4')}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-sm hover:shadow-md"
                >
                  {showAnswers['quiz1_4'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['quiz1_4'] && (
                  <div className="mt-3 p-4 bg-red-50 rounded-lg shadow-inner">
                    <p className="text-gray-700"><span className="font-bold text-red-700">Decreased myocardial relaxation and compliance</span> (increased stiffness).</p>
                  </div>
                )}
              </div>
              
              {/* Question 5 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-400">
                <h4 className="font-bold text-gray-800 mb-3">5. According to statistics presented, what fraction of elderly hypertensive patients typically meets their blood pressure target recommendations?</h4>
                <button 
                  onClick={() => toggleAnswer('quiz1_5')}
                  className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition shadow-sm hover:shadow-md"
                >
                  {showAnswers['quiz1_5'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['quiz1_5'] && (
                  <div className="mt-3 p-4 bg-amber-50 rounded-lg shadow-inner">
                    <p className="text-gray-700">Only about <span className="font-bold text-amber-700">one-third</span>.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Study Guide PDF - Pages 1-10</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <p className="mb-4 text-center">
                Displaying pages 1-10 from the study guide PDF.
              </p>
              <div 
                ref={pdfContainerRef} 
                className="pdf-container border border-gray-300 mb-4 w-full max-w-3xl" 
                style={{ height: '70vh', overflowY: 'auto' }}
              >
                <Document
                  file={`${process.env.PUBLIC_URL}/pdfs/680_CV_disorders_part_one_students_2023 (1)_1-10.pdf`}
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
                Ensure the PDF file `680_CV_disorders_part_one_students_2023 (1)_1-10.pdf` is placed in the `public/pdfs` directory.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="w-full bg-gray-100 p-4 text-center">
        <p className="text-gray-600">Based on "Nursing in the Care of Older Adults" (Kennedy-Malone, Groenke-Duffy)</p>
        <p className="text-gray-600">Revised and updated Dr. Delacroix 2023</p>
      </div>
    </div>
  );
};

export default CVDisordersPagePart1;