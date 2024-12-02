import { View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import NavBar from '@/components/NavBar';
import Images from '@/constants/Images';
const Post = () => {
    const { id } = useLocalSearchParams();
    const data = {
        id: 1,
        tittle: "testing",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!",
        paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!",
        paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!",
        imageUrl: "https://smiletutor.sg/wp-content/uploads/2020/12/AdobeStock_292618444-scaled.jpeg",
        imageUrl2: null

    }
    return (
        <ScrollView className="bg-black w-full h-full">
            <NavBar />
            <View className="m-5">
                <Text className="text-white text-center capitalize text-3xl">
                    {data.tittle}
                </Text>
                <Text className="text-justify text-white p-3 mt-2 text-lg leading-6">
                    {data.shortDescription}
                </Text>
                <Text className="text-justify text-white p-3 mt-2 italic">
                    {data.paragraph1}
                </Text>
                <Text className="text-justify text-white p-3 mt-2 italic">
                    {data.paragraph2}
                </Text>
            </View>
            {/* Horizontal Scroll for Images */}
            <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row' }}>
                <Image
                    source={{ uri: `${data.imageUrl}` }}
                    style={{ width: 150, height: 150 }}
                    className="mx-10 my-5 rounded-md object-fill"
                />
                <Image
                    source={{ uri: `${data.imageUrl}` }}
                    style={{ width: 150, height: 150 }}
                    className="mx-10 my-5 rounded-md object-fill"
                />
                <Image
                    source={{ uri: data.imageUrl2 ? `${data.imageUrl}` : `${Images.ImageUrl}` }}
                    style={{ width: 150, height: 150 }}
                    className="mx-10 my-5 rounded-md object-fill"
                />
            </ScrollView>
        </ScrollView>
    )
}

export default Post