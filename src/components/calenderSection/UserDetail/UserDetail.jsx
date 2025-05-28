import './UserDetail.css'
const UserDetail=({userDetailicons})=>{
    return(
        <div className="user-detail-icon">
            {userDetailicons.map((data,index)=>{
                return(
                     <div key={index} className="icons">
                        {data}
                     </div>
                )
            })
            }
       
        </div>
    )
}

export default UserDetail;