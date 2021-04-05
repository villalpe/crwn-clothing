import React from 'react';
import Directory from '../../components/directory/directory.component';

import '../../pages/homepage/homepage.styles.scss';

//We create this functional component because
//we don't need lifecycle methods and state

const HomePage = () => (
    <div className="homepage">
        <Directory />
    </div>
);

export default HomePage;