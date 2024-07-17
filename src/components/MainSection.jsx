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
    asida = new Meal(
      "https://imgs.search.brave.com/3vSSeI23sidQAXXcRpP0qBYqmeW2npuJz5Vm7XHaR0Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbGxh/Ym91dHRoZWNvb2tz/LmNvLnVrL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA4L1Nh/bGhhTFJfMzguanBn",
      "Asida",
      "Asida",
      `Sudanese asida is a traditional Sudanese dish that holds cultural significance in Sudan. It is a type of porridge made from durum wheat flour or cornmeal. Asida is a staple food in Sudan and is commonly consumed for breakfast or as a main course.`
    ),
    kisra = new Meal(
      "https://imgs.search.brave.com/38XdMpvup-IkYHyVVs9JgxAlZJVoXclmWa6pPRAcoZ4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZnNvdXRo/c3VkYW4uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzA2/L01vbG9raGlhLXNl/cnZlZC13aXRoLUlu/amVyYS5qcGc",
      "kisra",
      "Kisra",
      `A type of thin, fermented bread made from sorghum flour. It is a staple in Sudanese cuisine and is often served with various stews and sauces.`
    ),
    bamia = new Meal(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bamia-Ocras_tomate_%28cropped%29.JPG/220px-Bamia-Ocras_tomate_%28cropped%29.JPG",
      "bamia",
      "Bamia",
      `A flavorful okra stew cooked with meat (such as lamb or beef), tomatoes, onions, and spices.`
    ),
    shayiah = new Meal(
      "https://imgs.search.brave.com/_oZEpKekTKp9wWSNupCu9aigCBm6mrhYu0A7iWkn9s0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YXN0/ZW9mc291dGhzdWRh/bi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTcvMDIvUm9h/c3RlZC1sYW1iLVNo/YWl5YS5qcGc",
      "shayiah",
      "Shayyah",
      `A delicious Sudanese meat stew made with lamb or beef, cooked with a blend of spices, onions, and tomatoes.`
    ),
    agashe = new Meal(
      "https://imgs.search.brave.com/ctZbc92RSYlaoIvSREqlzZx_Up1eXqWb1nekpANkFjM/rs:fit:500:0:0:0/g:ce/aHR0cDovLzUwMHdv/cmRzbWFnLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8x/Mi9BZ2FzaGUtZTE1/NDM4MjQ2NTg0ODUu/anBn",
      "Agashe",
      "Agashe",
      `Sudanese Agashe is a popular street food in Sudan, characterized by thinly sliced beef, chicken, or fish, cut and butterflied before being skewered. The meat is then coated with a dry blend of crushed peanuts, hot pepper, and other spices.`
    );

  let myMeals = [fulMedames, asida, tamayya, shayiah, kisra,bamia, gheema, agashe];

  const mealCard = myMeals.map((meal, index) => (
    <MealCards
      key={index}
      source={`${meal.source}`}
      alt={`${meal.alt}`}
      mealName={`${meal.title}`}
      description={`${meal.description}`}
    />
  ));

  let kahk = new Meal(
      "https://imgs.search.brave.com/LrMwRWGMT3RdqjXXSpnN3xPV69ygi1UTY66OIesi4tw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90cmF2/ZWxmb29kYXRsYXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA0L0thaGst/RkkuanBn",
      "kahk",
      "Kahk",
      `Sudanese kahk is a delightful dessert that is popular in Sudan and other parts of the Middle East. It is a type of cookie that typically has a round shape and a golden-brown color. The kahk is known for its unique texture, with a crispy exterior and a soft, chewy interior.

One of the distinctive features of Sudanese kahk is the sprinkle of sesame seeds on top, which adds a delightful nutty flavor and a slight crunch. The sesame seeds not only enhance the taste but also contribute to the visual appeal of the dessert.

Sudanese kahk is often enjoyed as a sweet treat or as a snack. It is commonly served during special occasions, celebrations, and gatherings. The flavorful combination of the cookie's texture and the added sesame seeds make it a beloved dessert among locals and visitors alike.`
    ),
    biscuit = new Meal(
      "https://imgs.search.brave.com/VzdExM3Ejo3CW1A_JPTpXO9j4wyEB3JM3rS5JoM36R8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tb2Rv/My5jb20vdGh1bWJz/L2ZpdDYzMHgzMDAv/MTU2MTA0LzE0OTU1/NTY1MzQvJUQ4JUI5/JUQ5JTg1JUQ5JTg0/XyVEOCVBOCVEOCVC/MyVEOSU4MyVEOSU4/OCVEOSU4QSVEOCVB/QV8lRDglQTclRDkl/ODQlRDklODYlRDgl/QjQlRDglQTclRDgl/QUYlRDglQjFfJUQ4/JUE3JUQ5JTg0JUQ4/JUIzJUQ5JTg4JUQ4/JUFGJUQ4JUE3JUQ5/JTg2JUQ5JThBLmpw/Zw",
      "tea biscuit",
      "Tea Biscuit",
      `Sudanese biscuits for tea are a popular accompaniment to tea in Sudanese culture. They are typically served during tea time or as a sweet treat for guests. Sudanese biscuits come in various shapes and flavors, offering a delightful range of options to enjoy with a cup of tea.

These biscuits are often homemade, prepared with simple ingredients such as flour, butter or margarine, sugar, and sometimes flavored with vanilla or other extracts. They are baked until golden brown, resulting in a crispy texture that pairs well with tea.`
    );
  let myDesserts = [kahk, biscuit];
  const dessertCard = myDesserts.map((meal, index) => (
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
          <p className="w-full underline decoration-wavy text-3xl mx-4 text-orange-400">
            ____________________________
          </p>
          <p className="font-bold text-center py-2">
            Discover the Rich Flavors of Sudanese Kitchen Desserts
          </p>
          <div className="flex flex-col justify-center items-center gap-y-8">
            {dessertCard}
          </div>
        </section>
      </div>
    </main>
  );
}
