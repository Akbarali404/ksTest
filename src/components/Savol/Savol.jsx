import React from "react";
import savol1 from "../image/1-savol.jpg";
import savol2 from "../image/1-savol2.jpg";
import savol3 from "../image/1-savol3.jpg";
import savol4 from "../image/1-savol4.jpg";
import mishka from "../image/mishka.jpg";
import bir from "../image/123.jpg";
import ontort from "../image/14.jpg";
import fayl from "../image/fayl.jpg";
import plus from "../image/plus.jpg";
import plus2 from "../image/plus2.jpg";
import plus3 from "../image/plus3.jpg";
import ustun from "../image/ustun.jpg";
import font from "../image/font.jpg";
import fun from "../image/22.jpg";
import qirbesh from "../image/45.jpg";
import oxiri from "../image/oxiri.jpg";

function Savol({ value }) {
  return (
    <div>
      <div className="savol__container">
        {/* 1-savol */}
        <div className={value == 1 ? "" : "none"}>
          <div className="savol">
            <h2>
              Quyidagi qaysi maydon shrift turini o'zgartirishga imkon beradi?
            </h2>
            <img src={savol1} alt="" />

            <div className="variantlar">
              <div className="flex">
                A: <img src={savol2} alt="" />
              </div>
              <div className="flex">
                B: <img src={savol3} alt="" />
              </div>
              <div className="flex">
                C: <img src={savol4} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* 2-savol */}
        <div className={value == 2 ? "" : "none"}>
          <div className="savol">
            <h2>
              MS Word dasturidan chiqish uchun quyidagi usullardan qaysi biridan
              foydalanish mumkin?
            </h2>
          </div>
        </div>

        {/* 3-savol */}
        <div className={value == 3 ? "" : "none"}>
          <div className="savol">
            <h2>
              Worda dasturidagi tayyorlangan hujjatni saqlash tartibini
              ko'rsatib bering?
            </h2>
          </div>
        </div>

        {/* 4-savol */}
        <div className={value == 4 ? "" : "none"}>
          <div className="savol">
            <h2>Kompyuterning asosiy qurilmalarini ko'rsating?</h2>
          </div>
        </div>

        {/* 5-savol */}
        <div className={value == 5 ? "" : "none"}>
          <div className="savol">
            <h2>
              Qaysi biri Word dasturida hujjatni qayta ishlashga misol bo'ladi?
            </h2>
          </div>
        </div>

        {/* 6-savol */}
        <div className={value == 6 ? "" : "none"}>
          <div className="savol">
            <h2>
              Hujjatlarga jadval joylashtirish uchun Word dasturida qanday
              amallar bajariladi?
            </h2>
          </div>
        </div>

        {/* 7-savol */}
        <div className={value == 7 ? "" : "none"}>
          <div className="savol">
            <img src={mishka} alt="" />
            <h2>Bu kompyuterning qanday qurilmasi va nomini ko'rsating?</h2>
          </div>
        </div>

        {/* 8-savol */}
        <div className={value == 8 ? "" : "none"}>
          <div className="savol">
            <h2>
              Kursorning o'ng tomonidagi belgini o'chirish uchun qaysi tugma
              ishlatiladi?
            </h2>
          </div>
        </div>

        {/* 9-savol */}
        <div className={value == 9 ? "" : "none"}>
          <div className="savol">
            <h2>Qaysi dasturda hisoblash ishlari bajariladi?</h2>
          </div>
        </div>

        {/* 10-savol */}
        <div className={value == 10 ? "" : "none"}>
          <div className="savol">
            <h2>
              So'zlardagi bosh harfni yozish uchun klaviaturaning qaysi
              tugmasidan qo'shimcha foydalanadi?
            </h2>
          </div>
        </div>

        {/* 11-savol */}
        <div className={value == 11 ? "" : "none"}>
          <div className="savol">
            <h2>
              Qaysi uskuna matndagi qatorlar orasini yani intervalini
              kattlashtiradi yoki kichraytiradi
            </h2>
            <img src={bir} alt="" />
          </div>
        </div>

        {/* 12-savol */}
        <div className={value == 12 ? "" : "none"}>
          <div className="savol">
            <h2>
              Qaysi uskuna matndagi qatorlarni granitsaga oladi yoki matnni
              tepa, pastiga va chap, o'ng tomoniga
            </h2>
            <img src={bir} alt="" />
          </div>
        </div>

        {/* 13-savol */}
        <div className={value == 13 ? "" : "none"}>
          <div className="savol">
            <h2>Qaysi uskuna matnni o'ng tomonga suradi.</h2>
            <img src={bir} alt="" />
          </div>
        </div>

        {/* 14-savol */}
        <div className={value == 14 ? "" : "none"}>
          <div className="savol">
            <img src={ontort} alt="" />
            <h2>
              Katakchadagi sonlarni 20 gacha nusxalashdan foydalanib hosil
              qilish uchun ustuga olib borilgan sichqoncha qanday ko'rinishga
              kelganda chap tomonini bosib surish kerak?
            </h2>
            <div className="flex">
              <img src={plus} alt="" />
              <img src={plus2} alt="" />
              <img src={plus3} alt="" />
            </div>
          </div>
        </div>

        {/* 15-savol */}
        <div className={value == 15 ? "" : "none"}>
          <div className="savol">
            <img src={fayl} alt="" />
            <h2>Qaysi biri fayl?</h2>
          </div>
        </div>

        {/* 16-savol */}
        <div className={value == 16 ? "" : "none"}>
          <div className="savol">
            <img src={ustun} alt="" />
            <h2>MS Excel dasturidagi ranglarning qaysi biri ustun?</h2>
          </div>
        </div>

        {/* 17-savol */}
        <div className={value == 17 ? "" : "none"}>
          <div className="savol">
            <img src={ustun} alt="" />
            <h2>MS Excel dasturidagai ranglarning qaysi biri satr?</h2>
          </div>
        </div>

        {/* 18-savol */}
        <div className={value == 18 ? "" : "none"}>
          <div className="savol">
            <img src={font} alt="" />
            <h2>
              Belgilangan matnga qalin (полужирний) stilini qo‘llash uchun Word
              dasturida qaysi tugmachadan foydalaniladi?
            </h2>
          </div>
        </div>

        {/* 19-savol */}
        <div className={value == 19 ? "" : "none"}>
          <div className="savol">
            <h2>Word dasturi yordamida nima ishlar qilish mumkin?</h2>
          </div>
        </div>

        {/* 20-savol */}
        <div className={value == 20 ? "" : "none"}>
          <div className="savol">
            <h2>Qaysi dasturda slayd (Taqdimot) yaratiladi?</h2>
          </div>
        </div>

        {/* 21-savol */}
        <div className={value == 21 ? "" : "none"}>
          <div className="savol">
            <h2>
              . Power point dasturida tayyorlangan slaydni katta ekranda ochish
              to'g'ri ko'rsatilgan qatorni belgilang.
            </h2>
          </div>
        </div>

        {/* 22-savol */}
        <div className={value == 22 ? "" : "none"}>
          <div className="savol">
            <img src={fun} alt="" />
            <h2>
              Ko'k va sariq rangli kataklar yig'indisi uchun D1, D2, D3, D4
              katakchalardagi ifodalardan qaysi biri formula bo'la oladi?
            </h2>
          </div>
        </div>

        {/* 23-savol */}
        <div className={value == 23 ? "" : "none"}>
          <div className="savol">
            <img src={qirbesh} alt="" />
            <h2>45 soni excel dasturining qaysi katagida turibdi?</h2>
          </div>
        </div>

        {/* 24-savol */}
        <div className={value == 24 ? "" : "none"}>
          <div className="savol">
            <h2>Excelda dasturida Formula qaysi belgi bilan boshlanadi?</h2>
          </div>
        </div>

        {/* 25-savol */}
        <div className={value == 25 ? "" : "none"}>
          <div className="savol">
            <img src={oxiri} alt="" />
            <h2>
              Excel dasturida A2 va B3 katakchadagi sonning yig'indisini
              hisoblash formulasi qaysi qatorda to'g'ri ko'rsatilgan?
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Savol;
