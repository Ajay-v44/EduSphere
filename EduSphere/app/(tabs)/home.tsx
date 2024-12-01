import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import NavBar from '@/components/NavBar'
import PostCard from '@/components/PostCard'


const Home = () => {
    const items = [{
        id: 1,
        tittle: "testing",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!",
        imageUrl: "https://smiletutor.sg/wp-content/uploads/2020/12/AdobeStock_292618444-scaled.jpeg"
    }, {
        id: 2,
        tittle: "testing",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!",
        imageUrl: "https://smiletutor.sg/wp-content/uploads/2020/12/AdobeStock_292618444-scaled.jpeg"
    }, {
        id: 3,
        tittle: "testing",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!",
        imageUrl: "https://smiletutor.sg/wp-content/uploads/2020/12/AdobeStock_292618444-scaled.jpeg"
    }, {
        id: 4,
        tittle: "testing",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!",
        imageUrl: "https://smiletutor.sg/wp-content/uploads/2020/12/AdobeStock_292618444-scaled.jpeg"
    }, {
        id: 5,
        tittle: "testing",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!",
        imageUrl: "https://smiletutor.sg/wp-content/uploads/2020/12/AdobeStock_292618444-scaled.jpeg"
    }]
    return (
        <View className='w-full h-full bg-black'>
            <NavBar />
            <Text className="text-red-600 px-10 text-2xl md:text-3xl lg:text-4xl ">Posts</Text>
            <View className=' mt-5 flex justify-center items-center'>
                <FlatList
                    data={items}
                    renderItem={({ item }) => {
                        return <PostCard key={item.id} items={item} />
                    }}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 10, // Add some padding for better spacing
        gap: 10,
        width: "100%",
        height: "100%"
    },
});