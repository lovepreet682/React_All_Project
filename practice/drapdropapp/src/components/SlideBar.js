import React from 'react'

function SlideBar() {

    const drag = (event,nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType, event.target.id);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
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
                    <button className="btn btn-danger h-75 dndnode input" id='input3' onDragStart={drag}  draggable='true'>
                        Drag Age
                    </button>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-1 mb-2">
                    <button className="btn btn-danger h-75 dndnode input" id='input4' onDragStart={drag}  draggable='true'>
                        Drag City
                    </button>
                </div>
            </div>
        </div >
    )
}

export default SlideBar