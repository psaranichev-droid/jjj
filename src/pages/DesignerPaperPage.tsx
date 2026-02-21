import Hero from '../components/Hero';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: "Knight Color",
    desc: "Целлюлозные тонированные в массе художественные бумаги, глубоких, ярких тонов",
    image: "https://images.unsplash.com/photo-1586075010623-26c50dec4a45?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Rubber Like",
    desc: "Коллекция бумаги с матовым покрытием, напоминающим резину",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Galaxy Metallic",
    desc: "Окрашенная в массе дизайнерская бумага с металлизированным покрытием",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Fiber Art",
    desc: "Коллекция немелованных дизайнерских бумаг в натуральных природных оттенках",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Color Style Smooth",
    desc: "Тонированные в массе дизайнерские бумаги и картоны насыщенного чёрного цвета",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Knight Black",
    desc: "Коллекция чистоцеллюлозной тонированной в массе, гладкой дизайнерской бумаги пастельных оттенков",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800"
  }
];

const steps = [
  {
    num: "1",
    title: "Определитесь с видами дизайнерской бумаги",
    desc: "Для начала нужно изучить образцы и каталоги дизайнерской бумаги в нашем шоуруме, находящемся по адресу: Нижний Новгород, ул. Баумана, д. 48к1."
  },
  {
    num: "2",
    title: "Проверка наличия остатков",
    desc: "Мы используем специальную программу, чтобы проверить наличие бумаги на нашем складе и складах поставщиков."
  },
  {
    num: "3",
    title: "Расчёт стоимости",
    desc: "Уточняем все детали Вашего заказа: резка, упаковка, доставка, торговое предложение и в итоге озвучиваем Вам полную стоимость заказа."
  },
  {
    num: "4",
    title: "Оформление заказа",
    desc: "Если все условия Вас устраивают, то тогда на этом этапе Вы осуществляете оплату заказа тем путем, который мы ранее с Вами обсудили."
  },
  {
    num: "5",
    title: "Ждём доставку бумаги от поставщика",
    desc: "Срок доставки составляет от 1 дня до 4 недель. В любом случае вы будете знать заранее, когда бумага поступит от поставщика к нам."
  },
  {
    num: "6",
    title: "Приёмка и осмотр бумаги",
    desc: "Когда бумага пришла от поставщика, мы её тщательно осматриваем. Если есть повреждения, делаем фото/видео фиксацию."
  },
  {
    num: "7",
    title: "Резка бумаги",
    desc: "Осуществляем резку Вашей бумаги на нашем профессиональном оборудовании в нужные размеры."
  },
  {
    num: "8",
    title: "Упаковка",
    desc: "Упакуем готовую нарезанную бумагу в ту упаковку, которую мы согласовали на этапе Расчёт стоимости."
  },
  {
    num: "9",
    title: "Доставка или Самовывоз",
    desc: "Осуществляем доставку собственными силами или через транспортные/курьерские компании, также возможен самовывоз из шоурума."
  },
  {
    num: "10",
    title: "Подписание документов",
    desc: "Для юридических лиц выставляем УПД с НДС, для физических — высылаем электронный чек на почту или в мессенджер."
  }
];

const DesignerPaperPage = () => {
  return (
    <div className="bg-white">
      <Hero
        title={`Ищете, где купить
дизайнерскую бумагу?`}
        description="Мы создаём красивые и притягательные проекты. Разрабатываем сервис, который помогает людям развивать бизнес и совершенствовать рабочие процессы."
        backgroundImage="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=2000"
        overlayColor="bg-indigo-950/80"
        buttons={[
          { label: 'Смотреть каталог', href: '/catalog', primary: true },
          { label: 'Посетить шоурум', href: '/showroom' }
        ]}
      />

      {/* Коллекции */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-3">Коллекции</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-rubik tracking-normal">Коллекции дизайнерской бумаги</h3>
            <p className="text-lg text-slate-600 font-inter leading-relaxed">
              Выбирать дизайнерскую бумагу по картинке в интернете рискованно, потому что цвета на экране искажаются, текстура не видна, а итоговая печать способна разочаровать.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {collections.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 transition-all group overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold text-slate-900 mb-3 font-rubik tracking-normal">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-inter mb-8 flex-1">{item.desc}</p>
                  <button className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group-hover:text-indigo-700">
                    Подробнее <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-10 rounded-[2.5rem] bg-indigo-50 border border-indigo-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 font-rubik tracking-normal">Важно знать!</h4>
                <p className="text-slate-700 font-inter leading-relaxed">
                  Выбирать дизайнерскую бумагу по картинке в интернете рискованно — цвета на экране искажаются, текстура не видна, а итоговая печать способна разочаровать. Рекомендуем посетить наш шоурум и оценить образцы лично.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Процесс</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-rubik tracking-normal">Этапы работ</h3>
            <p className="text-slate-600 text-lg font-inter">Расписали для Вас совершенно ясную и понятную структуру этапов работы</p>
          </div>

          <div className="relative">
            {/* Central Vertical Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 border-l-2 border-dashed border-slate-300"></div>

            <div className="space-y-16">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className={`flex flex-col lg:flex-row items-center ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className="w-full lg:w-1/2 lg:px-12 mb-8 lg:mb-0">
                      <motion.div 
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                      >
                        <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest font-inter">Шаг {step.num}</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4 font-rubik tracking-normal">{step.title}</h4>
                        <p className="text-slate-600 leading-relaxed font-inter">{step.desc}</p>
                      </motion.div>
                    </div>

                    {/* Step Number Badge on the Line (Desktop) */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-indigo-600 rounded-full z-10 items-center justify-center text-indigo-600 font-bold text-sm shadow-xl">
                      {step.num}
                    </div>

                    {/* Empty half for desktop layout */}
                    <div className="hidden lg:block lg:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignerPaperPage;
