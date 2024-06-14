import Card from "./Card";
export default function MainSection() {
  return (
    <>
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
            <h2 className="font-bold text-xl font-playFair">
              Sudanese Kitchen
            </h2>
            <p className="text-sm text-slate-700 ">
              The Sudanese kitchen is a vibrant and diverse culinary tradition
              that reflects the rich cultural heritage and varied geography of
              Sudan. Sudanese cuisine is characterized by its use of locally
              available ingredients, bold flavors, and a blend of influences
              from Arabic, African, and Mediterranean culinary traditions.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
