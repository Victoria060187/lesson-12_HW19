class Recipe {
  constructor(name, ingredients, instructions, cookingTime) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.cookingTime = cookingTime;
  }

  isValid() {
    return (this.name !== undefined && this.ingredients !== undefined && this.instructions !== undefined && this.cookingTime !== undefined);
  }
}

class RecipeBook {
  constructor() {
    this.recipes = [];
  }

  addRecipe(recipe) {
    if (recipe.isValid()) {
      this.recipes.push(recipe);
    }
  }

  findRecipesByCookingTime(maxCookingTime) {
    return this.recipes.filter(recipe => recipe.cookingTime <= maxCookingTime);
  }

  findRecipesByIngredients(ingredients) {
    return this.recipes.filter(recipe =>
      ingredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );
  }
}

const recipe1 = new Recipe(
  'recipe 1',
  ['no_potato', 'no_carrot'],
  'description for recipe 1: etc...',
  30
);

const recipe2 = new Recipe(
  'recipe 2',
  ['potato', 'no_carrot'],
  'description for recipe 2: etc...',
  60
);

const recipe3 = new Recipe(
  'recipe 3',
  ['potato', 'carrot'],
  'description for recipe 3: etc...',
  120
);

const recipe4 = new Recipe(
  'recipe 4',
  ['potato', 'beet', 'etc'],
  'description for recipe 4: etc...',
  75
);

const recipeBook = new RecipeBook();

recipeBook.addRecipe(recipe1);
recipeBook.addRecipe(recipe2);
recipeBook.addRecipe(recipe3);
recipeBook.addRecipe(recipe4);

const recipesByTime = recipeBook.findRecipesByCookingTime(60);
const recipesByTimeNames = recipesByTime.map(recipe => recipe.name);
console.log('Recipes for 60 minutes:', recipesByTimeNames);

const recipesByIngredients = recipeBook.findRecipesByIngredients(['potato', 'carrot']);
const recipesByIngredientsNames = recipesByIngredients.map(recipe => recipe.name);
console.log('Recipes by ingredients [potato, carrot]:', recipesByIngredientsNames);
