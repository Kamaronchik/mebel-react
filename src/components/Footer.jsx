import React from 'react'
import mebello from '../assets/mebello.png'
import social from '../assets/social.png'
import contact from '../assets/conatact.png'

const Footer = () => {
    return (
        <footer className="bg-white border-t pt-10 pb-6 px-8 text-black">
            <div className="flex justify-between items-start gap-8">

                <div className="flex flex-col gap-3 text-black">
                    <img src={mebello} alt="mebello" className="h-10" />
                    <p className="font-bold text-lg text-black">+7 (4872) 710-150</p>
                </div>

                <div className="flex gap-12 text-sm text-black">

                    <div>
                        <p className="font-semibold mb-2 text-black">Каталог</p>
                        <ul className="space-y-1 text-black">
                            <li>Ангажемент</li>
                            <li>Фабрика Мирлачева</li>
                            <li>Pro Son</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold mb-2 text-black">Покупателю</p>
                        <ul className="space-y-1 text-black">
                            <li>Как оплатить</li>
                            <li>Как получить</li>
                            <li>Гарантия</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold mb-2 text-black">О компании</p>
                        <ul className="space-y-1 text-black">
                            <li>Новости</li>
                            <li>Контакты</li>
                            <li>Отзывы</li>
                        </ul>
                    </div>

                </div>

                <div>
                    <img src={social} alt="socials" className="h-10 object-contain" />
                </div>

            </div>

            <div className="mt-8 border-t pt-4 flex justify-between text-xs text-black">
                <p>© Mebello, 2024.</p>
                <p>Сайт разработан в Это Все</p>
            </div>
        </footer>
    )
}

export default Footer