import React from 'react'
import About from './About.jsx'


import portfolio from "../img/portfolio.png"
import vg from "../img/vg.jpeg"
import toyohashi from "../img/toyohashi.svg"
import toyolab from "../img/toyolab.png"
import neutodo from "../img/neutodo.png"
import hackukosen from "../img/hackukosen.png"
import icaicta from "../img/icaicta.png"
import realtimevoting from "../img/realtimevoting.png"


import noimage from "../img/noimage.png"


const Card = (props) => (
  <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src={props.image} alt="props.imageAlt" onError={(e) => e.target.src = noimage}/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.title}</div>
          <p class="text-gray-700 text-base">
            {props.description}
          </p>
        </div>
  </div>
)

export default () => (
  <section id='portfolio' class="text-gray-600 body-font">
    <About title='Portfolio' subtitle='技術で課題解決するのが好きです。'/>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <Card title='Hack U Kosen' imageAlt='' image={hackukosen} description='腕の動きから学習状況を判断し、学習をサポートするAndroidアプリ。学友と2人で作成し、Hack U Kosenの本戦に出場しました。初めてのAndroidアプリ経験でした。' />
      <Card title='大学施設予約システム' imageAlt='' image='' description='大学の施設予約をするWebアプリ。学友とチーム開発しました。' />
      <Card title='リアルタイム投票システム' imageAlt='' image={realtimevoting} description='会議を円滑に進めるためのWebアプリ。大学のサークル予算を決定する会議で用いられています。' />
      <Card title='neuTodo' imageAlt='' image={neutodo} description='ToDo管理のためのWebアプリ。NeumorphismというUIデザインを使ったクラウド同期型のTODOアプリケーション。' />
      <Card title='ええじゃないかハッカソン' imageAlt='' image={toyohashi} description='ハッカソンイベントを豊橋で主催。多くの方の協力のもと、学生だけの運営でハッカソンイベントを開催しました。イベント広報のためラジオなどにも出演しました。' />
      <Card title='Toyolab' imageAlt='' image={toyolab} description='学生コミュニティ所属して、様々な情報交換を行なっています。' />
      <Card title='法律事務所Webサイト' imageAlt='' image='' description='法律事務所のWebサイトをデザイン・作成しました。' />
      <Card title='Yahoo!不動産' imageAlt='' image='' description='Yahoo!不動産についてインターンで開発を行いました。' />
      <Card title='俺でも自炊できるくん' imageAlt='' image={vg} description='自炊をサポートするWebアプリケーションの開発を行いました。VOYAGE GROUPインターン UI/UX賞&グランプリ受賞' />
      <Card title='技術同人誌' imageAlt='' image='' description='コミックマーケット97で技術同人誌を頒布しました。' />
      <Card title='分散計算シミュレータ' imageAlt='' image={icaicta} description='分散コンピュータによる分散計算をシミュレーションするアプリケーション。研究で新機能を開発。' />
      <Card title='ポートフォリオ' imageAlt='' image={portfolio} description='React, Tailwind CSSを利用して作成しました。' />
    </div>
  </section>
)