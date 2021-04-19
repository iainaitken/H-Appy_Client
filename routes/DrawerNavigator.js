import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenu from '../views/MainMenu';
import About from '../views/About';
import IndividualCourse from '../views/IndividualCourse';
import AddActivity from '../views/AddActivity';
import SignUp from '../views/SignUp';


const Drawer = createDrawerNavigator();

function Nibbles() {
  return (
    <IndividualCourse header="Nibbles" dataKey="nibbles" />
  );
}

function Starters() {
  return (
    <IndividualCourse header="Starters" dataKey="appetisers" />
  );
}

function Mains() {
  return (
    <IndividualCourse header="Mains" dataKey="mains" />
  );
}

function Desserts() {
  return (
    <IndividualCourse header="Desserts" dataKey="desserts" />
  );
}

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerStyle={styles.drawer}
    drawerContentOptions={drawerContentStyles}
  >
    <Drawer.Screen name="Menu" component={MainMenu} />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Nibbles" component={Nibbles} />
    <Drawer.Screen name="Starters" component={Starters} />
    <Drawer.Screen name="Mains" component={Mains} />
    <Drawer.Screen name="Desserts" component={Desserts} />
    <Drawer.Screen name="Create a Recipe" component={AddActivity} />
    <Drawer.Screen name="Sign up" component={SignUp} />
  </Drawer.Navigator>
);

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#f8f9d4',
    width: 240,
  },
});

const drawerContentStyles = {
  activeTintColor: '#c7524a',
  itemStyle: { marginVertical: 5 },
  labelStyle: { fontFamily: 'Didot', fontSize: 20, paddingTop: 10 },
};
