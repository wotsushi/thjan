import reimu from "./assets/0reimu.png";
import marisa from "./assets/1marisa.png";
import rumia from "./assets/2rumia.png";
import dai from "./assets/3dai.png";
import cirno from "./assets/4cirno.png";
import meirin from "./assets/5meirin.png";
import koa from "./assets/6koa.png";
import pache from "./assets/7pache.png";
import sakuya from "./assets/8sakuya.png";
import remi from "./assets/9remi.png";
import fran from "./assets/10fran.png";
import letty from "./assets/11letty.png";
import chen from "./assets/12chen.png";
import alice from "./assets/13alice.png";
import lunasa from "./assets/14lunasa.png";
import merlin from "./assets/15merlin.png";
import lyrica from "./assets/16lyrica.png";
import youmu from "./assets/17youmu.png";
import yuyuko from "./assets/18yuyuko.png";
import ran from "./assets/19ran.png";
import yukari from "./assets/20yukari.png";
import wriggle from "./assets/21wriggle.png";
import mystia from "./assets/22mystia.png";
import keine from "./assets/23keine.png";
import tewi from "./assets/24tewi.png";
import udonge from "./assets/25reisen.png";
import eirin from "./assets/26eirin.png";
import kaguya from "./assets/27kaguya.png";
import exkeine from "./assets/28exkeine.png";
import mokou from "./assets/29mokou.png";
import lilyw from "./assets/30lilyw.png";
import lilyb from "./assets/31lilyb.png";
import medi from "./assets/32medi.png";
import yuka from "./assets/33yuka.png";
import komachi from "./assets/34komachi.png";
import eiki from "./assets/35eiki.png";
import sizuha from "./assets/36sizuha.png";
import minoriko from "./assets/37minoriko.png";
import hina from "./assets/38hina.png";
import nitori from "./assets/39nitori.png";
import momiji from "./assets/40momiji.png";
import aya from "./assets/41aya.png";
import sanae from "./assets/42sanae.png";
import kanako from "./assets/43kanako.png";
import suwako from "./assets/44suwako.png";
import suika from "./assets/45suika.png";
import iku from "./assets/46iku.png";
import tenshi from "./assets/47tenshi.png";
import kisume from "./assets/48kisume.png";
import yamame from "./assets/49yamame.png";
import parsee from "./assets/50parsee.png";
import yugi from "./assets/51yugi.png";
import satori from "./assets/52satori.png";
import orin from "./assets/53orin.png";
import utuho from "./assets/54utuho.png";
import koisi from "./assets/55koisi.png";
import nazu from "./assets/56nazu.png";
import kogasa from "./assets/57kogasa.png";
import ichirin from "./assets/58ichirin.png";
import unzan from "./assets/59unzan.png";
import murasa from "./assets/60murasa.png";
import syou from "./assets/61syou.png";
import byakuren from "./assets/62byakuren.png";
import nue from "./assets/63nue.png";
import hatate from "./assets/64hatate.png";
import sunny from "./assets/65sunny.png";
import luna from "./assets/66luna.png";
import star from "./assets/67star.png";
import toyohime from "./assets/68toyohime.png";
import yorihime from "./assets/69yorihime.png";
import reisen from "./assets/70reisen.png";
import korin from "./assets/71korin.png";
import nanashi from "./assets/72nanashi.png";
import akyuu from "./assets/73akyuu.png";
import merry from "./assets/74merry.png";
import renko from "./assets/75renko.png";
import kasen from "./assets/76kasen.png";
import kyoko from "./assets/77kyoko.png";
import yosika from "./assets/78yosika.png";
import seiga from "./assets/79seiga.png";
import tojiko from "./assets/80tojiko.png";
import futo from "./assets/81futo.png";
import miko from "./assets/82miko.png";
import mamizou from "./assets/83mamizou.png";

export class Card {
  constructor(private src: string, private name: string) {}
  img() {
    return <img src={this.src} alt={this.name} />;
  }
}

function card(src: string, name: string) {
  return new Card(src, name);
}

