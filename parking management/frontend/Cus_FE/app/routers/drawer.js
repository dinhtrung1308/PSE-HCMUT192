import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import ServiceStack from './servicesStack';

const RootDrawer = createDrawerNavigator({
  Home: HomeStack,
  Services: ServiceStack,
  About: AboutStack,
});

export default createAppContainer(RootDrawer);
