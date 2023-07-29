import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <header>
                <nav>Nav</nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
    );
}

export default App;
