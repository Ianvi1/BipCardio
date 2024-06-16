import { useState, useEffect, useRef } from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import './manual1.css';
import { IoIosArrowBack } from "react-icons/io";

const Manual1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const manualRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentRefs = manualRefs.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveIndex(currentRefs.indexOf(entry.target as HTMLDivElement));
        }
      });
    }, options);

    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <div className="CarouselManualArea">
        {['ManualArea1', 'ManualArea2', 'ManualArea3', 'ManualArea4', 'ManualArea5'].map((className, index) => (
          <div key={index} className={className} ref={el => manualRefs.current[index] = el}>
            <div className={`ImageManual${index + 1}`}></div>
            <h1 className={`NameTitle${index + 1}`}>
              {index === 0 && 'Manual'}
              {index === 1 && 'Como Usar o Dispositivo'}
              {index === 2 && 'Como Usar o Dispositivo'}
              {index === 3 && 'Precauções de Segurança'}
              {index === 4 && 'Precauções de Segurança'}
            </h1>
            {index === 0 && <p className="DescManual1">Este é um manual criado para orientar e explicar o uso do dispostivo, puxe/deslize para esquerda ou direita para ver cada uma das orientações.</p>}
            {index === 1 && (
              <>
                <p className="DescManual2">• Ligar ou desligar: Pressione o botão para iniciar ou desligar.</p>
                <p className="DescManual3">• Vestimenta do aparelho: Coloque-o em seu pulso e conecte as fivelas em volta de seu pulso para que o dispositivo não caia.</p>
                <p className="DescManual4">• Monitoramento Passivo: Uma vez ativado, o dispositivo monitorará passivamente os batimentos cardíacos do usuário ao longo do dia.</p>
              </>
            )}
            {index === 2 && (
              <>
                <p className="DescManual5">• Resposta aos Alertas: Quando receber um alerta indicando uma possível crise de ansiedade, o usuário pode tomar medidas para acalmar-se, como praticar técnicas de respiração profunda, meditação ou outras estratégias de gerenciamento da ansiedade que serão fornecidas pelo aplicativo.</p>
                <p className="DescManual6">• Feedback e Ajustes: O alerta vem de um sensor de vibração.</p>
              </>
            )}
            {index === 3 && (
              <>
                <p className="DescManual7">• Carregar o dispositivo antes de utilizar.</p>
                <p className="DescManual8">• Não o carregue em lugares de alta temperaturas, como acima de 60°C. Pois pode causar mal funcionamento do aparelho.</p>
                <p className="DescManual9">• Evitar ao máximo quedas do dispositivo, ele não possui grande resistência a impactos brutos. Isso poderá danificar permanentemente o aparelho.</p>
              </>
            )}
            {index === 4 && (
              <>
                <p className="DescManual10">• Evitar em utilizar o dispositivo em exercícios físicos (em geral), os exercícios podem interferir na análise de batimentos, podendo acionar a vibração de maneira equivocada.</p>
                <p className="DescManual11">• Tomar cuidado ao usar o dispositivo e segurar uma criança, pode causar ferimentos.</p>
                <p className="DescManual12">• Tomar cuidado ao se envolver em exercícios e trabalhos brutos, para que não possa te ferir ou ferir aos outros.</p>
                <p className="DescManual13">• Não use o aparelho em saunas ou em qualquer ambiente que deixará o dispositivo muito quente e úmido.</p>
                <p className="DescManual14">• Não utilize a pulseira muito apertada para que assim o dispositivo possa fazer uma boa análise de batimentos.</p>
                <p className="DescManual15">• Advertência: Não remova nenhum componente de dentro do dispositivo.</p>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="BarCircleView">
        {[0, 1, 2, 3, 4].map((_, index) => (
          <div key={index} className={`Circle ${activeIndex === index ? 'filled' : ''}`}></div>
        ))}
      </div>

      <Navbar />
      <Link to="/sdcarc" className="ReturnArrowSD"><IoIosArrowBack color="#FFF" size={44} /></Link>
    </div>
  );
};

export default Manual1;