export const Cards = {
  reimu: card(reimu, "霊夢"),
  marisa: card(marisa, "魔理沙"),
  rumia: card(rumia, "ルーミア"),
  dai: card(dai, "大妖精"),
  cirno: card(cirno, "チルノ"),
  meirin: card(meirin, "美鈴"),
  koa: card(koa, "小悪魔"),
  pache: card(pache, "パチュリー"),
  sakuya: card(sakuya, "咲夜"),
  remi: card(remi, "レミリア"),
  fran: card(fran, "フラン"),
  letty: card(letty, "レティ"),
  chen: card(chen, "橙"),
  alice: card(alice, "アリス"),
  lunasa: card(lunasa, "ルナサ"),
  merlin: card(merlin, "メルラン"),
  lyrica: card(lyrica, "リリカ"),
  youmu: card(youmu, "妖夢"),
  yuyuko: card(yuyuko, "幽々子"),
  ran: card(ran, "藍"),
  yukari: card(yukari, "紫"),
  wriggle: card(wriggle, "リグル"),
  mystia: card(mystia, "ミスティア"),
  keine: card(keine, "慧音"),
  tewi: card(tewi, "てゐ"),
  udonge: card(udonge, "鈴仙"),
  eirin: card(eirin, "永琳"),
  kaguya: card(kaguya, "輝夜"),
  exkeine: card(exkeine, "EX慧音"),
  mokou: card(mokou, "妹紅"),
  lilyw: card(lilyw, "リリーW"),
  lilyb: card(lilyb, "リリーB"),
  medi: card(medi, "メディスン"),
  yuka: card(yuka, "幽香"),
  komachi: card(komachi, "小町"),
  eiki: card(eiki, "映姫"),
  sizuha: card(sizuha, "静葉"),
  minoriko: card(minoriko, "穗子"),
  hina: card(hina, "雛"),
  nitori: card(nitori, "にとり"),
  momiji: card(momiji, "もみじ"),
  aya: card(aya, "文"),
  sanae: card(sanae, "早苗"),
  kanako: card(kanako, "神奈子"),
  suwako: card(suwako, "諏訪子"),
  suika: card(suika, "萃香"),
  iku: card(iku, "衣玖"),
  tenshi: card(tenshi, "天子"),
  kisume: card(kisume, "キスメ"),
  yamame: card(yamame, "ヤマメ"),
  parsee: card(parsee, "パルスィ"),
  yugi: card(yugi, "勇儀"),
  satori: card(satori, "さとり"),
  orin: card(orin, "燐"),
  utuho: card(utuho, "空"),
  koisi: card(koisi, "こいし"),
  nazu: card(nazu, "ナズーリン"),
  kogasa: card(kogasa, "小傘"),
  ichirin: card(ichirin, "一輪"),
  unzan: card(unzan, "雲山"),
  murasa: card(murasa, "村紗"),
  syou: card(syou, "星"),
  byakuren: card(byakuren, "白蓮"),
  nue: card(nue, "ぬえ"),
  hatate: card(hatate, "はたて"),
  sunny: card(sunny, "サニー"),
  luna: card(luna, "ルナ"),
  star: card(star, "スター"),
  toyohime: card(toyohime, "豊姫"),
  yorihime: card(yorihime, "依姫"),
  reisen: card(reisen, "レイセン"),
  korin: card(korin, "霖之助"),
  nanashi: card(nanashi, "本読み妖怪"),
  akyuu: card(akyuu, "阿求"),
  merry: card(merry, "メリー"),
  renko: card(renko, "蓮子"),
  kasen: card(kasen, "華扇"),
  kyoko: card(kyoko, "響子"),
  yosika: card(yosika, "芳香"),
  seiga: card(seiga, "青娥"),
  tojiko: card(tojiko, "屠自古"),
  futo: card(futo, "布都"),
  miko: card(miko, "神子"),
  mamizou: card(mamizou, "マミゾウ"),
} as const satisfies Record<string, Card>;
