import React, { useState, useEffect, useRef } from "react";

/* ─── Imports des assets (images) ─────────────────────────────── */
import RURU_LOGO from "./assets/ruru_logo.webp";
import LOGO from "./assets/logo.webp";
import SUDOCUBE_LOGO from "./assets/sudocube_logo.webp";
import CLASSIC_LOGO from "./assets/classic_logo.webp";
import MONSTRO_BTN from "./assets/monstro_btn.webp";
import SUDO_BTN from "./assets/sudo_btn.webp";
import CLASSIC_BTN from "./assets/classic_btn.webp";
import SAVANTS_BTN from "./assets/savants_btn.webp";
import CHRONO_BTN from "./assets/chrono_btn.webp";
import CIVI_BTN from "./assets/civi_btn.webp";
import TUTO_BTN from "./assets/tuto_btn.webp";
import MONSTRO_PHOTO from "./assets/monstro_photo.webp";
import SUDO_PHOTO from "./assets/sudo_photo.webp";
import SAVANTS_PHOTO from "./assets/savants_photo.webp";
import CIVI_PHOTO from "./assets/civi_photo.webp";
import EINSTEIN_TILES_0 from "./assets/einstein_tiles_0.jpg";
import EINSTEIN_TILES_1 from "./assets/einstein_tiles_1.jpg";
import EINSTEIN_TILES_2 from "./assets/einstein_tiles_2.jpg";
import EINSTEIN_TILES_3 from "./assets/einstein_tiles_3.jpg";
import EINSTEIN_TILES_4 from "./assets/einstein_tiles_4.jpg";
import EINSTEIN_TILES_5 from "./assets/einstein_tiles_5.jpg";
import EINSTEIN_TILES_6 from "./assets/einstein_tiles_6.jpg";
import EINSTEIN_TILES_7 from "./assets/einstein_tiles_7.jpg";
import EINSTEIN_TILES_8 from "./assets/einstein_tiles_8.jpg";
import CURIE_TILES_0 from "./assets/curie_tiles_0.jpg";
import CURIE_TILES_1 from "./assets/curie_tiles_1.jpg";
import CURIE_TILES_2 from "./assets/curie_tiles_2.jpg";
import CURIE_TILES_3 from "./assets/curie_tiles_3.jpg";
import CURIE_TILES_4 from "./assets/curie_tiles_4.jpg";
import CURIE_TILES_5 from "./assets/curie_tiles_5.jpg";
import CURIE_TILES_6 from "./assets/curie_tiles_6.jpg";
import CURIE_TILES_7 from "./assets/curie_tiles_7.jpg";
import CURIE_TILES_8 from "./assets/curie_tiles_8.jpg";
import TESLA_TILES_0 from "./assets/tesla_tiles_0.jpg";
import TESLA_TILES_1 from "./assets/tesla_tiles_1.jpg";
import TESLA_TILES_2 from "./assets/tesla_tiles_2.jpg";
import TESLA_TILES_3 from "./assets/tesla_tiles_3.jpg";
import TESLA_TILES_4 from "./assets/tesla_tiles_4.jpg";
import TESLA_TILES_5 from "./assets/tesla_tiles_5.jpg";
import TESLA_TILES_6 from "./assets/tesla_tiles_6.jpg";
import TESLA_TILES_7 from "./assets/tesla_tiles_7.jpg";
import TESLA_TILES_8 from "./assets/tesla_tiles_8.jpg";
import NEWTON_TILES_0 from "./assets/newton_tiles_0.jpg";
import NEWTON_TILES_1 from "./assets/newton_tiles_1.jpg";
import NEWTON_TILES_2 from "./assets/newton_tiles_2.jpg";
import NEWTON_TILES_3 from "./assets/newton_tiles_3.jpg";
import NEWTON_TILES_4 from "./assets/newton_tiles_4.jpg";
import NEWTON_TILES_5 from "./assets/newton_tiles_5.jpg";
import NEWTON_TILES_6 from "./assets/newton_tiles_6.jpg";
import NEWTON_TILES_7 from "./assets/newton_tiles_7.jpg";
import NEWTON_TILES_8 from "./assets/newton_tiles_8.jpg";
import DARWIN_TILES_0 from "./assets/darwin_tiles_0.jpg";
import DARWIN_TILES_1 from "./assets/darwin_tiles_1.jpg";
import DARWIN_TILES_2 from "./assets/darwin_tiles_2.jpg";
import DARWIN_TILES_3 from "./assets/darwin_tiles_3.jpg";
import DARWIN_TILES_4 from "./assets/darwin_tiles_4.jpg";
import DARWIN_TILES_5 from "./assets/darwin_tiles_5.jpg";
import DARWIN_TILES_6 from "./assets/darwin_tiles_6.jpg";
import DARWIN_TILES_7 from "./assets/darwin_tiles_7.jpg";
import DARWIN_TILES_8 from "./assets/darwin_tiles_8.jpg";
import GALILEE_TILES_0 from "./assets/galilee_tiles_0.jpg";
import GALILEE_TILES_1 from "./assets/galilee_tiles_1.jpg";
import GALILEE_TILES_2 from "./assets/galilee_tiles_2.jpg";
import GALILEE_TILES_3 from "./assets/galilee_tiles_3.jpg";
import GALILEE_TILES_4 from "./assets/galilee_tiles_4.jpg";
import GALILEE_TILES_5 from "./assets/galilee_tiles_5.jpg";
import GALILEE_TILES_6 from "./assets/galilee_tiles_6.jpg";
import GALILEE_TILES_7 from "./assets/galilee_tiles_7.jpg";
import GALILEE_TILES_8 from "./assets/galilee_tiles_8.jpg";
import RAPANUI_TILES_0 from "./assets/rapanui_tiles_0.jpg";
import RAPANUI_TILES_1 from "./assets/rapanui_tiles_1.jpg";
import RAPANUI_TILES_2 from "./assets/rapanui_tiles_2.jpg";
import RAPANUI_TILES_3 from "./assets/rapanui_tiles_3.jpg";
import RAPANUI_TILES_4 from "./assets/rapanui_tiles_4.jpg";
import RAPANUI_TILES_5 from "./assets/rapanui_tiles_5.jpg";
import RAPANUI_TILES_6 from "./assets/rapanui_tiles_6.jpg";
import RAPANUI_TILES_7 from "./assets/rapanui_tiles_7.jpg";
import RAPANUI_TILES_8 from "./assets/rapanui_tiles_8.jpg";
import MAYA_TILES_0 from "./assets/maya_tiles_0.jpg";
import MAYA_TILES_1 from "./assets/maya_tiles_1.jpg";
import MAYA_TILES_2 from "./assets/maya_tiles_2.jpg";
import MAYA_TILES_3 from "./assets/maya_tiles_3.jpg";
import MAYA_TILES_4 from "./assets/maya_tiles_4.jpg";
import MAYA_TILES_5 from "./assets/maya_tiles_5.jpg";
import MAYA_TILES_6 from "./assets/maya_tiles_6.jpg";
import MAYA_TILES_7 from "./assets/maya_tiles_7.jpg";
import MAYA_TILES_8 from "./assets/maya_tiles_8.jpg";
import ROME_TILES_0 from "./assets/rome_tiles_0.jpg";
import ROME_TILES_1 from "./assets/rome_tiles_1.jpg";
import ROME_TILES_2 from "./assets/rome_tiles_2.jpg";
import ROME_TILES_3 from "./assets/rome_tiles_3.jpg";
import ROME_TILES_4 from "./assets/rome_tiles_4.jpg";
import ROME_TILES_5 from "./assets/rome_tiles_5.jpg";
import ROME_TILES_6 from "./assets/rome_tiles_6.jpg";
import ROME_TILES_7 from "./assets/rome_tiles_7.jpg";
import ROME_TILES_8 from "./assets/rome_tiles_8.jpg";
import EGYPT_TILES_0 from "./assets/egypt_tiles_0.jpg";
import EGYPT_TILES_1 from "./assets/egypt_tiles_1.jpg";
import EGYPT_TILES_2 from "./assets/egypt_tiles_2.jpg";
import EGYPT_TILES_3 from "./assets/egypt_tiles_3.jpg";
import EGYPT_TILES_4 from "./assets/egypt_tiles_4.jpg";
import EGYPT_TILES_5 from "./assets/egypt_tiles_5.jpg";
import EGYPT_TILES_6 from "./assets/egypt_tiles_6.jpg";
import EGYPT_TILES_7 from "./assets/egypt_tiles_7.jpg";
import EGYPT_TILES_8 from "./assets/egypt_tiles_8.jpg";
import MESO_TILES_0 from "./assets/meso_tiles_0.jpg";
import MESO_TILES_1 from "./assets/meso_tiles_1.jpg";
import MESO_TILES_2 from "./assets/meso_tiles_2.jpg";
import MESO_TILES_3 from "./assets/meso_tiles_3.jpg";
import MESO_TILES_4 from "./assets/meso_tiles_4.jpg";
import MESO_TILES_5 from "./assets/meso_tiles_5.jpg";
import MESO_TILES_6 from "./assets/meso_tiles_6.jpg";
import MESO_TILES_7 from "./assets/meso_tiles_7.jpg";
import MESO_TILES_8 from "./assets/meso_tiles_8.jpg";
import CHINA_TILES_0 from "./assets/china_tiles_0.jpg";
import CHINA_TILES_1 from "./assets/china_tiles_1.jpg";
import CHINA_TILES_2 from "./assets/china_tiles_2.jpg";
import CHINA_TILES_3 from "./assets/china_tiles_3.jpg";
import CHINA_TILES_4 from "./assets/china_tiles_4.jpg";
import CHINA_TILES_5 from "./assets/china_tiles_5.jpg";
import CHINA_TILES_6 from "./assets/china_tiles_6.jpg";
import CHINA_TILES_7 from "./assets/china_tiles_7.jpg";
import CHINA_TILES_8 from "./assets/china_tiles_8.jpg";
import MONSTER_SPRITES_teal_0 from "./assets/monster_sprites_teal_0.jpg";
import MONSTER_SPRITES_teal_1 from "./assets/monster_sprites_teal_1.jpg";
import MONSTER_SPRITES_teal_2 from "./assets/monster_sprites_teal_2.jpg";
import MONSTER_SPRITES_teal_3 from "./assets/monster_sprites_teal_3.jpg";
import MONSTER_SPRITES_teal_4 from "./assets/monster_sprites_teal_4.jpg";
import MONSTER_SPRITES_teal_5 from "./assets/monster_sprites_teal_5.jpg";
import MONSTER_SPRITES_teal_6 from "./assets/monster_sprites_teal_6.jpg";
import MONSTER_SPRITES_teal_7 from "./assets/monster_sprites_teal_7.jpg";
import MONSTER_SPRITES_teal_8 from "./assets/monster_sprites_teal_8.jpg";
import MONSTER_SPRITES_red_0 from "./assets/monster_sprites_red_0.jpg";
import MONSTER_SPRITES_red_1 from "./assets/monster_sprites_red_1.jpg";
import MONSTER_SPRITES_red_2 from "./assets/monster_sprites_red_2.jpg";
import MONSTER_SPRITES_red_3 from "./assets/monster_sprites_red_3.jpg";
import MONSTER_SPRITES_red_4 from "./assets/monster_sprites_red_4.jpg";
import MONSTER_SPRITES_red_5 from "./assets/monster_sprites_red_5.jpg";
import MONSTER_SPRITES_red_6 from "./assets/monster_sprites_red_6.jpg";
import MONSTER_SPRITES_red_7 from "./assets/monster_sprites_red_7.jpg";
import MONSTER_SPRITES_red_8 from "./assets/monster_sprites_red_8.jpg";
import MONSTER_SPRITES_green_0 from "./assets/monster_sprites_green_0.jpg";
import MONSTER_SPRITES_green_1 from "./assets/monster_sprites_green_1.jpg";
import MONSTER_SPRITES_green_2 from "./assets/monster_sprites_green_2.jpg";
import MONSTER_SPRITES_green_3 from "./assets/monster_sprites_green_3.jpg";
import MONSTER_SPRITES_green_4 from "./assets/monster_sprites_green_4.jpg";
import MONSTER_SPRITES_green_5 from "./assets/monster_sprites_green_5.jpg";
import MONSTER_SPRITES_green_6 from "./assets/monster_sprites_green_6.jpg";
import MONSTER_SPRITES_green_7 from "./assets/monster_sprites_green_7.jpg";
import MONSTER_SPRITES_green_8 from "./assets/monster_sprites_green_8.jpg";
import MONSTER_SPRITES_orange_0 from "./assets/monster_sprites_orange_0.jpg";
import MONSTER_SPRITES_orange_1 from "./assets/monster_sprites_orange_1.jpg";
import MONSTER_SPRITES_orange_2 from "./assets/monster_sprites_orange_2.jpg";
import MONSTER_SPRITES_orange_3 from "./assets/monster_sprites_orange_3.jpg";
import MONSTER_SPRITES_orange_4 from "./assets/monster_sprites_orange_4.jpg";
import MONSTER_SPRITES_orange_5 from "./assets/monster_sprites_orange_5.jpg";
import MONSTER_SPRITES_orange_6 from "./assets/monster_sprites_orange_6.jpg";
import MONSTER_SPRITES_orange_7 from "./assets/monster_sprites_orange_7.jpg";
import MONSTER_SPRITES_orange_8 from "./assets/monster_sprites_orange_8.jpg";
import MONSTER_SPRITES_yellow_0 from "./assets/monster_sprites_yellow_0.jpg";
import MONSTER_SPRITES_yellow_1 from "./assets/monster_sprites_yellow_1.jpg";
import MONSTER_SPRITES_yellow_2 from "./assets/monster_sprites_yellow_2.jpg";
import MONSTER_SPRITES_yellow_3 from "./assets/monster_sprites_yellow_3.jpg";
import MONSTER_SPRITES_yellow_4 from "./assets/monster_sprites_yellow_4.jpg";
import MONSTER_SPRITES_yellow_5 from "./assets/monster_sprites_yellow_5.jpg";
import MONSTER_SPRITES_yellow_6 from "./assets/monster_sprites_yellow_6.jpg";
import MONSTER_SPRITES_yellow_7 from "./assets/monster_sprites_yellow_7.jpg";
import MONSTER_SPRITES_yellow_8 from "./assets/monster_sprites_yellow_8.jpg";
import MONSTER_SPRITES_white_0 from "./assets/monster_sprites_white_0.jpg";
import MONSTER_SPRITES_white_1 from "./assets/monster_sprites_white_1.jpg";
import MONSTER_SPRITES_white_2 from "./assets/monster_sprites_white_2.jpg";
import MONSTER_SPRITES_white_3 from "./assets/monster_sprites_white_3.jpg";
import MONSTER_SPRITES_white_4 from "./assets/monster_sprites_white_4.jpg";
import MONSTER_SPRITES_white_5 from "./assets/monster_sprites_white_5.jpg";
import MONSTER_SPRITES_white_6 from "./assets/monster_sprites_white_6.jpg";
import MONSTER_SPRITES_white_7 from "./assets/monster_sprites_white_7.jpg";
import MONSTER_SPRITES_white_8 from "./assets/monster_sprites_white_8.jpg";
import SUDOKUBE_SPRITES_white_0 from "./assets/sudokube_sprites_white_0.jpg";
import SUDOKUBE_SPRITES_white_1 from "./assets/sudokube_sprites_white_1.jpg";
import SUDOKUBE_SPRITES_white_2 from "./assets/sudokube_sprites_white_2.jpg";
import SUDOKUBE_SPRITES_white_3 from "./assets/sudokube_sprites_white_3.jpg";
import SUDOKUBE_SPRITES_white_4 from "./assets/sudokube_sprites_white_4.jpg";
import SUDOKUBE_SPRITES_white_5 from "./assets/sudokube_sprites_white_5.jpg";
import SUDOKUBE_SPRITES_white_6 from "./assets/sudokube_sprites_white_6.jpg";
import SUDOKUBE_SPRITES_white_7 from "./assets/sudokube_sprites_white_7.jpg";
import SUDOKUBE_SPRITES_white_8 from "./assets/sudokube_sprites_white_8.jpg";
import SUDOKUBE_SPRITES_orange_0 from "./assets/sudokube_sprites_orange_0.jpg";
import SUDOKUBE_SPRITES_orange_1 from "./assets/sudokube_sprites_orange_1.jpg";
import SUDOKUBE_SPRITES_orange_2 from "./assets/sudokube_sprites_orange_2.jpg";
import SUDOKUBE_SPRITES_orange_3 from "./assets/sudokube_sprites_orange_3.jpg";
import SUDOKUBE_SPRITES_orange_4 from "./assets/sudokube_sprites_orange_4.jpg";
import SUDOKUBE_SPRITES_orange_5 from "./assets/sudokube_sprites_orange_5.jpg";
import SUDOKUBE_SPRITES_orange_6 from "./assets/sudokube_sprites_orange_6.jpg";
import SUDOKUBE_SPRITES_orange_7 from "./assets/sudokube_sprites_orange_7.jpg";
import SUDOKUBE_SPRITES_orange_8 from "./assets/sudokube_sprites_orange_8.jpg";
import SUDOKUBE_SPRITES_yellow_0 from "./assets/sudokube_sprites_yellow_0.jpg";
import SUDOKUBE_SPRITES_yellow_1 from "./assets/sudokube_sprites_yellow_1.jpg";
import SUDOKUBE_SPRITES_yellow_2 from "./assets/sudokube_sprites_yellow_2.jpg";
import SUDOKUBE_SPRITES_yellow_3 from "./assets/sudokube_sprites_yellow_3.jpg";
import SUDOKUBE_SPRITES_yellow_4 from "./assets/sudokube_sprites_yellow_4.jpg";
import SUDOKUBE_SPRITES_yellow_5 from "./assets/sudokube_sprites_yellow_5.jpg";
import SUDOKUBE_SPRITES_yellow_6 from "./assets/sudokube_sprites_yellow_6.jpg";
import SUDOKUBE_SPRITES_yellow_7 from "./assets/sudokube_sprites_yellow_7.jpg";
import SUDOKUBE_SPRITES_yellow_8 from "./assets/sudokube_sprites_yellow_8.jpg";
import SUDOKUBE_SPRITES_red_0 from "./assets/sudokube_sprites_red_0.jpg";
import SUDOKUBE_SPRITES_red_1 from "./assets/sudokube_sprites_red_1.jpg";
import SUDOKUBE_SPRITES_red_2 from "./assets/sudokube_sprites_red_2.jpg";
import SUDOKUBE_SPRITES_red_3 from "./assets/sudokube_sprites_red_3.jpg";
import SUDOKUBE_SPRITES_red_4 from "./assets/sudokube_sprites_red_4.jpg";
import SUDOKUBE_SPRITES_red_5 from "./assets/sudokube_sprites_red_5.jpg";
import SUDOKUBE_SPRITES_red_6 from "./assets/sudokube_sprites_red_6.jpg";
import SUDOKUBE_SPRITES_red_7 from "./assets/sudokube_sprites_red_7.jpg";
import SUDOKUBE_SPRITES_red_8 from "./assets/sudokube_sprites_red_8.jpg";
import SUDOKUBE_SPRITES_green_0 from "./assets/sudokube_sprites_green_0.jpg";
import SUDOKUBE_SPRITES_green_1 from "./assets/sudokube_sprites_green_1.jpg";
import SUDOKUBE_SPRITES_green_2 from "./assets/sudokube_sprites_green_2.jpg";
import SUDOKUBE_SPRITES_green_3 from "./assets/sudokube_sprites_green_3.jpg";
import SUDOKUBE_SPRITES_green_4 from "./assets/sudokube_sprites_green_4.jpg";
import SUDOKUBE_SPRITES_green_5 from "./assets/sudokube_sprites_green_5.jpg";
import SUDOKUBE_SPRITES_green_6 from "./assets/sudokube_sprites_green_6.jpg";
import SUDOKUBE_SPRITES_green_7 from "./assets/sudokube_sprites_green_7.jpg";
import SUDOKUBE_SPRITES_green_8 from "./assets/sudokube_sprites_green_8.jpg";
import SUDOKUBE_SPRITES_teal_0 from "./assets/sudokube_sprites_teal_0.jpg";
import SUDOKUBE_SPRITES_teal_1 from "./assets/sudokube_sprites_teal_1.jpg";
import SUDOKUBE_SPRITES_teal_2 from "./assets/sudokube_sprites_teal_2.jpg";
import SUDOKUBE_SPRITES_teal_3 from "./assets/sudokube_sprites_teal_3.jpg";
import SUDOKUBE_SPRITES_teal_4 from "./assets/sudokube_sprites_teal_4.jpg";
import SUDOKUBE_SPRITES_teal_5 from "./assets/sudokube_sprites_teal_5.jpg";
import SUDOKUBE_SPRITES_teal_6 from "./assets/sudokube_sprites_teal_6.jpg";
import SUDOKUBE_SPRITES_teal_7 from "./assets/sudokube_sprites_teal_7.jpg";
import SUDOKUBE_SPRITES_teal_8 from "./assets/sudokube_sprites_teal_8.jpg";

/* ─── ASSETS (base64) ─── */
/* ─── Boutons-logos de l'accueil ──────────────────────────────── */





const MONSTER_SPRITES = {
  teal:[MONSTER_SPRITES_teal_0,MONSTER_SPRITES_teal_1,MONSTER_SPRITES_teal_2,MONSTER_SPRITES_teal_3,MONSTER_SPRITES_teal_4,MONSTER_SPRITES_teal_5,MONSTER_SPRITES_teal_6,MONSTER_SPRITES_teal_7,MONSTER_SPRITES_teal_8],
  red:[MONSTER_SPRITES_red_0,MONSTER_SPRITES_red_1,MONSTER_SPRITES_red_2,MONSTER_SPRITES_red_3,MONSTER_SPRITES_red_4,MONSTER_SPRITES_red_5,MONSTER_SPRITES_red_6,MONSTER_SPRITES_red_7,MONSTER_SPRITES_red_8],
  green:[MONSTER_SPRITES_green_0,MONSTER_SPRITES_green_1,MONSTER_SPRITES_green_2,MONSTER_SPRITES_green_3,MONSTER_SPRITES_green_4,MONSTER_SPRITES_green_5,MONSTER_SPRITES_green_6,MONSTER_SPRITES_green_7,MONSTER_SPRITES_green_8],
  orange:[MONSTER_SPRITES_orange_0,MONSTER_SPRITES_orange_1,MONSTER_SPRITES_orange_2,MONSTER_SPRITES_orange_3,MONSTER_SPRITES_orange_4,MONSTER_SPRITES_orange_5,MONSTER_SPRITES_orange_6,MONSTER_SPRITES_orange_7,MONSTER_SPRITES_orange_8],
  yellow:[MONSTER_SPRITES_yellow_0,MONSTER_SPRITES_yellow_1,MONSTER_SPRITES_yellow_2,MONSTER_SPRITES_yellow_3,MONSTER_SPRITES_yellow_4,MONSTER_SPRITES_yellow_5,MONSTER_SPRITES_yellow_6,MONSTER_SPRITES_yellow_7,MONSTER_SPRITES_yellow_8],
  white:[MONSTER_SPRITES_white_0,MONSTER_SPRITES_white_1,MONSTER_SPRITES_white_2,MONSTER_SPRITES_white_3,MONSTER_SPRITES_white_4,MONSTER_SPRITES_white_5,MONSTER_SPRITES_white_6,MONSTER_SPRITES_white_7,MONSTER_SPRITES_white_8],
};

const SUDOKUBE_SPRITES = {
  white:[SUDOKUBE_SPRITES_white_0,SUDOKUBE_SPRITES_white_1,SUDOKUBE_SPRITES_white_2,SUDOKUBE_SPRITES_white_3,SUDOKUBE_SPRITES_white_4,SUDOKUBE_SPRITES_white_5,SUDOKUBE_SPRITES_white_6,SUDOKUBE_SPRITES_white_7,SUDOKUBE_SPRITES_white_8],
  orange:[SUDOKUBE_SPRITES_orange_0,SUDOKUBE_SPRITES_orange_1,SUDOKUBE_SPRITES_orange_2,SUDOKUBE_SPRITES_orange_3,SUDOKUBE_SPRITES_orange_4,SUDOKUBE_SPRITES_orange_5,SUDOKUBE_SPRITES_orange_6,SUDOKUBE_SPRITES_orange_7,SUDOKUBE_SPRITES_orange_8],
  yellow:[SUDOKUBE_SPRITES_yellow_0,SUDOKUBE_SPRITES_yellow_1,SUDOKUBE_SPRITES_yellow_2,SUDOKUBE_SPRITES_yellow_3,SUDOKUBE_SPRITES_yellow_4,SUDOKUBE_SPRITES_yellow_5,SUDOKUBE_SPRITES_yellow_6,SUDOKUBE_SPRITES_yellow_7,SUDOKUBE_SPRITES_yellow_8],
  red:[SUDOKUBE_SPRITES_red_0,SUDOKUBE_SPRITES_red_1,SUDOKUBE_SPRITES_red_2,SUDOKUBE_SPRITES_red_3,SUDOKUBE_SPRITES_red_4,SUDOKUBE_SPRITES_red_5,SUDOKUBE_SPRITES_red_6,SUDOKUBE_SPRITES_red_7,SUDOKUBE_SPRITES_red_8],
  green:[SUDOKUBE_SPRITES_green_0,SUDOKUBE_SPRITES_green_1,SUDOKUBE_SPRITES_green_2,SUDOKUBE_SPRITES_green_3,SUDOKUBE_SPRITES_green_4,SUDOKUBE_SPRITES_green_5,SUDOKUBE_SPRITES_green_6,SUDOKUBE_SPRITES_green_7,SUDOKUBE_SPRITES_green_8],
  teal:[SUDOKUBE_SPRITES_teal_0,SUDOKUBE_SPRITES_teal_1,SUDOKUBE_SPRITES_teal_2,SUDOKUBE_SPRITES_teal_3,SUDOKUBE_SPRITES_teal_4,SUDOKUBE_SPRITES_teal_5,SUDOKUBE_SPRITES_teal_6,SUDOKUBE_SPRITES_teal_7,SUDOKUBE_SPRITES_teal_8],
};

const CLASSIC_HEX = {white:"#f5f5f5",orange:"#ff8c1a",yellow:"#ffd500",red:"#e62b2b",green:"#2bbf3f",teal:"#2b8cff"};
const classicTile = h => "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" rx="16" fill="'+h+'"/><rect x="4" y="4" width="112" height="112" rx="13" fill="'+h+'" stroke="rgba(0,0,0,0.18)" stroke-width="3"/></svg>');
const CLASSIC_SPRITES = Object.fromEntries(Object.entries(CLASSIC_HEX).map(([k,h])=>[k,Array(9).fill(classicTile(h))]));


