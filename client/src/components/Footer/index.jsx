import { Link } from 'react-router-dom'
import AuthService from '../../utils/auth'
import './style.css'

export default function Footer() {
    const loggedIn = AuthService.loggedIn()

    if (loggedIn) {
        return (
            <footer className="footer">
                <div >
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center">
                                &copy; The Triumvirate 2024 <Link to="./dashboard" className="footer-link

                                "><strong> Let&apos;s Debate</strong></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    } else {
    
    return (
                <footer className="footer">
                    <div >
                        <div className="row">
                            <div className="col-12">
                                <p className="text-center">
                                    &copy; The Triumvirate 2024 <Link to="./signup" className="footer-link

                                    "><strong>DebateMe</strong></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>

            )
        }      
}
