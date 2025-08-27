import HeroExperience from "./component/Hero/HeroExperience"

function App() {

  return (

    <div className='relative w-full h-[100vh]'>

      <div className='flex flex-col gap-1 text-2xl font-bold items-center justify-center absolute inset-0'>
        <h1>Spaceman 3d Model</h1>
      </div>
      <div className='w-full h-full absolute inset-0'>
        <HeroExperience />
      </div>
    </div>

  )
}

export default App
