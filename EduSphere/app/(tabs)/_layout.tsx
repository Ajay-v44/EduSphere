import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Colors from '@/constants/Colors';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.WHITE,
        tabBarStyle: {
          backgroundColor: Colors.BLACK, // Set your custom color here
        }
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-circle-outline" size={30} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" size={24} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
