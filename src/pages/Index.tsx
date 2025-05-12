
import { useState, useCallback } from 'react';
import WorkflowMap from '../components/WorkflowMap';
import { WorkflowHeader } from '../components/WorkflowHeader';

const Index = () => {
  const [focusedNode, setFocusedNode] = useState<string | null>(null);
  
  const handleFocusNode = useCallback((nodeId: string | null) => {
    setFocusedNode(nodeId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <WorkflowHeader onFocusNode={handleFocusNode} />
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <WorkflowMap />
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          Click and drag to move the canvas. Use mouse wheel to zoom in/out.
        </div>
      </div>
    </div>
  );
};

export default Index;
