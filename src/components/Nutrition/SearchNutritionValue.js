import axios from 'axios';
import { useState, useEffect } from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import { StyledButton, ResultsArea, ResultItem } from './StyledComponents';
import { NutritionsPageStyled, FormStyled } from './StyledComponents';
import RecipeDetals from './RecipeDetals';
import { useLocation } from 'react-router-dom';

const DUMMY_DATA = [
  {
    id: 4748,
    title: 'Grilled Salmon with Roasted Corn Relish',
    image: 'https://spoonacular.com/recipeImages/4748-312x231.jpg',
    imageType: 'jpg',
    calories: 310,
    protein: '36g',
    fat: '12g',
    carbs: '16g',
  },
  {
    id: 5935,
    title: 'Roast Shrimp With Fennel, Bacon & Orange',
    image: 'https://spoonacular.com/recipeImages/5935-312x231.jpg',
    imageType: 'jpg',
    calories: 260,
    protein: '30g',
    fat: '12g',
    carbs: '7g',
  },
  {
    id: 12533,
    title: 'Sausage And Chicken Jambalaya',
    image: 'https://spoonacular.com/recipeImages/12533-312x231.jpg',
    imageType: 'jpg',
    calories: 324,
    protein: '26g',
    fat: '10g',
    carbs: '31g',
  },
  {
    id: 695218,
    title: 'Apple-&-Fennel Roasted Pork Tenderloin',
    image: 'https://spoonacular.com/recipeImages/695218-312x231.jpg',
    imageType: 'jpg',
    calories: 244,
    protein: '25g',
    fat: '6g',
    carbs: '22g',
  },
  {
    id: 707751,
    title: 'Jasmine Rice-Stuffed Peppers',
    image: 'https://spoonacular.com/recipeImages/707751-312x231.jpg',
    imageType: 'jpg',
    calories: 441,
    protein: '35g',
    fat: '18g',
    carbs: '36g',
  },
  {
    id: 707890,
    title: 'Cherry, Cashew, and Pork Sandwich',
    image: 'https://spoonacular.com/recipeImages/707890-312x231.jpg',
    imageType: 'jpg',
    calories: 327,
    protein: '22g',
    fat: '9g',
    carbs: '40g',
  },
  {
    id: 717910,
    title: 'Slow Cooker Coconut Lemon Chicken',
    image: 'https://spoonacular.com/recipeImages/717910-312x231.jpg',
    imageType: 'jpg',
    calories: 316,
    protein: '37g',
    fat: '15g',
    carbs: '8g',
  },
  {
    id: 825820,
    title: 'Bacon Mushroom Stuffed Chicken',
    image: 'https://spoonacular.com/recipeImages/825820-312x231.jpg',
    imageType: 'jpg',
    calories: 448,
    protein: '41g',
    fat: '20g',
    carbs: '27g',
  },
  {
    id: 872915,
    title: 'Fiesta Chicken Pasta Bake',
    image: 'https://spoonacular.com/recipeImages/872915-312x231.jpg',
    imageType: 'jpg',
    calories: 424,
    protein: '25g',
    fat: '18g',
    carbs: '41g',
  },
  {
    id: 874765,
    title: 'Skinny Chicken & Broccoli Alfredo',
    image: 'https://spoonacular.com/recipeImages/874765-312x231.jpg',
    imageType: 'jpg',
    calories: 360,
    protein: '35g',
    fat: '17g',
    carbs: '17g',
  },
  {
    id: 1122249,
    title: 'Grilled Lamb Kebabs with Basil Tahini Sauce',
    image: 'https://spoonacular.com/recipeImages/1122249-312x231.jpg',
    imageType: 'jpg',
    calories: 435,
    protein: '22g',
    fat: '36g',
    carbs: '6g',
  },
];

const SearchNutritionValue = (props) => {
  const [results, setResults] = useState(DUMMY_DATA);
  const [loading, setLoading] = useState(false);
  const [nutritionVals, setNutritionVals] = useState({
    minProtein: 0,
    maxCals: 0,
    maxCarbs: 0,
  });
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeId, setRecipeId] = useState(0);

  const nutritionChangeHandler = (e) => {
    console.log(e.target.name);
    let temp = { ...nutritionVals };
    temp[e.target.name] = e.target.value;
    console.log(temp);
    setNutritionVals({ ...temp });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchByNutrition();
  };

  const fetchByNutrition = () => {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients',
      params: {
        limitLicense: 'false',
        minProtein: nutritionVals.minProtein,
        maxCalories: nutritionVals.maxCalories,
        offset: '0',
        maxCarbs: nutritionVals.maxCarbs,
        number: '5',
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_3,
        'X-RapidAPI-Host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log('response....');
        console.log(response.data);
        setLoading(false);
        setResults(response.data);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  };

  const recipeClickHandler = (id) => {
    setRecipeId(id);
    setShowRecipe(true);
  };

  let location = useLocation();
  let state;

  useEffect(() => {
    state = location.state;
    if (state !== null) {
      setRecipeId(state.id);
      setShowRecipe(true);
      state = null;
    }
  }, []);

  if (showRecipe) {
    return (
      <>
        <RecipeDetals id={recipeId} />

        <StyledButton onClick={() => setShowRecipe(false)}>
          Back To All Results
        </StyledButton>
      </>
    );
  }

  return (
    <NutritionsPageStyled>
      <p>Search for recipes by nutrition content</p>
      <FormStyled name="byNutrition" onSubmit={submitHandler}>
        <label>Minimum Protein in grams:</label>
        <input
          name="minProtein"
          type="number"
          min="10"
          step="5"
          value={nutritionVals.minProtein}
          onChange={nutritionChangeHandler}
          required
        />
        <label>Maximum Calories:</label>
        <input
          name="maxCals"
          type="number"
          min="0"
          step="25"
          value={nutritionVals.maxCals}
          onChange={nutritionChangeHandler}
          required
        />
        <label>Maximum Carbs</label>
        <input
          name="maxCarbs"
          type="number"
          min="0"
          step="10"
          value={nutritionVals.maxCarbs}
          onChange={nutritionChangeHandler}
          required
        />

        <StyledButton>Submit</StyledButton>
      </FormStyled>
      <ResultsArea>
        {loading && <p>Loading...</p>}
        <br />
        {loading ? (
          <ClockLoader
            loading={loading}
            size={150}
            color="orange"
            display="flex"
          />
        ) : (
          results.length > 0 &&
          results.map((item) => (
            <ResultItem key={item.id}>
              <h3>{item.title}</h3>
              <img
                src={item.image}
                onClick={() => recipeClickHandler(item.id)}
              />

              <br />
              <span>{`${item.calories} calories ${item.protein} protein ${item.carbs} carbs ${item.fat} fat`}</span>

              <br />
              <br />
            </ResultItem>
          ))
        )}
      </ResultsArea>
    </NutritionsPageStyled>
  );
};

export default SearchNutritionValue;
