import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home";
import Webnavigator from "../screens/webnavigator";
import Login from "../screens/login";
import HomePage from "../screens/homepage";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OrderList from "../screens/orderlist";
import Ionicons from 'react-native-vector-icons/Ionicons';


type RootStackParamsList = {
    Home: undefined;
    Webnavigator: undefined;
    Login: undefined;
    HomePage: undefined;
};

// const Stack = createNativeStackNavigator();

declare global {
    namespace ReactNavigation {
        interface RootParamsList extends RootStackParamsList {}       
    }
}

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomePage} options={{
            headerTitle: '',
            headerTintColor: 'white',
            headerTransparent: true,
        }} />       
    </HomeStack.Navigator>
);
// <HomeStack.Screen name="ProductDetails" component={ProductDetailsPage} /

const OrderStack = createNativeStackNavigator();
const OrderStackScreen = () => (
    <OrderStack.Navigator>
        <OrderStack.Screen name="OrderListScreen" component={OrderList} />
    </OrderStack.Navigator>
);

const SettingStack = createNativeStackNavigator();
const SettingStackScreen = () => (
    <SettingStack.Navigator>
        <SettingStack.Screen name="OrderListScreen" component={OrderList} />
    </SettingStack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabBarIcon = props => {
    const {focused, name, color, size} = props;

    let iconName;

    if (name === 'HomePage') {
    iconName = focused ? 'home' : 'home-outline';
} else if (name === 'Compras') {
    iconName = focused ? 'list' : 'list-outline';
} else if (name === 'Ajustes') {
    iconName = focused ? 'settings' : 'settings-outline';
}

return <Ionicons name={iconName} size={size} color={color} />
}

const Routes = () => (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: props => <TabBarIcon {...props} name={route.name} />,
            tabBarActiveTintColor: '#62C567',
            tabBarInactiveTintColor: 'gray',
            })}>

            <Tab.Screen name="HomePage" component={HomeStackScreen} />
            <Tab.Screen name="Compras" component={OrderStackScreen} />
            <Tab.Screen name="Ajustes" component={HomeStackScreen} />
        </Tab.Navigator>

        {/*<Stack.Navigator initialRouteName="Home">
            <Stack.Screen name= "Home" component={Home} />
            <Stack.Screen name= "Webnavigator" component={Webnavigator} />
            <Stack.Screen name= "Login" component={Login} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name='HomePage' component={HomePage} />
        </Stack.Navigator>*/}
    </NavigationContainer>
);

export default Routes;