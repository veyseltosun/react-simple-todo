import { useState } from "react";

const INITIAL_STATE = [
  {id:1, baslik:"Alisveris Yap", tamamlandi: false},
  {id:2, baslik:"Fatura ode", tamamlandi: true},

]

function App() {
  const [liste, setListe] = useState(INITIAL_STATE);

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="forma_ekleme">
        <input placeholder="listeye ekle" />
        <button>Ekle</button>

      </div>
      <div className="liste">

        {liste.map((item) => {
          
          return(
            <div onClick={()=> {
              setListe(liste.map( (eleman) => {
                return (
                  eleman.id === item.id ? {...eleman, tamamlandi: !eleman.tamamlandi} : eleman
                )

              }))
            }} className={item.tamamlandi ? "yapildi" : "" } key={item.id}> {item.baslik} </div>
          )
        })}
        {/* <div>Yapılacak</div>
        <div className="yapıldı">Yapıldı</div> */}

      </div>
      <button className="temizle">Tamamlananları Temizle</button>
     
    </div>
  );
}

export default App;
