import { useState } from "react";

const INITIAL_STATE = [
  {id:1, baslik:"Alisveris Yap", tamamlandi: false},
  {id:2, baslik:"Fatura ode", tamamlandi: false},

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

        {liste.map(({id, baslik, tamamlandi}) => {
          return(
            <div className={tamamlandi ? "yapildi" : "" } key={id}> {baslik} </div>
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
