import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { TopBar } from './topbar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}

export default App;
