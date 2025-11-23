import Image from "next/image"
import { Phone, Rocket, MessageCircle, Clock, Camera } from "lucide-react"

export default function Home() {
  return (
    <div 
      className="min-h-screen relative md:bg-none"
      style={{
        backgroundImage: 'url(/images/telegram-cloud-photo-size-2-5266982038370193190-y.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Бегущая строка в самом верху */}
      <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="px-4 text-white font-medium text-sm md:text-base">
             • Работаем круглосуточно • Доставка в течение 30 минут • Фото букета перед отправкой • Лучший магазин 2025 года •
          </span>
          <span className="px-4 text-white font-medium text-sm md:text-base">
             • Работаем круглосуточно • Доставка в течение 30 минут • Фото букета перед отправкой • Лучший магазин 2025 года •
          </span>
        </div>
      </div>
      
      {/* Легкое затемнение фона */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto py-8 md:py-12 lg:py-16 relative z-10 pt-12 md:pt-16">
        {/* Логотипы как на bazilike.ru */}
        <div className="mb-12 md:mb-16 lg:mb-20 flex justify-center items-center gap-8 md:gap-12 lg:gap-16 flex-col px-4">
          <Image
            src="/images/48861301.png"
            alt="Мастер и Маргаритка"
            width={600}
            height={300}
            className="object-contain w-96 h-auto sm:w-[448px] md:w-[512px] lg:w-[576px] xl:w-[640px]"
          />
            <Image
            src="/images/48861205.png"
              alt="Мастер и Маргаритка"
            width={500}
            height={240}
            className="object-contain w-80 h-auto sm:w-96 md:w-[448px] lg:w-[512px]"
            />
          </div>

        {/* Приветственный текст - стиль как на bazilike.ru */}
        <div className="w-full mb-8 md:mb-12">
          <div className="mb-6 px-4 md:px-8 lg:px-12">
            <h1 className="text-[20px] md:text-[40px] font-medium text-white leading-[1.2] text-left md:text-center" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
              Приветствую дорогой посетитель<br />
              в <span className="bg-white text-black px-1.5 py-0.5">лучшем цветочном</span> салоне<br />
              по мнению Яндекс Карт и 2ГИС
          </h1>
          </div>
          <div className="px-4 md:px-8 lg:px-12">
            <p className="text-base md:text-[16px] text-white leading-[1.5] font-normal text-left md:text-center" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
              Хотим тебя поздравить, ведь ты стал<br />
              <span className="bg-[#FFCD05] text-black px-1.5 py-0.5">постоянным клиентом с 10% скидкой</span> на<br />
              готовые букеты цветов
            </p>
          </div>
        </div>

        {/* Информационный стенд */}
        <div className="max-w-2xl mx-auto mb-12 md:mb-16 px-4">
          <div className="p-6 md:p-8">
            <h2 className="text-[32px] md:text-[40px] font-medium text-white mb-6 md:mb-8 text-center leading-[1.2]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
              Как оформить заказ?
            </h2>

            <div className="space-y-3 md:space-y-4">
              {/* Желтая кнопка - Позвонить */}
              <a
                href="tel:+79209842696"
                className="flex items-center gap-4 w-full bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-[#1a1a1a] font-medium text-base md:text-lg px-6 py-4 md:py-5 rounded-xl transition-all shadow-md hover:shadow-lg"
                style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
              >
                <Phone className="w-6 h-6 md:w-7 md:h-7 text-[#1a1a1a] flex-shrink-0" />
                <span>Позвонить</span>
              </a>

              {/* Серая кнопка - WhatsApp */}
              <a
                href="https://wa.me/79209862680"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] font-medium text-base md:text-lg px-6 py-4 md:py-5 rounded-xl transition-all shadow-md hover:shadow-lg"
                style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
              >
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Заказать в WhatsApp</span>
              </a>

              {/* Серая кнопка - ВКонтакте */}
              <a
                href="https://vk.com/salon_miflower"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] font-medium text-base md:text-lg px-6 py-4 md:py-5 rounded-xl transition-all shadow-md hover:shadow-lg"
                style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
              >
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#0077FF] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.785 16.241s.289-.033.437-.2c.136-.155.132-.447.132-.447s-.02-1.297.58-1.489c.593-.189 1.354.953 2.156 1.374.607.322 1.068.251 1.068.251l2.142-.03s1.117-.07.588-.953c-.043-.072-.308-.652-1.585-1.844-1.341-1.25-1.161-.524.453-1.604.984-.832 1.38-1.339 1.253-1.556-.116-.199-.833-.147-.833-.147l-2.154.013s-.16-.022-.278.049c-.115.069-.188.229-.188.229s-.337.897-.783 1.66c-.946 1.59-1.325 1.675-1.479 1.58-.359-.234-.27-.939-.27-1.438 0-1.562.237-2.214-.464-2.384-.234-.056-.405-.092-1.003-.098-.767-.007-1.413.002-1.78.19-.25.128-.443.413-.326.428.146.019.476.088.649.322.226.3.218.976.218.976s.13 1.921-.302 2.16c-.296.166-.702-.173-1.575-1.547-.447-.685-.786-1.44-.786-1.44s-.051-.125-.142-.192c-.11-.082-.263-.108-.263-.108l-2.05.013s-.314.009-.43.147c-.103.124-.008.38-.008.38s1.643 3.853 3.5 5.793c1.705 1.773 3.652 1.656 3.652 1.656h.863z"/>
                </svg>
                <span>Мы ВКонтакте</span>
              </a>

              {/* Серая кнопка - Telegram */}
              <a
                href="https://t.me/salon_miflower"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] font-medium text-base md:text-lg px-6 py-4 md:py-5 rounded-xl transition-all shadow-md hover:shadow-lg"
                style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
              >
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#0088cc] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span>Мы в Telegram</span>
              </a>

              {/* Серая кнопка - Яндекс Карты с значком */}
              <a
                href="https://yandex.ru/navi/org/master_i_margaritka/65094233798"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] font-medium text-base md:text-lg px-6 py-4 md:py-5 rounded-xl transition-all shadow-md hover:shadow-lg relative"
                style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
              >
                <div className="relative flex-shrink-0">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#FC3F1D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
                  </svg>
                  <svg className="absolute -top-1 -right-1 w-4 h-4" fill="#FFD700" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span>Мы на Яндекс.Картах</span>
              </a>

              {/* Серая кнопка - 2ГИС с значком */}
              <a
                href="https://2gis.ru/ryazan/geo/70000001089047549/39.789315,54.606177"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] font-medium text-base md:text-lg px-6 py-4 md:py-5 rounded-xl transition-all shadow-md hover:shadow-lg relative"
                style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
              >
                <div className="relative flex-shrink-0">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#1E88E5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <svg className="absolute -top-1 -right-1 w-4 h-4" fill="#FFD700" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span>Мы на 2Гис</span>
              </a>

              {/* Серая кнопка - Авито */}
              <a
                href="https://www.avito.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] font-medium text-base md:text-lg px-6 py-4 md:py-5 rounded-xl transition-all shadow-md hover:shadow-lg"
                style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
              >
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#00A0E3] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.045 5.282c.282 0 .499.09.65.27.151.18.226.44.226.78v1.12h1.568c.174 0 .313.044.417.131a.558.558 0 0 1 .156.405v8.564a.558.558 0 0 1-.156.405.548.548 0 0 1-.417.131H8.555a.548.548 0 0 1-.417-.131.558.558 0 0 1-.156-.405V8.288c0-.164.052-.297.156-.405a.548.548 0 0 1 .417-.131h1.569V6.332c0-.34.075-.6.226-.78.15-.18.367-.27.65-.27h.528zm.085 2.604v5.823h2.17V7.886h-2.17z"/>
                </svg>
                <span>Мы на Авито</span>
              </a>
            </div>
          </div>
        </div>

        {/* Блок преимуществ - как на bazilike.ru */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16 px-4">
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Быстрая доставка */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>
                <h3 className="text-[22px] font-bold text-white mb-3 leading-[1.3]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                  Быстрая доставка
                </h3>
                <p className="text-base text-white leading-[1.5] font-normal" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                  Доставим букет в выбранный вами интервал
                </p>
          </div>

              {/* Отвечаем в течение минуты */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
        </div>
                <h3 className="text-[22px] font-bold text-white mb-3 leading-[1.3]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                  Отвечаем в течении минуты
                </h3>
                <p className="text-base text-white leading-[1.5] font-normal" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                  Экономим Ваше время на оформлении
                </p>
            </div>

              {/* Быстрая сборка букета */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Clock className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                    </div>
                <h3 className="text-[22px] font-bold text-white mb-3 leading-[1.3]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                  Быстрая сборка букета<br />от 20-и минут
                </h3>
                <p className="text-base text-white leading-[1.5] font-normal" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                  Благодаря большому штату флористов
                      </p>
                    </div>

              {/* Фото букета перед отправкой */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Camera className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-[22px] font-bold text-white mb-3 leading-[1.3]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                  Фото букета перед отправкой
                </h3>
                <p className="text-base text-white leading-[1.5] font-normal" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                  Экономим Ваше время на оформлении
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Галерея фотографий - "Фото счастливых клиентов" */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16 px-4">
          <div className="p-6 md:p-8">
            <h2 className="text-[32px] md:text-[40px] font-medium text-white mb-6 md:mb-8 text-center leading-[1.2]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
              Фото счастливых клиентов
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {[
                "/images/48862627.jpg",
                "/images/48862629.jpg",
                "/images/48862633.jpg",
                "/images/48862635.jpg",
                "/images/48862639.jpg",
                "/images/48862647.jpg",
              ].map((src, idx) => (
                <div key={idx} className="relative aspect-square rounded-[30px] overflow-hidden group cursor-pointer">
                <Image
                    src={src}
                    alt={`Счастливый клиент ${idx + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-110 duration-500"
                />
              </div>
              ))}
            </div>
          </div>
            </div>

        {/* Отзывы - сохраняем как есть */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 px-4">
          <div className="p-6 md:p-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-[32px] md:text-[40px] font-medium text-white mb-4 leading-[1.2]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                Отзывы наших клиентов
              </h2>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-2xl font-medium text-white" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>4.9</span>
                  <span className="text-white text-base" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>(84 оценки)</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#1E88E5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-base font-medium text-white" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>Премия 2ГИС</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              {/* Отзыв 1 */}
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    ))}
                  </div>
                  <span className="text-sm text-white" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>Яндекс Карты</span>
                </div>
                <p className="text-base text-white mb-2 leading-[1.5] font-normal" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                  Потрясающий магазин! Букет был собран очень быстро и точно в срок. Цветы свежие, букет выглядел точно как на фото. Обязательно буду заказывать еще!
                </p>
                <p className="text-sm text-white" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>— Елена</p>
              </div>

              {/* Отзыв 2 */}
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    ))}
                  </div>
                  <span className="text-sm text-white" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>2ГИС</span>
                </div>
                <p className="text-base text-white mb-2 leading-[1.5] font-normal" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                  Заказывала букет на день рождения маме. Флорист подобрал идеальную композицию, доставили точно в назначенное время. Мама была в восторге!
                </p>
                <p className="text-sm text-white" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>— Анна</p>
              </div>

              {/* Отзыв 3 */}
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    ))}
                  </div>
                  <span className="text-sm text-white" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>Яндекс Карты</span>
              </div>
                <p className="text-base text-white mb-2 leading-[1.5] font-normal" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                  Очень довольна сервисом! Ответили в течение минуты, собрали букет быстро, прислали фото перед отправкой. Всё на высшем уровне!
                </p>
                <p className="text-sm text-white" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>— Мария</p>
            </div>
          </div>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://yandex.ru/navi/org/master_i_margaritka/65094233798"
                  target="_blank"
                  rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-xl transition-all text-base backdrop-blur-sm"
                style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
                >
                <svg className="w-5 h-5 text-[#FC3F1D]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Яндекс.Карты
                </a>
                <a
                  href="https://2gis.ru/ryazan/geo/70000001089047549/39.789315,54.606177"
                  target="_blank"
                  rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-xl transition-all text-base backdrop-blur-sm"
                style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}
                >
                <svg className="w-5 h-5 text-[#1E88E5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                  2ГИС
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