/* ═════════════════════════════════════════════════════════════════
   RUR'U' CUBE — refonte v3
   Un seul écran d'accueil : choisis ton cube, choisis ton défi.
   3 skins (Classique · Monstro · Sudo) × 3 modes (Challenge · Duel · Chrono)
   + Défi du jour (même face pour tout le monde, seedée par la date)
   ═════════════════════════════════════════════════════════════════ */

const THEMES = {
  dark:{
    bg:"#151228", bg2:"#1d1836", card:"#241d42", cardHi:"#332a58",
    text:"#fff4e6", textDim:"#b8aed0", textFaint:"#7a7196",
    gold:"#ffd23f", pink:"#ff5ea8", green:"#3ddc84", blue:"#4ea8ff",
    purple:"#9d6cff", red:"#ff5e5e", orange:"#ff9f43",
    ink:"#ffffff", dark:"#0d0b1a",
  },
  light:{
    bg:"#f7ecd9", bg2:"#efe0c4", card:"#ffffff", cardHi:"#fff9ef",
    text:"#2a2350", textDim:"#5c5480", textFaint:"#8b81a6",
    gold:"#ffd23f", pink:"#ff5ea8", green:"#3ddc84", blue:"#4ea8ff",
    purple:"#9d6cff", red:"#ff5e5e", orange:"#ff9f43",
    ink:"#1a1228", dark:"#0d0b1a",
  },
};
const PAL = { ...THEMES.dark };

/* Écrans « principaux » : la barre de navigation n'apparaît que là.
   Pendant une partie (face, reverse, blind, daily, duel, chrono) elle est
   masquée pour ne pas cacher la face du cube. */
const NAV_SCREENS = ["univers","progress","civi","savants","tuto"];
function shade(hex, amt){
  const n=parseInt(hex.slice(1),16);
  let r=(n>>16)+amt, g=((n>>8)&255)+amt, b=(n&255)+amt;
  r=Math.max(0,Math.min(255,r)); g=Math.max(0,Math.min(255,g)); b=Math.max(0,Math.min(255,b));
  return "#"+((r<<16)|(g<<8)|b).toString(16).padStart(6,"0");
}

/* ─── Traductions ─────────────────────────────────────────────── */
const TR = {
  fr: {
    slogan:"L'ordre naît du chaos",
    chooseCube:"Ton cube", chooseMode:"Ton défi",
    classic:"Classique", monstro:"Monstro", sudo:"Sudo",
    classicSub:"Ton cube 3×3 à toi", monstroSub:"54 monstres rigolos", sudoSub:"Chiffres 1 à 9",
    challenge:"CHALLENGE", challengeSub:"Reproduis la face au chrono",
    faceTile:"FACE À FACE", faceTileSub:"Reproduis la face au chrono",
    reverseTile:"REVERSE", reverseTileSub:"Bats le compte à rebours",
    duel:"DUEL", duelSub:"1 contre 1 · 5 manches",
    blind:"BLIND", blindSub:"Mémorise puis reproduis à l'aveugle",
    chrono:"CHRONO CUBE", chronoSub:"Résolution complète",
    daily:"DÉFI DU JOUR", dailyDone:"Fait en", dailyTodo:"5 faces à la suite · même défi pour tous",
    record:"Record", games:"Parties", streak:"Série",
    face:"⏱️ Face", reverse:"⏳ Reverse", blindMode:"🙈 Blind",
    go:"🚀 C'EST PARTI !", replay:"↻ Rejouer", menu:"← Accueil",
    tapGrid:"👆 Tape la grille pour arrêter",
    tapCube:"👆 Tape le cube quand c'est résolu",
    cubeReady:"Chrono résolution complète", cubePlay:"Résous tout ton cube !", cubeDone:"Bravo ! 🎉",
    timeUp:"⏰ Temps écoulé !", success:"✓ Réussi !", newRecord:"⭐ NOUVEAU RECORD !",
    objectives:"🎖️ Objectifs", obj:["Moins de 60s","Moins de 45s","Moins de 30s","Moins de 15s"],
    timesEvol:"📈 Évolution des temps", lastGames:"🕐 Dernières parties",
    chartHint:"🎮 Joue au moins 2 parties pour voir ta courbe !",
    duelRules:["Chaque joueur mélange le cube de l'autre","Au GO, l'app montre une face","Reproduis-la à fond la vitesse","Tape J'AI FINI quand tu es prêt","Face fausse ? Tape le temps du joueur → +30s 😈","Le plus rapide sur 5 manches gagne !"],
    round:"Manche", iDone:"J'AI FINI", wins:"gagne !", tie:"🤝 Égalité !",
    finalScore:"🏁 Score final", nextRound:"Manche suivante →",
    p1Wins:"🏆 J1 GAGNE !", p2Wins:"🏆 J2 GAGNE !", revenge:"↻ Revanche !", total:"TOT",
    shopTitle:"NOS CUBES", soloName:"Monstro Solo", soloDesc:"Robuste · enfants & familles",
    duoName:"Monstro Duo", duoDesc:"2 cubes · mode Duel",
    collectorName:"Collector Magnétique", collectorDesc:"Premium · boîte métal · cubers",
    orderBtn:"🛒 Commander sur rurucube.com",
    shopCardTitle:"Joue avec nos cubes !",
    shopCardText:"L'appli fonctionne avec n'importe quel cube 3×3 — mais pour encore plus de fun, découvre le Monstrocube et le Sudocube, à commander sur notre site.",
    // Onboarding & aide
    obTitle:"Bienvenue dans RUR'U' !", obSub:"Le jeu de rapidité pour ton cube 3×3",
    obSteps:[
      {icon:"🎲",title:"Choisis ton cube",desc:"Ton cube 3×3 classique, ou nos cubes Monstro et Sudo."},
      {icon:"📱",title:"L'appli affiche une face",desc:"Une grille de 9 cases générée aléatoirement — toujours reproductible sur un vrai cube."},
      {icon:"⚡",title:"Reproduis-la vite !",desc:"Tourne ton cube pour obtenir la même face, puis tape la grille pour arrêter le chrono."},
      {icon:"🏆",title:"Bats tes records",desc:"Solo, en duel avec un ami, ou avec le défi du jour."},
    ],
    obStart:"C'est parti !", obSkip:"Passer",
    howTo:"❓ Comment jouer", howToTitle:"Comment jouer",
    themeLight:"Thème clair", themeDark:"Thème sombre",
    civiComingTitle:"Bientôt disponible !", civiComingSub:"On prépare ce nouveau monde avec soin. Reviens vite pour découvrir Civilisation Ancienne.",
    progress:"Progression", progressSub:"Tes meilleurs temps, cube par cube", noData:"Pas encore de record — lance-toi !",
    navHome:"Accueil", navProgress:"Progression", navTuto:"Tuto",
    htGeneral:"Le principe", htGeneralTxt:"L'appli te montre une face de cube. Tu dois la reproduire sur ton cube physique le plus vite possible. Le chrono s'arrête quand tu tapes la grille. Quatre modes t'attendent ci-dessous.",
    htFace:"🎯 Face à Face", htFaceTxt:"Reproduis la face affichée le plus vite possible. Le chrono s'arrête dès que tu tapes la grille. Simple, rapide, parfait pour battre ton record.",
    htReverse:"⏳ Reverse", htReverseTxt:"Même principe, mais à l'envers : choisis un temps limite (60/45/30/15/5 s) et reproduis la face avant qu'il ne s'écoule.",
    htDuel:"⚔️ Duel", htDuelTxt:"2 joueurs, 5 manches. Posez le téléphone entre vous. Chacun mélange le cube de l'autre. Au GO, reproduisez la face. Le premier fini tape J'AI FINI. Face fausse ? Tapez le temps du joueur → +30 s de pénalité 😈. Le total le plus bas gagne.",
    htBlind:"🙈 Blind", htBlindTxt:"Mémorise la face affichée avant qu'elle ne disparaisse derrière un voile, puis reproduis-la de mémoire. Choisis ton temps de mémorisation, de 2 à 8 secondes.",
    htChrono:"🧩 Chrono Cube", htChronoTxt:"Chronomètre ta résolution complète du cube, du mélange à la dernière pièce. Compte à rebours de 5 secondes avant le top départ. Disponible sur les 3 cubes : Monstro, Classique et Sudo.",
    htDaily:"🗓️ Défi du jour", htDailyTxt:"Une face identique pour tous les joueurs du monde aujourd'hui. Un seul essai chrono par jour — compare ton temps avec tes amis !",
    htTip:"💡 Astuce", htTipTxt:"Tu n'as pas besoin de savoir résoudre le cube ! Il suffit de reproduire la face affichée. Parfait pour débuter.",
    gotIt:"J'ai compris",
    // Consignes contextuelles
    ctxReady:"Prépare ton cube et appuie sur GO",
    ctxPlaying:"Reproduis cette face sur ton cube",
    ctxReverse:"Reproduis-la avant la fin du temps !",
    ctxBlindReady:"Mémorise vite, la face va disparaître !",
    ctxBlindMemo:"Mémorise la face avant qu'elle disparaisse...",
    ctxBlindHidden:"Reproduis-la de mémoire, tape quand t'as fini !",
    ctxDuelReady:"Mélangez vos cubes, puis appuyez sur GO",
    ctxDuelPlaying:"Reproduisez la face — le premier fini appuie sur son bouton",
    ctxDuelDone:"Vérifiez les faces. Face fausse ? Tapez le temps → +30 s",
    ctxChronoReady:"Cube mélangé en main ? Appuie sur GO pour le compte à rebours",
    ctxDailyReady:"5 faces à la suite, un seul essai aujourd'hui. Prêt ?",
    step:"Étape", nextStep:"Suivant →",
    savants:"COFFRET DES SCIENTIFIQUES", savantsSub:"6 génies · 48 symboles",
    savantsIntro:"Chaque face du cube est incarnée par un génie entouré de ses 8 symboles. Touche une carte pour l'ouvrir, puis un symbole pour découvrir sa signification — et le portrait au centre pour en savoir plus sur le savant.",
    symbols:"symboles", seeOnSite:"🌐 Voir sur rurucube.com",
    savantsTile:"LE SAVOIR", savantsTileSub:"Décode les 6 faces des génies",
    civi:"Civilisation Ancienne", tuto:"Tutoriel", civiSub:"6 civilisations, 8 symboles chacune", civiIntro:"🌍 Chaque civilisation cache 8 symboles gravés dans la pierre. Touche une carte pour l'ouvrir, puis un symbole pour découvrir sa signification — et l'emblème au centre pour en savoir plus sur la civilisation.", kidsLabel:"🧒 Enfant", teenLabel:"🎓 Ado & Adulte", ageToggleHint:"Choisis ton niveau de lecture : définitions courtes et simples pour les enfants, complètes pour les ados et adultes.",
    savantsTapHint:"Touche un symbole pour afficher sa définition",
    bioBirth:"Naissance", bioDeath:"Décès", bioPath:"Parcours", bioVision:"Vision",
    chooseGame:"Choisis ton jeu", switchCube:"Changer de cube",
    chooseUniverse:"Choisis ton univers",
    catSpeed:"Réflexion & Rapidité", catSpeedSub:"Trois cubes, un chrono",
    catLearn:"Réflexion & Éducation", catLearnSub:"Apprends en jouant",
    catProgress:"Apprendre & Progresser", catProgressSub:"Prends ton cube en main, puis mesure tes progrès",
    tutoSoonTitle:"Les tutoriels arrivent bientôt",
    tutoSoonSub:"Une méthode débutant pas à pas pour résoudre ton cube 3×3 : la croix, la première couronne, les coins, la dernière face. Disponible dans une prochaine mise à jour.",
    speedFace:"SPEED FACE", speedFaceSub:"Joue avec ton propre cube 3×3",
    scienceCube:"LE CUBE SCIENTIFIQUE", scienceCubeSub:"6 génies · 48 symboles à découvrir",
    nudge:"Tu adores ce défi ? Le Monstrocube rend le jeu encore plus fun 🟢",
    nudgeBtn:"Découvrir →",
  },
  en: {
    slogan:"Order born from chaos",
    chooseCube:"Your cube", chooseMode:"Your challenge",
    classic:"Classic", monstro:"Monstro", sudo:"Sudo",
    classicSub:"Your own 3×3 cube", monstroSub:"54 funny monsters", sudoSub:"Digits 1 to 9",
    challenge:"CHALLENGE", challengeSub:"Match the face against the clock",
    faceTile:"FACE TO FACE", faceTileSub:"Match the face against the clock",
    reverseTile:"REVERSE", reverseTileSub:"Beat the countdown",
    duel:"DUEL", duelSub:"1 vs 1 · 5 rounds",
    blind:"BLIND", blindSub:"Memorize it, then rebuild it blind",
    chrono:"CUBE TIMER", chronoSub:"Full solve",
    daily:"DAILY CHALLENGE", dailyDone:"Done in", dailyTodo:"5 faces in a row · same challenge for everyone",
    record:"Best", games:"Games", streak:"Streak",
    face:"⏱️ Face", reverse:"⏳ Reverse", blindMode:"🙈 Blind",
    go:"🚀 LET'S GO!", replay:"↻ Replay", menu:"← Home",
    tapGrid:"👆 Tap the grid to stop",
    tapCube:"👆 Tap the cube when solved",
    cubeReady:"Full solve timer", cubePlay:"Solve your whole cube!", cubeDone:"Well done! 🎉",
    timeUp:"⏰ Time's up!", success:"✓ Done!", newRecord:"⭐ NEW RECORD!",
    objectives:"🎖️ Goals", obj:["Under 60s","Under 45s","Under 30s","Under 15s"],
    timesEvol:"📈 Times evolution", lastGames:"🕐 Last games",
    chartHint:"🎮 Play at least 2 games to see your curve!",
    duelRules:["Each player scrambles the other's cube","At GO, the app shows a face","Match it as fast as you can","Tap I'M DONE when ready","Wrong face? Tap the player's time → +30s 😈","Fastest over 5 rounds wins!"],
    round:"Round", iDone:"I'M DONE", wins:"wins!", tie:"🤝 Tie!",
    finalScore:"🏁 Final score", nextRound:"Next round →",
    p1Wins:"🏆 P1 WINS!", p2Wins:"🏆 P2 WINS!", revenge:"↻ Rematch!", total:"TOT",
    shopTitle:"OUR CUBES", soloName:"Monstro Solo", soloDesc:"Sturdy · kids & families",
    duoName:"Monstro Duo", duoDesc:"2 cubes · Duel mode",
    collectorName:"Magnetic Collector", collectorDesc:"Premium · metal box · cubers",
    orderBtn:"🛒 Order on rurucube.com",
    shopCardTitle:"Play with our cubes!",
    shopCardText:"The app works with any 3×3 cube — but for even more fun, discover Monstrocube and Sudocube, available on our website.",
    // Onboarding & help
    obTitle:"Welcome to RUR'U'!", obSub:"The speed game for your 3×3 cube",
    obSteps:[
      {icon:"🎲",title:"Pick your cube",desc:"Your classic 3×3 cube, or our Monstro and Sudo cubes."},
      {icon:"📱",title:"The app shows a face",desc:"A 9-cell grid, randomly generated — always reproducible on a real cube."},
      {icon:"⚡",title:"Match it fast!",desc:"Turn your cube to get the same face, then tap the grid to stop the timer."},
      {icon:"🏆",title:"Beat your records",desc:"Solo, in a duel with a friend, or with the daily challenge."},
    ],
    obStart:"Let's go!", obSkip:"Skip",
    howTo:"❓ How to play", howToTitle:"How to play",
    themeLight:"Light theme", themeDark:"Dark theme",
    civiComingTitle:"Coming soon!", civiComingSub:"We're carefully building this new world. Check back soon to discover Ancient Civilisation.",
    progress:"Progress", progressSub:"Your best times, cube by cube", noData:"No record yet — give it a go!",
    navHome:"Home", navProgress:"Progress", navTuto:"How to",
    htGeneral:"The idea", htGeneralTxt:"The app shows you a cube face. Reproduce it on your physical cube as fast as you can. The timer stops when you tap the grid. Four modes await below.",
    htFace:"🎯 Face to Face", htFaceTxt:"Match the face shown as fast as you can. The timer stops the moment you tap the grid. Simple, fast, perfect for beating your record.",
    htReverse:"⏳ Reverse", htReverseTxt:"Same idea, in reverse: pick a time limit (60/45/30/15/5 s) and match the face before it runs out.",
    htDuel:"⚔️ Duel", htDuelTxt:"2 players, 5 rounds. Lay the phone between you. Each scrambles the other's cube. At GO, match the face. First done taps I'M DONE. Wrong face? Tap the player's time → +30 s penalty 😈. Lowest total wins.",
    htBlind:"🙈 Blind", htBlindTxt:"Memorize the face before it vanishes behind a veil, then rebuild it from memory. Choose your memorizing time, from 2 to 8 seconds.",
    htChrono:"🧩 Cube Timer", htChronoTxt:"Time your full cube solve, from scramble to the last piece. 5-second countdown before go. Available on all 3 cubes: Monstro, Classic and Sudo.",
    htDaily:"🗓️ Daily challenge", htDailyTxt:"The same face for every player in the world today. One timed try per day — compare with your friends!",
    htTip:"💡 Tip", htTipTxt:"You don't need to know how to solve the cube! Just match the face shown. Perfect for beginners.",
    gotIt:"Got it",
    // Contextual hints
    ctxReady:"Get your cube ready and press GO",
    ctxPlaying:"Match this face on your cube",
    ctxReverse:"Match it before time runs out!",
    ctxBlindReady:"Memorize fast, the face is about to vanish!",
    ctxBlindMemo:"Memorize the face before it disappears...",
    ctxBlindHidden:"Recreate it from memory, tap when done!",
    ctxDuelReady:"Scramble your cubes, then press GO",
    ctxDuelPlaying:"Match the face — first done taps their button",
    ctxDuelDone:"Check the faces. Wrong face? Tap the time → +30 s",
    ctxChronoReady:"Scrambled cube in hand? Press GO for the countdown",
    ctxDailyReady:"5 faces in a row, one try today. Ready?",
    step:"Step", nextStep:"Next →",
    savants:"THE SCIENTISTS BOX", savantsSub:"6 geniuses · 48 symbols",
    savantsIntro:"Each face of the cube is embodied by a genius surrounded by 8 symbols. Tap a card to open it, then tap a symbol to discover its meaning — and the portrait in the center to learn more about the genius.",
    symbols:"symbols", seeOnSite:"🌐 See on rurucube.com",
    savantsTile:"KNOWLEDGE", savantsTileSub:"Decode the 6 faces of the geniuses",
    civi:"Ancient Civilisation", tuto:"Tutorial", civiSub:"6 civilisations, 8 symbols each", civiIntro:"🌍 Each civilisation hides 8 symbols carved in stone. Tap a card to open it, then tap a symbol to discover its meaning — and the emblem in the center to learn more about the civilisation.", kidsLabel:"🧒 Kid", teenLabel:"🎓 Teen & Adult", ageToggleHint:"Choose your reading level: short and simple definitions for kids, full ones for teens and adults.",
    savantsTapHint:"Tap a symbol to reveal its definition",
    bioBirth:"Born", bioDeath:"Died", bioPath:"Path", bioVision:"Vision",
    chooseGame:"Choose your game", switchCube:"Switch cube",
    chooseUniverse:"Choose your universe",
    catSpeed:"Thinking & Speed", catSpeedSub:"Three cubes, one timer",
    catLearn:"Thinking & Learning", catLearnSub:"Learn while you play",
    catProgress:"Learn & Improve", catProgressSub:"Get to grips with your cube, then track your progress",
    tutoSoonTitle:"Tutorials are coming soon",
    tutoSoonSub:"A step-by-step beginner method to solve your 3×3 cube: the cross, the first layer, the corners, the last face. Coming in a future update.",
    speedFace:"SPEED FACE", speedFaceSub:"Play with your own 3×3 cube",
    scienceCube:"THE SCIENCE CUBE", scienceCubeSub:"6 geniuses · 48 symbols to explore",
    nudge:"Loving this? Monstrocube makes it even more fun 🟢",
    nudgeBtn:"Discover →",
  },
};

/* ─── Stockage (localStorage si dispo, sinon mémoire) ─────────── */
const SKEY = "rurucube_v3";
let MEM = {};
function loadS(){ try{ const v=localStorage.getItem(SKEY); return v?JSON.parse(v):MEM; }catch(e){ return MEM; } }
function saveS(d){ MEM=d; try{ localStorage.setItem(SKEY, JSON.stringify(d)); }catch(e){} }

/* ─── Simulateur de cube (faces physiquement valides) ─────────── */
const CUBE_FACES = ["U","L","F","R","B","D"];
const CUBE_COLOR = { U:"yellow", L:"red", F:"green", R:"orange", B:"teal", D:"white" };
const OPPOSITE = { yellow:"white", white:"yellow", red:"orange", orange:"red", green:"teal", teal:"green" };
function cubeSolved(){ const s={}; for(const f of CUBE_FACES){ s[f]=[]; for(let i=0;i<9;i++) s[f].push({c:CUBE_COLOR[f],i}); } return s; }
function rotCW(a){ return [a[6],a[3],a[0],a[7],a[4],a[1],a[8],a[5],a[2]]; }
const CM = {
  U:(s)=>{ s.U=rotCW(s.U); const F=s.F.slice(),R=s.R.slice(),B=s.B.slice(),L=s.L.slice();
    for(let i=0;i<3;i++){ s.F[i]=R[i]; s.L[i]=F[i]; s.B[i]=L[i]; s.R[i]=B[i]; } },
  D:(s)=>{ s.D=rotCW(s.D); const F=s.F.slice(),R=s.R.slice(),B=s.B.slice(),L=s.L.slice();
    for(let i=6;i<9;i++){ s.F[i]=L[i]; s.R[i]=F[i]; s.B[i]=R[i]; s.L[i]=B[i]; } },
  R:(s)=>{ s.R=rotCW(s.R); const U=s.U.slice(),F=s.F.slice(),D=s.D.slice(),B=s.B.slice();
    [2,5,8].forEach(i=>{ s.F[i]=D[i]; s.U[i]=F[i]; }); s.B[6]=U[2];s.B[3]=U[5];s.B[0]=U[8];
    s.D[2]=B[6];s.D[5]=B[3];s.D[8]=B[0]; },
  L:(s)=>{ s.L=rotCW(s.L); const U=s.U.slice(),F=s.F.slice(),D=s.D.slice(),B=s.B.slice();
    [0,3,6].forEach(i=>{ s.F[i]=U[i]; s.D[i]=F[i]; }); s.B[8]=D[0];s.B[5]=D[3];s.B[2]=D[6];
    s.U[0]=B[8];s.U[3]=B[5];s.U[6]=B[2]; },
  F:(s)=>{ s.F=rotCW(s.F); const U=s.U.slice(),R=s.R.slice(),D=s.D.slice(),L=s.L.slice();
    s.U[6]=L[8];s.U[7]=L[5];s.U[8]=L[2]; s.R[0]=U[6];s.R[3]=U[7];s.R[6]=U[8];
    s.D[2]=R[0];s.D[1]=R[3];s.D[0]=R[6]; s.L[2]=D[0];s.L[5]=D[1];s.L[8]=D[2]; },
  B:(s)=>{ s.B=rotCW(s.B); const U=s.U.slice(),R=s.R.slice(),D=s.D.slice(),L=s.L.slice();
    s.U[0]=R[2];s.U[1]=R[5];s.U[2]=R[8];
    s.R[2]=D[8];s.R[5]=D[7];s.R[8]=D[6];
    s.D[8]=L[6];s.D[7]=L[3];s.D[6]=L[0];
    s.L[6]=U[0];s.L[3]=U[1];s.L[0]=U[2]; },
};
const CM_KEYS = ["U","D","R","L","F","B"];

/* RNG seedable (Défi du jour = même face pour tout le monde) */
function mulberry32(seed){ return function(){ let t = seed += 0x6D2B79F5;
  t = Math.imul(t ^ (t>>>15), t | 1); t ^= t + Math.imul(t ^ (t>>>7), t | 61);
  return ((t ^ (t>>>14)) >>> 0) / 4294967296; }; }
function strSeed(s){ let h=1779033703; for(let i=0;i<s.length;i++){ h=Math.imul(h^s.charCodeAt(i),3432918353); h=(h<<13)|(h>>>19);} return h>>>0; }

/* Générateurs de faces par skin */
function classicFace(rng){
  const R = rng || Math.random;
  const s = cubeSolved();
  const n = 18 + Math.floor(R()*12);
  for(let i=0;i<n;i++) CM[CM_KEYS[Math.floor(R()*6)]](s);
  const f = CUBE_FACES[Math.floor(R()*6)];
  return s[f].map(st=>({colorId:st.c, typeId:0}));
}

// Sudocube : vraie face d'un cube mélangé. Chaque sticker garde le chiffre de sa
// position d'origine (1..9 dans l'ordre de lecture sur chaque face du cube résolu),
// donc deux stickers collés sur une même pièce ne peuvent jamais coexister sur une
// face affichée -> toujours reproductible physiquement.
// ─── Carte des pièces, dérivée du moteur lui-même ──────────────────────────
// Deux stickers appartenant à la même pièce (arête ou coin) ne peuvent JAMAIS
// apparaître ensemble sur une face. On calcule cette carte une fois au démarrage.
const PIECE_OF = (()=>{
  const tag = ()=>{ const s={}; let id=0;
    for(const f of CUBE_FACES){ s[f]=[]; for(let i=0;i<9;i++) s[f].push({c:CUBE_COLOR[f],i,id:id++}); } return s; };
  const home = {}; { const s=tag(); for(const f of CUBE_FACES) for(let i=0;i<9;i++) home[f+i]=s[f][i].id; }
  const maps = CM_KEYS.map(m=>{ const s=tag(); CM[m](s); const pos={};
    for(const f of CUBE_FACES) for(let i=0;i<9;i++) pos[s[f][i].id]=f+i; return pos; });
  const slots=[]; for(const f of CUBE_FACES) for(let i=0;i<9;i++) slots.push(f+i);
  const together=(a,b)=>maps.every(pm=>((pm[home[a]]!==a)===(pm[home[b]]!==b)));
  const par={}; slots.forEach(x=>par[x]=x);
  const find=x=>par[x]===x?x:(par[x]=find(par[x]));
  for(let x=0;x<slots.length;x++) for(let y=x+1;y<slots.length;y++){
    if(slots[x][1]==="4"||slots[y][1]==="4") continue;           // centres : pièces isolées
    if(together(slots[x],slots[y])) par[find(slots[x])]=find(slots[y]);
  }
  // sticker "couleur-position" -> identifiant de pièce
  const map={};
  for(const f of CUBE_FACES) for(let i=0;i<9;i++) map[CUBE_COLOR[f]+"-"+i] = (i===4? "C"+f : find(f+i));
  return map;
})();

