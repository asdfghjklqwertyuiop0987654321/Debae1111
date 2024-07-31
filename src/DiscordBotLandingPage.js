import React, { useState, useEffect, useCallback } from 'react';
import { ArrowDown, ArrowRight, Bug, Soup, NotebookPen, X } from 'lucide-react';

// 이미지 import
import chatBotImage from './images/report.mp4';
import notebookImage from './images/note.mp4';
import mealsImage from './images/meal.mp4';
import logoImage from './images/logo.png';
import botIcon from './images/logo.png';

const Modal = ({ isOpen, onClose, children, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className={`bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto relative ${className}`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

const FeatureCard = React.memo(({ icon, title, description, videoSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ${isHovered ? 'scale-105 shadow-lg' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="relative mb-4 overflow-hidden rounded-lg cursor-pointer"
          style={{ paddingTop: '80%' }} // 5:4 비율 유지
          onClick={() => setIsModalOpen(true)}
        >
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            {icon}
          </div>
          <video 
            src={videoSrc} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            muted
            loop
            playsInline
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="aspect-w-5 aspect-h-4 max-w-full max-h-[80vh]">
          <video 
            src={videoSrc} 
            className="w-full h-full object-contain" 
            controls 
            autoPlay 
            loop
          />
        </div>
      </Modal>
    </>
  );
});

const smoothScroll = (target) => {
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
};

const NavItem = ({ href, children }) => (
  <li className="md:ml-6">
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        smoothScroll(href);
      }}
    >
      {children}
    </a>
  </li>
);

const TermsOfService = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-3/4 max-w-5xl h-[90vh] rounded-lg flex flex-col">
        <div className="flex justify-between items-center p-4 bg-blue-200">
          <h2 className="text-2xl font-bold">이용약관</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <aside className="w-1/4 p-4 bg-blue-100 overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">목차</h3>
            <ul>
              <li className="mb-2">
                <a href="#section1" onClick={(e) => { e.preventDefault(); smoothScroll('#section1'); }}>제 1 장 총칙</a>
              </li>
              <li className="mb-2">
                <a href="#section2" onClick={(e) => { e.preventDefault(); smoothScroll('#section2'); }}>제 2 장 이용계약</a>
              </li>
              <li className="mb-2">
                <a href="#section3" onClick={(e) => { e.preventDefault(); smoothScroll('#section3'); }}>제 3 장 계약 당사자의 의무</a>
              </li>
              <li className="mb-2">
                <a href="#section4" onClick={(e) => { e.preventDefault(); smoothScroll('#section4'); }}>제 4 장 서비스의 제공 및 이용</a>
              </li>
              <li className="mb-2">
                <a href="#section5" onClick={(e) => { e.preventDefault(); smoothScroll('#section5'); }}>제 5 장 기타</a>
              </li>
              <li className="mb-2">
                <a href="#section6" onClick={(e) => { e.preventDefault(); smoothScroll('#section6'); }}>부칙</a>
              </li>
              <li className="mb-2">
                <a href="#section7" onClick={(e) => { e.preventDefault(); smoothScroll('#section7'); }}>개인정보 처리방침</a>
              </li>
            </ul>
          </aside>
          <main className="flex-1 p-4 overflow-y-auto">
            <section id="section1" className="mb-8">
              <h3 className="text-xl font-bold mb-2">제 1 장 총칙</h3>
              <p><strong>제 1 조 (목적)</strong></p>
              <p>본 약관은 개인(이하 "개발자"라 합니다)이 운영하는 디스코드 봇 서비스 '데베'(이하 "봇"이라 합니다)에서 제공하는 온라인 서비스(이하 "서비스"라 합니다)를 이용함에 있어 봇과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
              <p><strong>제 2 조 (용어의 정의)</strong></p>
              <p>본 약관에서 사용하는 용어는 다음과 같이 정의한다.</p>
              <ul>
                <li>“봇”이란 개발자가 디스코드 플랫폼에서 이용자에게 다양한 기능과 정보를 제공하기 위하여 개발한 소프트웨어 프로그램을 말합니다.</li>
                <li>“이용자”란 디스코드 플랫폼에서 봇을 이용하는 자를 말합니다.</li>
                <li>“명령어”라 함은 봇에게 특정 기능을 수행하도록 지시하는 구문을 말합니다.</li>
                <li>“데이터”라 함은 이용자가 봇을 통해 입력한 텍스트, 이미지, 기타 정보를 말합니다.</li>
              </ul>
              <p><strong>제 3 조 (약관의 공시 및 효력과 변경)</strong></p>
              <p>본 약관은 봇의 초기 설정 시 공지하며, 개발자는 사정변경 및 영업상 중요한 사유가 있을 경우 약관을 변경할 수 있으며 변경된 약관은 공지사항을 통해 공지합니다.</p>
              <p>본 약관 및 차후 개발자 사정에 따라 변경된 약관은 이용자에게 공시함으로써 효력을 발생합니다.</p>
              <p><strong>제 4 조 (약관 외 준칙)</strong></p>
              <p>본 약관에 명시되지 않은 사항이 전기통신기본법, 전기통신사업법, 정보통신촉진법, ‘전자상거래 등에서의 소비자 보호에 관한 법률’, ‘약관의 규제에 관한 법률’, ‘전자거래기본법’, ‘전자서명법’, ‘정보통신망 이용촉진 등에 관한 법률’, ‘소비자보호법’ 등 기타 관계 법령에 규정되어 있을 경우에는 그 규정을 따르도록 합니다.</p>
            </section>
            <section id="section2" className="mb-8">
              <h3 className="text-xl font-bold mb-2">제 2 장 이용계약</h3>
              <p><strong>제 5 조 (이용신청)</strong></p>
              <p>이용자는 디스코드 플랫폼에서 봇을 추가하고 명령어를 입력함으로써 이용신청을 할 수 있습니다. 봇은 이용자의 디스코드 디스플레이 닉네임, 아이디를 얻을 수 있습니다.</p>
              <p><strong>제 6 조 (이용신청의 승낙)</strong></p>
              <p>개발자는 제5조에 따른 이용자에 대하여 서비스 이용을 승낙합니다. 개발자는 아래 사항에 해당하는 경우에 그 제한사유가 해소될 때까지 승낙을 유보할 수 있습니다.</p>
              <ul>
                <li>서비스 관련 설비에 여유가 없는 경우</li>
                <li>기술상 지장이 있는 경우</li>
                <li>기타 개발자 사정상 필요하다고 인정되는 경우</li>
              </ul>
              <p>개발자는 아래 사항에 해당하는 경우에 승낙을 하지 않을 수 있습니다.</p>
              <ul>
                <li>이용자 정보를 허위로 기재하여 신청한 경우</li>
                <li>사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우</li>
                <li>기타 개발자가 정한 이용신청 요건이 미비한 경우</li>
              </ul>
            </section>
            <section id="section3" className="mb-8">
              <h3 className="text-xl font-bold mb-2">제 3 장 계약 당사자의 의무</h3>
              <p><strong>제 7 조 (개발자의 의무)</strong></p>
              <p>개발자는 봇을 안정적이고 지속적으로 운영할 의무가 있습니다. 개발자는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정될 경우에는 즉시 처리해야 합니다. 단, 즉시 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 공지사항 또는 전자우편을 통해 통보해야 합니다. 제1항의 경우 수사상의 목적으로 관계기관 및 정보통신윤리위원회의 요청이 있거나 영장 제시가 있는 경우, 기타 관계 법령에 의한 경우는 예외로 합니다.</p>
              <p><strong>제 8 조 (이용자의 의무)</strong></p>
              <p>이용자는 본 약관 및 개발자의 공지사항, 봇 이용안내 등을 숙지하고 준수해야 하며 기타 개발자의 업무에 방해되는 행위를 해서는 안 됩니다.</p>
            </section>
            <section id="section4" className="mb-8">
              <h3 className="text-xl font-bold mb-2">제 4 장 서비스의 제공 및 이용</h3>
              <p><strong>제 9 조 (서비스 이용)</strong></p>
              <p>이용자는 본 약관의 규정된 사항을 준수해 봇을 이용합니다. 본 약관에 명시되지 않은 서비스 이용에 관한 사항은 개발자가 정해 공지사항에 게시하거나 또는 별도로 공지하는 내용에 따라 다릅니다.</p>
              <p><strong>제 10 조 (정보의 제공)</strong></p>
              <p>개발자는 이용자가 서비스 이용 중 필요하다고 인정되는 다양한 정보에 대하여 디스코드 메시지 등의 방법으로 이용자에게 정보를 제공할 수 있습니다.</p>
              <p><strong>제 11 조 (게시물 관리)</strong></p>
              <p>개발자는 건전한 통신문화 정착과 효율적인 봇 운영을 위하여 이용자가 게시하거나 제공하는 자료가 제12조에 해당한다고 판단되는 경우에 임의로 삭제, 자료이동, 등록거부를 할 수 있습니다.</p>
              <p><strong>제 12 조 (서비스 이용 책임)</strong></p>
              <p>이용자는 개발자에서 권한 있는 사원이 서명한 명시적인 서면에 구체적으로 허용한 경우를 제외하고는 서비스를 이용하여 불법상품을 판매하는 영업활동을 할 수 없으며 특히 해킹, 돈벌기 광고, 음란 사이트를 통한 상업행위, 상용 소프트웨어 불법 제공 등을 할 수 없습니다. 이를 어기고 발생한 영업활동의 결과 및 손실, 관계기관에 의한 구속 등 법적 조치 등에 관해서는 개발자가 책임을 지지 않습니다.</p>
            </section>
            <section id="section5" className="mb-8">
              <h3 className="text-xl font-bold mb-2">제 5 장 기타</h3>
              <p><strong>제 13 조 (면책조항)</strong></p>
              <p>개발자는 천재지변 또는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 개발자는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다. 개발자는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못하였거나 상실한 것에 대하여 책임을 지지 않습니다.</p>
              <p><strong>제 14 조 (분쟁해결)</strong></p>
              <p>개발자는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다. 개발자는 이용자로부터 제출되는 불만사항 및 의견을 신속하게 처리합니다. 다만 신속한 처리가 곤란한 경우 처리가 불가능 할 수 있습니다. 개발자와 이용자 간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.</p>
              <p><strong>제 15 조 (재판권 및 준거법)</strong></p>
              <p>개발자와 이용자 간에 제기된 전자상거래 소송에는 한국법을 적용합니다.</p>
            </section>
            <section id="section6" className="mb-8">
              <h3 className="text-xl font-bold mb-2">부칙</h3>
              <p>본 약관은 2024년 7월 19일부터 적용됩니다.</p>
            </section>
            <section id="section7" className="mb-8">
              <h3 className="text-xl font-bold mb-2">개인정보 처리방침</h3>
              <p>이 개인정보 처리방침은 데베가 사용자로부터 수집하는 개인정보의 종류, 수집 및 이용 목적, 보관 기간, 개인정보의 보호 및 관리 방침 등을 설명합니다.</p>
              <p><strong>제 1 조 (개인정보의 수집)</strong></p>
              <p>데베는 사용자로부터 다음과 같은 개인정보를 수집할 수 있습니다: 이름, 이메일 주소, 디스코드 ID 등.</p>
              <p><strong>제 2 조 (개인정보의 이용 목적)</strong></p>
              <p>수집된 개인정보는 다음과 같은 목적을 위해 이용될 수 있습니다: 서비스 제공, 사용자 문의 대응, 서비스 개선 등.</p>
              <p><strong>제 3 조 (개인정보의 보관 기간)</strong></p>
              <p>개인정보는 수집 및 이용 목적이 달성된 후 지체 없이 파기됩니다. 단, 관련 법령에 따라 보관할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관됩니다.</p>
              <p><strong>제 4 조 (개인정보의 보호 및 관리)</strong></p>
              <p>데베는 개인정보의 안전한 관리를 위해 다양한 보호 조치를 취하고 있습니다. 개인정보 접근 권한 제한, 암호화, 보안 시스템 도입 등이 그 예입니다.</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};





export default function DiscordBotLandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [showInitialView, setShowInitialView] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const threshold = window.innerHeight * 0.4; // 10% of viewport height

    if (!hasScrolled && scrolled > threshold) {
      setHasScrolled(true);
    }

    setShowInitialView(!hasScrolled && scrolled < threshold);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const revealThreshold = window.innerHeight * 0.75;
      if (rect.top < revealThreshold) {
        el.classList.add('revealed');
      }
    });
  }, [hasScrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {showInitialView && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col justify-center items-center text-white px-4 transition-opacity duration-300 z-50">
          <img src={botIcon} alt="데베 아이콘" className="w-32 h-32 mb-6 rounded-full shadow-lg animate-bounce" />
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 animate-pulse">
            국내에 없던 새 유틸봇 데베
          </h1>
          <div className="space-y-4">
            <a href="#features" 
               onClick={(e) => { e.preventDefault(); document.getElementById('features').scrollIntoView({ behavior: 'smooth' }); setHasScrolled(true); }} 
               className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-indigo-100 transition duration-300 block text-center">
              데베 정보보기 <ArrowRight className="inline ml-2" />
            </a>
            <a href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID" 
               className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition duration-300 block text-center">
              봇 초대하기 <ArrowRight className="inline ml-2" />
            </a>
          </div>
        </div>
      )}

      <nav className="bg-indigo-600 text-white p-4 sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logoImage} alt="Logo" className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold">데베</h1>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
          <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <NavItem href="#features">기능</NavItem>
            <NavItem href="#about">소개</NavItem>
            <NavItem href="#contact">서포트</NavItem>
            <li className="md:ml-6">
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-white"
              >
                이용약관
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`relative z-30 transition-opacity duration-300 ${showInitialView ? 'opacity-0' : 'opacity-100'}`}>
        <main className="container mx-auto py-12">
          <section id="features" className="mb-20 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
            <p className="text-center text-gray-600 mb-8">(아이콘에 마우스를 가져다 대면 예시사진이 나와요.)</p>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Bug className="text-indigo-500" size={48} />}
                title="Report"
                description="데베의 버그를 신고하면 개발자의 DM으로 연락이 가요."
                videoSrc={chatBotImage}
              />
              <FeatureCard
                icon={<NotebookPen className="text-indigo-500" size={48} />}
                title="NoteBook"
                description="개발자도 쉽게 볼 수 없는 당신만을 위한 메모장을 만들어줘요."
                videoSrc={notebookImage}
              />
              <FeatureCard
                icon={<Soup className="text-indigo-500" size={48} />}
                title="Search Meals"
                description="지역과 학교명을 적으면 그 학교의 급식을 보여줘요."
                videoSrc={mealsImage}
              />
            </div>
          </section>

          <section id="about" className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">데베에 대해</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              데베는 많은 사람들에게 유틸기능과 놀이기능을 제공해주기 위해 개발되었습니다. 
              24/7 가동되며, /신고하기 명령어로 바로바로 신고가 가능합니다.
            </p>
          </section>

          <section id="give-heart" className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">데베 하트주러 가기</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-4">
              데베에게 하트를 주고 싶으신가요? 아래 링크를 통해 하트를 보내주세요!
            </p>
            <a 
              href="https://koreanbots.dev/bots/1200806383159869532"
              className="text-red-500 hover:underline inline-block"
              style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}
            >
              데베에게 하트주기
            </a>
          </section>

          <section id="contact" className="text-center reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">문의하기</h2>
            <p className="mb-4">궁금한 점이 있으신가요? 언제든 이 서버에서 문의해주세요!</p>
            <a
              href="https://discord.gg/t4GRK6JN5N"
              className="text-indigo-600 hover:underline inline-block"
              style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}
            >
              데베의 디스코드 지원서버
            </a>
          </section>
        </main>

        <footer className="bg-indigo-600 text-white text-center py-4 mt-12">
          <p>&copy; 2024 데베. All rights reserved.</p>
        </footer>
      </div>

      <TermsOfService isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />

      <style jsx>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.3s, transform 0.3s;
        }
        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}