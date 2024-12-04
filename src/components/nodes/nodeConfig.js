import { Position } from "reactflow";

export const nodeConfigs = {
  customInput: {
    label: 'Input',
    fields: [
      { key: 'inputName', label: 'Name', type: 'text', defaultValue: 'Default Input Name' },
      {
        key: 'inputType',
        label: 'Type',
        type: 'select',
        defaultValue: 'Text', // Default to "Text" option
        options: [
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'File' },
        ],
      },
    ],
    handles: [
      { id: 'value', type: 'source', position: Position.Right },
    ],
  },
  llm: {
    label: 'LLM',
    description: 'This is a LLM.',
    fields: [],
    handles: [
      { id: 'system', type: 'target', position: Position.Left, style: { top: '33%' } },
      { id: 'prompt', type: 'target', position: Position.Left, style: { top: '66%' } },
      { id: 'response', type: 'source', position: Position.Right },
    ],
  },
  customOutput: {
    label: 'Output',
    fields: [
      { key: 'outputName', label: 'Name', type: 'text', defaultValue: 'Default Output Name' },
      {
        key: 'outputType',
        label: 'Type',
        type: 'select',
        defaultValue: 'Text', // Default to "Text" option
        options: [
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'Image' },
        ],
      },
    ],
    handles: [
      { id: 'value', type: 'target', position: Position.Left },
    ],
  },
  text: {
    label: 'Text',
    fields: [
      { key: 'text', label: 'Text', type: 'text', defaultValue: 'Default Text' },
    ],
    handles: [
      { id: 'output', type: 'source', position: Position.Right },
    ],
  },
  math: {
    label: 'Math',
    fields: [
      {
        key: 'operation',
        label: 'Operation',
        type: 'select',
        defaultValue: 'add', // Default to "add" option
        options: [
          { value: 'add', label: 'Add' },
          { value: 'subtract', label: 'Subtract' },
        ],
      },
    ],
    handles: [
      { id: 'input1', type: 'target', position: Position.Left, style: { top: '25%' } },
      { id: 'input2', type: 'target', position: Position.Left, style: { top: '75%' } },
      { id: 'result', type: 'source', position: Position.Right },
    ],
  },
};
