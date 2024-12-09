import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Images from '@/constants/Images';
import * as ImagePicker from 'expo-image-picker';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { uploadToCloudinary } from '@/helpers/uploadToCloudinary';
import { userStore } from '@/zustand/store';
import { auth, db } from '@/initialize-firebase';
import { router } from 'expo-router';
import { formatDate } from '@/helpers/getFormatedDate';

const CreatePosts = () => {
    const UserId = userStore((state: any) => (state.userId));
    const UserName = userStore((state: any) => (state.userName))
    const [image, setImage] = useState<string | any>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState({
        id: new Date().getTime().toString(),
        title: "",
        shortDescription: "",
        description1: "",
        description2: "",
        imageUrl: ""
    })
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    };
    const CreatePost = async () => {
        try {
            if (data.title === "" || data.shortDescription == "" || data.description1 == "" || image === null) {
                return alert('Required Data Is Missing')
            }
            setLoading(true)
            const response = await uploadToCloudinary(image);
            const date = formatDate()
            const Data = {
                ...data,
                imageUrl: response,
                userId: UserId,
                createdBy: UserName,
                createdAt: date

            }
            await addDoc(collection(db, "posts"), Data);
            setData({
                id: new Date().getTime().toString(),
                title: "",
                shortDescription: "",
                description1: "",
                description2: "",
                imageUrl: "",
            })
            setImage(null)
            setLoading(false)
            router.push("/(tabs)/home")
            ToastAndroid.show('Post Created Sucessfully', ToastAndroid.LONG)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <View className='m-5'>
            <View className='flex justify-center items-center'>
                <Text className='text-white text-2xl'>CreatePosts</Text>
                <View className='mt-5 w-full flex justify-between items-center gap-4'>
                    <TextInput className='bg-white text-black rounded-md border-2 border-red-100 w-full' placeholder='Enter Title' onChangeText={(value) => {
                        setData({
                            ...data,
                            title: value
                        })
                    }} value={data.title} />
                    <TextInput className='bg-white text-black rounded-md border-2 border-red-100 w-full' placeholder='Enter short dsecription' onChangeText={(value) => {
                        setData({
                            ...data,
                            shortDescription: value
                        })
                    }} value={data.shortDescription} />
                </View>
            </View>
            <View>
                <TextInput
                    multiline={true}
                    numberOfLines={14}
                    placeholder="Enter what's on your mind."
                    style={styles.textArea}
                    textAlignVertical="top"
                    onChangeText={(value) => {
                        setData({
                            ...data,
                            description1: value
                        })
                    }} value={data.description1}
                />
                <TextInput
                    multiline={true}
                    numberOfLines={14}
                    placeholder="Enter what's on your mind."
                    style={styles.textArea}
                    textAlignVertical="top"
                    onChangeText={(value) => {
                        setData({
                            ...data,
                            description2: value
                        })
                    }} value={data.description2}
                />
            </View>
            <TouchableOpacity onPress={pickImage} className='flex justify-center items-center mt-3 bg-white rounded-md'>
                <Image source={{ uri: image ? image.uri : Images.ImageUrl }} width={150} height={150} />
            </TouchableOpacity >
            <TouchableOpacity onPress={CreatePost} className='bg-green-300 mt-2 h-20 flex justify-center items-center rounded-lg border-2 border-white' disabled={loading}>
                {loading ? <ActivityIndicator /> :
                    <Text className='text-center text-white font-bold'>Create Post</Text>
                }
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