
import { useState, useCallback, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Panel,
  ConnectionLineType,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialNodes, initialEdges } from '../data/workflowData';
import { companyNodes, companyEdges } from '../data/companyLevelData';
import { productNodes, productEdges } from '../data/productLevelData';
import { dashboardNodes, dashboardEdges } from '../data/dashboardData';
import { nodeDetails } from '../data/nodeDetails';
import { NodeDetailsPanel } from './NodeDetailsPanel';
import { WorkflowView } from './WorkflowHeader';

interface WorkflowMapProps {
  focusedNode?: string | null;
  currentView?: WorkflowView;
}

const WorkflowMap = ({ focusedNode, currentView = 'overview' }: WorkflowMapProps) => {
  // Initialize nodes and edges based on the current view
  const getInitialData = useCallback(() => {
    switch (currentView) {
      case 'company':
        return { nodes: companyNodes, edges: companyEdges };
      case 'product':
        return { nodes: productNodes, edges: productEdges };
      case 'dashboard':
        return { nodes: dashboardNodes, edges: dashboardEdges };
      case 'overview':
      default:
        return { nodes: initialNodes, edges: initialEdges };
    }
  }, [currentView]);

  const initialData = getInitialData();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialData.edges);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isDetailPanelOpen, setIsDetailPanelOpen] = useState(false);
  
  // Update nodes and edges when the view changes
  useEffect(() => {
    const { nodes: viewNodes, edges: viewEdges } = getInitialData();
    setNodes(viewNodes);
    setEdges(viewEdges);
  }, [currentView, getInitialData, setNodes, setEdges]);
  
  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge({
      ...params,
      animated: true,
      style: { stroke: '#555', strokeWidth: 2 },
      type: 'smoothstep',
      markerEnd: { type: MarkerType.ArrowClosed }
    }, eds));
  }, [setEdges]);

  const onNodeClick = useCallback((_: any, node: Node) => {
    setSelectedNode(node.id);
    setIsDetailPanelOpen(true);
  }, []);
  
  // Effect to handle focused node from header
  useEffect(() => {
    if (focusedNode) {
      setSelectedNode(focusedNode);
      setIsDetailPanelOpen(true);
    }
  }, [focusedNode]);

  const getNodeColor = (type: string) => {
    switch(type) {
      case 'strategy': return '#6b46c1';
      case 'cycle': return '#ecc94b';
      case 'execution': return '#c53030';
      case 'product': return '#4299e1';
      case 'platform': return '#ed8936';
      case 'output': return '#d69e2e';
      case 'marketing': return '#38a169';
      case 'offline': return '#2f855a';
      default: return '#a0aec0';
    }
  };

  const getNodeOpacity = (id: string) => {
    if (!selectedNode) return 1;
    
    // Find the selected node and its connected nodes
    const selectedNodeObj = nodes.find(node => node.id === selectedNode);
    const connectedEdges = edges.filter(
      edge => edge.source === selectedNode || edge.target === selectedNode
    );
    const connectedNodeIds = new Set([
      ...connectedEdges.map(edge => edge.source),
      ...connectedEdges.map(edge => edge.target)
    ]);
    
    // If this node is selected or connected to the selected node, show it fully
    if (id === selectedNode || connectedNodeIds.has(id)) {
      return 1;
    }
    
    return 0.3;
  };

  // Apply opacity to nodes based on selection
  const nodesWithOpacity = nodes.map(node => ({
    ...node,
    style: {
      ...node.style,
      opacity: getNodeOpacity(node.id),
      transition: 'opacity 0.3s ease',
    },
  }));
  
  const handleClosePanelDetails = () => {
    setIsDetailPanelOpen(false);
  };

  // Get a title based on the current view
  const getViewTitle = () => {
    switch (currentView) {
      case 'company':
        return 'Company Level - Operating Framework';
      case 'product':
        return 'Product Level - Operating Framework';
      case 'dashboard':
        return 'Dashboard Structure - Operating Framework';
      case 'overview':
      default:
        return 'Product & UX System';
    }
  };

  return (
    <div className="w-full h-[calc(100vh-100px)]">
      <ReactFlow
        nodes={nodesWithOpacity}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        attributionPosition="bottom-right"
      >
        <Background color="#f0f0f0" gap={16} />
        <Controls />
        <MiniMap 
          nodeStrokeColor={(n) => {
            const color = getNodeColor(n.type || '');
            return color;
          }}
          nodeColor={(n) => {
            const color = getNodeColor(n.type || '');
            return color;
          }}
          maskColor="rgba(240, 240, 240, 0.7)"
        />
        <Panel position="top-left" className="bg-white p-3 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">{getViewTitle()}</h3>
          <p className="text-sm text-gray-600">Click on nodes to explore connections and details</p>
          {selectedNode && (
            <button 
              className="mt-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm"
              onClick={() => setSelectedNode(null)}
            >
              Reset View
            </button>
          )}
        </Panel>
      </ReactFlow>
      
      <NodeDetailsPanel 
        isOpen={isDetailPanelOpen}
        onClose={handleClosePanelDetails}
        nodeDetail={selectedNode ? nodeDetails[selectedNode] : null}
        nodeId={selectedNode}
      />
    </div>
  );
};

export default WorkflowMap;
