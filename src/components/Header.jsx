import nbaLogo from './../assets/nba-logo.png'

const Header = () => {

    return (
        <div className=''>
            <img className='mx-auto w-64 my-10' src={nbaLogo} alt="nba-logo" />
            <h1 className='text-5xl font-light text-center'>NBA Legends</h1>
        </div>
    )
}

export default Header