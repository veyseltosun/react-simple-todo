import { useState } from "react";

const INITIAL_STATE = [
  {id:1, baslik:"Alisveris Yap", tamamlandi: false},
  {id:2, baslik:"Fatura ode", tamamlandi: true},

]

function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState("");

  const addNew = (title) => {
    setListe([...liste, {id:Date.now(), baslik:yeniBaslik, tamamlandi:false}]);
    setYeniBaslik("");

  }

  const markCompleted = (id) => {
    setListe(liste.map( (eleman) => {
      return (
        eleman.id === id ? {...eleman, tamamlandi: !eleman.tamamlandi} : eleman
      )}));

  };

  const clearCompleted = () => {
    setListe(liste.filter(item => !item.tamamlandi))
  }
 

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="forma_ekleme">
        <input value={yeniBaslik} onChange={(e) => setYeniBaslik(e.target.value)} placeholder="listeye ekle" />
        <button onClick={() => addNew(yeniBaslik)
         }>Ekle</button>
        


      </div>
      <div className="liste">

        {liste.map((item) => {
          
          return(
            <div onClick={()=> markCompleted(item.id) } className={item.tamamlandi ? "yapildi" : "" } key={item.id}> {item.baslik} </div>
          )
        })}
       

      </div>
      <button onClick={() => clearCompleted() }className="temizle">Tamamlananları Temizle</button>
     
    </div>
  );
}

export default App;
