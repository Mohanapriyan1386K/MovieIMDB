import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { TrendingMovie } from "../Interfaces/Interface";
import MaskedView from "@react-native-masked-view/masked-view";
import { images } from "@/constants/images";

interface Props {
  movie: TrendingMovie;
  index: number;
}

const TrendingMovieCard = ({ movie, index }: Props) => {
  const { poster_url, title, movie_id } = movie;
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="w-[140px]">
        <Image
          source={{
            uri: poster_url
              ? `https://image.tmdb.org/t/p/w500${poster_url}`
              : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute  bottom-9 -left-0 rounded-full z-10">
          <Text className="text-white  text-5xl">{index+1}</Text>
        </View>

        <Text className="text-white mt-1" numberOfLines={1}>
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingMovieCard;
