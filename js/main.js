document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${choice}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = data.meals[0].strMeal;
        document.querySelector('img').src = data.meals[0].strMealThumb;
        document.querySelector('p').innerText = data.meals[0].strInstructions;

        
        document.querySelector('#Ingredient1').innerText = data.meals[0].strIngredient1;
        document.querySelector('#Ingredient2').innerText = data.meals[0].strIngredient2;
        document.querySelector('#Ingredient3').innerText = data.meals[0].strIngredient3;
        document.querySelector('#Ingredient4').innerText = data.meals[0].strIngredient4;
        document.querySelector('#Ingredient5').innerText = data.meals[0].strIngredient5;
        document.querySelector('#Ingredient6').innerText = data.meals[0].strIngredient6;
        document.querySelector('#Ingredient7').innerText = data.meals[0].strIngredient7;
        document.querySelector('#Ingredient8').innerText = data.meals[0].strIngredient8;
        document.querySelector('#Ingredient9').innerText = data.meals[0].strIngredient9;
        document.querySelector('#Ingredient10').innerText = data.meals[0].strIngredient10;
        document.querySelector('#Ingredient11').innerText = data.meals[0].strIngredient11;
        document.querySelector('#Ingredient12').innerText = data.meals[0].strIngredient12;
        document.querySelector('#Ingredient13').innerText = data.meals[0].strIngredient13;
        document.querySelector('#Ingredient14').innerText = data.meals[0].strIngredient14;
        document.querySelector('#Ingredient15').innerText = data.meals[0].strIngredient15;
        document.querySelector('#Ingredient16').innerText = data.meals[0].strIngredient16;
        document.querySelector('#Ingredient17').innerText = data.meals[0].strIngredient17;
        document.querySelector('#Ingredient18').innerText = data.meals[0].strIngredient18;
        document.querySelector('#Ingredient19').innerText = data.meals[0].strIngredient19;
        document.querySelector('#Ingredient20').innerText = data.meals[0].strIngredient20;

        document.querySelector('#Measure1').innerText = data.meals[0].strMeasure1;
        document.querySelector('#Measure2').innerText = data.meals[0].strMeasure2;
        document.querySelector('#Measure3').innerText = data.meals[0].strMeasure3;
        document.querySelector('#Measure4').innerText = data.meals[0].strMeasure4;
        document.querySelector('#Measure5').innerText = data.meals[0].strMeasure5;
        document.querySelector('#Measure6').innerText = data.meals[0].strMeasure6;
        document.querySelector('#Measure7').innerText = data.meals[0].strMeasure7;
        document.querySelector('#Measure8').innerText = data.meals[0].strMeasure8;
        document.querySelector('#Measure9').innerText = data.meals[0].strMeasure9;
        document.querySelector('#Measure10').innerText = data.meals[0].strMeasure10;
        document.querySelector('#Measure11').innerText = data.meals[0].strMeasure11;
        document.querySelector('#Measure12').innerText = data.meals[0].strMeasure12;
        document.querySelector('#Measure13').innerText = data.meals[0].strMeasure13;
        document.querySelector('#Measure14').innerText = data.meals[0].strMeasure14;
        document.querySelector('#Measure15').innerText = data.meals[0].strMeasure15;
        document.querySelector('#Measure16').innerText = data.meals[0].strMeasure16;
        document.querySelector('#Measure17').innerText = data.meals[0].strMeasure17;
        document.querySelector('#Measure18').innerText = data.meals[0].strMeasure18;
        document.querySelector('#Measure19').innerText = data.meals[0].strMeasure19;
        document.querySelector('#Measure20').innerText = data.meals[0].strMeasure20;


        console.log(data);
   
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}