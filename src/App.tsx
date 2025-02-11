import React from 'react';
import AppRoutes from './routes';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 p-4">
                <AppRoutes />
            </main>
        </div>
    );
};

export default App;
