import './App.css'

import { FaHammer } from "react-icons/fa";

function App() {
    return (
        <main className={ 'bg-stone-900 h-screen w-screen flex flex-col items-center justify-center' }>
            <div className='p-5 bg-stone-800 rounded-xl flex flex-col items-center justify-center'>
                <h1 className={ 'text-4xl text-orange-500' }>APP Lotomania v0.0.0</h1>
                <p className={ 'text-gray-500 flex justify-center items-center gap-2' }>
                    <FaHammer className={ 'text-yellow-500' }/> em desenvolvimento
                </p>
            </div>
        </main>
    )
}

export default App
