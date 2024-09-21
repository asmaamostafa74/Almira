document.addEventListener('DOMContentLoaded', function () {
    const languageToggle = document.getElementById('language-toggle');
    const homePage = document.getElementById('home');
    const businessText = document.getElementById('business-text');
    const aboutUs = document.getElementById('about-us');
    const contactUs = document.getElementById('contact-us');
    const almeraSection = document.getElementById('almeraSection');
    const almiraGroup = document.getElementById('almiraGroup');
    const paraOne = document.getElementById('paraOne');
    const paraTwo = document.getElementById('paraTwo');
    const paraThree = document.getElementById('paraThree');
    const listOne = document.getElementById('listOne');
    const listTwo = document.getElementById('listTwo');
    const listThree = document.getElementById('listThree');
    const paraFour = document.getElementById('paraFour');
    const listFour = document.getElementById('listFour');
    const listFive = document.getElementById('listFive');
    const listSix = document.getElementById('listSix');
    const EmployeNumbers = document.getElementById('EmployeNumbers');
    const yoExpearience = document.getElementById('yoExpearience');
    const noProjects = document.getElementById('noProjects');
    const bLine = document.getElementById('bLine');
    const bMembers = document.getElementById('bMembers');
    const nMember = document.getElementById('nMember');
    const aboutMember = document.getElementById('aboutMember');
    const headTitle = document.getElementById('headTitle');
    const address = document.getElementById('address');
    const sectors = document.getElementById('sectors');
    const sector1 = document.getElementById('sector1');
    const sector2 = document.getElementById('sector2');
    const sector3 = document.getElementById('sector3');
    const sector4 = document.getElementById('sector4');
    const sector5 = document.getElementById('sector5');

    const englishFont = 'Rubik';
    const arabicFont = "'Cairo', sans-serif";
    
    function switchToEnglish() {
        homePage.textContent = 'Home';
        businessText.textContent = 'Businesses';
        aboutUs.textContent = 'About Us';
        contactUs.textContent = 'Contact Us';
        almeraSection.textContent = 'Almira Sections';
        almiraGroup.textContent = 'about Almira group';
        paraOne.textContent = 'Since the beginning of the twentieth century, Abdulghani Ibrahim Al Meera started trading spices from his shop located in the small market opposite the Grand Mosque in Mecca. The business then grew.';
        paraTwo.textContent = 'In 1977, Abdulghani Ibrahim Al Meera laid the foundation stone for Al Meera Trading and Importing Establishment.';
        paraThree.textContent = 'In 1989, Abdul Latif and Mustafa, sons of Abdulghani Ibrahim Al Meera, established Al Meera Trading Center Limited Company, which included the following:';
        listOne.textContent = 'Furniture and Carpets Division.';
        listTwo.textContent = 'Medical Division.';
        listThree.textContent = 'Contracting and Maintenance Division.';
        paraFour.textContent = 'Then in 1992, sons of Abdulghani Ibrahim Al Meera established Al Meera Investment Group, which included the following:';
        listFour.textContent = 'Al Meera Steammatic';
        listFive.textContent = 'Al Meera Optics Limited Company';
        listSix.textContent = 'Al Meera Carpet Factory';
        EmployeNumbers.textContent = 'Working Employment';
        yoExpearience.textContent = 'Years In Business';
        noProjects.textContent = 'Projects';
        bLine.textContent = 'Business Lines';
        bMembers.textContent = 'Board Members';
        nMember.textContent = 'Salah Al-Mira';
        headTitle.textContent = 'Head Office';
        address.textContent = 'Dammam - Khobar Road, Nasiriyah, Dammam, Kingdom of Saudi Arabia.';
        aboutMember.textContent = 'Founder of Al-Mira Group, which specializes in several different fields';
        sectors.textContent = 'Sectors';
        sector1.textContent = 'AL-MIRA OPTICS CO.LTD.';
        sector2.textContent = 'AL-MIRA STEAMATIC';
        sector3.textContent = 'Contracting & Maintenancr Division';
        sector4.textContent = 'Al-Mira Medical';
        sector5.textContent = 'Al-Mira For Carpet And Furniture';
        document.body.style.fontFamily = englishFont;
        languageToggle.children[0].textContent = 'Arabic';
        localStorage.setItem('language', 'english');
    }

    function switchToArabic() {
        homePage.textContent = 'الرئيسية';
        businessText.textContent = 'قطاعات الأعمال';
        aboutUs.textContent = 'عنا';
        contactUs.textContent = 'اتصل بنا';
        almeraSection.textContent = 'قطاعات الأعمال';
        almiraGroup.textContent = 'مجموعة الميره';
        paraOne.textContent = 'منذ بداية القرن العشرين، بدأ عبد الغني إبراهيم الميرة في تجارة التوابل من محله المتواجد في السوق الصغير مقابل المسجد الحرام بمكة المكرمة. و من ثم نمى العمل كما فعلت عائلته.';
        paraTwo.textContent = 'في عام 1977، وضع عبد الغني إبراهيم ميرة حجر الأساس لمؤسسة الميرة للتجارة والاستيراد.';
        paraThree.textContent = 'وفي عام 1989 قام عبداللطيف ومصطفى أبناء عبدالغني إبراهيم ميرة بتأسيس شركة مركز الميرة للتجارة المحدودة وتضمنت ما يلي:';
        listOne.textContent = 'قسم الأثاث والسجاد.';
        listTwo.textContent = 'القسم الطبي.';
        listThree.textContent = 'قسم المقاولات والصيانة.';
        paraFour.textContent = 'ثم في عام 1992، قام أبناء عبد الغني إبراهيم ميرة بتأسيس مجموعة الميرة الاستثمارية وتضمنت ما يلي:';
        listFour.textContent = 'الميرا ستيماتيك.';
        listFive.textContent = 'شركة الميرة للبصريات المحدودة.';
        listSix.textContent = 'مصنع الميرة للسجاد.';
        EmployeNumbers.textContent = 'العمالة';
        yoExpearience.textContent = 'سنوات الخبرة';
        noProjects.textContent = 'المشاريع';
        bLine.textContent = 'خطوط الأعمال';
        bMembers.textContent = 'أعضاء مجلس الإدارة';
        nMember.textContent = 'صلاح الميره';
        aboutMember.textContent = 'مؤسس مجموعة شركات الميرة القابضة المتخصصة في عدة مجالات مختلفة';
        headTitle.textContent = 'المكتب الرئيسي';
        address.textContent = 'طريق الدمام الخبر، حى الناصرية، الدمام، المملكة العربية السعودية';
        sectors.textContent = 'قطاعات الأعمال';
        sector1.textContent = 'شركة الميره للبصريات.';
        sector2.textContent = 'شركة الميره ستيماتيك';
        sector3.textContent = 'شركة المقاولات والصيانة';
        sector4.textContent = 'شركة المعدات واللوازم الطبية';
        sector5.textContent = 'شركة مصنع الميره للسجاد ';
        document.body.style.fontFamily = arabicFont;
        languageToggle.children[0].textContent = 'English';
        localStorage.setItem('language', 'arabic');
    }

    if (localStorage.getItem('language') === 'arabic') {
        switchToArabic();
        document.body.classList.add('rtl');
    } else {
        switchToEnglish();
        document.body.classList.remove('rtl');
    }
    
    languageToggle.addEventListener('click', function () {
        if (localStorage.getItem('language') === 'arabic') {
            switchToEnglish();
            document.body.classList.remove('rtl');
        } else {
            switchToArabic();
            document.body.classList.add('rtl');
        }
    });
    
});
