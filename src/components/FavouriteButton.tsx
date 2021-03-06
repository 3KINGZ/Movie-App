import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";

import { deleteFromBookmark, addToBookmark } from "../actions";

interface IFavouriteButton {
  movie: IMovie;
}

export const FavouriteButton = ({ movie }: IFavouriteButton) => {
  const { bookmarks } = useSelector((state: State) => state.bookmarks);
  const dispatch = useDispatch();

  const _deleteFromBookmark = () => {
    dispatch(deleteFromBookmark(movie.id));
  };

  const _addToBookmark = () => {
    dispatch(addToBookmark(movie));
  };

  return (
    <>
      {!bookmarks.find((bookmark: IMovie) => bookmark.id === movie.id) ? (
        <TouchableOpacity onPress={_addToBookmark}>
          <Icon name="heart" size={24} color="white" style={styles.addIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={_deleteFromBookmark}>
          <Icon name="heart" size={24} color="white" />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  addIcon: { opacity: 0.5 },
});
