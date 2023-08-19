import { Moon } from '../icons/Moon'

export const Header = () => {
    const setColorTheme = () => {
        const theme = document.body.dataset.theme

	// Arreglar esta condicion
	//if( !localStorage.getItem('theme') {
	//	document.querySelector('body').setAttribute('data-theme', 'light');
	//}
	if( theme === 'dark' ) {
            
            localStorage.setItem('theme', 'light')
            document.querySelector('body').setAttribute('data-theme', 'light');
        }else {

            localStorage.setItem('theme', 'dark')
            document.querySelector('body').setAttribute('data-theme', 'dark');        
        }
    }

  return (
    <header className="header">
        <div className="div-title">
            <h2>Where in the world?</h2>
        </div>

        <div className="container-switcher">
            <div className="container-icon">
                <Moon/>
            </div>

            <button onClick={setColorTheme} className='btn-dark-mode'>
                <span>dark mode</span>
            </button>
        </div>
    </header>
  )
}
