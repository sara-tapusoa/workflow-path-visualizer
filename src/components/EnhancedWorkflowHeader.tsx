
import { WorkflowHeader } from './WorkflowHeader';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from 'lucide-react';
import { WorkflowHeaderProps } from './WorkflowHeaderProps';

interface EnhancedWorkflowHeaderProps extends WorkflowHeaderProps {
  onOpenEmbedDialog: () => void;
}

export function EnhancedWorkflowHeader({ onFocusNode, onOpenEmbedDialog }: EnhancedWorkflowHeaderProps) {
  return (
    <div className="flex flex-wrap justify-between items-center mb-4">
      <WorkflowHeader onFocusNode={onFocusNode} />
      <Button 
        variant="outline" 
        className="ml-auto mb-2 flex items-center gap-2"
        onClick={onOpenEmbedDialog}
      >
        <ExternalLinkIcon className="h-4 w-4" />
        <span>Embed</span>
      </Button>
    </div>
  );
}
