import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../screens/home";
import Webnavigator from "../screens/WebNavigator";
import Login from "../screens/login";
import HomePage from "../screens/homepage";
import { DetailsPro } from "../screens/details/detailspro";
import ProductsView from "../components/productsview";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { OrderList } from "../screens/orderlist";
import Setting from "../screens/setting";
import { SignUp } from "../screens/signup";
import Ionicons from 'react-native-vector-icons/Ionicons';
import messaging from '@react-native-firebase/messaging';

 export type RootStackParamList = {
    Home: undefined;
    Webnavigator: undefined;
    Login: undefined;
    HomePage: undefined;
    ProductsView: undefined;
    OrderList: undefined;
    DetailsPro: undefined;
}

// const Stack = createNativeStackNavigator();

 declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {

        }       
    }
}

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="HomeStack" component={Home} options={{
            headerTitle: '',
            headerTintColor: 'white',
            headerTransparent: true,
        }} />       
    </HomeStack.Navigator>
);
// <HomeStack.Screen name="ProductDetails" component={ProductDetailsPage} /

const LoginStack = createNativeStackNavigator();
const LoginStackScreen = () => (
    <LoginStack.Navigator>
        <LoginStack.Screen name="Login" component={Login} options={{
            headerTitle: '',
            headerTintColor: 'white',
            headerTransparent: true,
        }} />       
    </LoginStack.Navigator>
);

const HomePageStack = createNativeStackNavigator();
const HomePageStackScreen = () => (
    <HomePageStack.Navigator>
        <HomePageStack.Screen name="HomePage" component={HomePage} options={{
            headerTitle: '',
            headerTintColor: 'white',
            headerTransparent: true,
        }} />       
    </HomePageStack.Navigator>
);

// const ProductsViewStack = createNativeStackNavigator();
// const ProductsViewStackScreen = () => (
//     <ProductsViewStack.Navigator>
//         <ProductsViewStack.Screen name="ProductsView" component={ProductsView} options={{
//             headerTitle: '',
//             headerTintColor: 'white',
//             headerTransparent: true,
//         }} />       
//     </ProductsViewStack.Navigator>
// );

const OrderStack = createNativeStackNavigator();
const OrderStackScreen = () => (
    <OrderStack.Navigator>
    <OrderStack.Screen name="OrderList" component={OrderList} options={{
            headerTitle: '',
            headerTintColor: 'white',
            headerTransparent: true,
        }} />
    </OrderStack.Navigator>
);

const SettingStack = createNativeStackNavigator();
const SettingStackScreen = () => (
    <SettingStack.Navigator>
    <SettingStack.Screen name="SettingList" component={Setting} />
    </SettingStack.Navigator>
);

// const DetailsStack = createNativeStackNavigator();
// const DetailsStackScreen = () => (
//     <DetailsStack.Navigator>
//         <DetailsStack.Screen name="DetailsProStack" component={DetailsPro} options={{
//             headerTintColor: 'white',
//             headerTransparent: true,
//         }} />       
//     </DetailsStack.Navigator>
// );

const SignUpStack = createNativeStackNavigator();
const SignUpStackScreen = () => (
    <SignUpStack.Navigator>
        <SignUpStack.Screen name="SignUp" component={SignUp} options={{
            headerTitle: '',
            headerTintColor: 'white',
            headerTransparent: true,
        }} />       
    </SignUpStack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabBarIcon = props => {
    const {focused, name, color, size, item} = props;

    let iconName;

    if (name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
    } else if (name === 'Login') {
    iconName = focused ? 'person' : 'person-outline';
    } 
    else if (name === 'HomePage') {
    iconName = focused ? 'home' : 'home-outline';
    } 
    else if (name === 'SignUp') {
    iconName = focused ? 'reader' : 'reader-outline';
    } 
    else if (name === 'DetailsPro') {
    iconName = focused ? 'reader' : 'reader-outline';
    } 
    else if (name === 'ProductsView') {
    iconName = focused ? 'reader' : 'reader-outline';
    } 
    else if (name === 'OrderList') {
    iconName = focused ? 'list' : 'list-outline';
    } else if (name === 'Ajustes') {
    iconName = focused ? 'settings' : 'settings-outline';
    }

return <Ionicons name={iconName} size={size} color={color} />
}

const Routes = () => {
    useEffect(() => {
        async function getUserToken() {
            await messaging().registerDeviceForRemoteMessages();
            const token = await messaging().getToken();
            console.log(`>>>> ${token}`);
        }
        getUserToken();
    }, [])
    return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: props => <TabBarIcon {...props} name={route.name} />,
            tabBarActiveTintColor: '#62C567',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="OrderList" component={OrderStackScreen}  options={{
            tabBarButton: () => null,
            tabBarStyle: {
            display: 'none',
          },
        }}/>
            <Tab.Screen name="Login" component={LoginStackScreen} />
            <Tab.Screen name="SignUp" component={SignUpStackScreen} />
            <Tab.Screen name="Ajustes" component={SettingStackScreen}  options={{
            tabBarButton: () => null,
            tabBarStyle: {
            display: 'none',
          },
        }}  />
            <Tab.Screen name="HomePage" component={HomePageStackScreen} options={{
            tabBarButton: () => null,
            tabBarStyle: {
            display: 'none',
          },
        }} />
         <Tab.Screen name="ProductsView" component={ProductsView} options={{
                tabBarButton: () => null,
                tabBarStyle: {
                display: 'none',
                },
            }} 
            />
            <Tab.Screen name="DetailsPro" component={DetailsPro} options={{
            tabBarButton: () => null,
            tabBarStyle: {
            display: 'none',
          },
        }}/>
        {/* <Tab.Screen name="ProductsView" component={ProductsViewStackScreen} options={{
            tabBarButton: () => null,
            tabBarStyle: {
            display: 'none',
          },
        }} /> */}
        </Tab.Navigator>


    </NavigationContainer>
)};

export default Routes;