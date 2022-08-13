export default function ShowActionTop(props){
    const {title, icon, image} = props.data;
    return(
        <>
        <div className="col-lg-4 image-box">
            <figure><img src={'http://techsolutions-bd.com/gymadmin/assets/uploads/'+image} alt=""/></figure>
            <div className="caption">
                <div className="caption-icon"><img src={"http://techsolutions-bd.com/gymadmin/assets/uploads/"+icon} alt=""/></div>
                <div className="caption-label">
                <h4>{title}</h4>
                </div>
            </div>
        </div>
        </>
    );
}