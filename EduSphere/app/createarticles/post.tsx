import { View, Text } from 'react-native'
import React from 'react'
import NavBar from '@/components/NavBar'
import CreatePosts from '@/components/CreatePosts'

const CreatePost = () => {
    return (
        <View className='bg-black w-full h-full'>
            <NavBar />
            <CreatePosts />
        </View>
    )
}

export default CreatePost