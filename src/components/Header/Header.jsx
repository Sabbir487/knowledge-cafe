import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4  border-b md:max-w-7xl mx-auto mb-8'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="Profile Picture" />
        </div>
    );
};

export default Header;