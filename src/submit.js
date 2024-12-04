// submit.js
import { useStore } from "./store";

export const SubmitButton = () => {

    const submitPipeline = async () => {
        const { nodes, edges } = useStore.getState(); // Retrieve nodes and edges from Zustand store

        try {
            // Make a POST request to the backend
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }), // Send nodes and edges as JSON
            });

            const result = await response.json();

            if (response.ok) {
                // Display an alert with the parsed response
                alert(`Pipeline Analysis:
            - Number of Nodes: ${result.num_nodes}
            - Number of Edges: ${result.num_edges}
            - Is DAG: ${result.is_dag ? 'Yes' : 'No'}`);
            } else {
                alert('Error: ' + result.message || 'Failed to process pipeline.');
            }
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('An error occurred while submitting the pipeline.');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={submitPipeline} style={{ marginTop: '20px', padding: '10px 20px' }}>
                Submit Pipeline
            </button>
        </div>
    );
}
