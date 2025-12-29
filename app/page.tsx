export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <h1>Daniel Soares Masuda</h1>
        <h2>Analista de Infraestrutura e Redes | DevOps em formação</h2>
        <p>
          Analista de Infraestrutura e Redes, estudante de Ciência da Computação,
          com sólida experiência em segurança de rede, gerenciamento de
          firewalls, servidores e monitoramento de ambientes críticos.
        </p>

        <div className="hero-actions">
          <a className="btn-primary" href="/cv-daniel-masuda.pdf" download>
            Download CV
          </a>
          <a className="btn-outline" href="#contato">
            Contato
          </a>
        </div>
      </header>

      {/* SOBRE */}
      <section className="section">
        <h3>Sobre mim</h3>
        <p>
          Atuo diretamente na proteção da matriz e filiais por meio de soluções
          avançadas de VPN e Firewall SonicWall, além do gerenciamento de
          servidores em nuvem.
          <br /><br />
          Possuo forte vivência em infraestrutura de redes, wireless corporativo,
          monitoramento com Zabbix e Grafana e administração do Microsoft 365.
          Atualmente, meu foco principal está em DevOps, redes e segurança da
          informação.
        </p>
      </section>

      {/* DADOS */}
      <section className="section card">
        <h3>Informações pessoais</h3>
        <ul className="info-list">
          <li><strong>Idade:</strong> 26 anos</li>
          <li><strong>Cidade:</strong> Goiânia – GO</li>
          <li><strong>Email:</strong> danielmasuda12@hotmail.com</li>
          <li><strong>Website:</strong> m4sud4.com.br</li>
          <li><strong>Nacionalidade:</strong> Brasileiro (descendente de japonês)</li>
        </ul>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h3>Skills Técnicas</h3>

        {[
          ["Linux", 85],
          ["Windows Server", 80],
          ["Firewall SonicWall", 90],
          ["Redes TCP/IP", 85],
          ["Zabbix", 90],
          ["Grafana", 85],
          ["VPN", 85],
          ["Docker", 70],
          ["Cloud / VPS", 75],
          ["Node.js", 65],
        ].map(([skill, value]) => (
          <div key={skill} className="skill">
            <span>{skill}</span>
            <div className="bar">
              <div style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </section>

      {/* EXPERIÊNCIA */}
      <section className="section">
        <h3>Experiência Profissional</h3>

        <div className="job">
          <h4>Farmácia Artesanal — Analista de TI Pleno</h4>
          <span>Dez/2023 – Atual | Goiânia – GO</span>

          <ul>
            <li>Gerenciamento de Firewall SonicWall</li>
            <li>Implementação de VPNs Site-to-Site e Client</li>
            <li>Monitoramento com Zabbix e Grafana</li>
            <li>Administração de servidores em nuvem</li>
            <li>Infraestrutura de redes e wireless corporativo (UniFi)</li>
            <li>Administração do Microsoft 365</li>
            <li>Documentação técnica e suporte à decisão</li>
          </ul>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section card">
        <h3>Contato</h3>

        <div className="socials">
          <a href="https://github.com/Masuda1" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/daniel-masuda-4a550521b/" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/danielmasuda_/" target="_blank">Instagram</a>
          <a href="https://wa.me/5562982070867" target="_blank">WhatsApp</a>
          <a href="mailto:danielmasuda12@hotmail.com">Email</a>
        </div>
      </section>

      <footer className="footer">
        © 2025 — Daniel Soares Masuda
      </footer>
    </>
  );
}
