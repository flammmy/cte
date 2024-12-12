import React, { useState } from 'react';
import { 
  Home, 
  MessageSquare, 
  Code, 
  Settings, 
  Sparkles 
} from 'lucide-react';

const BottomMenuBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { 
      icon: Home, 
      name: 'home', 
      label: 'Home' 
    },
    { 
      icon: MessageSquare, 
      name: 'chat', 
      label: 'Chat' 
    },
    { 
      icon: Sparkles, 
      name: 'ai', 
      label: 'AI Assistant',
      highlight: true 
    },
    { 
      icon: Code, 
      name: 'code', 
      label: 'Code' 
    },
    { 
      icon: Settings, 
      name: 'settings', 
      label: 'Settings' 
    }
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 ">
      <div className="flex items-center  bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200 px-2 py-2 space-x-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`
              flex items-center justify-center 
              ${item.highlight ? 'bg-blue-500 text-white' : ''} 
              ${activeTab === item.name ? 'bg-gray-100' : 'hover:bg-gray-50'}
              rounded-full 
              p-2 
              transition-all 
              duration-200 
              group
            `}
          >
            <item.icon 
              className={`
                w-5 h-5 
                ${activeTab === item.name ? 'text-blue-600' : 'text-gray-500'}
                ${item.highlight ? 'text-white' : ''}
                group-hover:scale-110 
                transition-transform
              `}
            />
            {activeTab === item.name && (
              <span className="ml-2 text-xs font-medium text-blue-600">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomMenuBar;