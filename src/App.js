import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { TopBar } from './topbar';

function App() {
  return (
    <div>
      <TopBar />
      <PipelineToolbar />
      <PipelineUI />
      {/* <SubmitButton /> */}
    </div>
  );
}

export default App;
