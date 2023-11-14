function Card({nome, img,data}) {
    return(
        <>
            <h2>{nome} </h2>
          <img src={img}alt="" />        
          <p>data : {data}</p>
        </>
        
    )
}


export default Card