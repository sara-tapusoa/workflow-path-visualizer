
import { Node, Edge, MarkerType } from '@xyflow/react';

export const initialNodes: Node[] = [
  // Strategy & Vision Layer
  {
    id: 'strategy',
    type: 'strategy',
    data: { label: 'Mission, Vision & Strategy' },
    position: { x: 400, y: 50 },
    style: {
      background: '#6b46c1',
      color: 'white',
      borderRadius: '4px',
      width: 200,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
  {
    id: 'pillars',
    type: 'strategy',
    data: { label: 'Strategic Pillars' },
    position: { x: 400, y: 120 },
    style: {
      background: '#6b46c1',
      color: 'white',
      borderRadius: '4px',
      width: 200,
      textAlign: 'center',
    },
  },
  {
    id: 'goals',
    type: 'strategy',
    data: { label: 'Yearly Goals/KPIs' },
    position: { x: 400, y: 190 },
    style: {
      background: '#6b46c1',
      color: 'white',
      borderRadius: '4px',
      width: 200,
      textAlign: 'center',
    },
  },
  
  // Cycles Layer
  {
    id: 'cycles',
    type: 'cycle',
    data: { label: 'Cycles' },
    position: { x: 700, y: 50 },
    style: {
      background: '#f6e05e',
      color: 'black',
      borderRadius: '4px',
      width: 150,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
  {
    id: 'annual',
    type: 'cycle',
    data: { label: 'Annual Planning' },
    position: { x: 700, y: 120 },
    style: {
      background: '#f6e05e',
      color: 'black',
      borderRadius: '4px',
      width: 150,
      textAlign: 'center',
    },
  },
  {
    id: 'half-year',
    type: 'cycle',
    data: { label: 'Half Year Roadmap' },
    position: { x: 700, y: 170 },
    style: {
      background: '#f6e05e',
      color: 'black',
      borderRadius: '4px',
      width: 150,
      textAlign: 'center',
    },
  },
  {
    id: 'quarterly',
    type: 'cycle',
    data: { label: 'Quarterly Reviews' },
    position: { x: 700, y: 220 },
    style: {
      background: '#f6e05e',
      color: 'black',
      borderRadius: '4px',
      width: 150,
      textAlign: 'center',
    },
  },
  {
    id: 'monthly',
    type: 'cycle',
    data: { label: 'Monthly Reviews' },
    position: { x: 700, y: 270 },
    style: {
      background: '#f6e05e',
      color: 'black',
      borderRadius: '4px',
      width: 150,
      textAlign: 'center',
    },
  },
  
  // Execution Layer
  {
    id: 'initiatives',
    type: 'execution',
    data: { label: 'Initiatives' },
    position: { x: 400, y: 260 },
    style: {
      background: '#c53030',
      color: 'white',
      borderRadius: '4px',
      width: 200,
      textAlign: 'center',
    },
  },
  {
    id: 'projects',
    type: 'execution',
    data: { label: 'Projects' },
    position: { x: 400, y: 330 },
    style: {
      background: '#c53030',
      color: 'white',
      borderRadius: '4px',
      width: 200,
      textAlign: 'center',
    },
  },
  {
    id: 'tasks',
    type: 'execution',
    data: { label: 'Action Items (Tasks)' },
    position: { x: 400, y: 400 },
    style: {
      background: '#c53030',
      color: 'white',
      borderRadius: '4px',
      width: 200,
      textAlign: 'center',
    },
  },
  {
    id: 'releases',
    type: 'execution',
    data: { label: 'Releases' },
    position: { x: 400, y: 470 },
    style: {
      background: '#c53030',
      color: 'white',
      borderRadius: '4px',
      width: 200,
      textAlign: 'center',
    },
  },
  
  // Product & Dashboard layer
  {
    id: 'product-roadmap',
    type: 'product',
    data: { label: 'Product Roadmap Dash' },
    position: { x: 400, y: 600 },
    style: {
      background: '#4299e1',
      color: 'white',
      borderRadius: '4px',
      width: 200,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
  {
    id: 'online-product',
    type: 'product',
    data: { label: 'Online Product RC / RD' },
    position: { x: 650, y: 550 },
    style: {
      background: '#4299e1',
      color: 'white',
      borderRadius: '4px',
      width: 180,
      textAlign: 'center',
    },
  },
  {
    id: 'offline-product',
    type: 'offline',
    data: { label: 'Offline Product' },
    position: { x: 200, y: 550 },
    style: {
      background: '#2f855a',
      color: 'white',
      borderRadius: '4px',
      width: 180,
      textAlign: 'center',
    },
  },
  
  // External inputs
  {
    id: 'external-inputs',
    data: { label: 'External Inputs' },
    position: { x: 200, y: 260 },
    style: {
      border: '1px solid #e53e3e',
      borderRadius: '20px',
      padding: '5px 15px',
      width: 160,
      textAlign: 'center',
    },
  },
  {
    id: 'external-tasks',
    data: { label: 'External To-Do Tasks' },
    position: { x: 200, y: 330 },
    style: {
      border: '1px solid #e53e3e',
      borderRadius: '20px',
      padding: '5px 15px',
      width: 160,
      textAlign: 'center',
    },
  },
  
  // System Outputs
  {
    id: 'system-outputs',
    type: 'output',
    data: { label: 'System Outputs' },
    position: { x: 1000, y: 400 },
    style: {
      background: '#d69e2e',
      color: 'white',
      borderRadius: '50%',
      width: 150,
      height: 150,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
    },
  },
  
  // Marketing & Platform
  {
    id: 'marketing',
    type: 'marketing',
    data: { label: 'Marketing Impact' },
    position: { x: 850, y: 650 },
    style: {
      background: '#38a169',
      color: 'white',
      borderRadius: '4px',
      width: 150,
      textAlign: 'center',
    },
  },
  {
    id: 'platform-tools',
    type: 'platform',
    data: { label: 'Platform Tools' },
    position: { x: 600, y: 750 },
    style: {
      background: '#ed8936',
      color: 'white',
      borderRadius: '4px',
      width: 150,
      textAlign: 'center',
    },
  },
];

export const initialEdges: Edge[] = [
  // Strategy connections
  {
    id: 'strategy-pillars',
    source: 'strategy',
    target: 'pillars',
    animated: true,
    style: { stroke: '#6b46c1', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'pillars-goals',
    source: 'pillars',
    target: 'goals',
    animated: true,
    style: { stroke: '#6b46c1', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  
  // Goals to initiatives
  {
    id: 'goals-initiatives',
    source: 'goals',
    target: 'initiatives',
    style: { stroke: '#805ad5', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  
  // Execution flow
  {
    id: 'initiatives-projects',
    source: 'initiatives',
    target: 'projects',
    style: { stroke: '#c53030', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'projects-tasks',
    source: 'projects',
    target: 'tasks',
    style: { stroke: '#c53030', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'tasks-releases',
    source: 'tasks',
    target: 'releases',
    style: { stroke: '#c53030', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  
  // Releases to product dashboard
  {
    id: 'releases-product-roadmap',
    source: 'releases',
    target: 'product-roadmap',
    style: { stroke: '#718096', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  
  // External connections
  {
    id: 'external-inputs-initiatives',
    source: 'external-inputs',
    target: 'initiatives',
    style: { stroke: '#e53e3e', strokeWidth: 1, strokeDasharray: '5, 5' },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'external-tasks-projects',
    source: 'external-tasks',
    target: 'tasks',
    style: { stroke: '#e53e3e', strokeWidth: 1, strokeDasharray: '5, 5' },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  
  // Product connections
  {
    id: 'product-roadmap-online',
    source: 'product-roadmap',
    target: 'online-product',
    style: { stroke: '#4299e1', strokeWidth: 2 },
    type: 'smoothstep',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'product-roadmap-offline',
    source: 'product-roadmap',
    target: 'offline-product',
    style: { stroke: '#2f855a', strokeWidth: 2 },
    type: 'smoothstep',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  
  // Output connections
  {
    id: 'online-product-outputs',
    source: 'online-product',
    target: 'system-outputs',
    style: { stroke: '#4299e1', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'marketing-outputs',
    source: 'marketing',
    target: 'system-outputs',
    style: { stroke: '#38a169', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  
  // Platform connections
  {
    id: 'platform-marketing',
    source: 'platform-tools',
    target: 'marketing',
    style: { stroke: '#ed8936', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'online-product-platform',
    source: 'online-product',
    target: 'platform-tools',
    style: { stroke: '#4299e1', strokeWidth: 1, strokeDasharray: '5, 5' },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  
  // Cycle connections
  {
    id: 'cycles-annual',
    source: 'cycles',
    target: 'annual',
    style: { stroke: '#ecc94b', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'annual-half-year',
    source: 'annual',
    target: 'half-year',
    style: { stroke: '#ecc94b', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'half-year-quarterly',
    source: 'half-year',
    target: 'quarterly',
    style: { stroke: '#ecc94b', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'quarterly-monthly',
    source: 'quarterly',
    target: 'monthly',
    style: { stroke: '#ecc94b', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  
  // Connect cycles to execution
  {
    id: 'annual-pillars',
    source: 'annual',
    target: 'pillars',
    style: { stroke: '#ecc94b', strokeWidth: 1, strokeDasharray: '5, 5' },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'half-year-initiatives',
    source: 'half-year',
    target: 'initiatives',
    style: { stroke: '#ecc94b', strokeWidth: 1, strokeDasharray: '5, 5' },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];
