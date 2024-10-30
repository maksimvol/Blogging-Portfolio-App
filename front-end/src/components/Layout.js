import React from 'react';
import MusicPlayer from './MusicPlayer';

const Layout = ({ children }) => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '80px' }}>
            <div>{children}</div>
            <MusicPlayer />
        </div>
    );
};

export default Layout;
