
import { useState } from 'react';

type NodeHoverInfoProps = {
  nodeId: string;
  nodeInfo: { [key: string]: any };
};

export const NodeHoverInfo = ({ nodeId, nodeInfo }: NodeHoverInfoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const nodeDetails = nodeInfo[nodeId] || {
    title: 'Information',
    description: 'No additional information available for this node.',
    tasks: [],
  };
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <button className="ml-2 p-1 bg-blue-100 rounded-full text-blue-600 text-xs w-5 h-5 flex items-center justify-center">
        i
      </button>
      
      {isVisible && (
        <div className="absolute z-50 bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-64 text-left mt-2 right-0">
          <h4 className="text-lg font-semibold mb-2">{nodeDetails.title}</h4>
          <p className="text-sm text-gray-600 mb-2">{nodeDetails.description}</p>
          {nodeDetails.tasks && nodeDetails.tasks.length > 0 && (
            <>
              <h5 className="text-sm font-semibold mt-2 mb-1">Related Tasks:</h5>
              <ul className="list-disc pl-5 text-xs">
                {nodeDetails.tasks.map((task: string, index: number) => (
                  <li key={index} className="text-gray-700">{task}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};
