import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { auth } from '@/initialize-firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState<string | null>()
    const [password, setPassword] = useState<string | null>();
    const [loading, setLoading] = useState<boolean>(false)
    const handleLogin = async () => {
        try {
            setLoading(true)
            if (email && password !== null) {
                const result = await signInWithEmailAndPassword(auth, email, String(password));
                setEmail(null)
                setPassword(null)
                ToastAndroid.show('Logged In Successfully.', ToastAndroid.LONG)
                router.navigate("./(tabs)/home")
            } else {
                ToastAndroid.show('Null Values Are Not Allowed. ', ToastAndroid.LONG)
            }
        } catch (err: any) {
            alert(JSON.stringify(err?.code))
        } finally {
            setLoading(false)
        }
    }
    return (
        <View className='w-full h-full bg-black'>
            <View className='mt-20 m-5'>
                <Text className='text-5xl font-bold text-white'>Log In</Text>
                <Text className='text-gray-400 font-light'>Enter Your Details to Login</Text>
            </View>
            <View className='m-5'>
                <View className='m-5'>
                    <View className='ml-5 '>
                        <MaterialCommunityIcons className=' relative top-20 right-10 h-20 w-10 text-center bg-red-300 pt-7 rounded-l-md' name="email-fast-outline" size={24} color="black" />
                        <TextInput
                            value={String(email)}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            className='w-45 h-20 bg-violet-50 rounded-r-md'
                            placeholder='Enter Your Email'
                        />
                    </View>
                </View>
                <View className='m-5'>
                    <View className='ml-5 '>
                        <MaterialIcons className=' relative top-20 right-10 h-20 w-10 text-center bg-red-300 pt-7 rounded-l-md' name="password" size={24} color="black" />
                        <TextInput
                            value={String(password)}
                            onChangeText={setPassword}
                            className='w-45 h-20 bg-violet-50 rounded-r-md'
                            placeholder='Enter Your Password'
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View className='mt-10 flex items-center justify-center'>
                    <TouchableOpacity onPress={handleLogin} className='bg-violet-400 w-72  h-20 rounded-md flex items-center justify-center'>
                        <Text className=' text-white text-xl'> {loading ? <ActivityIndicator /> : 'Login'}</Text>
                    </TouchableOpacity>
                </View>
                <View className='mt-3 flex flex-row justify-center'>
                    <Text className='text-center pr-3 text-gray-400'>Dont have account ?</Text>
                    <TouchableOpacity onPress={() => {
                        router.push("/authentication/register")
                    }} ><Text className='underline text-blue-200'>Regiter</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login