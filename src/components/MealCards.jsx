/* eslint-disable react/prop-types */
export default function MealCards({ source, alt, mealName, description }) {
  return (
    <>
      <div className="rounded-lg overflow-hidden bg-neutral-100 w-72 pb-4 border">
        <img src={source} alt={alt} className="w-full h-40 rounded-b-md object-cover" />
        <div className="p-2">
          <p className="font-bold text-lg">{mealName}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </>
  );
}
