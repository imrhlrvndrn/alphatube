import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataProvider';
import { ThemeProvider } from './context/ThemeContext';
import { ModalProvider } from './context/ModalProvider';

// React components
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <DataProvider>
                <AuthProvider>
                    <ModalProvider>
                        <ThemeProvider>
                            <App />
                        </ThemeProvider>
                    </ModalProvider>
                </AuthProvider>
            </DataProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
