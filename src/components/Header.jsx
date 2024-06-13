export default function Header() {
  return (
    <>
      <header>
        <div className="rounded-4xl overflow-hidden mx-4">
          <div className="text-center p-2">
            <h1 className="text-lg ">Sudanese Kitchen</h1>
          </div>
          <div className="relative ">
            <div className="after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:bg-neutral-900/50 after:rounded-xl after:overflow-hidden">
              <img
                src="https://imgs.search.brave.com/dytNlTKJCsXB5fL9W1BcJqNGzXrkZQmxs4_APi1sF_o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cmp0cmF2ZWxhZ2Vu/Y3kuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzAxL0Zv/b2QtZnJvbS1TdWRh/bi5qcGc"
                alt="Sudanese food"
                className="relative rounded-xl  after:bg-neutral-900/50 "
              />
            </div>
            <div className="text-neutral-200 absolute bottom-3 left-2 flex flex-col gap-y-2 items-start justify-start ">
              <h2 className="text-2xl font-bold ">
                Welcome to our <span className="text-orange-200">Kitchen</span>
              </h2>
              <p className="text-sm">
                Our food is rooted in the traditions of Sudan, and infused with
                a modern twist. <br /> We hope you enjoy.
              </p>
              <button className="text-black bg-orange-400 px-2 py-1 rounded-md font-bold mt-4">
                Explore Menu
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
