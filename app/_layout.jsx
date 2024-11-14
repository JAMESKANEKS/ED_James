import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync(); // Ensure the splash screen does not auto-hide

const MainLayout = () => {
  // Load custom fonts
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-BlackItalic": require("../assets/fonts/Poppins-BlackItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded
    }
  }, [fontsLoaded, error]);

  // Show nothing while fonts are loading
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      {/* Define the stack screens */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Slot /> {/* This renders the appropriate screen depending on the route */}
    </Stack>
  );
};

export default MainLayout;