// Face "à motifs fixes" (Sudo & Monstro) : le motif (chiffre / monstre) reste à sa
// position i, et on choisit les COULEURS de façon que les 9 cases proviennent
// toujours de 9 pièces DIFFÉRENTES du cube -> face reproductible physiquement.
const ALL_COLORS = ["yellow","white","red","orange","green","teal"];
function patternFace(rng){
  const R = rng || Math.random;
  const shuf = a => { const r=a.slice(); for(let i=r.length-1;i>0;i--){ const j=Math.floor(R()*(i+1)); [r[i],r[j]]=[r[j],r[i]]; } return r; };
  const used = new Set();
  const out = new Array(9);
  function place(i){
    if(i===9) return true;
    for(const c of shuf(ALL_COLORS)){
      const piece = PIECE_OF[c+"-"+i];
      if(used.has(piece)) continue;
      used.add(piece); out[i]={colorId:c, typeId:i};
      if(place(i+1)) return true;
      used.delete(piece);
    }
    return false;
  }
  place(0);
  return out;
}
function sudoFace(rng){ return patternFace(rng); }
function monstroFace(rng){ return patternFace(rng); }
const SKINS = {
  classic: { name:"classic", sprites:()=>CLASSIC_SPRITES, gen:classicFace, color:"#c69c6d", emoji:"🎨" },
  monstro: { name:"monstro", sprites:()=>MONSTER_SPRITES, gen:monstroFace, color:PAL.green, emoji:"👾" },
  sudoku:  { name:"sudoku",  sprites:()=>SUDOKUBE_SPRITES, gen:sudoFace,   color:"#ff1440",  emoji:"🔢" },
};
function todayKey(){ const d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function dailyFace(skin, round){ const rng = mulberry32(strSeed(todayKey()+"·"+skin+"·"+(round||1))); return SKINS[skin].gen(rng); }

/* Format temps */
function fmt(ms){
  if(ms==null) return "—";
  const s = ms/1000;
  if(s<60) return s.toFixed(2)+"s";
  const m = Math.floor(s/60); const r = s-m*60;
  return m+":"+r.toFixed(1).padStart(4,"0");
}

/* ─── Styles globaux ──────────────────────────────────────────── */
function GlobalStyles(){
  return <style>{`
    @keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
    @keyframes pop{0%{transform:scale(0.6);opacity:0}70%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
    @keyframes wiggle{0%,100%{transform:rotate(0)}25%{transform:rotate(-4deg)}75%{transform:rotate(4deg)}}
    @keyframes slideUp{0%{transform:translateY(16px);opacity:0}100%{transform:translateY(0);opacity:1}}
    @keyframes bgshift{0%,100%{transform:translate(0,0)}50%{transform:translate(-2%,2%)}}
    @keyframes confettiFall{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(105vh) rotate(540deg);opacity:.6}}
    .stagger>*{animation:slideUp .4s ease-out backwards}
    .stagger>*:nth-child(1){animation-delay:.03s}.stagger>*:nth-child(2){animation-delay:.09s}
    .stagger>*:nth-child(3){animation-delay:.15s}.stagger>*:nth-child(4){animation-delay:.21s}
    .stagger>*:nth-child(5){animation-delay:.27s}.stagger>*:nth-child(6){animation-delay:.33s}
    *{-webkit-tap-highlight-color:transparent}
    html{scroll-behavior:smooth}
    button{font-family:'Fredoka',sans-serif;user-select:none}
    img{user-select:none;-webkit-user-drag:none}
  `}</style>;
}
function Bg(){
  const shapes=[
    {e:"🧩",x:"6%",y:"12%",s:26,d:"9s",dl:"0s"},{e:"⭐",x:"88%",y:"18%",s:20,d:"11s",dl:"1.5s"},
    {e:"🎲",x:"10%",y:"78%",s:24,d:"10s",dl:".8s"},{e:"✨",x:"85%",y:"72%",s:18,d:"12s",dl:"2s"},
  ];
  return (
    <div style={{position:"fixed",inset:0,pointerEvents:"none",overflow:"hidden",zIndex:0}}>
      <div style={{position:"absolute",inset:"-20%",background:`radial-gradient(circle at 20% 15%,${PAL.purple}26 0%,transparent 40%),radial-gradient(circle at 80% 25%,${PAL.pink}1e 0%,transparent 40%),radial-gradient(circle at 50% 90%,${PAL.blue}1e 0%,transparent 45%)`,animation:"bgshift 18s ease-in-out infinite"}}/>
      <div style={{position:"absolute",inset:0,backgroundImage:`radial-gradient(${PAL.textFaint}18 1px,transparent 1px)`,backgroundSize:"22px 22px",opacity:.5}}/>
      {shapes.map((s,i)=>(<div key={i} style={{position:"absolute",left:s.x,top:s.y,fontSize:s.s,opacity:.15,animation:`floaty ${s.d} ease-in-out infinite`,animationDelay:s.dl}}>{s.e}</div>))}
    </div>
  );
}
function AgeToggle({ kids, toggleKids, t, color }){
  return (
    <div style={{width:"100%",maxWidth:360,marginBottom:14,display:"flex",gap:8}}>
      {[{v:false,label:t.teenLabel},{v:true,label:t.kidsLabel}].map(o=>(
        <button key={String(o.v)} onClick={()=>toggleKids(o.v)} style={{flex:1,padding:"10px 6px",border:"none",borderRadius:14,cursor:"pointer",
          background:kids===o.v?`linear-gradient(180deg,${shade(color,35)},${color} 50%)`:"#f5efe2",
          color:"#2a2012",fontWeight:700,fontSize:13,
          boxShadow:kids===o.v?`0 3px 0 ${shade(color,-40)}, 0 0 0 2px ${PAL.gold}`:`0 3px 0 #b9ac93, 0 0 0 2px ${PAL.gold}`}}>{o.label}</button>
      ))}
    </div>
  );
}
function Confetti(){
  const colors=[PAL.gold,PAL.pink,PAL.green,PAL.blue,PAL.orange,PAL.purple];
  const pieces=Array.from({length:26},(_,i)=>({left:(i*3.8+Math.random()*3)+"%",delay:(Math.random()*0.5)+"s",dur:(1.2+Math.random()*1.2)+"s",color:colors[i%colors.length],size:6+Math.random()*7}));
  return (
    <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:60,overflow:"hidden"}}>
      {pieces.map((p,i)=>(<div key={i} style={{position:"absolute",top:-12,left:p.left,width:p.size,height:p.size,background:p.color,borderRadius:i%3===0?"50%":3,animation:`confettiFall ${p.dur} ease-in ${p.delay} forwards`,boxShadow:`0 0 6px ${p.color}66`}}/>))}
    </div>
  );
}

/* ─── Boutons ─────────────────────────────────────────────────── */
function CandyBtn({ onClick, color, children, small, ring }){
  const [press,setPress]=useState(false);
  return (
    <button onClick={onClick} onPointerDown={()=>setPress(true)} onPointerUp={()=>setPress(false)} onPointerLeave={()=>setPress(false)}
      style={{ width:small?"auto":"100%", padding:small?"12px 26px":"17px 20px",
        background:`linear-gradient(180deg,${shade(color,35)},${color} 45%)`, border:`2px solid ${ring||PAL.gold}`, borderRadius:20,
        boxShadow:press?`0 2px 0 ${shade(color,-40)}`:`0 6px 0 ${shade(color,-40)}, 0 8px 20px ${color}44, inset 0 2px 4px rgba(255,255,255,.45)`,
        transform:press?"translateY(4px)":"none", color:"#1a1228", fontWeight:700, fontSize:small?16:19,
        letterSpacing:1, cursor:"pointer", transition:"all .1s" }}>{children}</button>
  );
}
function ComingSoonScreen({ onBack, t }){
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 16px",minHeight:"100vh",position:"relative",zIndex:1,textAlign:"center"}}>
      <div style={{position:"absolute",top:20,left:16}}>
        <GhostBtn onClick={onBack} color={PAL.gold}>←</GhostBtn>
      </div>
      <img src={CIVI_BTN} alt={t.civi} style={{width:"100%",maxWidth:340,marginBottom:26,filter:"drop-shadow(0 8px 22px rgba(0,0,0,.45))"}}/>
      <div style={{fontSize:52,marginBottom:10,animation:"floaty 4s ease-in-out infinite"}}>🏗️</div>
      <div style={{fontSize:22,fontWeight:700,color:PAL.text,marginBottom:10}}>{t.civiComingTitle}</div>
      <div style={{fontSize:15,color:PAL.textDim,maxWidth:320,lineHeight:1.6,marginBottom:24}}>{t.civiComingSub}</div>
      <GhostBtn onClick={onBack} color={PAL.gold}>{t.menu}</GhostBtn>
    </div>
  );
}
function TutoScreen({ onBack, t }){
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 16px 90px",minHeight:"100vh",position:"relative",zIndex:1,textAlign:"center"}}>
      <div style={{position:"absolute",top:20,left:16}}>
        <GhostBtn onClick={onBack} color={PAL.gold}>←</GhostBtn>
      </div>
      <img src={TUTO_BTN} alt={t.tuto} style={{width:"100%",maxWidth:340,marginBottom:26,filter:"drop-shadow(0 8px 22px rgba(0,0,0,.45))"}}/>
      <div style={{fontSize:52,marginBottom:10,animation:"floaty 4s ease-in-out infinite"}}>🎓</div>
      <div style={{fontSize:22,fontWeight:700,color:PAL.text,marginBottom:10}}>{t.tutoSoonTitle}</div>
      <div style={{fontSize:15,color:PAL.textDim,maxWidth:320,lineHeight:1.6,marginBottom:24}}>{t.tutoSoonSub}</div>
      <GhostBtn onClick={onBack} color={PAL.gold}>{t.menu}</GhostBtn>
    </div>
  );
}
function GhostBtn({ onClick, children, color, bg, border, shadow }){
  return (
    <button onClick={onClick} style={{background:bg||PAL.card,border:`2px solid ${border||PAL.gold}`,borderRadius:14,padding:"8px 16px",color:color||PAL.textDim,fontWeight:700,fontSize:14,cursor:"pointer",boxShadow:`0 3px 0 ${shadow||PAL.bg2}`}}>{children}</button>
  );
}
function SectionLabel({ children, wood }){
  const lc = wood ? "#8a6539" : PAL.cardHi;
  return (
    <div style={{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:380,margin:"26px 0 12px"}}>
      <div style={{flex:1,height:1,background:`linear-gradient(90deg,transparent,${lc})`}}/>
      <div style={{fontWeight:700,fontSize:12,letterSpacing:2.5,color:wood?"#4a3418":PAL.textDim,textTransform:"uppercase"}}>{children}</div>
      <div style={{flex:1,height:1,background:`linear-gradient(90deg,${lc},transparent)`}}/>
    </div>
  );
}
function StatChip({ label, value, color, bg, ring, labelColor }){
  return (
    <div style={{background:bg||PAL.card,borderRadius:14,padding:"8px 14px",textAlign:"center",boxShadow:`0 0 0 2px ${ring||PAL.gold}`}}>
      <div style={{fontWeight:700,fontSize:17,color}}>{value}</div>
      <div style={{fontSize:10,color:labelColor||PAL.textFaint,fontWeight:600,letterSpacing:.5}}>{label}</div>
    </div>
  );
}

/* ─── Grille de cube ──────────────────────────────────────────── */
function CubeFace({ cells, size, glow, sprites, onClick, dark, light }){
  const s = size || 260;
  const cell = (s-24)/3;
  return (
    <div onClick={onClick} style={{width:s,height:s,background:dark?"#000":(light?"#fdf6ea":"#171327"),borderRadius:22,padding:6,display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,boxShadow:glow?(dark?`0 0 30px ${glow}, 0 0 60px ${glow}66, 0 10px 30px rgba(0,0,0,.6), 0 0 0 2px ${glow}`:(light?`0 0 22px ${glow}66, 0 8px 22px rgba(120,90,50,.25), 0 0 0 2px ${glow}`:`0 0 28px ${glow}55, 0 10px 30px rgba(0,0,0,.45)`)):(light?"0 8px 22px rgba(120,90,50,.2)":"0 10px 30px rgba(0,0,0,.45)"),cursor:onClick?"pointer":"default",animation:"pop .35s ease-out"}}>
      {cells.map((c,i)=>{
        const sprite = sprites[c.colorId]?.[c.typeId??i];
        return <div key={i} style={{borderRadius:12,overflow:"hidden",background:dark?"#170004":(light?"#f0e0c4":"#241d3c")}}>
          {sprite&&<img src={sprite} alt="" draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>}
        </div>;
      })}
    </div>
  );
}

