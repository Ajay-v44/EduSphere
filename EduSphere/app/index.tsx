import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const App = () => {
  const router = useRouter()
  return (
    <View className='flex justify-center items-center w-full h-full bg-black text-white'>
      <Text className='text-red-500' >App</Text>
      <TouchableOpacity onPress={() => {
        router.push("/authentication/login")
      }}>
        <Text className='text-white' >Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App