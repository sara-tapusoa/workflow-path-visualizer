
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "../components/ui/sheet";
import { NodeDetailType } from "../data/nodeDetails";

interface NodeDetailsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  nodeDetail: NodeDetailType | null;
  nodeId: string | null;
}

export const NodeDetailsPanel = ({ isOpen, onClose, nodeDetail, nodeId }: NodeDetailsPanelProps) => {
  if (!nodeDetail) return null;
  
  const nodeName = nodeId ? nodeId.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
    
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">{nodeDetail.title}</SheetTitle>
          <SheetDescription className="text-base text-gray-700 mt-2">
            {nodeDetail.description}
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {nodeDetail.importance && (
            <div>
              <h4 className="text-sm font-semibold text-gray-500">Importance</h4>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-6 h-6 rounded-full mr-1 ${i < nodeDetail.importance! ? 'bg-purple-600' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
          )}
          
          {nodeDetail.owner && (
            <div>
              <h4 className="text-sm font-semibold text-gray-500">Owner</h4>
              <p className="text-gray-700">{nodeDetail.owner}</p>
            </div>
          )}
          
          {nodeDetail.frequency && (
            <div>
              <h4 className="text-sm font-semibold text-gray-500">Frequency</h4>
              <p className="text-gray-700">{nodeDetail.frequency}</p>
            </div>
          )}
          
          {nodeDetail.impact && nodeDetail.impact.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-500">Impact Areas</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {nodeDetail.impact.map((area, index) => (
                  <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {nodeDetail.tasks && nodeDetail.tasks.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-500">Key Activities</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                {nodeDetail.tasks.map((task, index) => (
                  <li key={index} className="text-gray-700">{task}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
