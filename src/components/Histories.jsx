import React from 'react'
import './tailwind.css'
import Event from './Event.jsx'
import About	from './About.jsx'

export default () => (
  <section id='hist' class="text-gray-600 body-font">
    <About title='History' subtitle='イベントやインターンなど、人と関わるのが好きです'/>
    <div class="container px-5 py-10 pb-10 mx-auto flex flex-wrap">
      <Event date="2014/04" title="明石高専 電気情報工学科 入学" description="" />
      <Event date="2014" title="パソコン甲子園 出場" description="競技プログラミングとの出会いです。" />
      <Event date="2015/03" title="Hack U Kosen 本戦出場" description="Javaを用いて学習中の集中力維持をサポートするAndroidアプリを作成しました。" />
      <Event date="2016/08~" title="カナダ留学" description="カナダが好きです。Samuel Robertson Technical Secondary にて1ヶ月の間、留学しました。数学、物理学、カナダの法律や文学を学びました。" />
      <Event date="2016" title="バスケットボール部 副キャプテン" description="バスケットボールが好きです。" />
      <Event date="2018" title="起業" description="経済的な不安から起業しました。" />
      <Event date="2019/04" title="豊橋技術科学大学 情報知能工学課程 入学" description="" />
      <Event date="2019/09" title="ICAICTA2019 研究ポスター発表" description="国際学会ICAICTA にて、高専での分散計算についての研究についてポスター発表を行いました。" />
      <Event date="2019/12" title="ええじゃないか学生ハッカソン in 豊橋 開催" description="オープンデータについてのハッカソンを開催しました。実行委員長を務めました。" />
      <Event date="2019/12" title="コミックマーケット97" description="技術同人誌に文章を寄せました。" />
      <Event date="2020/08~" title="ヤフー株式会社 エンジニアインターン" description="" />
      <Event date="2020/11" title="第16回WI2研究会 研究発表" description="学術情報の研究について研究発表を行いました。" />
      <Event date="2021/04" title="豊橋技術科学大学大学院 知能情報工学専攻 入学" description="" />
      <Event date="2021/08~" title="株式会社VOYAGE GROUP Treasure エンジニアインターン" description="" />
    </div>
  </section>
)