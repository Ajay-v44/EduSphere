import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Login = () => {
    return (
        <View className='w-full h-full'>
            <View className='mt-20 m-5'>
                <Text className='text-5xl font-bold'>Log In</Text>
                <Text className='text-gray-400 font-light'>Enter Your Details to Login</Text>
            </View>
            <View className='m-5'>
                <View className='m-5'>
                    <View className='ml-5 '>
                        <MaterialCommunityIcons className=' relative top-20 right-10 h-20 w-10 text-center bg-red-300 pt-7' name="email-fast-outline" size={24} color="black" />
                        <TextInput
                            className='w-45 h-20 bg-violet-50'
                            placeholder='Enter Your Email'
                        />
                    </View>
                </View>
                <View className='m-5'>
                    <View className='ml-5 '>
                        <MaterialIcons className=' relative top-20 right-10 h-20 w-10 text-center bg-red-300 pt-7' name="password" size={24} color="black" />
                        <TextInput
                            className='w-45 h-20 bg-violet-50'
                            placeholder='Enter Your Password'
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View className='mt-10 flex items-center justify-center'>
                    <TouchableOpacity className='bg-violet-400 w-72  h-20 rounded-md flex items-center justify-center'>
                        <Text className=' text-white text-xl'>Login</Text>
                    </TouchableOpacity>
                </View>
                <View className='mt-3 flex flex-row justify-center'>
                    <Text className='text-center pr-3'>Dont have account ?</Text>
                    <TouchableOpacity ><Text className='underline'>Regiter</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login