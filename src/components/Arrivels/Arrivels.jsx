import React from 'react'
import s from "./Arrivels.module.scss";

const Arrivels = () => {
  return (
    <>
      <section className={s.arrivels}>
        <div className="container">
          <div className={s.new}>
            <h2>NEW ARRIVALS</h2>

            <div className={s.cards}>
              <div className={s.card}>
                <img src="/Frame1.png" alt="" />
                <p>T-SHIRT WITH TAPE DETAILS</p>
                <div className={s.marks}>
                  <img src="/Frame6.svg" alt="" />
                  <p>4.5/5</p>
                </div>
                <h4>$120</h4>
              </div>
              <div className={s.card}>
                <img src="/image 8.png" alt="" />
                <p>SKINNY FIT JEANS</p>
                <div className={s.marks}>
                  <img src="/image 9.png" alt="" />
                  <p>3.5/5</p>
                </div>
                <div className={s.price}>
                  <h4>$240</h4>
                  <s>$260</s>
                  <p>-20%</p>
                </div>
              </div>
              <div className={s.card}>
                <img src="/Frame3.png" alt="" />
                <p>CHECKERED SHIRT</p>
                <div className={s.marks}>
                  <img src="/Frame6.svg" alt="" />
                  <p>4.5/5</p>
                </div>
                <h4>$180</h4>
              </div>
              <div className={s.card}>
                <img src="/Frame4.png" alt="" />
                <p>SLEEVE STRIPED T-SHIRT</p>
                <div className={s.marks}>
                  <img src="/Frame6.svg" alt="" />
                  <p>4.5/5</p>
                </div>
                <div className={s.price}>
                  <h4>$130</h4>
                  <s>$160</s>
                  <p>-30%</p>
                </div>
              </div>
            </div>

            <div className={s.btn}>
              <button className={s.button}>View All</button>
            </div>
          </div>

          <div className={s.top}>
            <h2>TOP SELLING</h2>

            <div className={s.cards}>
              <div className={s.card}>
                <img src="/Frame8.png" alt="" />
                <p>T-SHIRT WITH TAPE DETAILS</p>
                <div className={s.marks}>
                  <img src="/Frame6.svg" alt="" />
                  <p>4.5/5</p>
                </div>
                <div className={s.price}>
                  <h4>$212</h4>
                  <s>$232</s>
                  <p>-20%</p>
                </div>
              </div>
              <div className={s.card}>
                <img src="/Frame9.png" alt="" />
                <p>SKINNY FIT JEANS</p>
                <div className={s.marks}>
                  <img src="/Frame7.svg" alt="" />
                  <p>3.5/5</p>
                </div>
                <h4>$145</h4>
              </div>
              <div className={s.card}>
                <img src="/Frame10.png" alt="" />
                <p>CHECKERED SHIRT</p>
                <div className={s.marks}>
                  <img src="/Frame5.svg" alt="" />
                  <p>4.5/5</p>
                </div>
                <h4>$80</h4>
              </div>
              <div className={s.card}>
                <img src="/Frame11.png" alt="" />
                <p>SLEEVE STRIPED T-SHIRT</p>
                <div className={s.marks}>
                  <img src="/Frame6.svg" alt="" />
                  <p>4.5/5</p>
                </div>
                  <h4>$80</h4>
              </div>
            </div>

            <div className={s.btn}>
              <button className={s.button}>View All</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Arrivels
