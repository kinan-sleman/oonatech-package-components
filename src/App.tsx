import React from 'react';
import AppRoutes from './routes';

const App: React.FC = () => {
    return (
        <div className="flex flex-col ">
            <main className="flex-1 p-1">
                <AppRoutes />
            </main>
        </div>
    );
};

export default App;
