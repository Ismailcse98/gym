export default function  ShowActionBottomLeft(props){
    const {heading, description, icon} = props.data;
    return(
        <div className="icon-lists">
            <div className="icon-circle">
                <figure className="icon-center"><img src={'http://techsolutions-bd.com/gymadmin/assets/uploads/'+icon} alt="" /></figure>
            </div>
            <div className="icon-text">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}