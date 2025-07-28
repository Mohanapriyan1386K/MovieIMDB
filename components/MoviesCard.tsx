import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Movie } from "../Interfaces/Interface";
import { Link } from "expo-router";
import {icons} from "../constants/icons"

const MoviesCard = ({
  id,
  original_language,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  vote_count,
}: Movie) => {
  return (
      <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className="w-[30%]">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
            }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
          />
          <Text style={{fontSize:12}} numberOfLines={1} className="text-white">{title}</Text>
          <View className="flex-row">
             <Image className="size-4" source={icons.star}/>
             <Text className="text-white text-xs">{Math.round(vote_average/2)}</Text>
          </View>
          <View className="flex-row items-center justify-between">
               <Text className="text-xs text-light-300 mt-1 ">{release_date?.split("-")[0]}</Text>
          </View>
        </TouchableOpacity>
      </Link>
  );
};

export default MoviesCard;
