import { Tabs } from 'expo-router';
import {
  CalendarCheck2,
  LayoutDashboard,
  ListCheck,
  User,
} from 'lucide-react-native';
import React from 'react';

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6200ee', // Color of the active icon
        tabBarInactiveTintColor: '#858585', // Color of inactive icons
        tabBarStyle: {
          backgroundColor: '#891C41', // Background color of the bar
          height: 70, // Total height of the bar
          paddingBottom: 10, // Space at the bottom (useful for labels)
          paddingTop: 10,
          borderRadius: 20,
          position: 'absolute',
          marginLeft: 15,
          marginRight: 15,
          bottom: 20,
          elevation: 5, // Shadow for Android
          shadowColor: '#000', // Shadow for iOS
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Dashboard',
          tabBarActiveTintColor: '#B9A9A9',
          tabBarIcon: ({ color, size }) => <LayoutDashboard color={color} />,
        }}
      />
      <Tabs.Screen
        name="habits"
        options={{
          headerShown: false,
          title: 'Habits',
          tabBarActiveTintColor: '#B9A9A9',
          tabBarIcon: ({ color, size }) => <ListCheck color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          headerShown: false,
          title: 'Calendar',
          tabBarActiveTintColor: '#B9A9A9',
          tabBarIcon: ({ color, size }) => <CalendarCheck2 color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarActiveTintColor: '#B9A9A9',
          tabBarIcon: ({ color, size }) => <User color={color} />,
        }}
      />
    </Tabs>
  );
}
