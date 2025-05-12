
import { useState, useCallback } from 'react';
import WorkflowMap from '../components/WorkflowMap';
import { EnhancedWorkflowHeader } from '../components/EnhancedWorkflowHeader';
import { EmbedDialog } from '../components/EmbedDialog';
import { WorkflowView } from '../components/WorkflowHeader';

const Index = () => {
  const [focusedNode, setFocusedNode] = useState<string | null>(null);
  const [embedDialogOpen, setEmbedDialogOpen] = useState(false);
  const [currentView, setCurrentView] = useState<WorkflowView>('overview');
  
  const handleFocusNode = useCallback((nodeId: string | null) => {
    setFocusedNode(nodeId);
  }, []);

  const handleEmbedDialog = useCallback((isOpen: boolean) => {
    setEmbedDialogOpen(isOpen);
  }, []);

  const handleChangeView = useCallback((view: WorkflowView) => {
    setCurrentView(view);
    setFocusedNode(null); // Reset focused node when changing views
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <EnhancedWorkflowHeader 
          onFocusNode={handleFocusNode} 
          onOpenEmbedDialog={() => handleEmbedDialog(true)} 
          onChangeView={handleChangeView}
          currentView={currentView}
        />
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <WorkflowMap 
            focusedNode={focusedNode} 
            currentView={currentView}
          />
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          Click and drag to move the canvas. Use mouse wheel to zoom in/out.
        </div>
        <EmbedDialog open={embedDialogOpen} onOpenChange={handleEmbedDialog} />
      </div>
    </div>
  );
};

export default Index;
