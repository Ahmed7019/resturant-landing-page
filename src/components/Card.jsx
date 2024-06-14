// eslint-disable-next-line react/prop-types
export default function Card({ icon, text }) {
  return (
    <div className="w-40 h-32 p-4 flex flex-col gap-y-2 justify-center rounded-md border border-solid font-bold">
      <i className={icon}></i>
      <p>{text}</p>
    </div>
  );
}
