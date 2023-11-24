import React, { useState } from "react";

const DragAndDrop = () => {
    const allowDrop = (ev) => {
        ev.preventDefault();
    };

    const drag = (ev, nodeType) => {
        ev.dataTransfer.setData("text", ev.target.id);
        ev.dataTransfer.setData('application/reactflow', nodeType, ev.target.id);
        ev.dataTransfer.effectAllowed = 'move';

    };

    const [inputFields, setInputFields] = useState([]);
    const [draggedButtons, setDraggedButtons] = useState([]);

    //SHow the button when the draggedButton Empty
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    const drop = (ev) => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");

        // Check if the button ID is already in the list of draggedButtons
        if (!draggedButtons.includes(data)) {
            // Add the button ID to the list of draggedButtons
            setDraggedButtons((prevButtons) => [...prevButtons, data]);

            // Create a new input field and add it to the inputFields state
            setInputFields((prevInputFields) => [
                ...prevInputFields,
                {
                    id: data,
                    value: document.getElementById(data).textContent,
                },
            ]);
            // Check if all buttons have been dragged to div2
            if (draggedButtons.length === inputFields.length) {
                // Set showSubmitButton to true when all buttons are in div2
                setShowSubmitButton(true);
            }
        }
    };

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

    return (
        <div
            id="dragdrop"
            className=""
            style={{ background: "#f0eaea", height: "100vh" }}
        >
            <div className="container-fluid">
                <div className="dragDropSection">
                    <div className="row mainRow">
                        <div
                            className="col-md-3"
                            id="div1"
                            onDrop={drop}
                            onDragOver={allowDrop}
                        >
                            <div className="buttonList text-center pt-3">
                                <h4 className="mb-3">List Of Button</h4>
                                <div className="row listOfBtn">
                                    <div className="col-md-9">
                                        <button className="btn btn-primary mb-3 drapBtn"
                                            draggable="true"
                                            onDragStart={drag}
                                            id="name1"
                                        >
                                            Drag Name
                                        </button>
                                    </div>

                                    <div className="col-md-9">
                                        <button
                                            className="btn btn-primary mb-3 drapBtn"
                                            draggable="true"
                                            onDragStart={drag}
                                            id="email"
                                        >
                                            Drag Email
                                        </button>
                                    </div>

                                    <div className="col-md-9">
                                        <button
                                            className="btn btn-primary mb-3 drapBtn"
                                            draggable="true"
                                            onDragStart={drag}
                                            id="city"
                                        >
                                            Drag City
                                        </button>
                                    </div>

                                    <div className="col-md-9">
                                        <button
                                            className="btn btn-primary mb-3 drapBtn"
                                            draggable="true"
                                            onDragStart={drag}
                                            id="age"
                                        >
                                            Drag Age
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-md-4 col-lg-4 pt-3 dropList text-center "
                            id="div2"
                            onDrop={drop}
                            onDragOver={allowDrop}
                        >
                            <h4 className="mb-3">List of Input Field</h4>
                            {renderInputFields()}
                            {/* ... your existing code ... */}
                            {showSubmitButton && (
                                // Display the submit button when showSubmitButton is true
                                <button className="btn btn-primary">Submit</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DragAndDrop;
