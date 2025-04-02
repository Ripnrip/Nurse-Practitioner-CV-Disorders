import React, { useState } from 'react';
import HypertensionStudyApp from './components/Artifact';
import CVDisordersPage from './components/CVDisordersPage';
import CVDisordersPagePart1 from './components/CVDisordersPagePart1';
import CVDisordersPagePart2 from './components/CVDisordersPagePart2';
import CVDisordersPagePart3 from './components/CVDisordersPagePart3';
import CVDisordersPagePart4 from './components/CVDisordersPagePart4';
import CVDisordersPagePart5 from './components/CVDisordersPagePart5';
import CVDisordersPagePart6 from './components/CVDisordersPagePart6';
import CVDisordersPagePart7 from './components/CVDisordersPagePart7';

const App = () => {
  const [currentPage, setCurrentPage] = useState('cvdisorders_part1');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold flex-shrink-0 mr-4">Med Guide</div>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button 
              onClick={() => setCurrentPage('cvdisorders_part1')} 
              className={`px-3 py-2 rounded flex-shrink-0 ${currentPage === 'cvdisorders_part1' ? 'bg-lime-600' : 'hover:bg-gray-700'}`}
            >
             CV (1-10)
            </button>
            <button 
              onClick={() => setCurrentPage('hypertension')}
              className={`px-3 py-2 rounded flex-shrink-0 ${currentPage === 'hypertension' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            >
              CV (11-20)
            </button>
            <button 
              onClick={() => setCurrentPage('cvdisorders1')}
              className={`px-3 py-2 rounded flex-shrink-0 ${currentPage === 'cvdisorders1' ? 'bg-orange-600' : 'hover:bg-gray-700'}`}
            >
              CV (21-30)
            </button>
            <button 
              onClick={() => setCurrentPage('cvdisorders2')}
              className={`px-3 py-2 rounded flex-shrink-0 ${currentPage === 'cvdisorders2' ? 'bg-purple-600' : 'hover:bg-gray-700'}`}
            >
              CV (31-40)
            </button>
            <button 
              onClick={() => setCurrentPage('cvdisorders3')}
              className={`px-3 py-2 rounded flex-shrink-0 ${currentPage === 'cvdisorders3' ? 'bg-teal-600' : 'hover:bg-gray-700'}`}
            >
              CV (41-50)
            </button>
            <button 
              onClick={() => setCurrentPage('cvdisorders4')}
              className={`px-3 py-2 rounded flex-shrink-0 ${currentPage === 'cvdisorders4' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            >
              CV (51-60)
            </button>
             <button 
              onClick={() => setCurrentPage('cvdisorders5')}
              className={`px-3 py-2 rounded flex-shrink-0 ${currentPage === 'cvdisorders5' ? 'bg-rose-600' : 'hover:bg-gray-700'}`}
            >
              CV (71-80)
            </button>
            <button 
              onClick={() => setCurrentPage('cvdisorders6')}
              className={`px-3 py-2 rounded flex-shrink-0 ${currentPage === 'cvdisorders6' ? 'bg-cyan-600' : 'hover:bg-gray-700'}`}
            >
              CV (81-End)
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8">
        {currentPage === 'cvdisorders_part1' && <CVDisordersPagePart1 />}
        {currentPage === 'hypertension' && <HypertensionStudyApp />}
        {currentPage === 'cvdisorders1' && <CVDisordersPagePart2 />}
        {currentPage === 'cvdisorders2' && <CVDisordersPagePart3 />}
        {currentPage === 'cvdisorders3' && <CVDisordersPagePart4 />}
        {currentPage === 'cvdisorders4' && <CVDisordersPagePart5 />}
        {currentPage === 'cvdisorders5' && <CVDisordersPagePart6 />}
        {currentPage === 'cvdisorders6' && <CVDisordersPagePart7 />}
      </div>
    </div>
  );
};

export default App; 