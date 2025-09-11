import aboutProjectCardIcon_01 from "./assets/img/icons/aboutProjectCardIcon_01.svg";
import aboutProjectCardIcon_02 from "./assets/img/icons/aboutProjectCardIcon_02.png";
import aboutProjectCardIcon_03 from "./assets/img/icons/aboutProjectCardIcon_03.png";
import filmingSliderImage_01 from "./assets/img/filmingSliderImage_01.png";
import filmingSliderImage_02 from "./assets/img/filmingSliderImage_02.png";
import filmingSliderImage_03 from "./assets/img/filmingSliderImage_03.png";
import speakersImage_01 from "./assets/img/speakersImage_01.png";
import speakersImage_02 from "./assets/img/speakersImage_02.png";
import speakersImage_03 from "./assets/img/speakersImage_03.png";
import speakersImage_04 from "./assets/img/speakersImage_04.png";

export const urlPage = {
  home: '/',
}

export const aboutProjectDataCards = [
  {
    icon: aboutProjectCardIcon_01,
    title: 'Что интересного могут рассказать самые молодые и талантливые учёные Университета?',
    desc: 'О будущем, научных открытиях и разработках, о том, как новые исследования и технологии изменят нашу жизнь, о карьере и успехе. Многое. Универ-шоу «Бозон смысла» помогает услышать такие ответы. Потому что мы задаем правильные вопросы.'   
  },
  {
    icon: aboutProjectCardIcon_02,
    title: '«Бозон смысла» – медиа-проект Санкт-Петербургского государственного университета',
    desc: 'Наша цель – помочь вам услышать голоса науки. Чтобы сориентироваться не только в мире технологий и открытий, но и научиться отличать важную проверенную информацию от псевдонаучной болтовни.',   
  },
  {
    icon: aboutProjectCardIcon_03,
    desc: 'Мы изучаем научный ландшафт в мире, рассказываем о самых ярких достижениях, способных серьезно повлиять на жизнь каждого из нас, заглядываем в будущее и не забываем о прошлом. Проект соединяет не только науку и жизнь, теорию и практику, но и сложные формулы с понятными формулировками.'   
  }
]

export const filmingDataImages = [
  {
    id: 0,
    image: filmingSliderImage_01
  },
  {
    id: 1,
    image: filmingSliderImage_02
  },
  {
    id: 2,
    image: filmingSliderImage_03
  }
]

export const speakersData = [
    {
    id: 1,
    image: speakersImage_01,
    name: 'Константин Амелин',
    jobTitle: 'Кандидат физико-математических наук, Директор Центр искусственного интеллекта СПбГУ',
    bio: 'Директор Центра ИИ СПбГУ, ученый и инженер в области робототехники, искусственного интеллекта и мультиагентных систем с 15-летним опытом научной и практической деятельности. Автор 6 зарегистрированных патентов и многочисленных публикаций в ведущих международных журналах, участник престижных международных коллабораций с NTNU (Норвегия) и HUST (Китай). Обладает глубокой экспертизой в разработке систем управления для беспилотных летательных аппаратов (БПЛА), подводных робототехнических комплексов и распределенных вычислительных систем. Разработанные алгоритмы управления группами роботов в условиях неопределенности успешно применяются в логистике, мониторинге промышленных объектов и исследовании труднодоступных территорий. Совмещает научную работу с преподаванием курсов по робототехнике, искусственному интеллекту и мультиагентным технологиям в СПбГУ.',
    addClass: 'speakers__circle-image_1'  
  },
  {
    id: 2,
    image: speakersImage_02,
    name: 'Мария Ветрова',
    jobTitle: 'Кандидат экономических наук, доцент СПбГУ',
    bio: 'Описание будет позже',
    addClass: 'speakers__circle-image_2'
  },
  {
    id: 3,
    image: speakersImage_03,
    name: 'Ирина Тимофеева',
    jobTitle: 'Профессор СПбГУ, лауреат премии Президента России в области науки и инноваций для молодых учёных',
    bio: 'Описание будет позже',
    addClass: 'speakers__circle-image_3'
  },
  {
    id: 4,
    image: speakersImage_04,
    name: 'Ольга Якубович',
    jobTitle: 'Кандидат геолого-минералогических наук, профессор СПбГУ, лауреат премии Президента Российской Федерации в области науки и инноваций для молодых ученых',
    bio: 'Описание будет позже',
    addClass: 'speakers__circle-image_4'
  }
]