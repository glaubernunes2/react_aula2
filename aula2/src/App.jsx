import Card from "./card"


function App() {
  
  const shows= [
    
    {
      nome: "link park",
      data: '17/01/2023',
      img : 'https://th.bing.com/th/id/R.0ce320254e13d9565b7d228e0ec2b662?rik=mLrhp7RodnaZjA&riu=http%3a%2f%2fimages1.fanpop.com%2fimages%2fimage_uploads%2fLP-linkin-park-883001_1280_1024.jpg&ehk=bQ3qouAJ8TzF%2fr70TgXWdDSnnnmYBGQfHQEbGSfnSA0%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      nome: "Coldplay",
      data: '10/01/23',
      img : 'https://th.bing.com/th/id/R.f725002a92fd327884b8b4ed3abced2d?rik=Y3Vnl0oMO0pZ0g&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2foriginals%2f2013%2fMusic_Coldplay_the_band_close_up_045639_.jpg&ehk=ZVT0IsqkljNtAm4U6YTllt%2fMN%2fBMTvf4Xwc2JVMvgng%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      nome: "black Sabbath",
      data: '13/01/2020',
      img : 'https://a-static.mlcdn.com.br/800x560/black-sabbath-13-cd-universal-music/madhousestore/602537349579/b06b359c5d70f2d595258545a846876d.jpeg'
    }

  ]

  
  return (
    <>
      <h1> lista de shows</h1>
      <div>
        {shows.map(show =>(
          <Card nome={show.nome} img={show.img} data={show.data} />
          

        ))}
      </div>
      
      
    </>
  )
}

export default App
