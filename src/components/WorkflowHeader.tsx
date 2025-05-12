
import { useState } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';
import { cn } from '@/lib/utils';

export type WorkflowView = 'overview' | 'company' | 'product' | 'dashboard';

type WorkflowHeaderProps = {
  onFocusNode: (nodeId: string | null) => void;
  onChangeView?: (view: WorkflowView) => void;
  currentView?: WorkflowView;
};

export const WorkflowHeader = ({ onFocusNode, onChangeView, currentView = 'overview' }: WorkflowHeaderProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const categories = [
    { title: 'Strategy', nodes: ['strategy', 'pillars', 'goals'], color: '#6b46c1' },
    { title: 'Cycles', nodes: ['cycles', 'annual', 'half-year', 'quarterly', 'monthly'], color: '#ecc94b' },
    { title: 'Execution', nodes: ['initiatives', 'projects', 'tasks', 'releases'], color: '#c53030' },
    { title: 'Products', nodes: ['product-roadmap', 'online-product', 'offline-product'], color: '#4299e1' },
    { title: 'Outputs', nodes: ['system-outputs'], color: '#d69e2e' },
  ];
  
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Product & UX System</h1>
          <p className="text-gray-500">Shaping, Shipping and Syncing</p>
        </div>
        <div className="flex gap-2">
          {onChangeView && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-gray-100 hover:bg-gray-200">
                    {currentView === 'overview' ? 'Overview' : 
                     currentView === 'company' ? 'Company Level' : 
                     currentView === 'product' ? 'Product Level' : 
                     'Dashboard Structure'}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => onChangeView('overview')}
                            className={cn(
                              "w-full flex select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md",
                              currentView === 'overview' ? "bg-gray-100" : "hover:bg-gray-100"
                            )}
                          >
                            <div className="font-medium">Overview</div>
                            <div className="text-sm text-gray-500">Complete system view</div>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => onChangeView('company')}
                            className={cn(
                              "w-full flex select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md",
                              currentView === 'company' ? "bg-gray-100" : "hover:bg-gray-100"
                            )}
                          >
                            <div className="font-medium">Company Level</div>
                            <div className="text-sm text-gray-500">Strategic framework</div>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => onChangeView('product')}
                            className={cn(
                              "w-full flex select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md",
                              currentView === 'product' ? "bg-gray-100" : "hover:bg-gray-100"
                            )}
                          >
                            <div className="font-medium">Product Level</div>
                            <div className="text-sm text-gray-500">Product implementation</div>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => onChangeView('dashboard')}
                            className={cn(
                              "w-full flex select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md",
                              currentView === 'dashboard' ? "bg-gray-100" : "hover:bg-gray-100"
                            )}
                          >
                            <div className="font-medium">Dashboard Structure</div>
                            <div className="text-sm text-gray-500">Data views & metrics</div>
                          </button>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
          <button 
            className="bg-gray-100 hover:bg-gray-200 rounded-lg p-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      </div>
      
      {expanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="mb-4">Click on any part of the workflow to explore connections. Use the color legend below to navigate:</p>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <div key={category.title} className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: category.color }}></div>
                  <span className="font-medium">{category.title}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {category.nodes.map((nodeId) => (
                    <button 
                      key={nodeId} 
                      className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                      onClick={() => onFocusNode(nodeId)}
                    >
                      {nodeId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button 
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => onFocusNode(null)}
            >
              Reset View
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
