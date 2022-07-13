import { StyledButton } from '../Nutrition/StyledComponents'
import { useDispatch, useSelector } from "react-redux"
import { favoritesActions } from "../../store/store"

import Exercises from "./Exercises";

const ExerciseList = (props) => {
  const dispatch = useDispatch()
  const addItem = (id, title) => {
    dispatch(favoritesActions.addToFavorites({ category: 'exercise', id: props.exercise.id, title: props.exercise.name}))
}
  return (
    <div>
      <Exercises
        key={props.exercise.id}
        name={props.exercise.name}
        target={props.exercise.target}
        bodypart={props.exercise.bodypart}
        gifUrl={props.exercise.gifUrl}
      />
      <StyledButton onClick={addItem}>Add To Favorites</StyledButton>
    </div>
  );
};

export default ExerciseList;
