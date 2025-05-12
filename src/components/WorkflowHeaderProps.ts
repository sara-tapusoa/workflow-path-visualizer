
import { WorkflowView } from './WorkflowHeader';

export interface WorkflowHeaderProps {
  onFocusNode: (nodeId: string | null) => void;
  onOpenEmbedDialog?: () => void;
  onChangeView?: (view: WorkflowView) => void;
  currentView?: WorkflowView;
}
