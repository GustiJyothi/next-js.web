import Image from "next/image";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center justify-center w-full h-full bg-cover bg-center'style={{backgroundImage:"url(/web-bg.jpg)"}}>
            <div className='text-8xl font-bold text-center'>
              <h1 className='text-[98B4CE]'>Hi, I am </h1>
              <h1 className='text-[#E48A57]'>Gusti Ayu</h1>

              <p className='text-gray-200 text-sm mt-4 mx-auto max-w-md hidden md:block'>
    I am a Telecommunication Engineering student at Telkom University, Bandung.<br />
    Active involved in organizational activities.
</p>
            </div>
      </div>
    
      <div className="absolute bottom-0 z-[5] w-full h-auto  transform translate-y-10">
        <Image
          src='/trees.webp'
          alt='trees'
          width={2000}
          height={2000}
          className='w-full h-full'
        />
      </div>

    <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"/>
    </main>
  );
}
