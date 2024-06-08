export const Navbar = () => {
    const colors: { [key: string]: string } = {
        'Sergio': 'blue',
        'Biografia': 'amber',
        'Opere': 'green',
    }
    
    return (
        <div className="navbar bg-base-100 flex justify-center w-full">
            <div className="flex flex-row justify-between text-2xl p-6 mt-6">
                <button className="btn-nav text-blue-900 p-4 font-bold rounded-full hover:bg-blue-50">Sergio</button>
                <button className="btn-nav text-amber-700 p-4 font-bold rounded-full hover:bg-amber-50">Biografia</button>
                <button className="btn-nav text-green-700 p-4 font-bold rounded-full hover:bg-green-50">Opere</button>
                <button className="btn-nav text-blue-900 p-4 font-bold rounded-full hover:bg-blue-50">Contatti</button>
            </div>
        </div>
    );
}