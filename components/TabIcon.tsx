import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import {images} from "../constants/images"

const TabIcon = ({focused,title,icon}:any) => {
  if(focused){
      return (
       <ImageBackground className='flex-1 gap-2 flex-row justify-center items-center min-w-[100px] min-h-[55px] mt-4  w-full overflow-hidden rounded-full' source={images.highlight} >
         <Image  source={icon} tintColor="#151312" className='size-5'/>
         <Text>{title}</Text>
       </ImageBackground>
    )
  }
  return(
        <View className=' flex-1 flex-row justify-center items-center mt-4'>
             <Image source={icon} tintColor="gray" />
        </View>
    )
}

export default TabIcon