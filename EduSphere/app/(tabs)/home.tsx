import { View, Text, FlatList } from 'react-native'
import React from 'react'
import NavBar from '@/components/NavBar'

const Home = () => {
    return (
        <FlatList
       className='w-full h-full bg-black'
            data={[1]}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View >
                    <NavBar />
                    <Text className="text-red-600">Tes</Text>
                </View>
            )}
        />
    )
}

export default Home