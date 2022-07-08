import axios from "axios"
import { useState } from 'react'
import styled from 'styled-components'
import ClockLoader from 'react-spinners/ClockLoader';
import { StyledButton, ResultsArea, ResultItem } from './StyledComponents'
const FormStyled = styled.form`
  padding-top: 5rem;
  margin: auto;
  position: relative;
  width: 25%;

  .search-icon {
    position: absolute;
    top: 6.1rem;
    left: 1.6rem;
    font-size: 2rem;
    color: #999999;
    margin-right: 2rem;
    font-weight: 100;
  }

  input {
    border: 1px solid #999999;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    color: #999999;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;


const DUMMY_RECIPE_INFO = {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 23,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 0,
    "healthScore": 13,
    "creditsText": "My Recipes",
    "sourceName": "My Recipes",
    "pricePerServing": 441.78,
    "extendedIngredients": [
        {
            "id": 20028,
            "aisle": "Pasta and Rice;Ethnic Foods;Health Foods",
            "image": "couscous-cooked.jpg",
            "consistency": "SOLID",
            "name": "couscous",
            "nameClean": "couscous",
            "original": "1 cup couscous",
            "originalName": "couscous",
            "amount": 1,
            "unit": "cup",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "cup",
                    "unitLong": "cup"
                },
                "metric": {
                    "amount": 236.588,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 6984,
            "aisle": "Canned and Jarred",
            "image": "chicken-broth.png",
            "consistency": "LIQUID",
            "name": "fat-skimmed chicken broth",
            "nameClean": "fat free chicken broth",
            "original": "2 cups fat-skimmed chicken broth",
            "originalName": "fat-skimmed chicken broth",
            "amount": 2,
            "unit": "cups",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 2,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 473.176,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 11297,
            "aisle": "Produce;Spices and Seasonings",
            "image": "parsley.jpg",
            "consistency": "SOLID",
            "name": "fresh parsley",
            "nameClean": "parsley",
            "original": "1/2 cup each coarsely chopped parsley, fresh mint leaves (or 2 tablespoons dried mint), and fresh dill (or 2 tablespoons dried dill)",
            "originalName": "each coarsely chopped parsley, fresh mint leaves (or 2 tablespoons dried mint), and fresh dill (or 2 tablespoons dried dill)",
            "amount": 0.5,
            "unit": "cup",
            "meta": [
                "dried",
                "fresh",
                "coarsely chopped",
                "(or 2 tablespoons mint)",
                "(or 2 tablespoons dill)"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 1002014,
            "aisle": "Spices and Seasonings",
            "image": "ground-cumin.jpg",
            "consistency": "SOLID",
            "name": "ground cumin",
            "nameClean": "cumin",
            "original": "1/2 teaspoon ground cumin",
            "originalName": "ground cumin",
            "amount": 0.5,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 0.5,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        },
        {
            "id": 11282,
            "aisle": "Produce",
            "image": "brown-onion.png",
            "consistency": "SOLID",
            "name": "onion",
            "nameClean": "onion",
            "original": "1 onion (8 oz.), peeled and finely chopped",
            "originalName": "onion , peeled and finely chopped",
            "amount": 8,
            "unit": "oz",
            "meta": [
                "peeled",
                "finely chopped"
            ],
            "measures": {
                "us": {
                    "amount": 8,
                    "unitShort": "oz",
                    "unitLong": "ounces"
                },
                "metric": {
                    "amount": 226.796,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 11304,
            "aisle": "Produce",
            "image": "peas.jpg",
            "consistency": "SOLID",
            "name": "petite peas",
            "nameClean": "petite peas",
            "original": "1 cup frozen petite peas",
            "originalName": "frozen petite peas",
            "amount": 1,
            "unit": "cup",
            "meta": [
                "frozen"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "cup",
                    "unitLong": "cup"
                },
                "metric": {
                    "amount": 236.588,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 12147,
            "aisle": "Produce;Baking",
            "image": "pine-nuts.png",
            "consistency": "SOLID",
            "name": "pine nuts",
            "nameClean": "pine nuts",
            "original": "1/4 cup pine nuts",
            "originalName": "pine nuts",
            "amount": 0.25,
            "unit": "cup",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 59.147,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 1007063,
            "aisle": "Meat",
            "image": "raw-pork-sausage.png",
            "consistency": "SOLID",
            "name": "pork sausages",
            "nameClean": "pork sausage",
            "original": "2 pork Italian sausages (about 8 oz. total), casings removed",
            "originalName": "pork Italian sausages (about 8 oz. total), casings removed",
            "amount": 2,
            "unit": "",
            "meta": [
                "italian",
                "( 8 oz. total)"
            ],
            "measures": {
                "us": {
                    "amount": 2,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 2,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 17029,
            "aisle": "Meat",
            "image": "racks-of-lamb.jpg",
            "consistency": "SOLID",
            "name": "racks of lamb",
            "nameClean": "rack of lamb",
            "original": "2 lamb rib racks, 8 ribs each (4 1/2 to 5 lb. total; see notes)",
            "originalName": "lamb rib racks, 8 ribs each (4 1/2 to 5 lb. total; see notes)",
            "amount": 2,
            "unit": "",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 2,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 2,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 1102047,
            "aisle": "Spices and Seasonings",
            "image": "salt-and-pepper.jpg",
            "consistency": "SOLID",
            "name": "salt and pepper",
            "nameClean": "salt and pepper",
            "original": "About 1/2 teaspoon each salt and pepper",
            "originalName": "About each salt and pepper",
            "amount": 0.5,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 0.5,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        }
    ],
    "id": 15955,
    "title": "Crown Lamb Rack with Green Herb Couscous",
    "readyInMinutes": 45,
    "servings": 8,
    "sourceUrl": "http://www.myrecipes.com/recipe/crown-lamb-rack-with-green-herb-couscous-10000000682605/",
    "openLicense": -1,
    "image": "https://spoonacular.com/recipeImages/15955-556x370.jpg",
    "imageType": "jpg",
    "summary": "Crown Lamb Rack with Green Herb Couscous might be just the main course you are searching for. This dairy free recipe serves 8 and costs <b>$4.42 per serving</b>. One portion of this dish contains approximately <b>27g of protein</b>, <b>53g of fat</b>, and a total of <b>687 calories</b>. A mixture of salt and pepper, fat-skimmed chicken broth, pine nuts, and a handful of other ingredients are all it takes to make this recipe so delicious. To use up the pine nuts you could follow this main course with the <a href=\"https://spoonacular.com/recipes/pear-cake-with-pine-nuts-167404\">Pear Cake with Pine Nuts</a> as a dessert. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 49%</b>. This score is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/rack-of-lamb-with-herb-crust-15733\">Rack Of Lamb With Herb Crust</a>, <a href=\"https://spoonacular.com/recipes/herb-crusted-rack-of-lamb-97326\">Herb-Crusted Rack of Lamb</a>, and <a href=\"https://spoonacular.com/recipes/herb-crusted-rack-of-lamb-15722\">Herb-crusted Rack Of Lamb</a>.",
    "cuisines": [],
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "diets": [
        "dairy free"
    ],
    "occasions": [],
    "winePairing": {},
    "instructions": "Rinse lamb roast, pat dry, and set on a metal rack in a shallow pan (at least 10 in. square). Mix ground cumin and 1/2 teaspoon each salt and pepper; rub onto roast, inside and out.                                                                                                 Bake lamb in a 450 regular or convection oven until a thermometer inserted horizontally through roast into center of thickest part reads 145 to 150 for rare, 35 to 40 minutes, or 155 for medium-rare, 40 to 45 minutes. If bone tips start to scorch, drape them with foil.                                                                                                 Meanwhile, in a 10- to 12-inch frying pan over medium-high heat, shake pine nuts frequently until lightly browned, about 3 minutes; pour into a small bowl.                                                                                                 To pan, add onion and sausages; stir frequently over high heat, breaking meat into small pieces, until lightly browned, about 10 minutes. Add broth and cover; when boiling, stir in peas and cover. When boiling again, stir in couscous, cover, and remove from heat. Let stand in a warm place 10 to 20 minutes.                                                                                                 As lamb roasts, in a food processor or with a knife, finely chop parsley, mint, and dill (or crumble dried herbs) and mix.                                                                                                 Transfer roast to a platter; keeping it warm, let rest 5 to 10 minutes. Stir herb mixture into hot couscous; fill center of roast with some of the couscous and spoon remainder around the meat. Sprinkle couscous with pine nuts. Cut lamb between ribs and serve chops with couscous. Add more salt and pepper to taste.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Rinse lamb roast, pat dry, and set on a metal rack in a shallow pan (at least 10 in. square).",
                    "ingredients": [
                        {
                            "id": 10017224,
                            "name": "lamb",
                            "localizedName": "lamb",
                            "image": "lamb-shanks.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404645,
                            "name": "frying pan",
                            "localizedName": "frying pan",
                            "image": "pan.png"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Mix ground cumin and 1/2 teaspoon each salt and pepper; rub onto roast, inside and out.",
                    "ingredients": [
                        {
                            "id": 1102047,
                            "name": "salt and pepper",
                            "localizedName": "salt and pepper",
                            "image": "salt-and-pepper.jpg"
                        },
                        {
                            "id": 1012014,
                            "name": "ground cumin",
                            "localizedName": "ground cumin",
                            "image": "ground-cumin.jpg"
                        },
                        {
                            "id": 1012034,
                            "name": "dry seasoning rub",
                            "localizedName": "dry seasoning rub",
                            "image": "seasoning.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 3,
                    "step": "Bake lamb in a 450 regular or convection oven until a thermometer inserted horizontally through roast into center of thickest part reads 145 to 150 for rare, 35 to 40 minutes, or 155 for medium-rare, 40 to 45 minutes. If bone tips start to scorch, drape them with foil.",
                    "ingredients": [
                        {
                            "id": 0,
                            "name": "bone",
                            "localizedName": "bone",
                            "image": ""
                        },
                        {
                            "id": 10017224,
                            "name": "lamb",
                            "localizedName": "lamb",
                            "image": "lamb-shanks.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404789,
                            "name": "kitchen thermometer",
                            "localizedName": "kitchen thermometer",
                            "image": "food-thermometer.jpg"
                        },
                        {
                            "id": 404784,
                            "name": "oven",
                            "localizedName": "oven",
                            "image": "oven.jpg"
                        },
                        {
                            "id": 404765,
                            "name": "aluminum foil",
                            "localizedName": "aluminum foil",
                            "image": "aluminum-foil.png"
                        }
                    ],
                    "length": {
                        "number": 75,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 4,
                    "step": "Meanwhile, in a 10- to 12-inch frying pan over medium-high heat, shake pine nuts frequently until lightly browned, about 3 minutes; pour into a small bowl.",
                    "ingredients": [
                        {
                            "id": 12147,
                            "name": "pine nuts",
                            "localizedName": "pine nuts",
                            "image": "pine-nuts.png"
                        },
                        {
                            "id": 0,
                            "name": "shake",
                            "localizedName": "shake",
                            "image": ""
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404645,
                            "name": "frying pan",
                            "localizedName": "frying pan",
                            "image": "pan.png"
                        },
                        {
                            "id": 404783,
                            "name": "bowl",
                            "localizedName": "bowl",
                            "image": "bowl.jpg"
                        }
                    ],
                    "length": {
                        "number": 3,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 5,
                    "step": "To pan, add onion and sausages; stir frequently over high heat, breaking meat into small pieces, until lightly browned, about 10 minutes.",
                    "ingredients": [
                        {
                            "id": 1017063,
                            "name": "sausage",
                            "localizedName": "sausage",
                            "image": "raw-pork-sausage.png"
                        },
                        {
                            "id": 11282,
                            "name": "onion",
                            "localizedName": "onion",
                            "image": "brown-onion.png"
                        },
                        {
                            "id": 1065062,
                            "name": "meat",
                            "localizedName": "meat",
                            "image": "whole-chicken.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404645,
                            "name": "frying pan",
                            "localizedName": "frying pan",
                            "image": "pan.png"
                        }
                    ],
                    "length": {
                        "number": 10,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 6,
                    "step": "Add broth and cover; when boiling, stir in peas and cover. When boiling again, stir in couscous, cover, and remove from heat.",
                    "ingredients": [
                        {
                            "id": 20028,
                            "name": "couscous",
                            "localizedName": "couscous",
                            "image": "couscous-cooked.jpg"
                        },
                        {
                            "id": 1006615,
                            "name": "broth",
                            "localizedName": "broth",
                            "image": "chicken-broth.png"
                        },
                        {
                            "id": 11304,
                            "name": "peas",
                            "localizedName": "peas",
                            "image": "peas.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 7,
                    "step": "Let stand in a warm place 10 to 20 minutes.",
                    "ingredients": [],
                    "equipment": [],
                    "length": {
                        "number": 10,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 8,
                    "step": "As lamb roasts, in a food processor or with a knife, finely chop parsley, mint, and dill (or crumble dried herbs) and mix.",
                    "ingredients": [
                        {
                            "id": 1022042,
                            "name": "dried herbs",
                            "localizedName": "dried herbs",
                            "image": "dried-herbs.png"
                        },
                        {
                            "id": 11297,
                            "name": "parsley",
                            "localizedName": "parsley",
                            "image": "parsley.jpg"
                        },
                        {
                            "id": 2045,
                            "name": "dill",
                            "localizedName": "dill",
                            "image": "dill.jpg"
                        },
                        {
                            "id": 10017224,
                            "name": "lamb",
                            "localizedName": "lamb",
                            "image": "lamb-shanks.jpg"
                        },
                        {
                            "id": 2064,
                            "name": "mint",
                            "localizedName": "mint",
                            "image": "mint.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404771,
                            "name": "food processor",
                            "localizedName": "food processor",
                            "image": "food-processor.png"
                        },
                        {
                            "id": 404745,
                            "name": "knife",
                            "localizedName": "knife",
                            "image": "chefs-knife.jpg"
                        }
                    ]
                },
                {
                    "number": 9,
                    "step": "Transfer roast to a platter; keeping it warm, let rest 5 to 10 minutes. Stir herb mixture into hot couscous; fill center of roast with some of the couscous and spoon remainder around the meat.",
                    "ingredients": [
                        {
                            "id": 20028,
                            "name": "couscous",
                            "localizedName": "couscous",
                            "image": "couscous-cooked.jpg"
                        },
                        {
                            "id": 1065062,
                            "name": "meat",
                            "localizedName": "meat",
                            "image": "whole-chicken.jpg"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 5,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 10,
                    "step": "Sprinkle couscous with pine nuts.",
                    "ingredients": [
                        {
                            "id": 12147,
                            "name": "pine nuts",
                            "localizedName": "pine nuts",
                            "image": "pine-nuts.png"
                        },
                        {
                            "id": 20028,
                            "name": "couscous",
                            "localizedName": "couscous",
                            "image": "couscous-cooked.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 11,
                    "step": "Cut lamb between ribs and serve chops with couscous.",
                    "ingredients": [
                        {
                            "id": 20028,
                            "name": "couscous",
                            "localizedName": "couscous",
                            "image": "couscous-cooked.jpg"
                        },
                        {
                            "id": 10017224,
                            "name": "lamb",
                            "localizedName": "lamb",
                            "image": "lamb-shanks.jpg"
                        },
                        {
                            "id": 23236,
                            "name": "ribs",
                            "localizedName": "ribs",
                            "image": "ribs.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 12,
                    "step": "Add more salt and pepper to taste.",
                    "ingredients": [
                        {
                            "id": 1102047,
                            "name": "salt and pepper",
                            "localizedName": "salt and pepper",
                            "image": "salt-and-pepper.jpg"
                        }
                    ],
                    "equipment": []
                }
            ]
        }
    ],
    "originalId": null
}




const DUMMY_DATA = [
    {
        "id": 4748,
        "title": "Grilled Salmon with Roasted Corn Relish",
        "image": "https://spoonacular.com/recipeImages/4748-312x231.jpg",
        "imageType": "jpg",
        "calories": 310,
        "protein": "36g",
        "fat": "12g",
        "carbs": "16g"
    },
    {
        "id": 5935,
        "title": "Roast Shrimp With Fennel, Bacon & Orange",
        "image": "https://spoonacular.com/recipeImages/5935-312x231.jpg",
        "imageType": "jpg",
        "calories": 260,
        "protein": "30g",
        "fat": "12g",
        "carbs": "7g"
    },
    {
        "id": 12533,
        "title": "Sausage And Chicken Jambalaya",
        "image": "https://spoonacular.com/recipeImages/12533-312x231.jpg",
        "imageType": "jpg",
        "calories": 324,
        "protein": "26g",
        "fat": "10g",
        "carbs": "31g"
    },
    {
        "id": 695218,
        "title": "Apple-&-Fennel Roasted Pork Tenderloin",
        "image": "https://spoonacular.com/recipeImages/695218-312x231.jpg",
        "imageType": "jpg",
        "calories": 244,
        "protein": "25g",
        "fat": "6g",
        "carbs": "22g"
    },
    {
        "id": 707751,
        "title": "Jasmine Rice-Stuffed Peppers",
        "image": "https://spoonacular.com/recipeImages/707751-312x231.jpg",
        "imageType": "jpg",
        "calories": 441,
        "protein": "35g",
        "fat": "18g",
        "carbs": "36g"
    },
    {
        "id": 707890,
        "title": "Cherry, Cashew, and Pork Sandwich",
        "image": "https://spoonacular.com/recipeImages/707890-312x231.jpg",
        "imageType": "jpg",
        "calories": 327,
        "protein": "22g",
        "fat": "9g",
        "carbs": "40g"
    },
    {
        "id": 717910,
        "title": "Slow Cooker Coconut Lemon Chicken",
        "image": "https://spoonacular.com/recipeImages/717910-312x231.jpg",
        "imageType": "jpg",
        "calories": 316,
        "protein": "37g",
        "fat": "15g",
        "carbs": "8g"
    },
    {
        "id": 825820,
        "title": "Bacon Mushroom Stuffed Chicken",
        "image": "https://spoonacular.com/recipeImages/825820-312x231.jpg",
        "imageType": "jpg",
        "calories": 448,
        "protein": "41g",
        "fat": "20g",
        "carbs": "27g"
    },
    {
        "id": 872915,
        "title": "Fiesta Chicken Pasta Bake",
        "image": "https://spoonacular.com/recipeImages/872915-312x231.jpg",
        "imageType": "jpg",
        "calories": 424,
        "protein": "25g",
        "fat": "18g",
        "carbs": "41g"
    },
    {
        "id": 874765,
        "title": "Skinny Chicken & Broccoli Alfredo",
        "image": "https://spoonacular.com/recipeImages/874765-312x231.jpg",
        "imageType": "jpg",
        "calories": 360,
        "protein": "35g",
        "fat": "17g",
        "carbs": "17g"
    },
    {
        "id": 1122249,
        "title": "Grilled Lamb Kebabs with Basil Tahini Sauce",
        "image": "https://spoonacular.com/recipeImages/1122249-312x231.jpg",
        "imageType": "jpg",
        "calories": 435,
        "protein": "22g",
        "fat": "36g",
        "carbs": "6g"
    }
]


const SearchNutritionValue = () => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [nutritionVals, setNutritionVals] = useState({ minProtein: 0, maxCals: 0, maxCarbs: 0 })

    const nutritionChangeHandler = (e) => {
        console.log(e.target.name)
        let temp = { ...nutritionVals }
        temp[e.target.name] = e.target.value
        console.log(temp)
        setNutritionVals({ ...temp })
    }


    const submitHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        fetchByNutrition()
    }

    const fetchByNutrition = () => {

        console.log('nutrition')


        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients',
            params: {
                limitLicense: 'false',
                minProtein: nutritionVals.minProtein,
                maxCalories: nutritionVals.maxCalories,
                offset: '0',
                maxCarbs: nutritionVals.maxCarbs,
                number: '50'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_3,
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log('response....')
            console.log(response.data)
            setLoading(false)
            setResults(response.data)

        }).catch(function (error) {
            console.error(error)
            setLoading(false)
        })

    }




    const recipeInfo = (id) => {

        const options = {
            method: 'GET',
            url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_3,
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });

    }




    return (
        <div>


            Search for recipes by nutrition content <br />
            <FormStyled name='byNutrition' onSubmit={submitHandler}>

                <label>Minimum Protein in grams:</label>
                <input name='minProtein' type='number' min='10' step='5' value={nutritionVals.minProtein} onChange={nutritionChangeHandler} required />
                <label>Maximum Calories:</label>
                <input name='maxCals' type='number' min='0' step='25' value={nutritionVals.maxCals} onChange={nutritionChangeHandler} required />
                <label>Maximum Carbs</label>
                <input name='maxCarbs' type='number' min='0' step='10' value={nutritionVals.maxCarbs} onChange={nutritionChangeHandler} required />

                <StyledButton>Submit</StyledButton>
            </FormStyled>
            <ResultsArea>
            {loading && <p>Loading...</p>}
            <br />
            {
                loading ?
                    <ClockLoader
                        loading={loading}
                        size={150}
                        color='orange'
                        display="flex"
                    /> :
                    results.length > 0 &&
                    results.map(item =>
                        <ResultItem key={item.id}>

                                <h3>{item.title}</h3>
                                <img src={item.image} onClick={() => recipeInfo(item.id)} />

                                <br />
                                <span>{`${item.calories} calories ${item.protein} protein ${item.carbs} carbs ${item.fat} fat`}</span>
                            
                            <br />
                            <br />
                        </ResultItem>)

            }
            </ResultsArea>
        </div>
    );
};

export default SearchNutritionValue;