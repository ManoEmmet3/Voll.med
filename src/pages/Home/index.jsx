
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/login')}>
                Ir para Login
            </button>
        </div>
    );
}

export default Home;
