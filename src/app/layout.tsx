import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'pixxxx.de – Von Fotografen. Für Fotografen.',
  description: 'Die Fotografen-Community im DACH-Raum.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:50,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 40px',background:'rgba(10,10,8,0.88)',backdropFilter:'blur(20px)',borderBottom:'0.5px solid rgba(255,255,255,0.08)'}}>
          <a href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'26px',letterSpacing:'3px'}}>pixx<span style={{color:'#D85A30'}}>xx</span>.de</a>
          <div style={{display:'flex',gap:'32px'}}>
            <a href="/locations" style={{fontSize:'13px',color:'#888780'}}>Locations</a>
            <a href="/jobs" style={{fontSize:'13px',color:'#888780'}}>Jobs</a>
            <a href="/upload" style={{fontSize:'13px',color:'#888780'}}>Upload</a>
          </div>
          <a href="/auth/signin" style={{background:'#D85A30',borderRadius:'8px',padding:'7px 18px',fontSize:'13px',color:'#fff',fontWeight:500}}>Kostenlos starten</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
