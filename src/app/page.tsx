export default function HomePage() {
  return (
    <div style={{background:'#0A0A08',minHeight:'100vh',paddingTop:'80px'}}>
      <section style={{minHeight:'90vh',display:'flex',alignItems:'center',padding:'0 40px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 70% 60% at 65% 40%, rgba(216,90,48,0.12) 0%, transparent 70%)',pointerEvents:'none'}} />
        <div style={{position:'relative',maxWidth:'680px'}}>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(64px,9vw,120px)',lineHeight:0.9,letterSpacing:'2px',marginBottom:'28px'}}>
            VON<br/>
            <span style={{color:'#D85A30'}}>FOTO</span>
            <span style={{WebkitTextStroke:'1px rgba(240,237,232,0.25)',color:'transparent'}}>GRAFEN</span><br/>
            FÜR<br/>
            <span style={{color:'#D85A30'}}>FOTO</span>GRAFEN
          </h1>
          <p style={{fontSize:'17px',color:'#888780',lineHeight:1.7,maxWidth:'480px',marginBottom:'40px',fontWeight:300}}>
            Die <strong style={{color:'#F0EDE8',fontWeight:500}}>Community-Plattform</strong> für Fotografen in Deutschland, Österreich und der Schweiz.
          </p>
          <div style={{display:'flex',gap:'12px',marginBottom:'56px',flexWrap:'wrap'}}>
            <a href="/upload" style={{display:'flex',alignItems:'center',gap:'8px',padding:'14px 28px',borderRadius:'12px',background:'#D85A30',color:'#fff',fontWeight:500,fontSize:'15px'}}>📷 Jetzt mitmachen</a>
            <a href="#feed" style={{display:'flex',alignItems:'center',gap:'8px',padding:'14px 28px',borderRadius:'12px',border:'0.5px solid rgba(255,255,255,0.18)',color:'#F0EDE8',fontSize:'15px'}}>Bilder entdecken →</a>
          </div>
          <div style={{display:'flex',gap:'48px'}}>
            {[['2.400+','Fotografen'],['18.000+','Bilder'],['340+','Locations']].map(([n,l])=>(
              <div key={l}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'36px',letterSpacing:'1px'}}>{n}</div>
                <div style={{fontSize:'12px',color:'#888780',letterSpacing:'0.5px',marginTop:'4px'}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{padding:'80px 40px',background:'#141412'}}>
        <div style={{fontSize:'11px',letterSpacing:'3px',textTransform:'uppercase',color:'#D85A30',marginBottom:'16px'}}>Was dich erwartet</div>
        <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(40px,5vw,72px)',letterSpacing:'2px',lineHeight:1,marginBottom:'48px'}}>ALLES FÜR<br/><span style={{color:'#D85A30'}}>DEINE PASSION</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'14px'}}>
          {[
            {e:'📷',t:'Bilder hochladen & teilen',d:'JPG, PNG, TIFF und RAW. EXIF-Daten werden automatisch erkannt.',c:'rgba(216,90,48,0.15)'},
            {e:'⭐',t:'4-dimensionale Bewertung',d:'Komposition, Licht, Technik und Wirkung – echtes Feedback.',c:'rgba(239,159,39,0.15)'},
            {e:'📍',t:'Locations im DACH-Raum',d:'Kuratierte Foto-Spots mit GPS-Koordinaten und Tipps.',c:'rgba(29,158,117,0.15)'},
            {e:'💼',t:'Job-Board',d:'Freelance, Festanstellung und Projekte für Fotografen.',c:'rgba(24,95,165,0.15)'},
            {e:'💡',t:'Tipps & Technik',d:'Wissen aus der Community – von Profis erklärt.',c:'rgba(127,119,221,0.15)'},
            {e:'📊',t:'Analytics Dashboard',d:'Views, Likes und Ratings auf einen Blick.',c:'rgba(8,80,65,0.2)'},
          ].map(f=>(
            <div key={f.t} style={{background:'#1C1C1A',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:'16px',padding:'26px'}}>
              <div style={{width:'44px',height:'44px',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px',marginBottom:'14px',background:f.c}}>{f.e}</div>
              <div style={{fontSize:'15px',fontWeight:500,marginBottom:'8px'}}>{f.t}</div>
              <div style={{fontSize:'13px',color:'#888780',lineHeight:1.6}}>{f.d}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:'120px 40px',textAlign:'center',borderTop:'0.5px solid rgba(255,255,255,0.07)'}}>
        <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(48px,6vw,96px)',letterSpacing:'2px',lineHeight:1,marginBottom:'20px'}}>WERDE TEIL DER<br/><span style={{color:'#D85A30'}}>COMMUNITY</span></h2>
        <p style={{fontSize:'16px',color:'#888780',maxWidth:'480px',margin:'0 auto 40px',lineHeight:1.6,fontWeight:300}}>Kostenlos starten und von tausenden Fotografen inspirieren lassen.</p>
        <a href="/auth/signin" style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'14px 32px',borderRadius:'12px',background:'#D85A30',color:'#fff',fontWeight:500,fontSize:'15px'}}>📷 Kostenlos registrieren</a>
      </section>
      <footer style={{padding:'32px 40px',borderTop:'0.5px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'16px'}}>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'20px',letterSpacing:'3px'}}>pixx<span style={{color:'#D85A30'}}>xx</span>.de</div>
        <div style={{display:'flex',gap:'24px'}}>
          {['Impressum','Datenschutz','AGB','Kontakt'].map(l=><a key={l} href="#" style={{fontSize:'12px',color:'#888780'}}>{l}</a>)}
        </div>
        <div style={{fontSize:'12px',color:'#888780'}}>© 2026 pixxxx.de</div>
      </footer>
    </div>
  )
}
