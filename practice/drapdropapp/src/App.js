import './App.css';
import DragAndDrop from './DragAndDrop';
import Flow from './components/Flow';
import FlowReact from './components/FlowReact';
import SlideBar from './components/SlideBar';

function App() {
  return (
    <>

      <Flow />
      <hr className='mb-5' />
      <DragAndDrop />


      <hr />

      <FlowReact />


    </>
  );
}

export default App;
