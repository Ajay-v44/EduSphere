import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import NavBar from '@/components/NavBar'
import PostCard from '@/components/PostCard'


const Home = () => {
    const items = {
        id: 1,
        tittle: "testing",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!",
        imageUrl: "https://smiletutor.sg/wp-content/uploads/2020/12/AdobeStock_292618444-scaled.jpeg"
    }
    return (
        <View style={{ backgroundColor: 'black', height: "100px" }}>
            <NavBar />
            <Text className="text-red-600 px-10 text-lg md:text-xl lg:text-2xl ">Posts</Text>
            <View style={{ flex: 1 ,flexDirection:"column",width:"100%",height:"100%"}}>
               
                    {/* {[1, 2, 3].map((item, index) => (
                        <PostCard key={index} items={item} />
                    ))} */}
                    <PostCard items={items} />
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