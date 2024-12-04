import React from "react";
import { nodeConfigs } from "./nodes/nodeConfig";
import { DraggableNode } from "./draggableNode";
import './toolbar.css';

export const PipelineToolbar = () => (
  <div className="toolbar-wrapper">
    {Object.keys(nodeConfigs).map((key) => (
      <div className="draggable-container" key={key}>
        <DraggableNode
          type={key}
          label={nodeConfigs[key].label}
          // icon={nodeConfigs[key].icon} // Assuming icons are available in nodeConfigs
        />
      </div>
    ))}
  </div>
);
