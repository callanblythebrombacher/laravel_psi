import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./shared_components/header.component";

function App() {
    return (
    <div>
        <Header />
    </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
