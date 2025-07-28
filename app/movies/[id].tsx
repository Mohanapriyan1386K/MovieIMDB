import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchmoviesdeatils } from "@/services/api";
import { icons } from "@/constants/icons";

interface Movieifoprops {
  label: string;
  value?: any;
}

const Movieinfo = ({ label, value }: Movieifoprops) => (
  <View className="flex-col items-start justify-center mt-5 ">
    <Text className="text-light-200 font-normal text-sm">{label}</Text>
    <Text className="text-light-100 font-bold text-sm mt-2">
      {value || "NA"}
    </Text>
  </View>
);

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const {
    data: movie,
    loading,
    error,
  } = useFetch(() => fetchmoviesdeatils(id as string));

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (!movie || error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-lg">
          Failed to load movie details.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Image
          className="w-full h-[500px] object-contain"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
        />
        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white text-xl">{movie?.title}</Text>
          <View className="flex-row gap-3">
            <Text className="text-gray-500">
              {movie.release_date.split("-")[0]}
            </Text>
            <Text className="text-gray-500">{movie.runtime} min</Text>
          </View>
          <View className="bg-dark-100 flex-row justify-center items-center mt-2 gap-2 p-2 ">
            <Image source={icons.star} />
            <Text className="text-white">
              {Math.round(movie.vote_average)}/10{" "}
            </Text>
            <Text className="text-gray-500">{`(${movie.vote_count} votes)`}</Text>
          </View>
          <Movieinfo label="overview" value={movie.overview} />
          <View className="mt-2">
            <Text className="text-white text-xl">Generes</Text>
            <View className="flex flex-row gap-2 mt-2">
              {movie.genres.map((g) => (
                <Text className="bg-dark-100 text-gray-400 p-2">{g.name}</Text>
              ))}
            </View>
          </View>
          <View className="flex-row w-full justify-between">
            <Movieinfo label="Realae date" value={movie.release_date} />
            <Movieinfo label="Status" />
          </View>

          <View className="mt-2">
            <Text className="text-white text-xl">Language</Text>
            <View className="flex flex-row gap-2 mt-2">
              {movie.spoken_languages.map((g) => (
                <Text className="bg-dark-100 text-gray-400 p-2">{g.name}</Text>
              ))}
            </View>
            <View className="bg-dark-200 w-[350px] flex-col mt-2 p-2 ">
              <Text className="text-gray-500 text-xl mt-2">{`Total Budget : $${movie.budget}`}</Text>
              <Text className="text-gray-500 text-xl mt-2">{`Total Revune : $${movie.revenue}`}</Text>
              <Text className="text-gray-500 text-xl mt-2">{`Popularatiy : ${movie.popularity}`}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
