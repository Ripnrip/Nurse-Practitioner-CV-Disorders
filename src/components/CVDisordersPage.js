import React, { useState } from 'react';

const CVDisordersPage = () => {
  const [activeTab, setActiveTab] = useState('ecg');
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full bg-red-600 p-6 text-white">
        <h1 className="text-3xl font-bold text-center">Cardiovascular Disorders</h1>
        <p className="text-xl text-center mt-2">Part One: Pages 21-30</p>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button 
          onClick={() => setActiveTab('ecg')} 
          className={`px-4 py-2 font-medium ${activeTab === 'ecg' ? 'bg-red-100 border-b-2 border-red-600' : ''}`}
        >
          ECG Basics
        </button>
        <button 
          onClick={() => setActiveTab('arrhythmias')} 
          className={`px-4 py-2 font-medium ${activeTab === 'arrhythmias' ? 'bg-red-100 border-b-2 border-red-600' : ''}`}
        >
          Arrhythmias
        </button>
        <button 
          onClick={() => setActiveTab('conduction')} 
          className={`px-4 py-2 font-medium ${activeTab === 'conduction' ? 'bg-red-100 border-b-2 border-red-600' : ''}`}
        >
          Conduction Disorders
        </button>
        <button 
          onClick={() => setActiveTab('quiz')} 
          className={`px-4 py-2 font-medium ${activeTab === 'quiz' ? 'bg-red-100 border-b-2 border-red-600' : ''}`}
        >
          Self Quiz
        </button>
      </div>

      <div className="p-6 w-full">
        {activeTab === 'ecg' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4">ECG Basics</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">The 12-Lead ECG</h3>
              <p className="mb-4">The standard 12-lead ECG consists of:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Limb leads:</strong> I, II, III, aVR, aVL, aVF</li>
                <li><strong>Precordial leads:</strong> V1, V2, V3, V4, V5, V6</li>
              </ul>
              
              <div className="mt-4">
                <h4 className="font-bold text-lg mb-2">Lead Placement</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>V1:</strong> 4th intercostal space, right sternal border</li>
                  <li><strong>V2:</strong> 4th intercostal space, left sternal border</li>
                  <li><strong>V3:</strong> Midway between V2 and V4</li>
                  <li><strong>V4:</strong> 5th intercostal space, midclavicular line</li>
                  <li><strong>V5:</strong> Same level as V4, anterior axillary line</li>
                  <li><strong>V6:</strong> Same level as V4, mid-axillary line</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold mb-3 text-red-800">ECG Waves and Intervals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-lg mb-2">Major Components</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>P wave:</strong> Atrial depolarization</li>
                    <li><strong>PR interval:</strong> Time from beginning of P wave to beginning of QRS complex</li>
                    <li><strong>QRS complex:</strong> Ventricular depolarization</li>
                    <li><strong>ST segment:</strong> Period between ventricular depolarization and repolarization</li>
                    <li><strong>T wave:</strong> Ventricular repolarization</li>
                    <li><strong>QT interval:</strong> Duration of ventricular depolarization and repolarization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Normal Values</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>PR interval:</strong> 0.12-0.20 seconds</li>
                    <li><strong>QRS duration:</strong> 0.06-0.10 seconds</li>
                    <li><strong>QT interval:</strong> 0.36-0.44 seconds (varies with heart rate)</li>
                    <li><strong>Heart rate:</strong> 60-100 beats per minute</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">Which of the following is the correct definition of the PR interval?</p>
              <button 
                onClick={() => toggleAnswer('pr-interval')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['pr-interval'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['pr-interval'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> The PR interval is the time from the beginning of the P wave to the beginning of the QRS complex. It represents the time it takes for the electrical impulse to travel from the SA node through the atria and AV node to the ventricles.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'arrhythmias' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Common Arrhythmias</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Supraventricular Arrhythmias</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2">Sinus Tachycardia</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Regular rhythm with heart rate {'>'}100 bpm</li>
                    <li>Normal P waves preceding each QRS complex</li>
                    <li>Common causes: fever, anxiety, pain, hyperthyroidism, anemia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Atrial Fibrillation</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Irregular ventricular rhythm</li>
                    <li>Absence of P waves, replaced by fibrillatory waves</li>
                    <li>Irregularly irregular QRS complexes</li>
                    <li>Risk factors: hypertension, heart failure, valvular disease, age</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Atrial Flutter</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Saw-tooth pattern of atrial activity (flutter waves)</li>
                    <li>Atrial rate typically 250-350 bpm</li>
                    <li>Often with regular ventricular response (2:1, 4:1 block)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
              <h3 className="text-xl font-bold mb-3">Ventricular Arrhythmias</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2">Premature Ventricular Contractions (PVCs)</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Early, wide QRS complexes</li>
                    <li>No preceding P wave</li>
                    <li>Often followed by a compensatory pause</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Ventricular Tachycardia</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>≥3 consecutive PVCs at rate {'>'}100 bpm</li>
                    <li>Wide QRS complexes ({'>'}0.12 sec)</li>
                    <li>AV dissociation may be present</li>
                    <li>May cause hemodynamic instability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Ventricular Fibrillation</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Chaotic, irregular ventricular activity</li>
                    <li>No discernible P waves or QRS complexes</li>
                    <li>Medical emergency requiring immediate defibrillation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">What ECG characteristics would help differentiate ventricular tachycardia from supraventricular tachycardia with aberrant conduction?</p>
              <button 
                onClick={() => toggleAnswer('vt-vs-svt')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['vt-vs-svt'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['vt-vs-svt'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Key differentiating features of VT:</strong></p>
                  <ul className="list-disc pl-5">
                    <li>AV dissociation (P waves unrelated to QRS complexes)</li>
                    <li>Fusion beats or capture beats</li>
                    <li>Extreme axis deviation</li>
                    <li>Concordance in precordial leads (all R waves or all S waves)</li>
                    <li>QRS width {'>'}0.14 seconds</li>
                    <li>Presence of cardiovascular disease (history of MI, heart failure)</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'conduction' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Conduction Disorders</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Atrioventricular (AV) Blocks</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2">First-Degree AV Block</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Prolonged PR interval ({'>'}0.20 seconds)</li>
                    <li>All P waves are conducted to the ventricles</li>
                    <li>Usually benign, often requires no treatment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Second-Degree AV Block (Mobitz Type I/Wenckebach)</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Progressive prolongation of PR interval</li>
                    <li>Eventually results in a non-conducted P wave (dropped QRS)</li>
                    <li>Cycle repeats with normal PR interval after dropped beat</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Second-Degree AV Block (Mobitz Type II)</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Constant PR interval followed by sudden non-conducted P waves</li>
                    <li>Often associated with bundle branch blocks</li>
                    <li>May progress to complete heart block</li>
                    <li>Often requires pacemaker implantation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Third-Degree (Complete) AV Block</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Complete dissociation between atrial and ventricular activity</li>
                    <li>P waves regular but unrelated to QRS complexes</li>
                    <li>Escape rhythm from a lower pacemaker (junctional or ventricular)</li>
                    <li>Usually requires permanent pacemaker</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
              <h3 className="text-xl font-bold mb-3">Bundle Branch Blocks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-lg mb-2">Right Bundle Branch Block (RBBB)</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>QRS duration ≥0.12 seconds</li>
                    <li>RSR' pattern in V1-V2 ("rabbit ears")</li>
                    <li>Wide, slurred S waves in leads I, V5, V6</li>
                    <li>Can be normal variant or due to pulmonary disease, congenital heart disease</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Left Bundle Branch Block (LBBB)</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>QRS duration ≥0.12 seconds</li>
                    <li>Broad, notched R wave in leads I, aVL, V5, V6</li>
                    <li>Absent Q waves in leads I, V5, V6</li>
                    <li>Often indicates structural heart disease</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">Practice Question</h3>
              <p className="mb-4">A patient's ECG shows normal P waves followed by QRS complexes, but some P waves are not followed by a QRS complex. The PR intervals stay constant for the conducted beats. What type of AV block is this most likely to be?</p>
              <button 
                onClick={() => toggleAnswer('av-block')}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                {showAnswers['av-block'] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers['av-block'] && (
                <div className="mt-4 p-3 bg-white rounded">
                  <p><strong>Answer:</strong> Second-degree AV block, Mobitz Type II.</p>
                  <p>The constant PR interval followed by sudden non-conducted P waves is characteristic of Mobitz Type II second-degree AV block. This is in contrast to Mobitz Type I (Wenckebach), which has progressive PR interval prolongation before the dropped beat.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Self Quiz - ECG & Arrhythmias</h2>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">1. Placeholder Question about ECG basics?</h4>
                <button 
                  onClick={() => toggleAnswer('ecg-quiz1')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['ecg-quiz1'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['ecg-quiz1'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer related to ECG waves or intervals.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">2. Placeholder Question about differentiating arrhythmias?</h4>
                <button 
                  onClick={() => toggleAnswer('ecg-quiz2')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['ecg-quiz2'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['ecg-quiz2'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer related to identifying Afib, VT, etc.</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">3. Placeholder Question about conduction blocks?</h4>
                <button 
                  onClick={() => toggleAnswer('ecg-quiz3')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {showAnswers['ecg-quiz3'] ? 'Hide Answer' : 'Show Answer'}
                </button>
                {showAnswers['ecg-quiz3'] && (
                  <div className="mt-2 p-3 bg-gray-50 rounded">
                    <p>Placeholder answer related to AV blocks or bundle branch blocks.</p>
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

export default CVDisordersPage;
