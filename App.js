import { createStackNavigator } from 'react-navigation';
import HabitScreen from './src/components/HabitScreen';
import InfoScreen from './src/components/InfoScreen';

const App = createStackNavigator(
  {
    Habit: {
      screen: HabitScreen,
    },
    Info: InfoScreen,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

export default App;
