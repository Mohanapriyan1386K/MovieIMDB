import React from "react";
import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { images } from "@/constants/images";

const ProfileScreen = () => {
  return (
    <ScrollView className="flex-1 bg-black ">
      {/* Header */}
       <Image source={images.bg} className="absolute w-full" />
      <View className="items-center mt-4">
        <Image
          source={images.mohan}
          className="w-24 h-24 rounded-full mt-10"
        />
        <Text className="text-xl font-bold mt-3">My headshot</Text>
        <Text className="text-gray-500">Your Profile:</Text>
      </View>
    
      {/* Card Section */}
      <View className="bg-white rounded-2xl mt-6 p-5 shadow-lg m-5">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-600 font-semibold">Mohana Priyan:</Text>
          <View className="flex-row items-center gap-2">
            <Ionicons name="at" size={18} color="#555" />
          </View>
        </View>

        <View className="border-t border-gray-200 pt-4 mb-4 ">
          <Text className="text-gray-600">Email Account</Text>
          <Text className="text-lg font-bold text-black">mohanapriyan1386@gmail.com</Text>
        </View>

        <View className="border-t border-gray-200 pt-4">
          <Text className="text-gray-600">Phone</Text>
          <Text className="text-lg font-bold text-black">8526716559</Text>
        </View>
      </View>

      {/* Bottom Actions */}
      <View className="bg-white rounded-2xl m-5 p-4 shadow-sm flex-row justify-around">
        <View className="items-center">
          <Ionicons name="call" size={24}  />
          <Text className="text-xs text-gray-600 mt-1">Phone</Text>
        </View>
        <View className="items-center">
          <MaterialIcons name="title" size={24}  />
          <Text className="text-xs text-gray-600 mt-1">Title</Text>
        </View>
        <View className="items-center">
          <FontAwesome name="envelope" size={24}  />
          <Text className="text-xs text-gray-600 mt-1">Email’s Phone</Text>
        </View>
        <View className="items-center">
          <Ionicons name="key" size={24} />
          <Text className="text-xs text-gray-600 mt-1">Key Word</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
