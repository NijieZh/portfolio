import { useHistory } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    let history = useHistory();

    return (
        <div className="navigation">
            <div className="container-fluid">
                <div className="row">
                    <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                        <div class="primary-nav">
                            <ul>
                                <li onClick={()=>history.push('/portfolio')}>Home</li>
                                <li onClick={()=>history.push('/projects')}>Portfolio</li>
                                <li onClick={()=>history.push('/contact')}>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}