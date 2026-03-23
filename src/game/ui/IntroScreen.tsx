interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="intro-screen">
      <div className="intro-card">
        <h1>Travessia no Rio</h1>
        <p className="subtitle">Desafio de Pensamento Computacional</p>
        <div className="rules">
          <p>Leve o Lobo, a Ovelha e a Couve para a margem direita do rio utilizando o barco.</p>
          <ul>
            <li>🚢 O barco suporta o fazendeiro e no máximo 1 item.</li>
            <li>🐺 O lobo devora a ovelha se o fazendeiro os deixar sozinhos.</li>
            <li>🐑 A ovelha devora a couve se isolados sem supervisão da tela.</li>
          </ul>
        </div>
        <button onClick={onStart}>Iniciar Aventura</button>
      </div>
    </div>
  );
}
