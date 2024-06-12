export default function Header() {
  return (
    <>
      <header>
        <div className="rounded-4xl overflow-hidden mx-4">
          <div className="text-center p-2">
            <h1 className="text-lg ">Sudanese Kitchen</h1>
          </div>
          <div className="relative">
            <img
              src="https://imgs.search.brave.com/dytNlTKJCsXB5fL9W1BcJqNGzXrkZQmxs4_APi1sF_o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cmp0cmF2ZWxhZ2Vu/Y3kuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzAxL0Zv/b2QtZnJvbS1TdWRh/bi5qcGc"
              alt="Sudanese food"
              className="relative rounded-xl after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:bg-neutral-900/50 backdrop-blur-sm"
            />
            <div className="text-neutral-900 absolute bottom-7 left-1 flex flex-col gap-y-2 items-start justify-start">
              <h2 className="text-3xl font-bold bg-orange-100 p-1">
                Welcome to our Kitchen
              </h2>
              <p className="bg-orange-100 p-1 ">
                Our food is rooted in the traditions of Sudan, and infused with 
                a modern twist. <br /> We hope you enjoy.
              </p>
              <button className="bg-orange-400 px-2 py-1 rounded-md font-bold mt-4">Explore Menu</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
