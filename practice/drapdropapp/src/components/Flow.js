import React, { useState } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', type: 'input', data: { label: "Name" }, position: { x: 200, y: 30 } },
    { id: '2', type: 'input', data: { label: "Age" }, position: { x: 350, y: 35 } },
    { id: '3', type: 'input', data: { label: "City" }, position: { x: 450, y: 40 } },
    { id: '4', type: 'input', data: { label: "Job" }, position: { x: 550, y: 50 } }
];

const initialEdges = [
    { id: 'e1-2', source: "1", target: "2" },
    { id: 'e2-3', source: "2", target: "3" },
    { id: 'edge3', source: "3", target: "4" },
];

function Flow() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    return (
        <div style={{ marginTop: '10rem', height: '100%', width: '100%' }}>
            <ReactFlow nodes={nodes} edges={edges} fitView >
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
}

export default Flow;
