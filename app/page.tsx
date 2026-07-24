import Image from "next/image";

const paths = [
  ["digital", "https://www.comunidadedigital.com.br", "Digital."],
  ["viral", "https://viral1min.com", "Viral em 1 minuto"],
  ["select", "https://form.respondi.app/7Ad7MQlP", "Mentoria Select"],
  ["referencia", "https://mabia3.yayforms.link/OJkrkZm", "Referência"],
  ["resultados", "https://drive.google.com/file/d/1TLyDJIWTYWEdAOAhPNIM3jX_89j_cbZt/view?usp=sharing", "Resultados de alunas"],
  ["whatsapp", "https://api.whatsapp.com/message/IUGU3RYNWTQWG1?autoload=1&app_absent=0", "Fale com a equipe"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="grain" />
        <div className="orb orbA" />
        <div className="orb orbB" />
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="Thaylor Jobs">Thaylor <span>Jobs</span></a>
          <span className="online"><i /> ONLINE</span>
        </header>

        <div className="hero-content">
          <p className="eyebrow">Marketing na área da beleza</p>
          <h1>Torne-se <em>referência.</em></h1>
          <p className="hero-lead">Aprenda a se posicionar, viralizar e vender todos os dias.</p>
        </div>

        <div className="portrait-stage" aria-hidden="true">
          <div className="portrait-halo" />
          <Image className="portrait" src="/images/portrait.png" alt="" width={800} height={800} priority />
        </div>

        <a className="next-step" href="#escolha">
          <span><strong>Escolha seu próximo passo</strong><small>Veja os caminhos disponíveis</small></span>
          <b aria-hidden="true">↓</b>
        </a>
      </section>

      <section className="choices" id="escolha">
        <div className="section-title"><p>Seu próximo nível</p><h2>Feito para você virar referência.</h2></div>
        <div className="cards">
          {paths.map(([image, href, label]) => (
            <a key={image} className="art-card" href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Image src={`/images/${image}.png`} alt="" width={1080} height={360} />
              <span className="card-shine" />
            </a>
          ))}
        </div>
      </section>

      <section className="about">
        <p>Sobre mim</p>
        <div><h2>Eu construo os bastidores das grandes referências.</h2><p>Moro na Espanha e já liderei mais de 90 lançamentos, criei mais de 300 cursos e participei da construção de especialistas que hoje são referência. Meu trabalho conecta branding, posicionamento, funis, produtos e imagem para transformar conhecimento em um negócio digital lucrativo.</p></div>
      </section>

      <footer><a className="wordmark" href="#top">Thaylor <span>Jobs</span></a><span>© 2026 • Todos os direitos reservados</span></footer>
      <a className="team-float" href="https://api.whatsapp.com/message/IUGU3RYNWTQWG1?autoload=1&app_absent=0" target="_blank" rel="noreferrer">Fale com a equipe <b>↗</b></a>
    </main>
  );
}
