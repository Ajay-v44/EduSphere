import { View, Text, FlatList } from 'react-native'
import React from 'react'
import NavBar from '@/components/NavBar'
import PostCard from '@/components/PostCard'


const Home = () => {
    const items={
        id: 1,
        tittle: "testing",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores cum dicta reiciendis iste sint voluptas ab fuga veritatis aperiam. Tempore provident nam quaerat sed itaque error ducimus vel ea!",
        imageUrl: "https://smiletutor.sg/wp-content/uploads/2020/12/AdobeStock_292618444-scaled.jpeg"
    }
    return (
        <FlatList
            className='w-full h-full bg-black'
            data={[1]}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View >
                    <NavBar />
                    <Text className="text-red-600 px-10 text-lg md:text-xl lg:text-2xl ">Posts</Text>
                    <View className='m-5 md:m-10 lg:m-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 items-center '>
                       {[1,2,3].map((item)=>{
                        return  <PostCard  items={items} />
                       })}
                    </View>
                </View>
            )}
        />
    )
}

export default Home