import React from 'react'

function Data() {

    const data = [
        {
            id: 1,
            options: [
                {
                    text: "A",
                    mode: true
                },
                {
                    text: "B",
                    mode: false
                },
                {
                    text: "C",
                    mode: false
                }
            ]
        },
        {
            id: 2,
            options: [
                {
                    text: "Word dasturining o'ng tomondagi x tugmasi bosiladi",
                    mode: false
                },
                {
                    text: "“Fayl”(Файл) menyusining “Chiqish” (Выход)amali tanlanadi",
                    mode: false
                },
                {
                    text: "[Alt] va [F4] klavishlari birgalikda bosiladi",
                    mode: false
                },
                {
                    text: "Hammasidan",
                    mode: true
                }
            ]
        },
        {
            id: 3,
            options: [
                {
                    text: "Fayl menyusidan  (Сохранить) yoki   (Сохранить как…) buyrug'i tanlanadi.",
                    mode: true
                },
                {
                    text: "Fayl menyusidan (Создать) buyrug'i tanlanadi",
                    mode: false
                },
                {
                    text: "Word dasturining o'ng tomondagi x tugmasini bosiladi",
                    mode: false
                }
            ]
        },
        {
            id: 4,
            options: [
                {
                    text: "Protsessor,  Monitor,  Klaviatura, Sichqoncha",
                    mode: true
                },
                {
                    text: "Protsessor,  Printer,    Sichqoncha, Monitor",
                    mode: false
                },
                {
                    text: "Monitor,  Kalonka,  Mikrofon, Klaviatura",
                    mode: false
                },
                {
                    text: "Klaviatura, Web kamera,  Modem, Sichqoncha",
                    mode: false
                }
            ]
        },
        {
            id: 5,
            options: [
                {
                    text: "Tayyor hujjatning imlo hatolarini to'g'irlab boshqa holatga o'tkazish",
                    mode: true
                },
                {
                    text: "Tayyor hujjatni qog'ozga chop etish",
                    mode: false
                },
                {
                    text: "Qog'ozdagi hujjatni kompyuterga kiritish",
                    mode: false
                }
            ]
        },
        {
            id: 6,
            options: [
                {
                    text: "Вставка menyusidan таблица uskunasi tanlanadi",
                    mode: true
                },
                {
                    text: "Главная menyusidan Границы uskunasi tanlanadi",
                    mode: false
                },
                {
                    text: "Разметка страницы menyusidan колонки bo‘limidagi uskunalar orqali bajariladi",
                    mode: false
                },
                {
                    text: "Вид menyusidan сетка bayroqchasi tanlanadi",
                    mode: false
                }
            ]
        },
        {
            id: 7,
            options: [
                {
                    text: "Sichqoncha:  Kompyuterning asosiy qurilmasi.",
                    mode: false
                },
                {
                    text: "Sichqoncha: kompyuterning qo'shimcha qurilmasi",
                    mode: true
                },
                {
                    text: "Protsessor: Kompyuterning asosiy qurilmasi.",
                    mode: false
                },
                {
                    text: "Klaviatura: Kompyuterning asosiy qurilmasi.",
                    mode: false
                }
            ]
        },
        {
            id: 8,
            options: [
                {
                    text: "Insert",
                    mode: false
                },
                {
                    text: "← chap strelka",
                    mode: false
                },
                {
                    text: "delete",
                    mode: true
                },
                {
                    text: "Alt",
                    mode: false
                }
            ]
        },
        {
            id: 9,
            options: [
                {
                    text: "Word",
                    mode: false
                },
                {
                    text: "Excel",
                    mode: true
                },
                {
                    text: "Power point",
                    mode: false
                },
                {
                    text: "Total Commander",
                    mode: false
                }
            ]
        },
        {
            id: 10,
            options: [
                {
                    text: "Alt",
                    mode: false
                },
                {
                    text: "Ctrl",
                    mode: false
                },
                {
                    text: "Shift",
                    mode: true
                },
                {
                    text: "Tab",
                    mode: false
                }
            ]
        },
        {
            id: 11,
            options: [
                {
                    text: "1",
                    mode: true
                },
                {
                    text: "2",
                    mode: false
                },
                {
                    text: "3",
                    mode: false
                }
            ]
        },
        {
            id: 12,
            options: [
                {
                    text: "1",
                    mode: false
                },
                {
                    text: "2",
                    mode: false
                },
                {
                    text: "3",
                    mode: true
                }
            ]
        },
        {
            id: 13,
            options: [
                {
                    text: "1",
                    mode: false
                },
                {
                    text: "2",
                    mode: true
                },
                {
                    text: "3",
                    mode: false
                }
            ]
        },
        {
            id: 14,
            options: [
                {
                    text: "Qalin pilus ko'rinishiga kelganda",
                    mode: false
                },
                {
                    text: "Ingichka pilus ko'rinishga kelganda",
                    mode: true
                },
                {
                    text: "Yulduzcha ko'rinishga kelganda",
                    mode: false
                }
            ]
        },
        {
            id: 15,
            options: [
                {
                    text: "1",
                    mode: false
                },
                {
                    text: "2",
                    mode: true
                }
            ]
        },
        {
            id: 16,
            options: [
                {
                    text: "Qizil  rang ustun",
                    mode: false
                },
                {
                    text: "Qizil rang satr",
                    mode: false
                },
                {
                    text: "Ko'k rang ustun",
                    mode: true
                },
                {
                    text: "Ko'k rang satr",
                    mode: false
                }
            ]
        },
        {
            id: 17,
            options: [
                {
                    text: "Qizil  rang ustun",
                    mode: false
                },
                {
                    text: "Qizil rang satr",
                    mode: true
                },
                {
                    text: "Ko'k rang ustun",
                    mode: false
                },
                {
                    text: "Ko'k rang satr",
                    mode: false
                }
            ]
        },
        {
            id: 18,
            options: [
                {
                    text: "1",
                    mode: false
                },
                {
                    text: "2",
                    mode: true
                },
                {
                    text: "3",
                    mode: false
                },
                {
                    text: "4",
                    mode: false
                }
            ]
        },
        {
            id: 19,
            options: [
                {
                    text: "Taqdimot (Презентация) tayyorlash",
                    mode: false
                },
                {
                    text: "Xisoblash ishlari",
                    mode: false
                },
                {
                    text: "Xujjat (Документ) tayyorlash",
                    mode: true
                },
                {
                    text: "Slayd tayyorlash",
                    mode: false
                }
            ]
        },
        {
            id: 20,
            options: [
                {
                    text: "Word dasturida",
                    mode: false
                },
                {
                    text: "Excel",
                    mode: false
                },
                {
                    text: "Power point",
                    mode: true
                }
            ]
        },
        {
            id: 21,
            options: [
                {
                    text: "F1 yoki Enter tugmasi orqali",
                    mode: false
                },
                {
                    text: "F2 yoki MS Power point dasturining переходы menyusidan Просмотор bandi orqali",
                    mode: false
                },
                {
                    text: "F3 yoki MS Power point dasturining Анимация menyusidan Просмотор bandi orqali",
                    mode: false
                },
                {
                    text: "F5 yoki MS Power point dasturining Показ слайдов menyusidan С начала bandi orqali",
                    mode: true
                }
            ]
        },
        {
            id: 22,
            options: [
                {
                    text: "D1 =A2+B3",
                    mode: true
                },
                {
                    text: "D2   A2+B3=",
                    mode: false
                },
                {
                    text: "D3 =7+5",
                    mode: false
                }
            ]
        },
        {
            id: 23,
            options: [
                {
                    text: "4E - Katagi",
                    mode: false
                },
                {
                    text: "E4 - Katagi",
                    mode: true
                },
                {
                    text: "E - Ustunida",
                    mode: false
                },
                {
                    text: "4 - Satrida",
                    mode: false
                }
            ]
        },
        {
            id: 24,
            options: [
                {
                    text: "=            belgisi bilan",
                    mode: true
                },
                {
                    text: "-            belgisi bilan",
                    mode: false
                },
                {
                    text: "+            belgisi bilan",
                    mode: false
                },
                {
                    text: "Hech qanday belgisiz boshlanadi",
                    mode: false
                }
            ]
        },
        {
            id: 25,
            options: [
                {
                    text: "=7+5",
                    mode: false
                },
                {
                    text: "7+5=",
                    mode: false
                },
                {
                    text: "=A2+B3",
                    mode: true
                },
                {
                    text: "A2+B3=",
                    mode: false
                }
            ]
        },
    ]

  return {
    data
  }
}

export default Data