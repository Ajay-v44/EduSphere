import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Images from '@/constants/Images';
import * as ImagePicker from 'expo-image-picker';

const CreatePosts = () => {
    const [image, setImage] = useState<string | null>(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    const CreatePost = () => {
        try {
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View className='m-5'>
            <View className='flex justify-center items-center'>
                <Text className='text-white text-2xl'>CreatePosts</Text>
                <View className='mt-5 w-full flex justify-between items-center gap-4'>
                    <TextInput className='bg-white text-black rounded-md border-2 border-red-100 w-full' placeholder='Enter Title' />
                    <TextInput className='bg-white text-black rounded-md border-2 border-red-100 w-full' placeholder='Enter short dsecription' />
                </View>
            </View>
            <View>
                <TextInput
                    multiline={true}
                    numberOfLines={14}
                    placeholder="Enter what's on your mind."
                    style={styles.textArea}
                    textAlignVertical="top"
                />
                <TextInput
                    multiline={true}
                    numberOfLines={14}
                    placeholder="Enter what's on your mind."
                    style={styles.textArea}
                    textAlignVertical="top"
                />
            </View>
            <TouchableOpacity onPress={pickImage} className='flex justify-center items-center mt-3 bg-white rounded-md'>
                <Image source={{ uri: image ? image : Images.ImageUrl }} width={150} height={150} />
            </TouchableOpacity >
            <TouchableOpacity onPress={CreatePost} className='bg-green-300 mt-2 h-20 flex justify-center items-center rounded-lg border-2 border-white'>
                <Text className='text-center text-white font-bold'>Create Post</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: "100%"
    },
    textArea: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#ffcccc',
        padding: 10,
        fontSize: 16,
        height: 200, // Explicit height
        marginTop: 5
    },
});
export default CreatePosts