/* ==========================================
   福緣金香堂 - 主要功能腳本
   ========================================== */

// 初始化 Lucide Icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// ==========================================
// 常數定義
// ==========================================
const SCROLL_THRESHOLD = 50;
const CAROUSEL_INTERVAL = 5000;

// ==========================================
// 導航欄滾動效果
// ==========================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (!navbar) return;
    
    if (window.scrollY > SCROLL_THRESHOLD) {
        navbar.classList.add('glass-nav', 'nav-shadow', 'py-2');
        navbar.classList.remove('py-4', 'bg-transparent');
    } else {
        navbar.classList.remove('glass-nav', 'nav-shadow', 'py-2');
        navbar.classList.add('py-4', 'bg-transparent');
    }
});

// ==========================================
// 手機版選單控制
// ==========================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMobileMenu() {
    if (!mobileMenu || !mobileMenuBtn) return;
    
    const isHidden = mobileMenu.hidden;
    mobileMenu.hidden = !isHidden;
    mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', isHidden);
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// 鍵盤支援：Escape 鍵關閉選單
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.hidden) {
        toggleMobileMenu();
        if (mobileMenuBtn) mobileMenuBtn.focus();
    }
});

// 點擊選單項目後關閉選單
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) {
            mobileMenu.hidden = true;
            mobileMenu.classList.add('hidden');
        }
        if (mobileMenuBtn) {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// ==========================================
// 輪播圖功能
// ==========================================
const track = document.getElementById('carouselTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const indicators = document.querySelectorAll('.carousel-indicator');

// Error Boundary Check
if (track && nextBtn && prevBtn && indicators.length > 0) {
    const slides = Array.from(track.children);
    let currentIndex = 0;
    let autoPlayInterval;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.classList.remove('active');
                indicator.setAttribute('aria-current', 'false');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, CAROUSEL_INTERVAL);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // 事件監聽
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    indicators.forEach(indicator => {
        indicator.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.dataset.slideIndex);
            updateCarousel();
            stopAutoPlay();
            startAutoPlay();
        });
    });

    // 鼠標互動時暫停輪播
    if (track.parentElement) {
        track.parentElement.addEventListener('mouseenter', stopAutoPlay);
        track.parentElement.addEventListener('mouseleave', startAutoPlay);
    }

    // 啟動自動輪播
    startAutoPlay();
}

// ==========================================
// 服務項目資料
// ==========================================
const servicesData = [
    {
        title: "八字流年詳批",
        desc: "透過您的出生年月日時，排出專屬命盤。陳師父將詳細解說您命格中的五行強弱、喜用神，並分析大運與流年的互動關係。<br><br>不論是事業轉職、創業時機、感情緣分或健康隱憂，都能透過八字提前預知，讓您在人生的十字路口做出最有利的選擇。",
        img: "https://images.unsplash.com/photo-1533282960533-51328aa49826?q=80&w=800&auto=format&fit=crop",
        alt: "八字命盤解析情境圖"
    },
    {
        title: "新生兒命名 / 改名",
        desc: "名字是送給孩子的第一份禮物。我們不僅考量字音、字義的優美，更重視配合孩子的生辰八字，找出五行缺補。<br><br>好的名字能補足先天的不足，為孩子帶來好人緣與貴人運，是父母對子女最深切的祝福。",
        img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
        alt: "新生兒命名祝福情境圖"
    },
    {
        title: "婚嫁開業擇日",
        desc: "「天時、地利、人和」，天時為首。無論是結婚嫁娶、入宅安香、公司開業或動土興工，挑選一個黃道吉日至關重要。<br><br>我們會避開沖煞，選擇對當事人最有利的良辰吉時，讓您的重要時刻順順利利，喜氣洋洋。",
        img: "https://images.unsplash.com/photo-1505932794465-14a119329224?q=80&w=800&auto=format&fit=crop",
        alt: "傳統黃曆擇日情境圖"
    },
    {
        title: "陽宅風水鑑定",
        desc: "家是安身立命之所，風水好壞直接影響居住者的運勢與健康。師父將親臨現場，使用羅盤測量方位。<br><br>針對財位佈置、床位擺放、門窗氣流等提出專業建議，化解樑煞、穿堂煞等問題，打造藏風聚氣的開運好宅。",
        img: "https://images.unsplash.com/photo-1632759887707-167814b6099f?q=80&w=800&auto=format&fit=crop",
        alt: "風水羅盤測量情境圖"
    },
    {
        title: "補財庫 / 收驚",
        desc: "感覺最近財來財去守不住？或是心神不寧、睡不安穩？我們提供傳統道教科儀服務。<br><br>透過嚴謹的補財庫儀式，修補漏財缺口；或透過收驚安神，讓您找回內心的平靜。所有儀式皆使用本店嚴選的正純金香。",
        img: "https://images.unsplash.com/photo-1600609842388-51954464896e?q=80&w=800&auto=format&fit=crop",
        alt: "傳統祈福補財庫儀式情境圖"
    }
];

// ==========================================
// 服務項目切換功能
// ==========================================
function changeService(index) {
    const items = document.querySelectorAll('.service-item');
    
    items.forEach((item, i) => {
        const isSelected = i === index;
        if (isSelected) {
            item.classList.add('active');
            item.classList.remove('border-transparent');
        } else {
            item.classList.remove('active');
            item.classList.add('border-transparent');
        }
        item.setAttribute('aria-selected', isSelected);
    });

    const img = document.getElementById('service-img');
    const title = document.getElementById('service-title');
    const desc = document.getElementById('service-desc');
    const contentContainer = document.getElementById('service-content');
    
    // 安全檢查
    if (!img || !title || !desc || !contentContainer) return;
    
    const data = servicesData[index];

    // 動畫重置
    contentContainer.classList.remove('fade-in');
    void contentContainer.offsetWidth; // 觸發 reflow
    contentContainer.classList.add('fade-in');

    // 設置數據
    img.src = data.img;
    img.alt = data.alt;
    title.innerText = data.title;
    desc.innerHTML = data.desc;
}

// 為服務項目添加事件監聽器
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => changeService(index));
    item.addEventListener('click', () => changeService(index));
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            changeService(index);
        }
    });
});
