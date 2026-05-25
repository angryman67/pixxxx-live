export default function LocationsPage() {
  const locations = [
    {name:'Zugspitze',country:'🇩🇪 Bayern, DE',emoji:'🏔️',tags:['Alpenpanorama','Astro','Sonnenaufgang'],photos:312,rating:'4.9'},
    {name:'Hallstatt',country:'🇦🇹 Oberösterreich, AT',emoji:'🏛️',tags:['Spiegelungen','Architektur','Herbst'],photos:248,rating:'4.8'},
    {name:'Lauterbrunnen',country:'🇨🇭 Bern, CH',emoji:'🌲',tags:['Wasserfälle','Nebel','Langzeit'],photos:187,rating:'4.7'},
    {name:'Kreidefelsen Rügen',country:'🇩🇪 Rügen, DE',emoji:'🌊',tags:['Küste','Klippen','Sturm'],photos:203,rating:'4.6'},
    {name:'Neuschwanstein',country:'🇩🇪 Bayern, DE',emoji:'🏰',tags:['Architektur','Herbst','Nebel'],photos:421,rating:'4.8'},
    {name:'Großglockner',country:'🇦🇹 Kärnten, AT',emoji:'⛰️',tags:['Hochgebirge','Gletscher'],photos:167,rating:'4.9'},
    {name:'Zürichsee',country:'🇨🇭 Zürich, CH',emoji:'🌅',tags:['See','Spiegelungen'],photos:134,rating:'4.5'},
    {name:'Watzmann',country:'🇩🇪 Bayern, DE',emoji:'🏔️',tags:['Alpenpanorama','Winter'],photos:198,rating:'4.7'},
  ]
  return (
    <div style={{background:'#0A0A08',minHeight:'100vh',padding:'100px 40px 60px'}}>
      <div style={{fontSize:'11px',letterSpacing:'3px',textTransform:'uppercase',color:'#D85A30',marginBottom:'16px'}}>Foto-Spots DACH</div>
      <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(40px,5vw,72px)',letterSpacing:'2px',lineHeight:1,marginBottom:'40px'}}>TOP <span style={{color:'#D85A30'}}>LOCATIONS</span></h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'14px'}}>
        {locations.map(l=>(
          <div key={l.name} style={{background:'#1C1C1A',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:'14px',overflow:'hidden'}}>
            <div style={{height:'120px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'36px',background:'linear-gradient(135deg,#1C1C1A,#2A1F1A)'}}>{l.emoji}</div>
            <div style={{padding:'12px'}}>
              <div style={{fontSize:'14px',fontWeight:500,marginBottom:'2px'}}>{l.name}</div>
              <div style={{fontSize:'11px',color:'#888780',marginBottom:'8px'}}>{l.country}</div>
              <div style={{display:'flex',gap:'4px',flexWrap:'wrap',marginBottom:'8px'}}>
                {l.tags.map(t=><span key={t} style={{fontSize:'10px',padding:'2px 7px',borderRadius:'100px',border:'0.5px solid rgba(255,255,255,0.1)',color:'#888780'}}>{t}</span>)}
              </div>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'11px',color:'#888780'}}>
                <span>📸 {l.photos} Bilder</span><span style={{color:'#EF9F27'}}>★ {l.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
