import Card from "./Card";
import MealCards from "./MealCards";
export default function MainSection() {
  class Meal {
    constructor(source, alt, title, description) {
      this.source = source;
      this.alt = alt;
      this.title = title;
      this.description = description;
    }
  }

  // Dishes
  let fulMedames = new Meal(
      "https://imgs.search.brave.com/Qwl29TekXstxqyoCyZaKgIXOK6IzMzEj2gy5Dq4Zizo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bmF0aW9uYWxnZXJp/Y2h0cmV6ZXB0ZS5k/ZS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8xMi9uYXRpb25h/bGdlcmljaHQtc3Vk/YW4tZnVsLW1lZGFt/ZXMtMzYzMy5qcGc",
      "Ful medmes",
      "Ful Medames",
      `Ful Medames is the national dish of Sudan. This meal is made of cooked fava beans seasoned with cumin and combined with a range of vegetables, chili peppers, lemon juice, garlic and spices
  This dish is almost a cross between a bean dip and a bean salad. Usually, ful medames is prepared in a large quantity and served out of a jug. It can then be served with vegetables on the side or with flatbread to dip.
  `
    ),
    tamayya = new Meal(
      "https://imgs.search.brave.com/gbz7i8vtYg3Y4d2DRjnW_sD3-uh30z104oLZv-bPnIU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMua29zaGVyLmNv/bS9kZXRhaWxzLnNs/aWRlL3QvYS90YW1p/eWFfc2h1dHRlcnN0/b2NrXzQwNzIzNjEz/Mi5qcGc",
      "Tamaya",
      "Tamayya (Chickpea Fritters)",
      `Tamayya are chickpea fritters; they are prepared by seasoning chickpeas with cumin, lemon juice, coriander and garlic, and mashing them into a paste. The paste is then rolled into small balls which are fried until golden-brown.

    These are often served in a sandwich, but can also be served on their own with a range of dips. Tamayya are similar to falafel in texture and flavor. `
    ),
    gheema = new Meal(
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjz6Ueor5q_s2nkj2HmTeWQRfs3n_r7X49Fv_z9x3prv3jsBetlghKWCOOpyA2Ce5XrQci_vnrjymH61jbzf1fHOs0MD1glND3bRWf5p3Z30mqtAlHaLmVQVlljRM_5k3Nl0L4P8HilqWV3/s1600/IMG_2059.jpg",
      "Gheema",
      "Gheema (Potatoes with meat and vegetables",
      `The potatoes are deep fried and mixed into the beef and vegetables instead of mashed on top. Different, delicious and comforting all at once.`
    ),
    agashe = new Meal(
      "https://imgs.search.brave.com/ctZbc92RSYlaoIvSREqlzZx_Up1eXqWb1nekpANkFjM/rs:fit:500:0:0:0/g:ce/aHR0cDovLzUwMHdv/cmRzbWFnLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8x/Mi9BZ2FzaGUtZTE1/NDM4MjQ2NTg0ODUu/anBn",
      "Agashe",
      "Agashe",
      `Sudanese Agashe is a popular street food in Sudan, characterized by thinly sliced beef, chicken, or fish, cut and butterflied before being skewered. The meat is then coated with a dry blend of crushed peanuts, hot pepper, and other spices.`
    );

  let myMeals = [fulMedames, tamayya, gheema, agashe];

  const mealCard = myMeals.map((meal, index) => (
    <MealCards
      key={index}
      source={`${meal.source}`}
      alt={`${meal.alt}`}
      mealName={`${meal.title}`}
      description={`${meal.description}`}
    />
  ));

  let kahk = new Meal();
  
  let myDesserts = [];
  const dessertCard = myMeals.map((meal, index) => (
    <MealCards
      key={index}
      source={`${meal.source}`}
      alt={`${meal.alt}`}
      mealName={`${meal.title}`}
      description={`${meal.description}`}
    />
  ));

  // Desserts

  return (
    <main>
      <div className="m-4">
        <section>
          <div className="grid grid-cols-2 gap-2 items-center justify-center">
            <Card text={"Fresh ingredients"} icon={"fa-solid fa-leaf"} />
            <Card text={"Family recipes"} icon={"fa-solid fa-book"} />
            <Card text={"Local sourced"} icon={"fa-solid fa-globe"} />
            <Card text={"Vegan friendly"} icon={"fa-regular fa-heart"} />
          </div>
        </section>
        <section className="my-2">
          <h2 className="font-bold text-xl font-poppins">Sudanese Kitchen</h2>
          <p className="text-sm text-slate-700 ">
            The Sudanese kitchen is a vibrant and diverse culinary tradition
            that reflects the rich cultural heritage and varied geography of
            Sudan. Sudanese cuisine is characterized by its use of locally
            available ingredients, bold flavors, and a blend of influences from
            Arabic, African, and Mediterranean culinary traditions.
          </p>
        </section>

        <section className="flex flex-col justify-center items-center my-4">
          <p className="font-bold py-2">Popular recepies</p>
          <div className="flex flex-col justify-center items-center gap-y-8">
            {mealCard}
          </div>
        </section>

        <section className="flex flex-col justify-center items-center my-4">
          <p className="font-bold py-2">Discover the Rich Flavors of Sudanese Kitchen Desserts</p>
          <div className="flex flex-col justify-center items-center gap-y-8">
            {dessertCard}
          </div>
        </section>
      </div>
    </main>
  );
}
