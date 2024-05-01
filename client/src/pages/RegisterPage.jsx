import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated, navigate])

    const onSubmit = handleSubmit(async (values) => {
        setLoading(true);
        await signup(values);
        setLoading(false);
    });

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
                {loading && <div className='text-center mb-4'>Loading...</div>}
                {registerErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div>
                ))}
                <h1 className='text-3xl font-bold my-2'>Register</h1>

                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        {...register("username", { required: true })}
                        className={`w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 ${errors.username && 'border-red-500'}`}
                        placeholder='Username'
                    />
                    {errors.username && <p className='text-red-500'>Username is required</p>}

                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className={`w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 ${errors.email && 'border-red-500'}`}
                        placeholder='Email'
                    />
                    {errors.email && <p className='text-red-500'>Email is required</p>}

                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className={`w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 ${errors.password && 'border-red-500'}`}
                        placeholder='Password'
                    />
                    {errors.password && <p className='text-red-500'>Password is required</p>}

                    <button
                        type="submit"
                        className='bg-sky-500 text-white px-4 py-2 rounded-md my-2 transition duration-300 hover:bg-sky-600'
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <p className='flex gap-x-2 justify-between'>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage;
