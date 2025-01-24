function displayInfo() {
    const runtimeInfoDiv = document.getElementById('runtime-info');
    
    // Toggle visibility of the div
    if (runtimeInfoDiv.style.display === 'none' || runtimeInfoDiv.style.display === '') {
        runtimeInfoDiv.style.display = 'block';
        const info = `
            <h3>JavaScript Runtime Environment Details:</h3>
            <ul>
                <li><strong>Browsers:</strong> Each browser (Chrome, Firefox, etc.) has a JavaScript engine (e.g., V8 for Chrome, SpiderMonkey for Firefox) that executes the code.</li>
                <li><strong>Node.js:</strong> A JavaScript runtime built on Chrome's V8 engine, enabling server-side scripting and development.</li>
            </ul>

            <h3>In runtime, JavaScript uses:</h3>
            <ul>
                <li><strong>Call Stack:</strong> Executes synchronous code.</li>
                <li><strong>Event Loop:</strong> Handles asynchronous tasks.</li>
                <li><strong>Web APIs:</strong> Browser-provided features (e.g., setTimeout, DOM methods).</li>
            </ul>
        `;
        
        // Display the information in the div with id "runtime-info"
        runtimeInfoDiv.innerHTML = info;
    } else {
        runtimeInfoDiv.style.display = 'none'; // Hide if already visible
    }
}