import PostbuckWidget from '../components/widgets/PostbuckWidget';
import LoginWidget from '../components/widgets/LoginWidget';

interface LoginPageProps {}

const LoginPage = ({ ...restProps }: LoginPageProps) => {
    return (
        <section className='min-h-screen pt-[100px] w-full px-4'>
            <div className='flex flex-col gap-8 md:flex-row items-center justify-center w-full h-full md:h-1/2'>
                <PostbuckWidget />
                <LoginWidget />
            </div>
        </section>
    );
};

export default LoginPage;
