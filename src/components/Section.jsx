import React from 'react'
import Vancouver from '../assets/Vancouver.png'
import puf from '../assets/puf+.png'
import russia from '../assets/russia.png'
import fourforthree from '../assets/3in4.png'
import mebello from '../assets/mebello.png'
import sofa from '../assets/sofa.png'
import Forma from '../assets/Forma.png'
import social from '../assets/social.png'
import contact from '../assets/conatact.png'

const Section = () => {
    return (
        <div className="flex flex-col w-full">

            <div className="flex flex-wrap gap-4 p-6 bg-white w-full">
                <div className='mx-auto flex gap-9'>
                    <img src={Vancouver} alt="Vancouver" className="rounded-xl object-cover w-64 h-87" />
                    <img src={puf} alt="puf" className="rounded-xl object-cover w-64 h-87" />
                    <img src={russia} alt="russia" className="rounded-xl object-cover w-64 h-87" />
                    <img src={Vancouver} alt="Vancouver" className="rounded-xl object-cover w-64 h-87" />
                </div>

            </div>
            <div className="bg-[#f3f3f3] px-12 py-16">
                <div className="flex flex-col lg:flex-row items-center gap-14 max-w-7xl mx-auto">

                    <img
                        src={sofa}
                        alt="living room"
                        className="w-full lg:w-[600px] rounded-3xl object-cover"
                    />

                    <div className="max-w-xl">
                        <h2 className="text-4xl font-light text-gray-800 mb-8 leading-snug">
                            Mebello - особенный салон мебели <br /> в Туле
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-sm">
                            Салон Mebello - не просто магазин мебели на любой вкус.
                            Здесь представили широкая линейка производителей на
                            любой вкус. Наши основные преимущества. Далее
                            описательный текст на несколько абзацев.
                            <br /><br />
                            Салон Mebello - не просто магазин мебели на любой вкус.
                            Здесь представили широкая линейка производителей на
                            любой вкус. Наши основные преимущества. Далее
                            описательный текст на несколько абзацев.
                            <br /><br />
                            Салон Mebello - не просто магазин мебели на любой вкус.
                            Здесь представили широкая линейка производителей на
                            любой вкус. Наши основные преимущества. Далее
                            описательный текст на несколько абзацев.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex items-center justify-between px-12 py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f97316 0%, #a855f7 100%)' }}>
                <div className="z-10">
                    <h2 className="text-white text-4xl font-bold leading-tight mb-3">Не нашли того,<br />что искали?</h2>
                    <p className="text-white/80 text-sm mb-6">Оставьте свой номер и мы подберем для Вас всё, что нужно</p>
                    <div className="flex gap-3">
                        <input type="text" placeholder="Телефон" className="input input-sm bg-white/20 border-white/40 text-white placeholder-white/60 w-48" />
                        <button className="btn btn-sm bg-white text-orange-500 border-none font-bold">ОТПРАВИТЬ</button>
                    </div>
                </div>
                <img src={sofa} alt="sofa" className="absolute right-12 bottom-0 h-64 object-contain" />
            </div>

            <div className="bg-white py-10 px-8">
                <h2 className="text-center text-2xl font-bold tracking-widest mb-8">
                    ОТЗЫВЫ
                </h2>

                <div className="flex flex-wrap gap-6">

                    <div className="border rounded-xl p-4 flex-1 min-w-64">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-yellow-400 text-sm">★★★★★</span>
                            <span className="text-xs font-bold">4.8</span>
                            <span className="text-sm font-semibold ml-1">Юсуф</span>
                        </div>

                        <p className="text-xs text-gray-500 mb-1">Комментарий:</p>

                        <p className="text-xs text-gray-700 leading-relaxed">
                            В базу в итоге записано своих диванов, диваны именно так диваны,
                            они цепляю со своей стороны и диваны сделали одно предложение к себе.
                        </p>
                    </div>

                    <div className="border rounded-xl p-4 flex-1 min-w-64">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-yellow-400 text-sm">★★★★★</span>
                            <span className="text-xs font-bold">4.7</span>
                            <span className="text-sm font-semibold ml-1">
                                Антон Парзунев
                            </span>
                        </div>

                        <p className="text-xs text-gray-500 mb-1">Комментарий:</p>

                        <p className="text-xs text-gray-700 leading-relaxed">
                            В процессе искали диван с механизмом, чтобы он легко
                            трансформировался в кровать.
                        </p>
                    </div>

                    <div className="border rounded-xl p-4 flex-1 min-w-64">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-yellow-400 text-sm">★★★★★</span>
                            <span className="text-xs font-bold">5.0</span>
                            <span className="text-sm font-semibold ml-1">
                                Мария Зарубина
                            </span>
                        </div>

                        <p className="text-xs text-gray-500 mb-1">Комментарий:</p>

                        <p className="text-xs text-gray-700 leading-relaxed">
                            Помню как меня удивили когда мы задали кресло Ванкувер.
                            Теперь каждый вечер сидит и читает книги.
                        </p>
                    </div>

                </div>
            </div>

            <div className="relative w-full h-80 bg-gray-200">
                <iframe
                    title="map"
                    src="https://maps.google.com/maps?q=Тула,+Красноармейский+проспект+19&output=embed"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
                <div className="absolute left-8 top-1/2 ml-10 ">
                    <img src={contact} alt="mebello" className="h-28 mb-3" />
                </div>
            </div>

        </div>
    )
}

export default Section