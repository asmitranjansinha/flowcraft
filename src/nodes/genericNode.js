import { Handle } from 'reactflow';
import { useState, useEffect } from 'react';
import { nodeConfigs } from './nodeConfig';

export const GenericNode = ({ id, data, type }) => {
  const config = nodeConfigs[type];
  const [state, setState] = useState(() => {
    // Initialize state with default values from nodeConfigs
    const initialState = {};
    config.fields.forEach((field) => {
      initialState[field.key] =
        data?.[field.key] ||
        (field.type === 'text' ? `${field.key}_${id.split('-').pop()}` : field.options?.[0]?.value || '');
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
    <div style={{ width: 200, height: 100, border: '1px solid black', padding: 10 }}>
      <div>
        <strong>{config.label}</strong>
      </div>
      {config.fields.map((field) => (
        <div key={field.key}>
          <label>
            {field.label}:
            {field.type === 'text' ? (
              <input
                type="text"
                value={state[field.key] || ''}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
              />
            ) : field.type === 'select' ? (
              <select
                value={state[field.key] || ''}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
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
      {config.description && <div>{config.description}</div>}
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
  );
};
