import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [];

let id = 0;
const getId = () => `dndnode_${id++}`;

const FlowReact = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const drag = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType, event.target.id);
    event.dataTransfer.effectAllowed = 'move';
  };

  const [inputFields, setInputFields] = useState([]);
  const [draggedButtons, setDraggedButtons] = useState([]);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const data = event.dataTransfer.getData("text");

      if (!draggedButtons.includes(data)) {
        setDraggedButtons((prevButtons) => [...prevButtons, data]);

        setInputFields((prevInputFields) => [
          ...prevInputFields,
          {
            id: data,
            value: document.getElementById(data).textContent,
          },
        ]);

        if (draggedButtons.length === inputFields.length) {
          setShowSubmitButton(true);
        }
      }

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const renderInputFields = () => {
    return inputFields.map((inputField) => (
      <input
        key={inputField.id}
        type="text"
        className="form-control mb-3"
        value={inputField.value}
        readOnly
      />
    ));
  };

  useEffect(() => {
    if (reactFlowWrapper.current) {
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      // Your code that uses reactFlowBounds here
    }
  }, [reactFlowWrapper.current]);

  return (
    <div className="dndflow" style={{ height: '30rem' }}>
      <ReactFlowProvider>
        {/* Input fields */}
        <div>
          <div className='row'>
            <div className="col-md-1 mb-2">
              <button className="btn btn-danger h-75 dndnode input" id='input1' onDragStart={drag} draggable='true'>
                Drag Name
              </button>
            </div>
          </div>
          <div className='row'>
            <div className="col-md-1 mb-2">
              <button className="btn btn-danger h-75 dndnode input" id='input2' onDragStart={drag} draggable='true'>
                Drag Email
              </button>
            </div>
          </div>
          <div className='row'>
            <div className="col-md-1 mb-2">
              <button className="btn btn-danger h-75 dndnode input" id='input3' onDragStart={drag} draggable='true'>
                Drag Age
              </button>
            </div>
          </div>
          <div className='row'>
            <div className="col-md-1 mb-2">
              <button className="btn btn-danger h-75 dndnode input" id='input4' onDragStart={drag} draggable='true'>
                Drag City
              </button>
            </div>
          </div>
        </div>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            {renderInputFields()}
            {showSubmitButton && (
              <button className="btn btn-primary">Submit</button>
            )}
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowReact;
