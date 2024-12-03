import { Handle } from 'reactflow';
import { useState } from 'react';
import { nodeConfigs } from './nodeConfig';
import './node.css';

export const GenericNode = ({ id, data, type, isSelected }) => {
  const config = nodeConfigs[type];
  const [state, setState] = useState(() => {
    // Initialize state with default values from nodeConfigs
    const initialState = {};
    config.fields.forEach((field) => {
      initialState[field.key] =
        type === "text" ? `{{input}}` :
          data?.[field.key] ||
          (field.type === 'text' ? `${config.label}_${id.split('-').pop()}` : field.options?.[0]?.value || '');
    });
    return initialState;
  });

  if (!config) {
    return <div style={{ border: '1px solid red', padding: '10px' }}>Unknown node type: {type}</div>;
  }

  const handleInputChange = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className={`node-container ${isSelected ? 'selected' : ''}`} // Apply selected class if isSelected is true
    >
      <div className="node-header">
        <strong>{config.label}</strong>
      </div>

      {config.fields.map((field) => (
        <div key={field.key} className="node-field-container">
          <label className="node-label">
            {field.label}:
            {field.type === 'text' ? (
              <input
                type="text"
                value={state[field.key] || ''}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                className="node-input"
              />
            ) : field.type === 'select' ? (
              <select
                value={state[field.key] || ''}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                className="node-select"
              >
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : null}
          </label>
        </div>
      ))}

      {config.description && <div className="node-description">{config.description}</div>}

      <div className="node-handle-container">
        {config.handles.map((handle) => (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={`${id}-${handle.id}`}
            style={handle.style || {}}
          />
        ))}
      </div>
    </div>
  );
};
