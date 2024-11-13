import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Redirect, useRouter } from 'expo-router'
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { auth } from '../initialize-firebase'
import NavBar from '@/components/NavBar';

const App = () => {
  const router = useRouter()
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/authentication/login")
    } else {
      router.push('./(tabs)/home')
    }

  });
  return (
    <View className=' w-full h-full text-white'>
    </View>
  )
}

export default App