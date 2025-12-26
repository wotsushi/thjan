import styled from "styled-components";

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

export const Series = {
  th06: "東方紅魔郷",
  th07: "東方妖々夢",
  th08: "東方永夜抄",
  th09: "東方花映塚",
  th10: "東方風神録",
  th11: "東方地霊殿",
  th12: "東方星蓮船",
  th13: "東方神霊廟",
  tasogare: "黄昏",
  other: "その他シリーズ",
} as const;

export type Series = (typeof Series)[keyof typeof Series];

export class Card {
  constructor(
    private src: string,
    public name: string,
    public stage: number | null,
    public series: Series
  ) {}
  img({ mini, bordered }: { mini?: boolean; bordered?: boolean } = {}) {
    return (
      <Img
        key={this.src}
        src={this.src}
        alt={this.name}
        $mini={mini}
        $bordered={bordered}
      />
    );
  }
}

function card(src: string, name: string, stage: number | null, series: Series) {
  return new Card(src, name, stage, series);
}

export const Cards = {
  reimu: card(reimu, "霊夢", 4, Series.th08),
  marisa: card(marisa, "魔理沙", 4, Series.th08),
  rumia: card(rumia, "ルーミア", 1, Series.th06),
  dai: card(dai, "大妖精", null, Series.th06),
  cirno: card(cirno, "チルノ", 2, Series.th06),
  meirin: card(meirin, "美鈴", 3, Series.th06),
  koa: card(koa, "小悪魔", null, Series.th06),
  pache: card(pache, "パチュリー", 4, Series.th06),
  sakuya: card(sakuya, "咲夜", 5, Series.th06),
  remi: card(remi, "レミリア", 6, Series.th06),
  fran: card(fran, "フラン", 7, Series.th06),
  letty: card(letty, "レティ", 1, Series.th07),
  chen: card(chen, "橙", 2, Series.th07),
  alice: card(alice, "アリス", 3, Series.th07),
  lunasa: card(lunasa, "ルナサ", 4, Series.th07),
  merlin: card(merlin, "メルラン", 4, Series.th07),
  lyrica: card(lyrica, "リリカ", 4, Series.th07),
  youmu: card(youmu, "妖夢", 5, Series.th07),
  yuyuko: card(yuyuko, "幽々子", 6, Series.th07),
  ran: card(ran, "藍", 7, Series.th07),
  yukari: card(yukari, "紫", 7, Series.th07),
  wriggle: card(wriggle, "リグル", 1, Series.th08),
  mystia: card(mystia, "ミスティア", 2, Series.th08),
  keine: card(keine, "慧音", 3, Series.th08),
  tewi: card(tewi, "てゐ", null, Series.th08),
  udonge: card(udonge, "鈴仙", 5, Series.th08),
  eirin: card(eirin, "永琳", 6, Series.th08),
  kaguya: card(kaguya, "輝夜", 6, Series.th08),
  exkeine: card(exkeine, "EX慧音", null, Series.th08),
  mokou: card(mokou, "妹紅", 7, Series.th08),
  lilyw: card(lilyw, "リリーW", null, Series.th09),
  lilyb: card(lilyb, "リリーB", null, Series.th09),
  medi: card(medi, "メディスン", null, Series.th09),
  yuka: card(yuka, "幽香", null, Series.th09),
  komachi: card(komachi, "小町", 5, Series.th09),
  eiki: card(eiki, "映姫", 6, Series.th09),
  sizuha: card(sizuha, "静葉", null, Series.th10),
  minoriko: card(minoriko, "穗子", 1, Series.th10),
  hina: card(hina, "雛", 2, Series.th10),
  nitori: card(nitori, "にとり", 3, Series.th10),
  momiji: card(momiji, "椛", null, Series.th10),
  aya: card(aya, "文", 4, Series.th10),
  sanae: card(sanae, "早苗", 5, Series.th10),
  kanako: card(kanako, "神奈子", 6, Series.th10),
  suwako: card(suwako, "諏訪子", 7, Series.th10),
  suika: card(suika, "萃香", 6, Series.tasogare),
  iku: card(iku, "衣玖", 5, Series.tasogare),
  tenshi: card(tenshi, "天子", 6, Series.tasogare),
  kisume: card(kisume, "キスメ", null, Series.th11),
  yamame: card(yamame, "ヤマメ", 1, Series.th11),
  parsee: card(parsee, "パルスィ", 2, Series.th11),
  yugi: card(yugi, "勇儀", 3, Series.th11),
  satori: card(satori, "さとり", 4, Series.th11),
  orin: card(orin, "燐", 5, Series.th11),
  utuho: card(utuho, "空", 6, Series.th11),
  koisi: card(koisi, "こいし", 7, Series.th11),
  nazu: card(nazu, "ナズーリン", 1, Series.th12),
  kogasa: card(kogasa, "小傘", 2, Series.th12),
  ichirin: card(ichirin, "一輪", 3, Series.th12),
  unzan: card(unzan, "雲山", 3, Series.th12),
  murasa: card(murasa, "ムラサ", 4, Series.th12),
  syou: card(syou, "星", 5, Series.th12),
  byakuren: card(byakuren, "白蓮", 6, Series.th12),
  nue: card(nue, "ぬえ", 7, Series.th12),
  hatate: card(hatate, "はたて", null, Series.other),
  sunny: card(sunny, "サニー", null, Series.other),
  luna: card(luna, "ルナ", null, Series.other),
  star: card(star, "スター", null, Series.other),
  toyohime: card(toyohime, "豊姫", null, Series.other),
  yorihime: card(yorihime, "依姫", null, Series.other),
  reisen: card(reisen, "レイセン", null, Series.other),
  korin: card(korin, "霖之助", null, Series.other),
  nanashi: card(nanashi, "本読妖怪", null, Series.other),
  akyuu: card(akyuu, "阿求", null, Series.other),
  merry: card(merry, "メリー", null, Series.other),
  renko: card(renko, "蓮子", null, Series.other),
  kasen: card(kasen, "華扇", null, Series.other),
  kyoko: card(kyoko, "響子", 2, Series.th13),
  yosika: card(yosika, "芳香", 3, Series.th13),
  seiga: card(seiga, "青娥", 4, Series.th13),
  tojiko: card(tojiko, "屠自古", null, Series.th13),
  futo: card(futo, "布都", 5, Series.th13),
  miko: card(miko, "神子", 6, Series.th13),
  mamizou: card(mamizou, "マミゾウ", 7, Series.th13),
} as const satisfies Record<string, Card>;

const Img = styled.img<{ $mini?: boolean; $bordered?: boolean }>`
  width: ${({ $mini }) => ($mini ? "37px" : "81px")};
  border: ${({ $bordered }) => ($bordered ? "4px solid white" : "none")};
  border-radius: 8px;
  box-sizing: border-box;
`;

export const UnknownCard = styled.div`
  width: 72px;
  height: 92px;
  background-color: gray;
  border-radius: 8px;
`;