/* ─── Courbe de progression ───────────────────────────────────── */
function ProgressChart({ sessions, color, t }){
  if(!sessions||sessions.length<2)
    return <div style={{textAlign:"center",color:PAL.textFaint,fontSize:13,padding:20,fontWeight:600}}>{t.chartHint}</div>;
  const last = sessions.slice(-12);
  const w=280,h=110,pad=10;
  const ts = last.map(s=>s.time);
  const mn=Math.min(...ts), mx=Math.max(...ts);
  const pts = last.map((s,i)=>{
    const x = pad + (i/(last.length-1))*(w-2*pad);
    const y = mx===mn ? h/2 : pad + ((s.time-mn)/(mx-mn))*(h-2*pad);
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      {last.map((s,i)=>{
        const x = pad + (i/(last.length-1))*(w-2*pad);
        const y = mx===mn ? h/2 : pad + ((s.time-mn)/(mx-mn))*(h-2*pad);
        return <circle key={i} cx={x} cy={y} r="4" fill={s.time===mn?PAL.gold:color}/>;
      })}
    </svg>
  );
}
function ProgressPanel({ t, stats, color }){
  const [open,setOpen]=useState(false);
  const sessions = stats.sessions||[];
  const best = stats.best;
  return (
    <div style={{width:"100%",maxWidth:340,marginTop:16}}>
      <button onClick={()=>setOpen(o=>!o)} style={{width:"100%",border:"none",cursor:"pointer",background:PAL.card,borderRadius:16,padding:"13px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:`0 4px 0 ${PAL.bg2}, 0 0 0 2px ${PAL.gold}`}}>
        <span style={{fontWeight:700,fontSize:15,color}}>{t.timesEvol}</span>
        <span style={{fontSize:18,color,transform:open?"rotate(180deg)":"none",transition:"transform .2s"}}>▾</span>
      </button>
      {open&&(
        <div style={{background:PAL.card,border:`2px solid ${PAL.cardHi}`,borderRadius:18,padding:16,marginTop:10,animation:"slideUp .3s ease-out"}}>
          <ProgressChart sessions={sessions} color={color} t={t}/>
          {sessions.length>0&&(
            <div style={{marginTop:10}}>
              <div style={{fontWeight:700,fontSize:13,color:PAL.textDim,marginBottom:8}}>{t.lastGames}</div>
              {sessions.slice(-6).reverse().map((s,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:i<5?`1px solid ${PAL.cardHi}`:"none"}}>
                  <span style={{fontSize:12,color:PAL.textFaint,fontWeight:600}}>{new Date(s.date).toLocaleDateString()}</span>
                  <span style={{fontWeight:700,fontSize:17,color:s.time===best?PAL.gold:PAL.text}}>{s.time===best?"⭐ ":""}{fmt(s.time)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Nudge boutique (après un record) ────────────────────────── */
function ShopNudge({ t }){
  return (
    <a href="https://rurucube.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",display:"block",width:"100%",maxWidth:340,marginTop:14}}>
      <div style={{display:"flex",alignItems:"center",gap:10,background:`linear-gradient(135deg,${PAL.green}22,${PAL.card})`,borderRadius:16,padding:"12px 14px",boxShadow:`0 0 0 2px ${PAL.gold}`,animation:"slideUp .4s ease-out"}}>
        <span style={{fontSize:22}}>👾</span>
        <span style={{flex:1,fontSize:13,color:PAL.text,fontWeight:600,lineHeight:1.35,textAlign:"left"}}>{t.nudge}</span>
        <span style={{fontSize:13,fontWeight:700,color:PAL.green,flexShrink:0}}>{t.nudgeBtn}</span>
      </div>
    </a>
  );
}


/* ─── Bandeau de consigne contextuelle ────────────────────────── */
function Hint({ children, color, icon }){
  const c = color||PAL.purple;
  return (
    <div style={{display:"flex",alignItems:"center",gap:12,background:`linear-gradient(135deg,${c}30,${PAL.card})`,border:`2px solid ${PAL.gold}`,borderRadius:16,padding:"13px 16px",maxWidth:360,width:"100%",boxShadow:`0 4px 0 ${PAL.bg2}, 0 0 18px ${c}33`,animation:"slideUp .3s ease-out"}}>
      <span style={{fontSize:24,flexShrink:0}}>{icon||"👉"}</span>
      <span style={{fontSize:16,color:"#ffffff",fontWeight:700,lineHeight:1.4,textAlign:"left"}}>{children}</span>
    </div>
  );
}

/* ─── Modale "Comment jouer" ──────────────────────────────────── */
function HowToPlay({ t, onClose, skin }){
  const neon = skin==="sudoku", wood = skin==="classic", paper = skin==="monstro";
  const isLight = wood || paper;
  const theme = neon ? SKINS.sudoku.color : wood ? "#8a6539" : paper ? "#132a4d" : PAL.gold;
  const modalBg = neon ? "#140004" : wood ? "#fdf6ea" : paper ? "#ffffff" : PAL.card;
  const modalBorder = neon ? SKINS.sudoku.color : wood ? "#c69c6d" : paper ? "#2a4570" : PAL.gold;
  const titleColor = isLight ? "#2a2012" : "#ffffff";
  const bodyColor = isLight ? "#2a2012" : "#ffffff";
  const sectionBg = neon ? "#1a0008" : wood ? "#f3e6d0" : paper ? "#eef2f7" : PAL.bg2;
  const closeBg = isLight ? "#e7dcc4" : PAL.bg2;
  const closeColor = isLight ? "#2a2012" : PAL.textDim;

  const sections = [
    {h:t.htGeneral, p:t.htGeneralTxt, c:theme},
    {h:t.htFace, p:t.htFaceTxt, c:PAL.gold},
    {h:t.htReverse, p:t.htReverseTxt, c:PAL.orange},
    {h:t.htDuel, p:t.htDuelTxt, c:PAL.green},
    {h:t.htBlind, p:t.htBlindTxt, c:PAL.blue},
    {h:t.htChrono, p:t.htChronoTxt, c:theme},
    {h:t.htDaily, p:t.htDailyTxt, c:PAL.purple},
    {h:t.htTip, p:t.htTipTxt, c:PAL.pink},
  ];
  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:70,background:"rgba(13,11,26,.82)",backdropFilter:"blur(6px)",display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
      <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:480,maxHeight:"88vh",overflowY:"auto",background:modalBg,border:`3px solid ${modalBorder}`,borderBottom:"none",borderRadius:"28px 28px 0 0",padding:"22px 20px 30px",boxShadow:"0 -10px 40px rgba(0,0,0,.5)",animation:"slideUp .3s ease-out"}}>
        <div style={{width:44,height:5,borderRadius:3,background:modalBorder,margin:"0 auto 16px",opacity:.5}}/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
          <div style={{fontWeight:700,fontSize:26,color:titleColor}}>{t.howToTitle}</div>
          <button onClick={onClose} style={{background:closeBg,border:"none",borderRadius:12,width:36,height:36,color:closeColor,fontSize:18,cursor:"pointer",fontWeight:700}}>✕</button>
        </div>
        {sections.map((s,i)=>(
          <div key={i} style={{background:sectionBg,borderLeft:`5px solid ${s.c}`,borderRadius:14,padding:"14px 16px",marginBottom:12}}>
            <div style={{fontWeight:700,fontSize:18,color:s.c,marginBottom:6}}>{s.h}</div>
            <div style={{fontSize:16,color:bodyColor,fontWeight:500,lineHeight:1.6}}>{s.p}</div>
          </div>
        ))}
        <div style={{marginTop:14}}><CandyBtn onClick={onClose} color={theme}>{t.gotIt}</CandyBtn></div>
      </div>
    </div>
  );
}

/* ─── Header d'écran de jeu ───────────────────────────────────── */
function Header({ onBack, title, color, sub, t, bg, border, shadow }){
  return (
    <div style={{width:"100%",maxWidth:380,display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
      <GhostBtn onClick={onBack} color={color} bg={bg} border={border} shadow={shadow}>{t.menu}</GhostBtn>
      <div>
        <div style={{fontWeight:700,fontSize:20,color}}>{title}</div>
        {sub&&<div style={{fontSize:12,color:PAL.textFaint,fontWeight:600}}>{sub}</div>}
      </div>
    </div>
  );
}

/* ═══ ÉCRAN CHALLENGE (Face / Reverse / Défi du jour) ═══════════ */
function ChallengeScreen({ onBack, t, skin, daily, forceMode }){
  const S = SKINS[skin];
  const sprites = S.sprites();
  const [mode,setMode] = useState(forceMode||"normal");  // normal | reverse | blind
  const [memoLimit,setMemoLimit] = useState(5);
  const [ph,setPh] = useState("ready");             // ready | count | playing | roundDone | done
  const [count,setCount] = useState(5);
  const [face,setFace] = useState(null);
  const [ms,setMs] = useState(0);
  const [limit,setLimit] = useState(60);
  const [failed,setFailed] = useState(false);
  const [isRecord,setIsRecord] = useState(false);
  const [round,setRound] = useState(1);
  const [roundTimes,setRoundTimes] = useState([]);
  const roundRef = useRef(1);
  const roundTimesRef = useRef([]);
  const timer = useRef(null);
  const startRef = useRef(0);
  const DAILY_ROUNDS = 5;

  const statKey = daily ? "daily" : (mode==="normal"?"challenge":(mode==="reverse"?"reverse":"blind"));
  const data = loadS();
  const skinData = data[skin] || {};
  const stats = skinData[statKey] || { best:null, games:0, sessions:[], streak:0 };
  const today = todayKey();
  const dailyDoneTime = daily ? (skinData.daily?.days?.[today] ?? null) : null;

  useEffect(()=>()=>clearInterval(timer.current),[]);

  function startCountThenPlay(){
    setCount(5); setPh("count");
    let c = 5;
    clearInterval(timer.current);
    timer.current = setInterval(()=>{
      c -= 1;
      if(c<=0){
        clearInterval(timer.current);
        const f = daily ? dailyFace(skin, roundRef.current) : S.gen();
        setFace(f); setFailed(false); setIsRecord(false); setMs(0);
        setPh("playing");
        startRef.current = Date.now();
        timer.current = setInterval(()=>{
          const el = Date.now()-startRef.current;
          if(mode==="reverse" && !daily && el >= limit*1000){
            clearInterval(timer.current); setMs(limit*1000); setFailed(true); setPh("done");
          } else setMs(el);
        }, 47);
      } else setCount(c);
    }, 900);
  }
  function begin(){
    if(daily){ roundRef.current = 1; setRound(1); roundTimesRef.current = []; setRoundTimes([]); }
    startCountThenPlay();
  }
  function nextRound(){
    roundRef.current += 1; setRound(roundRef.current);
    startCountThenPlay();
  }
  function stop(){
    if(ph!=="playing") return;
    clearInterval(timer.current);
    const el = Date.now()-startRef.current;
    setMs(el);
    const d = loadS(); const sd = d[skin]||{};
    if(daily){
      const newTimes = [...roundTimesRef.current, el];
      roundTimesRef.current = newTimes; setRoundTimes(newTimes);
      if(roundRef.current < DAILY_ROUNDS){
        setPh("roundDone");
      } else {
        const total = newTimes.reduce((a,b)=>a+b,0);
        const dd = sd.daily || { days:{} , best:null, games:0, sessions:[] };
        if(dd.days[today]==null || total < dd.days[today]) dd.days[today]=total;
        dd.games=(dd.games||0)+1;
        sd.daily = dd; d[skin]=sd; saveS(d);
        setMs(total);
        setPh("done");
      }
    } else {
      const st = sd[statKey] || { best:null, games:0, sessions:[], streak:0 };
      const rec = st.best==null || el < st.best;
      if(rec){ st.best = el; setIsRecord(true); }
      st.games=(st.games||0)+1;
      st.streak=(st.streak||0)+1;
      st.sessions=[...(st.sessions||[]),{date:Date.now(),time:el}].slice(-50);
      sd[statKey]=st; d[skin]=sd; saveS(d);
      setPh("done");
    }
  }
  const color = daily ? PAL.purple : (mode==="normal"?PAL.gold:(mode==="reverse"?PAL.orange:PAL.blue));
  const hidden = mode==="blind" && !daily && ph==="playing" && ms >= memoLimit*1000;
  const neon = skin==="sudoku";
  const wood = skin==="classic";
  const paper = skin==="monstro";
  const OBJ_E=["🐌","🚶","🏃","⚡"];
  const objTimes=[60000,45000,30000,15000];

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 90px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #3a0010 0%, #0a0004 55%, #000 100%)"}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
      <Header onBack={onBack} t={t} color={wood?"#4a3418":(paper?"#132a4d":color)}
        bg={wood?"#fbeed8":(paper?"#ffffff":undefined)} border={wood?"#c69c6d":(paper?"#2a4570":undefined)} shadow={wood?"#8a6539":(paper?"#2a4570":undefined)}
        title={daily?`🗓️ ${t.daily}`:(mode==="reverse"?`⏳ ${t.reverseTile}`:(mode==="blind"?`🙈 ${t.blind}`:`🎯 ${t.faceTile}`))}
        sub={daily?`${t.round} ${round}/${DAILY_ROUNDS}`:undefined}/>

      {ph==="ready"&&!daily&&!forceMode&&(
        <div style={{display:"flex",gap:8,width:"100%",maxWidth:340,marginBottom:14}}>
          {[{id:"normal",label:t.face,color:PAL.gold},{id:"reverse",label:t.reverse,color:PAL.orange},{id:"blind",label:t.blindMode,color:PAL.blue}].map(m=>(
            <button key={m.id} onClick={()=>setMode(m.id)} style={{flex:1,padding:"14px 4px",border:"none",borderRadius:18,cursor:"pointer",
              background:mode===m.id?`linear-gradient(180deg,${shade(m.color,30)},${m.color} 45%)`:(wood?"#fbeed8":(paper?"#ffffff":PAL.card)),
              color:mode===m.id?"#1a1228":(wood?"#4a3418":(paper?"#132a4d":PAL.textDim)),fontWeight:700,fontSize:16,
              boxShadow:mode===m.id?`0 5px 0 ${shade(m.color,-40)}, inset 0 2px 4px rgba(255,255,255,.4)`:(wood?`0 4px 0 #8a6539, 0 0 0 2px #c69c6d`:(paper?`0 4px 0 #2a4570, 0 0 0 2px #2a4570`:`0 4px 0 ${PAL.bg2}, 0 0 0 2px ${PAL.gold}`)),
              transition:"all .1s"}}>{m.label}</button>
          ))}
        </div>
      )}

      {ph==="ready"&&mode==="reverse"&&!daily&&(
        <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap",justifyContent:"center"}}>
          {[60,45,30,15,5].map(l=>(
            <button key={l} onClick={()=>setLimit(l)} style={{padding:"8px 14px",border:"none",borderRadius:12,cursor:"pointer",
              background:limit===l?PAL.orange:(wood?"#fbeed8":(paper?"#ffffff":PAL.card)),color:limit===l?"#1a1228":(wood?"#4a3418":(paper?"#132a4d":PAL.textDim)),fontWeight:700,fontSize:14,
              boxShadow:limit===l?`0 3px 0 ${shade(PAL.orange,-40)}`:(wood?`0 3px 0 #8a6539`:(paper?`0 3px 0 #2a4570`:`0 3px 0 ${PAL.bg2}`))}}>{l}s</button>
          ))}
        </div>
      )}
      {ph==="ready"&&mode==="blind"&&!daily&&(
        <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap",justifyContent:"center"}}>
          {[8,5,3,2].map(l=>(
            <button key={l} onClick={()=>setMemoLimit(l)} style={{padding:"8px 14px",border:"none",borderRadius:12,cursor:"pointer",
              background:memoLimit===l?PAL.blue:(wood?"#fbeed8":(paper?"#ffffff":PAL.card)),color:memoLimit===l?"#1a1228":(wood?"#4a3418":(paper?"#132a4d":PAL.textDim)),fontWeight:700,fontSize:14,
              boxShadow:memoLimit===l?`0 3px 0 ${shade(PAL.blue,-40)}`:(wood?`0 3px 0 #8a6539`:(paper?`0 3px 0 #2a4570`:`0 3px 0 ${PAL.bg2}`))}}>{l}s</button>
          ))}
        </div>
      )}

      {/* Chrono */}
      <div style={{fontWeight:700,fontSize:52,color,lineHeight:1,margin:"6px 0 14px",fontVariantNumeric:"tabular-nums",textShadow:`0 0 22px ${color}44`}}>
        {mode==="reverse"&&!daily&&ph==="playing" ? fmt(Math.max(0,limit*1000-ms)) : fmt(ms)}
      </div>

      {ph==="count"&&(
        <div style={{fontWeight:700,fontSize:110,color,animation:"pop .3s ease-out",textShadow:`0 0 40px ${color}66`,margin:"30px 0"}}>{count}</div>
      )}

      {ph==="ready"&&(
        <>
          {daily&&(
            <div style={{background:PAL.card,borderRadius:16,padding:"12px 18px",marginBottom:16,maxWidth:320,textAlign:"center",boxShadow:`0 0 0 2px ${PAL.gold}`}}>
              <div style={{fontSize:15,color:"#ffffff",fontWeight:600,lineHeight:1.5}}>{t.dailyTodo}</div>
              {dailyDoneTime!=null&&<div style={{marginTop:6,fontWeight:700,fontSize:16,color:PAL.gold}}>{t.dailyDone} {fmt(dailyDoneTime)}</div>}
            </div>
          )}
          <div style={{marginBottom:14,width:"100%",display:"flex",justifyContent:"center"}}>
            <Hint color={color} icon={daily?"🗓️":"🎲"}>{daily?t.ctxDailyReady:(mode==="reverse"?t.ctxReverse:(mode==="blind"?t.ctxBlindReady:t.ctxReady))}</Hint>
          </div>
          <div style={{width:"100%",maxWidth:300}}><CandyBtn onClick={begin} color={neon?SKINS.sudoku.color:(wood?"#c69c6d":(paper?"#ffffff":color))} ring={neon?SKINS.sudoku.color:(wood?"#8a6539":(paper?"#132a4d":undefined))}>{t.go}</CandyBtn></div>
          {!daily&&(
            <>
              <div style={{display:"flex",gap:10,marginTop:18}}>
                <StatChip label={t.record} value={fmt(stats.best)} color={color} bg={neon?"#0a0006":(wood?"#fbeed8":(paper?"#eef2f7":undefined))} ring={neon?SKINS.sudoku.color:(wood?"#c69c6d":(paper?"#2a4570":undefined))} labelColor={wood?"#4a3418":(paper?"#2a4570":undefined)}/>
                <StatChip label={t.games} value={stats.games||0} color={PAL.green} bg={neon?"#0a0006":(wood?"#fbeed8":(paper?"#eef2f7":undefined))} ring={neon?SKINS.sudoku.color:(wood?"#c69c6d":(paper?"#2a4570":undefined))} labelColor={wood?"#4a3418":(paper?"#2a4570":undefined)}/>
                <StatChip label={t.streak} value={`${stats.streak||0}🔥`} color={PAL.orange} bg={neon?"#0a0006":(wood?"#fbeed8":(paper?"#eef2f7":undefined))} ring={neon?SKINS.sudoku.color:(wood?"#c69c6d":(paper?"#2a4570":undefined))} labelColor={wood?"#4a3418":(paper?"#2a4570":undefined)}/>
              </div>
              {mode==="normal"&&(
                <div style={{width:"100%",maxWidth:340,marginTop:18}}>
                  <div style={{fontWeight:700,fontSize:14,color:wood?"#4a3418":(paper?"#132a4d":PAL.textDim),marginBottom:8}}>{t.objectives}</div>
                  <div style={{display:"flex",gap:8}}>
                    {t.obj.map((o,i)=>{
                      const ok = stats.best!=null && stats.best<=objTimes[i];
                      const tileBg = neon?"#0a0006":(wood?"#fbeed8":(paper?"#eef2f7":PAL.card));
                      const tileRing = neon?SKINS.sudoku.color:(wood?"#c69c6d":(paper?"#2a4570":PAL.gold));
                      const tileLabel = wood?"#4a3418":(paper?"#132a4d":PAL.textDim);
                      return <div key={i} style={{flex:1,background:tileBg,borderRadius:12,padding:"10px 4px",textAlign:"center",opacity:ok?1:.45,boxShadow:ok?`0 0 0 2px ${tileRing}`:"none"}}>
                        <div style={{fontSize:20}}>{OBJ_E[i]}</div>
                        <div style={{fontSize:9,color:tileLabel,fontWeight:600,marginTop:2}}>{o}</div>
                      </div>;
                    })}
                  </div>
                </div>
              )}
              <ProgressPanel t={t} stats={stats} color={color}/>
            </>
          )}
        </>
      )}

      {ph==="playing"&&face&&(
        <>
          <div style={{marginBottom:12,width:"100%",display:"flex",justifyContent:"center"}}>
            <Hint color={color} icon={hidden?"🙈":"⚡"}>
              {mode==="reverse"&&!daily?t.ctxReverse:(mode==="blind"?(hidden?t.ctxBlindHidden:t.ctxBlindMemo):t.ctxPlaying)}
            </Hint>
          </div>
          {hidden ? (
            <div onClick={stop} style={{width:Math.min(300,window.innerWidth-60),height:Math.min(300,window.innerWidth-60),
              borderRadius:22,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
              background:neon?`linear-gradient(160deg,${shade(SKINS.sudoku.color,-70)},#000)`:(wood?`linear-gradient(160deg,#fffdf8,#fbeed8)`:`linear-gradient(160deg,${shade(PAL.blue,-70)},${PAL.dark})`),
              boxShadow:neon?`0 0 30px ${SKINS.sudoku.color}, 0 10px 30px rgba(0,0,0,.6), 0 0 0 2px ${SKINS.sudoku.color}`:(wood?`0 0 22px #c69c6d66, 0 8px 22px rgba(120,90,50,.25), 0 0 0 2px #c69c6d`:`0 0 28px ${PAL.blue}55, 0 10px 30px rgba(0,0,0,.45), 0 0 0 2px ${PAL.gold}`),
              animation:"pop .35s ease-out"}}>
              <span style={{fontSize:64,filter:"drop-shadow(0 4px 10px rgba(0,0,0,.5))"}}>🙈</span>
            </div>
          ) : (
            <CubeFace cells={face} size={Math.min(300,window.innerWidth-60)} glow={neon?SKINS.sudoku.color:(wood?"#c69c6d":color)} sprites={sprites} onClick={mode==="blind"?undefined:stop} dark={neon} light={wood}/>
          )}
          <div style={{marginTop:14,fontSize:16,color:"#ffffff",fontWeight:700}}>{t.tapGrid}</div>
        </>
      )}

      {ph==="roundDone"&&(
        <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div style={{background:PAL.card,borderRadius:22,padding:"14px 18px",marginBottom:14,boxShadow:`0 0 0 2px ${PAL.gold}`,animation:"pop .35s ease-out"}}>
            <div style={{fontSize:11,letterSpacing:2,color:PAL.textFaint,fontWeight:700}}>{t.round} {round}/{DAILY_ROUNDS}</div>
            <div style={{fontWeight:700,fontSize:38,color:PAL.purple,lineHeight:1.05,fontVariantNumeric:"tabular-nums"}}>{fmt(ms)}</div>
          </div>
          <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",justifyContent:"center"}}>
            {roundTimes.map((rt,i)=>(
              <div key={i} style={{background:PAL.bg2,borderRadius:10,padding:"5px 10px",fontSize:12,fontWeight:700,color:PAL.textDim}}>#{i+1} {fmt(rt)}</div>
            ))}
          </div>
          <div style={{width:"100%",maxWidth:300}}>
            <CandyBtn onClick={nextRound} color={PAL.purple}>{t.round} {round+1}/{DAILY_ROUNDS} →</CandyBtn>
          </div>
        </div>
      )}

      {ph==="done"&&(
        <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>
          {isRecord&&<Confetti/>}
          <div style={{background:PAL.card,borderRadius:22,padding:"14px 18px",marginBottom:14,boxShadow:`0 0 0 2px ${PAL.gold}`,animation:"pop .35s ease-out"}}>
            <div style={{fontSize:11,letterSpacing:2,color:PAL.textFaint,fontWeight:700}}>{isRecord?"🏆":"⏱️"}</div>
            <div style={{fontWeight:700,fontSize:44,color:isRecord?PAL.gold:color,lineHeight:1.05,fontVariantNumeric:"tabular-nums"}}>{fmt(ms)}</div>
          </div>
          {daily&&roundTimes.length>0&&(
            <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap",justifyContent:"center"}}>
              {roundTimes.map((rt,i)=>(
                <div key={i} style={{background:PAL.bg2,borderRadius:10,padding:"5px 10px",fontSize:12,fontWeight:700,color:PAL.textDim}}>#{i+1} {fmt(rt)}</div>
              ))}
            </div>
          )}
          {face&&<CubeFace cells={face} size={Math.min(220,window.innerWidth-110)} sprites={sprites} dark={neon} light={wood} glow={neon?SKINS.sudoku.color:(wood?"#c69c6d":null)}/>}
          {mode==="reverse"&&!daily&&<div style={{fontWeight:700,fontSize:18,color:failed?PAL.red:PAL.green,marginTop:12}}>{failed?t.timeUp:t.success}</div>}
          {isRecord&&<div style={{fontWeight:700,fontSize:17,color:PAL.gold,marginTop:8,animation:"wiggle .6s ease-in-out 3"}}>{t.newRecord}</div>}
          <div style={{marginTop:16,width:"100%",maxWidth:300}}>
            {!daily
              ? <CandyBtn onClick={()=>{setPh("ready");}} color={neon?SKINS.sudoku.color:(wood?"#c69c6d":(paper?"#ffffff":color))} ring={neon?SKINS.sudoku.color:(wood?"#8a6539":(paper?"#132a4d":undefined))}>{t.replay}</CandyBtn>
              : <CandyBtn onClick={onBack} color={neon?SKINS.sudoku.color:(wood?"#c69c6d":(paper?"#ffffff":color))} ring={neon?SKINS.sudoku.color:(wood?"#8a6539":(paper?"#132a4d":undefined))}>{t.menu.replace("← ","")}</CandyBtn>}
          </div>
          {(isRecord||daily)&&skin==="classic"&&<ShopNudge t={t}/>}
        </div>
      )}
    </div>
  );
}

/* ═══ ÉCRAN CHRONO CUBE (résolution complète) ═══════════════════ */

/* ═══ ÉCRAN PROGRESSION ══════════════════════════════════════════ */
function ProgressScreen({ onBack, t }){
  const data = loadS();
  const cubes = [
    { id:"monstro", label:t.monstro, emoji:"👾", color:SKINS.monstro.color },
    { id:"classic", label:t.classic, emoji:"🎨", color:SKINS.classic.color },
    { id:"sudoku",  label:t.sudo,    emoji:"🔢", color:SKINS.sudoku.color },
  ];
  const modes = [
    { key:"challenge", label:t.faceTile,    icon:"🎯" },
    { key:"reverse",   label:t.reverseTile, icon:"⏳" },
    { key:"blind",     label:t.blind,       icon:"🙈" },
    { key:"chrono",    label:t.chrono,      icon:"🧩" },
  ];
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 100px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <Header onBack={onBack} t={t} color={PAL.gold} title={`📊 ${t.progress}`} sub={t.progressSub}/>
      <div style={{width:"100%",maxWidth:400,display:"flex",flexDirection:"column",gap:14}}>
        {cubes.map(cube=>{
          const cd = data[cube.id] || {};
          const totalGames = modes.reduce((sum,m)=> sum + (cd[m.key]?.games||0), 0) + (cd.daily?.games||0);
          return (
            <div key={cube.id} style={{background:PAL.card,borderRadius:20,padding:"16px 18px",boxShadow:`0 5px 0 ${PAL.bg2}, 0 0 0 2px ${cube.color}`}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
                <span style={{fontSize:24}}>{cube.emoji}</span>
                <span style={{fontWeight:700,fontSize:17,color:PAL.text,flex:1}}>{cube.label}</span>
                <span style={{fontSize:12,color:PAL.textFaint,fontWeight:600}}>{totalGames} 🎮</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
                {modes.map(m=>{
                  const best = cd[m.key]?.best;
                  return (
                    <div key={m.key} style={{background:PAL.bg2,borderRadius:12,padding:"8px 4px",textAlign:"center"}}>
                      <div style={{fontSize:16}}>{m.icon}</div>
                      <div style={{fontSize:12,fontWeight:700,color:best!=null?cube.color:PAL.textFaint,marginTop:2}}>{best!=null?fmt(best):"—"}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ChronoScreen({ onBack, t, skin }){
  const [ph,setPh] = useState("ready");   // ready | count | playing | done
  const [ms,setMs] = useState(0);
  const [count,setCount] = useState(5);
  const [isRecord,setIsRecord] = useState(false);
  const timer = useRef(null);
  const startRef = useRef(0);

  const data = loadS(); const sd = data[skin]||{};
  const stats = sd.chrono || { best:null, games:0, sessions:[] };

  useEffect(()=>()=>clearInterval(timer.current),[]);

  function begin(){
    setIsRecord(false); setMs(0); setCount(5); setPh("count");
    let c = 5;
    timer.current = setInterval(()=>{
      c -= 1;
      if(c<=0){
        clearInterval(timer.current);
        setPh("playing");
        startRef.current = Date.now();
        timer.current = setInterval(()=>setMs(Date.now()-startRef.current), 47);
      } else setCount(c);
    }, 900);
  }
  function stop(){
    if(ph!=="playing") return;
    clearInterval(timer.current);
    const el = Date.now()-startRef.current; setMs(el);
    const d = loadS(); const s2 = d[skin]||{};
    const st = s2.chrono || { best:null, games:0, sessions:[] };
    const rec = st.best==null || el<st.best;
    if(rec){ st.best=el; setIsRecord(true); }
    st.games=(st.games||0)+1;
    st.sessions=[...(st.sessions||[]),{date:Date.now(),time:el}].slice(-50);
    s2.chrono=st; d[skin]=s2; saveS(d);
    setPh("done");
  }
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 90px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <Header onBack={onBack} t={t} color={PAL.blue} title={`🧩 ${t.chrono}`} sub={t.chronoSub}/>
      <div style={{fontWeight:700,fontSize:58,color:PAL.blue,lineHeight:1,margin:"8px 0 16px",fontVariantNumeric:"tabular-nums",textShadow:`0 0 22px ${PAL.blue}44`}}>{fmt(ms)}</div>

      {ph==="ready"&&(
        <>
          <div style={{marginBottom:16,width:"100%",display:"flex",justifyContent:"center"}}>
            <Hint color={PAL.blue} icon="🧩">{t.ctxChronoReady}</Hint>
          </div>
          <div style={{width:"100%",maxWidth:300}}><CandyBtn onClick={begin} color={PAL.blue}>{t.go}</CandyBtn></div>
          <div style={{display:"flex",gap:10,marginTop:18}}>
            <StatChip label={t.record} value={fmt(stats.best)} color={PAL.blue}/>
            <StatChip label={t.games} value={stats.games||0} color={PAL.green}/>
          </div>
          <ProgressPanel t={t} stats={stats} color={PAL.blue}/>
        </>
      )}
      {ph==="count"&&(
        <div style={{fontWeight:700,fontSize:110,color:PAL.gold,animation:"pop .3s ease-out",textShadow:`0 0 40px ${PAL.gold}66`}}>{count}</div>
      )}
      {ph==="playing"&&(
        <>
          <div onClick={stop} style={{fontSize:120,cursor:"pointer",animation:"floaty 3s ease-in-out infinite",filter:`drop-shadow(0 0 30px ${PAL.blue}66)`}}>🧩</div>
          <div style={{marginTop:8,fontSize:18,color:"#ffffff",fontWeight:700}}>{t.cubePlay}</div>
          <div style={{fontSize:15,color:"#ffffff",fontWeight:600,marginTop:6,opacity:.9}}>{t.tapCube}</div>
        </>
      )}
      {ph==="done"&&(
        <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>
          {isRecord&&<Confetti/>}
          <div style={{fontSize:64}}>🎉</div>
          <div style={{fontWeight:700,fontSize:18,color:PAL.green,marginTop:6}}>{t.cubeDone}</div>
          {isRecord&&<div style={{fontWeight:700,fontSize:17,color:PAL.gold,marginTop:8,animation:"wiggle .6s ease-in-out 3"}}>{t.newRecord}</div>}
          <div style={{marginTop:16,width:"100%",maxWidth:300}}>
            <CandyBtn onClick={()=>setPh("ready")} color={PAL.blue}>{t.replay}</CandyBtn>
          </div>
          {isRecord&&skin==="classic"&&<ShopNudge t={t}/>}
        </div>
      )}
    </div>
  );
}

/* ═══ ÉCRAN DUEL (5 manches) ════════════════════════════════════ */
function DuelScreen({ onBack, t, skin }){
  const S = SKINS[skin]; const sprites = S.sprites();
  const neon = skin==="sudoku";
  const wood = skin==="classic";
  const paper = skin==="monstro";
  const R = 5;
  const [showRules,setShowRules] = useState(true);
  const [round,setRound] = useState(1);
  const [ph,setPh] = useState("ready");  // ready | count | playing | roundDone | over
  const [count,setCount] = useState(5);
  const [face,setFace] = useState(null);
  const [p1,setP1] = useState({d:false,v:null,pen:false});
  const [p2,setP2] = useState({d:false,v:null,pen:false});
  const [scores,setScores] = useState([]);
  const [ms,setMs] = useState(0);
  const startRef = useRef(0);
  const tick = useRef(null);
  useEffect(()=>()=>clearInterval(tick.current),[]);

  function go(){
    setCount(5); setPh("count");
    let c = 5;
    clearInterval(tick.current);
    tick.current = setInterval(()=>{
      c -= 1;
      if(c<=0){
        clearInterval(tick.current);
        setFace(S.gen()); setP1({d:false,v:null,pen:false}); setP2({d:false,v:null,pen:false});
        startRef.current = Date.now(); setMs(0); setPh("playing");
        tick.current = setInterval(()=>setMs(Date.now()-startRef.current), 47);
      } else setCount(c);
    }, 900);
  }
  const PEN = 30000;
  function done(who){
    const el = Date.now()-startRef.current;
    if(who===1&&!p1.d) setP1({d:true,v:el,pen:false});
    if(who===2&&!p2.d) setP2({d:true,v:el,pen:false});
  }
  function togglePen(who){
    if(who===1&&p1.d) setP1(p=>({...p,pen:!p.pen}));
    if(who===2&&p2.d) setP2(p=>({...p,pen:!p.pen}));
  }
  const eff = (p)=>p.v + (p.pen?PEN:0);
  useEffect(()=>{
    if(ph==="playing"&&p1.d&&p2.d){
      clearInterval(tick.current);
      setPh("roundDone");
    }
  },[p1,p2,ph]);
  function next(){
    setScores(s=>[...s,{p1:eff(p1),p2:eff(p2)}]);
    if(round>=R){ setPh("over"); }
    else { setRound(r=>r+1); setPh("ready"); }
  }
  function reset(){ setRound(1); setScores([]); setPh("ready"); setShowRules(false); }
  const p1T = scores.reduce((a,s)=>a+s.p1,0);
  const p2T = scores.reduce((a,s)=>a+s.p2,0);
  const rw = ()=>{ if(!(p1.d&&p2.d)) return null;
    const a=eff(p1), b=eff(p2);
    return a<b?"J1":b<a?"J2":null; };

  if(showRules) return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 90px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #3a0010 0%, #0a0004 55%, #000 100%)"}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
      <Header onBack={onBack} t={t} color={PAL.green} title={`⚔️ ${t.duel}`}/>
      <div style={{background:PAL.card,borderRadius:20,padding:"20px 18px",maxWidth:340,width:"100%",boxShadow:`0 0 0 2px ${PAL.gold}`}}>
        {t.duelRules.map((r,i)=>(
          <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:i<t.duelRules.length-1?12:0}}>
            <span style={{width:28,height:28,borderRadius:"50%",background:PAL.green,color:"#1a1228",fontWeight:700,fontSize:15,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{i+1}</span>
            <span style={{fontSize:16,color:"#ffffff",fontWeight:600,lineHeight:1.5}}>{r}</span>
          </div>
        ))}
      </div>
      <div style={{marginTop:20,width:"100%",maxWidth:300}}><CandyBtn onClick={()=>setShowRules(false)} color={paper?"#ffffff":PAL.green} ring={paper?"#132a4d":undefined}>{t.go}</CandyBtn></div>
    </div>
  );

  if(ph==="over") return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 90px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #3a0010 0%, #0a0004 55%, #000 100%)"}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
      <Confetti/>
      <Header onBack={onBack} t={t} color={PAL.green} title={t.finalScore}/>
      <div style={{fontWeight:700,fontSize:30,color:PAL.gold,margin:"10px 0 18px",animation:"pop .4s ease-out"}}>
        {p1T<p2T?t.p1Wins:p2T<p1T?t.p2Wins:t.tie}
      </div>
      <div style={{background:PAL.card,borderRadius:18,padding:16,width:"100%",maxWidth:320}}>
        {scores.map((s,i)=>(
          <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"6px 4px",fontSize:14,fontWeight:600,color:PAL.textDim}}>
            <span>{t.round} {i+1}</span>
            <span style={{color:s.p1<s.p2?PAL.gold:PAL.text}}>{fmt(s.p1)}</span>
            <span style={{color:s.p2<s.p1?PAL.gold:PAL.text}}>{fmt(s.p2)}</span>
          </div>
        ))}
        <div style={{display:"flex",justifyContent:"space-between",padding:"10px 4px 2px",fontSize:15,fontWeight:700,color:PAL.text,borderTop:`2px solid ${PAL.cardHi}`,marginTop:6}}>
          <span style={{color:PAL.textFaint,fontSize:11}}>{t.total}</span>
          <span style={{color:p1T<p2T?PAL.gold:PAL.text}}>{fmt(p1T)}</span>
          <span style={{color:p2T<p1T?PAL.gold:PAL.text}}>{fmt(p2T)}</span>
        </div>
      </div>
      <div style={{marginTop:20,width:"100%",maxWidth:300,display:"flex",flexDirection:"column",gap:10}}>
        <CandyBtn onClick={reset} color={paper?"#ffffff":PAL.green} ring={paper?"#132a4d":undefined}>{t.revenge}</CandyBtn>
        <GhostBtn onClick={onBack}>{t.menu}</GhostBtn>
      </div>
    </div>
  );

  if(ph==="count") return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 16px 90px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #3a0010 0%, #0a0004 55%, #000 100%)"}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
      <div style={{fontWeight:700,fontSize:120,color:PAL.green,animation:"pop .3s ease-out",textShadow:`0 0 40px ${PAL.green}66`}}>{count}</div>
    </div>
  );

  if(ph==="playing"||ph==="roundDone"){
    const sz = Math.min(window.innerWidth-70, window.innerHeight-390, 310);
    const btnStyle = (p,col)=>({flex:1,padding:"20px 8px",border:"none",borderRadius:18,cursor:"pointer",
      background:p.d?PAL.card:`linear-gradient(180deg,${shade(col,30)},${col} 45%)`,
      color:p.d?(p.pen?PAL.red:PAL.gold):"#1a1228",fontWeight:700,fontSize:17,
      boxShadow:p.d?`0 0 0 2px ${p.pen?PAL.red:col}44`:`0 5px 0 ${shade(col,-40)}, inset 0 2px 4px rgba(255,255,255,.4)`});
    return (
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh",position:"relative",zIndex:1,padding:"12px 14px",gap:10}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #3a0010 0%, #0a0004 55%, #000 100%)"}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
        {/* Grande grille unique */}
        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12}}>
          <div style={{fontWeight:700,fontSize:46,color:PAL.green,lineHeight:1,fontVariantNumeric:"tabular-nums",textShadow:`0 0 20px ${PAL.green}44`}}>{fmt(ms)}</div>
          <CubeFace cells={face} size={sz} glow={neon?SKINS.sudoku.color:(wood?"#c69c6d":(ph==="playing"?PAL.green:null))} sprites={sprites} dark={neon} light={wood}/>
          <Hint color={ph==="roundDone"?PAL.gold:PAL.green} icon={ph==="roundDone"?"🔍":"⚡"}>{ph==="roundDone"?t.ctxDuelDone:t.ctxDuelPlaying}</Hint>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <GhostBtn onClick={onBack} color={PAL.green}>✕</GhostBtn>
            <span style={{fontWeight:700,fontSize:14,color:PAL.green,letterSpacing:1}}>⚔️ {t.round} {round}/{R}</span>
            {ph==="roundDone"&&(
              <>
                <span style={{fontWeight:700,fontSize:14,color:PAL.gold}}>{rw()?`🏆 ${rw()} ${t.wins}`:t.tie}</span>
                <CandyBtn small onClick={next} color={paper?"#ffffff":PAL.green} ring={paper?"#132a4d":undefined}>{round>=R?"🏁":"→"}</CandyBtn>
              </>
            )}
          </div>
        </div>
        {/* Boutons côte à côte : J1 à gauche, J2 à droite */}
        <div style={{display:"flex",gap:12,width:"100%",maxWidth:420}}>
          <button onClick={()=>p1.d?togglePen(1):done(1)} disabled={!p1.d&&ph!=="playing"} style={btnStyle(p1,PAL.blue)}>
            <div style={{fontSize:11,fontWeight:700,opacity:.75,marginBottom:2}}>J1{p1.pen?" · 😈+30s":""}</div>
            {p1.d?fmt(eff(p1)):t.iDone}
          </button>
          <button onClick={()=>p2.d?togglePen(2):done(2)} disabled={!p2.d&&ph!=="playing"} style={btnStyle(p2,PAL.pink)}>
            <div style={{fontSize:11,fontWeight:700,opacity:.75,marginBottom:2}}>J2{p2.pen?" · 😈+30s":""}</div>
            {p2.d?fmt(eff(p2)):t.iDone}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 90px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <Header onBack={onBack} t={t} color={PAL.green} title={`⚔️ ${t.round} ${round}/${R}`}/>
      {ph==="ready"&&(
        <>
          <div style={{marginTop:22,marginBottom:14,width:"100%",display:"flex",justifyContent:"center"}}>
            <Hint color={PAL.green} icon="🔀">{t.ctxDuelReady}</Hint>
          </div>
          <div style={{width:"100%",maxWidth:300}}><CandyBtn onClick={go} color={paper?"#ffffff":PAL.green} ring={paper?"#132a4d":undefined}>{t.go}</CandyBtn></div>
        </>
      )}
    </div>
  );
}


const EINSTEIN_TILES = [EINSTEIN_TILES_0,EINSTEIN_TILES_1,EINSTEIN_TILES_2,EINSTEIN_TILES_3,EINSTEIN_TILES_4,EINSTEIN_TILES_5,EINSTEIN_TILES_6,EINSTEIN_TILES_7,EINSTEIN_TILES_8];

const CURIE_TILES = [CURIE_TILES_0,CURIE_TILES_1,CURIE_TILES_2,CURIE_TILES_3,CURIE_TILES_4,CURIE_TILES_5,CURIE_TILES_6,CURIE_TILES_7,CURIE_TILES_8];

const TESLA_TILES = [TESLA_TILES_0,TESLA_TILES_1,TESLA_TILES_2,TESLA_TILES_3,TESLA_TILES_4,TESLA_TILES_5,TESLA_TILES_6,TESLA_TILES_7,TESLA_TILES_8];

const NEWTON_TILES = [NEWTON_TILES_0,NEWTON_TILES_1,NEWTON_TILES_2,NEWTON_TILES_3,NEWTON_TILES_4,NEWTON_TILES_5,NEWTON_TILES_6,NEWTON_TILES_7,NEWTON_TILES_8];

const DARWIN_TILES = [DARWIN_TILES_0,DARWIN_TILES_1,DARWIN_TILES_2,DARWIN_TILES_3,DARWIN_TILES_4,DARWIN_TILES_5,DARWIN_TILES_6,DARWIN_TILES_7,DARWIN_TILES_8];

const GALILEE_TILES = [GALILEE_TILES_0,GALILEE_TILES_1,GALILEE_TILES_2,GALILEE_TILES_3,GALILEE_TILES_4,GALILEE_TILES_5,GALILEE_TILES_6,GALILEE_TILES_7,GALILEE_TILES_8];
const RAPANUI_TILES = [RAPANUI_TILES_0,RAPANUI_TILES_1,RAPANUI_TILES_2,RAPANUI_TILES_3,RAPANUI_TILES_4,RAPANUI_TILES_5,RAPANUI_TILES_6,RAPANUI_TILES_7,RAPANUI_TILES_8];
const MAYA_TILES = [MAYA_TILES_0,MAYA_TILES_1,MAYA_TILES_2,MAYA_TILES_3,MAYA_TILES_4,MAYA_TILES_5,MAYA_TILES_6,MAYA_TILES_7,MAYA_TILES_8];
const ROME_TILES = [ROME_TILES_0,ROME_TILES_1,ROME_TILES_2,ROME_TILES_3,ROME_TILES_4,ROME_TILES_5,ROME_TILES_6,ROME_TILES_7,ROME_TILES_8];
const EGYPT_TILES = [EGYPT_TILES_0,EGYPT_TILES_1,EGYPT_TILES_2,EGYPT_TILES_3,EGYPT_TILES_4,EGYPT_TILES_5,EGYPT_TILES_6,EGYPT_TILES_7,EGYPT_TILES_8];
const MESO_TILES = [MESO_TILES_0,MESO_TILES_1,MESO_TILES_2,MESO_TILES_3,MESO_TILES_4,MESO_TILES_5,MESO_TILES_6,MESO_TILES_7,MESO_TILES_8];
const CHINA_TILES = [CHINA_TILES_0,CHINA_TILES_1,CHINA_TILES_2,CHINA_TILES_3,CHINA_TILES_4,CHINA_TILES_5,CHINA_TILES_6,CHINA_TILES_7,CHINA_TILES_8];

/* ═══ LE COFFRET DES SCIENTIFIQUES — 6 faces, 6 génies, 8 symboles chacun ═══ */
const SAVANTS = [
  { id:"einstein", name:"Albert Einstein", emoji:"🧠", color:"#ffd23f", tag:"Relativité · Physique moderne", bio:{birth:"14 mars 1879 à Ulm, Allemagne",death:"18 avril 1955 à Princeton, États-Unis",path:"Employé au bureau des brevets de Berne, il publie en 1905 plusieurs articles qui bouleversent la physique. Professeur à Zurich, Prague puis Berlin, il fuit l'Allemagne nazie en 1933 pour Princeton, où il termine sa carrière.",vision:"Il croyait en la simplicité et l'harmonie des lois de la nature, et défendait la paix et l'usage responsable de la science."}, bioKid:{birth:"Né le 14 mars 1879 en Allemagne.",death:"Mort le 18 avril 1955 aux États-Unis.",path:"Il a d'abord travaillé dans un bureau, puis est devenu un très grand scientifique, connu dans le monde entier.",vision:"Il pensait que la science devait être simple et servir la paix dans le monde."}, tiles:EINSTEIN_TILES, order:[5,3,7,0,-1,2,6,1,4], items:[
    {t:"La découverte de l'einsteinium", d:"Cet élément porte le nom d'Albert Einstein, même s'il n'a pas été découvert par lui. Il a été nommé en son honneur en raison de l'importance de ses travaux pour la physique moderne. L'einsteinium, de numéro atomique 99, a été identifié en 1952 dans les débris d'une explosion thermonucléaire.", dKid:"Un élément chimique porte le nom d'Einstein, pour lui rendre hommage ! On l'a découvert après une explosion très puissante."},
    {t:"La théorie de la relativité restreinte", d:"Publiée en 1905, elle a profondément transformé notre compréhension de l'espace et du temps. Elle montre que l'espace et le temps sont liés, et que leur mesure dépend du mouvement de l'observateur. Lorsqu'un objet se déplace à une vitesse proche de celle de la lumière, le temps s'écoule plus lentement pour lui et les longueurs se contractent dans la direction du mouvement. Cette théorie a aussi conduit à la célèbre relation entre masse et énergie : E = mc².", dKid:"Einstein a montré que le temps ne va pas toujours à la même vitesse. Plus on va vite, plus le temps ralentit !"},
    {t:"Les ouvrages scientifiques d'Einstein", d:"Albert Einstein a écrit de nombreux articles scientifiques majeurs, ainsi que plusieurs ouvrages et recueils de conférences consacrés à la relativité et à d'autres grands concepts de la physique. Parmi ses titres les plus connus figure La signification de la relativité. Ces publications ont contribué à faire connaître ses idées sur l'espace-temps, l'énergie, la lumière et la structure de l'univers.", dKid:"Einstein a écrit plein de livres pour expliquer ses idées sur l'espace, le temps et la lumière."},
    {t:"L'équation sur la masse et l'énergie", d:"La célèbre formule E = mc² exprime l'équivalence entre la masse et l'énergie. Elle signifie qu'une petite quantité de masse peut être transformée en une très grande quantité d'énergie. Cette relation est fondamentale pour comprendre l'énergie nucléaire ainsi que le fonctionnement des étoiles.", dKid:"Sa formule E = mc² dit qu'un tout petit morceau de matière peut donner énormément d'énergie."},
    {t:"La relativité générale et la courbure de l'espace-temps", d:"Publiée en 1915, elle décrit la gravitation comme la courbure de l'espace-temps provoquée par la présence de masse et d'énergie. Les objets massifs, comme les étoiles et les planètes, déforment l'espace-temps autour d'eux, et cette courbure influence le mouvement des autres corps. Cette théorie a marqué une étape décisive dans notre compréhension de l'univers.", dKid:"Einstein a expliqué que les objets très lourds, comme les étoiles, courbent l'espace autour d'eux, un peu comme une boule sur un trampoline."},
    {t:"La dilatation du temps", d:"La théorie de la relativité prévoit que le temps ne s'écoule pas au même rythme selon la vitesse de déplacement ou l'intensité du champ gravitationnel. Une personne voyageant à une vitesse proche de celle de la lumière, ou se trouvant près d'un objet très massif, verrait son temps s'écouler plus lentement qu'une personne placée dans des conditions ordinaires.", dKid:"Si tu voyages très très vite, le temps s'écoule plus lentement pour toi que pour les gens restés sur Terre !"},
    {t:"L'explication de l'effet photoélectrique", d:"En 1905, Einstein a donné une explication décisive de l'effet photoélectrique en proposant que la lumière soit constituée de quanta d'énergie, aujourd'hui appelés photons. Il a montré que chaque photon transporte une quantité précise d'énergie, ce qui permet d'expliquer l'émission d'électrons par certains matériaux exposés à la lumière. Cette contribution lui a valu le prix Nobel de physique en 1921.", dKid:"Einstein a découvert que la lumière est faite de petits paquets d'énergie appelés photons. Cette idée lui a valu un prix Nobel."},
    {t:"Le mouvement brownien", d:"En 1905, Einstein a fourni une explication théorique du mouvement aléatoire de petites particules en suspension dans un fluide. Il a montré que ce phénomène résulte des chocs incessants avec les molécules du fluide. Son travail a constitué une preuve importante de l'existence des atomes et des molécules, et a joué un rôle majeur dans le développement de la théorie atomique de la matière.", dKid:"Einstein a expliqué pourquoi de minuscules particules bougent tout le temps dans l'eau : elles sont bousculées par des atomes invisibles."},
  ]},
  { id:"curie", name:"Marie Curie", emoji:"⚗️", color:"#ffffff", tag:"Radioactivité · Deux prix Nobel", bio:{birth:"7 novembre 1867 à Varsovie, Pologne",death:"4 juillet 1934 en Haute-Savoie, France",path:"Venue étudier à Paris, elle devient la première femme professeure à la Sorbonne. Avec Pierre Curie, elle découvre le polonium et le radium, puis fonde l'Institut du radium.",vision:"Elle voulait mettre la science au service de l'humanité, rendre la recherche accessible aux femmes, et l'a prouvé en équipant des unités mobiles de radiographie pendant la guerre."}, bioKid:{birth:"Née le 7 novembre 1867 en Pologne.",death:"Morte le 4 juillet 1934 en France.",path:"Elle est venue étudier à Paris et est devenue une scientifique célèbre, découvrant deux nouveaux éléments chimiques.",vision:"Elle voulait que la science aide tout le monde, filles et garçons."}, tiles:CURIE_TILES, order:[7,1,0,2,-1,3,5,6,4], items:[
    {t:"Le flacon expérimental", d:"Il symbolise ses recherches pionnières sur la radioactivité. Avec Pierre Curie, elle a mené de nombreuses expériences sur des substances radioactives qui ont conduit à la découverte du polonium et du radium en 1898. Ce type d'objet représente les longues heures de travail, la rigueur scientifique et les conditions difficiles dans lesquelles elle a travaillé. Certains objets et documents liés à son laboratoire sont encore radioactifs aujourd'hui.", dKid:"Ce flacon rappelle les longues heures que Marie Curie passait à faire des expériences dans son laboratoire."},
    {t:"La découverte du radium", d:"Marie Curie, avec Pierre Curie, a découvert le radium en 1898 au cours de recherches sur les substances radioactives. Le couple a mis au point des méthodes de séparation à partir de minerais d'uranium, ce qui a permis d'identifier puis d'étudier cet élément. Le radium a joué un rôle majeur dans le développement de la recherche sur la radioactivité et a ensuite trouvé des applications médicales, avant que ses dangers ne soient mieux compris.", dKid:"Marie et Pierre Curie ont découvert le radium en 1898, un élément qui brille et qui est radioactif."},
    {t:"La découverte du polonium", d:"Marie Curie, avec Pierre Curie, a identifié le polonium en 1898 dans le cadre de ses travaux sur les substances radioactives. Elle a choisi ce nom en hommage à son pays natal, la Pologne. Cette découverte a renforcé l'idée que la radioactivité est une propriété de l'atome lui-même, et non simplement le résultat d'une réaction chimique.", dKid:"Marie Curie a découvert le polonium et lui a donné le nom de son pays natal, la Pologne."},
    {t:"La radioactivité", d:"Marie Curie a joué un rôle fondamental dans l'étude de la radioactivité à la fin des années 1890. Le phénomène lui-même avait d'abord été observé par Henri Becquerel en 1896, mais Marie Curie l'a étudié de manière systématique et a introduit le terme radioactivité. Ses travaux ont profondément transformé la compréhension de la matière en montrant que l'atome n'était pas indivisible comme on le croyait.", dKid:"Marie Curie a étudié la radioactivité, une énergie invisible que dégagent certains éléments. Elle a même inventé ce mot !"},
    {t:"Le microscope", d:"Le microscope peut symboliser la précision et la rigueur scientifique de Marie Curie dans ses recherches. Toutefois, il ne fait pas partie des objets les plus directement associés à ses découvertes sur la radioactivité. Pour représenter son travail de manière plus fidèle, il est généralement préférable de mettre en avant ses instruments de laboratoire, ses échantillons, ses carnets ou le matériel utilisé pour l'étude des substances radioactives.", dKid:"Le microscope rappelle la précision de Marie Curie, même s'il n'est pas l'objet le plus lié à ses découvertes."},
    {t:"Le bec Bunsen", d:"Le bec Bunsen est un symbole crédible du travail de laboratoire de Marie Curie, car ce type d'outil était couramment utilisé en chimie pour chauffer des substances et réaliser des séparations. En revanche, il vaut mieux le présenter comme un symbole du travail expérimental en laboratoire plutôt que comme un objet personnel emblématique.", dKid:"Cet outil servait à chauffer des produits dans son laboratoire, comme le faisaient tous les chimistes de l'époque."},
    {t:"Les prix Nobel", d:"Marie Curie a reçu deux prix Nobel. En 1903, elle a partagé le prix Nobel de physique avec Pierre Curie et Henri Becquerel pour leurs travaux sur les phénomènes de rayonnement. En 1911, elle a reçu le prix Nobel de chimie pour la découverte du polonium et du radium, ainsi que pour l'isolement du radium et l'étude de ses composés. Elle est la seule femme à avoir reçu deux prix Nobel, et la seule personne à avoir remporté des Nobel dans deux sciences différentes.", dKid:"Marie Curie a reçu deux prix Nobel, un en physique et un en chimie. Elle est la seule personne au monde à avoir réussi ça dans deux sciences différentes !"},
    {t:"Les voitures radiologiques", d:"Durant la Première Guerre mondiale, Marie Curie fit équiper des voitures radiologiques mobiles afin d'apporter la radiographie au plus près des zones de combat. Surnommés plus tard les « petites Curies », ces véhicules permirent de mieux soigner les blessés en aidant les chirurgiens à repérer rapidement les projectiles et les lésions internes. Ils représentent l'engagement de Marie Curie au service de la science, mais aussi de la médecine de guerre.", dKid:"Pendant la guerre, Marie Curie a inventé des voitures avec des appareils de radiographie pour aider à soigner les blessés."},
  ]},
  { id:"tesla", name:"Nikola Tesla", emoji:"⚡", color:"#ff9f43", tag:"Électricité · Courant alternatif", bio:{birth:"10 juillet 1856 à Smiljan, Empire austro-hongrois",death:"7 janvier 1943 à New York, États-Unis",path:"Ingénieur émigré aux États-Unis, il travaille brièvement pour Edison avant de développer seul le système à courant alternatif et de déposer des centaines de brevets.",vision:"Visionnaire, il rêvait d'une énergie sans fil accessible à tous et pensait que la technologie pouvait libérer l'humanité."}, bioKid:{birth:"Né le 10 juillet 1856 en Europe.",death:"Mort le 7 janvier 1943 aux États-Unis.",path:"Il a inventé plein de machines électriques qui nous servent encore aujourd'hui.",vision:"Il rêvait d'apporter l'électricité gratuite à tout le monde, partout dans le monde."}, tiles:TESLA_TILES, order:[0,1,2,3,-1,4,5,6,7], items:[
    {t:"Les nombres 3, 6 et 9", d:"Nikola Tesla accordait une importance particulière aux nombres 3, 6 et 9. Il leur attribuait une signification presque mystique, estimant qu'ils révélaient certains schémas fondamentaux de l'univers. Cette idée relève davantage de sa pensée personnelle et philosophique que d'une théorie scientifique démontrée. Elle continue néanmoins à intriguer et à alimenter de nombreuses discussions autour de sa personnalité.", dKid:"Tesla adorait les nombres 3, 6 et 9. Il pensait qu'ils cachaient des secrets sur l'univers."},
    {t:"Le courant alternatif", d:"Le courant alternatif est un courant électrique dont le sens de circulation change régulièrement. Contrairement au courant continu, il oscille d'un côté puis de l'autre, ce qui permet de transporter l'électricité efficacement sur de longues distances. Ce principe est au cœur des réseaux électriques modernes et des grandes avancées de Nikola Tesla.", dKid:"C'est un courant électrique qui change de sens très souvent. Il permet d'envoyer l'électricité très loin, jusque chez toi !"},
    {t:"La tour de Wardenclyffe", d:"Nikola Tesla s'intéressait vivement à la transmission sans fil de l'énergie et de l'information. La tour de Wardenclyffe fut conçue dans le but d'expérimenter la transmission sans fil sur de longues distances. Même si le projet n'a jamais été achevé ni exploité comme Tesla l'espérait, il illustre l'audace de sa vision et son désir de transformer les communications et l'accès à l'énergie.", dKid:"Tesla voulait construire une tour géante pour envoyer de l'énergie sans fil, partout dans le monde. Le projet n'a jamais été terminé."},
    {t:"Le développement du courant alternatif", d:"Tesla a joué un rôle majeur dans le développement et la diffusion du courant alternatif à la fin du XIXe siècle. Il a montré que le courant alternatif permettait de transporter l'électricité sur de longues distances de manière bien plus efficace que le courant continu. Il a conçu et perfectionné des systèmes polyphasés, des transformateurs et des moteurs à induction, qui ont rendu possible la distribution moderne de l'électricité à grande échelle.", dKid:"Tesla a inventé un système pour transporter l'électricité efficacement, celui qu'on utilise encore aujourd'hui dans les maisons."},
    {t:"La bobine de Tesla", d:"La bobine de Tesla est un circuit transformateur résonant inventé en 1891. Cet appareil produit une électricité à très haute tension, à haute fréquence et à faible intensité. Tesla l'utilisait pour ses recherches sur la résonance électrique, les décharges à haute fréquence et la transmission sans fil. Aujourd'hui, elle est surtout utilisée dans des démonstrations scientifiques, des expériences et certains dispositifs liés à l'électronique et à la radio.", dKid:"Cette machine fabrique de grands éclairs électriques ! Elle sert encore aujourd'hui pour des expériences amusantes."},
    {t:"Le moteur électrique", d:"Tesla a développé à la fin des années 1880 un moteur à courant alternatif utilisant le principe du champ magnétique tournant. Ce moteur transformait l'énergie électrique en mouvement mécanique de manière plus efficace et plus fiable que de nombreux modèles antérieurs. Son invention a eu une importance considérable dans le développement des machines industrielles, des appareils électroménagers et de nombreux équipements modernes.", dKid:"Tesla a inventé un moteur qui fonctionne avec du courant alternatif, une invention utilisée dans plein de machines aujourd'hui."},
    {t:"Les signaux radio", d:"Nikola Tesla fut l'un des pionniers des transmissions sans fil. Il mena des expériences montrant qu'il était possible de transmettre des signaux à distance sans fil, contribuant ainsi au développement des technologies radio. Même si l'invention de la radio a ensuite fait l'objet de débats historiques et de reconnaissances partagées, les travaux de Tesla ont joué un rôle important dans l'émergence des communications radio modernes.", dKid:"Tesla a fait des expériences pour envoyer des messages sans fil, des années avant l'invention de la radio."},
    {t:"Le champ magnétique tournant", d:"Mis en évidence par Tesla en 1882, il a joué un rôle fondamental dans le développement du courant alternatif. Un champ magnétique tournant est produit lorsque des courants alternatifs circulent dans plusieurs bobines disposées de façon appropriée, créant un champ qui tourne dans l'espace. Ce principe est à la base du fonctionnement des moteurs électriques modernes et de nombreux systèmes d'alimentation en énergie.", dKid:"Tesla a découvert comment faire tourner un champ magnétique, une idée essentielle pour ses moteurs électriques."},
  ]},
  { id:"newton", name:"Isaac Newton", emoji:"🍎", color:"#4ea8ff", tag:"Gravitation · Mécanique classique", bio:{birth:"4 janvier 1643 à Woolsthorpe, Angleterre",death:"31 mars 1727 à Londres, Angleterre",path:"Professeur à Cambridge, il publie en 1687 les Principia Mathematica, devient plus tard directeur de la Monnaie royale et président de la Royal Society.",vision:"Il pensait que l'univers obéit à des lois mathématiques universelles, rationnelles et accessibles à la raison humaine."}, bioKid:{birth:"Né le 4 janvier 1643 en Angleterre.",death:"Mort le 31 mars 1727 à Londres.",path:"Il a écrit un livre très important qui explique comment bougent les objets dans l'univers.",vision:"Il pensait que tout dans l'univers suit des règles qu'on peut comprendre avec les mathématiques."}, tiles:NEWTON_TILES, order:[0,1,2,3,-1,4,5,6,7], items:[
    {t:"Le newton, unité de force", d:"Le newton, symbole N, est l'unité de force du Système international. Il porte le nom d'Isaac Newton en hommage à ses travaux sur les lois du mouvement. Un newton correspond à la force nécessaire pour accélérer une masse de 1 kilogramme de 1 mètre par seconde carrée. Cette unité est utilisée en physique, en ingénierie et dans de nombreux calculs liés aux forces.", dKid:"L'unité qui mesure la force, le newton, porte son nom pour lui rendre hommage."},
    {t:"La pomme, symbole des découvertes", d:"La pomme est devenue le symbole le plus célèbre associé à Isaac Newton. Selon la tradition, l'observation d'une pomme tombant d'un arbre aurait nourri sa réflexion sur la gravitation. Même si l'anecdote relève en partie de la légende, elle représente bien l'esprit scientifique de Newton : observer un phénomène simple pour en tirer une loi universelle. Depuis, la pomme symbolise la curiosité, l'observation et la découverte scientifique.", dKid:"La légende dit qu'une pomme est tombée sur la tête de Newton, lui donnant l'idée de la gravité !"},
    {t:"Les expériences avec le prisme", d:"Dans les années 1660, Newton a mené des expériences avec des prismes pour étudier la lumière. En faisant passer la lumière du Soleil à travers un prisme, il a montré qu'elle se décompose en plusieurs couleurs, formant le spectre visible. Il en a conclu que la lumière blanche est composée de toutes ces couleurs. Ses travaux ont joué un rôle majeur dans le développement de l'optique.", dKid:"Newton a fait passer un rayon de lumière dans un prisme et a découvert qu'elle contient toutes les couleurs de l'arc-en-ciel."},
    {t:"Le calcul infinitésimal", d:"Newton a développé, à la fin du XVIIe siècle, une méthode mathématique aujourd'hui appelée calcul infinitésimal, qui comprend le calcul différentiel et le calcul intégral. Cet outil permet d'étudier les variations, les vitesses, les courbes, les aires et les mouvements. Newton s'en est servi pour approfondir ses travaux sur la mécanique, la gravitation et le mouvement des planètes. Le calcul est ensuite devenu un outil fondamental en mathématiques, en physique et en ingénierie.", dKid:"Newton a inventé une nouvelle façon de faire des calculs mathématiques pour étudier le mouvement et le changement."},
    {t:"La formule de la force", d:"Newton a formulé une loi fondamentale de la mécanique, souvent résumée par la relation F = m × a, où F représente la force, m la masse et a l'accélération. Cette relation exprime qu'une force appliquée à un objet provoque une accélération proportionnelle à sa masse. Elle correspond à la deuxième loi du mouvement de Newton et constitue l'un des fondements de la physique classique.", dKid:"Newton a trouvé une formule qui explique comment une force fait bouger les objets."},
    {t:"La gravitation universelle", d:"Au XVIIe siècle, Newton a formulé la loi de la gravitation universelle. Il a montré que tous les corps s'attirent mutuellement par une force appelée gravitation. Cette force explique à la fois la chute des objets sur Terre et le mouvement des planètes autour du Soleil. Ses travaux ont posé une base essentielle pour la physique classique et l'astronomie moderne.", dKid:"Newton a expliqué pourquoi les objets tombent par terre et pourquoi la Lune tourne autour de la Terre : c'est la gravité !"},
    {t:"Le pendule de Newton", d:"Le pendule de Newton est un objet devenu célèbre pour illustrer le transfert de quantité de mouvement et d'énergie lors des collisions. Bien qu'il porte son nom en hommage à ses travaux sur la mécanique, il n'a pas été inventé par Isaac Newton lui-même. Il permet de visualiser simplement certains principes liés aux lois du mouvement et à la conservation de l'énergie.", dKid:"Ce jouet avec des boules qui s'entrechoquent montre comment l'énergie se transmet d'un objet à l'autre."},
    {t:"Le télescope de Newton", d:"En 1668, Newton a conçu un télescope à réflexion utilisant un miroir plutôt que des lentilles pour recueillir et focaliser la lumière. Ce système permettait de réduire les aberrations chromatiques observées dans certains télescopes à lentilles. Le télescope de Newton a marqué une avancée importante dans l'histoire de l'astronomie et a inspiré de nombreux instruments d'observation modernes.", dKid:"Newton a inventé un télescope avec des miroirs, plus performant que les anciens télescopes à lentilles."},
  ]},
  { id:"darwin", name:"Charles Darwin", emoji:"🐢", color:"#3ddc84", tag:"Évolution · Sélection naturelle", bio:{birth:"12 février 1809 à Shrewsbury, Angleterre",death:"19 avril 1882 à Downe, Angleterre",path:"Naturaliste, il embarque cinq ans à bord du HMS Beagle, puis passe plus de vingt ans à affiner sa théorie avant de publier L'Origine des espèces en 1859.",vision:"Il pensait que toutes les espèces partagent des ancêtres communs et évoluent par sélection naturelle, à partir d'une observation patiente et minutieuse du vivant."}, bioKid:{birth:"Né le 12 février 1809 en Angleterre.",death:"Mort le 19 avril 1882 en Angleterre.",path:"Il a voyagé autour du monde en bateau pour observer les animaux, puis a écrit un livre célèbre sur l'évolution.",vision:"Il pensait que tous les êtres vivants sont cousins et changent lentement au fil du temps."}, tiles:DARWIN_TILES, order:[0,1,2,3,-1,4,5,6,7], items:[
    {t:"L'arbre de la vie", d:"L'arbre de la vie est une image utilisée par Charles Darwin pour représenter les relations entre les êtres vivants. Il montre que les espèces partagent des ancêtres communs et se diversifient au fil du temps en de multiples lignées. Cette représentation illustre l'idée de « descendance avec modification », au cœur de la pensée de Darwin sur l'évolution.", dKid:"Darwin a dessiné un arbre pour montrer comment toutes les espèces sont reliées entre elles, comme une grande famille."},
    {t:"Le poisson de Darwin", d:"Le « poisson de Darwin » est un symbole moderne associé à la théorie de l'évolution. Il représente généralement un poisson muni de pattes, en référence à l'idée que les espèces se transforment au fil du temps. Ce n'est pas un dessin de Darwin lui-même, mais un emblème contemporain souvent utilisé pour évoquer l'évolution, la science et la pensée critique.", dKid:"Ce poisson symbolise ses observations sur les animaux et leur évolution au fil du temps."},
    {t:"L'étude des fossiles", d:"Darwin a étudié les fossiles pour mieux comprendre l'histoire de la vie sur Terre. Les fossiles, restes ou traces d'êtres vivants anciens conservés dans les roches, lui ont montré que de nombreuses espèces avaient existé avant les formes actuelles. Leur étude a contribué à renforcer l'idée que les êtres vivants changent au cours du temps, et que certaines espèces disparaissent tandis que d'autres se transforment progressivement.", dKid:"Darwin a étudié des fossiles pour comprendre comment les animaux ont changé au fil de millions d'années."},
    {t:"L'hérédité selon Darwin", d:"Darwin s'est intéressé à la transmission des caractères entre parents et descendants afin de mieux comprendre l'évolution. Il avait bien perçu que les êtres vivants héritent de nombreux traits, tout en présentant aussi des variations. En revanche, il ne connaissait pas encore les mécanismes génétiques de l'hérédité, qui seront expliqués plus tard par la génétique moderne. Ses réflexions ont néanmoins contribué à relier variation, transmission et évolution.", dKid:"Darwin a remarqué que les petits ressemblent à leurs parents, une idée importante pour comprendre l'évolution."},
    {t:"De l'origine des espèces", d:"Publié en 1859, c'est l'ouvrage le plus célèbre de Charles Darwin. Il y expose sa théorie de l'évolution par sélection naturelle en s'appuyant sur de nombreuses observations concernant les animaux, les plantes, les fossiles et la géographie du vivant. Cet ouvrage a profondément transformé la biologie et demeure l'un des textes fondateurs de la science moderne.", dKid:"Dans son livre le plus connu, Darwin explique comment les espèces changent lentement grâce à la sélection naturelle."},
    {t:"L'extinction, phénomène naturel", d:"Darwin considérait l'extinction comme une composante naturelle de l'histoire de la vie. Il montrait que certaines espèces disparaissent lorsque les conditions changent ou lorsqu'elles sont moins adaptées que d'autres à leur environnement. L'extinction fait donc partie du processus général de transformation du vivant au cours du temps. Elle accompagne l'apparition de nouvelles formes de vie.", dKid:"Darwin a compris que certaines espèces disparaissent naturellement, tandis que d'autres apparaissent et leur succèdent."},
    {t:"Le HMS Beagle", d:"Le HMS Beagle est le navire à bord duquel Charles Darwin a voyagé de 1831 à 1836. Au cours de cette expédition, il a observé de nombreux paysages, fossiles, plantes et animaux, notamment en Amérique du Sud et dans les îles Galápagos. Ces observations ont profondément nourri sa réflexion et ont joué un rôle majeur dans l'élaboration de ses idées sur l'évolution.", dKid:"Darwin a voyagé cinq ans sur ce bateau autour du monde, observant plein d'animaux et de plantes différentes."},
    {t:"L'observation de la nature", d:"Darwin a consacré une grande partie de son travail à observer attentivement les animaux, les plantes et leurs variations. En comparant les espèces, leurs formes et leurs adaptations, il a peu à peu compris que le vivant change au fil du temps. Cette observation minutieuse de la nature a nourri sa réflexion et l'a conduit à élaborer la théorie de l'évolution par sélection naturelle.", dKid:"Darwin passait des heures à observer patiemment les animaux et les plantes pour comprendre comment ils vivent."},
  ]},
  { id:"galilee", name:"Galileo Galilei", emoji:"🔭", color:"#ff5e5e", tag:"Astronomie · Méthode expérimentale", bio:{birth:"15 février 1564 à Pise, Italie",death:"8 janvier 1642 à Arcetri, près de Florence, Italie",path:"Professeur de mathématiques à Pise puis Padoue, il perfectionne la lunette et fait des découvertes qui soutiennent l'héliocentrisme, ce qui lui vaut un procès de l'Inquisition en 1633.",vision:"Pionnier de la méthode scientifique, il pensait que la nature est écrite en langage mathématique et défendait la vérité par l'observation, malgré les dogmes de son époque."}, bioKid:{birth:"Né le 15 février 1564 en Italie.",death:"Mort le 8 janvier 1642 en Italie.",path:"Il a amélioré la lunette pour observer le ciel et a fait de grandes découvertes sur les étoiles et les planètes.",vision:"Il pensait qu'il fallait observer et faire des expériences pour comprendre le monde, même si ça dérangeait certaines personnes."}, tiles:GALILEE_TILES, order:[0,1,2,3,-1,4,5,6,7], items:[
    {t:"Les quatre lunes de Jupiter", d:"En 1610, Galilée découvrit les quatre plus grands satellites de Jupiter, aujourd'hui appelés lunes galiléennes : Io, Europe, Ganymède et Callisto. Cette observation fut capitale, car elle prouva que certains astres pouvaient tourner autour d'une autre planète que la Terre.", dKid:"Galilée a découvert quatre grandes lunes qui tournent autour de Jupiter, on les appelle aujourd'hui les lunes galiléennes !"},
    {t:"Le compas de Galilée", d:"Galilée conçut et améliora un compas géométrique et militaire, un instrument de calcul servant notamment à mesurer, tracer et effectuer diverses opérations utiles en mathématiques, en artillerie et en navigation. Il s'agissait d'un instrument mathématique polyvalent, et non d'une simple amélioration du compas de direction classique.", dKid:"Galilée a inventé un compas qui aide à faire des calculs mathématiques et militaires."},
    {t:"L'observation des anneaux de Saturne", d:"Galilée fut le premier à observer Saturne avec une lunette en 1610, mais son instrument ne lui permit pas de distinguer clairement ses anneaux. Il crut d'abord voir deux « compagnons » de part et d'autre de la planète. Plus tard, les astronomes comprirent qu'il s'agissait en réalité des anneaux de Saturne.", dKid:"Galilée a vu les premiers signes des anneaux de Saturne, sans comprendre exactement ce qu'il regardait."},
    {t:"La lunette de Galilée", d:"En 1609, Galilée améliora fortement la lunette astronomique, sans en être l'inventeur initial. Ses instruments, pouvant grossir jusqu'à environ 20 fois, lui permirent d'observer plus précisément la Lune, Jupiter et d'autres astres. Cette amélioration technique joua un rôle décisif dans ses grandes découvertes astronomiques.", dKid:"Galilée a amélioré la lunette pour observer le ciel de près, découvrant plein de choses jamais vues avant lui."},
    {t:"Le thermoscope", d:"Galilée est généralement associé à un thermoscope, un instrument du début du XVIIe siècle considéré comme un ancêtre du thermomètre. Cet appareil permettait de montrer des variations de température, mais sans fournir de mesure chiffrée précise comme un thermomètre moderne.", dKid:"Galilée a inventé un des premiers appareils pour mesurer les changements de température."},
    {t:"Le microscope de Galilée", d:"Galilée est aussi associé à un microscope primitif du début du XVIIe siècle. Cet instrument restait très simple comparé aux microscopes modernes, mais il a participé aux débuts de l'observation agrandie des petits objets. Il a donc conçu ou utilisé un microscope précoce, plutôt qu'un microscope moderne au sens actuel.", dKid:"Galilée a aussi bricolé un microscope pour observer des choses minuscules, invisibles à l'œil nu."},
    {t:"La chute des corps et l'accélération", d:"Galilée a profondément renouvelé l'étude du mouvement en montrant que les corps en chute libre subissent une accélération constante, si l'on néglige la résistance de l'air. Ses expériences et raisonnements, notamment avec des plans inclinés, ont contredit l'idée ancienne selon laquelle les objets les plus lourds tomberaient naturellement plus vite que les plus légers.", dKid:"Galilée a montré que tous les objets tombent à la même vitesse, qu'ils soient lourds ou légers !"},
    {t:"Les observations de la Lune", d:"Grâce à la lunette qu'il avait perfectionnée, Galilée observa la Lune avec une précision inédite au début du XVIIe siècle. Il montra que sa surface n'était pas lisse ni parfaite, mais marquée par des reliefs, des ombres et des cratères. Cette découverte remit en cause l'idée ancienne d'un ciel parfait et immuable, et marqua une étape majeure dans l'histoire de l'astronomie.", dKid:"Grâce à sa lunette, Galilée a vu que la Lune a des montagnes et des cratères, et n'est pas parfaitement lisse."},
  ]},
];

const CIVI = [
  { id:"rapanui", name:"Rapa Nui (Île de Pâques)", emoji:"🗿", color:"#ffffff", tag:"Statues moaï · Culture polynésienne",
    bio:{birth:"Vers le VIIIe-XIIe siècle, par des navigateurs polynésiens venus s'installer sur l'île la plus isolée du Pacifique.",
      death:"À partir du XVIIe siècle, la déforestation et l'épuisement des ressources provoquent un effondrement écologique et social, aggravé par les premiers contacts européens dès 1722.",
      path:"Cette société polynésienne isolée a sculpté près de 900 statues moaï géantes, taillées dans la roche volcanique et dressées face à l'intérieur des terres pour veiller sur les vivants.",
      vision:"Les Rapa Nui pensaient que le mana, une force spirituelle, habitait les moaï et protégeait leur communauté à travers les ancêtres qu'ils représentaient."}, bioKid:{birth:"Des gens venus d'autres îles du Pacifique sont arrivés il y a environ 1000 ans.",death:"Les habitants ont coupé trop d'arbres, ce qui a rendu la vie très difficile sur l'île.",path:"Ils ont sculpté presque 900 immenses statues en pierre appelées moaï, tournées vers l'intérieur de l'île.",vision:"Ils croyaient que les moaï avaient un pouvoir spécial appelé le mana, qui protégeait les habitants."},
    tiles:RAPANUI_TILES, order:[0,1,2,3,-1,4,5,6,7], items:[
    {t:"Reimiro", d:"Cet ornement en forme de croissant se portait autour du cou des hommes rapa nui de haut rang. Souvent taillé dans le bois, il symbolisait l'autorité ; sa forme courbe évoque une pirogue, tandis que les têtes à chaque extrémité relient au monde des ancêtres.", dKid:"Ce bijou en forme de croissant de lune se portait au cou. Il montrait qu'on était un chef important."},
    {t:"Manu Piri", d:"Ce symbole montre l'union de deux oiseaux, souvent lié à l'amour et à l'union de deux personnes. Il servait à marquer une amitié, et parfois, plus profondément, le lien entre deux âmes.", dKid:"Ce symbole montre deux oiseaux ensemble. Il représente l'amitié ou l'amour entre deux personnes."},
    {t:"Komari", d:"Symbole ancien de fertilité et de création, le Komari personnifie le vivant et relie aux ancêtres qui l'ont précédé. Passé et présent s'y trouvent liés, renforçant le lien ancestral du peuple rapa nui.", dKid:"Un très vieux symbole qui représente la vie et la famille, relié aux ancêtres."},
    {t:"Honu", d:"Inspirée de la tortue de mer et de sa grande présence spirituelle, elle symbolise la longévité et la guidance des ancêtres. Selon les mythes, elle offrirait un passage sûr à quiconque la voit, signe des gardiens ancestraux veillant sur leur peuple.", dKid:"La tortue de mer est un animal sacré. On pense qu'elle porte chance et protège les gens."},
    {t:"Arme cérémonielle (Ua et Paoa)", d:"Bien plus qu'un simple outil de combat, cette arme sacrée servait aussi de symbole de pouvoir et de rituel. Sa présence entre les mains des guerriers exprimait autorité et protection sur les terres du peuple.", dKid:"Cette arme en bois servait pour les fêtes et montrait que son propriétaire était puissant."},
    {t:"Mangai", d:"Artefact et symbole répandu à travers Rapa Nui, considéré comme l'objet le plus précieux de leur culture. Signe d'abondance et de prospérité, le Mangai aidait, croyait-on, à maîtriser la mer et à préserver le lien spirituel avec les divinités océaniques.", dKid:"Un hameçon très précieux. Les habitants pensaient qu'il aidait à bien pêcher et à protéger la mer."},
    {t:"Manutara", d:"Oiseau sacré des Rapa Nui, son nom signifie « oiseau de chance ». Son arrivée annonçait le renouveau de la vie et le passage des saisons : la nourriture revenait en abondance et le peuple pouvait perdurer.", dKid:"Un oiseau porte-bonheur ! Quand il arrivait sur l'île, ça voulait dire que la nourriture allait être abondante."},
    {t:"Make Make", d:"Cette figure est communément associée au dieu créateur Make Make. Selon la légende, il aurait créé la Terre puis, en fécondant l'argile rouge sous lui, donné naissance à l'homme puis à la femme, liant ainsi ce dieu à la création, à la fertilité et à l'autorité spirituelle.", dKid:"C'est le dieu créateur des Rapa Nui. On raconte qu'il a créé la Terre, puis les premiers hommes et femmes."}
  ]},
  { id:"maya", name:"Civilisation Maya", emoji:"🐆", color:"#ffd23f", tag:"Mésoamérique · Calendrier et cités-états",
    bio:{birth:"Vers 2000 av. J.-C., dans les forêts du Yucatán, du Guatemala et du Belize actuels.",
      death:"Le déclin des grandes cités du sud commence vers 800-900 apr. J.-C., pour des raisons encore débattues (sécheresses, guerres, épuisement des sols) ; le nord maya perdure jusqu'à la conquête espagnole du XVIe siècle.",
      path:"Les Mayas ont bâti des cités-États rivales ornées de pyramides et de stèles, développé une écriture hiéroglyphique complexe et un système de numération utilisant le zéro.",
      vision:"Ils voyaient le temps comme cyclique et sacré, rythmé par plusieurs calendriers entrelacés qui réglaient la vie religieuse, agricole et politique."}, bioKid:{birth:"Cette civilisation est née il y a environ 4000 ans, dans les forêts d'Amérique centrale.",death:"Beaucoup de grandes villes mayas ont été abandonnées vers l'an 900, peut-être à cause de sécheresses ou de guerres.",path:"Les Mayas ont construit d'immenses pyramides et inventé une écriture avec des dessins appelés glyphes.",vision:"Ils pensaient que le temps tournait en boucle, comme un cercle, et l'observaient grâce à plusieurs calendriers."},
    tiles:MAYA_TILES, order:[0,1,2,3,-1,4,5,6,7], items:[
    {t:"Sceau spirituel Ahau", d:"Ce glyphe évoque une présence ancestrale, la conduite et une force guidant depuis les hauteurs. Porteur de l'héritage des anciens souverains, son pouvoir bénissait la civilisation maya.", dKid:"Ce symbole représente un ancêtre puissant qui guide et protège le peuple maya."},
    {t:"Marque d'Oxlahuun", d:"Cet ancien glyphe numérique est lié au temps. Gravé sur monuments et reliefs, il tient sa place dans un calendrier historique aujourd'hui oublié, comptant les jours de l'histoire.", dKid:"Un symbole utilisé pour compter le temps, gravé sur des monuments très anciens."},
    {t:"3 Ajaw", d:"Signifiant achèvement et souveraineté, ce glyphe apparaît souvent pour dater la naissance de grands dirigeants. Il porte un poids considérable dans la civilisation maya.", dKid:"Ce symbole marquait une date importante, souvent la naissance d'un grand chef."},
    {t:"Chikchan", d:"Symbole de mouvement, ce pouls en perpétuel déplacement relierait la terre et le ciel. Porteur d'une force créatrice et d'un instinct de survie, il évoque aussi l'instant précédant une transformation.", dKid:"Ce symbole représente le mouvement, comme un battement de cœur qui relie la terre et le ciel."},
    {t:"Kawak", d:"Symbole de tempête et de bouleversement, il apporte la pluie qui nourrit la terre. Mais l'éclair qui l'accompagne peut aussi apporter la destruction ; souvent invoqué dans les moments de crise, il peut apporter une nouvelle clarté.", dKid:"Ce symbole représente l'orage. Il apporte la pluie utile, mais aussi parfois des éclairs dangereux."},
    {t:"B'alam Ajaw (Seigneur Jaguar)", d:"Signifiant « Seigneur Jaguar », ce puissant symbole représentait un titre royal dans la civilisation maya. Associé au pouvoir et au sacré, le jaguar relie les souverains mayas aux forces spirituelles qui soutenaient leur autorité.", dKid:"Ça veut dire « Seigneur Jaguar ». C'était un titre donné aux rois mayas les plus puissants."},
    {t:"Dieu Soleil", d:"Ce symbole représente l'idée maya du soleil, un dieu vivant qui transforme son apparence au fil de son voyage. Il est l'œil du ciel, veillant sans cesse sur les Mayas et jugeant la terre en contrebas.", dKid:"Pour les Mayas, le soleil était un dieu vivant qui observait tout depuis le ciel."},
    {t:"Witz (la montagne)", d:"Élément central de la société maya, le Witz représente les montagnes de la terre. Considérées comme des êtres vivants sacrés, les montagnes étaient perçues comme les gardiennes du monde.", dKid:"Les Mayas pensaient que les montagnes étaient vivantes et qu'elles protégeaient la Terre."}
  ]},
  { id:"rome", name:"Rome Antique", emoji:"🦅", color:"#4ea8ff", tag:"Empire romain · Droit et légions",
    bio:{birth:"Selon la légende, en 753 av. J.-C. par Romulus ; la République est fondée en 509 av. J.-C., suivie de l'Empire en 27 av. J.-C.",
      death:"L'Empire romain d'Occident s'effondre en 476 apr. J.-C., tandis que sa partie orientale, byzantine, perdure encore près d'un millénaire.",
      path:"De cité italienne à empire méditerranéen, Rome a légué son droit, son ingénierie (routes, aqueducs), son armée organisée en légions et sa langue, le latin, à une grande partie de l'Europe.",
      vision:"Les Romains valorisaient la discipline civique, la loi et l'expansion, résumées dans la formule SPQR : le Sénat et le peuple romain gouvernant ensemble."}, bioKid:{birth:"Rome a été fondée, selon la légende, en 753 avant J.-C. par un homme nommé Romulus.",death:"L'Empire romain s'est effondré en 476 après J.-C., mais sa partie est a duré encore longtemps.",path:"Les Romains ont construit des routes, des aqueducs pour l'eau, et une armée très puissante appelée les légions.",vision:"Ils aimaient les règles, les lois et pensaient que le Sénat et le peuple devaient gouverner ensemble."},
    tiles:ROME_TILES, order:[0,1,2,3,-1,4,5,6,7], items:[
    {t:"Couronne de laurier", d:"Tressée de feuilles de laurier, cette couronne était un immense honneur. Offerte aux héros et chefs militaires, elle marquait leur haut rang et leur triomphe au service de l'État romain.", dKid:"Cette couronne de feuilles récompensait les soldats et chefs qui avaient gagné une grande bataille."},
    {t:"Bouclier romain (Scutum)", d:"Porté par les légionnaires, ce bouclier arborait des motifs variés selon les troupes et les époques. Il incarnait la discipline et la puissance des nombreuses armées de Rome au combat.", dKid:"Ce grand bouclier protégeait les soldats romains, appelés légionnaires, pendant les combats."},
    {t:"Foudre de Jupiter", d:"Arme du dieu Jupiter, ce symbole représentait son emprise sur le ciel. Reflet de son pouvoir absolu, la foudre l'aidait à régner sur les dieux comme sur les mortels.", dKid:"La foudre était l'arme du dieu Jupiter, le chef de tous les dieux romains."},
    {t:"Faisceau (Fasces)", d:"Symbole antique de l'autorité, ce faisceau était porté par les gardes protégeant les magistrats. Fait de bouleau ou d'orme, il liait des baguettes autour d'une hache, incarnant la force et le pouvoir romains.", dKid:"Ce paquet de bâtons attachés autour d'une hache montrait le pouvoir des chefs romains."},
    {t:"Casque Galea", d:"Casque standard des légionnaires romains, souvent forgé en bronze ou en fer. Symbole de la force de la légion, il incarnait pour ses porteurs l'esprit combatif qu'ils portaient en eux.", dKid:"Ce casque en métal protégeait la tête des soldats romains pendant la guerre."},
    {t:"Aigle romaine (Aquila)", d:"Utilisée comme principal étendard militaire, l'aigle incarnait la puissance, la force et le courage de Rome. Ce symbole inspira plus tard d'autres dirigeants, comme Napoléon Ier, qui l'adopta pour ses régiments impériaux.", dKid:"L'aigle était le symbole le plus sacré des armées romaines. Le perdre était une grande honte."},
    {t:"SPQR", d:"Symbole du double pouvoir de la civilisation romaine, SPQR signifie « Senatus Populusque Romanus », le Sénat et le peuple de Rome. Présent dans toute la société, il illustrait l'équilibre unique entre le Sénat et les citoyens romains.", dKid:"Ces quatre lettres veulent dire « le Sénat et le peuple romain ». Elles étaient partout à Rome !"},
    {t:"Amphore", d:"Vase emblématique de la Rome antique, l'amphore remplissait deux rôles essentiels. En terre cuite, elle stockait et transportait vin, huile et grain, souvent marquée de sceaux reflétant le quotidien et le commerce romains.", dKid:"Ce grand vase en terre servait à transporter du vin, de l'huile ou du blé."}
  ]},
  { id:"egypt", name:"Égypte Ancienne", emoji:"𓁿", color:"#ff9f43", tag:"Vallée du Nil · Pharaons et pyramides",
    bio:{birth:"Vers 3100 av. J.-C., avec l'unification de la Haute et de la Basse-Égypte sous un même pharaon.",
      death:"L'Égypte perd son indépendance en 30 av. J.-C., à la mort de Cléopâtre VII, dernière reine de la dynastie ptolémaïque, absorbée par Rome.",
      path:"Pendant près de trois mille ans, les Égyptiens ont bâti pyramides et temples le long du Nil, inventé une écriture hiéroglyphique et développé des savoirs avancés en médecine et en astronomie.",
      vision:"Ils croyaient en une vie après la mort où le cœur du défunt était pesé face à la déesse Maât, et momifiaient leurs morts pour préparer ce passage vers l'éternité."}, bioKid:{birth:"L'Égypte ancienne est née il y a environ 5000 ans, le long du fleuve Nil.",death:"La dernière reine d'Égypte, Cléopâtre, est morte en 30 avant J.-C., et l'Égypte est devenue romaine.",path:"Les Égyptiens ont construit d'énormes pyramides et inventé une écriture avec des dessins, les hiéroglyphes.",vision:"Ils croyaient à une vie après la mort, et momifiaient les corps pour les préparer à ce grand voyage."},
    tiles:EGYPT_TILES, order:[0,1,2,3,-1,4,5,6,7], items:[
    {t:"Bastet", d:"Cette divinité de l'Égypte ancienne était révérée comme déesse protectrice et de la fertilité. Bastet veillait sur les foyers, parfois censée descendre sur terre sous la forme d'un chat domestique.", dKid:"Bastet est la déesse chat. Elle protégeait les maisons et les familles."},
    {t:"Œil d'Horus", d:"Largement utilisé comme symbole de protection et de guérison, l'œil d'Horus est bien connu des vivants comme des morts. Le mythe raconte qu'il fut endommagé au combat puis restauré par les dieux, devenant une puissante amulette.", dKid:"Ce symbole protège contre le danger. Les Égyptiens pensaient qu'il portait chance et guérissait."},
    {t:"Rê-Horakhty", d:"Divinité la plus ancienne et la plus importante d'Égypte, ce dieu-faucon, fils d'Isis et d'Osiris, porte de nombreux symboles. Il incarne surtout la protection et le pouvoir royal, garantissant le retour de la lumière sur les ténèbres.", dKid:"Ce dieu-faucon représentait le soleil et protégeait les pharaons, les rois d'Égypte."},
    {t:"Fleur de lotus", d:"Éclose le long du Nil, la fleur de lotus reliait la société égyptienne au soleil et aux dieux, porteuse de création, de vie et de renaissance. On la retrouve peinte dans les tombes et les temples, rappel du renouveau de la vie.", dKid:"Cette fleur s'ouvre chaque matin avec le soleil. Elle symbolise une nouvelle vie qui commence."},
    {t:"Ankh", d:"Vu comme la clé de la vie, l'ankh est une croix égyptienne souvent portée par les dieux et offerte aux pharaons. Certains y voient la toute première croix, symbole d'existence éternelle et de vie après la mort.", dKid:"C'est la clé de la vie ! Les Égyptiens pensaient qu'elle donnait la vie éternelle."},
    {t:"Horus", d:"Avant de fusionner avec le dieu solaire Rê pour devenir Rê-Horakhty, Horus était perçu comme l'esprit vivant des pharaons. Il survolait le pays, veillant à défendre l'Égypte contre le chaos et l'injustice.", dKid:"Horus est un dieu-faucon qui protégeait l'Égypte et ses pharaons contre le danger."},
    {t:"Scarabée", d:"Le scarabée était associé au dieu Khépri, censé faire rouler le soleil dans le ciel chaque jour, comme l'insecte roule sa boule de bouse sur le sol. Chaque cycle symbolisait une chance de renaissance et de transformation.", dKid:"Ce petit insecte représentait le renouveau. Les Égyptiens pensaient qu'il aidait le soleil à se lever chaque jour."},
    {t:"Plume de Maât", d:"Objet essentiel de l'au-delà égyptien, la plume de Maât était placée sur une balance face au cœur du défunt, jugeant l'âme digne ou non de la vie éternelle. Ce symbole de vérité et d'équilibre occupait une place centrale dans la culture égyptienne.", dKid:"Après la mort, le cœur d'une personne était pesé avec cette plume pour savoir si elle avait été juste."}
  ]},
  { id:"meso", name:"Mésopotamie", emoji:"𒀭", color:"#3ddc84", tag:"Sumer, Babylone, Assyrie · Écriture cunéiforme",
    bio:{birth:"Vers 3500 av. J.-C. en Mésopotamie, dans l'actuel Irak, berceau des premières cités comme Uruk et Ur.",
      death:"La région perd son indépendance politique après la conquête perse achéménide en 539 av. J.-C., même si son influence culturelle perdure longtemps après.",
      path:"Les Sumériens, Babyloniens puis Assyriens ont inventé l'écriture cunéiforme, l'un des plus anciens systèmes d'écriture connus, ainsi que les premiers codes de lois écrits, comme celui d'Hammurabi.",
      vision:"Ils voyaient le monde gouverné par un vaste panthéon de dieux associés aux astres, et consignaient lois, mythes et observations astronomiques sur des tablettes d'argile."}, bioKid:{birth:"Cette civilisation est née il y a environ 5500 ans, dans l'actuel pays d'Irak.",death:"Elle a perdu son indépendance il y a environ 2500 ans, conquise par les Perses.",path:"Les habitants ont inventé une des toutes premières écritures du monde, et les premières lois écrites.",vision:"Ils pensaient que de nombreux dieux gouvernaient le monde, chacun lié à une étoile ou une planète."},
    tiles:MESO_TILES, order:[0,1,2,3,-1,4,5,6,7], items:[
    {t:"Dingir", d:"D'origine sumérienne plus que strictement mésopotamienne, ce signe cunéiforme stylisé désignait les dieux et déesses du ciel. Il évoque l'autorité céleste et la présence divine parmi les hommes.", dKid:"Ce signe très ancien servait à écrire le mot « dieu » ou tout ce qui vient du ciel."},
    {t:"Mušḫuššu", d:"Ce dragon-serpent hybride ornait notamment la porte d'Ishtar, à l'entrée de Babylone. Associé au pouvoir divin et à la protection, il incarne la victoire sur le chaos qui permet de régner sur le monde.", dKid:"Ce dragon imaginaire, mélange de plusieurs animaux, protégeait la ville de Babylone."},
    {t:"Cône de fondation", d:"Sa forme s'inspire des cônes de fondation que l'on enfouissait dans les bâtiments sacrés de Mésopotamie. Ils honoraient les dieux et affirmaient l'autorité des rois et des cités qui les faisaient ériger.", dKid:"Ces petits cônes en argile étaient enterrés sous les bâtiments pour porter chance."},
    {t:"Croissant de Sin", d:"Symbole clé du dieu-lune Sin, ce croissant est lié au passage du temps et à la guidance divine. Il reflète le rôle de la lune dans les calendriers et les rituels, ainsi que son lien profond avec la sagesse.", dKid:"Ce croissant représente le dieu de la lune. Il aidait à compter les jours et les mois."},
    {t:"Étoile de Shamash", d:"Proche du symbole solaire et astral associé à Shamash, dieu de la justice. Les pointes rayonnantes évoquent la lumière, la vérité et les points cardinaux, tandis que les vagues alentour rappellent le pouvoir du soleil de faire vivre toute chose sur terre.", dKid:"Cette étoile représente le dieu du soleil, qui voit tout et rend la justice."},
    {t:"Étoile à huit pointes d'Ishtar", d:"Cette étoile représente Inanna/Ishtar, déesse de l'amour, de la fertilité et de la guerre. Symbole influent en Mésopotamie, elle reflète l'emprise de la déesse sur la création comme sur la destruction.", dKid:"Cette étoile représente une déesse très puissante, à la fois déesse de l'amour et de la guerre."},
    {t:"Lamassu", d:"Souvent perçu comme une divinité protectrice, le lamassu gardait palais et cités contre le mal. Son corps de lion évoque la force, ses ailes d'aigle la rapidité, et sa tête humaine la sagesse capable d'arrêter le chaos.", dKid:"Cette immense statue, moitié taureau, moitié humain avec des ailes, protégeait les palais contre le danger."},
    {t:"Symbole de la Terre", d:"Ce signe fondamental désignait la terre elle-même. Il évoque la stabilité et le monde physique, ancrant la civilisation au sol sur lequel elle reposait.", dKid:"Ce symbole représentait simplement la terre elle-même, le sol sur lequel vivaient les gens."}
  ]},
  { id:"china", name:"Chine Impériale", emoji:"🐉", color:"#ff5e5e", tag:"Dynasties chinoises · Sagesse et invention",
    bio:{birth:"Vers 2070 av. J.-C. selon la tradition, avec la dynastie Xia, dont les origines exactes restent débattues par les historiens.",
      death:"Contrairement aux autres civilisations de cette galerie, la civilisation chinoise ne s'est jamais éteinte : elle s'est transformée à travers les dynasties jusqu'à aujourd'hui.",
      path:"Berceau de la soie, du papier, de la boussole et de l'imprimerie, la Chine impériale a aussi vu naître des philosophies durables comme le confucianisme et le taoïsme.",
      vision:"La pensée chinoise traditionnelle recherchait l'harmonie entre l'homme, la société et l'univers, incarnée par l'équilibre du Yin et du Yang."}, bioKid:{birth:"Selon la légende, la première dynastie chinoise est apparue il y a plus de 4000 ans.",death:"Contrairement aux autres civilisations, la Chine n'a jamais disparu : elle existe encore aujourd'hui !",path:"Les Chinois ont inventé la soie, le papier, la boussole et l'imprimerie.",vision:"Ils pensaient qu'il fallait garder l'équilibre entre les gens, la nature et l'univers."},
    tiles:CHINA_TILES, order:[0,1,2,3,-1,4,5,6,7], items:[
    {t:"Motif Leiwen (nuage et tonnerre)", d:"Connu comme le motif du nuage et du tonnerre, ce dessin évoque les orages qui traversent le ciel et la terre. Son mouvement sans fin symbolise le maintien de l'équilibre céleste.", dKid:"Ce dessin représente le tonnerre et les nuages qui bougent sans arrêt dans le ciel."},
    {t:"Grue", d:"Souvent symbole de haut rang, la grue ornait les insignes des puissants lettrés sous les dynasties Ming et Qing. Associée à une longue vie dans la culture chinoise, elle est aussi vue comme le véhicule permettant aux immortels de voyager entre ciel et terre.", dKid:"Cet oiseau élégant représente une longue vie. On pensait qu'il pouvait voyager jusqu'au ciel."},
    {t:"Xiangyun (nuage auspicieux)", d:"Ce nuage évoque la bonne fortune et l'heureux présage. Motif décoratif ancien dans l'architecture, les vêtements et les objets chinois, sa forme en volutes est censée porter bénédiction à qui l'utilise.", dKid:"Ce nuage tout en spirales porte chance et bonheur."},
    {t:"福 (Fú)", d:"Symbole de la culture chinoise souvent affiché lors du Nouvel An chinois, il apporte fortune et bonheur à qui le porte.", dKid:"Ce mot chinois veut dire « bonheur ». On l'affiche souvent pour le Nouvel An chinois."},
    {t:"Fenghuang", d:"Cet oiseau, vu comme le phénix chinois, parcourt le monde en apportant l'harmonie entre le ciel et la terre. En repoussant le chaos, il aspire à instaurer équilibre et paix.", dKid:"C'est le phénix chinois ! Il apporte l'harmonie et la paix partout où il vole."},
    {t:"Yin et Yang (Taijitu)", d:"Symbole important de dualité pour les Chinois, il montre comment des forces opposées peuvent se compléter et s'équilibrer. La courbe illustre un mouvement perpétuel, tandis que les points rappellent qu'une part de chaque force habite toujours l'autre.", dKid:"Ce symbole montre deux forces opposées qui s'équilibrent, comme le jour et la nuit."},
    {t:"Dragon chinois", d:"Symbole le plus puissant de la culture chinoise, le dragon en est l'emblème par excellence. Représentant force, sagesse et pouvoir impérial, il se dresse fièrement parmi son peuple.", dKid:"Le dragon est le symbole le plus puissant de Chine. Il représente la force et la sagesse."},
    {t:"Bagua", d:"Ce symbole représente l'équilibre et les huit forces fondamentales. Chacune joue un rôle dans la nature et la transformation, façonnant les schémas de la réalité et du destin.", dKid:"Ce symbole à huit côtés représente les forces de la nature et de l'univers."}
  ]},
];



/* ═══ ÉCRAN COFFRET DES SCIENTIFIQUES ══════════════════════════ */
function SavantsScreen({ onBack, t, kids, toggleKids }){
  const [sel,setSel] = useState(null);
  const [open,setOpen] = useState(null);
  const s = SAVANTS.find(x=>x.id===sel);

  if(!s) return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 90px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -8%, #4a3520 0%, #241a10 50%, #120c07 100%)"}}/>
      <Header onBack={onBack} t={t} color={PAL.gold} bg="#4a3520" border={PAL.gold} shadow="#241a10" title={`🔬 ${t.savants}`} sub={t.savantsSub}/>
      <img src={SAVANTS_PHOTO} alt={t.savants} style={{width:"100%",maxWidth:140,borderRadius:14,marginBottom:10,
        boxShadow:`0 3px 0 ${PAL.bg2}, 0 0 0 3px ${PAL.gold}, 0 6px 14px rgba(0,0,0,.5)`}}/>
      <div style={{width:"100%",maxWidth:360,display:"flex",alignItems:"flex-start",gap:8,background:`${PAL.gold}22`,borderRadius:14,padding:"11px 14px",marginBottom:10,
        boxShadow:`0 0 0 2px ${PAL.gold}55`}}>
        <span style={{fontSize:20,flexShrink:0}}>💡</span>
        <span style={{fontSize:15,color:"#ffffff",fontWeight:600,lineHeight:1.45}}>{t.ageToggleHint}</span>
      </div>
      <AgeToggle kids={kids} toggleKids={toggleKids} t={t} color={PAL.gold}/>
      <div style={{maxWidth:360,width:"100%",marginBottom:14}}>
        <Hint color={PAL.gold} icon="🎓">{t.savantsIntro}</Hint>
      </div>
      <div style={{fontSize:24,color:PAL.gold,animation:"floaty 2s ease-in-out infinite",marginBottom:6}}>⌄</div>
      <div className="stagger" style={{width:"100%",maxWidth:380,display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
        {SAVANTS.map(sv=>(
          <button key={sv.id} onClick={()=>{setSel(sv.id);setOpen(null);}}
            style={{border:"none",cursor:"pointer",background:`linear-gradient(135deg,${sv.color}77,${PAL.card})`,
              borderRadius:20,padding:"18px 12px",display:"flex",flexDirection:"column",alignItems:"center",gap:8,
              boxShadow:`0 5px 0 ${PAL.bg2}, 0 0 0 2px ${sv.color}`}}>
            <div style={{width:74,height:74,borderRadius:"50%",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,
              background:sv.tiles?"transparent":`linear-gradient(180deg,${shade(sv.color,30)},${sv.color} 55%)`,
              boxShadow:`0 4px 0 ${shade(sv.color,-40)}, inset 0 2px 3px rgba(255,255,255,.5), 0 0 0 3px ${sv.color}`}}>
              {sv.tiles
                ? <img src={sv.tiles[4]} alt={sv.name} draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                : sv.emoji}
            </div>
            <div style={{fontWeight:700,fontSize:14,color:PAL.text,lineHeight:1.2,textAlign:"center"}}>{sv.name}</div>
            <div style={{fontSize:10,color:PAL.textFaint,fontWeight:600,textAlign:"center",lineHeight:1.3}}>{sv.tag}</div>
            <div style={{fontSize:10,color:sv.color,fontWeight:700}}>8 {t.symbols} →</div>
          </button>
        ))}
      </div>
      <a href="https://rurucube.com/le-coffret-des-scientifiques" target="_blank" rel="noopener noreferrer"
        style={{textDecoration:"none",marginTop:20}}>
        <div style={{background:PAL.card,borderRadius:16,padding:"12px 20px",boxShadow:`0 0 0 2px ${PAL.gold}`}}>
          <span style={{fontSize:13,fontWeight:700,color:PAL.purple}}>{t.seeOnSite}</span>
        </div>
      </a>
    </div>
  );

  const posOfIdx = {};
  for(let i=0;i<9;i++){ const ix = s.order ? s.order[i] : (i===4?-1:(i<4?i:i-1)); if(ix>=0) posOfIdx[ix]=i; }

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 90px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -8%, #4a3520 0%, #241a10 50%, #120c07 100%)"}}/>
      <div style={{width:"100%",maxWidth:380,display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
        <GhostBtn onClick={()=>setSel(null)} color={s.color}>←</GhostBtn>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:48,height:48,borderRadius:"50%",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,
            background:s.tiles?"transparent":`linear-gradient(180deg,${shade(s.color,30)},${s.color} 55%)`,
            boxShadow:`0 3px 0 ${shade(s.color,-40)}, 0 0 0 2.5px ${s.color}`}}>
            {s.tiles?<img src={s.tiles[4]} alt={s.name} draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>:s.emoji}
          </div>
          <div>
            <div style={{fontWeight:700,fontSize:19,color:s.color,lineHeight:1.1}}>{s.name}</div>
            <div style={{fontSize:11,color:PAL.textFaint,fontWeight:600}}>{s.tag}</div>
          </div>
        </div>
      </div>

      {/* Grille des 8 symboles + le génie au centre */}
      <div style={{width:Math.min(300,window.innerWidth-60),background:"#171327",borderRadius:22,padding:6,
        display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,marginBottom:18,boxShadow:"0 10px 30px rgba(0,0,0,.45)"}}>
        {Array.from({length:9},(_,i)=>{
          // Position i de la face. s.order[i] = index de la fiche (-1 = centre)
          const idx = s.order ? s.order[i] : (i===4 ? -1 : (i<4 ? i : i-1));
          const tile = s.tiles ? s.tiles[i] : null;
          if(idx===-1){
            const isBioOpen = open==="bio";
            return (
            <button key={i} type="button" onClick={()=>setOpen(isBioOpen?null:"bio")}
              style={{border:"none",cursor:"pointer",padding:0,margin:0,WebkitAppearance:"none",appearance:"none",
              width:"100%",aspectRatio:"1",borderRadius:12,overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,
              background:tile?"transparent":`linear-gradient(180deg,${shade(s.color,30)},${s.color} 55%)`,
              boxShadow:isBioOpen?`0 0 0 3px ${s.color} inset`:(tile?"none":"inset 0 2px 4px rgba(255,255,255,.45)"),
              transition:"all .15s",transform:isBioOpen?"scale(0.94)":"scale(1)"}}>
              {tile?<img src={tile} alt={s.name} draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:isBioOpen?"none":"saturate(.92)"}}/>:s.emoji}
              <span style={{position:"absolute",bottom:3,right:4,width:17,height:17,borderRadius:5,background:isBioOpen?s.color:"rgba(0,0,0,.6)",
                color:isBioOpen?"#1a1228":"#fff",fontSize:11,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}}>5</span>
            </button>
          );}
          const isOpen = open===idx;
          return (
            <button key={i} onClick={()=>setOpen(isOpen?null:idx)}
              style={{border:"none",cursor:"pointer",borderRadius:12,padding:0,aspectRatio:"1",overflow:"hidden",position:"relative",
                background:tile?"transparent":(isOpen?s.color:`${s.color}33`),color:isOpen?"#1a1228":PAL.text,
                fontWeight:700,fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",
                boxShadow:isOpen?`0 0 0 3px ${s.color} inset`:"none",transition:"all .15s",
                transform:isOpen?"scale(0.94)":"scale(1)"}}>
              {tile
                ? <>
                    <img src={tile} alt="" draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:isOpen?"none":"saturate(.92)"}}/>
                    <span style={{position:"absolute",bottom:3,right:4,width:17,height:17,borderRadius:5,background:isOpen?s.color:"rgba(0,0,0,.6)",
                      color:"#fff",fontSize:11,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}}>{i+1}</span>
                  </>
                : i+1}
            </button>
          );
        })}
      </div>

      {/* Définition de la case sélectionnée, juste sous la face */}
      <div style={{width:"100%",maxWidth:380}}>
        {open==="bio" && s.bio ? (
          <div style={{background:PAL.card,borderRadius:18,padding:"14px 18px",
            boxShadow:`0 4px 0 ${PAL.bg2}, 0 0 0 2px ${s.color}`,animation:"pop .3s ease-out"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <span style={{width:28,height:28,borderRadius:9,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",
                background:s.color,color:"#1a1228",fontWeight:700,fontSize:14}}>5</span>
              {s.tiles&&<img src={s.tiles[4]} alt="" draggable={false} style={{width:34,height:34,borderRadius:9,objectFit:"cover",flexShrink:0}}/>}
              <span style={{flex:1,fontWeight:700,fontSize:16,color:PAL.text,lineHeight:1.3}}>{s.name}</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {(()=>{ const b = (kids && s.bioKid) ? s.bioKid : s.bio; return [["🎂",t.bioBirth,b.birth],["🕊️",t.bioDeath,b.death],["🧭",t.bioPath,b.path],["💡",t.bioVision,b.vision]]; })().map(([icon,label,val])=>(
                <div key={label}>
                  <div style={{fontSize:11,letterSpacing:1,fontWeight:700,color:s.color,textTransform:"uppercase",marginBottom:2}}>{icon} {label}</div>
                  <div style={{fontSize:14,color:"#ffffff",fontWeight:500,lineHeight:1.5}}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        ) : open!=null ? (
          <div style={{background:PAL.card,borderRadius:18,padding:"14px 18px",
            boxShadow:`0 4px 0 ${PAL.bg2}, 0 0 0 2px ${s.color}`,animation:"pop .3s ease-out"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
              <span style={{width:28,height:28,borderRadius:9,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",
                background:s.color,color:"#1a1228",fontWeight:700,fontSize:14}}>{(posOfIdx[open]??open)+1}</span>
              {s.tiles&&<img src={s.tiles[posOfIdx[open]]} alt="" draggable={false} style={{width:34,height:34,borderRadius:9,objectFit:"cover",flexShrink:0}}/>}
              <span style={{flex:1,fontWeight:700,fontSize:16,color:PAL.text,lineHeight:1.3}}>{s.items[open].t}</span>
            </div>
            <div style={{fontSize:15,color:"#ffffff",fontWeight:500,lineHeight:1.6}}>{(kids && s.items[open].dKid) ? s.items[open].dKid : s.items[open].d}</div>
          </div>
        ) : (
          <Hint color={s.color} icon="👆">{t.savantsTapHint}</Hint>
        )}
      </div>
    </div>
  );
}

/* ═══ ACCUEIL — tout sur un écran ═══════════════════════════════ */
function LogoBtn({ img, alt, badge, onClick }){
  const [press,setPress]=useState(false);
  return (
    <button onClick={onClick} onPointerDown={()=>setPress(true)} onPointerUp={()=>setPress(false)} onPointerLeave={()=>setPress(false)}
      style={{border:"none",background:"none",padding:0,cursor:"pointer",position:"relative",width:"100%",
        transform:press?"scale(.94)":"scale(1)",transition:"transform .1s"}}>
      <img src={img} alt={alt} draggable={false}
        style={{width:"100%",display:"block",filter:"drop-shadow(0 8px 18px rgba(0,0,0,.45))"}}/>
      {badge&&<div style={{position:"absolute",left:"50%",bottom:8,transform:"translateX(-50%)",
        background:"rgba(13,11,26,.85)",borderRadius:10,padding:"3px 10px",fontSize:11,fontWeight:700,
        color:"#fff",whiteSpace:"nowrap"}}>{badge}</div>}
    </button>
  );
}
function ClassicEmblem({ small }){
  const s = small?15:19;
  return (
    <div style={{display:"flex",flexDirection:"column",gap:3,alignItems:"center"}}>
      {[["#e62b2b","#2bbf3f","#2b8cff"],["#ffd500","#ff8c1a","#f5f5f5"]].map((row,r)=>(
        <div key={r} style={{display:"flex",gap:3}}>
          {row.map((c,i)=><span key={i} style={{width:s,height:s,borderRadius:5,background:c,boxShadow:"inset 0 1px 2px rgba(255,255,255,.55), 0 2px 0 rgba(0,0,0,.25)"}}/>)}
        </div>
      ))}
    </div>
  );
}

/* ═══ CARTE D'UNIVERS — regroupe plusieurs boutons ══════════════ */
function CategoryCard({ icon, accent, title, sub, children }){
  return (
    <div style={{width:"100%",maxWidth:380,
      background:`linear-gradient(160deg,${PAL.card},${PAL.bg2} 70%)`,
      borderRadius:26,padding:"16px 14px 18px",
      boxShadow:`0 0 0 2px ${accent}, 0 10px 26px rgba(0,0,0,.4)`}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
        <div style={{width:54,height:54,borderRadius:17,flexShrink:0,
          display:"flex",alignItems:"center",justifyContent:"center",fontSize:27,
          background:`linear-gradient(150deg,${shade(accent,45)},${accent})`,
          boxShadow:`0 4px 0 ${shade(accent,-55)}, inset 0 2px 5px rgba(255,255,255,.4)`}}>{icon}</div>
        <div style={{minWidth:0}}>
          <div style={{fontWeight:700,fontSize:17,color:PAL.text,lineHeight:1.2}}>{title}</div>
          <div style={{fontSize:12.5,color:PAL.textDim,fontWeight:600,marginTop:4,lineHeight:1.35}}>{sub}</div>
        </div>
      </div>
      <div style={{height:1,background:`linear-gradient(90deg,${accent},${accent}22,transparent)`,marginBottom:14}}/>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>{children}</div>
    </div>
  );
}

/* ═══ ACCUEIL — choisir son univers ═════════════════════════════ */
function HomeScreen({ t, setSkin, launch, openHelp, lang, toggleLang }){
  const open = (g)=>{ if(g.uni){ setSkin(g.id); launch("univers"); } else launch(g.id); };
  const sections = [
    { key:"speed", icon:"⚡", accent:PAL.gold, title:t.catSpeed, sub:t.catSpeedSub, games:[
      { id:"monstro", uni:true, img:MONSTRO_BTN, alt:t.monstro },
      { id:"classic", uni:true, img:CLASSIC_BTN, alt:t.speedFace },
      { id:"sudoku",  uni:true, img:SUDO_BTN,    alt:t.sudo },
    ]},
    { key:"learn", icon:"🧠", accent:PAL.purple, title:t.catLearn, sub:t.catLearnSub, games:[
      { id:"savants", img:SAVANTS_BTN, alt:t.scienceCube },
      { id:"civi",    img:CIVI_BTN,    alt:t.civi },
    ]},
    { key:"progress", icon:"🚀", accent:PAL.green, title:t.catProgress, sub:t.catProgressSub, games:[
      { id:"tuto",   img:TUTO_BTN,   alt:t.tuto },
      { id:"chrono", img:CHRONO_BTN, alt:t.chrono },
    ]},
  ];
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"30px 16px 48px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <img src={RURU_LOGO} alt="RUR'U' — Chaque geste compte" style={{width:Math.min(320,window.innerWidth-60),animation:"floaty 6s ease-in-out infinite",filter:"drop-shadow(0 8px 22px rgba(0,0,0,.55))"}}/>

      <button onClick={toggleLang} style={{marginTop:14,background:PAL.card,border:`2px solid ${PAL.gold}`,borderRadius:18,padding:"12px 26px",color:PAL.gold,fontWeight:700,fontSize:17,cursor:"pointer",boxShadow:`0 4px 0 ${PAL.bg2}`}}>{lang==="fr"?"🇬🇧 EN":"🇫🇷 FR"}</button>

      <SectionLabel>{t.chooseUniverse}</SectionLabel>
      <div className="stagger" style={{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:26}}>
        {sections.map(s=>(
          <CategoryCard key={s.key} icon={s.icon} accent={s.accent} title={s.title} sub={s.sub}>
            {s.games.map(g=>(
              <LogoBtn key={g.id} img={g.img} alt={g.alt} onClick={()=>open(g)}/>
            ))}
          </CategoryCard>
        ))}
      </div>

      <button onClick={openHelp} style={{marginTop:22,background:`linear-gradient(135deg,${PAL.purple}55,${PAL.card})`,border:`2px solid ${PAL.gold}`,borderRadius:16,padding:"12px 22px",color:"#ffffff",fontWeight:700,fontSize:15,cursor:"pointer",boxShadow:`0 4px 0 ${PAL.bg2}`}}>{t.howTo}</button>

      {/* Boutique — carte unique */}
      <a href="https://rurucube.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",width:"100%",maxWidth:380,marginTop:30}}>
        <div style={{background:`linear-gradient(135deg,${PAL.purple}33,${PAL.card})`,borderRadius:22,padding:"20px 18px",boxShadow:`0 0 0 2px ${PAL.gold}, 0 8px 24px rgba(0,0,0,.35)`,textAlign:"center"}}>
          <div style={{fontSize:30,marginBottom:8}}>👾 🔢 🎨</div>
          <div style={{fontWeight:700,fontSize:17,color:PAL.text,lineHeight:1.35,marginBottom:6}}>{t.shopCardTitle}</div>
          <div style={{fontSize:13,color:PAL.textDim,fontWeight:500,lineHeight:1.5,marginBottom:14}}>{t.shopCardText}</div>
          <div style={{display:"inline-block",background:`linear-gradient(135deg,${PAL.purple},${PAL.pink})`,borderRadius:16,padding:"12px 26px",boxShadow:`0 5px 0 ${shade(PAL.pink,-50)}, 0 8px 20px ${PAL.pink}44`}}>
            <span style={{fontWeight:700,fontSize:15,color:"#fff"}}>{t.orderBtn}</span>
          </div>
        </div>
      </a>
    </div>
  );
}

/* ═══ ÉCRAN UNIVERS — un cube, ses modes, bascule rapide ════════ */
function UniversScreen({ t, skin, setSkin, launch, onBack, openHelp }){
  const data = loadS();
  const dailyDone = data[skin]?.daily?.days?.[todayKey()] ?? null;
  const defs = {
    classic:{ logo:CLASSIC_LOGO, label:t.speedFace, sub:t.speedFaceSub },
    monstro:{ logo:LOGO, label:t.monstro, sub:t.monstroSub },
    sudoku: { logo:SUDOCUBE_LOGO, label:t.sudo, sub:t.sudoSub },
  };
  const cur = defs[skin]; const c = SKINS[skin].color;
  const neon = skin==="sudoku";
  const wood = skin==="classic";
  const paper = skin==="monstro";
  const modes = [
    { id:"face",      icon:"🎯", title:t.faceTile,    sub:t.faceTileSub,    color:PAL.gold },
    { id:"reverse",   icon:"⏳", title:t.reverseTile, sub:t.reverseTileSub, color:PAL.orange },
    { id:"duel",      icon:"⚔️", title:t.duel,        sub:t.duelSub,        color:PAL.green },
    { id:"blind",     icon:"🙈", title:t.blind,       sub:t.blindSub,       color:PAL.blue },
    { id:"chrono",    icon:"🧩", title:t.chrono,      sub:t.chronoSub,      color:PAL.purple },
  ];
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 48px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #3a0010 0%, #0a0004 55%, #000 100%)"}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
      <div style={{width:"100%",maxWidth:380,display:"flex",marginBottom:6}}>
        <GhostBtn onClick={onBack} color={wood?"#4a3418":(paper?"#132a4d":c)} bg={wood?"#fbeed8":(paper?"#ffffff":undefined)} border={wood?"#c69c6d":(paper?"#2a4570":undefined)} shadow={wood?"#8a6539":(paper?"#2a4570":undefined)}>{t.menu}</GhostBtn>
      </div>

      {/* Logo du cube courant */}
      <div key={skin} style={{width:"100%",maxWidth:380,display:"flex",alignItems:"center",justifyContent:"center",minHeight:140,padding:"4px 0",animation:"pop .3s ease-out"}}>
        {cur.logo
          ? <img src={cur.logo} alt={cur.label} draggable={false} style={{width:"100%",maxWidth:280,maxHeight:180,objectFit:"contain",filter:`drop-shadow(0 10px 26px rgba(0,0,0,.5)) drop-shadow(0 0 18px ${c}33)`}}/>
          : <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
              <ClassicEmblem/>
              <div style={{fontWeight:700,fontSize:24,color:PAL.text,letterSpacing:1.5,textShadow:`0 3px 0 ${PAL.cardHi}`}}>{t.speedFace}</div>
              <div style={{fontSize:12,color:PAL.textDim,fontWeight:600}}>{cur.sub}</div>
            </div>}
      </div>

      <button onClick={openHelp} style={{marginBottom:20,background:neon?"#0a0006":(wood?"#fbeed8":(paper?"#eef2f7":`linear-gradient(135deg,${PAL.purple}55,${PAL.card})`)),border:`2px solid ${neon?c:(wood?"#c69c6d":(paper?"#2a4570":PAL.gold))}`,borderRadius:16,padding:"12px 22px",color:wood?"#4a3418":(paper?"#132a4d":"#ffffff"),fontWeight:700,fontSize:15,cursor:"pointer",boxShadow:neon?`0 4px 0 ${PAL.bg2}, 0 0 14px ${c}55`:(wood?`0 4px 0 #8a6539`:(paper?`0 4px 0 #2a4570`:`0 4px 0 ${PAL.bg2}`))}}>{t.howTo}</button>

      {/* Bascule rapide entre les 3 cubes */}
      <SectionLabel wood={wood}>{t.switchCube}</SectionLabel>
      <div style={{display:"flex",gap:6,width:"100%",maxWidth:380,justifyContent:"center",flexWrap:"wrap"}}>
        {["monstro","classic","sudoku"].map(id=>{
          const active = skin===id; const cc = SKINS[id].color;
          const label = id==="classic"?t.classic:(id==="monstro"?t.monstro:t.sudo);
          return (
            <button key={id} onClick={()=>setSkin(id)} style={{flex:1,minWidth:84,maxWidth:100,border:"none",cursor:"pointer",borderRadius:14,padding:"11px 4px",
              background:active?`linear-gradient(180deg,${shade(cc,30)},${cc} 45%)`:(neon?"#0a0006":(wood?"#fbeed8":(paper?"#ffffff":PAL.card))),
              color:active?"#1a1228":(wood?"#4a3418":(paper?"#132a4d":PAL.textDim)),fontWeight:700,fontSize:12,
              boxShadow:active?`0 4px 0 ${shade(cc,-40)}, inset 0 2px 4px rgba(255,255,255,.4)`:(wood?`0 4px 0 #8a6539, 0 0 0 2px #c69c6d`:(paper?`0 4px 0 #2a4570, 0 0 0 2px #2a4570`:`0 4px 0 ${PAL.bg2}, 0 0 0 2px ${neon?c:PAL.gold}`)),
              transition:"all .12s"}}><span style={{opacity:.9,marginRight:5}}>{SKINS[id].emoji}</span>{label}</button>
          );
        })}
      </div>

      {/* Défi du jour */}
      <button onClick={()=>launch("daily")} style={{marginTop:18,width:"100%",maxWidth:380,border:"none",cursor:"pointer",
        background:neon?`linear-gradient(135deg,${c},#1a0006)`:(wood?`linear-gradient(135deg,#c69c6d,#8a6539)`:(paper?`linear-gradient(135deg,#3a5a8c,#132a4d)`:`linear-gradient(135deg,${PAL.purple},${shade(PAL.purple,-40)})`)),borderRadius:18,padding:"13px 16px",
        display:"flex",alignItems:"center",gap:12,boxShadow:neon?`0 5px 0 #1a0006, 0 8px 22px ${c}66, 0 0 0 2px ${c}`:(wood?`0 5px 0 #5c451f, 0 8px 20px #8a653966, 0 0 0 2px #fbeed8`:(paper?`0 5px 0 #0a1a30, 0 8px 20px #13284d66, 0 0 0 2px #ffffff`:`0 5px 0 ${shade(PAL.purple,-60)}, 0 8px 22px ${PAL.purple}44, 0 0 0 2px ${PAL.gold}`))}}>
        <span style={{fontSize:24}}>🗓️</span>
        <div style={{textAlign:"left",flex:1}}>
          <div style={{fontWeight:700,fontSize:15,color:"#fff"}}>{t.daily}</div>
          <div style={{fontSize:11,color:"#ffffffcc",fontWeight:600}}>
            {dailyDone!=null?`${t.dailyDone} ${fmt(dailyDone)} ✓`:t.dailyTodo}
          </div>
        </div>
        <span style={{fontSize:20,color:"#fff"}}>→</span>
      </button>

      {/* Modes */}
      <SectionLabel wood={wood}>{t.chooseMode}</SectionLabel>
      <div className="stagger" style={{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:12}}>
        {modes.map(m=>(<ModeTile key={m.id} m={m} onClick={()=>launch(m.id)} neon={neon} wood={wood} paper={paper}/>))}
      </div>

      {paper&&(
        <img src={MONSTRO_PHOTO} alt={t.monstro} style={{width:"100%",maxWidth:280,borderRadius:18,marginTop:22,
          boxShadow:`0 4px 0 #2a4570, 0 0 0 3px #ffffff, 0 8px 18px rgba(0,0,0,.35)`}}/>
      )}
      {neon&&(
        <img src={SUDO_PHOTO} alt={t.sudo} style={{width:"100%",maxWidth:280,borderRadius:18,marginTop:22,
          boxShadow:`0 4px 0 #4a0010, 0 0 0 3px ${SKINS.sudoku.color}, 0 8px 20px ${SKINS.sudoku.color}55`}}/>
      )}
    </div>
  );
}
function ModeTile({ m, onClick, neon, wood, paper }){
  const [press,setPress]=useState(false);
  const ring = neon ? SKINS.sudoku.color : (wood ? "#c69c6d" : (paper ? "#2a4570" : PAL.gold));
  return (
    <button onClick={onClick} onPointerDown={()=>setPress(true)} onPointerUp={()=>setPress(false)} onPointerLeave={()=>setPress(false)}
      style={{width:"100%",border:"none",cursor:"pointer",background:neon?`linear-gradient(135deg,${m.color}33,#0a0006)`:(wood?`linear-gradient(135deg,${m.color}33,#fffaf0)`:(paper?`linear-gradient(135deg,${m.color}4d,#f3f6fa)`:`linear-gradient(135deg,${m.color}1f,${PAL.card})`)),
        borderRadius:20,padding:"16px 18px",display:"flex",alignItems:"center",gap:14,textAlign:"left",
        boxShadow:press?`0 2px 0 ${wood?"#8a6539":(paper?"#2a4570":PAL.bg2)}, 0 0 0 ${paper?3:2}px ${ring}`:`0 6px 0 ${wood?"#8a6539":(paper?"#2a4570":PAL.bg2)}, 0 0 0 ${paper?3:2}px ${ring}${neon?", 0 0 16px "+ring+"66":""}`,
        transform:press?"translateY(4px)":"none",transition:"all .1s"}}>
      <div style={{width:54,height:54,borderRadius:16,background:`linear-gradient(180deg,${shade(m.color,30)},${m.color} 50%)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:27,flexShrink:0,boxShadow:`0 4px 0 ${shade(m.color,-40)}, inset 0 2px 3px rgba(255,255,255,.5)`,transform:press?"scale(.93)":"scale(1)",transition:"transform .1s"}}>{m.icon}</div>
      <div style={{flex:1,minWidth:0}}>
        <div style={{fontWeight:700,fontSize:18,color:wood?"#4a3418":(paper?"#132a4d":PAL.text),letterSpacing:.5}}>{m.title}</div>
        <div style={{fontSize:12,color:wood?"#8a6539":(paper?"#2a4570":PAL.textDim),fontWeight:500,marginTop:2}}>{m.sub}</div>
      </div>
      <span style={{fontSize:20,color:m.color}}>→</span>
    </button>
  );
}


/* ═══ ÉCRAN CIVILISATION ANCIENNE ═══════════════════════════════ */
function CiviScreen({ onBack, t, kids, toggleKids }){
  const [sel,setSel] = useState(null);
  const [open,setOpen] = useState(null);
  const s = CIVI.find(x=>x.id===sel);

  if(!s) return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 90px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <Header onBack={onBack} t={t} color={PAL.gold} bg="#4a3520" border={PAL.gold} shadow="#241a10" title={`🏛️ ${t.civi}`} sub={t.civiSub}/>
      {/* Ambiance chaude assortie à la photo */}
      <div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -8%, #4a3520 0%, #241a10 50%, #120c07 100%)"}}/>
      <img src={CIVI_PHOTO} alt={t.civi} style={{width:"100%",maxWidth:230,borderRadius:16,marginBottom:10,
        boxShadow:`0 3px 0 ${PAL.bg2}, 0 0 0 3px ${PAL.gold}, 0 6px 14px rgba(0,0,0,.4)`}}/>
      <div style={{width:"100%",maxWidth:360,display:"flex",alignItems:"flex-start",gap:8,background:`${PAL.gold}22`,borderRadius:14,padding:"11px 14px",marginBottom:10,
        boxShadow:`0 0 0 2px ${PAL.gold}55`}}>
        <span style={{fontSize:20,flexShrink:0}}>💡</span>
        <span style={{fontSize:15,color:"#ffffff",fontWeight:600,lineHeight:1.45}}>{t.ageToggleHint}</span>
      </div>
      <AgeToggle kids={kids} toggleKids={toggleKids} t={t} color={PAL.gold}/>
      <div style={{maxWidth:360,width:"100%",marginBottom:14}}>
        <Hint color={PAL.gold} icon="🌍">{t.civiIntro}</Hint>
      </div>
      <div style={{fontSize:24,color:PAL.gold,animation:"floaty 2s ease-in-out infinite",marginBottom:6}}>⌄</div>
      <div className="stagger" style={{width:"100%",maxWidth:380,display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
        {CIVI.map(sv=>(
          <button key={sv.id} onClick={()=>{setSel(sv.id);setOpen(null);}}
            style={{border:"none",cursor:"pointer",background:`linear-gradient(135deg,${sv.color}77,${PAL.card})`,
              borderRadius:20,padding:"18px 12px",display:"flex",flexDirection:"column",alignItems:"center",gap:8,
              boxShadow:`0 5px 0 ${PAL.bg2}, 0 0 0 2px ${sv.color}`}}>
            <div style={{width:74,height:74,borderRadius:"50%",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,
              background:sv.tiles?"transparent":`linear-gradient(180deg,${shade(sv.color,30)},${sv.color} 55%)`,
              boxShadow:`0 4px 0 ${shade(sv.color,-40)}, inset 0 2px 3px rgba(255,255,255,.5), 0 0 0 3px ${sv.color}`}}>
              {sv.tiles
                ? <img src={sv.tiles[4]} alt={sv.name} draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                : sv.emoji}
            </div>
            <div style={{fontWeight:700,fontSize:14,color:PAL.text,lineHeight:1.2,textAlign:"center"}}>{sv.name}</div>
            <div style={{fontSize:10,color:PAL.textFaint,fontWeight:600,textAlign:"center",lineHeight:1.3}}>{sv.tag}</div>
            <div style={{fontSize:10,color:sv.color,fontWeight:700}}>8 {t.symbols} →</div>
          </button>
        ))}
      </div>
    </div>
  );

  const posOfIdx = {};
  for(let i=0;i<9;i++){ const ix = s.order ? s.order[i] : (i===4?-1:(i<4?i:i-1)); if(ix>=0) posOfIdx[ix]=i; }

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 90px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -8%, #4a3520 0%, #241a10 50%, #120c07 100%)"}}/>
      <div style={{width:"100%",maxWidth:380,display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
        <GhostBtn onClick={()=>setSel(null)} color={s.color}>←</GhostBtn>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:48,height:48,borderRadius:"50%",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,
            background:s.tiles?"transparent":`linear-gradient(180deg,${shade(s.color,30)},${s.color} 55%)`,
            boxShadow:`0 3px 0 ${shade(s.color,-40)}, 0 0 0 2.5px ${s.color}`}}>
            {s.tiles?<img src={s.tiles[4]} alt={s.name} draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>:s.emoji}
          </div>
          <div>
            <div style={{fontWeight:700,fontSize:19,color:s.color,lineHeight:1.1}}>{s.name}</div>
            <div style={{fontSize:11,color:PAL.textFaint,fontWeight:600}}>{s.tag}</div>
          </div>
        </div>
      </div>

      {/* Grille des 8 symboles + l'emblème central */}
      <div style={{width:Math.min(300,window.innerWidth-60),background:"#171327",borderRadius:22,padding:6,
        display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,marginBottom:18,boxShadow:"0 10px 30px rgba(0,0,0,.45)"}}>
        {Array.from({length:9},(_,i)=>{
          const idx = s.order ? s.order[i] : (i===4 ? -1 : (i<4 ? i : i-1));
          const tile = s.tiles ? s.tiles[i] : null;
          if(idx===-1){
            const isBioOpen = open==="bio";
            return (
            <button key={i} type="button" onClick={()=>setOpen(isBioOpen?null:"bio")}
              style={{border:"none",cursor:"pointer",padding:0,margin:0,WebkitAppearance:"none",appearance:"none",
              width:"100%",aspectRatio:"1",borderRadius:12,overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,
              background:tile?"transparent":`linear-gradient(180deg,${shade(s.color,30)},${s.color} 55%)`,
              boxShadow:isBioOpen?`0 0 0 3px ${s.color} inset`:(tile?"none":"inset 0 2px 4px rgba(255,255,255,.45)"),
              transition:"all .15s",transform:isBioOpen?"scale(0.94)":"scale(1)"}}>
              {tile?<img src={tile} alt={s.name} draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:isBioOpen?"none":"saturate(.92)"}}/>:s.emoji}
              <span style={{position:"absolute",bottom:3,right:4,width:17,height:17,borderRadius:5,background:isBioOpen?s.color:"rgba(0,0,0,.6)",
                color:isBioOpen?"#1a1228":"#fff",fontSize:11,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}}>5</span>
            </button>
          );}
          const isOpen = open===idx;
          return (
            <button key={i} onClick={()=>setOpen(isOpen?null:idx)}
              style={{border:"none",cursor:"pointer",borderRadius:12,padding:0,aspectRatio:"1",overflow:"hidden",position:"relative",
                background:tile?"transparent":(isOpen?s.color:`${s.color}33`),color:isOpen?"#1a1228":PAL.text,
                fontWeight:700,fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",
                boxShadow:isOpen?`0 0 0 3px ${s.color} inset`:"none",transition:"all .15s",
                transform:isOpen?"scale(0.94)":"scale(1)"}}>
              {tile
                ? <>
                    <img src={tile} alt="" draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:isOpen?"none":"saturate(.92)"}}/>
                    <span style={{position:"absolute",bottom:3,right:4,width:17,height:17,borderRadius:5,background:isOpen?s.color:"rgba(0,0,0,.6)",
                      color:"#fff",fontSize:11,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}}>{i+1}</span>
                  </>
                : i+1}
            </button>
          );
        })}
      </div>

      {/* Définition de la case sélectionnée, juste sous la face */}
      <div style={{width:"100%",maxWidth:380}}>
        {open==="bio" && s.bio ? (
          <div style={{background:PAL.card,borderRadius:18,padding:"14px 18px",
            boxShadow:`0 4px 0 ${PAL.bg2}, 0 0 0 2px ${s.color}`,animation:"pop .3s ease-out"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <span style={{width:28,height:28,borderRadius:9,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",
                background:s.color,color:"#1a1228",fontWeight:700,fontSize:14}}>5</span>
              {s.tiles&&<img src={s.tiles[4]} alt="" draggable={false} style={{width:34,height:34,borderRadius:9,objectFit:"cover",flexShrink:0}}/>}
              <span style={{flex:1,fontWeight:700,fontSize:16,color:PAL.text,lineHeight:1.3}}>{s.name}</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {(()=>{ const b = (kids && s.bioKid) ? s.bioKid : s.bio; return [["🎂",t.bioBirth,b.birth],["🕊️",t.bioDeath,b.death],["🧭",t.bioPath,b.path],["💡",t.bioVision,b.vision]]; })().map(([icon,label,val])=>(
                <div key={label}>
                  <div style={{fontSize:11,letterSpacing:1,fontWeight:700,color:s.color,textTransform:"uppercase",marginBottom:2}}>{icon} {label}</div>
                  <div style={{fontSize:14,color:"#ffffff",fontWeight:500,lineHeight:1.5}}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        ) : open!=null ? (
          <div style={{background:PAL.card,borderRadius:18,padding:"14px 18px",
            boxShadow:`0 4px 0 ${PAL.bg2}, 0 0 0 2px ${s.color}`,animation:"pop .3s ease-out"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
              <span style={{width:28,height:28,borderRadius:9,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",
                background:s.color,color:"#1a1228",fontWeight:700,fontSize:14}}>{(posOfIdx[open]??open)+1}</span>
              {s.tiles&&<img src={s.tiles[posOfIdx[open]]} alt="" draggable={false} style={{width:34,height:34,borderRadius:9,objectFit:"cover",flexShrink:0}}/>}
              <span style={{flex:1,fontWeight:700,fontSize:16,color:PAL.text,lineHeight:1.3}}>{s.items[open].t}</span>
            </div>
            <div style={{fontSize:15,color:"#ffffff",fontWeight:500,lineHeight:1.6}}>{(kids && s.items[open].dKid) ? s.items[open].dKid : s.items[open].d}</div>
          </div>
        ) : (
          <Hint color={s.color} icon="👆">{t.savantsTapHint}</Hint>
        )}
      </div>
    </div>
  );
}

/* ═══ APP ═══════════════════════════════════════════════════════ */
export default function App(){
  const [screen,setScreen] = useState("home");   // home | challenge | duel | chrono | daily
  const [skin,setSkinRaw] = useState(()=>loadS().skin||"classic");
  const [lang,setLang] = useState(()=>loadS().lang||"fr");
  const [kids,setKids] = useState(()=>loadS().kids||false);
  function toggleKids(k){ setKids(k); const d=loadS(); d.kids=k; saveS(d); }
  Object.assign(PAL, THEMES.dark);
  const [showHelp,setShowHelp] = useState(false);
  const t = TR[lang];

  useEffect(()=>{
    const l=document.createElement("link");
    l.href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap";
    l.rel="stylesheet"; document.head.appendChild(l);
  },[]);

  // ─── Remonte tout en haut à chaque changement d'écran ───────────
  useEffect(()=>{ window.scrollTo(0,0); },[screen]);

  // ─── Anti-veille : garde l'écran allumé pendant les parties (Wake Lock API) ───
  const wakeRef = useRef(null);
  useEffect(()=>{
    const inGame = screen!=="home";
    async function acquire(){
      try{
        if("wakeLock" in navigator){
          wakeRef.current = await navigator.wakeLock.request("screen");
        }
      }catch(e){ /* non supporté ou refusé : on ignore silencieusement */ }
    }
    function release(){
      try{ if(wakeRef.current){ wakeRef.current.release(); wakeRef.current=null; } }catch(e){}
    }
    function onVis(){ if(document.visibilityState==="visible" && inGame) acquire(); }
    if(inGame){
      acquire();
      document.addEventListener("visibilitychange", onVis);
    } else {
      release();
    }
    return ()=>{ document.removeEventListener("visibilitychange", onVis); release(); };
  },[screen]);

  function setSkin(s){ setSkinRaw(s); const d=loadS(); d.skin=s; saveS(d); }
  function toggleLang(){ const nl=lang==="fr"?"en":"fr"; setLang(nl); const d=loadS(); d.lang=nl; saveS(d); }
  const back = ()=>setScreen("home");
  const toUnivers = ()=>setScreen("univers");

  return (
    <div style={{minHeight:"100vh",background:PAL.bg,color:PAL.text,fontFamily:"'Fredoka',sans-serif",position:"relative"}}>
      <GlobalStyles/>
      <Bg/>
      {/* Barres dorées latérales (toutes les pages) */}
      <div style={{position:"fixed",top:0,bottom:0,left:0,width:5,zIndex:55,pointerEvents:"none",
        background:`linear-gradient(90deg,${shade(PAL.gold,-90)},${shade(PAL.gold,45)} 45%,${PAL.gold})`,
        boxShadow:`2px 0 12px ${PAL.gold}44`}}/>
      <div style={{position:"fixed",top:0,bottom:0,right:0,width:5,zIndex:55,pointerEvents:"none",
        background:`linear-gradient(270deg,${shade(PAL.gold,-90)},${shade(PAL.gold,45)} 45%,${PAL.gold})`,
        boxShadow:`-2px 0 12px ${PAL.gold}44`}}/>
      {showHelp&&<HowToPlay t={t} skin={skin} onClose={()=>setShowHelp(false)}/>}
      {screen==="home"&&<HomeScreen t={t} setSkin={setSkin} launch={setScreen} openHelp={()=>setShowHelp(true)} lang={lang} toggleLang={toggleLang}/>}
      {screen==="progress"&&<ProgressScreen t={t} onBack={back}/>}
      {screen==="univers"&&<UniversScreen t={t} skin={skin} setSkin={setSkin} launch={setScreen} onBack={()=>setScreen("home")} openHelp={()=>setShowHelp(true)}/>}
      {screen==="face"&&<ChallengeScreen onBack={toUnivers} t={t} skin={skin} forceMode="normal"/>}
      {screen==="reverse"&&<ChallengeScreen onBack={toUnivers} t={t} skin={skin} forceMode="reverse"/>}
      {screen==="daily"&&<ChallengeScreen onBack={toUnivers} t={t} skin={skin} daily/>}
      {screen==="duel"&&<DuelScreen onBack={toUnivers} t={t} skin={skin}/>}
      {screen==="blind"&&<ChallengeScreen onBack={toUnivers} t={t} skin={skin} forceMode="blind"/>}
      {screen==="civi"&&<CiviScreen onBack={()=>setScreen("home")} t={t} kids={kids} toggleKids={toggleKids}/>}
      {screen==="chrono"&&<ChronoScreen onBack={back} t={t} skin={skin}/>}
      {screen==="savants"&&<SavantsScreen onBack={back} t={t} kids={kids} toggleKids={toggleKids}/>}
      {screen==="tuto"&&<TutoScreen onBack={back} t={t}/>}

      {NAV_SCREENS.includes(screen)&&(
        <div style={{position:"fixed",left:0,right:0,bottom:0,zIndex:60,display:"flex",
          background:PAL.card,boxShadow:`0 -4px 20px rgba(0,0,0,.4), 0 0 0 2px ${PAL.gold}`,
          paddingBottom:"env(safe-area-inset-bottom, 0px)"}}>
          {[
            {id:"home",icon:"🏠",label:t.navHome,onClick:()=>setScreen("home")},
            {id:"progress",icon:"📊",label:t.navProgress,onClick:()=>setScreen("progress")},
            {id:"tuto",icon:"❓",label:t.navTuto,onClick:()=>setShowHelp(true)},
          ].map(item=>{
            const active = screen===item.id;
            return (
              <button key={item.id} onClick={item.onClick} style={{flex:1,border:"none",cursor:"pointer",background:"transparent",
                padding:"10px 4px 8px",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
                <span style={{fontSize:22,filter:active?`drop-shadow(0 0 8px ${PAL.gold}aa)`:"none",opacity:active?1:.6}}>{item.icon}</span>
                <span style={{fontSize:11,fontWeight:700,color:active?PAL.gold:PAL.textFaint}}>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
