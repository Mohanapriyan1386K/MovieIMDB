import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import MoviesCard from "@/components/MoviesCard";
import SearchBar from "@/components/SearchBar";

import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import { updateSarachCunt } from "@/services/appwrite";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Initially load trending movies
  const { data, loading, error, refetch, reset } = useFetch(
    () => fetchMovies({ query: searchQuery }),
    false
  );

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchQuery.trim()) {
        if (data && data.length > 0) {
          updateSarachCunt(searchQuery, data[0]);
        }
        refetch();
      } else {
        reset();
      }
    }, 1000); // 3-second debounce

    return () => clearTimeout(delay);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      {/* Background */}
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      {/* Movies List */}
      <FlatList
        data={data || []}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => <MoviesCard {...item} />}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          padding: 5,
          marginHorizontal: 10,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            {/* Logo */}
            <View className="w-full flex-row justify-center mt-16">
              <Image source={images.logos} className="w-[100px] h-[50px] mb-6" />
            </View>

            {/* Search Bar */}
            <View className="mx-5">
              <SearchBar
                placeholder="Search your Movies"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />

              {/* Loading State */}
              {loading && (
                <ActivityIndicator
                  size="large"
                  color="white"
                  style={{ marginTop: 10 }}
                />
              )}

              {/* Error State */}
              {error && (
                <Text className="text-white mt-2">
                  ❌ Movies not found. Try again.
                </Text>
              )}

              {/* Result Info */}
              {!loading && !error && searchQuery.trim() && data?.length > 0 && (
                <Text className="text-xl text-white mt-2">
                  Search results for{" "}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}
            </View>
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="flex-row justify-center mt-10">
              <Text className="text-gray-500">
                {searchQuery.trim() ? "NO MOVIES FOUND" : "SEARCH FOR MOVIES"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
