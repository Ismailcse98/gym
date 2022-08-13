export default function ShowTrainers(props){
    const {name,designation,description,image,facebook,twitter,instagram} = props.data;
    return(
        <>
        <div className="col-lg-4 profile-card">
            <div className="team-box">
                <figure className="avatar"><img src={'http://techsolutions-bd.com/gymadmin/assets/uploads/'+image} alt="" /></figure>
                <div className="team-social lineal">
                    <div className="circle-icon">
                        <a href={facebook}><div className="center-fa"><i className="fa fa-facebook" aria-hidden="true"></i></div></a>
                    </div>
                    <div className="circle-icon">
                        <a href={twitter}><div className="center-fa"><i className="fa fa-twitter" aria-hidden="true"></i></div></a>
                    </div>
                    <div className="circle-icon">
                        <a href={instagram}><div className="center-fa"><i className="fa fa-instagram" aria-hidden="true"></i></div></a>
                    </div>
                </div>
                <div className="figure-caption">
                    <h4>{name}</h4>
                    <h5 className="trainer-tittle">{designation}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        </>
    );
}