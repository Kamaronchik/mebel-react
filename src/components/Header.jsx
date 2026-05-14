import React from 'react'
import BabyMobile from '../assets/Baby-Mobile.png';
import BedroomInterior from '../assets/Bedroom_Interior.png';
import Blankie from '../assets/Blankie.png';
import Pillow from '../assets/Pillow.png';
import Sheets1 from '../assets/Sheets-1.png';
import Sheets from '../assets/Sheets.png';
import bg from '../assets/bg.png';
import tovar from '../assets/tovar.png';
import strelka from '../assets/strelka.png';
import proson from '../assets/pro_son.png';

const Header = () => {
    return (
        <>
            <div className="drawer drawer-open h-190 overflow-hidden">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    <nav className="navbar w-full bg-base-300 text-black">
                        <label
                            htmlFor="my-drawer-4"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost text-black"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                strokeLinejoin="round" strokeLinecap="round"
                                strokeWidth="2" fill="none" stroke="currentColor"
                                className="my-1.5 inline-block size-4">
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                <path d="M9 4v16"></path>
                                <path d="M14 10l2 2l-2 2"></path>
                            </svg>
                        </label>

                        <div className='flex justify-between w-full items-center text-black'>
                            <p className="font-semibold text-black">Каталог</p>

                            <div className='flex gap-6 text-black'>
                                <p>О нас</p>
                                <p>Акции</p>
                                <p>Отзывы</p>
                                <p>Покупателям</p>
                                <p>Контакты</p>
                            </div>

                            <div className="flex items-center gap-4 text-black">
                                <p className="font-semibold text-black">+7 (4872) 710-150</p>

                                <div className="indicator">
                                    <span className="indicator-item badge badge-warning badge-sm text-black">2</span>
                                    <button className="btn btn-circle btn-warning btn-sm text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="relative w-full h-[700px] overflow-hidden">
                        <img src={bg} alt="bg" className="w-full h-full object-cover" />

                        <img
                            src={tovar}
                            alt="tovar"
                            className="absolute bottom-0 left-1/4 h-[90%] object-contain"
                        />

                        <div className="absolute right-16 top-1/2 -translate-y-1/2 text-right text-black">
                            <h1 className="text-6xl font-light mb-4 text-black">
                                Матрас Monday<br />80 x 200
                            </h1>

                            <div className="flex items-center justify-end gap-4 mb-6 text-black">
                                <span className="text-2xl line-through">15 750 ₽</span>
                                <span className="text-4xl font-bold">13 388 ₽</span>
                            </div>

                            <ul className="text-left space-y-2 text-black">
                                <li className="flex items-center gap-2">
                                    <img src={strelka} alt="" />
                                    Независимый блок «TFK 5 Zone»
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src={strelka} alt="" />
                                    Максимальная нагрузка – 140 кг
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src={strelka} alt="" />
                                    Высота матраса - 20 см
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

                    <div className="flex min-h-full flex-col items-start bg-base-200 text-black
                        is-drawer-close:w-14 is-drawer-open:w-64">

                        <div className="is-drawer-close:hidden w-full px-4 py-3 space-y-2 border-b border-base-300 text-black">
                            <img src={proson} alt="" />
                            <div className="bg-white rounded p-2 text-center text-xs text-black">
                                Фабрика Мирлачева
                            </div>
                            <div className="bg-base-content text-black rounded p-2 text-center text-xs font-bold tracking-wider">
                                АНГАЖЕМЕНТ
                            </div>
                        </div>

                        <ul className="menu w-full grow text-black">
                            <li>
                                <button data-tip="Матрасы">
                                    <img src={Sheets} alt="" className="size-5" />
                                    <span>Матрасы</span>
                                </button>
                            </li>
                            <li>
                                <button data-tip="Подушки">
                                    <img src={Pillow} alt="" className="size-5" />
                                    <span>Подушки</span>
                                </button>
                            </li>
                            <li>
                                <button data-tip="Спальня">
                                    <img src={BedroomInterior} alt="" className="size-5" />
                                    <span>Спальня</span>
                                </button>
                            </li>
                            <li>
                                <button data-tip="Топеры">
                                    <img src={Sheets1} alt="" className="size-5" />
                                    <span>Топеры</span>
                                </button>
                            </li>
                            <li>
                                <button data-tip="Аксесуары">
                                    <img src={Blankie} alt="" className="size-5" />
                                    <span>Аксесуары</span>
                                </button>
                            </li>
                            <li>
                                <button data-tip="Детям">
                                    <img src={BabyMobile} alt="" className="size-5" />
                                    <span>Детям</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header