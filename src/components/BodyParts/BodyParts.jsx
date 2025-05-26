import "./BodyParts.css"   
const BodyParts=({bodypart})=>{
    return(
        <div class="cards">
            {bodypart&&bodypart. parts.map((data,index)=>{
                return(
                    <div class="card">
                        <div className="card-group">
                        <img src={data.img} alt={data.title}/>
                        <p>{data.title}</p>
                        </div>
                        <small>Date: 26 Okt 2021</small>
                        <div class={`progress ${data.progress}` }></div>
                    </div>
                )
                 
            })}
        
        </div>
    

        
        
    )
}

export default BodyParts;