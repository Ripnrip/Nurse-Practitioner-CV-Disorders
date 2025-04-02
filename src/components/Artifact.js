import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { 
  ClockIcon,
  HeartIcon,
  BeakerIcon,
  ExclamationCircleIcon,
  PillIcon,
  IdentificationIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  EyeIcon,
  ClipboardDocumentCheckIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  BoltIcon,
  FireIcon,
  GlobeAltIcon,
  AcademicCapIcon
} from '@heroicons/react/24/solid';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const HypertensionStudyApp = () => {
  const [activeTab, setActiveTab] = useState('history');
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
      <div className="w-full bg-blue-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Hypertension in the Elderly</h1>
        <p className="text-xl text-center mt-2">Interactive Study Guide (Part 2)</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('history')} 
          className={`px-4 py-2 font-medium ${activeTab === 'history' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Patient History
        </button>
        <button 
          onClick={() => setActiveTab('physical')} 
          className={`px-4 py-2 font-medium ${activeTab === 'physical' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Physical Exam
        </button>
        <button 
          onClick={() => setActiveTab('diagnosis')} 
          className={`px-4 py-2 font-medium ${activeTab === 'diagnosis' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Diagnosis
        </button>
        <button 
          onClick={() => setActiveTab('guidelines')} 
          className={`px-4 py-2 font-medium ${activeTab === 'guidelines' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Guidelines
        </button>
        <button 
          onClick={() => setActiveTab('diagnostic')} 
          className={`px-4 py-2 font-medium ${activeTab === 'diagnostic' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Diagnostic Tests
        </button>
        <button 
          onClick={() => setActiveTab('treatment')} 
          className={`px-4 py-2 font-medium ${activeTab === 'treatment' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Treatment
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-blue-100 border-b-2 border-blue-600' : ''}`}
        >
          Self Quiz
        </button>
        <button
          onClick={() => setActiveTab('pdf')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'pdf' ? 'bg-blue-100 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-800'}`}
        >
          View PDF Pages (11-20)
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'history' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Important Aspects of the History in Hypertension</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg shadow-md border border-blue-200">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Elements to Assess</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="rounded-full bg-blue-100 p-2 mr-3">
                            <ClockIcon className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="font-medium text-gray-900">Duration of hypertension</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="rounded-full bg-blue-100 p-1 mr-2 mt-0.5">
                              <ArrowTrendingDownIcon className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">Last known normal blood pressure</span>
                          </li>
                          <li className="flex items-start">
                            <div className="rounded-full bg-blue-100 p-1 mr-2 mt-0.5">
                              <ArrowTrendingUpIcon className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">Course of the blood pressure</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="rounded-full bg-purple-100 p-2 mr-3">
                            <PillIcon className="h-5 w-5 text-purple-600" />
                          </div>
                          <span className="font-medium text-gray-900">Prior treatment of hypertension</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="rounded-full bg-purple-100 p-1 mr-2 mt-0.5">
                              <BeakerIcon className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700">Drugs: types, doses, side effects</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="rounded-full bg-red-100 p-2 mr-3">
                            <ExclamationCircleIcon className="h-5 w-5 text-red-600" />
                          </div>
                          <span className="font-medium text-gray-900">Intake of agents that may cause hypertension</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="bg-gradient-to-r from-red-50 to-red-100 p-2 rounded-lg">
                            <div className="flex items-start">
                              <div className="rounded-full bg-red-100 p-1 mr-2 mt-0.5">
                                <BoltIcon className="h-4 w-4 text-red-600" />
                              </div>
                              <span className="text-gray-700">Nonsteroidal antiinflammatory drugs</span>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-2 rounded-lg">
                            <div className="flex items-start">
                              <div className="rounded-full bg-pink-100 p-1 mr-2 mt-0.5">
                                <BoltIcon className="h-4 w-4 text-pink-600" />
                              </div>
                              <span className="text-gray-700">Estrogens</span>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-2 rounded-lg">
                            <div className="flex items-start">
                              <div className="rounded-full bg-orange-100 p-1 mr-2 mt-0.5">
                                <BoltIcon className="h-4 w-4 text-orange-600" />
                              </div>
                              <span className="text-gray-700">Adrenal steroids</span>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-2 rounded-lg">
                            <div className="flex items-start">
                              <div className="rounded-full bg-gray-100 p-1 mr-2 mt-0.5">
                                <BoltIcon className="h-4 w-4 text-gray-600" />
                              </div>
                              <span className="text-gray-700">Cocaine</span>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-2 rounded-lg">
                            <div className="flex items-start">
                              <div className="rounded-full bg-amber-100 p-1 mr-2 mt-0.5">
                                <BoltIcon className="h-4 w-4 text-amber-600" />
                              </div>
                              <span className="text-gray-700">Sympathomimetics</span>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-2 rounded-lg">
                            <div className="flex items-start">
                              <div className="rounded-full bg-blue-100 p-1 mr-2 mt-0.5">
                                <BoltIcon className="h-4 w-4 text-blue-600" />
                              </div>
                              <span className="text-gray-700">Excessive sodium</span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="rounded-full bg-green-100 p-2 mr-3">
                            <UserGroupIcon className="h-5 w-5 text-green-600" />
                          </div>
                          <span className="font-medium text-gray-900">Family history</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="rounded-full bg-green-100 p-1 mr-2 mt-0.5">
                              <HeartIcon className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="text-gray-700">Hypertension</span>
                          </li>
                          <li className="flex items-start">
                            <div className="rounded-full bg-green-100 p-1 mr-2 mt-0.5">
                              <ExclamationCircleIcon className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="text-gray-700">Premature cardiovascular disease or death</span>
                          </li>
                          <li className="flex items-start">
                            <div className="rounded-full bg-green-100 p-1 mr-2 mt-0.5">
                              <ChartBarIcon className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="text-gray-700">Familial diseases: pheochromocytoma, renal disease, diabetes, gout</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Symptoms of secondary causes</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Muscle weakness</li>
                          <li>Spells of tachycardia, sweating, tremor</li>
                          <li>Thinning of the skin</li>
                          <li>Flank pain</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Symptoms of target-organ damage</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Headaches</li>
                          <li>Transient weakness or blindness</li>
                          <li>Loss of visual acuity</li>
                          <li>Chest pain</li>
                          <li>Dyspnea</li>
                          <li>Claudication</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Presence of other risk factors</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Smoking</li>
                          <li>Diabetes</li>
                          <li>Dyslipidemia</li>
                          <li>Physical inactivity</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Dietary history</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Sodium</li>
                          <li>Processed foods</li>
                          <li>Alcohol</li>
                          <li>Saturated fats</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Psychosocial factors</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Family structure</li>
                          <li>Work status</li>
                          <li>Educational level</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Sexual function</td>
                      <td className="px-6 py-4">
                        <p>Assessment of sexual function</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Features of sleep apnea</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Early morning headaches</li>
                          <li>Daytime somnolence</li>
                          <li>Loud snoring</li>
                          <li>Erratic sleep</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-5 rounded-lg shadow-md border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-800 border-b pb-2 border-yellow-200 flex items-center">
                <div className="rounded-full bg-yellow-100 p-2 mr-3">
                  <AcademicCapIcon className="h-5 w-5 text-yellow-600" />
                </div>
                Practice Question
              </h3>
              <p className="mb-4">Which of these historical features would suggest a possible secondary cause of hypertension?</p>
              <button 
                onClick={() => toggleAnswer('secondary-cause')}
                className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded hover:shadow-md transition duration-300 shadow-sm"
              >
                {showAnswers['secondary-cause'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['secondary-cause'] && (
                <div className="mt-4 p-4 bg-gradient-to-r from-white to-yellow-50 rounded-lg shadow-inner">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="rounded-full bg-yellow-100 p-1 mr-2 mt-0.5">
                        <ExclamationCircleIcon className="h-4 w-4 text-yellow-600" />
                      </div>
                      <span className="text-gray-700">Spells of tachycardia, sweating, and tremor (suggestive of pheochromocytoma)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-yellow-100 p-1 mr-2 mt-0.5">
                        <ExclamationCircleIcon className="h-4 w-4 text-yellow-600" />
                      </div>
                      <span className="text-gray-700">Muscle weakness (could suggest hyperaldosteronism)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-yellow-100 p-1 mr-2 mt-0.5">
                        <ExclamationCircleIcon className="h-4 w-4 text-yellow-600" />
                      </div>
                      <span className="text-gray-700">Thinning of the skin (could suggest Cushing's syndrome)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-yellow-100 p-1 mr-2 mt-0.5">
                        <ExclamationCircleIcon className="h-4 w-4 text-yellow-600" />
                      </div>
                      <span className="text-gray-700">Flank pain (could suggest renal artery stenosis or other kidney disorders)</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'physical' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Physical Examination in Hypertensive Patients</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg shadow-md border border-blue-200">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Area</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Elements to Assess</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="rounded-full bg-red-100 p-2 mr-3">
                            <HeartIcon className="h-5 w-5 text-red-600" />
                          </div>
                          <span className="font-medium text-gray-900">Blood Pressure</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="rounded-full bg-red-100 p-1.5 mr-2">
                            <ChartBarIcon className="h-4 w-4 text-red-600" />
                          </div>
                          <span className="text-gray-700">Accurate measurement of blood pressure</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="rounded-full bg-purple-100 p-2 mr-3">
                            <IdentificationIcon className="h-5 w-5 text-purple-600" />
                          </div>
                          <span className="font-medium text-gray-900">General appearance</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="rounded-full bg-purple-100 p-1 mr-2 mt-0.5">
                              <ArrowTrendingUpIcon className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700">Distribution of body fat</span>
                          </li>
                          <li className="flex items-start">
                            <div className="rounded-full bg-purple-100 p-1 mr-2 mt-0.5">
                              <ShieldCheckIcon className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700">Skin lesions</span>
                          </li>
                          <li className="flex items-start">
                            <div className="rounded-full bg-purple-100 p-1 mr-2 mt-0.5">
                              <BoltIcon className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700">Muscle strength</span>
                          </li>
                          <li className="flex items-start">
                            <div className="rounded-full bg-purple-100 p-1 mr-2 mt-0.5">
                              <ClipboardDocumentCheckIcon className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700">Alertness</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="rounded-full bg-green-100 p-2 mr-3">
                            <EyeIcon className="h-5 w-5 text-green-600" />
                          </div>
                          <span className="font-medium text-gray-900">Fundoscopy</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="bg-gradient-to-r from-red-50 to-red-100 p-2 rounded-lg">
                            <div className="flex items-start">
                              <div className="rounded-full bg-red-100 p-1 mr-2 mt-0.5">
                                <ExclamationCircleIcon className="h-4 w-4 text-red-600" />
                              </div>
                              <span className="text-gray-700">Hemorrhage</span>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-2 rounded-lg">
                            <div className="flex items-start">
                              <div className="rounded-full bg-yellow-100 p-1 mr-2 mt-0.5">
                                <ExclamationCircleIcon className="h-4 w-4 text-yellow-600" />
                              </div>
                              <span className="text-gray-700">Papilledema</span>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-2 rounded-lg">
                            <div className="flex items-start">
                              <div className="rounded-full bg-blue-100 p-1 mr-2 mt-0.5">
                                <ExclamationCircleIcon className="h-4 w-4 text-blue-600" />
                              </div>
                              <span className="text-gray-700">Cotton wool spots</span>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-2 rounded-lg">
                            <div className="flex items-start">
                              <div className="rounded-full bg-purple-100 p-1 mr-2 mt-0.5">
                                <ExclamationCircleIcon className="h-4 w-4 text-purple-600" />
                              </div>
                              <span className="text-gray-700">Arteriolar narrowing and arteriovenous nicking</span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="rounded-full bg-purple-100 p-2 mr-3">
                            <IdentificationIcon className="h-5 w-5 text-purple-600" />
                          </div>
                          <span className="font-medium text-gray-900">Neck</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Palpation and auscultation of carotids</li>
                          <li>Thyroid</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Heart</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Size</li>
                          <li>Rhythm</li>
                          <li>Sounds</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Lungs</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Rhonchi</li>
                          <li>Rales</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Abdomen</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Renal masses</li>
                          <li>Bruits over aorta or renal arteries</li>
                          <li>Femoral pulses</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Extremities</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Peripheral pulses</li>
                          <li>Edema</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Neurologic assessment</td>
                      <td className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>Visual disturbance</li>
                          <li>Focal weakness</li>
                          <li>Confusion</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-5 rounded-lg shadow-md border border-blue-200 mt-6">
              <h3 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2 border-blue-200 flex items-center">
                <div className="rounded-full bg-blue-100 p-2 mr-3">
                  <EyeIcon className="h-5 w-5 text-blue-600" />
                </div>
                Focus On: Fundoscopic Examination
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="mb-3">Fundoscopic examination is crucial in hypertensive patients as it allows direct visualization of the effects of hypertension on blood vessels.</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-3">
                  <p className="font-medium text-blue-800 mb-2">The Keith-Wagener-Barker classification of hypertensive retinopathy:</p>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-400">
                      <div className="flex items-center">
                        <div className="rounded-full bg-green-100 p-1.5 mr-2">
                          <span className="text-green-800 font-bold text-sm">I</span>
                        </div>
                        <p><span className="font-bold">Grade I:</span> Mild narrowing or sclerosis of arterioles</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-yellow-400">
                      <div className="flex items-center">
                        <div className="rounded-full bg-yellow-100 p-1.5 mr-2">
                          <span className="text-yellow-800 font-bold text-sm">II</span>
                        </div>
                        <p><span className="font-bold">Grade II:</span> Moderate to marked sclerosis of arterioles with arteriovenous nicking</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                      <div className="flex items-center">
                        <div className="rounded-full bg-orange-100 p-1.5 mr-2">
                          <span className="text-orange-800 font-bold text-sm">III</span>
                        </div>
                        <p><span className="font-bold">Grade III:</span> Grade II plus flame hemorrhages, cotton-wool spots, and hard exudates</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-red-400">
                      <div className="flex items-center">
                        <div className="rounded-full bg-red-100 p-1.5 mr-2">
                          <span className="text-red-800 font-bold text-sm">IV</span>
                        </div>
                        <p><span className="font-bold">Grade IV:</span> Grade III plus papilledema</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded-lg flex items-start">
                  <div className="rounded-full bg-yellow-400 p-1 flex-shrink-0 mr-2 mt-0.5">
                    <span className="text-yellow-900 text-xs font-bold">!</span>
                  </div>
                  <p className="text-sm">Grades III and IV are associated with increased cardiovascular risk and end-organ damage.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'diagnosis' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Diagnosis of Hypertension</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Diagnostic Criteria</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>All adults 18 years and older without known HTN should be screened for elevated BP (USPSTF et al., 2021).</li>
                <li>To diagnose HTN, the provider should use an average of two or more readings obtained on two or more occasions.</li>
                <li>Out of office BP measurements (ambulatory or home BP monitoring) are recommended to confirm the diagnosis of HTN before starting treatment.</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h4 className="font-bold text-blue-800 mb-2">Key Point:</h4>
                <p>Proper technique and multiple measurements are essential for accurate diagnosis of hypertension, as a single elevated reading may not reflect true hypertension.</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Hypertension Guidelines: JNC8 vs. ACC/AHA</h3>
              <p className="mb-3">There has been confusion due to different guidelines. As of 2023, primary care is slowly abandoning JNC8 guidelines and adopting the ACC/AHA 2017 guidelines.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">JNC8 Diagnostic Criteria</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Age &lt;60 years: SBP ≥140 mm Hg and/or DBP ≥90 mm Hg</li>
                    <li>Age 60 years or older: SBP ≥150 mm Hg and/or DBP ≥90 mm Hg</li>
                    <li>Age 60 years or older with CKD or diabetes: SBP ≥140 mm Hg and/or DBP ≥90 mm Hg</li>
                    <li>Pre-hypertension: SBP ≥120 mm Hg and/or DBP ≥80 mm Hg</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">ACC/AHA 2017 Guidelines</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Normal: SBP &lt;120 mm Hg and DBP &lt;80 mm Hg</li>
                    <li>Elevated: SBP 120-129 mm Hg and DBP &lt;80 mm Hg</li>
                    <li>Stage 1 HTN: SBP 130-139 mm Hg or DBP 80-89 mm Hg</li>
                    <li>Stage 2 HTN: SBP ≥140 mm Hg or DBP ≥90 mm Hg</li>
                    <li>Hypertensive Crisis: SBP &gt;180 mm Hg and/or DBP &gt;120 mm Hg</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-green-800">Practice Question</h3>
              <p className="mb-4">According to the ACC/AHA 2017 guidelines, a 72-year-old patient with a blood pressure of 138/88 mm Hg would be classified as having:</p>
              <button 
                onClick={() => toggleAnswer('bp-classification')}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                {showAnswers['bp-classification'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['bp-classification'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Stage 1 Hypertension</strong></p>
                  <p>According to ACC/AHA 2017 guidelines, Stage 1 HTN is defined as SBP 130-139 mm Hg or DBP 80-89 mm Hg. This patient's BP of 138/88 mm Hg falls within this range.</p>
                  <p>Note that under the JNC8 guidelines, this same reading would be considered normal for a patient over 60 years unless they had CKD or diabetes.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'guidelines' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Hypertension Guidelines</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">ACC/AHA Blood Pressure Categories (2017)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="border border-gray-300 p-2">BP Category</th>
                      <th className="border border-gray-300 p-2">Systolic (mm Hg)</th>
                      <th className="border border-gray-300 p-2">Relationship</th>
                      <th className="border border-gray-300 p-2">Diastolic (mm Hg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-100">
                      <td className="border border-gray-300 p-2 font-medium">Normal</td>
                      <td className="border border-gray-300 p-2">Less than 120</td>
                      <td className="border border-gray-300 p-2 text-center">and</td>
                      <td className="border border-gray-300 p-2">Less than 80</td>
                    </tr>
                    <tr className="bg-yellow-100">
                      <td className="border border-gray-300 p-2 font-medium">Elevated</td>
                      <td className="border border-gray-300 p-2">120-129</td>
                      <td className="border border-gray-300 p-2 text-center">and</td>
                      <td className="border border-gray-300 p-2">Less than 80</td>
                    </tr>
                    <tr className="bg-orange-100">
                      <td className="border border-gray-300 p-2 font-medium">Hypertension Stage 1</td>
                      <td className="border border-gray-300 p-2">130-139</td>
                      <td className="border border-gray-300 p-2 text-center">or</td>
                      <td className="border border-gray-300 p-2">80-89</td>
                    </tr>
                    <tr className="bg-red-100">
                      <td className="border border-gray-300 p-2 font-medium">Hypertension Stage 2</td>
                      <td className="border border-gray-300 p-2">140 or higher</td>
                      <td className="border border-gray-300 p-2 text-center">or</td>
                      <td className="border border-gray-300 p-2">90 or higher</td>
                    </tr>
                    <tr className="bg-red-300">
                      <td className="border border-gray-300 p-2 font-medium">Hypertensive Crisis</td>
                      <td className="border border-gray-300 p-2">Higher than 180</td>
                      <td className="border border-gray-300 p-2 text-center">and/or</td>
                      <td className="border border-gray-300 p-2">Higher than 120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-3 text-blue-800">American Academy of Nurse Practitioners Guidance</h3>
              <p className="mb-3">The American Academy of Nurse Practitioners has acknowledged both guidelines, noting:</p>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                "September 2018 - The American College of Cardiology (ACC) / American Heart Association (AHA) hypertension guideline published in November 2017 introduced new blood-pressure categories lowering the threshold for the diagnosis of hypertension. The 2018 certification examinations use the 2017 ACC/AHA and JNC-8 guidelines to reference test items. While treatment targets may differ among various guidelines, it is important to keep evaluation of the individual's health as the central concern."
              </blockquote>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Key Differences Between Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">JNC8 Focus</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Different thresholds based on age and comorbidities</li>
                    <li>Higher threshold (150/90) for adults ≥60 years without comorbidities</li>
                    <li>Focus on evidence from randomized controlled trials</li>
                    <li>More conservative approach with fewer patients classified as hypertensive</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-bold text-blue-600">ACC/AHA 2017 Focus</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Lower threshold for defining hypertension (130/80)</li>
                    <li>Introduction of "Elevated" category for early intervention</li>
                    <li>More aggressive approach to earlier diagnosis and treatment</li>
                    <li>Greater emphasis on cardiovascular risk to guide treatment decisions</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm">Note: As of 2023, primary care is slowly abandoning JNC8 guidelines and adopting the ACC/AHA 2017 guidelines.</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-green-800">Practice Question</h3>
              <p className="mb-4">Which of the following patients would be classified differently under JNC8 versus ACC/AHA 2017 guidelines?</p>
              <button 
                onClick={() => toggleAnswer('guideline-difference')}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                {showAnswers['guideline-difference'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['guideline-difference'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>A 65-year-old with BP 145/85 without diabetes or CKD</strong></p>
                  <p>Under JNC8: Not hypertensive (threshold for age ≥60 without comorbidities is 150/90)</p>
                  <p>Under ACC/AHA 2017: Stage 2 Hypertension (SBP ≥140 or DBP ≥90)</p>
                  <p>This illustrates the significant difference in classification that can occur, particularly in older adults without comorbidities.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'diagnostic' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Diagnostic Tests</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Urinary Albumin-Creatinine Ratio (UACR)</h3>
              <p className="mb-3">The UACR is a simple, non-invasive test that can help detect early kidney damage in patients with hypertension.</p>
              <p className="mb-3">Normal values are typically less than 30 mg/mmol for urine albumin and less than 10 mg/mmol for urine creatinine.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h4 className="font-bold text-blue-800 mb-2">Other Tests</h4>
              <p>Other tests that may be used in the diagnosis of hypertension include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Electrocardiogram (ECG)</li>
                <li>Echocardiogram</li>
                <li>24-hour ambulatory blood pressure monitoring</li>
                <li>Carotid ultrasonography</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'treatment' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Treatment Options for Hypertension</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Lifestyle Modifications</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Dietary Approaches to Stop Hypertension (DASH) diet</li>
                <li>Reduction of sodium intake</li>
                <li>Regular physical activity</li>
                <li>Weight loss for overweight individuals</li>
                <li>Moderation of alcohol intake</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h4 className="font-bold text-blue-800 mb-2">Pharmacological Treatment</h4>
              <p>Pharmacological treatment should be considered for patients with Stage 1 hypertension who have a history of cardiovascular disease or are at high risk for cardiovascular events.</p>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Self Quiz - Hypertension Part 2</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2 border-blue-200 flex items-center">
                <div className="rounded-full bg-blue-100 p-2 mr-3">
                  <AcademicCapIcon className="h-5 w-5 text-blue-600" />
                </div>
                Test Your Knowledge
              </h3>
              
              {/* Question 1 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <div className="rounded-full bg-green-100 p-1.5 mr-2">
                    <span className="text-green-800 font-bold">1</span>
                  </div>
                  What are the four grades of hypertensive retinopathy (Keith-Wagener-Barker classification), and which grades indicate higher cardiovascular risk?
                </h4>
                <button 
                  onClick={() => toggleAnswer('htn_quiz1')}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded hover:shadow-md transition duration-300 shadow-sm"
                >
                  {showAnswers['htn_quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['htn_quiz1'] && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-inner">
                    <p className="font-medium text-green-800 mb-2">Grades:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="rounded-full bg-green-100 p-1 mr-2 mt-0.5">
                          <span className="text-green-800 font-bold text-xs">I</span>
                        </div>
                        <span className="text-gray-700">Grade I: Mild arteriolar narrowing/sclerosis</span>
                      </li>
                      <li className="flex items-start">
                        <div className="rounded-full bg-yellow-100 p-1 mr-2 mt-0.5">
                          <span className="text-yellow-800 font-bold text-xs">II</span>
                        </div>
                        <span className="text-gray-700">Grade II: Moderate/marked sclerosis + AV nicking</span>
                      </li>
                      <li className="flex items-start">
                        <div className="rounded-full bg-orange-100 p-1 mr-2 mt-0.5">
                          <span className="text-orange-800 font-bold text-xs">III</span>
                        </div>
                        <span className="text-gray-700">Grade III: Grade II + hemorrhages, cotton-wool spots, exudates</span>
                      </li>
                      <li className="flex items-start">
                        <div className="rounded-full bg-red-100 p-1 mr-2 mt-0.5">
                          <span className="text-red-800 font-bold text-xs">IV</span>
                        </div>
                        <span className="text-gray-700">Grade IV: Grade III + papilledema</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="flex items-start">
                        <div className="rounded-full bg-yellow-400 p-1 mr-2 mt-0.5">
                          <span className="text-yellow-900 text-xs font-bold">!</span>
                        </div>
                        <span className="text-gray-700"><span className="font-bold">Higher Risk:</span> Grades III and IV are associated with increased cardiovascular risk and end-organ damage.</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Question 2 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <div className="rounded-full bg-blue-100 p-1.5 mr-2">
                    <span className="text-blue-800 font-bold">2</span>
                  </div>
                  According to the 2017 ACC/AHA guidelines, how is Stage 1 Hypertension defined (Systolic and Diastolic values)?
                </h4>
                <button 
                  onClick={() => toggleAnswer('htn_quiz2')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded hover:shadow-md transition duration-300 shadow-sm"
                >
                  {showAnswers['htn_quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['htn_quiz2'] && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-inner">
                    <div className="flex items-center">
                      <div className="rounded-full bg-blue-500 p-1.5 mr-2">
                        <HeartIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700">Stage 1 Hypertension is defined as a <span className="font-bold text-blue-700">Systolic Blood Pressure (SBP) of 130-139 mm Hg</span> OR a <span className="font-bold text-blue-700">Diastolic Blood Pressure (DBP) of 80-89 mm Hg</span>.</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Question 3 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <div className="rounded-full bg-purple-100 p-1.5 mr-2">
                    <span className="text-purple-800 font-bold">3</span>
                  </div>
                  Why is obtaining out-of-office blood pressure measurements (like home or ambulatory monitoring) recommended before starting hypertension treatment?
                </h4>
                <button 
                  onClick={() => toggleAnswer('htn_quiz3')}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded hover:shadow-md transition duration-300 shadow-sm"
                >
                  {showAnswers['htn_quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['htn_quiz3'] && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-inner">
                    <div className="flex items-start">
                      <div className="rounded-full bg-purple-500 p-1.5 mr-2 mt-0.5">
                        <ClipboardDocumentCheckIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700">Out-of-office measurements help confirm the diagnosis of hypertension and rule out "white coat hypertension" (elevated BP only in the clinical setting). They provide a more accurate picture of the patient's usual blood pressure before committing to long-term medication.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-400">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <div className="rounded-full bg-amber-100 p-1.5 mr-2">
                    <span className="text-amber-800 font-bold">4</span>
                  </div>
                  Name three key lifestyle modifications recommended for managing hypertension.
                </h4>
                <button 
                  onClick={() => toggleAnswer('htn_quiz4')}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded hover:shadow-md transition duration-300 shadow-sm"
                >
                  {showAnswers['htn_quiz4'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['htn_quiz4'] && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg shadow-inner">
                    <p className="font-medium text-amber-800 mb-2">Any three of the following:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="flex items-start">
                          <div className="rounded-full bg-amber-100 p-1.5 mr-2 mt-0.5">
                            <ArrowTrendingDownIcon className="h-4 w-4 text-amber-600" />
                          </div>
                          <span className="text-gray-700">Weight loss (if overweight/obese)</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="flex items-start">
                          <div className="rounded-full bg-green-100 p-1.5 mr-2 mt-0.5">
                            <GlobeAltIcon className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">Heart-healthy diet (e.g., DASH diet)</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="flex items-start">
                          <div className="rounded-full bg-blue-100 p-1.5 mr-2 mt-0.5">
                            <ArrowTrendingDownIcon className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-gray-700">Dietary sodium reduction</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="flex items-start">
                          <div className="rounded-full bg-purple-100 p-1.5 mr-2 mt-0.5">
                            <BoltIcon className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-gray-700">Regular aerobic physical activity</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="flex items-start">
                          <div className="rounded-full bg-red-100 p-1.5 mr-2 mt-0.5">
                            <BeakerIcon className="h-4 w-4 text-red-600" />
                          </div>
                          <span className="text-gray-700">Moderation of alcohol consumption</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 5 */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <div className="rounded-full bg-red-100 p-1.5 mr-2">
                    <span className="text-red-800 font-bold">5</span>
                  </div>
                  A patient reports spells of tachycardia, sweating, and tremor during the history taking. What potential secondary cause of hypertension might this suggest?
                </h4>
                <button 
                  onClick={() => toggleAnswer('htn_quiz5')}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded hover:shadow-md transition duration-300 shadow-sm"
                >
                  {showAnswers['htn_quiz5'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['htn_quiz5'] && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg shadow-inner">
                    <div className="flex items-center">
                      <div className="rounded-full bg-red-500 p-1.5 mr-2">
                        <ExclamationCircleIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700">These symptoms (paroxysms of tachycardia, sweating, tremor) are classic signs suggestive of <span className="font-bold text-red-700">Pheochromocytoma</span>, a catecholamine-secreting tumor.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'pdf' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Study Guide PDF - Pages 11-20</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <p className="mb-4 text-center">
                Displaying pages 11-20 from the study guide PDF.
              </p>
              <div 
                ref={pdfContainerRef} 
                className="pdf-container border border-gray-300 mb-4 w-full max-w-3xl" 
                style={{ height: '70vh', overflowY: 'auto' }}
              >
                <Document
                  file={`${process.env.PUBLIC_URL}/pdfs/680_CV_disorders_part_one_students_2023 (1)_11-20.pdf`}
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
                Ensure the PDF file `680_CV_disorders_part_one_students_2023 (1)_11-20.pdf` is placed in the `public/pdfs` directory.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HypertensionStudyApp;