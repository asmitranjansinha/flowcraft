// toolbar.js

import { nodeConfigs } from './nodes/nodeConfig';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => (
  <div style={{ padding: '10px' }}>
    <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {Object.keys(nodeConfigs).map((key) => (
        <DraggableNode key={key} type={key} label={nodeConfigs[key].label} />
      ))}
    </div>
  </div>
);
