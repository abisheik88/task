import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ usr }) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{usr.plan}</h5>
                    <h6 className="card-price text-center">${usr.price}<span class="period">/month</span></h6>
                    <hr></hr>
                    <ul class="fa-ul">
                        {
                            usr.features.map((items) => {
                                return <li><FontAwesomeIcon icon={faCheck} /> {items.title}</li>
                            })
                        }
                        <li className={`${usr.highlight ? 'text-muted' : ''}`}>
                            {
                                usr.other.map((item) => {
                                    return <li ><FontAwesomeIcon icon={faXmark} />  {item.title}</li>
                                })
                            }
                        </li>
                        <li className={`${usr.highlight1 ? 'text-muted' : ''}`}>
                            {/* <i className={`${usr.highlight1 ? (<FontAwesomeIcon icon={faXmark} />) :
                                (<FontAwesomeIcon icon={faCheck} />)
                                }}`}></i> */}
                            <FontAwesomeIcon icon={faXmark} /> {usr.some}
                        </li>

                    </ul>
                    <div class="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;