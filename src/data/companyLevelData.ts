
import { Node, Edge, MarkerType } from '@xyflow/react';

export const companyNodes: Node[] = [
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
    position: { x: 400, y: 150 },
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
    position: { x: 400, y: 250 },
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
    position: { x: 700, y: 200 },
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
    position: { x: 700, y: 280 },
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
    position: { x: 700, y: 360 },
    style: {
      background: '#f6e05e',
      color: 'black',
      borderRadius: '4px',
      width: 150,
      textAlign: 'center',
    },
  },
  {
    id: 'weekly',
    type: 'cycle',
    data: { label: 'Weekly Reviews' },
    position: { x: 700, y: 440 },
    style: {
      background: '#f6e05e',
      color: 'black',
      borderRadius: '4px',
      width: 150,
      textAlign: 'center',
    },
  },
  {
    id: 'daily',
    type: 'cycle',
    data: { label: 'Daily Tracking' },
    position: { x: 700, y: 520 },
    style: {
      background: '#f6e05e',
      color: 'black',
      borderRadius: '4px',
      width: 150,
      textAlign: 'center',
    },
  },
  
  // Execution Layer - Main Pyramid
  {
    id: 'initiatives',
    type: 'execution',
    data: { label: 'Initiatives' },
    position: { x: 400, y: 350 },
    style: {
      background: '#38a169',
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
    position: { x: 400, y: 450 },
    style: {
      background: '#38a169',
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
    position: { x: 400, y: 550 },
    style: {
      background: '#38a169',
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
    position: { x: 400, y: 650 },
    style: {
      background: '#38a169',
      color: 'white',
      borderRadius: '4px',
      width: 200,
      textAlign: 'center',
    },
  },
];

export const companyEdges: Edge[] = [
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
    style: { stroke: '#38a169', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'projects-tasks',
    source: 'projects',
    target: 'tasks',
    style: { stroke: '#38a169', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'tasks-releases',
    source: 'tasks',
    target: 'releases',
    style: { stroke: '#38a169', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  
  // Cycle connections
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
  {
    id: 'monthly-weekly',
    source: 'monthly',
    target: 'weekly',
    style: { stroke: '#ecc94b', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'weekly-daily',
    source: 'weekly',
    target: 'daily',
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
  {
    id: 'quarterly-projects',
    source: 'quarterly',
    target: 'projects',
    style: { stroke: '#ecc94b', strokeWidth: 1, strokeDasharray: '5, 5' },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'monthly-tasks',
    source: 'monthly',
    target: 'tasks',
    style: { stroke: '#ecc94b', strokeWidth: 1, strokeDasharray: '5, 5' },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];
