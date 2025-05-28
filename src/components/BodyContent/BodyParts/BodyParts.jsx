import "./BodyParts.css"   
const BodyParts=({bodypart})=>{
    return(
        <div className="cards">
            {bodypart&&bodypart. parts.map((data,index)=>{
                return(
                    <div className="card"key={index} >
                        <div className="card-group">
                        <img src={data.img} alt={data.title}/>
                        <p>{data.title}</p>
                        </div>
                        <small>{data.date}</small>
                        <div className={`progress ${data.progress}` }></div>
                    </div>
                )
                 
            })}
        
        </div>
    

        
        
    )
}

export default BodyParts;