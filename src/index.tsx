import { registerRootComponent } from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Screens } from './constants'
import { IScreens } from './constants/types';
import { generateKey, getComponentMapping } from './utils';

/* Custom header component*/
import CustomHeader from './components/CustomHeader';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: (props) => <CustomHeader title={props.options.title} />,
      }}> 
       {
        Screens.map((screen: IScreens) => <Stack.Screen
          key={generateKey('stack')}
          name={screen.name}
          component={getComponentMapping(screen.component)}
          options={screen.options}
        />)
       }
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

registerRootComponent(App);