import React from 'react';
import DesktopView from './DesktopView';
import TopNavigation from './TopNavigation';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const Home = () => (
    <div className='desktop-view'>
        <TopNavigation />
        <DesktopView>
            <LeftColumn />
            <RightColumn />
        </DesktopView>
    </div>
);

export default Home;