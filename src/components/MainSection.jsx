import Card from "./Card";
export default function MainSection() {
  return (
    <>
      <main>
        <div className="m-4">
          <section>
            <div className="grid grid-cols-2 gap-2 items-center justify-center">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
