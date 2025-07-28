import "../../global.css";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { images } from "../../constants/images";
import { icons } from "../../constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFectch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MoviesCard from "@/components/MoviesCard";
import { treandingMovies } from "@/services/appwrite";
import TreandingMovieCard from "@/components/TreandingMovieCard";

export default function Index() {
  const router = useRouter();

  const {
    data: treandingmovie,
    loading: trandingloading,
    error: treandingerror,
  } = useFectch(treandingMovies);

  const {
    data: movies,
    loading: moviesloading,
    error: movieserror,
  } = useFectch(() =>
    fetchMovies({
      query: "",
    })
  );

  const renderitem = ({ item }: { item: any }) => {
    <View>
      <Text>{item.title}</Text>
    </View>;
  };

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className=" absolute w-full z-0 " />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={images.logos} className="w-[100px] h-[50px] mt-20 mx-auto" />
        {moviesloading || trandingloading ? (
          <View className="h-full flex justify-center">
            <ActivityIndicator size={40} />
          </View>
        ) : movieserror || treandingerror ? (
          <Text>Error:{movies?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/Search")}
              placeholder="search for a movie"
            />
            {treandingmovie && (
              <View>
                <View className="flex mb-5 mt-5 items-center justify-center">
                  <Text className="text-white text-2xl">Treanding Movies</Text>
                </View>
                <FlatList
                  data={treandingmovie}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                  renderItem={({ item, index }) => (
                    <TreandingMovieCard movie={item} index={index} />
                  )}
                />
              </View>
            )}

            <>
              <Text className="text-white mt-2 mb-2 text-center font-bold ">
                Most Popular Movie Latest
              </Text>
              <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,

                  marginBottom: 10,
                }}
                renderItem={({ item }) => <MoviesCard {...item} />}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
