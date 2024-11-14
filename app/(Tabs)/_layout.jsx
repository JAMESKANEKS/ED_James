import { Image, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }} // Use inline styles for width/height/tintColor
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon icon={icons.chat} color={color} />,
        }}
      />
      <Tabs.Screen
    name="home"
    options={{
      title: 'Home',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
        <TabIcon
          icon={icons.home}
          color={color}
          name="Home"
          focused={focused}
        />
      ),
    }}
  />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon icon={icons.profile} color={color} />,
        }}
      />
      <Tabs.Screen
        name="play"
        options={{
          title: 'Play',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabIcon icon={icons.console} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

