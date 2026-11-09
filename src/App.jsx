import React, { useState, useEffect, useRef } from "react";

/* ─── Imports des assets (images) ─────────────────────────────── */
import RURU_LOGO from "./assets/ruru_logo.webp";
import LOGO from "./assets/logo.webp";
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

/* ─── Visuels de la nouvelle page d'accueil ─────────────────── */
import HC_MONSTRO from "./assets/home_monstro.webp";
import HC_CLASSIC from "./assets/home_classic.webp";
import HC_SUDOKU from "./assets/home_sudoku.webp";
import HC_TH_TUTO from "./assets/home_th_tuto.webp";
import HC_TH_CHRONO from "./assets/home_th_chrono.webp";
import HC_TH_SPLITRACE from "./assets/home_th_splitrace.webp";
import HC_TH_DRILLS from "./assets/home_th_drills.webp";

/* ─── Visuels des modes (univers Classique) ─────────────────── */
import MD_FACE from "./assets/mode_face.webp";
import MD_REVERSE from "./assets/mode_reverse.webp";
import MD_DUEL from "./assets/mode_duel.webp";
import MD_BLIND from "./assets/mode_blind.webp";
import MD_CHRONO from "./assets/mode_chrono.webp";
import MD_CUBE3D from "./assets/mode_cube3d.webp";
import IL_CUBE3D from "./assets/il_cube3d.webp";

/* ─── Visuels des modes (univers Monstro) ───────────────────── */
import MN_FACE from "./assets/mn_face.webp";
import MN_REVERSE from "./assets/mn_reverse.webp";
import MN_DUEL from "./assets/mn_duel.webp";
import MN_BLIND from "./assets/mn_blind.webp";
import MN_CHRONO from "./assets/mn_chrono.webp";
import MN_HELP from "./assets/mn_help.webp";

/* ─── Visuels des modes (univers Sudocube) ──────────────────── */
import SD_FACE from "./assets/sd_face.webp";
import SD_REVERSE from "./assets/sd_reverse.webp";
import SD_DUEL from "./assets/sd_duel.webp";
import SD_BLIND from "./assets/sd_blind.webp";
import SD_CHRONO from "./assets/sd_chrono.webp";

/* ─── Boutons « Ma progression » ────────────────────────────── */
import PROG_PAPER from "./assets/prog_paper.webp";
import PROG_MONSTRO from "./assets/prog_monstro.webp";

/* ─── Univers Illusion ────────────────────────────────────────── */
import ILLUSION_SPRITES_white_0 from "./assets/illus_white_0.webp";
import ILLUSION_SPRITES_white_1 from "./assets/illus_white_1.webp";
import ILLUSION_SPRITES_white_2 from "./assets/illus_white_2.webp";
import ILLUSION_SPRITES_white_3 from "./assets/illus_white_3.webp";
import ILLUSION_SPRITES_white_4 from "./assets/illus_white_4.webp";
import ILLUSION_SPRITES_white_5 from "./assets/illus_white_5.webp";
import ILLUSION_SPRITES_white_6 from "./assets/illus_white_6.webp";
import ILLUSION_SPRITES_white_7 from "./assets/illus_white_7.webp";
import ILLUSION_SPRITES_white_8 from "./assets/illus_white_8.webp";
import ILLUSION_SPRITES_orange_0 from "./assets/illus_orange_0.webp";
import ILLUSION_SPRITES_orange_1 from "./assets/illus_orange_1.webp";
import ILLUSION_SPRITES_orange_2 from "./assets/illus_orange_2.webp";
import ILLUSION_SPRITES_orange_3 from "./assets/illus_orange_3.webp";
import ILLUSION_SPRITES_orange_4 from "./assets/illus_orange_4.webp";
import ILLUSION_SPRITES_orange_5 from "./assets/illus_orange_5.webp";
import ILLUSION_SPRITES_orange_6 from "./assets/illus_orange_6.webp";
import ILLUSION_SPRITES_orange_7 from "./assets/illus_orange_7.webp";
import ILLUSION_SPRITES_orange_8 from "./assets/illus_orange_8.webp";
import ILLUSION_SPRITES_yellow_0 from "./assets/illus_yellow_0.webp";
import ILLUSION_SPRITES_yellow_1 from "./assets/illus_yellow_1.webp";
import ILLUSION_SPRITES_yellow_2 from "./assets/illus_yellow_2.webp";
import ILLUSION_SPRITES_yellow_3 from "./assets/illus_yellow_3.webp";
import ILLUSION_SPRITES_yellow_4 from "./assets/illus_yellow_4.webp";
import ILLUSION_SPRITES_yellow_5 from "./assets/illus_yellow_5.webp";
import ILLUSION_SPRITES_yellow_6 from "./assets/illus_yellow_6.webp";
import ILLUSION_SPRITES_yellow_7 from "./assets/illus_yellow_7.webp";
import ILLUSION_SPRITES_yellow_8 from "./assets/illus_yellow_8.webp";
import ILLUSION_SPRITES_red_0 from "./assets/illus_red_0.webp";
import ILLUSION_SPRITES_red_1 from "./assets/illus_red_1.webp";
import ILLUSION_SPRITES_red_2 from "./assets/illus_red_2.webp";
import ILLUSION_SPRITES_red_3 from "./assets/illus_red_3.webp";
import ILLUSION_SPRITES_red_4 from "./assets/illus_red_4.webp";
import ILLUSION_SPRITES_red_5 from "./assets/illus_red_5.webp";
import ILLUSION_SPRITES_red_6 from "./assets/illus_red_6.webp";
import ILLUSION_SPRITES_red_7 from "./assets/illus_red_7.webp";
import ILLUSION_SPRITES_red_8 from "./assets/illus_red_8.webp";
import ILLUSION_SPRITES_green_0 from "./assets/illus_green_0.webp";
import ILLUSION_SPRITES_green_1 from "./assets/illus_green_1.webp";
import ILLUSION_SPRITES_green_2 from "./assets/illus_green_2.webp";
import ILLUSION_SPRITES_green_3 from "./assets/illus_green_3.webp";
import ILLUSION_SPRITES_green_4 from "./assets/illus_green_4.webp";
import ILLUSION_SPRITES_green_5 from "./assets/illus_green_5.webp";
import ILLUSION_SPRITES_green_6 from "./assets/illus_green_6.webp";
import ILLUSION_SPRITES_green_7 from "./assets/illus_green_7.webp";
import ILLUSION_SPRITES_green_8 from "./assets/illus_green_8.webp";
import ILLUSION_SPRITES_teal_0 from "./assets/illus_teal_0.webp";
import ILLUSION_SPRITES_teal_1 from "./assets/illus_teal_1.webp";
import ILLUSION_SPRITES_teal_2 from "./assets/illus_teal_2.webp";
import ILLUSION_SPRITES_teal_3 from "./assets/illus_teal_3.webp";
import ILLUSION_SPRITES_teal_4 from "./assets/illus_teal_4.webp";
import ILLUSION_SPRITES_teal_5 from "./assets/illus_teal_5.webp";
import ILLUSION_SPRITES_teal_6 from "./assets/illus_teal_6.webp";
import ILLUSION_SPRITES_teal_7 from "./assets/illus_teal_7.webp";
import ILLUSION_SPRITES_teal_8 from "./assets/illus_teal_8.webp";
import HC_ILLUSION from "./assets/home_illusion.webp";
import HC_CHESS3D from "./assets/home_chess3d.webp";
import HC_SUDOMONO from "./assets/home_sudomono.webp";
import HA_MONSTRO from "./assets/hc_art_monstro.webp";
import HA_CLASSIC from "./assets/hc_art_classic.webp";
import HA_SUDOKU from "./assets/hc_art_sudoku.webp";
import HA_ILLUSION from "./assets/hc_art_illusion.webp";
import HA_CHESS3D from "./assets/hc_art_chess3d.webp";
import HA_SUDOMONO from "./assets/hc_art_sudomono.webp";
import HA_SAVANTS from "./assets/hc_art_savants.webp";
import HA_CIVI from "./assets/hc_art_civi.webp";
import QR_APP from "./assets/qr_app.png";
import LG_MONSTRO from "./assets/logo_monstro.webp";
import LG_CLASSIC from "./assets/logo_classic.webp";
import LG_SUDOKU from "./assets/logo_sudoku.webp";
import LG_ILLUSION from "./assets/logo_illusion.webp";
import LG_CHESSCUBE from "./assets/logo_chesscube.webp";
import LG_SUDOMONO from "./assets/logo_sudomono.webp";
import LG_SAVANTS from "./assets/logo_savants.webp";
import LG_CIVI from "./assets/logo_civi.webp";
import SUDOMONO_LOGO from "./assets/sudomono_logo.webp";
import CHESS_LOGO from "./assets/chess_logo.webp";
import SM_U from "./assets/sm_u.webp";
import SM_D from "./assets/sm_d.webp";
import SM_F from "./assets/sm_f.webp";
import SM_B from "./assets/sm_b.webp";
import SM_R from "./assets/sm_r.webp";
import SM_L from "./assets/sm_l.webp";
import CH3D_U from "./assets/ch3d_u.webp";
import CH3D_D from "./assets/ch3d_d.webp";
import CH3D_F from "./assets/ch3d_f.webp";
import CH3D_B from "./assets/ch3d_b.webp";
import CH3D_R from "./assets/ch3d_r.webp";
import CH3D_L from "./assets/ch3d_l.webp";
import ILLUSION_LOGO from "./assets/illusion_logo.webp";

/* ─── Cartes Scientifique et Civilisation de l'accueil ────────── */
import HC_SAVANTS from "./assets/home_savants.webp";
import HC_CIVI from "./assets/home_civi.webp";

/* ─── Icônes des modes Illusion ───────────────────────────────── */
import IL_FACE from "./assets/il_face.webp";
import IL_REVERSE from "./assets/il_reverse.webp";
import IL_DUEL from "./assets/il_duel.webp";
import IL_BLIND from "./assets/il_blind.webp";
import IL_MOTIFS from "./assets/il_motifs.webp";
import IL_CHRONO from "./assets/il_chrono.webp";
import PROG_ILLUSION from "./assets/prog_illusion.webp";













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

const ILLUSION_SPRITES = {
  white:[ILLUSION_SPRITES_white_0,ILLUSION_SPRITES_white_1,ILLUSION_SPRITES_white_2,ILLUSION_SPRITES_white_3,ILLUSION_SPRITES_white_4,ILLUSION_SPRITES_white_5,ILLUSION_SPRITES_white_6,ILLUSION_SPRITES_white_7,ILLUSION_SPRITES_white_8],
  orange:[ILLUSION_SPRITES_orange_0,ILLUSION_SPRITES_orange_1,ILLUSION_SPRITES_orange_2,ILLUSION_SPRITES_orange_3,ILLUSION_SPRITES_orange_4,ILLUSION_SPRITES_orange_5,ILLUSION_SPRITES_orange_6,ILLUSION_SPRITES_orange_7,ILLUSION_SPRITES_orange_8],
  yellow:[ILLUSION_SPRITES_yellow_0,ILLUSION_SPRITES_yellow_1,ILLUSION_SPRITES_yellow_2,ILLUSION_SPRITES_yellow_3,ILLUSION_SPRITES_yellow_4,ILLUSION_SPRITES_yellow_5,ILLUSION_SPRITES_yellow_6,ILLUSION_SPRITES_yellow_7,ILLUSION_SPRITES_yellow_8],
  red:[ILLUSION_SPRITES_red_0,ILLUSION_SPRITES_red_1,ILLUSION_SPRITES_red_2,ILLUSION_SPRITES_red_3,ILLUSION_SPRITES_red_4,ILLUSION_SPRITES_red_5,ILLUSION_SPRITES_red_6,ILLUSION_SPRITES_red_7,ILLUSION_SPRITES_red_8],
  green:[ILLUSION_SPRITES_green_0,ILLUSION_SPRITES_green_1,ILLUSION_SPRITES_green_2,ILLUSION_SPRITES_green_3,ILLUSION_SPRITES_green_4,ILLUSION_SPRITES_green_5,ILLUSION_SPRITES_green_6,ILLUSION_SPRITES_green_7,ILLUSION_SPRITES_green_8],
  teal:[ILLUSION_SPRITES_teal_0,ILLUSION_SPRITES_teal_1,ILLUSION_SPRITES_teal_2,ILLUSION_SPRITES_teal_3,ILLUSION_SPRITES_teal_4,ILLUSION_SPRITES_teal_5,ILLUSION_SPRITES_teal_6,ILLUSION_SPRITES_teal_7,ILLUSION_SPRITES_teal_8],
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

/* Écrans « principaux » : la barre de navigation ne s'affiche que là.
   Pendant une partie (face, reverse, blind, daily, duel, chrono) elle est
   masquée pour ne jamais cacher la face du cube. */
const NAV_SCREENS = ["univers","civi","savants","tuto","progress"];
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
    illusion:"Illusion", illusionSub:"Des motifs qui trompent l'œil",
    hcIllusionSub:"Perception\net observation",
    hcChess3dSub:"Résolution complète\nchrono, duel & 3D",
    chesscube:"RUR'U' Chess", chesscubeSub:"Une pièce d'échecs géante sur chaque face",
    chesscubeRuleTitle:"♞ Le cube RUR'U' Chess", chesscubeRule:"Chaque face porte une grande pièce d'échecs (cavalier, roi, dame, fou, tour, pion). Le cube est résolu quand les 6 images sont complètes et à l'endroit, centres compris. Ici, on le résout en entier : chrono, compte à rebours, duel ou cube 3D.",
    sudomono:"Sudocube Mono", sudomonoSub:"Le même motif sur les 6 faces", hcSudomonoSub:"Résolution complète\nchrono & duel",
    sudomonoRuleTitle:"🔢 Le Sudocube Mono", sudomonoRule:"Les 6 faces portent le même motif. Le cube est résolu quand chaque face affiche les chiffres 1 à 9 dans l'ordre, tous à l'endroit. Ici, on le résout en entier : chrono, compte à rebours, duel ou cube 3D.",
    revChronoTile:"REVERSE CHRONO", revChronoSub:"Résous tout le cube avant la fin du temps", revChronoPick:"Temps limite",
    revChronoReady:"Mélange ton cube, choisis ton temps limite, puis appuie sur GO", revChronoLeft:"temps restant",
    revChronoFail:"Temps écoulé !", revChronoWin:"Résolu à temps !", revChronoWins:"Réussites",
    duelSolveSub:"Résolution complète · 1 contre 1", ctxDuelSolve:"Résolvez vos cubes ! Tape ton bouton dès que le tien est résolu",
    duelSolveRules:["Chaque joueur mélange le cube de l'autre","Au GO, résolvez votre cube en entier","Tape J'AI FINI dès que ton cube est résolu","Cube pas vraiment résolu ? Tape le temps du joueur → +30s 😈","Le plus rapide au total sur 3 manches gagne !"],
    sudo3dTitle:"SUDOCUBE 3D",
    cube3dTitle:"CLASSIQUE 3D", cube3dTile:"CUBE 3D", cube3dSub:"Résous-le au doigt, sur l'écran",
    duelSolveTile:"DUEL RÉSOLUTION", knowSolveTitle:"Résous le cube", knowChronoSub:"Résolution complète au chrono",
    randomScrambleTitle:"Mélange", randomScramble:"Mélange ton cube au hasard, comme tu veux : pas de formule de mélange à suivre.",
    ch3Move:"coup", ch3Moves:"coups", ch3Solved:"Résolu", ch3Mixed:"Mélangé", ch3Win:"Bravo, cube résolu !",
    ch3Loading:"Chargement du cube 3D…", ch3Error:"Impossible de charger le cube 3D. Vérifie ta connexion internet, puis reviens sur cette page.",
    ch3Hint:"Glisse sur le cube pour tourner une couronne · glisse à côté pour tourner autour",
    ch3Scramble:"Mélanger", ch3Undo:"Annuler", ch3Reset:"Réinitialiser", ch3Flip:"Retourner", ch3Recenter:"Recentrer", ch3Left:"Tourner le cube vers la gauche", ch3Right:"Tourner le cube vers la droite", ch3Up:"Basculer le cube vers le haut", ch3Down:"Basculer le cube vers le bas",
    hcAlgosSub:"F2L, OLL, PLL\nsimplifié ou avancé",
    alTitle:"ALGOS", alSub:"Tous les algorithmes du CFOP, avec un schéma pour chaque cas.",
    alSimple:"Simplifié", alSimpleSub:"24 algos · 2-look", alAdv:"Avancé", alAdvSub:"119 algos · complet",
    alCases:"cas", alLearned:"appris", alIsLearned:"Appris !", alMarkLearned:"Marquer comme appris", alAlt:"VARIANTE",
    alNotation:"Lire la notation",
    alNotationRows:[["R","Tourner la face de droite d'un quart de tour, vers le haut"],["R'","L'apostrophe = même face, dans l'autre sens"],["R2","Le 2 = un demi-tour"],["U · D · L · F · B","Haut · bas · gauche · avant · arrière"],["r · f","Minuscule = la face ET la tranche du milieu ensemble"],["M","Tranche du milieu, dans le sens de L"],["x · y","Tourner tout le cube (x comme R, y comme U)"]],
    alHold:"Tiens le cube jaune en haut, face verte devant, exactement comme sur le schéma. Tourne la face du haut (U) si besoin pour retrouver le cas.",
    alHoldF2l:"Jaune en haut, vert devant : la paire va dans l'emplacement avant-droit. Les cases grises n'ont pas d'importance.",
    alIntro_f2l:"F2L : on place ensemble un coin du bas et son arête pour finir les deux premières couronnes.",
    alIntro_oll:"OLL : on oriente la dernière couronne pour que toute la face du haut soit jaune.",
    alIntro_pll:"PLL : on permute les pièces du haut pour finir le cube. Les flèches montrent où va chaque pièce.",
    alF2lS1:"Insertions directes", alF2lS1n:"La paire est déjà prête : un seul geste pour l'insérer.",
    alF2lS2:"Paires à préparer", alF2lS2n:"Les cas les plus fréquents : on forme la paire en haut, puis on l'insère.",
    alOllS1:"Étape 1 · la croix jaune", alOllS1n:"Regarde seulement les arêtes : point, petit L ou ligne. Les coins gris n'ont pas d'importance.",
    alOllS2:"Étape 2 · la face jaune", alOllS2n:"La croix est faite : compte les coins jaunes et choisis parmi ces 7 cas.",
    alPllS1:"Étape 1 · les coins", alPllS1n:"Cherche les « phares » (2 coins de même couleur sur un côté) : mets-les à gauche et fais la T-perm. Pas de phares : Y-perm.",
    alPllS2:"Étape 2 · les arêtes", alPllS2n:"Les coins sont placés : il ne reste que 4 cas d'arêtes.",
    alE_point:"Point", alE_L:"Petit L", alE_ligne:"Ligne", alPhares:"Phares", alNoeud:"Nœud papillon", alPhares2:"Phares à gauche", alDiag:"Diagonale",
    alGroups:{ basic:"Insertions directes", topTop:"Coin et arête en haut", cornerDown:"Coin en bas", edgeDown:"Arête en bas", inSlot:"Les deux dans l'emplacement",
      ocll:"Croix déjà faite", corners:"Coins déjà orientés", dot:"Point", line:"Ligne", t:"T", p:"P", square:"Carré", lightning:"Éclair", fish:"Poisson",
      knight:"Cavalier", awkward:"Bizarre", c:"C", w:"W", smallL:"Petit L",
      edges:"Arêtes seulement", adj:"Échange de coins voisins", diag:"Échange en diagonale" },
    classicSub:"Ton cube 3×3 à toi", monstroSub:"54 monstres rigolos", sudoSub:"Chiffres 1 à 9",
    challenge:"CHALLENGE", challengeSub:"Reproduis la face au chrono",
    faceTile:"SOLO", faceTileSub:"Reproduis la face au chrono",
    motifs:"MOTIFS", motifsSub:"Lettres et formes en deux couleurs",
    ctxMotifs:"Reproduis la forme affichée sur ton cube",
    reverseTile:"REVERSE", reverseTileSub:"Bats le compte à rebours",
    duel:"DUEL", duelSub:"1 contre 1 · 5 manches",
    blind:"BLIND", blindSub:"Mémorise puis reproduis à l'aveugle",
    chrono:"CHRONO CUBE", chronoSub:"Résolution complète",
    splitRace:"60S SPLIT RACE", splitRaceSub:"La résolution en étapes chronométrées",
    splitRaceTagline:"Termine ta résolution étape par étape. Tu as 60 secondes de temps de résolution au total.",
    splitRaceScramble:"Scramble", splitRaceNewScramble:"🔀 Nouveau scramble",
    stgCross:"CROSS", stgFirstLayer:"1ère COURONNE", stgF2l:"F2L", stgOll:"CROIX JAUNE", stgPll:"FACE JAUNE",
    splitRaceTimeLeft:"Temps restant", splitRaceCurrentSplit:"Split en cours",
    splitRaceComplete:"TERMINER", splitRaceStageDone:"TERMINÉ",
    splitRacePB:"Record", splitRaceVsPB:"vs record", splitRaceTotalUsed:"Temps utilisé",
    splitRaceAnalyze:"🔍 ANALYSER", splitRaceNextStage:"ÉTAPE SUIVANTE →", splitRaceSeeResults:"VOIR LE RÉSULTAT 🏁",
    splitRaceAnalysisTitle:"ANALYSE", splitRaceCurrent:"Actuel", splitRaceAverage:"Moyenne",
    splitRaceDiffPB:"Écart vs record", splitRaceShare:"Part du temps total", splitRaceNewPB:"🏆 NOUVEAU RECORD !",
    splitRaceRunComplete:"COURSE TERMINÉE 🏁", splitRaceSplits:"Splits", splitRaceTotal:"TOTAL",
    splitRaceBestSplit:"Meilleur split", splitRaceLongestPhase:"Étape la plus longue",
    splitRaceShareOf:"part du temps", splitRaceBestTotal:"Meilleur total",
    splitRaceRetry:"↻ Rejouer", splitRaceNewScrambleBtn:"🔀 Nouveau scramble", splitRaceExit:"← Quitter",
    splitRaceTimeOut:"⏰ TEMPS ÉCOULÉ", splitRaceLastCompleted:"Dernière étape terminée",
    splitRaceNotCompleted:"Non terminé", splitRaceExitConfirm:"Quitter la course en cours ? Ta progression sera perdue.",
    splitRaceCtxReady:"Mélange ton cube, puis appuie sur GO", splitRaceCtxSolving:"Résous cette étape, puis appuie sur TERMINER",
    splitRaceRuns:"Courses", splitRaceCompletedRuns:"Terminées",
    drillTitle:"Entraînement par étape", drillSub:"Isole une étape et répète-la",
    drillHint:"Résous ton cube normalement jusqu'à cette étape, puis appuie sur GO",
    drillPB:"Record", drillReps:"Tours", drillWarmup:"échauffement", drillCtxWarmup:"Résous cette étape pour continuer",
    drillSessionReps:"Cette session", drillAvg5:"Moy. 5", drillNext:"↻ Nouveau tour", drillRanking:"Classement",
    drillProgress:"Progression", drillProgressSub:"Toutes les étapes, tes meilleurs temps",
    drillSumBests:"Somme des meilleurs temps", drillWeakest:"À travailler", drillTotalReps:"Tours au total",
    hcDrill:"ENTRAÎNEMENT", hcDrillSub:"Isole une étape et progresse",
    daily:"DÉFI DU JOUR", dailyDone:"Fait en", dailyTodo:"Même face pour tous · 1 essai chrono",
    dailyLocked:"🔒 Défi déjà relevé aujourd'hui !", dailyOnce:"Un seul essai par jour — reviens demain pour une nouvelle face 🌙",
    dailyNext:"Prochain défi dans", dailyDoneShort:"Fait ✓",
    spaceStart:"⌨️ Barre espace = démarrer", spaceStop:"⌨️ ou barre espace",
    tapAnywhere:"👆 Touche l'écran pour arrêter",
    record:"Record", games:"Parties", streak:"Série",
    face:"⏱️ Face", reverse:"⏳ Reverse", blindMode:"🙈 Blind",
    instTitle:"Installe l'appli sur ton téléphone", instSub:"Ta progression et tes records restent bien gardés, et l'appli s'ouvre en un geste.",
    instBtn:"📲 Installer l'appli", instHow:"Comment l'installer ?",
    instIos:["1. Touche le bouton Partager ⬆️ en bas de Safari (ou en haut sur iPad).","2. Fais défiler et choisis « Sur l'écran d'accueil ».","3. Touche « Ajouter » : l'icône RUR'U' apparaît avec tes autres applis."],
    instAndroid:["1. Touche le menu ⋮ en haut à droite de Chrome.","2. Choisis « Installer l'application » (ou « Ajouter à l'écran d'accueil »).","3. Confirme : l'icône RUR'U' apparaît avec tes autres applis."],
    go:"🚀 GO !", replay:"↻ Rejouer", menu:"← Accueil", chronoPickCube:"CHOISIS TON CUBE",
    tapGrid:"👆 Tape la grille pour arrêter",
    tapCube:"👆 Tape le cube quand c'est résolu",
    cubeReady:"Chrono résolution complète", cubePlay:"Résous tout ton cube !", cubeDone:"Bravo ! 🎉",
    timeUp:"⏰ Temps écoulé !", success:"✓ Réussi !", newRecord:"⭐ NOUVEAU RECORD !",
    objectives:"🎖️ Objectifs", obj:["Moins de 60s","Moins de 45s","Moins de 30s","Moins de 15s"],
    objHint:"Améliore ton temps et débloque les paliers !",
    shareBtn:"Partager mon résultat", shareCopy:"Copier l'image", shareCopied:"Copié ✓", shareSaveImg:"Enregistrer",
    shareImgCopied:"Image et texte copiés : colle-les dans ton message. Si seule l'image apparaît, touche « Copier le texte et le lien » et colle aussi.",
    shareCopyTxt:"🔗 Copier le texte et le lien de l'appli", shareTxtCopied:"Texte et lien copiés : colle-les dans ton message.",
    shareText:"J'ai résolu le défi du jour RUR'U' en {t} ! 🧩 À toi de jouer :",
    shareHint:"Ton résultat part en image. La légende est copiée : tu n'as qu'à la coller.",
    shareSaved:"Image enregistrée et texte copié. Publie-la où tu veux !",
    yourTime:"Ton temps",
    cardSolvedIn:"J'ai résolu le défi du jour en", cardBeatMe:"À toi de jouer : bats mon temps !", cardScan:"Scanne pour jouer", cardFree:"Gratuit · sans téléchargement",
    objShort:["< 60s","< 45s","< 30s","< 15s"],
    seeMore:"Voir plus", seeLess:"Réduire", bestTime:"Meilleur temps",
    prepCube:"Prépare ton cube",
    timesEvol:"📈 Évolution des temps", lastGames:"🕐 Dernières parties",
    chartHint:"🎮 Joue au moins 2 parties pour voir ta courbe !",
    duelRules:["Chaque joueur mélange le cube de l'autre","Au GO, l'app montre une face","Reproduis-la à fond la vitesse","Tape J'AI FINI quand tu es prêt","Face fausse ? Tape le temps du joueur → +30s 😈","Le plus rapide sur 5 manches gagne !"],
    round:"Manche", iDone:"J'AI FINI", wins:"gagne !", tie:"🤝 Égalité !",
    finalScore:"🏁 Score final", nextRound:"Manche suivante →",
    wins:"GAGNE !", whoDuels:"Qui s'affronte ?", duelSub2:"Choisis les deux joueurs de ce duel.",
    playerOne:"Joueur 1", playerTwo:"Joueur 2", startDuel:"Lancer le duel",
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
    obStart:"GO !", obSkip:"Passer",
    howTo:"❓ Comment jouer", howToTitle:"Comment jouer",
    whoPlays:"Qui joue ?", profilesSub:"Chacun garde ses records et son défi du jour.",
    changePlayer:"changer", addProfile:"Ajouter un joueur", createProfile:"Créer",
    firstName:"Prénom", confirmDel:"Supprimer", cancel:"Annuler",
    profilesFoot:"Les profils sont enregistrés sur cet appareil uniquement.",
    tabMe:"Moi", tabFamily:"👨‍👩‍👧 Famille",
    famNobody:"Personne n'a encore joué à ce mode.",
    famFoot:"Meilleur temps de chaque joueur, tous univers séparés. La couronne revient au plus rapide.",
    progressTitle:"Ma progression", progressSub:"tous les modes",
    progGames:"parties", progModes:"modes joués", progBest:"meilleur temps",
    progPlay:"partie", progPlays:"parties", progNever:"Jamais joué — lance-toi !",
    progAvg:"Moyenne des 5 dernières :", progWin:"victoire", progWins:"victoires",
    progFoot:"Touche un mode pour y rejouer. La courbe montre tes 10 dernières parties : plus elle descend, plus tu progresses.",
    myProgress:"📊 Ma progression",
    helpCardTitle:"Comment jouer ?", helpCardSub:"Découvre les règles du jeu",
    hcChooseCube:"CHOISIS TON CUBE", hcDiscover:"CONTENU INTERACTIF", hcPlay:"JOUER", hcConsult:"CONSULTER",
    hcTraining:"ENTRAÎNEMENT",
    hcMonstroSub:"Amuse-toi\net progresse", hcClassicSub:"Résous la face\nau chrono", hcSudoSub:"Logique\net réflexion",
    hcTuto:"RUR'U' TUTORIEL", hcTutoSub:"Apprends à jouer pas à pas",
    hcChrono:"RUR'U' CHRONO", hcChronoSub:"Bats tes records",
    hcSplitRace:"60S SPLIT RACE", hcSplitRaceSub:"Résolution en étapes chronométrées",
    hcSavants:"RUR'U' SCIENTIFIQUE", hcSavantsSub:"Découvre les sciences\nautrement",
    hcCivi:"CIVILISATION ANCIENNE", hcCiviSub:"Voyage\ndans le temps",
    hcShopText:"Découvre le Monstrocube et le Sudocube sur notre site.",
    hcShopBtn:"Commander sur rurucube.com",
    hcTagline:"RÉFLÉCHIR · JOUER · PROGRESSER",
    navHome:"Accueil", navTuto:"Comment jouer",
    tutoIntro:"Une méthode débutant, chapitre par chapitre. Prends ton cube et suis le rythme — tu peux mettre en pause quand tu veux.",
    tutoStepOf:"Étape {n} sur {total}", tutoVideo:"La vidéo", tutoPrev:"Précédente", tutoNext:"Étape suivante",
    tutoHold:"Comment tenir le cube", tutoGoal:"Ton but", tutoCases:"Les cas possibles", tutoPieces:"Les pièces", tutoMoves:"Chaque face a une lettre",
    tutoNotation:"fr", tutoTryMoves:"Touche une lettre : le cube fait le mouvement", tutoReset:"Remettre à zéro",
    tutoNotaFr:"Version française", tutoNotaEn:"Version anglaise", tutoPrimeTxt:"rotation dans le sens inverse", tutoHalfTxt:"demi-tour (180°)",
    tutoFaceNames:{ R:"face droite", L:"face gauche", U:"face du haut", D:"face du bas", F:"face avant", B:"face arrière" },
    tutoSteps:[
      { goal:"Connaître les 3 sortes de pièces et la lettre de chaque face.",
        cases:{ edges:{title:"Les arêtes", text:"Pièces à 2 couleurs, au milieu des bords du cube. Il y en a 12."},
                corners:{title:"Les coins", text:"Pièces à 3 couleurs, dans les coins. Il y en a 8."},
                centers:{title:"Les centres", text:"Pièces à 1 couleur, au centre de chaque face. Il y en a 6. Ils ne bougent jamais : c'est eux qui donnent la couleur de leur face. Le blanc est opposé au jaune, l'orange au rouge, le vert au bleu."} },
        moves:[["R","Droite"],["L","Gauche"],["U","Haute (le dessus)"],["D","Basse (le dessous)"],["F","Avant (face à toi)"],["B","Postérieure (l'arrière)"]],
        notes:["Une lettre seule = un quart de tour dans le sens des aiguilles d'une montre, quand tu regardes cette face en face. Garde toujours le cube face à toi pendant une formule."] },
      { hold:"Le centre blanc sur la face Haute (H).",
        goal:"Une croix blanche dessus, et chaque arête de la croix de la même couleur que le centre sur le côté.",
        intro:["Fais les arêtes dans cet ordre : bleu, orange, vert, rouge.","Garde le blanc en haut. Fais descendre l'arête blanc-bleu sur la face Basse (B), puis tourne B jusqu'à ce qu'elle soit juste sous le centre bleu. Tiens le cube pour avoir le centre bleu à droite (D)."],
        cases:{ bas:{title:"L'arête est sous le centre bleu", text:"Tourne la face Droite (D) jusqu'à ce que l'arête arrive en haut, au-dessus du centre bleu."},
                milieu:{title:"L'arête est sur la face Droite", text:"Même chose : tourne D jusqu'à ce qu'elle arrive en haut."},
                retournee:{title:"Elle est en haut, mais à l'envers", text:"Le blanc est sur le côté : fais cette formule, centre bleu toujours à droite."} },
        tips:["Si l'arête est bien placée, tourne le cube pour mettre le centre orange à droite et recommence. Quand ta croix ressemble au but, passe à l'étape 3 !"] },
      { hold:"La croix blanche sur la face Haute (H).",
        goal:"Toute la face blanche, et la rangée du haut de chaque côté de la bonne couleur.",
        intro:["Les coins ont un côté blanc et 2 autres couleurs. Si le coin est sur la face Basse (B), tourne B jusqu'à ce qu'il soit juste sous sa place (devant à droite). Il ressemble alors à l'un des 3 premiers cas."],
        cases:{ droite:{title:"Le blanc regarde à droite", text:"Fais la formule 1 fois."},
                dessous:{title:"Le blanc regarde en bas", text:"Fais la formule 3 fois."},
                devant:{title:"Le blanc regarde vers toi", text:"Fais la formule 5 fois."},
                haut:{title:"Le coin est en haut, mal placé", text:"Fais-le descendre sur la face Basse avec cette formule, puis tourne B pour le mettre sous sa place."} },
        tips:["En résumé : répète la formule jusqu'à ce que le coin soit bien placé. Fais pareil pour les 4 coins blancs, et tu auras fini un tiers du cube !"] },
      { hold:"Retourne le cube : la face blanche complète est maintenant en Bas (B).",
        goal:"Les deux premiers étages : le blanc et la rangée du milieu.",
        intro:["Tourne la face Haute (H) jusqu'à ce que la couleur avant d'une arête du haut (sans jaune) soit la même que le centre en dessous : ça fait une ligne verticale.","La couleur sur le dessus de cette arête indique de quel côté elle doit aller."],
        cases:{ droite:{title:"L'arête doit aller à droite", text:"Ici, le dessus est rouge et le centre rouge est à droite."},
                gauche:{title:"L'arête doit aller à gauche", text:"Ici, le dessus est orange et le centre orange est à gauche."},
                coincee:{title:"Une arête est au milieu, mais mal placée", text:"Fais n'importe laquelle des deux formules : elle remonte en haut, puis place-la comme d'habitude."} },
        tips:["Continue jusqu'à ce que les 4 arêtes du milieu soient en place : tu as fait les deux tiers du chemin !"] },
      { hold:"Le jaune sur la face Haute (H).",
        goal:"Une croix jaune sur le dessus. Les côtés des arêtes n'ont pas encore besoin d'être justes.",
        intro:["Regarde le dessus et trouve la configuration qui ressemble à ton cube. Si tu as déjà la croix, passe à l'étape suivante."],
        cases:{ point:{title:"Juste le centre jaune", text:"Fais cette formule, puis compare de nouveau avec les deux cas suivants."},
                L:{title:"Un L", text:"Tiens le L en haut à gauche, comme ici, puis fais la formule."},
                ligne:{title:"Une ligne", text:"Tiens la ligne à l'horizontale, comme ici, puis fais la formule."} } },
      { hold:"La croix jaune sur la face Haute (H). Fais très attention à l'orientation du cube pour ne pas perdre de temps !",
        goal:"La croix jaune, avec chaque arête de la même couleur que le centre sur le côté.",
        intro:["Tourne H jusqu'à ce que 2 arêtes soient bien alignées avec leur centre. Deux cas peuvent se présenter."],
        cases:{ cotes:{title:"2 arêtes voisines sont bien placées", text:"Mets-les derrière et à gauche (cube vu de derrière ici), puis fais la chaise : il se lève (D), part très loin (H H), sa chaise tombe (Di), il revient (Hi), la relève (D), se met dessus (Hi), se rassoit (Di). Il reste juste Hi."},
                opposees:{title:"2 arêtes opposées sont bien placées", text:"Fais la chaise une fois : tu te retrouves dans le cas d'au-dessus."} } },
      { hold:"La croix jaune bien alignée en haut (H).",
        goal:"Chaque coin à sa place : ses 3 couleurs vont avec les centres autour, même s'il est mal tourné.",
        intro:["Il faut placer un coin déjà bien placé devant à droite, comme ici."],
        cases:{ amis:{title:"La technique des amis", text:"Ses copains à gauche montent (Gi), il va les voir (H), ses copains à droite montent (D), il va les voir (Hi), ceux de gauche redescendent (G), il revient leur dire au revoir (H), ceux de droite redescendent (Di), et il revient à sa place (Hi). Recommence jusqu'à ce que les 4 coins soient à leur place."} },
        tips:["Si au départ aucun coin n'est à sa place, fais les amis une fois depuis n'importe où : il t'en restera un juste."] },
      { hold:"Le jaune en haut (H). Le coin à tourner est toujours devant toi, en haut à droite.",
        goal:"Le cube résolu ! C'est la même formule que pour remonter les coins blancs (étape 3) : Di Bi D B.",
        intro:["1. Tiens le cube face à toi, avec le coin à tourner en haut à droite.",
               "2. Fais Di Bi D B, encore et encore, jusqu'à ce que le jaune de ce coin soit sur le dessus (2 ou 4 fois).",
               "3. Dès que le jaune apparaît sur le dessus, termine bien la formule jusqu'au B final, puis fais H : le coin suivant arrive en haut à droite.",
               "4. Recommence Di Bi D B pour tous les coins, sans jamais tourner le cube en entier.",
               "Voici un exemple complet, coin par coin :"],
        cases:{ c1:{title:"1er coin : 4 fois, puis H", text:"Le jaune regarde vers toi : formule × 4, puis H."},
                c2:{title:"2e coin : 4 fois, puis H", text:"Le bas du cube a l'air tout mélangé : c'est normal, continue !"},
                c3:{title:"3e coin : 2 fois, puis H", text:"Le jaune regarde à droite : formule × 2, puis H."},
                c4:{title:"4e coin : 2 fois, puis H", text:"Après ce dernier coin, tout se remet en place : le cube est résolu !"} },
        tips:["Après le premier coin, le cube a l'air très mélangé. Pas d'inquiétude, continue : tout revient quand les 4 coins sont faits. Ne tourne jamais le cube entier entre deux formules !",
              "Astuce de pro : au lieu de faire la formule 4 fois, fais 2 fois l'inverse : Bi Di B D.",
              "Bravo, tu as résolu ton cube ! Entraîne-toi maintenant pour aller plus vite."] },
    ],
    tutoSoon:"Bientôt disponible", tutoSoonLong:"Cette vidéo arrive très bientôt. Reviens dans une prochaine mise à jour !",
    tutoChapters:[
      { t:"Faites connaissance avec votre cube", s:"Les pièces et les lettres des mouvements" },
      { t:"La croix blanche", s:"Le blanc en haut, arêtes bien alignées" },
      { t:"Les coins blancs", s:"Finir l'étage blanc" },
      { t:"L'étage du milieu", s:"Le blanc passe en bas" },
      { t:"La croix jaune", s:"1er pas de l'étage du haut" },
      { t:"La croix jaune bien alignée", s:"La technique de la chaise" },
      { t:"Les coins à leur place", s:"La technique des amis" },
      { t:"Tourner les coins jaunes", s:"Un coin à la fois · la dernière étape" },
    ],
    themeLight:"Thème clair", themeDark:"Thème sombre",
    civiComingTitle:"Bientôt disponible !", civiComingSub:"On prépare ce nouveau monde avec soin. Reviens vite pour découvrir Civilisation Ancienne.",
    htGeneral:"Le principe", htGeneralTxt:"L'appli te montre une face de cube. Tu dois la reproduire sur ton cube physique le plus vite possible. Le chrono s'arrête quand tu tapes la grille. Quatre modes t'attendent ci-dessous.",
    htFace:"🎯 Solo", htFaceTxt:"Reproduis la face affichée le plus vite possible. Le chrono s'arrête dès que tu tapes la grille. Simple, rapide, parfait pour battre ton record.",
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
    ctxDailyReady:"Un seul essai aujourd'hui. Prêt ?",
    step:"Étape", nextStep:"Suivant →",
    savants:"COFFRET DES SCIENTIFIQUES", savantsSub:"6 génies · 48 symboles",
    savantsIntro:"Chaque face du cube est incarnée par un génie entouré de ses 8 symboles. Touche une carte pour l'ouvrir, puis un symbole pour découvrir sa signification — et le portrait au centre pour en savoir plus sur le savant.",
    symbols:"symboles", seeOnSite:"🌐 Voir sur rurucube.com",
    savantsTile:"LE SAVOIR", savantsTileSub:"Décode les 6 faces des génies",
    civi:"Civilisation Ancienne", tuto:"Tutoriel", civiSub:"6 civilisations, 8 symboles chacune", civiIntro:"🌍 Chaque civilisation cache 8 symboles gravés dans la pierre. Touche une carte pour l'ouvrir, puis un symbole pour découvrir sa signification — et l'emblème au centre pour en savoir plus sur la civilisation.", kidsLabel:"🧒 Enfant", teenLabel:"🎓 Ado & Adulte", ageToggleHint:"Choisis ton niveau de lecture : définitions courtes et simples pour les enfants, complètes pour les ados et adultes.",
    savantsTapHint:"Touche un symbole pour afficher sa définition",
    bioBirth:"Naissance", bioDeath:"Décès", bioPath:"Parcours", bioVision:"Vision",
    chooseGame:"Choisis ton univers", switchCube:"Changer de cube",
    uni1:"Réflexion & Rapidité", uni1Sub:"Trois cubes, un chrono",
    uni2:"Réflexion & Éducation", uni2Sub:"Apprends en jouant",
    uni3:"Apprendre & Progresser", uni3Sub:"Prends ton cube en main, puis mesure tes progrès",
    speedFace:"SPEED FACE", speedFaceSub:"Joue avec ton propre cube 3×3",
    scienceCube:"LE CUBE SCIENTIFIQUE", scienceCubeSub:"6 génies · 48 symboles à découvrir",
    nudge:"Tu adores ce défi ? Le Monstrocube rend le jeu encore plus fun 🟢",
    nudgeBtn:"Découvrir →",
  },
  en: {
    slogan:"Order born from chaos",
    chooseCube:"Your cube", chooseMode:"Your challenge",
    classic:"Classic", monstro:"Monstro", sudo:"Sudo",
    illusion:"Illusion", illusionSub:"Patterns that fool the eye",
    hcIllusionSub:"Perception\nand focus",
    hcChess3dSub:"Full solve\ntimer, duel & 3D",
    chesscube:"RUR'U' Chess", chesscubeSub:"A giant chess piece on every face",
    chesscubeRuleTitle:"♞ The RUR'U' Chess cube", chesscubeRule:"Each face carries a big chess piece (knight, king, queen, bishop, rook, pawn). The cube is solved when all 6 pictures are complete and upright, centres included. Here you solve it completely: timer, countdown, duel or 3D cube.",
    sudomono:"Sudocube Mono", sudomonoSub:"The same pattern on all 6 faces", hcSudomonoSub:"Full solve\ntimer & duel",
    sudomonoRuleTitle:"🔢 The Sudocube Mono", sudomonoRule:"All 6 faces carry the same pattern. The cube is solved when every face shows the digits 1 to 9 in order, all upright. Here you solve it completely: timer, countdown, duel or 3D cube.",
    revChronoTile:"REVERSE TIMER", revChronoSub:"Solve the whole cube before time runs out", revChronoPick:"Time limit",
    revChronoReady:"Scramble your cube, pick your time limit, then tap GO", revChronoLeft:"time left",
    revChronoFail:"Time's up!", revChronoWin:"Solved in time!", revChronoWins:"Successes",
    duelSolveSub:"Full solve · 1 vs 1", ctxDuelSolve:"Solve your cubes! Tap your button as soon as yours is solved",
    duelSolveRules:["Each player scrambles the other's cube","At GO, solve your whole cube","Tap I'M DONE as soon as your cube is solved","Not really solved? Tap the player's time → +30s 😈","Fastest total over 3 rounds wins!"],
    sudo3dTitle:"SUDOCUBE 3D",
    cube3dTitle:"CLASSIC 3D", cube3dTile:"3D CUBE", cube3dSub:"Solve it with your finger, on screen",
    duelSolveTile:"SOLVE DUEL", knowSolveTitle:"Solve the cube", knowChronoSub:"Timed full solve",
    randomScrambleTitle:"Scramble", randomScramble:"Scramble your cube randomly, any way you like: no scramble sequence to follow.",
    ch3Move:"move", ch3Moves:"moves", ch3Solved:"Solved", ch3Mixed:"Scrambled", ch3Win:"Well done, cube solved!",
    ch3Loading:"Loading the 3D cube…", ch3Error:"Couldn't load the 3D cube. Check your internet connection, then come back to this page.",
    ch3Hint:"Swipe on the cube to turn a layer · swipe beside it to look around",
    ch3Scramble:"Scramble", ch3Undo:"Undo", ch3Reset:"Reset", ch3Flip:"Flip", ch3Recenter:"Recenter", ch3Left:"Turn the cube left", ch3Right:"Turn the cube right", ch3Up:"Tilt the cube up", ch3Down:"Tilt the cube down",
    hcAlgosSub:"F2L, OLL, PLL\nbeginner or full",
    alTitle:"ALGS", alSub:"Every CFOP algorithm, with a diagram for each case.",
    alSimple:"Beginner", alSimpleSub:"24 algs · 2-look", alAdv:"Advanced", alAdvSub:"119 algs · full",
    alCases:"cases", alLearned:"learned", alIsLearned:"Learned!", alMarkLearned:"Mark as learned", alAlt:"ALTERNATIVE",
    alNotation:"How to read the notation",
    alNotationRows:[["R","Turn the right face a quarter turn, upwards"],["R'","Apostrophe = same face, the other way"],["R2","2 = a half turn"],["U · D · L · F · B","Up · down · left · front · back"],["r · f","Lowercase = the face AND the middle slice together"],["M","Middle slice, turned like L"],["x · y","Rotate the whole cube (x like R, y like U)"]],
    alHold:"Hold the cube yellow on top, green in front, exactly as in the diagram. Turn the top face (U) if needed to find the case.",
    alHoldF2l:"Yellow on top, green in front: the pair goes into the front-right slot. Grey stickers don't matter.",
    alIntro_f2l:"F2L: pair a bottom corner with its edge to finish the first two layers.",
    alIntro_oll:"OLL: orient the last layer so the whole top face is yellow.",
    alIntro_pll:"PLL: permute the top pieces to finish the cube. Arrows show where each piece goes.",
    alF2lS1:"Direct inserts", alF2lS1n:"The pair is already built: one move sequence inserts it.",
    alF2lS2:"Pairs to build", alF2lS2n:"The most common cases: build the pair on top, then insert it.",
    alOllS1:"Step 1 · yellow cross", alOllS1n:"Look at the edges only: dot, small L or line. Grey corners don't matter.",
    alOllS2:"Step 2 · yellow face", alOllS2n:"The cross is done: count the yellow corners and pick one of these 7 cases.",
    alPllS1:"Step 1 · corners", alPllS1n:"Look for “headlights” (2 matching corners on one side): put them on the left and do the T-perm. No headlights: Y-perm.",
    alPllS2:"Step 2 · edges", alPllS2n:"Corners are placed: only 4 edge cases left.",
    alE_point:"Dot", alE_L:"Small L", alE_ligne:"Line", alPhares:"Headlights", alNoeud:"Bowtie", alPhares2:"Headlights left", alDiag:"Diagonal",
    alGroups:{ basic:"Direct inserts", topTop:"Corner and edge on top", cornerDown:"Corner in the bottom", edgeDown:"Edge in the slot", inSlot:"Both in the slot",
      ocll:"Cross already done", corners:"Corners already oriented", dot:"Dot", line:"Line", t:"T", p:"P", square:"Square", lightning:"Lightning", fish:"Fish",
      knight:"Knight", awkward:"Awkward", c:"C", w:"W", smallL:"Small L",
      edges:"Edges only", adj:"Adjacent corner swap", diag:"Diagonal swap" },
    classicSub:"Your own 3×3 cube", monstroSub:"54 funny monsters", sudoSub:"Digits 1 to 9",
    challenge:"CHALLENGE", challengeSub:"Match the face against the clock",
    faceTile:"SOLO", faceTileSub:"Match the face against the clock",
    motifs:"PATTERNS", motifsSub:"Letters and shapes in two colours",
    ctxMotifs:"Copy the shape shown onto your cube",
    reverseTile:"REVERSE", reverseTileSub:"Beat the countdown",
    duel:"DUEL", duelSub:"1 vs 1 · 5 rounds",
    blind:"BLIND", blindSub:"Memorize it, then rebuild it blind",
    chrono:"CUBE TIMER", chronoSub:"Full solve",
    splitRace:"60S SPLIT RACE", splitRaceSub:"Step-by-step timed solve",
    splitRaceTagline:"Complete the solve step by step. You have 60 seconds of solving time in total.",
    splitRaceScramble:"Scramble", splitRaceNewScramble:"🔀 New scramble",
    stgCross:"CROSS", stgFirstLayer:"FIRST LAYER", stgF2l:"F2L", stgOll:"YELLOW CROSS", stgPll:"YELLOW FACE",
    splitRaceTimeLeft:"Time left", splitRaceCurrentSplit:"Current split",
    splitRaceComplete:"COMPLETE", splitRaceStageDone:"DONE",
    splitRacePB:"PB", splitRaceVsPB:"vs PB", splitRaceTotalUsed:"Total used",
    splitRaceAnalyze:"🔍 ANALYZE", splitRaceNextStage:"NEXT STAGE →", splitRaceSeeResults:"SEE RESULTS 🏁",
    splitRaceAnalysisTitle:"ANALYSIS", splitRaceCurrent:"Current", splitRaceAverage:"Average",
    splitRaceDiffPB:"Difference vs PB", splitRaceShare:"Share of total time", splitRaceNewPB:"🏆 NEW PB!",
    splitRaceRunComplete:"RUN COMPLETE 🏁", splitRaceSplits:"Splits", splitRaceTotal:"TOTAL",
    splitRaceBestSplit:"Best split", splitRaceLongestPhase:"Longest phase",
    splitRaceShareOf:"share of total", splitRaceBestTotal:"Best total",
    splitRaceRetry:"↻ Play again", splitRaceNewScrambleBtn:"🔀 New scramble", splitRaceExit:"← Exit",
    splitRaceTimeOut:"⏰ TIME OUT", splitRaceLastCompleted:"Last completed stage",
    splitRaceNotCompleted:"Not completed", splitRaceExitConfirm:"Exit the current run? Your progress will be lost.",
    splitRaceCtxReady:"Scramble your cube, then press GO", splitRaceCtxSolving:"Solve this stage, then tap COMPLETE",
    splitRaceRuns:"Runs", splitRaceCompletedRuns:"Completed",
    drillTitle:"Stage training", drillSub:"Isolate one stage and drill it",
    drillHint:"Solve your cube normally up to this stage, then press GO",
    drillPB:"PB", drillReps:"Reps", drillWarmup:"warm-up", drillCtxWarmup:"Solve this stage to continue",
    drillSessionReps:"This session", drillAvg5:"Avg 5", drillNext:"↻ New rep", drillRanking:"Ranking",
    drillProgress:"Progress", drillProgressSub:"Every stage, your best times",
    drillSumBests:"Sum of best times", drillWeakest:"Needs work", drillTotalReps:"Total reps",
    hcDrill:"TRAINING", hcDrillSub:"Isolate a stage and improve",
    daily:"DAILY CHALLENGE", dailyDone:"Done in", dailyTodo:"Same face for everyone · 1 timed try",
    dailyLocked:"🔒 Today's challenge is done!", dailyOnce:"One try per day — come back tomorrow for a new face 🌙",
    dailyNext:"Next challenge in", dailyDoneShort:"Done ✓",
    spaceStart:"⌨️ Spacebar = start", spaceStop:"⌨️ or spacebar",
    tapAnywhere:"👆 Tap the screen to stop",
    record:"Best", games:"Games", streak:"Streak",
    face:"⏱️ Face", reverse:"⏳ Reverse", blindMode:"🙈 Blind",
    instTitle:"Install the app on your phone", instSub:"Your progress and records stay safe, and the app opens in one tap.",
    instBtn:"📲 Install the app", instHow:"How to install it?",
    instIos:["1. Tap the Share button ⬆️ at the bottom of Safari (top on iPad).","2. Scroll and choose \"Add to Home Screen\".","3. Tap \"Add\": the RUR'U' icon shows up with your other apps."],
    instAndroid:["1. Tap the ⋮ menu at the top right of Chrome.","2. Choose \"Install app\" (or \"Add to Home screen\").","3. Confirm: the RUR'U' icon shows up with your other apps."],
    go:"🚀 GO!", replay:"↻ Replay", menu:"← Home", chronoPickCube:"PICK YOUR CUBE",
    tapGrid:"👆 Tap the grid to stop",
    tapCube:"👆 Tap the cube when solved",
    cubeReady:"Full solve timer", cubePlay:"Solve your whole cube!", cubeDone:"Well done! 🎉",
    timeUp:"⏰ Time's up!", success:"✓ Done!", newRecord:"⭐ NEW RECORD!",
    objectives:"🎖️ Goals", obj:["Under 60s","Under 45s","Under 30s","Under 15s"],
    objHint:"Beat your time and unlock the tiers!",
    shareBtn:"Share my result", shareCopy:"Copy image", shareCopied:"Copied ✓", shareSaveImg:"Save",
    shareImgCopied:"Image and text copied: paste them into your message. If only the image shows up, tap \"Copy text and link\" and paste that too.",
    shareCopyTxt:"🔗 Copy text and app link", shareTxtCopied:"Text and link copied: paste them into your message.",
    shareText:"I solved the RUR'U' daily challenge in {t}! 🧩 Your turn:",
    shareHint:"Your result is shared as an image. The caption is copied — just paste it.",
    shareSaved:"Image saved and text copied. Post it wherever you like!",
    yourTime:"Your time",
    cardSolvedIn:"I solved today's challenge in", cardBeatMe:"Your turn: beat my time!", cardScan:"Scan to play", cardFree:"Free · no download",
    objShort:["< 60s","< 45s","< 30s","< 15s"],
    seeMore:"See more", seeLess:"Collapse", bestTime:"Best time",
    prepCube:"Get your cube ready",
    timesEvol:"📈 Times evolution", lastGames:"🕐 Last games",
    chartHint:"🎮 Play at least 2 games to see your curve!",
    duelRules:["Each player scrambles the other's cube","At GO, the app shows a face","Match it as fast as you can","Tap I'M DONE when ready","Wrong face? Tap the player's time → +30s 😈","Fastest over 5 rounds wins!"],
    round:"Round", iDone:"I'M DONE", wins:"wins!", tie:"🤝 Tie!",
    finalScore:"🏁 Final score", nextRound:"Next round →",
    wins:"WINS!", whoDuels:"Who's duelling?", duelSub2:"Pick the two players for this duel.",
    playerOne:"Player 1", playerTwo:"Player 2", startDuel:"Start the duel",
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
    obStart:"GO!", obSkip:"Skip",
    howTo:"❓ How to play", howToTitle:"How to play",
    whoPlays:"Who's playing?", profilesSub:"Everyone keeps their own records and daily challenge.",
    changePlayer:"change", addProfile:"Add a player", createProfile:"Create",
    firstName:"First name", confirmDel:"Delete", cancel:"Cancel",
    profilesFoot:"Profiles are stored on this device only.",
    tabMe:"Me", tabFamily:"👨‍👩‍👧 Family",
    famNobody:"Nobody has played this mode yet.",
    famFoot:"Each player's best time, per universe. The crown goes to the fastest.",
    progressTitle:"My progress", progressSub:"all modes",
    progGames:"games", progModes:"modes played", progBest:"best time",
    progPlay:"game", progPlays:"games", progNever:"Never played — give it a go!",
    progAvg:"Average of last 5:", progWin:"win", progWins:"wins",
    progFoot:"Tap a mode to play it again. The curve shows your last 10 games: the lower it goes, the better you get.",
    myProgress:"📊 My progress",
    helpCardTitle:"How to play?", helpCardSub:"Discover the rules of the game",
    hcChooseCube:"CHOOSE YOUR CUBE", hcDiscover:"INTERACTIVE CONTENT", hcPlay:"PLAY", hcConsult:"EXPLORE",
    hcTraining:"TRAINING",
    hcMonstroSub:"Have fun\nand improve", hcClassicSub:"Solve the face\nagainst the clock", hcSudoSub:"Logic\nand focus",
    hcTuto:"RUR'U' TUTORIAL", hcTutoSub:"Learn to play step by step",
    hcChrono:"RUR'U' TIMER", hcChronoSub:"Beat your records",
    hcSplitRace:"60S SPLIT RACE", hcSplitRaceSub:"Step-by-step timed solve",
    hcSavants:"RUR'U' SCIENCE", hcSavantsSub:"Discover science\nin a new way",
    hcCivi:"ANCIENT CIVILISATION", hcCiviSub:"Travel\nthrough time",
    hcShopText:"Discover the Monstrocube and the Sudocube on our site.",
    hcShopBtn:"Order on rurucube.com",
    hcTagline:"THINK · PLAY · IMPROVE",
    navHome:"Home", navTuto:"How to play",
    tutoIntro:"A beginner method, chapter by chapter. Grab your cube and follow along — pause whenever you need to.",
    tutoStepOf:"Step {n} of {total}", tutoVideo:"The video", tutoPrev:"Previous", tutoNext:"Next step",
    tutoHold:"How to hold the cube", tutoGoal:"Your goal", tutoCases:"Possible cases", tutoPieces:"The pieces", tutoMoves:"Each face has a letter",
    tutoNotation:"en", tutoTryMoves:"Tap a letter: the cube does the move", tutoReset:"Reset",
    tutoNotaFr:"French version", tutoNotaEn:"English version", tutoPrimeTxt:"turn the other way", tutoHalfTxt:"half turn (180°)",
    tutoFaceNames:{ R:"right face", L:"left face", U:"up face", D:"down face", F:"front face", B:"back face" },
    tutoSteps:[
      { goal:"Know the 3 kinds of pieces and each face's letter.",
        cases:{ edges:{title:"Edges", text:"Pieces with 2 colours, in the middle of the cube's edges. There are 12."},
                corners:{title:"Corners", text:"Pieces with 3 colours, in the corners. There are 8."},
                centers:{title:"Centres", text:"Pieces with 1 colour, in the middle of each face. There are 6. They never move: they set their face's colour. White is opposite yellow, orange opposite red, green opposite blue."} },
        moves:[["R","Right"],["L","Left"],["U","Up (top)"],["D","Down (bottom)"],["F","Front (facing you)"],["B","Back"]],
        notes:["A letter alone = a quarter turn clockwise, as you look straight at that face. Always keep the cube facing you during an algorithm."] },
      { hold:"White centre on the Up face (U).",
        goal:"A white cross on top, each cross edge matching the centre colour on the side.",
        intro:["Do the edges in this order: blue, orange, green, red.","Keep white on top. Bring the white-blue edge down to the Down face (D), then turn D until it sits right under the blue centre. Hold the cube with the blue centre on the right (R)."],
        cases:{ bas:{title:"The edge is under the blue centre", text:"Turn the Right face (R) until the edge reaches the top, above the blue centre."},
                milieu:{title:"The edge is on the Right face", text:"Same thing: turn R until it reaches the top."},
                retournee:{title:"It's on top, but flipped", text:"The white faces the side: do this algorithm, blue centre still on the right."} },
        tips:["If the edge is right, turn the cube to put the orange centre on the right and repeat. When your cross looks like the goal, go to step 3!"] },
      { hold:"The white cross on the Up face (U).",
        goal:"The whole white face, with the top row of each side in the right colour.",
        intro:["Corners have one white side and 2 other colours. If the corner is on the Down face (D), turn D until it is right under its spot (front right). It then looks like one of the first 3 cases."],
        cases:{ droite:{title:"White faces right", text:"Do the algorithm once."},
                dessous:{title:"White faces down", text:"Do the algorithm 3 times."},
                devant:{title:"White faces you", text:"Do the algorithm 5 times."},
                haut:{title:"The corner is on top, wrong", text:"Take it down to the Down face with this algorithm, then turn D to put it under its spot."} },
        tips:["In short: repeat the algorithm until the corner is right. Do the same for all 4 white corners, and a third of the cube is done!"] },
      { hold:"Flip the cube: the finished white face is now Down (D).",
        goal:"The first two layers: the white and the middle row.",
        intro:["Turn the Up face (U) until the front colour of a top edge (with no yellow) matches the centre below it: that makes a vertical line.","The colour on top of that edge tells you which way it must go."],
        cases:{ droite:{title:"The edge must go right", text:"Here the top is red and the red centre is on the right."},
                gauche:{title:"The edge must go left", text:"Here the top is orange and the orange centre is on the left."},
                coincee:{title:"An edge is in the middle, but wrong", text:"Do either algorithm: it comes back up, then place it as usual."} },
        tips:["Keep going until the 4 middle edges are in place: two thirds done!"] },
      { hold:"Yellow on the Up face (U).",
        goal:"A yellow cross on top. The edges' sides don't need to match yet.",
        intro:["Look at the top and find the pattern that looks like your cube. If you already have the cross, go to the next step."],
        cases:{ point:{title:"Just the yellow centre", text:"Do this algorithm, then compare again with the next two cases."},
                L:{title:"An L-shape", text:"Hold the L-shape at the top left, as here, then do the algorithm."},
                ligne:{title:"A line", text:"Hold the line horizontal, as here, then do the algorithm."} } },
      { hold:"The yellow cross on the Up face (U). Watch the cube's orientation closely so you don't waste time!",
        goal:"The yellow cross, each edge matching the centre colour on the side.",
        intro:["Turn U until 2 edges line up with their centre. Two cases are possible."],
        cases:{ cotes:{title:"2 neighbouring edges are right", text:"Put them at the back and left (cube seen from behind here), then do the chair: he stands up (R), walks far away (U U), his chair falls (R'), he comes back (U'), picks it up (R), steps on it (U'), sits down (R'). Then just U'."},
                opposees:{title:"2 opposite edges are right", text:"Do the chair once: you land on the case above."} } },
      { hold:"The aligned yellow cross on top (U).",
        goal:"Each corner in its spot: its 3 colours match the centres around it, even if twisted.",
        intro:["Put a corner already in its spot front right, as here."],
        cases:{ amis:{title:"The friends technique", text:"His friends on the left go up (L'), he visits them (U), his friends on the right go up (R), he visits them (U'), the left ones come down (L), he says goodbye (U), the right ones come down (R'), and he goes home (U'). Repeat until all 4 corners are in their spot."} },
        tips:["If no corner is in its spot at the start, do the friends once from anywhere: one will be right."] },
      { hold:"Yellow on top (U). The corner to twist is always in front of you, top right.",
        goal:"The solved cube! It's the same algorithm as for bringing up the white corners (step 3): R' D' R D.",
        intro:["1. Hold the cube facing you, with the corner to twist at the top right.",
               "2. Do R' D' R D, again and again, until that corner's yellow is on top (2 or 4 times).",
               "3. As soon as the yellow shows on top, finish the algorithm right to the final D, then do U: the next corner comes to the top right.",
               "4. Repeat R' D' R D for every corner, without ever rotating the whole cube.",
               "Here's a full example, corner by corner:"],
        cases:{ c1:{title:"1st corner: 4 times, then U", text:"Yellow faces you: algorithm × 4, then U."},
                c2:{title:"2nd corner: 4 times, then U", text:"The bottom looks scrambled: that's normal, keep going!"},
                c3:{title:"3rd corner: 2 times, then U", text:"Yellow faces right: algorithm × 2, then U."},
                c4:{title:"4th corner: 2 times, then U", text:"After this last corner everything comes back: the cube is solved!"} },
        tips:["After the first corner the cube looks very scrambled. Don't worry, carry on: it all comes back once the 4 corners are done. Never rotate the whole cube between algorithms!",
              "Advanced tip: instead of doing the algorithm 4 times, do its reverse twice: D' R' D R.",
              "Well done, you solved your cube! Now practise to get faster."] },
    ],
    tutoSoon:"Coming soon", tutoSoonLong:"This video is coming very soon. Check back in a future update!",
    tutoChapters:[
      { t:"Get to know your cube", s:"The pieces and the move letters" },
      { t:"The white cross", s:"White on top, edges lined up" },
      { t:"The white corners", s:"Finish the white layer" },
      { t:"The middle layer", s:"White goes to the bottom" },
      { t:"The yellow cross", s:"Top layer, step 1" },
      { t:"The aligned yellow cross", s:"The chair technique" },
      { t:"Corners in place", s:"The friends technique" },
      { t:"Twist the yellow corners", s:"One corner at a time · the last step" },
    ],
    themeLight:"Light theme", themeDark:"Dark theme",
    civiComingTitle:"Coming soon!", civiComingSub:"We're carefully building this new world. Check back soon to discover Ancient Civilisation.",
    htGeneral:"The idea", htGeneralTxt:"The app shows you a cube face. Reproduce it on your physical cube as fast as you can. The timer stops when you tap the grid. Four modes await below.",
    htFace:"🎯 Solo", htFaceTxt:"Match the face shown as fast as you can. The timer stops the moment you tap the grid. Simple, fast, perfect for beating your record.",
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
    ctxDailyReady:"One try today. Ready?",
    step:"Step", nextStep:"Next →",
    savants:"THE SCIENTISTS BOX", savantsSub:"6 geniuses · 48 symbols",
    savantsIntro:"Each face of the cube is embodied by a genius surrounded by 8 symbols. Tap a card to open it, then tap a symbol to discover its meaning — and the portrait in the center to learn more about the genius.",
    symbols:"symbols", seeOnSite:"🌐 See on rurucube.com",
    savantsTile:"KNOWLEDGE", savantsTileSub:"Decode the 6 faces of the geniuses",
    civi:"Ancient Civilisation", tuto:"Tutorial", civiSub:"6 civilisations, 8 symbols each", civiIntro:"🌍 Each civilisation hides 8 symbols carved in stone. Tap a card to open it, then tap a symbol to discover its meaning — and the emblem in the center to learn more about the civilisation.", kidsLabel:"🧒 Kid", teenLabel:"🎓 Teen & Adult", ageToggleHint:"Choose your reading level: short and simple definitions for kids, full ones for teens and adults.",
    savantsTapHint:"Tap a symbol to reveal its definition",
    bioBirth:"Born", bioDeath:"Died", bioPath:"Path", bioVision:"Vision",
    chooseGame:"Choose your universe", switchCube:"Switch cube",
    uni1:"Focus & Speed", uni1Sub:"Three cubes, one timer",
    uni2:"Focus & Learning", uni2Sub:"Learn while you play",
    uni3:"Learn & Improve", uni3Sub:"Get to grips with your cube, then track your progress",
    speedFace:"SPEED FACE", speedFaceSub:"Play with your own 3×3 cube",
    scienceCube:"THE SCIENCE CUBE", scienceCubeSub:"6 geniuses · 48 symbols to explore",
    nudge:"Loving this? Monstrocube makes it even more fun 🟢",
    nudgeBtn:"Discover →",
  },
};

/* ─── Stockage (localStorage si dispo, sinon mémoire) ─────────── */
const SKEY = "rurucube_v3";
let MEM = {};
/* Les données de jeu sont désormais rangées par profil (voir plus bas).
   loadS/saveS lisent et écrivent celles du profil actif : tout le reste
   du code continue de fonctionner sans modification. */
function loadS(){ const r=loadRoot(); return (r.profiles[r.current] && r.profiles[r.current].data) || {}; }
function saveS(d){ const r=loadRoot(); if(!r.profiles[r.current]) return; r.profiles[r.current].data=d; saveRoot(r); }

/* ═══ PROFILS DE JOUEURS ════════════════════════════════════════
   Plusieurs personnes partagent le même appareil : chacune a ses
   records, son historique et son propre défi du jour.
   Tout reste dans localStorage, sous la même clé qu'avant.
   ═══════════════════════════════════════════════════════════════ */
const PROFILE_EMOJIS = ["🦊","🐻","🐼","🦁","🐸","🐙","🦄","🐝","🐳","🦖","🐧","🐨"];

function newProfileId(){ return "p"+Date.now().toString(36)+Math.floor(Math.random()*1e4).toString(36); }

/* Lit la racine du stockage et migre l'ancien format le cas échéant */
function loadRoot(){
  let v = null;
  try{ v = JSON.parse(localStorage.getItem(SKEY) || "null"); }catch(e){ v = null; }
  if(!v || typeof v!=="object") v = MEM && MEM.profiles ? MEM : null;
  if(!v || typeof v!=="object") v = {};

  if(!v.profiles){
    /* Migration : les anciennes données étaient posées à la racine.
       On les conserve dans un premier profil pour ne rien perdre. */
    const anciennes = {};
    for(const k of Object.keys(v)) if(k!=="profiles" && k!=="current") anciennes[k] = v[k];
    const id = "p1";
    v = { current:id, profiles:{ [id]:{ name:"Joueur 1", emoji:"🦊", data:anciennes, born:Date.now() } } };
    saveRoot(v);
  }
  if(!v.profiles[v.current]) v.current = Object.keys(v.profiles)[0];
  return v;
}
function saveRoot(r){ MEM = r; try{ localStorage.setItem(SKEY, JSON.stringify(r)); }catch(e){} }

/* Écrit dans les données d'un profil qui n'est pas forcément l'actif
   (nécessaire pour le duel, qui met à jour les deux joueurs). */
function saveProfileData(id, transformer){
  const r=loadRoot(); const p=r.profiles[id];
  if(!p) return;
  p.data = transformer(p.data || {});
  saveRoot(r);
}
function listProfiles(){ const r=loadRoot(); return Object.entries(r.profiles).map(([id,p])=>({id,...p})); }
function currentProfile(){ const r=loadRoot(); return { id:r.current, ...r.profiles[r.current] }; }
function switchProfile(id){ const r=loadRoot(); if(r.profiles[id]){ r.current=id; saveRoot(r); } }
function addProfile(name, emoji, devenirCourant=true){
  const r=loadRoot(); const id=newProfileId();
  r.profiles[id] = { name:(name||"").trim().slice(0,14) || "Joueur", emoji:emoji||"🦊", data:{}, born:Date.now() };
  if(devenirCourant) r.current = id;
  saveRoot(r); return id;
}
function removeProfile(id){
  const r=loadRoot();
  if(Object.keys(r.profiles).length<=1) return false;   /* on garde toujours un profil */
  delete r.profiles[id];
  if(r.current===id) r.current = Object.keys(r.profiles)[0];
  saveRoot(r); return true;
}

/* ─── Écran d'accueil (splash + choix langue/prénom au premier lancement) ─── */
function isOnboarded(){ return !!loadRoot().onboarded; }
function finishOnboarding(name, emoji){
  const r=loadRoot(); const p=r.profiles[r.current];
  if(p){
    if(name) p.name = name.trim().slice(0,14);
    if(emoji) p.emoji = emoji;
  }
  r.onboarded = true;
  saveRoot(r);
}

/* ─── Fenêtre de choix / gestion des profils ─────────────────── */
function ProfileModal({ t, onClose, onChange }){
  const [profils,setProfils] = useState(listProfiles());
  const [cur,setCur] = useState(currentProfile().id);
  const [ajout,setAjout] = useState(false);
  const [nom,setNom] = useState("");
  const [emo,setEmo] = useState(PROFILE_EMOJIS[0]);
  const [aSupprimer,setASupprimer] = useState(null);

  const rafraichir = ()=>{ setProfils(listProfiles()); setCur(currentProfile().id); onChange&&onChange(); };
  const choisir = (id)=>{ switchProfile(id); rafraichir(); onClose(); };
  const creer = ()=>{ if(!nom.trim()) return; addProfile(nom,emo); setNom(""); setAjout(false); rafraichir(); onClose(); };
  const supprimer = (id)=>{ removeProfile(id); setASupprimer(null); rafraichir(); };

  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:120,background:"rgba(8,6,20,.78)",
      display:"flex",alignItems:"center",justifyContent:"center",padding:16,backdropFilter:"blur(3px)"}}>
      <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:380,maxHeight:"86vh",overflowY:"auto",
        background:`linear-gradient(170deg,${PAL.card},${PAL.bg2})`,borderRadius:24,padding:"20px 18px",
        boxShadow:`0 0 0 2px ${PAL.gold}, 0 20px 50px rgba(0,0,0,.6)`}}>

        <div style={{display:"flex",alignItems:"center",marginBottom:4}}>
          <div style={{flex:1,fontWeight:800,fontSize:19,color:PAL.text}}>{t.whoPlays}</div>
          <button onClick={onClose} style={{background:"transparent",border:"none",cursor:"pointer",
            color:PAL.textDim,fontSize:22,lineHeight:1,padding:4}}>✕</button>
        </div>
        <div style={{fontSize:12.5,color:PAL.textDim,fontWeight:600,marginBottom:16}}>{t.profilesSub}</div>

        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {profils.map(p=>{
            const actif = p.id===cur;
            const parties = Object.values(p.data||{}).reduce((a,uni)=>
              a + Object.values(uni||{}).reduce((b,st)=>b+((st&&st.games)||0),0), 0);
            return (
              <div key={p.id} style={{display:"flex",alignItems:"center",gap:10,borderRadius:16,padding:"11px 12px",
                background:actif?`linear-gradient(135deg,${PAL.gold}33,${PAL.card})`:PAL.bg2,
                boxShadow:`0 0 0 2px ${actif?PAL.gold:PAL.cardHi}`}}>
                <button onClick={()=>choisir(p.id)} style={{flex:1,minWidth:0,display:"flex",alignItems:"center",gap:11,
                  background:"transparent",border:"none",cursor:"pointer",textAlign:"left",padding:0}}>
                  <span style={{fontSize:26,flexShrink:0}}>{p.emoji}</span>
                  <span style={{flex:1,minWidth:0}}>
                    <span style={{display:"block",fontWeight:800,fontSize:15,color:PAL.text}}>{p.name}</span>
                    <span style={{display:"block",fontSize:11,color:PAL.textDim,fontWeight:600,marginTop:2}}>
                      {parties} {parties>1?t.progPlays:t.progPlay}
                    </span>
                  </span>
                  {actif&&<span style={{fontSize:16,color:PAL.gold,flexShrink:0}}>✓</span>}
                </button>
                {profils.length>1&&(
                  aSupprimer===p.id
                    ? <span style={{display:"flex",gap:6,flexShrink:0}}>
                        <button onClick={()=>supprimer(p.id)} style={{background:PAL.red,border:"none",borderRadius:10,
                          padding:"7px 10px",color:"#fff",fontWeight:700,fontSize:11.5,cursor:"pointer"}}>{t.confirmDel}</button>
                        <button onClick={()=>setASupprimer(null)} style={{background:"transparent",border:"none",
                          color:PAL.textDim,fontSize:11.5,fontWeight:700,cursor:"pointer"}}>{t.cancel}</button>
                      </span>
                    : <button onClick={()=>setASupprimer(p.id)} style={{background:"transparent",border:"none",
                        cursor:"pointer",color:PAL.textFaint,fontSize:16,padding:4,flexShrink:0}}>🗑️</button>
                )}
              </div>
            );
          })}
        </div>

        {ajout ? (
          <div style={{marginTop:14,background:PAL.bg2,borderRadius:16,padding:"14px 13px",
            boxShadow:`0 0 0 2px ${PAL.cardHi}`}}>
            <input value={nom} onChange={e=>setNom(e.target.value)} maxLength={14} placeholder={t.firstName}
              style={{width:"100%",background:PAL.card,border:`2px solid ${PAL.cardHi}`,borderRadius:12,
                padding:"11px 12px",color:PAL.text,fontSize:15,fontWeight:600,fontFamily:"inherit",outline:"none"}}/>
            <div style={{display:"flex",flexWrap:"wrap",gap:7,margin:"12px 0 14px"}}>
              {PROFILE_EMOJIS.map(e=>(
                <button key={e} onClick={()=>setEmo(e)} style={{width:40,height:40,borderRadius:12,cursor:"pointer",
                  border:"none",fontSize:21,background:emo===e?`${PAL.gold}33`:PAL.card,
                  boxShadow:`0 0 0 2px ${emo===e?PAL.gold:PAL.cardHi}`}}>{e}</button>
              ))}
            </div>
            <div style={{display:"flex",gap:9}}>
              <button onClick={creer} disabled={!nom.trim()}
                style={{flex:1,border:"none",borderRadius:14,padding:"12px 8px",cursor:nom.trim()?"pointer":"default",
                  background:nom.trim()?`linear-gradient(180deg,${shade(PAL.gold,30)},${PAL.gold})`:PAL.cardHi,
                  color:nom.trim()?"#3a2a00":PAL.textFaint,fontWeight:800,fontSize:14,
                  boxShadow:nom.trim()?`0 4px 0 ${shade(PAL.gold,-70)}`:"none"}}>{t.createProfile}</button>
              <button onClick={()=>setAjout(false)} style={{background:"transparent",border:"none",
                color:PAL.textDim,fontWeight:700,fontSize:13,cursor:"pointer",padding:"0 10px"}}>{t.cancel}</button>
            </div>
          </div>
        ) : (
          <button onClick={()=>setAjout(true)} style={{width:"100%",marginTop:14,border:"none",cursor:"pointer",
            borderRadius:16,padding:"13px 8px",background:PAL.bg2,color:PAL.text,fontWeight:800,fontSize:14,
            boxShadow:`0 0 0 2px ${PAL.cardHi}`}}>＋ {t.addProfile}</button>
        )}

        <div style={{fontSize:11,color:PAL.textFaint,fontWeight:600,marginTop:14,lineHeight:1.5,textAlign:"center"}}>
          {t.profilesFoot}
        </div>
      </div>
    </div>
  );
}


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
function illusionFace(rng){ return patternFace(rng); }
/* ═══ MOTIFS ENFANTS — deux couleurs, formes reconnaissables ═════
   Chaque motif est une grille de 9 caractères, lue de gauche à droite
   et de haut en bas : "#" prend la couleur de la forme, "." celle du
   fond. Le fond est la couleur du centre de la face, ce qui rend tous
   ces motifs réalisables sur un vrai cube : il reste quatre arêtes et
   quatre coins de chaque couleur, de quoi composer n'importe laquelle
   de ces figures.
   ═══════════════════════════════════════════════════════════════ */
const MOTIFS = [
  /* lettres */
  { id:"L", nom:"L", g:"#..#..###" },
  { id:"T", nom:"T", g:"###.#..#." },
  { id:"H", nom:"H", g:"#.#####.#" },
  { id:"I", nom:"I", g:"###.#.###" },
  { id:"U", nom:"U", g:"#.##.####" },
  { id:"O", nom:"O", g:"####.####" },
  { id:"C", nom:"C", g:"####..###" },
  { id:"J", nom:"J", g:"..#..###." },
  { id:"X", nom:"X", g:"#.#.#.#.#" },
  { id:"Y", nom:"Y", g:"#.#.#..#." },
  /* pièces de Tetris */
  { id:"tetT", nom:"Tetris T", g:"###.#...." },
  { id:"tetL", nom:"Tetris L", g:"#..#..##." },
  { id:"tetJ", nom:"Tetris J", g:"..#..#.##" },
  { id:"tetS", nom:"Tetris S", g:".####...." },
  { id:"tetZ", nom:"Tetris Z", g:"##..##..." },
  { id:"tetO", nom:"Tetris O", g:"##.##...." },
  { id:"tetI", nom:"Tetris I", g:"#..#..#.." },
  /* figures simples */
  { id:"croix",    nom:"Croix",    g:".#.###.#." },
  { id:"coins",    nom:"Coins",    g:"#.#...#.#" },
  { id:"point",    nom:"Point",    g:"....#...." },
  { id:"escalier", nom:"Escalier", g:"#...#...#" },
  { id:"pyramide", nom:"Pyramide", g:".#.###..." },
  { id:"drapeau",  nom:"Drapeau",  g:"######..." },
];

const MOTIF_COULEURS = ["white","orange","yellow","red","green","teal"];

/* Fabrique une face à partir d'un motif tiré au sort. */
function motifFace(rng){
  const R = rng || Math.random;
  const m = MOTIFS[Math.floor(R()*MOTIFS.length)];
  const fond = MOTIF_COULEURS[Math.floor(R()*6)];
  let forme = fond;
  while(forme===fond) forme = MOTIF_COULEURS[Math.floor(R()*6)];
  return m.g.split("").map((c,i)=>({ colorId: c==="#" ? forme : fond, typeId:i }));
}

/* Sudocube : fond indigo avec des halos aux couleurs du logo (rouge, bleu, vert, jaune, orange) */
const SUDO_BG = "radial-gradient(circle at 0% 0%, rgba(255,59,92,.42), transparent 42%), radial-gradient(circle at 100% 6%, rgba(47,123,255,.5), transparent 44%), radial-gradient(circle at 0% 60%, rgba(47,212,107,.36), transparent 40%), radial-gradient(circle at 100% 72%, rgba(255,214,10,.36), transparent 40%), radial-gradient(circle at 50% 104%, rgba(255,138,26,.42), transparent 46%), linear-gradient(180deg,#1d1748,#100c2c)";
const SKINS = {
  classic: { name:"classic", sprites:()=>CLASSIC_SPRITES, gen:classicFace, color:"#c69c6d", emoji:"🎨" },
  monstro: { name:"monstro", sprites:()=>MONSTER_SPRITES, gen:monstroFace, color:PAL.green, emoji:"👾" },
  sudoku:  { name:"sudoku",  sprites:()=>SUDOKUBE_SPRITES, gen:sudoFace,   color:"#38b6ff",  emoji:"🔢" },
  illusion:{ name:"illusion",sprites:()=>ILLUSION_SPRITES, gen:illusionFace, color:"#8b5cf6", emoji:"🌀" },
  /* Sudocube Mono : 6 faces identiques -> uniquement des modes de résolution complète */
  sudomono:{ name:"sudomono", sprites:()=>SUDOKUBE_SPRITES, gen:sudoFace, color:"#ff3b4e", emoji:"🔢" },
  chesscube:{ name:"chesscube", sprites:()=>SUDOKUBE_SPRITES, gen:sudoFace, color:"#ffcc33", emoji:"♞" },
};
/* univers où l'on résout le cube en entier (pas de face à reproduire) */
const FULL_SOLVE = ["sudomono","chesscube"];
function todayKey(){ const d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function dailyFace(skin){ const rng = mulberry32(strSeed(todayKey()+"·"+skin)); return SKINS[skin].gen(rng); }

/* ─── Défi du jour : temps restant avant le prochain (minuit local) ─── */
function msToMidnight(){ const n=new Date(); const m=new Date(n); m.setHours(24,0,0,0); return m-n; }
function fmtHMS(ms){
  const s=Math.max(0,Math.floor(ms/1000));
  const h=Math.floor(s/3600), mi=Math.floor((s%3600)/60), se=s%60;
  return `${h}h ${String(mi).padStart(2,"0")}m ${String(se).padStart(2,"0")}s`;
}
function DailyCountdown({ t, color }){
  const [left,setLeft] = useState(msToMidnight());
  useEffect(()=>{ const id=setInterval(()=>setLeft(msToMidnight()),1000); return ()=>clearInterval(id); },[]);
  return (
    <div style={{fontSize:13,fontWeight:700,color:color||PAL.gold,marginTop:8,fontVariantNumeric:"tabular-nums"}}>
      ⏳ {t.dailyNext} {fmtHMS(left)}
    </div>
  );
}

/* ─── Ordinateur : la barre espace démarre / arrête le chrono ─── */
const isDesktop = typeof window!=="undefined" && !!window.matchMedia && window.matchMedia("(pointer:fine)").matches;
function useSpaceKey(handler, enabled){
  const ref = useRef(handler);
  ref.current = handler;
  useEffect(()=>{
    if(enabled===false) return;
    function onKey(e){
      if(e.code!=="Space" && e.key!==" " && e.key!=="Spacebar") return;
      if(e.repeat) return;
      const el = document.activeElement;
      const tag = el && el.tagName;
      if(tag==="INPUT" || tag==="TEXTAREA" || (el && el.isContentEditable)) return;
      e.preventDefault();          // évite le scroll ET le double clic sur un bouton focus
      ref.current && ref.current();
    }
    window.addEventListener("keydown", onKey);
    return ()=>window.removeEventListener("keydown", onKey);
  },[enabled]);
}

/* Format temps */
function fmt(ms){
  if(ms==null) return "—";
  const s = ms/1000;
  if(s<60) return s.toFixed(2)+"s";
  const m = Math.floor(s/60); const r = s-m*60;
  return m+":"+r.toFixed(1).padStart(4,"0");
}

/* ─── Détection paysage / desktop (réactive au resize & rotation) ─── */
function useWide(){
  const get = ()=> typeof window!=="undefined" && window.innerWidth>=760 && window.innerWidth>window.innerHeight;
  const [wide,setWide] = useState(get);
  useEffect(()=>{
    function onResize(){ setWide(get()); }
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return ()=>{ window.removeEventListener("resize", onResize); window.removeEventListener("orientationchange", onResize); };
  },[]);
  return wide;
}

/* ─── Styles globaux ──────────────────────────────────────────── */
function GlobalStyles(){
  return <style>{`
    @keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
    @keyframes pop{0%{transform:scale(0.6);opacity:0}70%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
    @keyframes wiggle{0%,100%{transform:rotate(0)}25%{transform:rotate(-4deg)}75%{transform:rotate(4deg)}}
    @keyframes slideUp{0%{transform:translateY(16px);opacity:0}100%{transform:translateY(0);opacity:1}}
    @keyframes bgshift{0%,100%{transform:translate(0,0)}50%{transform:translate(-2%,2%)}}
    @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}
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
/* ═══ ÉCRAN TUTORIEL — chapitres vidéo ══════════════════════════
   Renseigne ici l'identifiant YouTube de chaque chapitre : c'est la
   partie après "watch?v=" dans l'adresse. Laisse la chaîne vide tant
   que la vidéo n'est pas tournée, le chapitre s'affichera alors
   comme « bientôt disponible ».
   ═══════════════════════════════════════════════════════════════ */
const TUTO_VIDEOS = [
  { id:"pieces",        yt:"" },   /* 0 · les pièces et les mouvements */
  { id:"croix",         yt:"" },   /* 1 · la croix blanche bien alignée */
  { id:"couronne1",     yt:"" },   /* 2 · la première couronne */
  { id:"couronne2",     yt:"" },   /* 3 · la deuxième couronne */
  { id:"croixJaune",    yt:"" },   /* 4 · la croix jaune */
  { id:"croixAlignee",  yt:"" },   /* 5 · la croix jaune bien alignée */
  { id:"coinsPlaces",   yt:"" },   /* 6 · les coins à leur place */
  { id:"coinsTournes",  yt:"" },   /* 7 · les coins bien tournés */
];

function TutoMovesCube({ t, fr, labels }){
  const stageRef = useRef(null);
  const api = useRef({});
  const [status,setStatus] = useState("loading");
  useEffect(()=>{
    let dead=false, raf=0; const cleanups=[];
    loadThree().then(THREE=>{
      if(dead) return;
      const stage = stageRef.current;
      const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
      renderer.outputEncoding = THREE.sRGBEncoding;
      Object.assign(renderer.domElement.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",touchAction:"none"});
      stage.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32,1,0.1,100);
      scene.add(new THREE.AmbientLight(0xffffff,.6));
      const dl = new THREE.DirectionalLight(0xffffff,.8); dl.position.set(4,6,5); scene.add(dl);
      const V=(x,y,z)=>new THREE.Vector3(x,y,z);
      const FACES={ F:{n:V(0,0,1),r:V(1,0,0),u:V(0,1,0)}, B:{n:V(0,0,-1),r:V(-1,0,0),u:V(0,1,0)},
        R:{n:V(1,0,0),r:V(0,0,-1),u:V(0,1,0)}, L:{n:V(-1,0,0),r:V(0,0,1),u:V(0,1,0)},
        U:{n:V(0,1,0),r:V(1,0,0),u:V(0,0,-1)}, D:{n:V(0,-1,0),r:V(1,0,0),u:V(0,0,1)} };
      const disposables=[], MAT={};
      for(const k in FACES){ MAT[k]=new THREE.MeshBasicMaterial({color:new THREE.Color(TUTO_HEX[{U:'W',D:'Y',F:'R',B:'O',R:'B',L:'G'}[k]]).convertSRGBToLinear()}); disposables.push(MAT[k]); }
      const bodyMat=new THREE.MeshStandardMaterial({color:0x0c0c0c,roughness:.45,metalness:.1});
      const bodyGeo=new THREE.BoxGeometry(.97,.97,.97); disposables.push(bodyMat,bodyGeo);
      const S=.45,RAD=.08,shape=new THREE.Shape();
      shape.moveTo(-S+RAD,-S);shape.lineTo(S-RAD,-S);shape.quadraticCurveTo(S,-S,S,-S+RAD);
      shape.lineTo(S,S-RAD);shape.quadraticCurveTo(S,S,S-RAD,S);shape.lineTo(-S+RAD,S);
      shape.quadraticCurveTo(-S,S,-S,S-RAD);shape.lineTo(-S,-S+RAD);shape.quadraticCurveTo(-S,-S,-S+RAD,-S);
      const sticker=new THREE.ShapeGeometry(shape,6); disposables.push(sticker);
      const cubies=[];
      for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++){
        if(!x&&!y&&!z) continue;
        const c=new THREE.Group(); c.position.set(x,y,z); c.userData.home=V(x,y,z); c.add(new THREE.Mesh(bodyGeo,bodyMat));
        for(const k in FACES){ const f=FACES[k]; if(c.position.dot(f.n)!==1) continue;
          const m=new THREE.Mesh(sticker,MAT[k]); m.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.r,f.u,f.n));
          m.position.copy(f.n).multiplyScalar(.487); c.add(m); }
        scene.add(c); cubies.push(c);
      }
      /* caméra : même vue que le cube 3D Classique, on peut tourner autour en glissant */
      const THETA0=.42, PHI0=1.18; let theta=THETA0, phi=PHI0, dist=11.5;
      const placeCam=()=>{camera.position.set(dist*Math.sin(phi)*Math.sin(theta),dist*Math.cos(phi),dist*Math.sin(phi)*Math.cos(theta));camera.lookAt(0,0,0)};
      const resize=()=>{const w=stage.clientWidth,h=stage.clientHeight; if(!w||!h) return; renderer.setSize(w,h,false); camera.aspect=w/h;
        dist=w/h<1?11.5/(w/h)*.64+2:11.5; camera.updateProjectionMatrix(); placeCam()};
      const ro=new ResizeObserver(resize); ro.observe(stage); resize(); cleanups.push(()=>ro.disconnect());
      /* coups dans le repère fixe : R = x+, U = y+, F = z+ (sens horaire vu de la face) */
      const MV={R:['x',1,-1],L:['x',-1,1],U:['y',1,-1],D:['y',-1,1],F:['z',1,-1],B:['z',-1,1]};
      const decode=tok=>{ const [ax,l,d]=MV[tok[0]]; const prime=tok.endsWith("'"); return {ax,l,dir:prime?-d:d,turns:tok.endsWith("2")?2:1}; };
      const pivot=new THREE.Group(); scene.add(pivot);
      const snap=c=>{c.position.set(Math.round(c.position.x),Math.round(c.position.y),Math.round(c.position.z));
        const m=new THREE.Matrix4().makeRotationFromQuaternion(c.quaternion),e=m.elements;
        for(const i of [0,1,2,4,5,6,8,9,10]) e[i]=Math.round(e[i]); c.quaternion.setFromRotationMatrix(m)};
      const grab=(ax,l)=>{ pivot.rotation.set(0,0,0); pivot.updateMatrixWorld();
        const items=cubies.filter(c=>Math.round(c.position[ax])===l); items.forEach(c=>pivot.attach(c)); return items; };
      const release=items=>{ pivot.updateMatrixWorld(); items.forEach(c=>{scene.attach(c); snap(c);}); };
      const instant=tok=>{ const {ax,l,dir,turns}=decode(tok); const it=grab(ax,l); pivot.rotation[ax]=dir*turns*Math.PI/2; release(it); };
      let anim=null;
      const animate=(tok,dur,done)=>{ const {ax,l,dir,turns}=decode(tok); anim={ax,dir,turns,items:grab(ax,l),t0:performance.now(),dur:dur*(turns===2?1.5:1),done}; };
      const reset=()=>{ anim=null; pivot.rotation.set(0,0,0); pivot.updateMatrixWorld();
        cubies.forEach(c=>{ scene.attach(c); c.position.copy(c.userData.home); c.quaternion.identity(); }); };
      const loop=now=>{
        if(anim){ const tt=Math.min(1,(now-anim.t0)/anim.dur), e=tt<.5?2*tt*tt:1-Math.pow(-2*tt+2,2)/2;
          pivot.rotation[anim.ax]=anim.dir*anim.turns*Math.PI/2*e;
          if(tt>=1){ const a=anim; anim=null; release(a.items); a.done&&a.done(); } }
        renderer.render(scene,camera); raf=requestAnimationFrame(loop); };
      raf=requestAnimationFrame(loop);
      /* cube figé : vue de face, on ne peut pas le faire tourner */
      api.current={
        prepare(setupToks){ reset(); setupToks.forEach(instant); },
        play(tok,dur,done){ animate(tok,dur,done); },
        busy(){ return !!anim; },
        recenter(){ theta=THETA0; phi=PHI0; placeCam(); },
      };
      setStatus("ready");
      cleanups.push(()=>{ cancelAnimationFrame(raf); disposables.forEach(d=>d.dispose&&d.dispose()); renderer.dispose(); renderer.domElement.remove(); });
    }).catch(()=>{ if(!dead) setStatus("error"); });
    return ()=>{ dead=true; cancelAnimationFrame(raf); cleanups.forEach(f=>f()); };
  },[]);

  const [busy,setBusy] = useState(false);
  const [last,setLast] = useState(null);
  const play = tok=>{ const a=api.current; if(!a.play || a.busy()) return; setLast(tok); setBusy(true); a.play(tok,460,()=>setBusy(false)); };
  const reset = ()=>{ const a=api.current; if(!a.prepare || a.busy()) return; a.prepare([]); a.recenter(); setLast(null); };
  const MOVES = ["R","L","U","D","F","B"];
  const btn = (tok)=>{ const on=last===tok; return (
    <button key={tok} onClick={()=>play(tok)} style={{flex:1,minWidth:0,border:"none",cursor:"pointer",borderRadius:11,padding:"9px 0",fontFamily:"inherit",
      fontWeight:800,fontSize:16,color:on?"#1a1228":PAL.text,background:on?PAL.gold:PAL.bg2,
      boxShadow:on?`0 3px 0 ${shade(PAL.gold,-55)}`:`0 3px 0 #0006, 0 0 0 2px ${PAL.cardHi}`}}>{tutoNote(tok,fr)}</button>); };
  return (
    <div style={{width:"100%"}}>
      {/* le cube, figé de face */}
      <div ref={stageRef} style={{position:"relative",width:"100%",height:240,borderRadius:16,overflow:"hidden",
        background:"radial-gradient(circle at 50% 40%, #2a2350, #120f26 75%)",boxShadow:`0 0 0 2px ${PAL.cardHi}`}}>
        {status!=="ready"&&<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",
          color:PAL.textDim,fontWeight:700,fontSize:13.5,padding:20,textAlign:"center"}}>{status==="error"?t.ch3Error:t.ch3Loading}</div>}
        {last&&<div style={{position:"absolute",top:10,left:12,zIndex:2,pointerEvents:"none",fontWeight:800,fontSize:28,color:PAL.gold,textShadow:"0 2px 6px rgba(0,0,0,.6)"}}>{tutoNote(last,fr)}</div>}
        <button onClick={reset} style={{position:"absolute",top:10,right:10,zIndex:2,border:"none",cursor:"pointer",borderRadius:999,padding:"6px 11px",
          fontFamily:"inherit",fontWeight:700,fontSize:12,color:PAL.text,background:"#0008"}}>↺ {t.tutoReset}</button>
      </div>
      <div style={{fontSize:12,color:PAL.textFaint,fontWeight:600,textAlign:"center",margin:"8px 0 10px"}}>{t.tutoTryMoves}</div>
      {/* les lettres : une ligne par face, avec le sens inverse et le demi-tour */}
      <div style={{display:"flex",flexDirection:"column",gap:7}}>
        {MOVES.map(m=>(
          <div key={m} style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{width:104,flexShrink:0,fontSize:12.5,fontWeight:700,color:PAL.text,lineHeight:1.2}}>
              <span style={{color:PAL.gold,fontWeight:800}}>{tutoNote(m,fr)}</span> = {(labels||{})[m]}</div>
            {btn(m)}{btn(m+"'")}{btn(m+"2")}
          </div>))}
      </div>
      <div style={{marginTop:11,fontSize:12.5,color:PAL.textDim,fontWeight:600,lineHeight:1.55}}>
        <div><b style={{color:PAL.gold}}>{fr?"i":"'"}</b> = {t.tutoPrimeTxt}</div>
        <div><b style={{color:PAL.gold}}>2</b> = {t.tutoHalfTxt}</div>
      </div>
    </div>
  );
}

/* ═══ TUTORIEL — méthode du guide officiel, 7 étapes, illustrée en 3D ═══
   Chaque étape : comment tenir le cube, l'objectif (cube 3D qui tourne),
   puis les cas possibles, chacun avec son cube 3D et sa formule.
   Les cubes des cas ont été calculés en appliquant à l'envers la formule
   sur un cube résolu : faire la formule sur ce cube donne bien l'objectif.
   Cases grises = pièces pas encore placées (on ne s'en occupe pas). */
const TUTO_STATES = {"0":{"edges":"XXXXWWXWXXRXXRXXXXXBXXBXXXXXXXXYXXXXXXXXGXXXXXXXXOXXXX","corners":"XXXXWXXXWXXRXRXXXXBXXXBXXXXXXXXYXXXXXXXXGXXXXXXXXOXXXX","centers":"XXXXWXXXXXXXXRXXXXXXXXBXXXXXXXXYXXXXXXXXGXXXXXXXXOXXXX","goal":"WWWWWWWWWRRRRRRRRRBBBBBBBBBYYYYYYYYYGGGGGGGGGOOOOOOOOO"},"1":{"goal":"XWXWWWXWXXRXXRXXXXXBXXBXXXXXXXXYXXXXXGXXGXXXXXOXXOXXXX","bas":"XWXWWXXWXXRXXRXXXXXXXXBXXBXXXXXYWXXXXGXXGXXXXXOXXOXXXX","milieu":"XWXWWXXWXXRXXRWXXXXXXBBXXXXXXXXYXXXXXGXXGXXXXXOXXOXXXX","retournee":"XWXWWBXWXXRXXRXXXXXWXXBXXXXXXXXYXXXXXGXXGXXXXXOXXOXXXX"},"2":{"goal":"WWWWWWWWWRRRXRXXXXBBBXBXXXXXXXXYXXXXGGGXGXXXXOOOXOXXXX","droite":"WWWWWWWWXRRXXRXXXRXBBXBXWXXXXBXYXXXXGGGXGXXXXOOOXOXXXX","dessous":"WWWWWWWWXRRXXRXXXBXBBXBXRXXXXWXYXXXXGGGXGXXXXOOOXOXXXX","devant":"WWWWWWWWXRRXXRXXXWXBBXBXBXXXXRXYXXXXGGGXGXXXXOOOXOXXXX","haut":"WWWWWWWWRRRBXRXXXXWBBXBXXXXXXXXYXXXXGGGXGXXXXOOOXOXXXX"},"3":{"goal":"XXXXYXXXXXXXBBBBBBXXXRRRRRRWWWWWWWWWXXXOOOOOOXXXGGGGGG","droite":"XXXXYXXRXXBXBBXBBBXXXXRRRRRWWWWWWWWWXXXOOOOOOXXXGGGGGG","gauche":"XXXXYXXOXXBXXBBBBBXXXRRRRRRWWWWWWWWWXXXOOXOOOXXXGGGGGG","coincee":"XXXXYXXXXXXXBBRBBBXXXBRRRRRWWWWWWWWWXXXOOOOOOXXXGGGGGG"},"4":{"goal":"XYXYYYXYXXXXBBBBBBXXXRRRRRRWWWWWWWWWXXXOOOOOOXXXGGGGGG","point":"XXXXYXXXXXYXBBBBBBXYXRRRRRRWWWWWWWWWXYXOOOOOOXYXGGGGGG","L":"XYXYYXXXXXYXBBBBBBXYXRRRRRRWWWWWWWWWXXXOOOOOOXXXGGGGGG","ligne":"XXXYYYXXXXYXBBBBBBXXXRRRRRRWWWWWWWWWXXXOOOOOOXYXGGGGGG"},"5":{"goal":"XYXYYYXYXXBXBBBBBBXRXRRRRRRWWWWWWWWWXOXOOOOOOXGXGGGGGG","cotes":"XYXYYYXYXXRXBBBBBBXBXRRRRRRWWWWWWWWWXOXOOOOOOXGXGGGGGG","opposees":"XYXYYYXYXXBXBBBBBBXOXRRRRRRWWWWWWWWWXRXOOOOOOXGXGGGGGG"},"6":{"goal":"GYGYYYOYRYBYBBBBBBBRYRRRRRRWWWWWWWWWYOBOOOOOORGOGGGGGG","amis":"RYOYYYGYYYBBBBBBBBRRBRRRRRRWWWWWWWWWYOOOOOOOOYGGGGGGGG"},"7":{"goal":"YYYYYYYYYBBBBBBBBBRRRRRRRRRWWWWWWWWWOOOOOOOOOGGGGGGGGG","c1":"GYGYYYOYRYBYBBBBBBBRYRRRRRRWWWWWWWWWYOBOOOOOORGOGGGGGG","c2":"OYGYYYYYGRRYBBWBBWRGOGRRBRGWWRWWBGWRYBBOOOWOOYOBGGGWRO","c3":"YYOYYYYYGGGOBBWBBRYOBRRRWGWWWBWWWOBGRRROOOGOOYBBGGGRRW","c4":"YYYYYYYYOOOBBBWBBWYBBGRRBRGWWRWWBGWRGGGOOOWOORRRGGGWRO"}};
const TUTO_HEX = { W:"#f5f5f5", Y:"#ffd500", R:"#e62b2b", O:"#ff8c1a", B:"#2b8cff", G:"#2bbf3f", X:"#55555f" };
/* formules affichées pour chaque cas (le cube montré est calculé à partir de ces formules) */
const TUTO_ALGS = {
  1:{ bas:"R2", milieu:"R", retournee:"R' U F' U'" },
  2:{ droite:"R' D' R D", dessous:"R' D' R D", devant:"R' D' R D", haut:"R' D' R" },
  3:{ droite:"U R U' R' U' F' U F", gauche:"U' L' U L U F U' F'", coincee:"U R U' R' U' F' U F" },
  4:{ point:"F U R U' R' F'", L:"F U R U' R' F'", ligne:"F R U R' U' F'" },
  5:{ cotes:"R U2 R' U' R U' R' U'", opposees:"R U2 R' U' R U' R'" },
  6:{ amis:"L' U R U' L U R' U'" },
  7:{ c1:"R' D' R D", c2:"R' D' R D", c3:"R' D' R D", c4:"R' D' R D" },
};
const TUTO_CASES = [ ["edges","corners","centers"], ["bas","milieu","retournee"], ["droite","dessous","devant","haut"],
  ["droite","gauche","coincee"], ["point","L","ligne"], ["cotes","opposees"], ["amis"], ["c1","c2","c3","c4"] ];
const TUTO_VIEW = { "5.cotes":"back" };
const TUTO_NUM = ["1","2","3","4","5","6","7","8"];   /* numéros des étapes du guide */
/* notation : en français comme dans le guide (D droite, G gauche, H haut, B bas, A avant, P arrière ; i = inverse) */
const TUTO_FR = { R:"D", L:"G", U:"H", D:"B", F:"A", B:"P" };
/* textes : les lettres des mouvements suivent la notation choisie
   (textes FR écrits en notation française, textes EN en notation RUR'U') */
const TUTO_RU = { D:"R", G:"L", H:"U", B:"D", A:"F", P:"B" };
function tutoTxt(str, fr, srcFr){
  if(typeof str!=="string") return str;
  if(srcFr && !fr) return str.replace(/(^|[^A-Za-zÀ-ÿ'])([DGHBAP])(i|2)?(?![A-Za-zÀ-ÿ])/g,(m,pre,l,suf)=>pre+TUTO_RU[l]+(suf==="i"?"'":(suf||"")));
  if(!srcFr && fr) return str.replace(/(^|[^A-Za-z'])([RLUDFB])('|2)?(?![A-Za-z-])/g,(m,pre,l,suf)=>pre+TUTO_FR[l]+(suf==="'"?"i":(suf||"")));
  return str;
}
function tutoNote(tok, fr){ if(!fr) return tok; return TUTO_FR[tok[0]] + (tok.endsWith("'")?"i":(tok.endsWith("2")?"2":"")); }
const TUTO_COLOR = ["#ffd23f","#ffd23f","#4ea8ff","#3ddc84","#ff5ea8","#ff8a3d","#9d6cff","#2ee6cf"];

/* cube CSS à 6 faces, état donné face par face (U F R D L B, 9 cases chacune) */
function TutoCube({ state, size=100, back=false, left=false, spin=false, glow }){
  const s=size, half=s/2, f={};
  "UFRDLB".split("").forEach((k,i)=>{ f[k]=state.slice(i*9,i*9+9).split(""); });
  const faceStyle=transform=>({position:"absolute",width:s,height:s,transform,display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"repeat(3,1fr)",gap:Math.max(2,s*.035),padding:Math.max(3,s*.055),
    background:"#0b0b0f",borderRadius:s*.07,boxSizing:"border-box",backfaceVisibility:"hidden"});
  const cells=k=>f[k].map((c,i)=><div key={i} style={{background:TUTO_HEX[c]||TUTO_HEX.X,borderRadius:Math.max(2,s*.05),
    boxShadow:"inset 0 -2px 3px rgba(0,0,0,.25), inset 0 2px 2px rgba(255,255,255,.3)"}}/>);
  const ry = back ? 142 : (left ? 38 : -38);
  return (
    <div style={{width:s*1.45,height:s*1.5,perspective:s*5,display:"flex",alignItems:"center",justifyContent:"center",
      filter:`drop-shadow(0 0 ${glow?14:0}px ${glow||"transparent"}) drop-shadow(0 8px 12px rgba(0,0,0,.45))`}}>
      <style>{`@keyframes tutospin{from{transform:rotateX(-28deg) rotateY(-38deg);}to{transform:rotateX(-28deg) rotateY(322deg);}}`}</style>
      <div style={{width:s,height:s,position:"relative",flexShrink:0,transformStyle:"preserve-3d",
        transform:`rotateX(-28deg) rotateY(${ry}deg)`,animation:spin?"tutospin 12s linear infinite":"none"}}>
        <div style={faceStyle(`rotateX(90deg) translateZ(${half}px)`)}>{cells("U")}</div>
        <div style={faceStyle(`rotateX(-90deg) translateZ(${half}px)`)}>{cells("D")}</div>
        <div style={faceStyle(`translateZ(${half}px)`)}>{cells("F")}</div>
        <div style={faceStyle(`rotateY(180deg) translateZ(${half}px)`)}>{cells("B")}</div>
        <div style={faceStyle(`rotateY(90deg) translateZ(${half}px)`)}>{cells("R")}</div>
        <div style={faceStyle(`rotateY(-90deg) translateZ(${half}px)`)}>{cells("L")}</div>
      </div>
    </div>
  );
}

function TutoAlg({ alg, color, fr }){
  if(!alg) return null;
  const toks = fr ? alg.split(" ").flatMap(m=>m.endsWith("2")?[m[0],m[0]]:[m]) : alg.split(" ");
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:4,justifyContent:"center"}}>
      {toks.map((m0,j)=>{ const m=tutoNote(m0,fr); return (
        <span key={j} style={{minWidth:28,padding:"4px 7px",borderRadius:8,fontWeight:800,fontSize:14,textAlign:"center",
          color:"#1a1228",background:color}}>{m}</span>); })}
    </div>
  );
}

function TutoStepPage({ t, idx, onBack, onGo, video }){
  /* notation : française (D G H B A P, i) ou RUR'U' (R L U D F B, ') — retenue pour tout le tutoriel */
  const [nota,setNota] = useState(()=>{ try{ return localStorage.getItem("rurucube_tuto_nota") || (t.tutoNotation==="fr"?"fr":"ruru"); }catch(e){ return t.tutoNotation==="fr"?"fr":"ruru"; } });
  const pickNota = v=>{ setNota(v); try{ localStorage.setItem("rurucube_tuto_nota",v); }catch(e){} };
  const fr = nota==="fr";
  const notaToggle = (
    <div style={{display:"flex",gap:6,background:PAL.bg2,borderRadius:999,padding:4,marginBottom:12}}>
      {[["fr",t.tutoNotaFr],["ruru",t.tutoNotaEn]].map(([v,l])=>{ const on=nota===v; return (
        <button key={v} onClick={()=>pickNota(v)} style={{flex:1,border:"none",cursor:"pointer",borderRadius:999,padding:"8px 6px",fontFamily:"inherit",
          fontWeight:800,fontSize:13,color:on?"#1a1228":PAL.textDim,background:on?PAL.gold:"transparent"}}>{l}</button>); })}
    </div>);
  const srcFr = t.tutoNotation==="fr";
  const T = x=>tutoTxt(x, fr, srcFr);
  const ch0 = (t.tutoChapters||[])[idx] || {t:"",s:""};
  const ch = { t:T(ch0.t), s:T(ch0.s) };
  const info0 = (t.tutoSteps||[])[idx] || {};
  const info = { ...info0, hold:T(info0.hold), goal:T(info0.goal), intro:(info0.intro||[]).map(T), tips:(info0.tips||[]).map(T),
    notes:(info0.notes||[]).map(T),
    cases:Object.fromEntries(Object.entries(info0.cases||{}).map(([k,c])=>[k,{title:T(c.title),text:T(c.text)}])) };
  const n = TUTO_VIDEOS.length;
  const col = TUTO_COLOR[idx] || PAL.gold;
  const st = TUTO_STATES[idx] || {};
  const [spin,setSpin] = useState(true);
  useEffect(()=>{ window.scrollTo(0,0); },[idx]);
  const wide = useWide();
  const caseSize = wide ? 96 : 84;
  const card = {background:PAL.card,borderRadius:16,padding:"13px 14px",boxShadow:`0 0 0 2px ${PAL.cardHi}`};
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 14px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <div style={{width:"100%",maxWidth:460,display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
        <GhostBtn onClick={onBack} color={PAL.gold}>←</GhostBtn>
        <div style={{flex:1,fontWeight:700,fontSize:13,color:PAL.textDim,textAlign:"right"}}>{t.tutoStepOf.replace("{n}",TUTO_NUM[idx]).replace("{total}","8")}</div>
      </div>
      <div style={{width:"100%",maxWidth:460}}>
        <div style={{display:"flex",alignItems:"center",gap:11,marginBottom:12}}>
          <span style={{width:40,height:40,flexShrink:0,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",
            fontWeight:800,fontSize:TUTO_NUM[idx].length>1?13:17,background:col,color:"#1a1228"}}>{TUTO_NUM[idx]}</span>
          <div>
            <div style={{fontWeight:800,fontSize:20,color:PAL.text,lineHeight:1.15}}>{ch.t}</div>
            <div style={{fontSize:12.5,color:PAL.textDim,fontWeight:600,marginTop:3}}>{ch.s}</div>
          </div>
        </div>

        {idx===0&&notaToggle}

        {/* comment tenir le cube */}
        {info.hold&&<div style={{...card,marginBottom:12,display:"flex",gap:10,alignItems:"flex-start"}}>
          <span style={{fontSize:20,lineHeight:1}}>✋</span>
          <div><div style={{fontSize:11,fontWeight:800,letterSpacing:1,color:PAL.green,textTransform:"uppercase",marginBottom:3}}>{t.tutoHold}</div>
            <div style={{fontSize:14,color:PAL.text,fontWeight:600,lineHeight:1.45}}>{info.hold}</div></div>
        </div>}

        {/* l'objectif */}
        {st.goal&&<div style={{...card,marginBottom:12,display:"flex",alignItems:"center",gap:12,boxShadow:`0 0 0 2px ${col}88`}}>
          <div onClick={()=>setSpin(v=>!v)} style={{cursor:"pointer",flexShrink:0}}><TutoCube state={st.goal} size={wide?110:96} spin={spin} glow={col+"99"}/></div>
          <div style={{minWidth:0}}>
            <div style={{fontSize:11,fontWeight:800,letterSpacing:1,color:col,textTransform:"uppercase",marginBottom:4}}>🎯 {t.tutoGoal}</div>
            <div style={{fontSize:14,color:PAL.text,fontWeight:600,lineHeight:1.45}}>{info.goal}</div>
          </div>
        </div>}

        {(info.intro||[]).map((p,i)=>(
          <p key={i} style={{margin:"0 2px 10px",fontSize:14,lineHeight:1.55,color:PAL.text,fontWeight:500}}>{p}</p>))}

        {/* les cas */}
        {(TUTO_CASES[idx]||[]).length>0&&<div style={{fontSize:12,fontWeight:800,letterSpacing:1.5,color:PAL.textDim,margin:"8px 0 9px"}}>
          {idx===0?t.tutoPieces.toUpperCase():t.tutoCases.toUpperCase()}</div>}
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {(TUTO_CASES[idx]||[]).map(k=>{ const c=(info.cases||{})[k]||{}; const alg=(TUTO_ALGS[idx]||{})[k];
            return (
              <div key={k} style={{...card,display:"flex",alignItems:"center",gap:10}}>
                <div style={{flexShrink:0}}><TutoCube state={st[k]} size={caseSize} left={TUTO_VIEW[idx+"."+k]==="left"} back={TUTO_VIEW[idx+"."+k]==="back"}/></div>
                <div style={{minWidth:0,flex:1,display:"flex",flexDirection:"column",gap:7}}>
                  <div style={{fontWeight:800,fontSize:14.5,color:PAL.text,lineHeight:1.2}}>{c.title}</div>
                  {c.text&&<div style={{fontSize:12.5,color:PAL.textDim,fontWeight:600,lineHeight:1.45}}>{c.text}</div>}
                  {alg&&<div style={{alignSelf:"flex-start"}}><TutoAlg alg={alg} color={col} fr={fr}/></div>}
                </div>
              </div>);
          })}
        </div>

        {/* étape 1 : choix de la notation, cube vu de face en haut, lettres à toucher en bas */}
        {idx===0&&<div style={{...card,marginTop:12}}>
          <div style={{fontSize:11,fontWeight:800,letterSpacing:1,color:PAL.textDim,textTransform:"uppercase",marginBottom:9}}>{t.tutoMoves}</div>
          <TutoMovesCube t={t} fr={fr} labels={t.tutoFaceNames}/>
          <div style={{marginTop:12}}>{notaToggle}</div>
          {(info.notes||[]).map((p,i)=><p key={i} style={{margin:"10px 0 0",fontSize:13,lineHeight:1.5,color:PAL.textDim,fontWeight:600}}>{p}</p>)}
        </div>}

        {(info.tips||[]).map((p,i)=>(
          <div key={i} style={{marginTop:10,fontSize:13,lineHeight:1.5,color:PAL.text,fontWeight:600,background:`${col}22`,borderRadius:12,padding:"10px 12px"}}>💡 {p}</div>))}

        {idx>0&&<div style={{marginTop:14}}>{notaToggle}</div>}

        {/* la vidéo, en dessous */}
        <div style={{fontSize:12,fontWeight:800,letterSpacing:1.5,color:PAL.textDim,margin:"20px 0 9px"}}>🎬 {t.tutoVideo.toUpperCase()}</div>
        {video ? (
          <div style={{width:"100%",aspectRatio:"16 / 9",borderRadius:14,overflow:"hidden",background:"#000",boxShadow:`0 0 0 2px ${PAL.gold}`}}>
            <iframe src={`https://www.youtube-nocookie.com/embed/${video}?rel=0&modestbranding=1&playsinline=1`}
              title={ch.t} loading="lazy" allowFullScreen allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              style={{width:"100%",height:"100%",border:"none",display:"block"}}/>
          </div>
        ) : (
          <div style={{background:PAL.bg2,borderRadius:14,padding:"22px 14px",textAlign:"center",fontSize:12.5,color:PAL.textFaint,fontWeight:600,lineHeight:1.5}}>
            {t.tutoSoonLong}
          </div>
        )}

        <div style={{display:"flex",gap:10,marginTop:20}}>
          <button disabled={idx===0} onClick={()=>onGo(idx-1)} style={{flex:1,border:"none",cursor:idx===0?"default":"pointer",borderRadius:14,padding:"12px 8px",
            fontFamily:"inherit",fontWeight:800,fontSize:14,color:PAL.text,background:PAL.card,opacity:idx===0?.35:1,boxShadow:`0 3px 0 ${PAL.bg2}, 0 0 0 2px ${PAL.cardHi}`}}>‹ {t.tutoPrev}</button>
          <button disabled={idx===n-1} onClick={()=>onGo(idx+1)} style={{flex:1,border:"none",cursor:idx===n-1?"default":"pointer",borderRadius:14,padding:"12px 8px",
            fontFamily:"inherit",fontWeight:800,fontSize:14,color:"#3a2a00",background:`linear-gradient(180deg,#ffe066,${PAL.gold})`,opacity:idx===n-1?.35:1,boxShadow:`0 4px 0 ${shade(PAL.gold,-55)}`}}>{t.tutoNext} ›</button>
        </div>
      </div>
    </div>
  );
}

function TutoScreen({ onBack, t }){
  const wide = useWide();
  const W = wide?760:420;
  const [ouvert,setOuvert] = useState(null);
  const chapitres = t.tutoChapters || [];
  if(ouvert!=null) return <TutoStepPage t={t} idx={ouvert} video={TUTO_VIDEOS[ouvert].yt}
    onBack={()=>{ setOuvert(null); window.scrollTo(0,0); }} onGo={i=>setOuvert(i)}/>;
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 14px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <div style={{width:"100%",maxWidth:W,display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
        <GhostBtn onClick={onBack} color={PAL.gold}>{t.menu}</GhostBtn>
        <PlayerBadge t={t}/>
      </div>

      <img src={TUTO_BTN} alt={t.tuto} draggable={false}
        style={{width:"100%",maxWidth:380,marginBottom:16,filter:"drop-shadow(0 8px 22px rgba(0,0,0,.45))"}}/>

      <div style={{fontSize:13.5,color:PAL.textDim,fontWeight:600,textAlign:"center",
        maxWidth:340,lineHeight:1.5,marginBottom:18}}>{t.tutoIntro}</div>

      <div className="stagger" style={{width:"100%",maxWidth:W,display:wide?"grid":"flex",
        gridTemplateColumns:wide?"1fr 1fr":undefined,flexDirection:wide?undefined:"column",gap:11,alignItems:"start"}}>
        {TUTO_VIDEOS.map((v,i)=>{
          const ch = chapitres[i] || { t:v.id, s:"" };
          const actif = ouvert===i;
          const dispo = !!v.yt;
          return (
            <div key={v.id} style={{background:PAL.card,borderRadius:18,overflow:"hidden",
              boxShadow:`0 0 0 2px ${actif?PAL.gold:PAL.cardHi}, 0 4px 12px rgba(0,0,0,.25)`}}>
              <button onClick={()=>setOuvert(actif?null:i)}
                style={{width:"100%",border:"none",background:"transparent",cursor:"pointer",
                  padding:"13px 14px",display:"flex",alignItems:"center",gap:11,textAlign:"left"}}>
                <span style={{width:34,height:34,flexShrink:0,borderRadius:"50%",display:"flex",
                  alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,
                  background:TUTO_COLOR[i]||PAL.gold,color:"#1a1228"}}>{TUTO_NUM[i]}</span>
                <span style={{flex:1,minWidth:0}}>
                  <span style={{display:"block",fontWeight:800,fontSize:14.5,color:PAL.text,lineHeight:1.2}}>{ch.t}</span>
                  <span style={{display:"block",fontSize:11.5,color:PAL.textDim,fontWeight:600,marginTop:3}}>
                    {ch.s}
                  </span>
                </span>
                <span style={{fontSize:12,fontWeight:800,color:"#3a2a00",background:PAL.gold,borderRadius:999,padding:"5px 10px",flexShrink:0}}>3D ›</span>
              </button>

              {actif&&(
                <div style={{padding:"0 12px 13px"}}>
                  {dispo ? (
                    <div style={{width:"100%",aspectRatio:"16 / 9",borderRadius:14,overflow:"hidden",
                      background:"#000",boxShadow:`0 0 0 2px ${PAL.gold}`}}>
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${v.yt}?rel=0&modestbranding=1&playsinline=1`}
                        title={ch.t} loading="lazy" allowFullScreen
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        style={{width:"100%",height:"100%",border:"none",display:"block"}}/>
                    </div>
                  ) : (
                    <div style={{background:PAL.bg2,borderRadius:14,padding:"22px 14px",textAlign:"center",
                      fontSize:12.5,color:PAL.textFaint,fontWeight:600,lineHeight:1.5}}>
                      🎬 {t.tutoSoonLong}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
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
function Hint({ children, color, icon, th }){
  const c = color||PAL.purple;
  return (
    <div style={{display:"flex",alignItems:"center",gap:12,borderRadius:16,padding:"13px 16px",maxWidth:360,width:"100%",
      background:th?`linear-gradient(180deg,${th.carte},${th.carte2})`:`linear-gradient(135deg,${c}30,${PAL.card})`,
      boxShadow:th?`${th.carteOmbre}, 0 4px 0 ${th.bord}`:`0 4px 0 ${PAL.bg2}, 0 0 18px ${c}33`,
      border:th?"none":`2px solid ${PAL.gold}`,
      animation:"slideUp .3s ease-out"}}>
      <span style={{fontSize:24,flexShrink:0}}>{icon||"👉"}</span>
      <span style={{fontSize:16,color:th?th.ink:"#ffffff",fontWeight:700,lineHeight:1.4,textAlign:"left"}}>{children}</span>
    </div>
  );
}

/* ─── Modale "Comment jouer" ──────────────────────────────────── */
function HowToPlay({ t, onClose, skin }){
  const neon = skin==="sudoku", wood = skin==="classic", paper = skin==="monstro";
  const isLight = wood || paper;
  const theme = neon ? SKINS.sudoku.color : wood ? "#8a6539" : paper ? "#132a4d" : PAL.gold;
  const modalBg = neon ? "#1a1540" : wood ? "#fdf6ea" : paper ? "#ffffff" : PAL.card;
  const modalBorder = neon ? SKINS.sudoku.color : wood ? "#c69c6d" : paper ? "#2a4570" : PAL.gold;
  const titleColor = isLight ? "#2a2012" : "#ffffff";
  const bodyColor = isLight ? "#2a2012" : "#ffffff";
  const sectionBg = neon ? "#221c52" : wood ? "#f3e6d0" : paper ? "#eef2f7" : PAL.bg2;
  const closeBg = isLight ? "#e7dcc4" : PAL.bg2;
  const closeColor = isLight ? "#2a2012" : PAL.textDim;

  const sections = [
    ...(skin==="sudomono" ? [{h:t.sudomonoRuleTitle, p:t.sudomonoRule, c:SKINS.sudomono.color}] : []),
    ...(skin==="chesscube" ? [{h:t.chesscubeRuleTitle, p:t.chesscubeRule, c:SKINS.chesscube.color}] : []),
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

/* ─── Pastille « qui joue » (tap pour changer de joueur) ────────── */
function PlayerBadge({ tone, t }){
  const [open,setOpen] = useState(false);
  const [,setTick] = useState(0);
  const p = currentProfile();
  const clair = tone==="paper" || tone==="wood";
  return (
    <>
      <button onClick={()=>setOpen(true)} style={{display:"inline-flex",alignItems:"center",gap:6,flexShrink:0,
        border:"none",cursor:"pointer",fontFamily:"inherit",
        borderRadius:999,padding:"5px 11px 5px 8px",maxWidth:150,
        background: tone==="paper" ? "#ffffff"
                 : tone==="wood"  ? "#fbeed8"
                 : tone==="neon"  ? "#1c1745" : PAL.card,
        boxShadow: tone==="paper" ? "0 0 0 2px #2a4570"
                 : tone==="wood"  ? "0 0 0 2px #c69c6d"
                 : tone==="neon"  ? `0 0 0 1.5px ${SKINS.sudoku.color}, 0 0 10px ${SKINS.sudoku.color}55`
                 : `0 0 0 1.5px ${PAL.cardHi}`}}>
        <span style={{fontSize:15,lineHeight:1}}>{p.emoji}</span>
        <span style={{fontWeight:800,fontSize:12,lineHeight:1,overflow:"hidden",
          textOverflow:"ellipsis",whiteSpace:"nowrap",
          color: clair ? (tone==="wood" ? "#4a3418" : "#132a4d") : PAL.text}}>{p.name}</span>
        <span style={{fontSize:9,opacity:.6,flexShrink:0,
          color: clair ? (tone==="wood" ? "#4a3418" : "#132a4d") : PAL.text}}>▾</span>
      </button>
      {open&&<ProfileModal t={t} onClose={()=>setOpen(false)} onChange={()=>setTick(x=>x+1)}/>}
    </>
  );
}

/* ─── Header d'écran de jeu ───────────────────────────────────── */
function Header({ onBack, title, color, sub, t, bg, border, shadow, tone }){
  return (
    <div style={{width:"100%",maxWidth:380,display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
      <GhostBtn onClick={onBack} color={color} bg={bg} border={border} shadow={shadow}>{t.menu}</GhostBtn>
      <div style={{flex:1,minWidth:0}}>
        <div style={{fontWeight:700,fontSize:20,color}}>{title}</div>
        {sub&&<div style={{fontSize:12,color:PAL.textFaint,fontWeight:600}}>{sub}</div>}
      </div>
      <PlayerBadge tone={tone} t={t}/>
    </div>
  );
}

/* ═══ ÉCRAN CHALLENGE (Face / Reverse / Défi du jour) ═══════════ */
function ChallengeScreen({ onBack, t, skin, daily, forceMode }){
  const wide = useWide();
  const S = SKINS[skin];
  const sprites = S.sprites();
  const [mode,setMode] = useState(forceMode||"normal");  // normal | reverse | blind | motifs
  const [memoLimit,setMemoLimit] = useState(5);
  const [ph,setPh] = useState("ready");             // ready | count | playing | done
  const [count,setCount] = useState(5);
  const [face,setFace] = useState(null);
  const [ms,setMs] = useState(0);
  const [limit,setLimit] = useState(60);
  const [failed,setFailed] = useState(false);
  const [isRecord,setIsRecord] = useState(false);
  const timer = useRef(null);
  const startRef = useRef(0);

  const statKey = daily ? "daily" : (mode==="normal"?"challenge":(mode==="reverse"?"reverse":(mode==="motifs"?"motifs":"blind")));
  const data = loadS();
  const skinData = data[skin] || {};
  const stats = skinData[statKey] || { best:null, games:0, sessions:[], streak:0 };
  const today = todayKey();
  const dailyDoneTime = daily ? (skinData.daily?.days?.[today] ?? null) : null;
  const dailyLocked = daily && dailyDoneTime!=null;   // 1 seul essai par jour

  useEffect(()=>()=>clearInterval(timer.current),[]);

  function begin(){
    if(dailyLocked) return;                            // défi déjà relevé aujourd'hui
    setCount(5); setPh("count");
    let c = 5;
    clearInterval(timer.current);
    timer.current = setInterval(()=>{
      c -= 1;
      if(c<=0){
        clearInterval(timer.current);
        const f = daily ? dailyFace(skin) : (mode==="motifs" ? motifFace() : S.gen());
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
  function stop(){
    if(ph!=="playing") return;
    clearInterval(timer.current);
    const el = Date.now()-startRef.current;
    setMs(el);
    const d = loadS(); const sd = d[skin]||{};
    if(daily){
      const dd = sd.daily || { days:{} , best:null, games:0, sessions:[] };
      if(dd.days[today]==null){                        // un seul temps enregistré par jour
        dd.days[today]=el;
        dd.games=(dd.games||0)+1;
        if(dd.best==null || el<dd.best) dd.best=el;
      }
      sd.daily = dd; d[skin]=sd; saveS(d);
    } else {
      const st = sd[statKey] || { best:null, games:0, sessions:[], streak:0 };
      const rec = st.best==null || el < st.best;
      if(rec){ st.best = el; setIsRecord(true); }
      st.games=(st.games||0)+1;
      st.streak=(st.streak||0)+1;
      st.sessions=[...(st.sessions||[]),{date:Date.now(),time:el}].slice(-50);
      sd[statKey]=st; d[skin]=sd; saveS(d);
    }
    setPh("done");
  }
  const color = daily ? PAL.purple : (mode==="normal"?PAL.gold:(mode==="reverse"?PAL.orange:PAL.blue));
  const hidden = mode==="blind" && !daily && ph==="playing" && ms >= memoLimit*1000;

  // Ordinateur : barre espace = démarrer (ready) / arrêter le chrono (playing)
  useSpaceKey(()=>{
    if(ph==="ready"){ begin(); }
    else if(ph==="playing"){
      if(mode==="blind" && !daily && !hidden) return;  // en Blind, on attend la phase à l'aveugle
      stop();
    }
    else if(ph==="done" && !daily){ setPh("ready"); }
  });

  const neon = skin==="sudoku";
  const wood = skin==="classic";
  const paper = skin==="monstro";
  const mono  = skin==="illusion";   /* noir et blanc, seules les cartes de mode sont colorées */
  const th = SKIN_UI[skin] || null;   /* habillage des pages de jeu */
  const OBJ_E=["🐌","🚶","🏃","⚡"];
  const objTimes=[60000,45000,30000,15000];

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:SUDO_BG}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {mono&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"linear-gradient(180deg,#1c1c1e 0%,#0d0d0f 60%,#000000 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
      <Header onBack={onBack} t={t} tone={wood?"wood":(paper?"paper":(neon?"neon":undefined))} color={wood?"#4a3418":(paper?"#132a4d":color)}
        bg={wood?"#fbeed8":(paper?"#ffffff":undefined)} border={wood?"#c69c6d":(paper?"#2a4570":undefined)} shadow={wood?"#8a6539":(paper?"#2a4570":undefined)}
        title={daily?`🗓️ ${t.daily}`:(mode==="reverse"?`⏳ ${t.reverseTile}`:(mode==="blind"?`🙈 ${t.blind}`:(mode==="motifs"?`🔤 ${t.motifs}`:`🎯 ${t.faceTile}`)))}
        sub={daily?new Date().toLocaleDateString():undefined}/>

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
      {th ? (
        <div style={{marginBottom:ph==="ready"?18:14}}>
          <ClTimer th={th}
            valeur={mode==="reverse"&&!daily&&ph==="playing" ? fmt(Math.max(0,limit*1000-ms)) : fmt(ms)}
            sousTitre={ph==="ready"&&!dailyLocked ? t.prepCube : null}/>
        </div>
      ) : (
        <div style={{fontWeight:700,fontSize:52,color,lineHeight:1,margin:"6px 0 14px",fontVariantNumeric:"tabular-nums",textShadow:`0 0 22px ${color}44`}}>
          {mode==="reverse"&&!daily&&ph==="playing" ? fmt(Math.max(0,limit*1000-ms)) : fmt(ms)}
        </div>
      )}

      {ph==="count"&&(
        <div style={{fontWeight:700,fontSize:110,color,animation:"pop .3s ease-out",textShadow:`0 0 40px ${color}66`,margin:"30px 0"}}>{count}</div>
      )}

      {ph==="ready"&&(
        <>
          {daily&&(
            <div style={{borderRadius:16,padding:"14px 18px",marginBottom:16,maxWidth:320,textAlign:"center",
              background:th?`linear-gradient(180deg,${th.carte},${th.carte2})`:PAL.card,
              boxShadow:th?th.carteOmbre:`0 0 0 2px ${dailyLocked?PAL.purple:PAL.gold}`}}>
              {dailyLocked ? (
                <>
                  <div style={{fontSize:16,color:th?th.ink:"#ffffff",fontWeight:700,lineHeight:1.4}}>{t.dailyLocked}</div>
                  <div style={{marginTop:8,fontWeight:700,fontSize:28,color:PAL.gold,fontVariantNumeric:"tabular-nums"}}>{fmt(dailyDoneTime)}</div>
                  <div style={{marginTop:8,fontSize:14,color:th?th.ink2:"#ffffffcc",fontWeight:600,lineHeight:1.5}}>{t.dailyOnce}</div>
                  <DailyCountdown t={t} color={PAL.purple}/>
                  {th&&dailyDoneTime!=null&&(
                    <ShareDaily t={t} th={th} skin={skin} face={dailyFace(skin)} sprites={sprites} ms={dailyDoneTime}/>
                  )}
                </>
              ) : (
                <div style={{fontSize:15,color:th?th.ink:"#ffffff",fontWeight:600,lineHeight:1.5}}>{t.dailyTodo}</div>
              )}
            </div>
          )}

          {(()=>{
            const hintBlock = !dailyLocked&&!(th&&!daily&&mode==="normal")&&(
              <div style={{marginBottom:14,width:"100%",display:"flex",justifyContent:"center"}}>
                <Hint th={th} color={color} icon={daily?"🗓️":"🎲"}>{daily?t.ctxDailyReady:(mode==="reverse"?t.ctxReverse:(mode==="blind"?t.ctxBlindReady:(mode==="motifs"?t.ctxMotifs:t.ctxReady)))}</Hint>
              </div>
            );
            const btnBlock = (
              <>
                <div style={{width:"100%",maxWidth:300}}>
                  {dailyLocked
                    ? <GhostBtn onClick={onBack} color={wood?"#4a3418":(paper?"#132a4d":PAL.purple)} bg={wood?"#fbeed8":(paper?"#ffffff":undefined)} border={wood?"#c69c6d":(paper?"#2a4570":undefined)} shadow={wood?"#8a6539":(paper?"#2a4570":undefined)}>{t.menu}</GhostBtn>
                    : (th
                        ? <ClBigBtn th={th} onClick={begin} icon="🚀">{t.go.replace(/^[^A-Za-zÀ-ÿ]+/,"")}</ClBigBtn>
                        : <CandyBtn onClick={begin} color={neon?SKINS.sudoku.color:(paper?"#ffffff":color)} ring={neon?SKINS.sudoku.color:(paper?"#132a4d":undefined)}>{t.go}</CandyBtn>)}
                </div>
                {isDesktop&&!dailyLocked&&(
                  <div style={{marginTop:8,fontSize:12,fontWeight:600,color:wood?"#8a6539":(paper?"#2a4570":PAL.textFaint)}}>{t.spaceStart}</div>
                )}
              </>
            );
            const statsBlock = !daily&&(
              <>
                {th&&<ClStats th={th} t={t} stats={stats}/>}
                {!th&&<div style={{display:"flex",gap:10,marginTop:18}}>
                  <StatChip label={t.record} value={fmt(stats.best)} color={color} bg={neon?"#161236":(wood?"#fbeed8":(paper?"#eef2f7":undefined))} ring={neon?SKINS.sudoku.color:(wood?"#c69c6d":(paper?"#2a4570":undefined))} labelColor={wood?"#4a3418":(paper?"#2a4570":undefined)}/>
                  <StatChip label={t.games} value={stats.games||0} color={PAL.green} bg={neon?"#161236":(wood?"#fbeed8":(paper?"#eef2f7":undefined))} ring={neon?SKINS.sudoku.color:(wood?"#c69c6d":(paper?"#2a4570":undefined))} labelColor={wood?"#4a3418":(paper?"#2a4570":undefined)}/>
                  <StatChip label={t.streak} value={`${stats.streak||0}🔥`} color={PAL.orange} bg={neon?"#161236":(wood?"#fbeed8":(paper?"#eef2f7":undefined))} ring={neon?SKINS.sudoku.color:(wood?"#c69c6d":(paper?"#2a4570":undefined))} labelColor={wood?"#4a3418":(paper?"#2a4570":undefined)}/>
                </div>}
                {th&&mode==="normal"&&<ClObjectifs th={th} t={t} stats={stats}/>}
                {!th&&mode==="normal"&&(
                  <div style={{width:"100%",maxWidth:340,marginTop:18}}>
                    <div style={{fontWeight:700,fontSize:14,color:wood?"#4a3418":(paper?"#132a4d":PAL.textDim),marginBottom:8}}>{t.objectives}</div>
                    <div style={{display:"flex",gap:8}}>
                      {t.obj.map((o,i)=>{
                        const ok = stats.best!=null && stats.best<=objTimes[i];
                        const tileBg = neon?"#161236":(wood?"#fbeed8":(paper?"#eef2f7":PAL.card));
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
                {th ? <ClChartPanel th={th} t={t} stats={stats}/> : <ProgressPanel t={t} stats={stats} color={color}/>}
              </>
            );
            if(wide && !daily) return (
              <div style={{display:"flex",gap:36,width:"100%",maxWidth:820,alignItems:"flex-start",justifyContent:"center",flexWrap:"wrap"}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:"0 1 320px"}}>
                  {hintBlock}{btnBlock}
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:"1 1 360px",maxWidth:420}}>
                  {statsBlock}
                </div>
              </div>
            );
            return <>{hintBlock}{btnBlock}{statsBlock}</>;
          })()}
        </>
      )}

      {ph==="playing"&&face&&(
        <>
          <div style={{marginBottom:12,width:"100%",display:"flex",justifyContent:"center"}}>
            <Hint th={th} color={color} icon={hidden?"🙈":"⚡"}>
              {mode==="reverse"&&!daily?t.ctxReverse:(mode==="blind"?(hidden?t.ctxBlindHidden:t.ctxBlindMemo):t.ctxPlaying)}
            </Hint>
          </div>
          {hidden ? (
            <div onClick={stop} style={{width:Math.min(300,window.innerWidth-60),height:Math.min(300,window.innerWidth-60),
              borderRadius:22,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
              background:neon?`linear-gradient(160deg,${shade(SKINS.sudoku.color,-70)},#100c2c)`:(wood?`linear-gradient(160deg,#fffdf8,#fbeed8)`:`linear-gradient(160deg,${shade(PAL.blue,-70)},${PAL.dark})`),
              boxShadow:neon?`0 0 30px ${SKINS.sudoku.color}, 0 10px 30px rgba(0,0,0,.6), 0 0 0 2px ${SKINS.sudoku.color}`:(wood?`0 0 22px #c69c6d66, 0 8px 22px rgba(120,90,50,.25), 0 0 0 2px #c69c6d`:`0 0 28px ${PAL.blue}55, 0 10px 30px rgba(0,0,0,.45), 0 0 0 2px ${PAL.gold}`),
              animation:"pop .35s ease-out"}}>
              <span style={{fontSize:64,filter:"drop-shadow(0 4px 10px rgba(0,0,0,.5))"}}>🙈</span>
            </div>
          ) : (
            <CubeFace cells={face} size={Math.min(300,window.innerWidth-60)} glow={neon?SKINS.sudoku.color:(wood?"#c69c6d":color)} sprites={sprites} onClick={mode==="blind"?undefined:stop} dark={neon} light={wood}/>
          )}
          <div style={{marginTop:14,fontSize:16,color:th?(th.pageInk||th.ink):"#ffffff",fontWeight:700}}>
            {t.tapGrid}{isDesktop&&<span style={{opacity:.8,fontSize:13,fontWeight:600}}> {t.spaceStop}</span>}
          </div>
        </>
      )}

      {ph==="done"&&(
        <div style={{textAlign:"center",display:"flex",flexDirection:wide&&!daily?"row":"column",
          alignItems:wide&&!daily?"flex-start":"center",justifyContent:"center",gap:wide&&!daily?36:0,
          width:"100%",maxWidth:wide&&!daily?820:undefined,flexWrap:"wrap"}}>
          {isRecord&&<Confetti/>}
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:wide&&!daily?"0 1 320px":undefined}}>
            <div style={{borderRadius:22,padding:"14px 22px",marginBottom:14,animation:"pop .35s ease-out",
              background:th?`linear-gradient(180deg,${th.plaque1},${th.plaque2})`:PAL.card,
              boxShadow:th?th.plaqueRing:`0 0 0 2px ${PAL.gold}`}}>
              <div style={{fontSize:11,letterSpacing:2,color:th?th.ink2:PAL.textFaint,fontWeight:700}}>{isRecord?"🏆":"⏱️"}</div>
              <div style={{fontWeight:800,fontSize:44,lineHeight:1.05,fontVariantNumeric:"tabular-nums",
                color:th?th.ink:(isRecord?PAL.gold:color)}}>{fmt(ms)}</div>
            </div>
            {face&&<CubeFace cells={face} size={Math.min(220,window.innerWidth-110)} sprites={sprites} dark={neon} light={wood} glow={neon?SKINS.sudoku.color:(wood?"#c69c6d":null)}/>}
          </div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:wide&&!daily?"1 1 300px":undefined,maxWidth:wide&&!daily?360:undefined}}>
            {mode==="reverse"&&!daily&&<div style={{fontWeight:700,fontSize:18,color:failed?PAL.red:PAL.green,marginTop:12}}>{failed?t.timeUp:t.success}</div>}
            {isRecord&&<div style={{fontWeight:700,fontSize:17,color:PAL.gold,marginTop:8,animation:"wiggle .6s ease-in-out 3"}}>{t.newRecord}</div>}
            {daily&&(
              <>
                {th&&<ShareDaily t={t} th={th} skin={skin} face={face} sprites={sprites} ms={ms}/>}
                <div style={{marginTop:12,textAlign:"center",maxWidth:300}}>
                  <div style={{fontSize:14,color:th?th.ink2:"#ffffffcc",fontWeight:600,lineHeight:1.5}}>{t.dailyOnce}</div>
                  <DailyCountdown t={t} color={PAL.purple}/>
                </div>
              </>
            )}
            <div style={{marginTop:16,width:"100%",maxWidth:300}}>
              {!daily
                ? (th ? <ClBigBtn th={th} onClick={()=>{setPh("ready");}} icon="🔁">{t.replay.replace(/^[^A-Za-zÀ-ÿ]+/,"")}</ClBigBtn>
                        : <CandyBtn onClick={()=>{setPh("ready");}} color={neon?SKINS.sudoku.color:(paper?"#ffffff":color)} ring={neon?SKINS.sudoku.color:(paper?"#132a4d":undefined)}>{t.replay}</CandyBtn>)
                : (th ? <ClBigBtn th={th} onClick={onBack} icon="🏠">{t.menu.replace("← ","")}</ClBigBtn>
                        : <CandyBtn onClick={onBack} color={neon?SKINS.sudoku.color:(paper?"#ffffff":color)} ring={neon?SKINS.sudoku.color:(paper?"#132a4d":undefined)}>{t.menu.replace("← ","")}</CandyBtn>)}
            </div>
            {(isRecord||daily)&&skin==="classic"&&<ShopNudge t={t}/>}
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══ ÉCRAN CHRONO CUBE (résolution complète) ═══════════════════ */
/* ─── Le cube du challenge en 3D qui tourne (chronos de résolution complète) ───
   Faces du vrai cube : cases images (Monstro, Sudocube, Illusion, Savants, Civilisations),
   grandes images (Chess, Sudocube Mono) ou couleurs unies (Classique). */
/* Les cubes de la collection RUR'U' que l'on peut chronométrer */
const CHRONO_CUBES = [
  { id:"monstro", fr:"Monstro", en:"Monstro", color:"#2fd46b" }, { id:"classic", fr:"Classique", en:"Classic", color:"#2f7bff" },
  { id:"sudoku", fr:"Sudocube", en:"Sudocube", color:"#ff2b2b" }, { id:"illusion", fr:"Illusion", en:"Illusion", color:"#ffd60a" },
  { id:"chesscube", fr:"Chess", en:"Chess", color:"#22c7e8" }, { id:"sudomono", fr:"Sudo Mono", en:"Sudo Mono", color:"#ff4fb0" },
  { id:"savants", fr:"Scientifiques", en:"Scientists", color:"#a066ff" }, { id:"civi", fr:"Civilisations", en:"Civilisations", color:"#ff8a1a" },
];
function ChronoCubePicker({ t, value, onChange }){
  const en = t.go && t.go.indexOf("GO")>=0 && t.replay==="↻ Replay";
  return (
    <div style={{width:"100%",maxWidth:340,marginBottom:6}}>
      <div style={{fontSize:11.5,fontWeight:800,letterSpacing:1.5,color:PAL.textDim,textAlign:"center",marginBottom:8}}>{t.chronoPickCube}</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6}}>
        {CHRONO_CUBES.map(c=>{ const on=value===c.id; return (
          <button key={c.id} onClick={()=>onChange(c.id)} style={{border:"none",cursor:"pointer",borderRadius:12,padding:"7px 2px",fontFamily:"inherit",
            fontWeight:800,fontSize:11.5,lineHeight:1.15,color:on?"#1a1228":PAL.text,background:on?c.color:PAL.card,
            boxShadow:on?`0 3px 0 ${shade(c.color,-55)}`:`0 3px 0 ${PAL.bg2}, 0 0 0 2px ${c.color}88`}}>{en?c.en:c.fr}</button>); })}
      </div>
    </div>
  );
}
function SkinSpinCube({ skin, size=150, glow, onClick }){
  const s=size, half=s/2;
  const tiles = (typeof tiles3d==="function") ? tiles3d(skin) : null;
  const big = skin==="chesscube" ? CHESS3D_IMG : (skin==="sudomono" ? SUDOMONO_IMG : null);
  const face = k=>{
    if(tiles) return tiles[k].map((src,i)=>(
      <img key={i} src={src} alt="" draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:Math.max(2,s*.035),display:"block"}}/>));
    if(big) return null;
    return Array.from({length:9},(_,i)=>(
      <div key={i} style={{background:CLASSIC3D_COLORS[k],borderRadius:Math.max(2,s*.04),
        boxShadow:"inset 0 -2px 3px rgba(0,0,0,.25), inset 0 2px 2px rgba(255,255,255,.3)"}}/>));
  };
  const st = (k,transform)=>({position:"absolute",width:s,height:s,transform,boxSizing:"border-box",backfaceVisibility:"hidden",
    background:"#0c0c0c",borderRadius:s*.06,overflow:"hidden",
    ...(big ? {backgroundImage:`url(${big[k]})`,backgroundSize:"cover",backgroundPosition:"center",border:`${Math.max(3,s*.03)}px solid #0c0c0c`}
            : {display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"repeat(3,1fr)",gap:Math.max(2,s*.025),padding:Math.max(3,s*.035)})});
  return (
    <div onClick={onClick} style={{width:s*1.55,height:s*1.6,perspective:s*5,display:"flex",alignItems:"center",justifyContent:"center",
      cursor:onClick?"pointer":"default",animation:"floaty 3s ease-in-out infinite",
      filter:`drop-shadow(0 0 26px ${glow||"#ffffff"}66) drop-shadow(0 10px 16px rgba(0,0,0,.5))`}}>
      <style>{`@keyframes skinspin{from{transform:rotateX(-24deg) rotateY(0deg);}to{transform:rotateX(-24deg) rotateY(360deg);}}`}</style>
      <div style={{width:s,height:s,position:"relative",flexShrink:0,transformStyle:"preserve-3d",animation:"skinspin 9s linear infinite"}}>
        <div style={st("U",`rotateX(90deg) translateZ(${half}px)`)}>{face("U")}</div>
        <div style={st("D",`rotateX(-90deg) translateZ(${half}px)`)}>{face("D")}</div>
        <div style={st("F",`translateZ(${half}px)`)}>{face("F")}</div>
        <div style={st("B",`rotateY(180deg) translateZ(${half}px)`)}>{face("B")}</div>
        <div style={st("R",`rotateY(90deg) translateZ(${half}px)`)}>{face("R")}</div>
        <div style={st("L",`rotateY(-90deg) translateZ(${half}px)`)}>{face("L")}</div>
      </div>
    </div>
  );
}

function ChronoScreen({ onBack, t, skin:skin0, pick }){
  const wide = useWide();
  const [ph,setPh] = useState("ready");   // ready | count | playing | done
  const [ms,setMs] = useState(0);
  const [count,setCount] = useState(5);
  const [isRecord,setIsRecord] = useState(false);
  const timer = useRef(null);
  const startRef = useRef(0);

  /* depuis l'accueil (pick) : on choisit le cube de sa collection, mémorisé */
  const [skin,setSkinC] = useState(()=>{ if(!pick) return skin0; try{ const v=localStorage.getItem("rurucube_chrono_cube"); return CHRONO_CUBES.some(c=>c.id===v)?v:"classic"; }catch(e){ return "classic"; } });
  const chooseCube = id=>{ setSkinC(id); try{ localStorage.setItem("rurucube_chrono_cube",id); }catch(e){} };
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

  // Ordinateur : barre espace = démarrer / arrêter le chrono
  useSpaceKey(()=>{
    if(ph==="ready") begin();
    else if(ph==="playing") stop();
    else if(ph==="done") setPh("ready");
  });

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <Header onBack={onBack} t={t} color={PAL.blue} title={`🧩 ${t.chrono}`} sub={t.chronoSub}/>
      <div style={{fontWeight:700,fontSize:58,color:PAL.blue,lineHeight:1,margin:"8px 0 16px",fontVariantNumeric:"tabular-nums",textShadow:`0 0 22px ${PAL.blue}44`}}>{fmt(ms)}</div>

      {ph==="ready"&&(
        wide ? (
          <div style={{display:"flex",gap:36,width:"100%",maxWidth:760,alignItems:"flex-start",justifyContent:"center",flexWrap:"wrap"}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:"0 1 300px"}}>
              <div style={{marginBottom:16,width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                {pick&&<ChronoCubePicker t={t} value={skin} onChange={chooseCube}/>}
              <div style={{display:"flex",justifyContent:"center",margin:"4px 0 10px"}}><SkinSpinCube key={skin} skin={skin} size={110} glow={PAL.blue}/></div>
              <Hint color={PAL.blue} icon="🧩">{t.ctxChronoReady}</Hint>
              </div>
              <div style={{width:"100%",maxWidth:300}}><CandyBtn onClick={begin} color={PAL.blue}>{t.go}</CandyBtn></div>
              {isDesktop&&<div style={{marginTop:8,fontSize:12,fontWeight:600,color:PAL.textFaint}}>{t.spaceStart}</div>}
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:"1 1 340px",maxWidth:400}}>
              <div style={{display:"flex",gap:10}}>
                <StatChip label={t.record} value={fmt(stats.best)} color={PAL.blue}/>
                <StatChip label={t.games} value={stats.games||0} color={PAL.green}/>
              </div>
              <ProgressPanel t={t} stats={stats} color={PAL.blue}/>
            </div>
          </div>
        ) : (
        <>
          <div style={{marginBottom:16,width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
            {pick&&<ChronoCubePicker t={t} value={skin} onChange={chooseCube}/>}
              <div style={{display:"flex",justifyContent:"center",margin:"4px 0 10px"}}><SkinSpinCube key={skin} skin={skin} size={110} glow={PAL.blue}/></div>
              <Hint color={PAL.blue} icon="🧩">{t.ctxChronoReady}</Hint>
          </div>
          <div style={{width:"100%",maxWidth:300}}><CandyBtn onClick={begin} color={PAL.blue}>{t.go}</CandyBtn></div>
          {isDesktop&&<div style={{marginTop:8,fontSize:12,fontWeight:600,color:PAL.textFaint}}>{t.spaceStart}</div>}
          <div style={{display:"flex",gap:10,marginTop:18}}>
            <StatChip label={t.record} value={fmt(stats.best)} color={PAL.blue}/>
            <StatChip label={t.games} value={stats.games||0} color={PAL.green}/>
          </div>
          <ProgressPanel t={t} stats={stats} color={PAL.blue}/>
        </>
        )
      )}
      {ph==="count"&&(
        <div style={{fontWeight:700,fontSize:110,color:PAL.gold,animation:"pop .3s ease-out",textShadow:`0 0 40px ${PAL.gold}66`}}>{count}</div>
      )}
      {ph==="playing"&&(
        <>
          <SkinSpinCube skin={skin} size={Math.min(170,window.innerWidth*.42)} glow={PAL.blue} onClick={stop}/>
          <div style={{marginTop:8,fontSize:18,color:"#ffffff",fontWeight:700}}>{t.cubePlay}</div>
          <div style={{fontSize:15,color:"#ffffff",fontWeight:600,marginTop:6,opacity:.9}}>
            {t.tapCube}{isDesktop&&<span style={{opacity:.8,fontSize:13}}> {t.spaceStop}</span>}
          </div>
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

/* ═══ 60S SPLIT RACE — résolution réelle en étapes chronométrées ═══
   Le joueur mélange son VRAI cube à la main (le scramble n'est
   qu'affiché, jamais simulé), puis résout étape par étape en tapant
   TERMINER à chaque phase. Le budget de 60s ne décompte QUE pendant
   les phases de résolution active ; il est intégralement suspendu
   pendant les écrans de pause/analyse entre deux étapes.
   ═══════════════════════════════════════════════════════════════ */
const SPLIT_BUDGET = 60000;
const SPLIT_STAGE_KEYS = ["cross","firstLayer","f2l","oll","pll"];
const SPLIT_STAGE_ICONS = ["➕","🔲","🧩","🟡","🏁"];
const SPLIT_STAGE_COLORS = ["#ffd23f","#4ea8ff","#3ddc84","#ff5ea8","#9d6cff"]; // gold, bleu, vert, rose, violet — une couleur par étape

/* Petit cube 3D CSS (3 faces visibles) — décoratif, teinté selon l'étape en cours */
const CUBE3D_UNSOLVED = "#1a1a1a";
/* Couleurs réelles des 6 faces (mêmes teintes que le reste de l'app) */
const CUBE3D_FACE_HEX = { top:"#f5f5f5", bottom:"#ffd500", front:"#e62b2b", back:"#ff8c1a", right:"#2b8cff", left:"#2bbf3f" };
const CUBE3D_FLIP_ROWS = [6,7,8,3,4,5,0,1,2];   // retourne une grille 3×3 (rangée du bas ↔ rangée du haut)

/* Motif de progression : les CENTRES sont toujours dans leur vraie couleur
   (sur un vrai cube ils ne bougent jamais) ; arêtes et coins restent gris
   tant qu'ils ne sont pas correctement placés — ce qui montre bien les
   arêtes se positionner par rapport aux centres au fil des étapes.
   0 Cross → croix blanche dessus + arêtes latérales alignées sur leur centre
   1 First Layer → couronne du dessus + rangée du haut de chaque côté
   2 F2L → deux couronnes (rangée du haut + du milieu)
   3 Croix jaune → on RETOURNE le cube (jaune dessus, 2 couronnes dessous) :
     croix jaune sur la face du dessus, les côtés pas encore permutés
   4 Face jaune complète → face du dessus 100% jaune + côtés permutés (fini) */
function stageTopCells(hexTop, stageIdx){
  const c = [CUBE3D_UNSOLVED,CUBE3D_UNSOLVED,CUBE3D_UNSOLVED,CUBE3D_UNSOLVED,hexTop,CUBE3D_UNSOLVED,CUBE3D_UNSOLVED,CUBE3D_UNSOLVED,CUBE3D_UNSOLVED];
  if(stageIdx>=0){ c[1]=hexTop; c[3]=hexTop; c[5]=hexTop; c[7]=hexTop; } // croix
  if(stageIdx>=1){ c[0]=hexTop; c[2]=hexTop; c[6]=hexTop; c[8]=hexTop; } // coins
  return c;
}
function stageSideCells(hex, stageIdx){
  const c = Array(9).fill(CUBE3D_UNSOLVED); c[4]=hex;               // le centre est toujours visible
  if(stageIdx==null||stageIdx<0) return c;                          // cube pas encore commencé
  if(stageIdx>=0) c[1]=hex;                                         // arête de la croix, alignée sur le centre
  if(stageIdx>=1){ c[0]=hex; c[2]=hex; }                             // 1ère couronne : toute la rangée du haut
  if(stageIdx>=2){ c[3]=hex; c[5]=hex; }                             // F2L : + rangée du milieu
  if(stageIdx===3) c[7]=hex;                                        // croix jaune : son arête, alignée sur le centre (coins pas encore faits)
  if(stageIdx>=4){ c[6]=hex; c[7]=hex; c[8]=hex; }                   // face jaune complète : dernière rangée permutée
  return c;
}

function Cube3D({ size=110, color, spin=true, stageIdx=null, finished=false }){
  const s = size, half = s/2;
  const F = CUBE3D_FACE_HEX;
  const flip = !finished && stageIdx!=null && stageIdx>=3;          // croix jaune / face jaune complète : cube retourné
  const faceCells = (key)=>{
    if(finished) return Array(9).fill(F[key]);
    if(flip){
      if(key==="top")    return stageTopCells(F.bottom, stageIdx-3);         // -3 : étape 3 = croix seule, étape 4 = face complète
      if(key==="bottom") return stageTopCells(F.top, 1);                     // le blanc (déjà fini) passe en dessous
      return CUBE3D_FLIP_ROWS.map(i=>stageSideCells(F[key], stageIdx)[i]);   // rangées inversées par le retournement
    }
    if(key==="top") return stageTopCells(F.top, stageIdx);
    if(key==="bottom") return Array(9).fill(CUBE3D_UNSOLVED).map((v,i)=>i===4?F.bottom:v); // dernière couche : centre seul
    return stageSideCells(F[key], stageIdx);   // front / back / right / left : les 4 côtés progressent ensemble
  };
  const faceStyle = (transform)=>({position:"absolute",width:s,height:s,transform,
    display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"repeat(3,1fr)",
    gap:Math.max(2,s*.035),padding:Math.max(3,s*.06),background:"#000",boxSizing:"border-box",backfaceVisibility:"hidden"});
  const cells = (arr)=>arr.map((hex,i)=>(
    <div key={i} style={{background:hex,borderRadius:Math.max(2,s*.05),boxShadow:"inset 0 -2px 3px rgba(0,0,0,.25), inset 0 2px 2px rgba(255,255,255,.3)"}}/>
  ));
  return (
    <div style={{width:s*1.3,height:s*1.35,perspective:s*5,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",
      filter:color?`drop-shadow(0 0 16px ${color}bb) drop-shadow(0 8px 14px rgba(0,0,0,.5))`:"drop-shadow(0 8px 14px rgba(0,0,0,.5))"}}>
      <style>{`@keyframes cube3dspin{from{transform:rotateX(-26deg) rotateY(0deg);}to{transform:rotateX(-26deg) rotateY(360deg);}}`}</style>
      <div style={{width:s,height:s,position:"relative",flexShrink:0,
        transformStyle:"preserve-3d",
        transform:"rotateX(-26deg) rotateY(42deg)",
        animation:spin?"cube3dspin 10s linear infinite":"none"}}>
        <div style={faceStyle(`rotateX(90deg) translateZ(${half}px)`)}>{cells(faceCells("top"))}</div>
        <div style={faceStyle(`rotateX(-90deg) translateZ(${half}px)`)}>{cells(faceCells("bottom"))}</div>
        <div style={faceStyle(`translateZ(${half}px)`)}>{cells(faceCells("front"))}</div>
        <div style={faceStyle(`rotateY(180deg) translateZ(${half}px)`)}>{cells(faceCells("back"))}</div>
        <div style={faceStyle(`rotateY(90deg) translateZ(${half}px)`)}>{cells(faceCells("right"))}</div>
        <div style={faceStyle(`rotateY(-90deg) translateZ(${half}px)`)}>{cells(faceCells("left"))}</div>
      </div>
    </div>
  );
}

/* Scramble WCA-like : jamais deux mouvements de suite sur le même axe */
function genScramble(len=20){
  const faces=["U","D","L","R","F","B"];
  const axisOf=f=>({U:0,D:0,L:1,R:1,F:2,B:2}[f]);
  const seq=[]; let lastAxis=-1;
  while(seq.length<len){
    const f = faces[Math.floor(Math.random()*6)];
    if(axisOf(f)===lastAxis) continue;
    const mod=["","'","2"][Math.floor(Math.random()*3)];
    seq.push(f+mod); lastAxis=axisOf(f);
  }
  return seq.join(" ");
}

/* Formatage à 2 décimales fixes (le fmt() global bascule en m:ss au-delà
   de 60s, ce qui ne convient pas ici : un budget de 60.00s doit rester
   affiché tel quel). */
function fmt2(ms){ if(ms==null) return "—"; return (Math.max(0,ms)/1000).toFixed(2)+"s"; }

function emptySplitRaceStats(){
  const stages={};
  SPLIT_STAGE_KEYS.forEach(k=>{ stages[k]={best:null,times:[]}; });
  return { bestTotal:null, totalRuns:0, completedRuns:0, stages, runs:[] };
}
function loadSplitRaceStats(){
  const d = loadS();
  const st = d.splitRace || emptySplitRaceStats();
  SPLIT_STAGE_KEYS.forEach(k=>{ if(!st.stages[k]) st.stages[k]={best:null,times:[]}; });
  return st;
}
function saveSplitRaceRun(run){
  const d = loadS();
  const st = d.splitRace || emptySplitRaceStats();
  st.totalRuns = (st.totalRuns||0)+1;
  if(run.completed) st.completedRuns = (st.completedRuns||0)+1;
  SPLIT_STAGE_KEYS.forEach(k=>{
    const ms = run.splits[k];
    if(ms==null) return;
    const s = st.stages[k] || (st.stages[k]={best:null,times:[]});
    s.times = [...(s.times||[]), ms].slice(-50);
    if(s.best==null || ms<s.best) s.best = ms;
  });
  if(run.completed && (st.bestTotal==null || run.totalTime<st.bestTotal)) st.bestTotal = run.totalTime;
  st.runs = [...(st.runs||[]), run].slice(-50);
  d.splitRace = st; saveS(d);
  return st;
}

/* Frise de progression des 5 étapes */
function StageProgress({ stageIdx, labels }){
  const cur = SPLIT_STAGE_COLORS[Math.min(stageIdx,4)];
  return (
    <div style={{display:"flex",alignItems:"center",gap:4,width:"100%",maxWidth:360}}>
      {SPLIT_STAGE_KEYS.map((k,i)=>(
        <React.Fragment key={k}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,flex:1,minWidth:0}}>
            <span style={{width:26,height:26,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:13,flexShrink:0,
              background:i<stageIdx?PAL.green:(i===stageIdx?cur:PAL.card),
              boxShadow:`0 0 0 2px ${i<=stageIdx?(i<stageIdx?PAL.green:cur):PAL.cardHi}`,
              color:i<=stageIdx?"#1a1228":PAL.textFaint,fontWeight:800}}>
              {i<stageIdx?"✓":i+1}
            </span>
            <span style={{fontSize:8.5,fontWeight:700,color:i===stageIdx?cur:PAL.textFaint,textAlign:"center",
              overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"}}>{labels[i]}</span>
          </div>
          {i<4&&<div style={{height:2,flex:.5,background:i<stageIdx?PAL.green:PAL.cardHi,marginBottom:14}}/>}
        </React.Fragment>
      ))}
    </div>
  );
}

function SplitRaceScreen({ onBack, t }){
  const wide = useWide();
  const labels = [t.stgCross,t.stgFirstLayer,t.stgF2l,t.stgOll,t.stgPll];

  const [ph,setPh] = useState("start");            // start | count | stage | break | results | timeout
  const [scramble,setScramble] = useState(()=>genScramble());
  const [count,setCount] = useState(3);
  const [pendingIdx,setPendingIdx] = useState(0);   // étape visée par le compte à rebours en cours
  const [stageIdx,setStageIdx] = useState(0);
  const [usedMs,setUsedMs] = useState(0);
  const [elapsedCur,setElapsedCur] = useState(0);
  const [splits,setSplits] = useState({});
  const [newPbFlags,setNewPbFlags] = useState({});
  const [analyzeOpen,setAnalyzeOpen] = useState(false);
  const [lastRun,setLastRun] = useState(null);
  const [totalIsPb,setTotalIsPb] = useState(false);

  const statsRef = useRef(loadSplitRaceStats());
  const usedMsRef = useRef(0);
  const timer = useRef(null);
  const startRef = useRef(0);

  useEffect(()=>()=>clearInterval(timer.current),[]);

  function beginStage(idx){
    setStageIdx(idx);
    setElapsedCur(0);
    setPh("stage");
    startRef.current = performance.now();
    clearInterval(timer.current);
    timer.current = setInterval(()=>{
      const cur = performance.now()-startRef.current;
      const remaining = SPLIT_BUDGET - usedMsRef.current - cur;
      if(remaining<=0){
        clearInterval(timer.current);
        setElapsedCur(SPLIT_BUDGET-usedMsRef.current);
        finishTimeout();
      } else setElapsedCur(cur);
    }, 47);
  }

  /* plus de compte à rebours 3-2-1 : l'étape démarre tout de suite */
  function startCountdownFor(idx){
    setPendingIdx(idx);
    beginStage(idx);
  }

  function startRun(){
    setSplits({}); setNewPbFlags({}); setUsedMs(0); usedMsRef.current=0;
    setTotalIsPb(false); setLastRun(null);
    startCountdownFor(0);
  }

  function completeStage(){
    if(ph!=="stage") return;
    clearInterval(timer.current);
    const remainingBefore = SPLIT_BUDGET - usedMsRef.current;
    let split = performance.now()-startRef.current;
    if(split>remainingBefore) split = remainingBefore;   // ne dépasse jamais le budget restant
    const key = SPLIT_STAGE_KEYS[stageIdx];
    const newUsed = usedMsRef.current + split;
    usedMsRef.current = newUsed;
    setUsedMs(newUsed);
    setElapsedCur(split);
    setSplits(s=>({ ...s, [key]:split }));
    const prevBest = statsRef.current.stages[key]?.best;
    setNewPbFlags(f=>({ ...f, [key]: prevBest==null || split<prevBest }));
    setAnalyzeOpen(false);
    setPh("break");
  }

  function nextStage(){
    setAnalyzeOpen(false);
    if(stageIdx>=SPLIT_STAGE_KEYS.length-1) finishResults();
    else startCountdownFor(stageIdx+1);
  }

  function finishResults(){
    const run = { date:new Date().toISOString(), scramble, completed:true,
      totalTime:usedMsRef.current, remainingTime:SPLIT_BUDGET-usedMsRef.current, splits };
    const updated = saveSplitRaceRun(run);
    statsRef.current = updated;
    setTotalIsPb(updated.bestTotal===run.totalTime);
    setLastRun(run);
    setPh("results");
  }

  function finishTimeout(){
    const run = { date:new Date().toISOString(), scramble, completed:false,
      totalTime:SPLIT_BUDGET, remainingTime:0, splits };
    const updated = saveSplitRaceRun(run);
    statsRef.current = updated;
    setLastRun(run);
    setPh("timeout");
  }

  function retry(){ setPh("start"); }
  function newScramble(){ setScramble(genScramble()); setPh("start"); }
  function handleExit(){
    if((ph==="count"||ph==="stage"||ph==="break") && !window.confirm(t.splitRaceExitConfirm)) return;
    clearInterval(timer.current);
    onBack();
  }

  useSpaceKey(()=>{
    if(ph==="start") startRun();
    else if(ph==="stage") completeStage();
    else if(ph==="break") nextStage();
  }, ph==="start"||ph==="stage"||ph==="break");

  const stats = statsRef.current;
  const key = SPLIT_STAGE_KEYS[stageIdx];
  const remaining = ph==="stage" ? Math.max(0,SPLIT_BUDGET-usedMs-elapsedCur) : SPLIT_BUDGET-usedMs;

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <Header onBack={handleExit} t={t} color={PAL.red} title={`🏁 ${t.splitRace}`} sub={ph==="start"?t.splitRaceSub:undefined}/>

      {ph==="start"&&(
        <div style={{display:"flex",flexDirection:wide?"row":"column",gap:wide?36:0,alignItems:wide?"flex-start":"center",justifyContent:"center",width:"100%",maxWidth:wide?720:undefined,flexWrap:"wrap"}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:wide?"0 1 340px":undefined}}>
            <div style={{marginBottom:10}}><Cube3D color={PAL.red} stageIdx={0}/></div>
            <div style={{marginBottom:14,width:"100%",display:"flex",justifyContent:"center"}}>
              <Hint color={PAL.red} icon="🏁">{t.splitRaceTagline}</Hint>
            </div>
            <div style={{width:"100%",maxWidth:340,background:PAL.card,borderRadius:16,padding:"13px 15px",marginBottom:16,
              boxShadow:`0 0 0 2px ${PAL.cardHi}`,display:"flex",alignItems:"center",gap:12,textAlign:"left"}}>
              <span style={{fontSize:30,lineHeight:1,flexShrink:0}}>🎲</span>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:PAL.textDim,letterSpacing:1,textTransform:"uppercase",marginBottom:4}}>{t.randomScrambleTitle}</div>
                <div style={{fontSize:14,fontWeight:700,color:PAL.text,lineHeight:1.45}}>{t.randomScramble}</div>
              </div>
            </div>
            <div style={{width:"100%",maxWidth:300}}>
              <CandyBtn onClick={startRun} color={PAL.red}>{t.go}</CandyBtn>
            </div>
            {isDesktop&&<div style={{marginTop:8,fontSize:12,fontWeight:600,color:PAL.textFaint}}>{t.spaceStart}</div>}
          </div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:wide?"1 1 300px":undefined,maxWidth:340,marginTop:wide?0:18}}>
            <div style={{display:"flex",gap:10}}>
              <StatChip label={t.splitRacePB} value={fmt2(stats.bestTotal)} color={PAL.red}/>
              <StatChip label={t.splitRaceRuns} value={stats.totalRuns||0} color={PAL.green}/>
              <StatChip label={t.splitRaceCompletedRuns} value={stats.completedRuns||0} color={PAL.blue}/>
            </div>
          </div>
        </div>
      )}

      {ph==="count"&&(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div style={{fontWeight:800,fontSize:16,color:SPLIT_STAGE_COLORS[pendingIdx],letterSpacing:1,marginBottom:6}}>
            {SPLIT_STAGE_ICONS[pendingIdx]} {labels[pendingIdx]}
          </div>
          <Cube3D color={SPLIT_STAGE_COLORS[pendingIdx]} spin={false} stageIdx={pendingIdx}/>
          <div style={{fontWeight:700,fontSize:100,color:SPLIT_STAGE_COLORS[pendingIdx],animation:"pop .3s ease-out",
            textShadow:`0 0 40px ${SPLIT_STAGE_COLORS[pendingIdx]}66`,margin:"14px 0 0"}}>
            {count>0?count:"GO"}
          </div>
        </div>
      )}

      {ph==="stage"&&(
        <div onClick={completeStage} style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",cursor:"pointer"}}>
          <div style={{marginBottom:16}}><StageProgress stageIdx={stageIdx} labels={labels}/></div>
          <div style={{fontWeight:800,fontSize:22,color:SPLIT_STAGE_COLORS[stageIdx],letterSpacing:1,marginBottom:10}}>{SPLIT_STAGE_ICONS[stageIdx]} {labels[stageIdx]}</div>
          <div style={{marginBottom:10}}><Cube3D size={100} color={SPLIT_STAGE_COLORS[stageIdx]} stageIdx={stageIdx}/></div>
          <div style={{fontSize:12,fontWeight:700,color:PAL.textDim,textTransform:"uppercase",letterSpacing:1,marginBottom:2}}>{t.splitRaceTimeLeft}</div>
          <div style={{fontWeight:700,fontSize:52,color:remaining<10000?PAL.red:PAL.text,lineHeight:1,margin:"2px 0 10px",
            fontVariantNumeric:"tabular-nums",textShadow:`0 0 22px ${SPLIT_STAGE_COLORS[stageIdx]}44`}}>{fmt2(remaining)}</div>
          <div style={{fontSize:12,fontWeight:700,color:PAL.textDim,marginBottom:18}}>
            {t.splitRaceCurrentSplit}: <span style={{color:PAL.text,fontWeight:800}}>{fmt2(elapsedCur)}</span>
          </div>
          <div style={{marginBottom:16,width:"100%",display:"flex",justifyContent:"center"}}>
            <Hint color={SPLIT_STAGE_COLORS[stageIdx]} icon="⚡">{t.splitRaceCtxSolving}</Hint>
          </div>
          <div style={{width:"100%",maxWidth:300}}>
            <CandyBtn color={SPLIT_STAGE_COLORS[stageIdx]}>{t.splitRaceComplete}</CandyBtn>
          </div>
          <div style={{marginTop:8,fontSize:12,fontWeight:600,color:PAL.textFaint}}>{t.tapAnywhere}</div>
        </div>
      )}

      {ph==="break"&&(()=>{
        const isLast = stageIdx>=SPLIT_STAGE_KEYS.length-1;
        const split = splits[key];
        const prevBest = stats.stages[key]?.best;
        const isPb = newPbFlags[key];
        const times = stats.stages[key]?.times||[];
        const avg = times.length ? times.slice(-5).reduce((a,v)=>a+v,0)/Math.min(5,times.length) : null;
        const diff = prevBest!=null ? split-prevBest : null;
        const share = usedMs>0 ? (split/usedMs*100) : 100;
        return (
          <>
            <div style={{marginBottom:16}}><StageProgress stageIdx={stageIdx+1} labels={labels}/></div>
            {isPb&&<Confetti/>}
            <div style={{textAlign:"center",borderRadius:22,padding:"16px 26px",marginBottom:14,animation:"pop .35s ease-out",
              background:PAL.card,boxShadow:`0 0 0 2px ${isPb?PAL.gold:PAL.red}`}}>
              <div style={{fontSize:11,letterSpacing:2,color:PAL.textFaint,fontWeight:700,marginBottom:4}}>
                {SPLIT_STAGE_ICONS[stageIdx]} {labels[stageIdx]} {t.splitRaceStageDone}
              </div>
              <div style={{fontWeight:800,fontSize:40,lineHeight:1.05,fontVariantNumeric:"tabular-nums",
                color:isPb?PAL.gold:PAL.text}}>{fmt2(split)}</div>
              {isPb&&<div style={{fontWeight:700,fontSize:14,color:PAL.gold,marginTop:6,animation:"wiggle .6s ease-in-out 3"}}>{t.splitRaceNewPB}</div>}
              {!isPb&&prevBest!=null&&(
                <div style={{fontSize:12,color:PAL.textDim,fontWeight:600,marginTop:6}}>
                  {t.splitRacePB} {fmt2(prevBest)} · {diff>=0?"+":""}{(diff/1000).toFixed(2)}s {t.splitRaceVsPB}
                </div>
              )}
            </div>
            <div style={{display:"flex",gap:10,marginBottom:16}}>
              <StatChip label={t.splitRaceTotalUsed} value={fmt2(usedMs)} color={PAL.red}/>
              <StatChip label={t.splitRaceTimeLeft} value={fmt2(SPLIT_BUDGET-usedMs)} color={PAL.green}/>
            </div>
            {analyzeOpen&&(
              <div style={{width:"100%",maxWidth:340,background:PAL.card,borderRadius:18,padding:"15px 18px",marginBottom:16,
                boxShadow:`0 0 0 2px ${PAL.cardHi}`,animation:"slideUp .3s ease-out"}}>
                <div style={{fontWeight:800,fontSize:13,color:PAL.red,letterSpacing:1,marginBottom:10}}>{t.splitRaceAnalysisTitle} — {labels[stageIdx]}</div>
                {[[t.splitRaceCurrent,fmt2(split)],[t.splitRacePB,fmt2(prevBest)],[t.splitRaceAverage,fmt2(avg)],
                  [t.splitRaceDiffPB,diff!=null?`${diff>=0?"+":""}${(diff/1000).toFixed(2)}s`:"—"],
                  [t.splitRaceShare,`${share.toFixed(1)}%`]].map(([l,v])=>(
                  <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${PAL.cardHi}`}}>
                    <span style={{fontSize:12.5,color:PAL.textDim,fontWeight:600}}>{l}</span>
                    <span style={{fontSize:13.5,color:PAL.text,fontWeight:800}}>{v}</span>
                  </div>
                ))}
              </div>
            )}
            <div style={{width:"100%",maxWidth:300,display:"flex",flexDirection:"column",gap:10}}>
              <GhostBtn onClick={()=>setAnalyzeOpen(o=>!o)} color={PAL.red}>{t.splitRaceAnalyze}</GhostBtn>
              <CandyBtn onClick={nextStage} color={PAL.red}>{isLast?t.splitRaceSeeResults:t.splitRaceNextStage}</CandyBtn>
            </div>
          </>
        );
      })()}

      {(ph==="results"||ph==="timeout")&&lastRun&&(()=>{
        const entries = SPLIT_STAGE_KEYS.map((k,i)=>({ k, label:labels[i], icon:SPLIT_STAGE_ICONS[i], ms:lastRun.splits[k]??null }));
        const done = entries.filter(e=>e.ms!=null);
        const best = done.length ? done.reduce((a,b)=>a.ms<b.ms?a:b) : null;
        const longest = done.length ? done.reduce((a,b)=>a.ms>b.ms?a:b) : null;
        const isTimeout = ph==="timeout";
        return (
          <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}>
            {!isTimeout&&totalIsPb&&<Confetti/>}
            {!isTimeout&&<div style={{marginBottom:6}}><Cube3D finished color={PAL.gold} spin/></div>}
            {isTimeout&&<div style={{marginBottom:6}}><Cube3D stageIdx={done.length-1} color={PAL.orange} spin={false}/></div>}
            <div style={{fontWeight:800,fontSize:20,color:isTimeout?PAL.orange:PAL.green,letterSpacing:1,marginBottom:10}}>
              {isTimeout?t.splitRaceTimeOut:t.splitRaceRunComplete}
            </div>
            <div style={{borderRadius:22,padding:"14px 26px",marginBottom:16,background:PAL.card,
              boxShadow:`0 0 0 2px ${isTimeout?PAL.orange:(totalIsPb?PAL.gold:PAL.red)}`}}>
              <div style={{fontWeight:800,fontSize:44,lineHeight:1.05,fontVariantNumeric:"tabular-nums",
                color:isTimeout?PAL.orange:(totalIsPb?PAL.gold:PAL.text)}}>{fmt2(lastRun.totalTime)}</div>
              {totalIsPb&&!isTimeout&&<div style={{fontWeight:700,fontSize:14,color:PAL.gold,marginTop:4}}>{t.splitRaceNewPB}</div>}
            </div>
            <div style={{display:"flex",gap:10,marginBottom:18}}>
              <StatChip label={t.splitRaceTimeLeft} value={fmt2(lastRun.remainingTime)} color={PAL.green}/>
              {isTimeout&&<StatChip label={t.splitRaceLastCompleted} value={done.length?done[done.length-1].label:"—"} color={PAL.orange}/>}
            </div>

            <div style={{width:"100%",maxWidth:360,background:PAL.card,borderRadius:18,padding:"14px 16px",marginBottom:16,
              boxShadow:`0 0 0 2px ${PAL.cardHi}`}}>
              <div style={{fontWeight:800,fontSize:12,color:PAL.textDim,letterSpacing:1,textTransform:"uppercase",marginBottom:8,textAlign:"left"}}>{t.splitRaceSplits}</div>
              {entries.map(e=>(
                <div key={e.k} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 0",borderBottom:`1px solid ${PAL.cardHi}`}}>
                  <span style={{fontSize:13,color:PAL.text,fontWeight:700,textAlign:"left"}}>{e.icon} {e.label}</span>
                  <span style={{fontSize:14,fontWeight:800,color:e.ms==null?PAL.textFaint:(best&&e.k===best.k?PAL.gold:PAL.text)}}>
                    {e.ms==null?t.splitRaceNotCompleted:fmt2(e.ms)}
                  </span>
                </div>
              ))}
              {!isTimeout&&(
                <div style={{display:"flex",justifyContent:"space-between",padding:"9px 0 0",marginTop:4}}>
                  <span style={{fontSize:13,color:PAL.text,fontWeight:800,textAlign:"left"}}>{t.splitRaceTotal}</span>
                  <span style={{fontSize:15,fontWeight:800,color:PAL.red}}>{fmt2(lastRun.totalTime)}</span>
                </div>
              )}
            </div>

            {!isTimeout&&best&&longest&&(
              <div style={{width:"100%",maxWidth:360,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:18}}>
                <StatChip label={t.splitRaceBestSplit} value={`${best.icon} ${fmt2(best.ms)}`} color={PAL.gold}/>
                <StatChip label={t.splitRaceLongestPhase} value={`${longest.icon} ${fmt2(longest.ms)}`} color={PAL.orange}/>
                <StatChip label={`${longest.label} ${t.splitRaceShareOf}`} value={`${(longest.ms/lastRun.totalTime*100).toFixed(1)}%`} color={PAL.blue}/>
                <StatChip label={t.splitRaceBestTotal} value={fmt2(stats.bestTotal)} color={PAL.green}/>
              </div>
            )}

            <div style={{width:"100%",maxWidth:300,display:"flex",flexDirection:"column",gap:10}}>
              <CandyBtn onClick={retry} color={PAL.red}>{t.splitRaceRetry}</CandyBtn>
              <GhostBtn onClick={onBack} color={PAL.textDim}>{t.splitRaceExit}</GhostBtn>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

/* ─── Entraînement par étape — 5 drills (Croix / 1ère couronne / F2L / Croix jaune / Face jaune) ───
   Contrairement à Split Race, pas de budget global : on chronomètre en continu depuis le début
   du tour, et seul le split de l'ÉTAPE CIBLÉE est enregistré comme record — exactement comme un
   cubeur isole une phase à l'entraînement (il repart d'un scramble complet à chaque tour). */
function emptyDrillStats(){
  const s={}; SPLIT_STAGE_KEYS.forEach(k=>{ s[k]={best:null,times:[]}; }); return s;
}
function loadDrillStats(){
  const d = loadS();
  const s = d.stageDrill || emptyDrillStats();
  SPLIT_STAGE_KEYS.forEach(k=>{ if(!s[k]) s[k]={best:null,times:[]}; });
  return s;
}
function saveDrillRep(key, ms){
  const d = loadS();
  const s = d.stageDrill || emptyDrillStats();
  const e = s[key] || (s[key]={best:null,times:[]});
  e.times = [...(e.times||[]), ms].slice(-50);
  const isPb = e.best==null || ms<e.best;
  if(isPb) e.best = ms;
  d.stageDrill = s; saveS(d);
  return { stats:s, isPb };
}

/* Écran de sélection : une tuile par étape */
function StageDrillPicker({ onBack, t, openDrill, openProgress }){
  const wide = useWide();
  const labels = [t.stgCross,t.stgFirstLayer,t.stgF2l,t.stgOll,t.stgPll];
  const stats = loadDrillStats();
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <Header onBack={onBack} t={t} color={PAL.purple} title={`🎯 ${t.drillTitle}`} sub={t.drillSub}/>

      <button onClick={openProgress} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,border:"none",cursor:"pointer",
        borderRadius:999,padding:"10px 20px",marginBottom:16,background:`linear-gradient(180deg,${shade(PAL.purple,30)},${PAL.purple})`,
        color:"#fff",fontWeight:800,fontSize:14,boxShadow:`0 4px 0 ${shade(PAL.purple,-40)}`}}>
        📊 {t.drillProgress}
      </button>

      <div style={{width:"100%",maxWidth:wide?720:380,display:wide?"grid":"flex",
        gridTemplateColumns:wide?"1fr 1fr":undefined,flexDirection:wide?undefined:"column",gap:12}}>
        {SPLIT_STAGE_KEYS.map((k,i)=>(
          <button key={k} onClick={()=>openDrill(i)} style={{display:"flex",alignItems:"center",gap:14,border:"none",cursor:"pointer",
            borderRadius:18,padding:"14px 16px",textAlign:"left",background:PAL.card,boxShadow:`0 0 0 2px ${SPLIT_STAGE_COLORS[i]}`}}>
            <span style={{fontSize:28,flexShrink:0}}>{SPLIT_STAGE_ICONS[i]}</span>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontWeight:800,fontSize:15,color:SPLIT_STAGE_COLORS[i]}}>{labels[i]}</div>
              <div style={{fontSize:12,color:PAL.textDim,fontWeight:600,marginTop:2}}>
                {t.drillPB} {fmt2(stats[k]?.best)}
              </div>
            </div>
            <span style={{fontSize:18,color:SPLIT_STAGE_COLORS[i],fontWeight:800}}>›</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* Vue d'ensemble : les 5 étapes et leurs meilleurs temps regroupés ─── */
function DrillProgressScreen({ onBack, t }){
  const wide = useWide();
  const labels = [t.stgCross,t.stgFirstLayer,t.stgF2l,t.stgOll,t.stgPll];
  const stats = loadDrillStats();
  const bests = SPLIT_STAGE_KEYS.map(k=>stats[k]?.best);
  const totalReps = SPLIT_STAGE_KEYS.reduce((a,k)=>a+(stats[k]?.times?.length||0),0);
  const allDone = bests.every(b=>b!=null);
  const sumBests = allDone ? bests.reduce((a,b)=>a+b,0) : null;
  const weakest = allDone ? bests.reduce((wi,b,i,arr)=>b>arr[wi]?i:wi,0) : null;

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <Header onBack={onBack} t={t} color={PAL.purple} title={`📊 ${t.drillProgress}`} sub={t.drillProgressSub}/>

      {sumBests!=null&&(
        <div style={{width:"100%",maxWidth:380,textAlign:"center",borderRadius:20,padding:"16px 20px",marginBottom:16,
          background:PAL.card,boxShadow:`0 0 0 2px ${PAL.gold}`}}>
          <div style={{fontSize:11,fontWeight:700,color:PAL.textDim,letterSpacing:1,textTransform:"uppercase",marginBottom:4}}>{t.drillSumBests}</div>
          <div style={{fontWeight:800,fontSize:34,color:PAL.gold,fontVariantNumeric:"tabular-nums"}}>{fmt2(sumBests)}</div>
        </div>
      )}

      <div style={{width:"100%",maxWidth:wide?720:380,display:wide?"grid":"flex",
        gridTemplateColumns:wide?"1fr 1fr":undefined,flexDirection:wide?undefined:"column",gap:12,marginBottom:8}}>
        {SPLIT_STAGE_KEYS.map((k,i)=>{
          const st = stats[k]||{best:null,times:[]};
          const isWeak = weakest===i;
          return (
            <div key={k} style={{display:"flex",alignItems:"center",gap:14,borderRadius:18,padding:"14px 16px",
              background:PAL.card,boxShadow:`0 0 0 2px ${isWeak?PAL.orange:SPLIT_STAGE_COLORS[i]}`}}>
              <span style={{fontSize:26,flexShrink:0}}>{SPLIT_STAGE_ICONS[i]}</span>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontWeight:800,fontSize:14,color:SPLIT_STAGE_COLORS[i]}}>{labels[i]}
                  {isWeak&&<span style={{marginLeft:7,fontSize:10,fontWeight:800,color:PAL.orange}}>{t.drillWeakest}</span>}
                </div>
                <div style={{fontSize:11,color:PAL.textDim,fontWeight:600,marginTop:2}}>{st.times.length} {t.drillReps.toLowerCase()}</div>
              </div>
              <div style={{fontWeight:800,fontSize:19,color:st.best!=null?PAL.text:PAL.textFaint,fontVariantNumeric:"tabular-nums",flexShrink:0}}>
                {fmt2(st.best)}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{width:"100%",maxWidth:380,textAlign:"center",marginTop:8}}>
        <StatChip label={t.drillTotalReps} value={totalReps} color={PAL.green}/>
      </div>
    </div>
  );
}

/* Classement : les derniers temps triés du plus rapide au plus lent */
function DrillRanking({ times, color, t }){
  if(!times||times.length===0)
    return <div style={{textAlign:"center",color:PAL.textFaint,fontSize:13,padding:"16px 0",fontWeight:600}}>{t.chartHint}</div>;
  const ranked = times.map((ms,i)=>({ms,i})).sort((a,b)=>a.ms-b.ms).slice(0,15);
  const medal = ["🥇","🥈","🥉"];
  return (
    <div style={{width:"100%"}}>
      {ranked.map((r,rank)=>(
        <div key={r.i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 4px",
          borderBottom:rank<ranked.length-1?`1px solid ${PAL.cardHi}`:"none"}}>
          <span style={{width:26,textAlign:"center",fontSize:rank<3?16:12,fontWeight:800,
            color:rank<3?undefined:PAL.textFaint,flexShrink:0}}>{rank<3?medal[rank]:`#${rank+1}`}</span>
          <span style={{flex:1,fontWeight:700,fontSize:15,color:rank===0?PAL.gold:PAL.text,fontVariantNumeric:"tabular-nums"}}>{fmt2(r.ms)}</span>
        </div>
      ))}
    </div>
  );
}

function StageDrillScreen({ onBack, t, targetIdx }){
  const wide = useWide();
  const labels = [t.stgCross,t.stgFirstLayer,t.stgF2l,t.stgOll,t.stgPll];
  const key = SPLIT_STAGE_KEYS[targetIdx];
  const color = SPLIT_STAGE_COLORS[targetIdx];

  const [ph,setPh] = useState("start");         // start | count | stage | done
  const [scramble,setScramble] = useState(()=>genScramble());
  const [count,setCount] = useState(3);
  const [elapsed,setElapsed] = useState(0);
  const [repCount,setRepCount] = useState(0);
  const [lastSplit,setLastSplit] = useState(null);
  const [lastIsPb,setLastIsPb] = useState(false);
  const [session,setSession] = useState([]);     // splits de cette session (affichage seulement)
  const [showRanking,setShowRanking] = useState(false);

  const statsRef = useRef(loadDrillStats());
  const timer = useRef(null);
  const startRef = useRef(0);

  useEffect(()=>()=>clearInterval(timer.current),[]);

  function startTimer(){
    setElapsed(0); setPh("stage");
    startRef.current = performance.now();
    clearInterval(timer.current);
    timer.current = setInterval(()=> setElapsed(performance.now()-startRef.current), 47);
  }

  /* plus de compte à rebours 3-2-1 : le chrono part tout de suite */
  function beginRep(){ startTimer(); }

  function complete(){
    if(ph!=="stage") return;
    clearInterval(timer.current);
    const split = performance.now()-startRef.current;
    const { stats, isPb } = saveDrillRep(key, split);
    statsRef.current = stats;
    setLastSplit(split); setLastIsPb(isPb);
    setSession(s=>[...s, split]);
    setRepCount(c=>c+1);
    setPh("done");
  }

  function newRep(){ setScramble(genScramble()); beginRep(); }
  function handleExit(){
    if((ph==="count"||ph==="stage") && !window.confirm(t.splitRaceExitConfirm)) return;
    clearInterval(timer.current);
    onBack();
  }

  useSpaceKey(()=>{
    if(ph==="start") beginRep();
    else if(ph==="stage") complete();
    else if(ph==="done") newRep();
  }, ph==="start"||ph==="stage"||ph==="done");

  const stats = statsRef.current;
  const times = stats[key]?.times||[];
  const avg5 = session.length ? session.slice(-5).reduce((a,v)=>a+v,0)/Math.min(5,session.length) : null;

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <Header onBack={handleExit} t={t} color={color} title={`🎯 ${labels[targetIdx]}`} sub={ph==="start"?t.drillSub:undefined}/>

      {ph==="start"&&(
        <div style={{display:"flex",flexDirection:wide?"row":"column",gap:wide?36:0,alignItems:wide?"flex-start":"center",justifyContent:"center",width:"100%",maxWidth:wide?720:undefined,flexWrap:"wrap"}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:wide?"0 1 340px":undefined}}>
            <div style={{marginBottom:10}}><Cube3D color={color} stageIdx={targetIdx}/></div>
            <div style={{marginBottom:14,width:"100%",display:"flex",justifyContent:"center"}}>
              <Hint color={color} icon="🎯">{t.drillHint}</Hint>
            </div>
            <div style={{width:"100%",maxWidth:340,background:PAL.card,borderRadius:16,padding:"13px 15px",marginBottom:16,
              boxShadow:`0 0 0 2px ${PAL.cardHi}`,display:"flex",alignItems:"center",gap:12,textAlign:"left"}}>
              <span style={{fontSize:30,lineHeight:1,flexShrink:0}}>🎲</span>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:PAL.textDim,letterSpacing:1,textTransform:"uppercase",marginBottom:4}}>{t.randomScrambleTitle}</div>
                <div style={{fontSize:14,fontWeight:700,color:PAL.text,lineHeight:1.45}}>{t.randomScramble}</div>
              </div>
            </div>
            <div style={{width:"100%",maxWidth:300}}>
              <CandyBtn onClick={beginRep} color={color}>{t.go}</CandyBtn>
            </div>
            {isDesktop&&<div style={{marginTop:8,fontSize:12,fontWeight:600,color:PAL.textFaint}}>{t.spaceStart}</div>}
          </div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:wide?"1 1 300px":undefined,maxWidth:340,marginTop:wide?0:18}}>
            <div style={{display:"flex",gap:10}}>
              <StatChip label={t.drillPB} value={fmt2(stats[key]?.best)} color={color}/>
              <StatChip label={t.drillReps} value={times.length} color={PAL.green}/>
            </div>
            <ProgressPanel t={t} stats={{sessions:times.map(ms=>({date:new Date().toISOString(),time:ms})), best:stats[key]?.best}} color={color}/>
            <div style={{width:"100%",maxWidth:340,marginTop:12}}>
              <button onClick={()=>setShowRanking(o=>!o)} style={{width:"100%",border:"none",cursor:"pointer",background:PAL.card,
                borderRadius:16,padding:"13px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",
                boxShadow:`0 4px 0 ${PAL.bg2}, 0 0 0 2px ${color}`}}>
                <span style={{fontWeight:700,fontSize:15,color}}>🏆 {t.drillRanking}</span>
                <span style={{fontSize:18,color,transform:showRanking?"rotate(180deg)":"none",transition:"transform .2s"}}>▾</span>
              </button>
              {showRanking&&(
                <div style={{background:PAL.card,border:`2px solid ${PAL.cardHi}`,borderRadius:18,padding:"6px 14px",marginTop:10,animation:"slideUp .3s ease-out"}}>
                  <DrillRanking times={times} color={color} t={t}/>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {ph==="count"&&(
        <div style={{fontWeight:700,fontSize:110,color,animation:"pop .3s ease-out",textShadow:`0 0 40px ${color}66`,margin:"30px 0"}}>
          {count>0?count:"GO"}
        </div>
      )}

      {ph==="stage"&&(
        <div onClick={complete} style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",cursor:"pointer"}}>
          <div style={{fontWeight:800,fontSize:22,color,letterSpacing:1,marginBottom:10}}>{SPLIT_STAGE_ICONS[targetIdx]} {labels[targetIdx]}</div>
          <div style={{marginBottom:10}}><Cube3D size={100} color={color} stageIdx={targetIdx}/></div>
          <div style={{fontWeight:700,fontSize:52,color:PAL.text,lineHeight:1,margin:"2px 0 10px",
            fontVariantNumeric:"tabular-nums",textShadow:`0 0 22px ${color}44`}}>{fmt2(elapsed)}</div>
          <div style={{marginBottom:16,width:"100%",display:"flex",justifyContent:"center"}}>
            <Hint color={color} icon="⚡">{t.splitRaceCtxSolving}</Hint>
          </div>
          <div style={{width:"100%",maxWidth:300}}>
            <CandyBtn color={color}>{t.splitRaceComplete}</CandyBtn>
          </div>
          <div style={{marginTop:8,fontSize:12,fontWeight:600,color:PAL.textFaint}}>{t.tapAnywhere}</div>
        </div>
      )}

      {ph==="done"&&(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}>
          {lastIsPb&&<Confetti/>}
          <div style={{marginBottom:10}}><Cube3D color={color} stageIdx={targetIdx}/></div>
          <div style={{textAlign:"center",borderRadius:22,padding:"14px 26px",marginBottom:16,animation:"pop .35s ease-out",
            background:PAL.card,boxShadow:`0 0 0 2px ${lastIsPb?PAL.gold:color}`}}>
            <div style={{fontSize:11,letterSpacing:2,color:PAL.textFaint,fontWeight:700,marginBottom:4}}>
              {SPLIT_STAGE_ICONS[targetIdx]} {labels[targetIdx]}
            </div>
            <div style={{fontWeight:800,fontSize:44,lineHeight:1.05,fontVariantNumeric:"tabular-nums",
              color:lastIsPb?PAL.gold:PAL.text}}>{fmt2(lastSplit)}</div>
            {lastIsPb&&<div style={{fontWeight:700,fontSize:14,color:PAL.gold,marginTop:6,animation:"wiggle .6s ease-in-out 3"}}>{t.splitRaceNewPB}</div>}
          </div>
          <div style={{display:"flex",gap:10,marginBottom:18}}>
            <StatChip label={t.drillPB} value={fmt2(stats[key]?.best)} color={color}/>
            <StatChip label={t.drillSessionReps} value={repCount} color={PAL.green}/>
            {avg5!=null&&<StatChip label={t.drillAvg5} value={fmt2(avg5)} color={PAL.blue}/>}
          </div>
          <div style={{width:"100%",maxWidth:340,marginBottom:18}}>
            <div style={{fontWeight:700,fontSize:13,color:PAL.textDim,marginBottom:8,textAlign:"left"}}>🏆 {t.drillRanking}</div>
            <div style={{background:PAL.card,border:`2px solid ${PAL.cardHi}`,borderRadius:18,padding:"6px 14px"}}>
              <DrillRanking times={times} color={color} t={t}/>
            </div>
          </div>
          <div style={{width:"100%",maxWidth:300,display:"flex",flexDirection:"column",gap:10}}>
            <CandyBtn onClick={newRep} color={color}>{t.drillNext}</CandyBtn>
            <GhostBtn onClick={onBack} color={PAL.textDim}>{t.splitRaceExit}</GhostBtn>
          </div>
          {isDesktop&&<div style={{marginTop:8,fontSize:12,fontWeight:600,color:PAL.textFaint}}>{t.spaceStart}</div>}
        </div>
      )}
    </div>
  );
}

function DuelScreen({ onBack, t, skin, full }){
  const wide = useWide();
  const S = SKINS[skin]; const sprites = S.sprites();
  const neon = skin==="sudoku";
  const wood = skin==="classic";
  const paper = skin==="monstro";
  const R = full ? 3 : 5;                 /* résolution complète : 3 manches */
  const DK = full ? "duelsolve" : "duel"; /* clé de progression */
  const [profs,setProfs] = useState(listProfiles);
  const [pick,setPick] = useState(true);
  const [idA,setIdA] = useState(()=>currentProfile().id);
  const [idB,setIdB] = useState(()=>{
    const l = listProfiles(), c = currentProfile().id;
    const autre = l.find(p=>p.id!==c);
    return autre ? autre.id : null;
  });
  const joueur = (id)=>profs.find(p=>p.id===id) || null;
  const nomA = joueur(idA) ? `${joueur(idA).emoji} ${joueur(idA).name}` : "J1";
  const nomB = joueur(idB) ? `${joueur(idB).emoji} ${joueur(idB).name}` : "J2";
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
  /* Enregistre le duel dans la progression des deux joueurs */
  function majDuel(id, monTotal, advTotal, advNom){
    if(!id) return;
    saveProfileData(id, d=>{
      const sd = d[skin] || {};
      const st = sd[DK] || { best:null, games:0, wins:0, sessions:[] };
      st.games = (st.games||0)+1;
      if(monTotal < advTotal) st.wins = (st.wins||0)+1;
      if(st.best==null || monTotal < st.best) st.best = monTotal;
      st.sessions = [...(st.sessions||[]),
        { date:Date.now(), time:monTotal, won:monTotal<advTotal, opp:advNom }].slice(-50);
      sd[DK] = st; d[skin] = sd; return d;
    });
  }
  function next(){
    const toutes = [...scores, { p1:eff(p1), p2:eff(p2) }];
    setScores(toutes);
    if(round>=R){
      const tA = toutes.reduce((a,x)=>a+x.p1,0);
      const tB = toutes.reduce((a,x)=>a+x.p2,0);
      majDuel(idA, tA, tB, nomB);
      majDuel(idB, tB, tA, nomA);
      setPh("over");
    }
    else { setRound(r=>r+1); setPh("ready"); }
  }
  function reset(){ setRound(1); setScores([]); setPh("ready"); setShowRules(false); setProfs(listProfiles()); setPick(true); }
  const p1T = scores.reduce((a,s)=>a+s.p1,0);
  const p2T = scores.reduce((a,s)=>a+s.p2,0);
  const rw = ()=>{ if(!(p1.d&&p2.d)) return null;
    const a=eff(p1), b=eff(p2);
    return a<b?"J1":b<a?"J2":null; };

  if(pick) return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:SUDO_BG}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
      <Header onBack={onBack} t={t} color={PAL.green} title={`⚔️ ${t.duel}`} sub={t.whoDuels}/>

      <div style={{fontSize:13,color:wood?"#8a6539":(paper?"#4a6a96":PAL.textDim),fontWeight:600,
        maxWidth:340,textAlign:"center",marginBottom:16,lineHeight:1.5}}>{t.duelSub2}</div>

      <div style={{width:"100%",maxWidth:wide?780:380,display:"flex",
        flexDirection:wide?"row":"column",gap:14,alignItems:"stretch"}}>
      {[{k:"a",label:t.playerOne,val:idA,set:setIdA,autre:idB,color:PAL.blue},
        {k:"b",label:t.playerTwo,val:idB,set:setIdB,autre:idA,color:PAL.pink}].map(col=>(
        <div key={col.k} style={{width:"100%",flex:wide?1:undefined,marginBottom:wide?0:14,
          background:neon?"#1c1745":(wood?"#fffaf0":(paper?"#ffffff":PAL.card)),
          borderRadius:18,padding:"13px 13px 14px",
          boxShadow:`0 0 0 2px ${col.color}`}}>
          <div style={{fontWeight:800,fontSize:13,color:col.color,marginBottom:9,letterSpacing:.5}}>{col.label}</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
            {profs.map(p=>{
              const actif = col.val===p.id;
              const prisAilleurs = col.autre===p.id;
              return (
                <button key={p.id} disabled={prisAilleurs}
                  onClick={()=>col.set(p.id)}
                  style={{display:"flex",alignItems:"center",gap:7,border:"none",borderRadius:999,
                    padding:"9px 13px",cursor:prisAilleurs?"default":"pointer",
                    opacity:prisAilleurs?.35:1,
                    background:actif?col.color:(wood?"#f3e3c8":(paper?"#eef2f7":(neon?"#2c2563":PAL.bg2))),
                    color:actif?"#ffffff":(wood?"#4a3418":(paper?"#132a4d":PAL.text)),
                    fontWeight:800,fontSize:13,fontFamily:"inherit"}}>
                  <span style={{fontSize:16}}>{p.emoji}</span>{p.name}
                </button>
              );
            })}
            <button onClick={()=>{
                const nb = profs.length+1;
                const id = addProfile(`${t.playerOne.split(" ")[0]} ${nb}`, PROFILE_EMOJIS[nb%PROFILE_EMOJIS.length], false);
                const liste = listProfiles(); setProfs(liste); col.set(id);
              }}
              style={{border:"none",borderRadius:999,padding:"9px 13px",cursor:"pointer",
                background:"transparent",fontWeight:800,fontSize:13,fontFamily:"inherit",
                color:wood?"#8a6539":(paper?"#4a6a96":PAL.textDim),
                boxShadow:`0 0 0 2px ${wood?"#e6d3b0":(paper?"#c4d6e8":PAL.cardHi)}`}}>
              ＋ {t.addProfile}
            </button>
          </div>
        </div>
      ))}
      </div>

      <div style={{marginTop:6,width:"100%",maxWidth:300}}>
        <CandyBtn onClick={()=>{ if(idA&&idB&&idA!==idB) setPick(false); }}
          color={paper?"#ffffff":PAL.green} ring={paper?"#132a4d":undefined}>{t.startDuel}</CandyBtn>
      </div>
    </div>
  );

  if(showRules) return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:SUDO_BG}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
      <Header onBack={onBack} t={t} color={PAL.green} title={`⚔️ ${t.duel}`}/>
      <div style={{background:PAL.card,borderRadius:20,padding:"20px 18px",maxWidth:340,width:"100%",boxShadow:`0 0 0 2px ${PAL.gold}`}}>
        {(full?t.duelSolveRules:t.duelRules).map((r,i,arr)=>(
          <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:i<arr.length-1?12:0}}>
            <span style={{width:28,height:28,borderRadius:"50%",background:PAL.green,color:"#1a1228",fontWeight:700,fontSize:15,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{i+1}</span>
            <span style={{fontSize:16,color:"#ffffff",fontWeight:600,lineHeight:1.5}}>{r}</span>
          </div>
        ))}
      </div>
      <div style={{marginTop:20,width:"100%",maxWidth:300}}><CandyBtn onClick={()=>setShowRules(false)} color={paper?"#ffffff":PAL.green} ring={paper?"#132a4d":undefined}>{t.go}</CandyBtn></div>
    </div>
  );

  if(ph==="over") return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:SUDO_BG}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
      <Confetti/>
      <Header onBack={onBack} t={t} color={PAL.green} title={t.finalScore}/>
      <div style={{fontWeight:700,fontSize:30,color:PAL.gold,margin:"10px 0 18px",animation:"pop .4s ease-out"}}>
        {p1T<p2T?`🏆 ${nomA} ${t.wins}`:p2T<p1T?`🏆 ${nomB} ${t.wins}`:t.tie}
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
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:SUDO_BG}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
      <div style={{fontWeight:700,fontSize:120,color:PAL.green,animation:"pop .3s ease-out",textShadow:`0 0 40px ${PAL.green}66`}}>{count}</div>
    </div>
  );

  if(ph==="playing"||ph==="roundDone"){
    const sz = wide
      ? Math.min(window.innerWidth-320, window.innerHeight-260, 340)
      : Math.min(window.innerWidth-70, window.innerHeight-390, 310);
    const btnStyle = (p,col)=>({flex:1,padding:wide?"20px 10px":"20px 8px",border:"none",borderRadius:18,cursor:"pointer",
      background:p.d?PAL.card:`linear-gradient(180deg,${shade(col,30)},${col} 45%)`,
      color:p.d?(p.pen?PAL.red:PAL.gold):"#1a1228",fontWeight:700,fontSize:17,
      boxShadow:p.d?`0 0 0 2px ${p.pen?PAL.red:col}44`:`0 5px 0 ${shade(col,-40)}, inset 0 2px 4px rgba(255,255,255,.4)`});
    const btn1 = (
      <button onClick={()=>p1.d?togglePen(1):done(1)} disabled={!p1.d&&ph!=="playing"}
        style={wide?{...btnStyle(p1,PAL.blue),flex:"none",width:150,height:"100%",minHeight:220}:btnStyle(p1,PAL.blue)}>
        <div style={{fontSize:11,fontWeight:700,opacity:.75,marginBottom:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{nomA}{p1.pen?" · 😈+30s":""}</div>
        {p1.d?fmt(eff(p1)):t.iDone}
      </button>
    );
    const btn2 = (
      <button onClick={()=>p2.d?togglePen(2):done(2)} disabled={!p2.d&&ph!=="playing"}
        style={wide?{...btnStyle(p2,PAL.pink),flex:"none",width:150,height:"100%",minHeight:220}:btnStyle(p2,PAL.pink)}>
        <div style={{fontSize:11,fontWeight:700,opacity:.75,marginBottom:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{nomB}{p2.pen?" · 😈+30s":""}</div>
        {p2.d?fmt(eff(p2)):t.iDone}
      </button>
    );
    const center = (
      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12}}>
        <div style={{fontWeight:700,fontSize:46,color:PAL.green,lineHeight:1,fontVariantNumeric:"tabular-nums",textShadow:`0 0 20px ${PAL.green}44`}}>{fmt(ms)}</div>
        {full
          ? <SkinSpinCube skin={skin} size={Math.min(sz*.6,150)} glow={PAL.green}/>
          : <CubeFace cells={face} size={sz} glow={neon?SKINS.sudoku.color:(wood?"#c69c6d":(ph==="playing"?PAL.green:null))} sprites={sprites} dark={neon} light={wood}/>}
        <Hint color={ph==="roundDone"?PAL.gold:PAL.green} icon={ph==="roundDone"?"🔍":"⚡"}>{ph==="roundDone"?t.ctxDuelDone:(full?t.ctxDuelSolve:t.ctxDuelPlaying)}</Hint>
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
    );
    return (
      <div style={{display:"flex",flexDirection:wide?"row":"column",alignItems:"center",justifyContent:"center",
        minHeight:"100vh",position:"relative",zIndex:1,padding:wide?"20px 24px":"12px 14px",gap:wide?20:10}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:SUDO_BG}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
        {wide ? (
          <>
            {btn1}
            {center}
            {btn2}
          </>
        ) : (
          <>
            {center}
            <div style={{display:"flex",gap:12,width:"100%",maxWidth:420}}>
              {btn1}{btn2}
            </div>
          </>
        )}
      </div>
    );
  }
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
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
function SavantsScreen({ onBack, t, kids, toggleKids, onChrono, on3d }){
  const wide = useWide();
  const W = wide?760:420;
  const [sel,setSel] = useState(null);
  const [open,setOpen] = useState(null);
  const s = SAVANTS.find(x=>x.id===sel);

  const lvl = (()=>{ const i = t.ageToggleHint.indexOf(":");
    return i>0 ? [t.ageToggleHint.slice(0,i+1), t.ageToggleHint.slice(i+1).trim()] : [t.ageToggleHint,""]; })();

  if(!s) return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"18px 14px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"linear-gradient(180deg,#f4faff 0%,#e4f1fd 55%,#d9eafa 100%)"}}/>

      {/* En-tête : retour + titre */}
      <div style={{width:"100%",maxWidth:W,display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
        <GhostBtn onClick={onBack} color="#132a4d" bg="#ffffff" border="#2a4570" shadow="#2a4570">{t.menu}</GhostBtn>
        <div style={{flex:1,minWidth:0,textAlign:"right"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8}}>
            <span style={{fontSize:26,lineHeight:1}}>🔬</span>
            <span style={{fontWeight:800,fontSize:19,lineHeight:1.1,color:"#ffcf3f",
              textShadow:"2px 0 0 #132a4d, -2px 0 0 #132a4d, 0 2px 0 #132a4d, 0 -2px 0 #132a4d, 0 5px 10px rgba(19,42,77,.3)"}}>{t.savants}</span>
          </div>
          <div style={{fontSize:12.5,fontWeight:600,color:"#4a6a96",marginTop:6}}>{t.savantsSub}</div>
        </div>
      </div>

      {/* Visuel du coffret */}
      <img src={SAVANTS_PHOTO} alt={t.savants} draggable={false}
        style={{width:"100%",maxWidth:W,borderRadius:20,marginBottom:14,display:"block",
          boxShadow:"0 0 0 3px #ffcf3f, 0 6px 18px rgba(19,42,77,.25)"}}/>

      {/* Résoudre le cube : chrono résolution complète + cube 3D */}
      <KnowSolveModes t={t} W={W} onChrono={onChrono} on3d={on3d}/>

      {/* Mode d'emploi */}
      <div style={{width:"100%",maxWidth:W,display:"flex",alignItems:"flex-start",gap:11,marginBottom:12,
        background:"linear-gradient(180deg,#fff9e3,#fdefc6)",borderRadius:18,padding:"14px 15px",
        boxShadow:"0 0 0 2px #f0c33c, 0 4px 12px rgba(19,42,77,.12)"}}>
        <span style={{fontSize:26,flexShrink:0,lineHeight:1.1}}>💡</span>
        <span style={{fontSize:13.5,color:"#132a4d",fontWeight:700,lineHeight:1.5,textAlign:"left"}}>{t.savantsIntro}</span>
      </div>

      {/* Niveau de lecture */}
      <div style={{width:"100%",maxWidth:W,display:"flex",alignItems:"flex-start",gap:11,marginBottom:12,
        background:"linear-gradient(180deg,#ecf7ff,#dcefff)",borderRadius:18,padding:"14px 15px",
        boxShadow:"0 0 0 2px #6bb6f0, 0 4px 12px rgba(19,42,77,.1)"}}>
        <span style={{fontSize:26,flexShrink:0,lineHeight:1.1}}>🎓</span>
        <div style={{textAlign:"left"}}>
          <div style={{fontSize:14,fontWeight:800,color:"#132a4d",lineHeight:1.3}}>{lvl[0]}</div>
          {lvl[1]&&<div style={{fontSize:12.5,fontWeight:600,color:"#4a6a96",lineHeight:1.45,marginTop:3}}>{lvl[1]}</div>}
        </div>
      </div>

      {/* Bascule Ado&Adulte / Enfant */}
      <div style={{width:"100%",maxWidth:W,display:"flex",gap:10,marginBottom:14}}>
        {[{v:false,label:t.teenLabel},{v:true,label:t.kidsLabel}].map(o=>{
          const on = kids===o.v;
          return (
            <button key={String(o.v)} onClick={()=>toggleKids(o.v)}
              style={{flex:1,border:"none",cursor:"pointer",borderRadius:16,padding:"13px 6px",
                background:on?"linear-gradient(180deg,#ffe27a,#f5bd1f)":"#ffffff",
                color:"#132a4d",fontWeight:800,fontSize:14.5,
                boxShadow:on?"0 4px 0 #c98f0a, 0 0 0 2.5px #132a4d":"0 4px 0 #c4d6e8, 0 0 0 2.5px #132a4d",
                transition:"all .12s"}}>{o.label}</button>
          );
        })}
      </div>

      {/* Les six savants */}
      <div className="stagger" style={{width:"100%",maxWidth:W,display:"grid",gridTemplateColumns:wide?"1fr 1fr 1fr":"1fr 1fr",gap:12}}>
        {SAVANTS.map(sv=>{
          /* la carte prend la couleur du savant : Einstein en jaune, Marie Curie en blanc */
          const cc = sv.color;
          return (
          <button key={sv.id} onClick={()=>{setSel(sv.id);setOpen(null);}}
            style={{border:"none",cursor:"pointer",padding:0,background:"transparent",display:"block",height:"100%"}}>
            <div style={{position:"relative",overflow:"hidden",borderRadius:20,padding:"12px 10px",
              display:"flex",alignItems:"center",gap:9,minHeight:112,height:"100%",boxSizing:"border-box",
              background:`linear-gradient(135deg,${shade(cc,22)},${shade(cc,-22)})`,
              boxShadow:`0 5px 0 ${shade(cc,-80)}, 0 0 0 2.5px #132a4d, 0 6px 16px rgba(19,42,77,.22)`}}>
              <span style={{position:"absolute",right:6,top:4,fontSize:30,opacity:.22,pointerEvents:"none"}}>{sv.emoji}</span>
              <div style={{width:68,height:68,borderRadius:"50%",overflow:"hidden",flexShrink:0,
                display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,
                background:sv.tiles?"transparent":`linear-gradient(180deg,${shade(cc,30)},${cc} 55%)`,
                boxShadow:`0 0 0 3px #132a4d, 0 3px 8px rgba(19,42,77,.3)`}}>
                {sv.tiles
                  ? <img src={sv.tiles[4]} alt={sv.name} draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                  : sv.emoji}
              </div>
              <div style={{flex:1,minWidth:0,position:"relative",textAlign:"left"}}>
                <div style={{fontWeight:800,fontSize:13.5,color:"#132a4d",lineHeight:1.2}}>{sv.name}</div>
                <div style={{fontSize:10.5,color:"#2a4570",fontWeight:600,lineHeight:1.3,marginTop:3}}>{sv.tag}</div>
                <div style={{fontSize:11,color:shade(cc,-105),fontWeight:800,marginTop:7}}>8 {t.symbols} →</div>
              </div>
            </div>
          </button>
          );
        })}
      </div>

      <a href="https://rurucube.com/le-coffret-des-scientifiques" target="_blank" rel="noopener noreferrer"
        style={{textDecoration:"none",marginTop:20,width:"100%",maxWidth:W}}>
        <div style={{background:"#ffffff",borderRadius:16,padding:"13px 20px",textAlign:"center",
          boxShadow:"0 4px 0 #c4d6e8, 0 0 0 2.5px #132a4d"}}>
          <span style={{fontSize:13.5,fontWeight:800,color:"#132a4d"}}>{t.seeOnSite}</span>
        </div>
      </a>
    </div>
  );

  const posOfIdx = {};
  for(let i=0;i<9;i++){ const ix = s.order ? s.order[i] : (i===4?-1:(i<4?i:i-1)); if(ix>=0) posOfIdx[ix]=i; }

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
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

      {/* Grille des 8 symboles + le génie au centre, et sa définition */}
      <div style={{display:"flex",flexDirection:wide?"row":"column",alignItems:wide?"flex-start":"center",
        justifyContent:"center",gap:24,width:"100%",maxWidth:wide?720:undefined,flexWrap:"wrap"}}>
      <div style={{width:Math.min(300,window.innerWidth-60),background:"#171327",borderRadius:22,padding:6,
        display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,marginBottom:18,boxShadow:"0 10px 30px rgba(0,0,0,.45)",flexShrink:0}}>
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
      <div style={{width:"100%",maxWidth:380,flex:wide?"1 1 300px":undefined}}>
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
    </div>
  );
}

/* ═══ ACCUEIL — tout sur un écran ═══════════════════════════════ */
function LogoBtn({ img, alt, badge, onClick, trim }){
  const [press,setPress]=useState(false);
  // trim = [haut, bas] en % de la largeur : rogne le vide transparent des images
  // pour que l'espacement visuel entre les boutons soit vraiment celui du gap.
  const tTop = trim?trim[0]:0, tBot = trim?trim[1]:0;
  return (
    <button onClick={onClick} onPointerDown={()=>setPress(true)} onPointerUp={()=>setPress(false)} onPointerLeave={()=>setPress(false)}
      style={{border:"none",background:"none",padding:0,cursor:"pointer",position:"relative",width:"100%",
        transform:press?"scale(.94)":"scale(1)",transition:"transform .1s"}}>
      <div style={{overflow:"hidden",width:"100%",filter:"drop-shadow(0 8px 18px rgba(0,0,0,.45))"}}>
        <img src={img} alt={alt} draggable={false}
          style={{width:"100%",display:"block",marginTop:`-${tTop}%`,marginBottom:`-${tBot}%`}}/>
      </div>
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

/* ═══ ACCUEIL — choisir son jeu ═════════════════════════════════ */
/* Cadre d'un univers : bandeau titré + les jeux qu'il contient */
function UniversBlock({ icon, title, sub, color, children }){
  return (
    <div style={{width:"100%",maxWidth:380,borderRadius:26,padding:"14px 14px 18px",
      background:`linear-gradient(180deg, ${PAL.cardHi} 0%, ${PAL.card} 42%, ${PAL.dark} 100%)`,
      boxShadow:`0 0 0 2px ${color}, 0 14px 34px rgba(0,0,0,.62), inset 0 1px 0 ${color}55`}}>
      {/* Bandeau de l'univers */}
      <div style={{display:"flex",alignItems:"center",gap:11,marginBottom:14,padding:"0 2px"}}>
        <span style={{width:42,height:42,flexShrink:0,borderRadius:15,display:"flex",alignItems:"center",justifyContent:"center",
          fontSize:22,background:`linear-gradient(180deg,${shade(color,35)},${color} 55%)`,
          boxShadow:`0 4px 0 ${shade(color,-45)}, inset 0 2px 4px rgba(255,255,255,.4)`}}>{icon}</span>
        <div style={{textAlign:"left",flex:1,minWidth:0}}>
          <div style={{fontWeight:700,fontSize:15,color:PAL.text,letterSpacing:.4,lineHeight:1.2}}>{title}</div>
          <div style={{fontSize:11.5,color:PAL.textDim,fontWeight:600,marginTop:3,lineHeight:1.35}}>{sub}</div>
        </div>
      </div>
      {/* Trait de séparation */}
      <div style={{height:2,borderRadius:2,marginBottom:14,
        background:`linear-gradient(90deg, ${color}, ${color}22 70%, transparent)`}}/>
      <div style={{display:"flex",flexDirection:"column",gap:"0.4cm"}}>{children}</div>
    </div>
  );
}
/* ═══ ACCUEIL — vitrine : 3 cubes + tuiles de découverte ════════ */
function HomeLabel({ children }){
  return (
    <div style={{display:"flex",alignItems:"center",gap:12,width:"100%",maxWidth:420,margin:"22px 0 14px"}}>
      <div style={{flex:1,height:1.5,background:`linear-gradient(90deg,transparent,${PAL.gold}77)`}}/>
      <div style={{fontWeight:800,fontSize:19,letterSpacing:2,color:PAL.gold,whiteSpace:"nowrap"}}>{children}</div>
      <div style={{flex:1,height:1.5,background:`linear-gradient(90deg,${PAL.gold}77,transparent)`}}/>
    </div>
  );
}

/* Grande carte verticale d'un cube : visuel + accroche + bouton JOUER */
/* ─── Petite face mélangée sous chaque logo de l'accueil ───────────
   Cubes à motifs : une vraie face du générateur de l'univers.
   Cubes à images (Chess, Sudocube Mono) et cubes du savoir : 9 cases tirées
   au hasard en respectant la nature des pièces (coin -> case de coin,
   arête -> case d'arête, centre -> case centrale). */
const MINI_SAVANTS = [[EINSTEIN_TILES_0,EINSTEIN_TILES_1,EINSTEIN_TILES_2,EINSTEIN_TILES_3,EINSTEIN_TILES_4,EINSTEIN_TILES_5,EINSTEIN_TILES_6,EINSTEIN_TILES_7,EINSTEIN_TILES_8],[CURIE_TILES_0,CURIE_TILES_1,CURIE_TILES_2,CURIE_TILES_3,CURIE_TILES_4,CURIE_TILES_5,CURIE_TILES_6,CURIE_TILES_7,CURIE_TILES_8],[TESLA_TILES_0,TESLA_TILES_1,TESLA_TILES_2,TESLA_TILES_3,TESLA_TILES_4,TESLA_TILES_5,TESLA_TILES_6,TESLA_TILES_7,TESLA_TILES_8],[NEWTON_TILES_0,NEWTON_TILES_1,NEWTON_TILES_2,NEWTON_TILES_3,NEWTON_TILES_4,NEWTON_TILES_5,NEWTON_TILES_6,NEWTON_TILES_7,NEWTON_TILES_8],[DARWIN_TILES_0,DARWIN_TILES_1,DARWIN_TILES_2,DARWIN_TILES_3,DARWIN_TILES_4,DARWIN_TILES_5,DARWIN_TILES_6,DARWIN_TILES_7,DARWIN_TILES_8],[GALILEE_TILES_0,GALILEE_TILES_1,GALILEE_TILES_2,GALILEE_TILES_3,GALILEE_TILES_4,GALILEE_TILES_5,GALILEE_TILES_6,GALILEE_TILES_7,GALILEE_TILES_8]];
const MINI_CIVI = [[RAPANUI_TILES_0,RAPANUI_TILES_1,RAPANUI_TILES_2,RAPANUI_TILES_3,RAPANUI_TILES_4,RAPANUI_TILES_5,RAPANUI_TILES_6,RAPANUI_TILES_7,RAPANUI_TILES_8],[MAYA_TILES_0,MAYA_TILES_1,MAYA_TILES_2,MAYA_TILES_3,MAYA_TILES_4,MAYA_TILES_5,MAYA_TILES_6,MAYA_TILES_7,MAYA_TILES_8],[ROME_TILES_0,ROME_TILES_1,ROME_TILES_2,ROME_TILES_3,ROME_TILES_4,ROME_TILES_5,ROME_TILES_6,ROME_TILES_7,ROME_TILES_8],[EGYPT_TILES_0,EGYPT_TILES_1,EGYPT_TILES_2,EGYPT_TILES_3,EGYPT_TILES_4,EGYPT_TILES_5,EGYPT_TILES_6,EGYPT_TILES_7,EGYPT_TILES_8],[MESO_TILES_0,MESO_TILES_1,MESO_TILES_2,MESO_TILES_3,MESO_TILES_4,MESO_TILES_5,MESO_TILES_6,MESO_TILES_7,MESO_TILES_8],[CHINA_TILES_0,CHINA_TILES_1,CHINA_TILES_2,CHINA_TILES_3,CHINA_TILES_4,CHINA_TILES_5,CHINA_TILES_6,CHINA_TILES_7,CHINA_TILES_8]];
function miniFaceCells(id){
  const pick=a=>a[Math.floor(Math.random()*a.length)];
  const kind=i=>i===4?[4]:([0,2,6,8].includes(i)?[0,2,6,8]:[1,3,5,7]);
  if(["monstro","classic","sudoku","illusion"].includes(id)){
    const sp=SKINS[id].sprites(); return SKINS[id].gen().map((c,i)=>({img:sp[c.colorId]?.[c.typeId??i]}));
  }
  if(id==="chess3d"){   /* Chess Cube : une face entière, non mélangée (la dame) */
    return Array.from({length:9},(_,i)=>({ bg:{ backgroundImage:`url(${CHESS3D_IMG.F})`, backgroundSize:"300% 300%",
      backgroundPosition:`${(i%3)*50}% ${Math.floor(i/3)*50}%` } }));
  }
  if(id==="sudomono"){
    const faces=Object.values(SUDOMONO_IMG);
    return Array.from({length:9},(_,i)=>{ const cell=pick(kind(i));
      return { bg:{ backgroundImage:`url(${pick(faces)})`, backgroundSize:"300% 300%",
        backgroundPosition:`${(cell%3)*50}% ${Math.floor(cell/3)*50}%`, transform:`rotate(${pick([0,90,180,270])}deg)` } }; });
  }
  if(id==="savants"||id==="civi"){
    const S=id==="savants"?MINI_SAVANTS:MINI_CIVI;
    return Array.from({length:9},(_,i)=>({img:pick(S)[pick(kind(i))]}));
  }
  return null;
}
function HomeMiniFace({ id, color, pressed }){
  const [cells] = useState(()=>miniFaceCells(id));
  if(!cells) return null;
  return (
    <div style={{width:"50%",aspectRatio:"1",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:3,padding:4,boxSizing:"border-box",
      background:"#0d0d0f",borderRadius:11,margin:"0 auto 10px",transform:`rotate(-5deg) scale(${pressed?.94:1})`,transition:"transform .12s",
      boxShadow:`0 0 0 1.5px ${color}99, 0 6px 14px rgba(0,0,0,.5), 0 0 16px ${color}44`}}>
      {cells.map((c,i)=>(
        <div key={i} style={{borderRadius:4,overflow:"hidden",...(c.bg||{})}}>
          {c.img&&<img src={c.img} alt="" draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>}
        </div>
      ))}
    </div>
  );
}

/* Logos des cartes d'accueil (fond transparent), par identifiant de carte */
/* Visuels carrés des cartes de l'accueil (logo + cube) */
const HOME_ART = { monstro:HA_MONSTRO, classic:HA_CLASSIC, sudoku:HA_SUDOKU, illusion:HA_ILLUSION, chess3d:HA_CHESS3D, sudomono:HA_SUDOMONO, savants:HA_SAVANTS, civi:HA_CIVI };
const HOME_LOGOS = { monstro:LG_MONSTRO, classic:LG_CLASSIC, sudoku:LG_SUDOKU, illusion:LG_ILLUSION,
  chess3d:LG_CHESSCUBE, sudomono:LG_SUDOMONO, savants:LG_SAVANTS, civi:LG_CIVI };
function CubeCard({ img, art, logo, faceId, emoji, title, sub, color, cta, onClick, framed, btnText, glow }){
  const [p,setP] = useState(false);
  /* Visuel qui a déjà son propre cadre néon : pas de contour ajouté,
     halo + bouton accordés à la couleur du cadre */
  if(framed) return (
    <button onClick={onClick}
      onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)}
      style={{flex:1,minWidth:0,border:"none",padding:0,cursor:"pointer",background:"transparent",
        display:"flex",flexDirection:"column",alignItems:"center",
        transform:p?"translateY(3px) scale(.985)":"none",transition:"transform .12s"}}>
      <img src={img} alt="" draggable={false} style={{width:"100%",display:"block",
        filter:"drop-shadow(0 8px 14px rgba(0,0,0,.5))"}}/>
      <div style={{fontSize:11.5,fontWeight:600,color:"#ffffffdd",lineHeight:1.3,textAlign:"center",minHeight:31,
        whiteSpace:"pre-line",margin:"6px 4px 8px"}}>{sub}</div>
      <div style={{width:"88%",marginTop:"auto",marginBottom:11,borderRadius:999,padding:"9px 4px",display:"flex",alignItems:"center",justifyContent:"center",gap:5,
        background:`linear-gradient(180deg,${shade(color,45)},${color})`,
        boxShadow:`0 4px 0 ${shade(color,-60)}, 0 0 14px ${glow||color}66`}}>
        <span style={{fontWeight:800,fontSize:12.5,letterSpacing:.6,color:btnText||"#fff",
          textShadow:btnText?"none":"0 1px 2px rgba(0,0,0,.45)"}}>{cta}</span>
        <span style={{fontSize:13,color:btnText||"#fff",fontWeight:800}}>›</span>
      </div>
    </button>
  );
  return (
    <button onClick={onClick}
      onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)}
      style={{flex:1,minWidth:0,border:"none",padding:0,cursor:"pointer",background:"transparent",
        transform:p?"translateY(3px) scale(.985)":"none",transition:"transform .12s"}}>
      <div style={{borderRadius:18,overflow:"hidden",display:"flex",flexDirection:"column",background:PAL.dark,height:"100%",boxSizing:"border-box",
        boxShadow:`0 0 0 2.5px ${color}, 0 0 20px ${color}44, 0 10px 24px rgba(0,0,0,.55)`}}>
        {emoji
          ? <div style={{width:"100%",aspectRatio:"1",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,
              background:`linear-gradient(160deg,${shade(color,20)},${shade(color,-30)})`}}>
              <span style={{fontSize:44}}>{emoji}</span>
              {title&&<span style={{fontSize:13,fontWeight:800,color:"#fff",textAlign:"center",padding:"0 10px",
                textShadow:"0 2px 4px rgba(0,0,0,.4)",lineHeight:1.25}}>{title}</span>}
            </div>
          : art
          ? <div style={{width:"100%",padding:"7px 7px 6px",boxSizing:"border-box",background:"#ffffff"}}>
              <img src={art} alt="" draggable={false} style={{width:"100%",aspectRatio:"1",objectFit:"cover",display:"block",
                filter:"drop-shadow(0 4px 6px rgba(0,0,0,.25))",
                transform:p?"scale(.95)":"scale(1)",transition:"transform .12s"}}/>
            </div>
          : logo
          ? <div style={{width:"100%",background:`radial-gradient(80% 60% at 50% 40%, ${color}40, ${color}10 55%, transparent 75%)`}}>
            <div style={{width:"100%",aspectRatio:"16 / 9",display:"flex",alignItems:"center",justifyContent:"center",
              padding:"8px 7px 4px",boxSizing:"border-box"}}>
              <img src={logo} alt="" draggable={false} style={{width:"100%",maxHeight:"100%",objectFit:"contain",display:"block",
                filter:`drop-shadow(0 5px 8px rgba(0,0,0,.55)) drop-shadow(0 0 12px ${color}66)`,
                transform:p?"scale(.93)":"scale(1)",transition:"transform .12s"}}/>
            </div>
            {faceId&&<HomeMiniFace id={faceId} color={color} pressed={p}/>}
            </div>
          : <img src={img} alt="" draggable={false} style={{width:"100%",display:"block"}}/>}
        <div style={{padding:"9px 7px 11px",display:"flex",flexDirection:"column",alignItems:"center",gap:9,flex:1,
          background:`linear-gradient(180deg,${color}66,${color}2e),${PAL.dark}`,
          borderTop:`1.5px solid ${color}aa`}}>
          <div style={{fontSize:11.5,fontWeight:600,color:"#ffffffdd",lineHeight:1.3,textAlign:"center",minHeight:31,whiteSpace:"pre-line"}}>{sub}</div>
          <div style={{width:"100%",marginTop:"auto",borderRadius:999,padding:"9px 4px",display:"flex",alignItems:"center",justifyContent:"center",gap:5,
            background:`linear-gradient(180deg,${shade(color,45)},${color})`,
            boxShadow:`0 4px 0 ${shade(color,-60)}`}}>
            <span style={{fontWeight:800,fontSize:12.5,letterSpacing:.6,color:btnText||"#fff",textShadow:btnText?"none":"0 1px 2px rgba(0,0,0,.45)"}}>{cta}</span>
            <span style={{fontSize:13,color:btnText||"#fff",fontWeight:800}}>›</span>
          </div>
        </div>
      </div>
    </button>
  );
}

/* Tuile compacte de la section « Découvrir » */
function DiscoverTile({ thumb, emoji, title, sub, color, onClick }){
  const [p,setP] = useState(false);
  return (
    <button onClick={onClick}
      onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)}
      style={{border:"none",padding:0,cursor:"pointer",background:"transparent",width:"100%",
        transform:p?"translateY(3px) scale(.995)":"none",transition:"transform .12s"}}>
      <div style={{display:"flex",alignItems:"center",gap:14,borderRadius:20,padding:"11px 14px 11px 11px",
        background:`linear-gradient(100deg,${PAL.dark},${PAL.card})`,
        boxShadow:`0 0 0 2.5px ${color}, 0 0 18px ${color}33, 0 8px 20px rgba(0,0,0,.45)`}}>
        {emoji
          ? <div style={{width:78,height:78,borderRadius:16,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:34,background:`linear-gradient(180deg,${shade(color,30)},${color} 55%)`,
              boxShadow:`0 0 0 2px ${color}88`}}>{emoji}</div>
          : <img src={thumb} alt="" draggable={false}
              style={{width:78,height:78,borderRadius:16,objectFit:"cover",flexShrink:0,
                boxShadow:`0 0 0 2px ${color}88`}}/>}
        <div style={{textAlign:"left",flex:1,minWidth:0}}>
          <div style={{fontSize:16,fontWeight:800,color,letterSpacing:.3,lineHeight:1.15}}>{title}</div>
          <div style={{fontSize:12.5,fontWeight:600,color:"#ffffffc4",marginTop:5,lineHeight:1.35}}>{sub}</div>
        </div>
        <span style={{width:32,height:32,borderRadius:999,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",
          border:`2px solid ${color}`,color,fontSize:18,fontWeight:800,lineHeight:1,paddingBottom:2}}>›</span>
      </div>
    </button>
  );
}

/* ═══ INSTALLER L'APPLI — protège la progression ═══════════════
   La progression est gardée dans le navigateur. Installée sur l'écran
   d'accueil, l'appli garde ses données (Safari peut sinon les effacer
   après quelques jours sans visite). Android : bouton « Installer ».
   iPhone : on explique Partager → « Sur l'écran d'accueil ». */
let deferredInstall = null;
if(typeof window!=="undefined"){
  window.addEventListener("beforeinstallprompt", e=>{ e.preventDefault(); deferredInstall=e; window.dispatchEvent(new Event("ruru-installable")); });
  if("serviceWorker" in navigator && location.protocol==="https:") navigator.serviceWorker.register("/sw.js").catch(()=>{});
  try{ navigator.storage && navigator.storage.persist && navigator.storage.persist(); }catch(e){}
}
function InstallBanner({ t }){
  const standalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone===true;
  const ua = navigator.userAgent||"";
  const ios = /iPhone|iPad|iPod/.test(ua) || (navigator.platform==="MacIntel" && navigator.maxTouchPoints>1);
  const android = /Android/.test(ua);
  const [canPrompt,setCanPrompt] = useState(!!deferredInstall);
  const [hidden,setHidden] = useState(()=>{ try{ const v=+localStorage.getItem("rurucube_install_hide")||0; return Date.now()<v; }catch(e){ return false; } });
  const [help,setHelp] = useState(false);
  useEffect(()=>{ const f=()=>setCanPrompt(true); window.addEventListener("ruru-installable",f); return ()=>window.removeEventListener("ruru-installable",f); },[]);
  if(standalone || hidden || !(ios||android||canPrompt)) return null;
  const later = ()=>{ setHidden(true); try{ localStorage.setItem("rurucube_install_hide", String(Date.now()+7*864e5)); }catch(e){} };
  const install = async()=>{
    if(deferredInstall){ deferredInstall.prompt(); try{ await deferredInstall.userChoice; }catch(e){} deferredInstall=null; setCanPrompt(false); later(); }
    else setHelp(h=>!h);
  };
  return (
    <div style={{width:"100%",maxWidth:420,margin:"14px 0 2px",borderRadius:18,padding:"13px 14px",
      background:`linear-gradient(135deg,${PAL.purple}44,${PAL.card})`,boxShadow:`0 0 0 2px ${PAL.purple}99, 0 6px 18px rgba(0,0,0,.35)`}}>
      <div style={{display:"flex",alignItems:"center",gap:11}}>
        <span style={{fontSize:28,flexShrink:0}}>📲</span>
        <div style={{flex:1,minWidth:0,textAlign:"left"}}>
          <div style={{fontWeight:800,fontSize:14.5,color:PAL.text,lineHeight:1.25}}>{t.instTitle}</div>
          <div style={{fontSize:12,color:PAL.textDim,fontWeight:600,marginTop:3,lineHeight:1.35}}>{t.instSub}</div>
        </div>
        <button onClick={later} aria-label="✕" style={{background:"transparent",border:"none",color:PAL.textFaint,fontSize:18,cursor:"pointer",padding:4,flexShrink:0}}>✕</button>
      </div>
      <button onClick={install} style={{width:"100%",marginTop:11,border:"none",cursor:"pointer",borderRadius:13,padding:"11px 8px",fontFamily:"inherit",
        fontWeight:800,fontSize:14,color:"#1a1228",background:`linear-gradient(180deg,${shade(PAL.purple,40)},${PAL.purple})`,boxShadow:`0 4px 0 ${shade(PAL.purple,-60)}`}}>
        {canPrompt ? t.instBtn : t.instHow}
      </button>
      {help&&!canPrompt&&(
        <div style={{marginTop:11,fontSize:13,color:PAL.text,fontWeight:600,lineHeight:1.6,textAlign:"left"}}>
          {(ios ? t.instIos : t.instAndroid).map((l,i)=><div key={i}>{l}</div>)}
        </div>
      )}
    </div>
  );
}

function HomeScreen({ t, setSkin, launch, openHelp, lang, toggleLang, profile, openProfiles }){
  const wide = useWide();
  const openUni = (id)=>{ setSkin(id); launch("univers"); };
  const cubes = [
    { id:"monstro", img:HC_MONSTRO, sub:t.hcMonstroSub, color:"#2fd46b", onClick:()=>openUni("monstro") },
    { id:"classic", img:HC_CLASSIC, sub:t.hcClassicSub, color:"#2f7bff", onClick:()=>openUni("classic") },
    { id:"sudoku",  img:HC_SUDOKU,  sub:t.hcSudoSub,    color:"#ff2b2b", onClick:()=>openUni("sudoku") },
    { id:"illusion",img:HC_ILLUSION,sub:t.hcIllusionSub, color:"#ffd60a", btnText:"#3a2c00", onClick:()=>openUni("illusion") },
    { id:"chess3d", img:HC_CHESS3D, sub:t.hcChess3dSub,  color:"#22c7e8", btnText:"#06222a", onClick:()=>openUni("chesscube") },
    { id:"sudomono",img:HC_SUDOMONO,sub:t.hcSudomonoSub, color:"#ff4fb0", onClick:()=>openUni("sudomono") },
  ];
  const savoirs = [
    { id:"savants", img:HC_SAVANTS, sub:t.hcSavantsSub, color:"#a066ff", onClick:()=>launch("savants") },
    { id:"civi",    img:HC_CIVI,    sub:t.hcCiviSub,    color:"#ff8a1a", onClick:()=>launch("civi") },
  ];
  const discover = [
    { id:"tuto",      thumb:HC_TH_TUTO,      sub:t.hcTutoSub,      color:"#ffcf2b", btnText:"#3a2c00", onClick:()=>launch("tuto") },
    { id:"chrono",    thumb:HC_TH_CHRONO,    sub:t.hcChronoSub,    color:"#ff5a2b", onClick:()=>launch("hchrono") },
    { id:"splitrace", thumb:HC_TH_SPLITRACE, sub:t.hcSplitRaceSub, color:"#8a5cff", onClick:()=>launch("splitrace") },
    { id:"drills",    thumb:HC_TH_DRILLS,    sub:t.hcDrillSub,     color:"#ff3fa0", onClick:()=>launch("drills") },
  ];

  const rail = (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",
      maxWidth:wide?250:420,flexShrink:0,position:wide?"sticky":"static",top:wide?28:undefined}}>
      <img src={RURU_LOGO} alt="RUR'U' — Chaque geste compte"
        style={{width:wide?"92%":"74%",maxWidth:290,animation:"floaty 6s ease-in-out infinite",filter:"drop-shadow(0 8px 22px rgba(0,0,0,.55))"}}/>
      <button onClick={toggleLang}
        style={{marginTop:12,display:"flex",alignItems:"center",gap:6,borderRadius:999,
          padding:"9px 15px",cursor:"pointer",background:PAL.card,border:`2px solid ${PAL.gold}`,
          color:PAL.gold,fontWeight:700,fontSize:14,boxShadow:`0 3px 0 ${PAL.bg2}`}}>
        <span>{lang==="fr"?"🇬🇧 EN":"🇫🇷 FR"}</span><span style={{fontSize:13}}>›</span>
      </button>
      <button onClick={openProfiles}
        style={{marginTop:10,display:"flex",alignItems:"center",gap:9,border:"none",cursor:"pointer",
          borderRadius:999,padding:"9px 16px 9px 11px",background:PAL.card,
          boxShadow:`0 3px 0 ${PAL.bg2}, 0 0 0 2px ${PAL.gold}`}}>
        <span style={{fontSize:20,lineHeight:1}}>{profile.emoji}</span>
        <span style={{fontWeight:800,fontSize:14,color:PAL.text}}>{profile.name}</span>
        <span style={{fontSize:11,color:PAL.textDim,fontWeight:700}}>{t.changePlayer}</span>
      </button>
      <InstallBanner t={t}/>
    </div>
  );

  const mainFooter = (<>
      {/* Boutique */}
      <a href="https://rurucube.com" target="_blank" rel="noopener noreferrer"
        style={{textDecoration:"none",width:"100%",marginTop:18}}>
        <div style={{display:"flex",alignItems:"center",gap:11,borderRadius:18,padding:"13px 12px",
          background:`linear-gradient(100deg,${PAL.dark},${PAL.card})`,
          boxShadow:`0 0 0 2px ${PAL.gold}, 0 8px 22px rgba(0,0,0,.42)`}}>
          <span style={{fontSize:30,flexShrink:0}}>🛒</span>
          <div style={{flex:1,minWidth:0,textAlign:"left"}}>
            <div style={{fontWeight:700,fontSize:15,color:PAL.text,lineHeight:1.25}}>{t.shopCardTitle}</div>
            <div style={{fontSize:11.5,color:PAL.textDim,fontWeight:500,marginTop:3,lineHeight:1.35}}>{t.hcShopText}</div>
          </div>
          <div style={{flexShrink:0,maxWidth:118,borderRadius:14,padding:"9px 10px",textAlign:"center",
            background:`linear-gradient(180deg,${shade(PAL.gold,40)},${PAL.gold})`,
            boxShadow:`0 4px 0 ${shade(PAL.gold,-70)}`}}>
            <span style={{fontWeight:800,fontSize:11.5,color:"#3a2a00",lineHeight:1.25}}>{t.hcShopBtn}</span>
          </div>
        </div>
      </a>

      <button onClick={openHelp}
        style={{marginTop:16,background:"transparent",border:"none",cursor:"pointer",
          color:PAL.textDim,fontWeight:700,fontSize:13.5,textDecoration:"underline",textUnderlineOffset:4}}>
        {t.howTo}
      </button>

      <div style={{marginTop:16,display:"flex",alignItems:"center",gap:10,width:"100%"}}>
        <div style={{flex:1,height:1,background:`linear-gradient(90deg,transparent,${PAL.gold}44)`}}/>
        <div style={{fontSize:11,letterSpacing:2.5,fontWeight:700,color:`${PAL.gold}cc`,whiteSpace:"nowrap"}}>{t.hcTagline}</div>
        <div style={{flex:1,height:1,background:`linear-gradient(90deg,${PAL.gold}44,transparent)`}}/>
      </div>
  </>);

  /* ordinateur : cartes toutes de la même largeur, rangées centrées (pas de carte orpheline à gauche) */
  const CW = 250, GAP = 16;
  const deskRow = (cards, perRow)=>(
    <div className="stagger" style={{width:"100%",maxWidth:perRow*CW+(perRow-1)*GAP,display:"flex",flexWrap:"wrap",justifyContent:"center",gap:GAP}}>
      {cards.map((card,i)=><div key={i} style={{width:CW,display:"flex"}}>{card}</div>)}
    </div>);
  const cubeCard = c=><CubeCard key={c.id} img={c.img} art={HOME_ART[c.id]} logo={HOME_LOGOS[c.id]} faceId={c.id} sub={c.sub} color={c.color} cta={t.hcPlay} onClick={c.onClick} framed={c.framed} btnText={c.btnText} glow={c.glow}/>;
  const savoirCard = c=><CubeCard key={c.id} img={c.img} art={HOME_ART[c.id]} logo={HOME_LOGOS[c.id]} faceId={c.id} sub={c.sub} color={c.color} cta={t.hcConsult} onClick={c.onClick} framed={c.framed} btnText={c.btnText} glow={c.glow}/>;
  const trainCard = d=><CubeCard key={d.id} img={d.thumb} sub={d.sub} color={d.color} cta={t.hcConsult} onClick={d.onClick} btnText={d.btnText}/>;
  if(wide) return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"26px 28px 48px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {/* en-tête : logo au centre, langue et joueur de part et d'autre */}
      <div style={{width:"100%",maxWidth:1048,display:"flex",alignItems:"center",justifyContent:"space-between",gap:20}}>
        <button onClick={toggleLang}
          style={{display:"flex",alignItems:"center",gap:6,borderRadius:999,padding:"9px 15px",cursor:"pointer",background:PAL.card,
            border:`2px solid ${PAL.gold}`,color:PAL.gold,fontWeight:700,fontSize:14,boxShadow:`0 3px 0 ${PAL.bg2}`}}>
          <span>{lang==="fr"?"🇬🇧 EN":"🇫🇷 FR"}</span><span style={{fontSize:13}}>›</span>
        </button>
        <img src={RURU_LOGO} alt="RUR'U' — Chaque geste compte"
          style={{width:270,animation:"floaty 6s ease-in-out infinite",filter:"drop-shadow(0 8px 22px rgba(0,0,0,.55))"}}/>
        <button onClick={openProfiles}
          style={{display:"flex",alignItems:"center",gap:9,border:"none",cursor:"pointer",borderRadius:999,padding:"9px 16px 9px 11px",
            background:PAL.card,boxShadow:`0 3px 0 ${PAL.bg2}, 0 0 0 2px ${PAL.gold}`}}>
          <span style={{fontSize:20,lineHeight:1}}>{profile.emoji}</span>
          <span style={{fontWeight:800,fontSize:14,color:PAL.text}}>{profile.name}</span>
          <span style={{fontSize:11,color:PAL.textDim,fontWeight:700}}>{t.changePlayer}</span>
        </button>
      </div>
      <InstallBanner t={t}/>
      <div style={{width:"100%",maxWidth:1048,display:"flex",flexDirection:"column",alignItems:"center"}}>
        <HomeLabel>{t.hcChooseCube}</HomeLabel>
        {deskRow(cubes.map(cubeCard), 3)}
        <HomeLabel>{t.hcDiscover}</HomeLabel>
        {deskRow(savoirs.map(savoirCard), 2)}
        <HomeLabel>{t.hcTraining}</HomeLabel>
        {deskRow(discover.map(trainCard), 4)}
        <div style={{width:"100%",maxWidth:4*CW+3*GAP,display:"flex",flexDirection:"column",alignItems:"center"}}>{mainFooter}</div>
      </div>
    </div>
  );

  const main = (
    <div style={{width:"100%",maxWidth:wide?800:420,display:"flex",flexDirection:"column",alignItems:"center"}}>
      {/* Les cubes */}
      <HomeLabel>{t.hcChooseCube}</HomeLabel>
      <div className="stagger" style={{width:"100%",display:"grid",
        gridTemplateColumns:wide?"1fr 1fr 1fr 1fr":(cubes.length>3?"1fr 1fr":"1fr 1fr 1fr"),gap:10,alignItems:"stretch"}}>
        {cubes.map((c,i)=>{
          const card = <CubeCard key={c.id} img={c.img} art={HOME_ART[c.id]} logo={HOME_LOGOS[c.id]} faceId={c.id} sub={c.sub} color={c.color} cta={t.hcPlay} onClick={c.onClick} framed={c.framed} btnText={c.btnText} glow={c.glow}/>;
          const cols = wide?4:2;
          const alone = i===cubes.length-1 && cubes.length%cols===1;   /* dernière carte seule : centrée */
          return alone
            ? <div key={c.id} style={{gridColumn:"1 / -1",display:"flex",justifyContent:"center"}}>
                <div style={{width:`calc((100% - ${(cols-1)*10}px) / ${cols})`,display:"flex"}}>{card}</div>
              </div>
            : card;
        })}
      </div>

      {/* Découvrir */}
      <HomeLabel>{t.hcDiscover}</HomeLabel>
      <div style={{width:"100%",display:"grid",gridTemplateColumns:wide?"repeat(2,calc((100% - 30px) / 4))":"1fr 1fr",justifyContent:"center",
        gap:10,alignItems:"stretch",marginBottom:12}}>
        {savoirs.map(c=>(
          <CubeCard key={c.id} img={c.img} art={HOME_ART[c.id]} logo={HOME_LOGOS[c.id]} faceId={c.id} sub={c.sub} color={c.color} cta={t.hcConsult} onClick={c.onClick} framed={c.framed} btnText={c.btnText} glow={c.glow}/>
        ))}
      </div>

      <HomeLabel>{t.hcTraining}</HomeLabel>
      <div style={{width:"100%",display:"grid",gridTemplateColumns:wide?"1fr 1fr 1fr 1fr":"1fr 1fr",
        gap:10,alignItems:"stretch"}}>
        {discover.map((d,i)=>{
          const card = <CubeCard key={d.id} img={d.thumb} sub={d.sub} color={d.color} cta={t.hcConsult} onClick={d.onClick} btnText={d.btnText}/>;
          const cols = wide?4:2;
          const alone = i===discover.length-1 && discover.length%cols===1;   /* dernière carte seule : centrée */
          return alone
            ? <div key={d.id} style={{gridColumn:"1 / -1",display:"flex",justifyContent:"center"}}>
                <div style={{width:`calc((100% - ${(cols-1)*10}px) / ${cols})`,display:"flex"}}>{card}</div>
              </div>
            : card;
        })}
      </div>

      {mainFooter}
    </div>
  );

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"18px 14px 40px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {rail}{main}
    </div>
  );
}

/* Tuile de mode « bois » — visuel + titre traduit + chevron (univers Classique) */
function WoodModeTile({ art, banner, title, sub, onClick }){
  const [p,setP] = useState(false);
  const ink   = shade(banner,-150);
  const frame = "#16365e";
  return (
    <button onClick={onClick}
      onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)}
      style={{width:"100%",border:"none",padding:0,cursor:"pointer",background:"transparent",
        transform:p?"translateY(3px)":"none",transition:"transform .12s"}}>
      <div style={{display:"flex",alignItems:"stretch",borderRadius:20,overflow:"hidden",
        background:`linear-gradient(180deg,${shade(banner,18)},${banner} 45%,${shade(banner,-22)})`,
        boxShadow:`0 0 0 3px ${frame}, 0 5px 0 ${shade(banner,-70)}, 0 9px 20px rgba(0,0,0,.35)`}}>

        <img src={art} alt="" draggable={false}
          style={{width:"37%",maxWidth:150,objectFit:"cover",display:"block",flexShrink:0}}/>

        <div style={{width:2,margin:"14px 0",background:`${ink}44`,borderRadius:2,flexShrink:0}}/>

        <div style={{flex:1,minWidth:0,textAlign:"left",padding:"10px 6px 10px 11px",
          display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{fontWeight:800,fontSize:21,letterSpacing:.4,lineHeight:1.05,color:ink,
            textShadow:`0 1px 0 ${shade(banner,60)}99`}}>{title}</div>
          <div style={{fontWeight:600,fontSize:12.5,lineHeight:1.25,marginTop:4,color:`${ink}dd`}}>{sub}</div>
        </div>

        <div style={{flexShrink:0,display:"flex",alignItems:"center",padding:"0 12px 0 4px"}}>
          <span style={{width:30,height:30,borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",
            border:`3px solid ${frame}`,background:shade(banner,25),
            color:frame,fontSize:17,fontWeight:800,lineHeight:1,paddingBottom:2}}>›</span>
        </div>
      </div>
    </button>
  );
}

/* Tuile de mode « Monstro » — visuel monstre + dégradé pastel + cadre marine */
function MonstroModeTile({ art, from, to, arrow, title, sub, onClick }){
  const [p,setP] = useState(false);
  const ink = "#132a4d";
  return (
    <button onClick={onClick}
      onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)}
      style={{width:"100%",border:"none",padding:0,cursor:"pointer",background:"transparent",
        transform:p?"translateY(3px)":"none",transition:"transform .12s"}}>
      <div style={{display:"flex",alignItems:"stretch",borderRadius:22,overflow:"hidden",
        background:`linear-gradient(90deg,${from},${to})`,
        boxShadow:`0 0 0 3px ${ink}, 0 5px 0 #0d1e38, 0 8px 18px rgba(0,0,0,.22)`}}>

        <img src={art} alt="" draggable={false}
          style={{width:"33%",maxWidth:132,objectFit:"cover",display:"block",flexShrink:0}}/>

        <div style={{flex:1,minWidth:0,textAlign:"left",padding:"12px 4px 12px 14px",
          display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{fontWeight:800,fontSize:20,letterSpacing:.3,lineHeight:1.05,color:ink}}>{title}</div>
          <div style={{fontWeight:600,fontSize:12.5,lineHeight:1.25,marginTop:4,color:"#2a4570"}}>{sub}</div>
        </div>

        <div style={{flexShrink:0,display:"flex",alignItems:"center",padding:"0 16px 0 6px",
          fontSize:26,fontWeight:800,color:arrow,lineHeight:1}}>›</div>
      </div>
    </button>
  );
}

/* Carte « Comment jouer ? » de l'univers Monstro */
function MonstroHelpCard({ art, title, sub, onClick }){
  const [p,setP] = useState(false);
  return (
    <button onClick={onClick}
      onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)}
      style={{width:"100%",maxWidth:380,border:"none",padding:0,cursor:"pointer",background:"transparent",
        marginBottom:4,transform:p?"translateY(3px)":"none",transition:"transform .12s"}}>
      <div style={{display:"flex",alignItems:"stretch",borderRadius:22,overflow:"hidden",
        background:"linear-gradient(90deg,#cfe8fd,#e2f2fe)",
        boxShadow:`0 0 0 3px #132a4d, 0 5px 0 #0d1e38, 0 8px 18px rgba(0,0,0,.2)`}}>
        <img src={art} alt="" draggable={false}
          style={{width:"33%",maxWidth:132,objectFit:"cover",display:"block",flexShrink:0}}/>
        <div style={{flex:1,minWidth:0,textAlign:"left",padding:"12px 4px 12px 14px",
          display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{fontWeight:800,fontSize:19,lineHeight:1.1,color:"#132a4d"}}>{title}</div>
          <div style={{fontWeight:600,fontSize:12.5,lineHeight:1.25,marginTop:4,color:"#2a4570"}}>{sub}</div>
        </div>
        <div style={{flexShrink:0,display:"flex",alignItems:"center",padding:"0 16px 0 6px",
          fontSize:26,fontWeight:800,color:"#1d5fbf",lineHeight:1}}>›</div>
      </div>
    </button>
  );
}

/* Tuile de mode « Sudocube » — visuel néon sur fond noir + halo coloré */
function SudoModeTile({ art, glow, title, sub, onClick }){
  const [p,setP] = useState(false);
  return (
    <button onClick={onClick}
      onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)}
      style={{width:"100%",border:"none",padding:0,cursor:"pointer",background:"transparent",
        transform:p?"translateY(3px)":"none",transition:"transform .12s"}}>
      <div style={{display:"flex",alignItems:"stretch",borderRadius:22,overflow:"hidden",
        background:`linear-gradient(100deg,${glow}40,#1c1745 52%,#161236)`,
        boxShadow:`0 0 0 2px ${glow}, 0 0 14px ${glow}88, 0 0 26px ${glow}44, inset 0 0 22px ${glow}22`}}>

        <img src={art} alt="" draggable={false}
          style={{width:"38%",maxWidth:152,objectFit:"cover",display:"block",flexShrink:0}}/>

        <div style={{width:2,margin:"16px 0",background:glow,borderRadius:2,flexShrink:0,
          boxShadow:`0 0 8px ${glow}`}}/>

        <div style={{flex:1,minWidth:0,textAlign:"left",padding:"12px 4px 12px 13px",
          display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{fontWeight:800,fontSize:20,letterSpacing:.4,lineHeight:1.05,color:glow,
            textShadow:`0 0 10px ${glow}99, 0 2px 3px rgba(0,0,0,.9)`}}>{title}</div>
          <div style={{fontWeight:600,fontSize:12.5,lineHeight:1.25,marginTop:5,color:"#ffffffcc"}}>{sub}</div>
        </div>

        <div style={{flexShrink:0,display:"flex",alignItems:"center",padding:"0 15px 0 6px",
          fontSize:26,fontWeight:800,color:glow,lineHeight:1,textShadow:`0 0 10px ${glow}`}}>›</div>
      </div>
    </button>
  );
}

/* ═══ PROGRESSION — un tableau par univers ══════════════════════ */
function ProgressScreen({ t, skin, onBack, launch }){
  const wide = useWide();
  const W = wide?820:420;
  const [onglet,setOnglet] = useState("moi");
  const data = loadS();
  const sd = data[skin] || {};
  const profils = listProfiles();
  const moiId = currentProfile().id;
  const neon = skin==="sudoku", wood = skin==="classic", paper = skin==="monstro";
  const c = SKINS[skin].color;

  const theme = paper
    ? { bg:"linear-gradient(180deg,#f4faff 0%,#e4f1fd 55%,#d9eafa 100%)", card:"#ffffff",
        ring:"#132a4d", ink:"#132a4d", dim:"#4a6a96", ring2:"#c4d6e8" }
    : wood
    ? { bg:"linear-gradient(180deg,#fdf6e7 0%,#f5e4c3 100%)", card:"#fffaf0",
        ring:"#c69c6d", ink:"#4a3418", dim:"#8a6539", ring2:"#e6d3b0" }
    : neon
    ? { bg:SUDO_BG, card:"#1c1745",
        ring:SKINS.sudoku.color, ink:"#ffffff", dim:"#b3aee0", ring2:"#3a3380" }
    : { bg:`radial-gradient(120% 80% at 50% 0%,${PAL.bg2},${PAL.dark} 75%)`, card:PAL.card,
        ring:PAL.gold, ink:PAL.text, dim:PAL.textDim, ring2:PAL.cardHi };

  const uniLabel = { classic:t.speedFace, monstro:t.monstro, sudoku:t.sudo, illusion:t.illusion, sudomono:t.sudomono, chesscube:t.chesscube }[skin] || "";

  const modes = FULL_SOLVE.includes(skin) ? [
    { key:"chrono",    icon:"🧩", label:t.chrono,        color:PAL.purple, go:"chrono" },
    { key:"chronorev", icon:"⏳", label:t.revChronoTile, color:PAL.orange, go:"chronorev" },
    { key:"duelsolve", icon:"⚔️", label:t.duel,          color:PAL.green,  go:"duelsolve" },
    { key:"cube3d",    icon:"👆", label:t.cube3dTile,    color:SKINS[skin].color, go:skin==="chesscube"?"chess3d":"sudo3d" },
  ] : [
    { key:"challenge", icon:"🎯", label:t.faceTile,    color:PAL.gold,   go:"face" },
    { key:"reverse",   icon:"⏳", label:t.reverseTile, color:PAL.orange, go:"reverse" },
    { key:"blind",     icon:"🙈", label:t.blind,       color:PAL.blue,   go:"blind" },
    { key:"chrono",    icon:"🧩", label:t.chrono,      color:PAL.purple, go:"chrono" },
    { key:"motifs",    icon:"🔤", label:t.motifs,      color:PAL.pink,   go:"motifs" },
    { key:"duel",      icon:"⚔️", label:t.duel,        color:PAL.green,  go:"duel" },
    { key:"duelsolve", icon:"🏆", label:t.duelSolveTile, color:"#14b8a6", go:"duelsolve" },
    { key:"cube3d",    icon:"👆", label:t.cube3dTile,  color:"#3cc4b4",  go:"cube3d" },
    { key:"daily",     icon:"🗓️", label:t.daily,       color:PAL.green,  go:"daily" },
  ];

  const rows = modes.map(m=>{
    const st = sd[m.key] || {};
    const sess = st.sessions || [];
    const last5 = sess.slice(-5);
    const avg = last5.length ? Math.round(last5.reduce((a,s)=>a+s.time,0)/last5.length) : null;
    return { ...m, best:st.best ?? null, games:st.games || 0, wins:st.wins ?? null, avg, sess };
  });

  const totalGames = rows.reduce((a,r)=>a+r.games,0);
  const played = rows.filter(r=>r.games>0).length;
  const bestAll = rows.reduce((a,r)=>(r.best!=null&&(a==null||r.best<a))?r.best:a, null);

  const Stat = ({ label, value, accent })=>(
    <div style={{flex:1,minWidth:0,background:theme.card,borderRadius:16,padding:"12px 8px",textAlign:"center",
      boxShadow:`0 0 0 2px ${theme.ring2}`}}>
      <div style={{fontSize:19,fontWeight:800,color:accent||theme.ink,lineHeight:1.1}}>{value}</div>
      <div style={{fontSize:10.5,fontWeight:600,color:theme.dim,marginTop:4}}>{label}</div>
    </div>
  );

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"18px 14px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",background:theme.bg}}/>

      <div style={{width:"100%",maxWidth:W,display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
        <GhostBtn onClick={onBack} color={theme.ink} bg={paper?"#ffffff":(wood?"#fbeed8":undefined)}
          border={paper?"#2a4570":(wood?"#c69c6d":undefined)} shadow={paper?"#2a4570":(wood?"#8a6539":undefined)}>{t.menu}</GhostBtn>
        <div style={{flex:1,minWidth:0,textAlign:"right"}}>
          <div style={{fontWeight:800,fontSize:19,color:theme.ink,lineHeight:1.15}}>{t.progressTitle}</div>
          <div style={{fontSize:12.5,fontWeight:600,color:theme.dim,marginTop:3}}>{uniLabel} · {t.progressSub}</div>
        </div>
        <PlayerBadge tone={paper?"paper":(wood?"wood":(neon?"neon":undefined))} t={t}/>
      </div>

      {/* Résumé */}
      {onglet==="moi"&&(
      <div style={{width:"100%",maxWidth:W,display:"flex",gap:9,marginBottom:16}}>
        <Stat label={t.progGames}  value={totalGames}/>
        <Stat label={t.progModes}  value={`${played}/${rows.length}`}/>
        <Stat label={t.progBest}   value={fmt(bestAll)} accent={c}/>
      </div>
      )}

      {/* Onglets Moi / Famille */}
      {profils.length>1&&(
        <div style={{width:"100%",maxWidth:W,display:"flex",gap:8,marginBottom:14,
          background:theme.card,borderRadius:16,padding:5,boxShadow:`0 0 0 2px ${theme.ring2}`}}>
          {[{k:"moi",l:t.tabMe},{k:"famille",l:t.tabFamily}].map(o=>(
            <button key={o.k} onClick={()=>setOnglet(o.k)}
              style={{flex:1,border:"none",cursor:"pointer",borderRadius:12,padding:"10px 6px",
                fontWeight:800,fontSize:13.5,fontFamily:"inherit",
                background:onglet===o.k?c:"transparent",
                color:onglet===o.k?(neon?"#fff":"#ffffff"):theme.dim}}>{o.l}</button>
          ))}
        </div>
      )}

      {onglet==="famille"&&profils.length>1&&(
        <div className="stagger" style={{width:"100%",maxWidth:W,display:wide?"grid":"flex",gridTemplateColumns:wide?"1fr 1fr":undefined,flexDirection:wide?undefined:"column",gap:11}}>
          {rows.map(r=>{
            const classement = profils
              .map(p=>({ id:p.id, name:p.name, emoji:p.emoji,
                         best:((p.data||{})[skin]||{})[r.key]?.best ?? null }))
              .filter(x=>x.best!=null)
              .sort((a,b)=>a.best-b.best);
            return (
              <div key={r.key} style={{background:theme.card,borderRadius:18,padding:"13px 14px",
                boxShadow:`0 0 0 2px ${classement.length?r.color:theme.ring2}, 0 4px 12px rgba(0,0,0,.12)`}}>
                <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:classement.length?10:0}}>
                  <span style={{fontSize:17}}>{r.icon}</span>
                  <span style={{fontWeight:800,fontSize:14.5,color:theme.ink}}>{r.label}</span>
                </div>
                {classement.length===0
                  ? <div style={{fontSize:12,color:theme.dim,fontWeight:600}}>{t.famNobody}</div>
                  : <div style={{display:"flex",flexDirection:"column",gap:7}}>
                      {classement.map((x,i)=>(
                        <div key={x.id} style={{display:"flex",alignItems:"center",gap:9,
                          borderRadius:12,padding:"7px 9px",
                          background:x.id===moiId?`${r.color}1f`:"transparent",
                          boxShadow:x.id===moiId?`0 0 0 1.5px ${r.color}66`:"none"}}>
                          <span style={{fontSize:15,width:22,textAlign:"center",flexShrink:0}}>
                            {i===0?"👑":`${i+1}.`}
                          </span>
                          <span style={{fontSize:17,flexShrink:0}}>{x.emoji}</span>
                          <span style={{flex:1,minWidth:0,fontWeight:700,fontSize:13,color:theme.ink,
                            overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{x.name}</span>
                          <span style={{fontWeight:800,fontSize:14,color:i===0?r.color:theme.ink,flexShrink:0}}>{fmt(x.best)}</span>
                        </div>
                      ))}
                    </div>}
              </div>
            );
          })}
        </div>
      )}

      {/* Une ligne par mode */}
      {onglet==="moi"&&(
      <div className="stagger" style={{width:"100%",maxWidth:W,display:wide?"grid":"flex",gridTemplateColumns:wide?"1fr 1fr":undefined,flexDirection:wide?undefined:"column",gap:11}}>
        {rows.map(r=>{
          const vide = r.games===0;
          return (
            <button key={r.key} onClick={()=>launch(r.go)}
              style={{border:"none",padding:0,cursor:"pointer",background:"transparent",width:"100%"}}>
              <div style={{background:theme.card,borderRadius:18,padding:"13px 14px",textAlign:"left",
                opacity:vide?.62:1,boxShadow:`0 0 0 2px ${vide?theme.ring2:r.color}, 0 4px 12px rgba(0,0,0,.14)`}}>

                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <span style={{width:38,height:38,flexShrink:0,borderRadius:12,display:"flex",
                    alignItems:"center",justifyContent:"center",fontSize:19,
                    background:`${r.color}22`,boxShadow:`0 0 0 1.5px ${r.color}66`}}>{r.icon}</span>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontWeight:800,fontSize:14.5,color:theme.ink,lineHeight:1.15}}>{r.label}</div>
                    <div style={{fontSize:11,color:theme.dim,fontWeight:600,marginTop:2}}>
                      {vide
                        ? t.progNever
                        : `${r.games} ${r.games>1?t.progPlays:t.progPlay}${r.wins!=null?` · ${r.wins} ${r.wins>1?t.progWins:t.progWin}`:""}`}
                    </div>
                  </div>
                  <div style={{textAlign:"right",flexShrink:0}}>
                    <div style={{fontSize:17,fontWeight:800,color:vide?theme.dim:r.color,lineHeight:1}}>{fmt(r.best)}</div>
                    <div style={{fontSize:10,color:theme.dim,fontWeight:600,marginTop:3}}>{t.record}</div>
                  </div>
                </div>

                {!vide&&(
                  <div style={{display:"flex",alignItems:"flex-end",gap:12,marginTop:11}}>
                    <div style={{fontSize:11,color:theme.dim,fontWeight:600,flexShrink:0}}>
                      {t.progAvg} <b style={{color:theme.ink,fontSize:12.5}}>{fmt(r.avg)}</b>
                    </div>
                    <Sparkline sess={r.sess} color={r.color} dim={theme.ring2}/>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
      )}

      <div style={{fontSize:11.5,color:theme.dim,fontWeight:600,marginTop:18,textAlign:"center",maxWidth:340,lineHeight:1.5}}>
        {onglet==="famille"?t.famFoot:t.progFoot}
      </div>
    </div>
  );
}

/* Mini-courbe des 10 dernières parties (plus c'est bas, plus c'est rapide) */
function Sparkline({ sess, color, dim }){
  const pts = (sess||[]).slice(-10).map(s=>s.time);
  if(pts.length<2) return <div style={{flex:1}}/>;
  const min=Math.min(...pts), max=Math.max(...pts), span=Math.max(1,max-min);
  const W=150, H=26;
  const d = pts.map((v,i)=>{
    const x = (i/(pts.length-1))*W;
    const y = H - ((max-v)/span)*(H-4) - 2;
    return `${i?"L":"M"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{flex:1,height:26,minWidth:0}}>
      <line x1="0" y1={H-2} x2={W} y2={H-2} stroke={dim} strokeWidth="1"/>
      <path d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  );
}

/* ═══ HABILLAGE DES PAGES DE JEU ════════════════════════════════
   Un même jeu de composants pour les trois univers ; seule la
   palette change. Les valeurs sont relevées sur les maquettes.
   ═══════════════════════════════════════════════════════════════ */
const OBJ_EMOJI = ["🐌","🚶","🏃","⚡"];

const SKIN_UI = {
  /* Classique — crème, or, brun */
  classic:{
    plaque1:"#fefae4", plaque2:"#fdf0b0",
    plaqueRing:"inset 0 2px 0 #fffdf2, 0 0 0 3px #fdf6cf, 0 6px 18px rgba(190,150,60,.28)",
    ink:"#3f2308", ink2:"#7a5a33", ink3:"#a98a5c",
    carte:"#fff6e0", carte2:"#f9ebcf", bord:"#f0d9a4",
    carteOmbre:"0 0 0 1.5px #f0d9a4, 0 3px 8px rgba(190,150,60,.16)",
    btnHaut:"#ffe270", btnMil:"#fccb2f", btnBas:"#f4a91d",
    btnBord:"#e3b95f", btnBordBas:"#c47f10", btnRelief:"#a8690a", btnInk:"#3f2308",
    accent:"#f4a91d",
    objOn1:"#ffe98d", objOn2:"#fccb2f", objRing:"#f4a91d",
    statCols:["#e08c17","#1e9e4a","#d93a2b"],
    panel1:"#2c2050", panel2:"#1b1338", panelRing:"#3e2a69",
    panelIco:"#ffffff", panelSub:"#b3a8cf", badge:"#181430", chart:"#fccb2f",
  },
  /* Monstro — blanc, bleu, marine */
  monstro:{
    plaque1:"#ffffff", plaque2:"#eaf3fd",
    plaqueRing:"inset 0 2px 0 #ffffff, 0 0 0 3px #132a4d, 0 6px 18px rgba(19,42,77,.22)",
    ink:"#132a4d", ink2:"#4a6a96", ink3:"#8aa2bd",
    carte:"#ffffff", carte2:"#eaf3fd", bord:"#c4d6e8",
    carteOmbre:"0 0 0 2px #132a4d, 0 3px 8px rgba(19,42,77,.14)",
    btnHaut:"#7cbaf5", btnMil:"#3b8fe8", btnBas:"#1f6fcf",
    btnBord:"#2a4570", btnBordBas:"#132a4d", btnRelief:"#0c1c36", btnInk:"#ffffff",
    accent:"#2f7fd8",
    objOn1:"#9fd6ff", objOn2:"#3b8fe8", objRing:"#132a4d",
    statCols:["#e08c17","#1e9e4a","#d93a2b"],
    panel1:"#1b2c5e", panel2:"#101c47", panelRing:"#2a4570",
    panelIco:"#ffffff", panelSub:"#a9bcdd", badge:"#0c1734", chart:"#ffcf3f",
  },
  /* Illusion — violet profond, halo mauve */
  illusion:{
    plaque1:"#ffffff", plaque2:"#e8e8ea",
    plaqueRing:"inset 0 2px 0 #ffffff, 0 0 0 3px #ffffff, 0 0 22px rgba(255,255,255,.25), 0 6px 18px rgba(0,0,0,.6)",
    ink:"#0d0d0d", ink2:"#5b6270", ink3:"#8a8a8f", pageInk:"#ffffff", pageInk2:"#b0b0b6",
    carte:"#ffffff", carte2:"#efeff1", bord:"#ffffff",
    carteOmbre:"0 0 0 2px #ffffff, 0 4px 12px rgba(0,0,0,.5)",
    btnHaut:"#ffffff", btnMil:"#ededf0", btnBas:"#d7d7dc",
    btnBord:"#ffffff", btnBordBas:"#9a9aa2", btnRelief:"#6a6a72", btnInk:"#0d0d0d",
    accent:"#ffffff",
    objOn1:"#ffffff", objOn2:"#d7d7dc", objRing:"#ffffff",
    statCols:["#0d0d0d","#0d0d0d","#0d0d0d"],
    panel1:"#1a1a1c", panel2:"#000000", panelRing:"#3a3a40",
    panelIco:"#ffffff", panelSub:"#b0b0b6", badge:"#000000", chart:"#ffffff",
  },
  /* Sudocube — indigo et couleurs vives */
  sudoku:{
    plaque1:"#221c52", plaque2:"#100c2c",
    plaqueRing:"inset 0 1px 0 #38b6ff33, 0 0 0 2px #38b6ff, 0 0 22px #38b6ff66, 0 6px 18px rgba(0,0,0,.6)",
    ink:"#ffffff", ink2:"#c9c4f2", ink3:"#8f89c4",
    carte:"#1c1745", carte2:"#251f58", bord:"#3a3380",
    carteOmbre:"0 0 0 1.5px #38b6ff, 0 0 12px #38b6ff44",
    btnHaut:"#ffe46b", btnMil:"#ffc61a", btnBas:"#f29a0c",
    btnBord:"#38b6ff", btnBordBas:"#1f5fa8", btnRelief:"#123a6b", btnInk:"#2a1c00",
    accent:"#38b6ff",
    objOn1:"#8fd3ff", objOn2:"#38b6ff", objRing:"#38b6ff",
    statCols:["#ffc63a","#3ddc84","#ff5e5e"],
    panel1:"#1c1745", panel2:"#0c0a24", panelRing:"#3a3380",
    panelIco:"#251f58", panelSub:"#b3aee0", badge:"#251f58", chart:"#ffc61a",
  },
};

/* Le chrono sur sa plaque */
function ClTimer({ th, valeur, sousTitre }){
  const [n, dec] = String(valeur).replace("s","").split(".");
  return (
    <div style={{width:"100%",maxWidth:400,display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
      <div style={{width:"100%",maxWidth:300,borderRadius:26,padding:"14px 10px 16px",textAlign:"center",
        background:`linear-gradient(180deg,${th.plaque1},${th.plaque2})`,
        boxShadow:th.plaqueRing}}>
        <div style={{fontWeight:700,fontSize:46,lineHeight:1,color:th.ink,
          fontVariantNumeric:"tabular-nums",letterSpacing:-1,whiteSpace:"nowrap"}}>
          {n}<span style={{opacity:.9}}>{dec!==undefined?`.${dec}`:""}</span>
          <span style={{fontSize:24,marginLeft:2,color:th.ink2}}>s</span>
        </div>
      </div>
      {sousTitre&&(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:9,whiteSpace:"nowrap"}}>
          <span style={{color:th.accent,fontWeight:800,fontSize:15}}>»</span>
          <span style={{fontWeight:700,fontSize:15,color:th.pageInk2||th.ink2}}>{sousTitre}</span>
          <span style={{color:th.accent,fontWeight:800,fontSize:15}}>«</span>
        </div>
      )}
    </div>
  );
}

/* Gros bouton principal */
function ClBigBtn({ th, onClick, icon, children }){
  const [p,setP] = useState(false);
  return (
    <button onClick={onClick}
      onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)}
      style={{width:"100%",maxWidth:360,border:"none",cursor:"pointer",borderRadius:999,
        padding:"5px",background:`linear-gradient(180deg,${th.btnBord},${th.btnBordBas})`,
        transform:p?"translateY(3px)":"none",transition:"transform .1s",
        boxShadow:p?`0 2px 0 ${th.btnRelief}`:`0 6px 0 ${th.btnRelief}, 0 10px 20px ${th.accent}44`}}>
      <span style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,
        borderRadius:999,padding:"16px 14px",
        background:`linear-gradient(180deg,${th.btnHaut},${th.btnMil} 55%,${th.btnBas})`,
        boxShadow:"inset 0 2px 0 rgba(255,255,255,.5)"}}>
        {icon&&<span style={{fontSize:27,lineHeight:1}}>{icon}</span>}
        <span style={{fontWeight:800,fontSize:22,letterSpacing:.5,color:th.btnInk}}>{children}</span>
      </span>
    </button>
  );
}

/* Les trois cartes de statistiques */
function ClStats({ th, t, stats }){
  const items = [
    { ico:"🏆", val:fmt(stats.best), lab:t.record },
    { ico:"📊", val:stats.games||0,  lab:t.games },
    { ico:"🔥", val:stats.streak||0, lab:t.streak },
  ];
  return (
    <div style={{width:"100%",maxWidth:400,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginTop:20}}>
      {items.map((s,i)=>(
        <div key={i} style={{background:th.carte,borderRadius:18,padding:"11px 6px 12px",
          display:"flex",alignItems:"center",justifyContent:"center",gap:7,boxShadow:th.carteOmbre}}>
          <span style={{fontSize:24,lineHeight:1,flexShrink:0}}>{s.ico}</span>
          <span style={{minWidth:0}}>
            <span style={{display:"block",fontWeight:800,fontSize:19,color:th.statCols[i],lineHeight:1.05,
              fontVariantNumeric:"tabular-nums"}}>{s.val}</span>
            <span style={{display:"block",fontSize:11.5,fontWeight:700,color:th.ink2,marginTop:2}}>{s.lab}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

/* Le chemin des objectifs */
function ClObjectifs({ th, t, stats }){
  const objTimes = [60000,45000,30000,15000];
  return (
    <div style={{width:"100%",maxWidth:400,marginTop:14,background:th.carte,borderRadius:22,
      padding:"14px 14px 16px",boxShadow:th.carteOmbre}}>
      <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:14,flexWrap:"wrap"}}>
        <span style={{fontSize:22,lineHeight:1}}>🎖️</span>
        <span style={{fontWeight:800,fontSize:17,color:th.ink}}>{t.objectives.replace("🎖️ ","")}</span>
        <span style={{marginLeft:"auto",background:th.carte2,borderRadius:999,padding:"6px 12px",
          fontSize:11,fontWeight:600,color:th.ink2}}>{t.objHint}</span>
      </div>
      <div style={{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div style={{position:"absolute",left:"12%",right:"12%",top:26,height:3,
          backgroundImage:`repeating-linear-gradient(90deg,${th.bord} 0 7px,transparent 7px 14px)`}}/>
        {(t.objShort||t.obj).map((o,i)=>{
          const ok = stats.best!=null && stats.best<=objTimes[i];
          return (
            <div key={i} style={{position:"relative",flex:1,textAlign:"center"}}>
              <div style={{width:52,height:52,margin:"0 auto",borderRadius:"50%",
                display:"flex",alignItems:"center",justifyContent:"center",fontSize:25,
                background:ok?`linear-gradient(180deg,${th.objOn1},${th.objOn2})`:th.carte2,
                boxShadow:ok?`0 0 0 3px ${th.objRing}, 0 3px 8px rgba(0,0,0,.2)`:`0 0 0 2px ${th.bord}`,
                opacity:ok?1:.75}}>{OBJ_EMOJI[i]}</div>
              <div style={{fontSize:13,fontWeight:800,color:ok?th.ink:th.ink3,marginTop:8}}>{o}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Panneau « Évolution des temps » */
function ClChartPanel({ th, t, stats }){
  const [ouvert,setOuvert] = useState(true);
  const sessions = stats.sessions||[];
  const best = stats.best;
  return (
    <div style={{width:"100%",maxWidth:400,marginTop:14,borderRadius:22,overflow:"hidden",
      background:`linear-gradient(180deg,${th.panel1},${th.panel2})`,
      boxShadow:`0 0 0 2px ${th.panelRing}, 0 8px 20px rgba(0,0,0,.25)`}}>
      <button onClick={()=>setOuvert(o=>!o)}
        style={{width:"100%",border:"none",background:"transparent",cursor:"pointer",
          padding:"14px 15px",display:"flex",alignItems:"center",gap:11}}>
        <span style={{width:34,height:34,borderRadius:10,flexShrink:0,background:th.panelIco,
          display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>📈</span>
        <span style={{flex:1,minWidth:0,textAlign:"left",fontWeight:800,fontSize:16,color:"#fff"}}>{t.timesEvol}</span>
        <span style={{fontSize:12.5,fontWeight:700,color:th.panelSub}}>{ouvert?t.seeLess:t.seeMore}</span>
        <span style={{fontSize:15,color:th.panelSub,transform:ouvert?"rotate(90deg)":"none",transition:"transform .2s"}}>›</span>
      </button>
      {ouvert&&(
        <div style={{padding:"0 14px 16px",position:"relative"}}>
          <ProgressChart sessions={sessions} color={th.chart} t={t}/>
          {best!=null&&(
            <div style={{position:"absolute",right:20,top:4,background:th.badge,borderRadius:14,
              padding:"8px 12px",textAlign:"center",boxShadow:`0 0 0 1.5px ${th.panelRing}`}}>
              <div style={{fontSize:10.5,fontWeight:700,color:th.panelSub}}>{t.bestTime}</div>
              <div style={{fontSize:19,fontWeight:800,color:th.chart,fontVariantNumeric:"tabular-nums"}}>{fmt(best)}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ═══ PARTAGE DU DÉFI DU JOUR ═══════════════════════════════════
   Fabrique une carte 1080×1350 sur un canvas, puis passe par le
   partage natif du téléphone : la feuille de partage propose
   Instagram, Facebook, Messages… Sur ordinateur, où ce partage
   n'existe pas, on retombe sur le téléchargement de l'image et la
   copie du texte.
   ═══════════════════════════════════════════════════════════════ */
const SHARE_URL = "https://ruru-cube.vercel.app";

function chargerImage(src){
  return new Promise(res=>{
    const i = new Image();
    i.onload = ()=>res(i);
    i.onerror = ()=>res(null);
    i.src = src;
  });
}

async function carteResultat({ skin, face, sprites, ms, t }){
  const W=1080, H=1350;
  const c = document.createElement("canvas");
  c.width=W; c.height=H;
  const g = c.getContext("2d");
  const th = SKIN_UI[skin] || SKIN_UI.classic;

  const fond = g.createLinearGradient(0,0,0,H);
  if(skin==="sudoku"){ fond.addColorStop(0,"#2a2370"); fond.addColorStop(1,"#100c2c"); }
  else if(skin==="monstro"){ fond.addColorStop(0,"#f4faff"); fond.addColorStop(1,"#d9eafa"); }
  else { fond.addColorStop(0,"#fefbe8"); fond.addColorStop(1,"#f3ddb8"); }
  g.fillStyle=fond; g.fillRect(0,0,W,H);

  const police = "Fredoka, system-ui, sans-serif";
  g.textAlign="center";

  g.fillStyle=th.accent; g.font=`800 44px ${police}`;
  g.fillText("RUR'U'", W/2, 118);
  g.fillStyle=th.ink; g.font=`800 62px ${police}`;
  g.fillText(t.daily.replace(/^[^A-Za-zÀ-ÿ]+/,"").toUpperCase(), W/2, 196);
  g.fillStyle=th.ink2; g.font=`600 34px ${police}`;
  g.fillText(new Date().toLocaleDateString(), W/2, 250);

  /* la face du jour */
  const taille=470, x0=(W-taille)/2, y0=280, gap=14, cell=(taille-gap*2-24)/3;
  g.fillStyle = skin==="sudoku" ? "#100c2c" : (skin==="monstro" ? "#ffffff" : "#fdf6ea");
  arrondi(g, x0, y0, taille, taille, 30); g.fill();
  if(face&&sprites){
    for(let i=0;i<9;i++){
      const cl=face[i];
      const src = sprites[cl.colorId]?.[cl.typeId??i];
      const img = src ? await chargerImage(src) : null;
      const cx = x0+12+(i%3)*(cell+gap), cy = y0+12+Math.floor(i/3)*(cell+gap);
      g.save(); arrondi(g,cx,cy,cell,cell,16); g.clip();
      if(img) g.drawImage(img,cx,cy,cell,cell);
      else { g.fillStyle=th.carte2; g.fillRect(cx,cy,cell,cell); }
      g.restore();
    }
  }

  /* le temps + le défi lancé aux amis : l'image se suffit à elle-même */
  g.fillStyle=th.ink2; g.font=`700 34px ${police}`;
  g.fillText(t.cardSolvedIn, W/2, y0+taille+70);
  g.fillStyle=th.ink; g.font=`800 128px ${police}`;
  g.fillText(fmt(ms), W/2, y0+taille+188);
  g.fillStyle=th.accent; g.font=`800 46px ${police}`;
  g.fillText(t.cardBeatMe, W/2, y0+taille+262);

  /* bandeau du bas : QR code + adresse de l'appli */
  const by=H-260, bh=220, bx=60, bw=W-120;
  g.fillStyle = skin==="sudoku" ? "rgba(255,255,255,.10)" : "rgba(255,255,255,.85)";
  arrondi(g,bx,by,bw,bh,32); g.fill();
  const qr = await chargerImage(QR_APP);
  const qs=180, qx=bx+20, qy=by+20;
  g.fillStyle="#ffffff"; arrondi(g,qx,qy,qs,qs,16); g.fill();
  if(qr){ g.imageSmoothingEnabled=false; g.drawImage(qr,qx+8,qy+8,qs-16,qs-16); g.imageSmoothingEnabled=true; }
  g.textAlign="left";
  const tx=qx+qs+34;
  g.fillStyle=th.ink2; g.font=`700 34px ${police}`;
  g.fillText(t.cardScan, tx, by+82);
  g.fillStyle=th.accent; g.font=`800 50px ${police}`;
  g.fillText("ruru-cube.vercel.app", tx, by+148);
  g.fillStyle=th.ink3||th.ink2; g.font=`600 26px ${police}`;
  g.fillText(t.cardFree, tx, by+188);
  g.textAlign="center";

  return new Promise(res=>c.toBlob(res,"image/png",0.95));
}

function arrondi(g,x,y,w,h,r){
  g.beginPath();
  g.moveTo(x+r,y); g.lineTo(x+w-r,y); g.quadraticCurveTo(x+w,y,x+w,y+r);
  g.lineTo(x+w,y+h-r); g.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  g.lineTo(x+r,y+h); g.quadraticCurveTo(x,y+h,x,y+h-r);
  g.lineTo(x,y+r); g.quadraticCurveTo(x,y,x+r,y); g.closePath();
}

function ShareDaily({ t, th, skin, face, sprites, ms }){
  const [etat,setEtat] = useState(null);   /* null | "attente" | "copie" | "copieImg" | "telecharge" */
  const texte = `${t.shareText.replace("{t}", fmt(ms))}\n${SHARE_URL}`;
  /* L'image est préparée DÈS l'affichage du résultat : sur iPhone, le partage
     doit partir tout de suite après le toucher, sinon Safari le bloque et
     seul le texte part (ou rien). */
  const blobP = useRef(null);
  const [pret,setPret] = useState(null);   /* { blob, fichier } quand l'image est prête */
  useEffect(()=>{
    let vivant=true;
    blobP.current = carteResultat({ skin, face, sprites, ms, t }).catch(()=>null);
    blobP.current.then(blob=>{ if(vivant&&blob) setPret({ blob, url:URL.createObjectURL(blob), fichier:new File([blob],"ruru-defi-du-jour.png",{type:"image/png"}) }); });
    return ()=>{ vivant=false; };
  },[skin, ms]);

  function telecharger(blob){
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob); a.download="ruru-defi-du-jour.png"; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  }

  async function partager(){
    const f = pret && pret.fichier;
    /* 1. partage de l'image (sans attendre quoi que ce soit avant) */
    if(f && navigator.canShare && navigator.canShare({ files:[f] })){
      try{ navigator.clipboard && navigator.clipboard.writeText(texte).catch(()=>{}); }catch(e){}
      try{ await navigator.share({ files:[f], title:"RUR'U'", text:texte }); }catch(e){}
      return;
    }
    /* 2. pas de partage de fichiers (ordinateur) : on enregistre l'image + on copie le texte */
    setEtat("attente");
    const blob = (pret&&pret.blob) || await blobP.current;
    try{ await navigator.clipboard.writeText(texte); }catch(e){}
    if(blob){ telecharger(blob); setEtat("telecharge"); return; }
    if(navigator.share){ try{ await navigator.share({ title:"RUR'U'", text:texte, url:SHARE_URL }); }catch(e){} }
    setEtat(null);
  }

  /* Copier : copie l'IMAGE du résultat (et le texte) pour la coller dans un message */
  async function copier(){
    try{
      if(window.ClipboardItem && navigator.clipboard && navigator.clipboard.write){
        const imgP = (pret&&pret.blob) ? Promise.resolve(pret.blob) : blobP.current;
        /* image + texte + lien de l'appli dans la même copie */
        try{
          await navigator.clipboard.write([new ClipboardItem({
            "image/png": imgP.then(b=>b||Promise.reject()),
            "text/plain": Promise.resolve(new Blob([texte],{type:"text/plain"})) })]);
        }catch(e2){   /* certains navigateurs n'acceptent qu'un type à la fois : on garde l'image */
          await navigator.clipboard.write([new ClipboardItem({ "image/png": imgP.then(b=>b||Promise.reject()) })]);
        }
        setEtat("copieImg"); return;
      }
    }catch(e){}
    try{ await navigator.clipboard.writeText(texte); setEtat("copie"); }catch(e){}
  }

  return (
    <div style={{width:"100%",maxWidth:360,marginTop:16,display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
      <ClBigBtn th={th} onClick={partager} icon="📣">
        {etat==="attente" ? "…" : t.shareBtn}
      </ClBigBtn>

      <div style={{display:"flex",gap:9,width:"100%"}}>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`}
          target="_blank" rel="noopener noreferrer"
          style={{flex:1,textDecoration:"none",background:th.carte,borderRadius:14,padding:"11px 6px",
            textAlign:"center",fontWeight:800,fontSize:13,color:th.ink,boxShadow:th.carteOmbre}}>
          Facebook
        </a>
        <button onClick={copier}
          style={{flex:1,border:"none",cursor:"pointer",background:th.carte,borderRadius:14,padding:"11px 6px",
            fontWeight:800,fontSize:13,fontFamily:"inherit",color:th.ink,boxShadow:th.carteOmbre}}>
          {etat==="copie"||etat==="copieImg" ? t.shareCopied : t.shareCopy}
        </button>
        <button onClick={async()=>{ const b=(pret&&pret.blob)||await blobP.current; if(b){ telecharger(b); setEtat("telecharge"); } }}
          style={{flex:1,border:"none",cursor:"pointer",background:th.carte,borderRadius:14,padding:"11px 6px",
            fontWeight:800,fontSize:13,fontFamily:"inherit",color:th.ink,boxShadow:th.carteOmbre}}>
          {t.shareSaveImg}
        </button>
      </div>

      <button onClick={async()=>{ try{ await navigator.clipboard.writeText(texte); setEtat("copieTxt"); }catch(e){} }}
        style={{width:"100%",border:"none",cursor:"pointer",background:th.carte,borderRadius:14,padding:"11px 6px",
          fontWeight:800,fontSize:13,fontFamily:"inherit",color:th.ink,boxShadow:th.carteOmbre}}>
        {etat==="copieTxt" ? t.shareCopied : t.shareCopyTxt}
      </button>

      {pret&&<img src={pret.url} alt="" style={{width:120,borderRadius:12,boxShadow:th.carteOmbre}}/>}

      <div style={{fontSize:11.5,fontWeight:600,color:th.ink3,textAlign:"center",lineHeight:1.5,maxWidth:320}}>
        {etat==="telecharge" ? t.shareSaved : (etat==="copieImg" ? t.shareImgCopied : (etat==="copieTxt" ? t.shareTxtCopied : t.shareHint))}
      </div>
    </div>
  );
}

/* Tuile de mode « Illusion » — carte blanche, halo coloré, icône noire */
function IllusionModeTile({ icon, color, title, sub, onClick }){
  const [p,setP] = useState(false);
  return (
    <button onClick={onClick}
      onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)}
      style={{width:"100%",border:"none",padding:0,cursor:"pointer",background:"transparent",
        transform:p?"translateY(3px)":"none",transition:"transform .12s"}}>
      <div style={{display:"flex",alignItems:"center",gap:14,borderRadius:22,padding:"14px 16px",
        background:"#ffffff",
        boxShadow:`0 0 0 3px ${color}, 0 0 16px ${color}88, 0 6px 16px rgba(0,0,0,.3)`}}>
        <img src={icon} alt="" draggable={false}
          style={{width:46,height:46,flexShrink:0,objectFit:"contain"}}/>
        <div style={{flex:1,minWidth:0,textAlign:"left"}}>
          <div style={{fontWeight:800,fontSize:20,letterSpacing:.3,lineHeight:1.05,color:"#0d0d0d"}}>{title}</div>
          <div style={{fontWeight:600,fontSize:12.5,lineHeight:1.25,marginTop:4,color:"#5b6270"}}>{sub}</div>
        </div>
        <span style={{flexShrink:0,fontSize:26,fontWeight:800,color,lineHeight:1}}>›</span>
      </div>
    </button>
  );
}



/* ═══ CUBE 3D AU DOIGT — RUR'U' Chess (faces illustrées) et Classique ══
   Moteur repris de l'artefact « Rubik's Cube Échecs » (three.js r128,
   chargé à la demande depuis le CDN : rien à ajouter dans package.json).
   Glisser sur le cube = tourner une couronne · glisser à côté = pivoter.
   Chrono : démarre au 1er coup après « Mélanger », s'arrête quand c'est résolu.
   ═══════════════════════════════════════════════════════════════ */
const CHESS3D_IMG = { U:CH3D_U, D:CH3D_D, F:CH3D_F, B:CH3D_B, R:CH3D_R, L:CH3D_L };
/* Classique : jaune en haut, vert devant (même orientation que la page Algos) */
/* vrai schéma de couleurs : jaune dessus, vert devant -> orange à droite, rouge à gauche */
const CLASSIC3D_COLORS = { U:"#ffd500", D:"#f5f5f5", F:"#2bbf3f", B:"#2b8cff", R:"#ff8c1a", L:"#e62b2b" };
let threePromise = null;
function loadThree(){
  if(window.THREE) return Promise.resolve(window.THREE);
  if(threePromise) return threePromise;
  const urls = ["https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
                "https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js"];
  threePromise = new Promise((ok, ko)=>{
    const tryUrl = i=>{
      if(i>=urls.length){ threePromise=null; ko(new Error("three")); return; }
      const s=document.createElement("script"); s.src=urls[i]; s.async=true;
      s.onload=()=> window.THREE ? ok(window.THREE) : tryUrl(i+1);
      s.onerror=()=>{ s.remove(); tryUrl(i+1); };
      document.head.appendChild(s);
    };
    tryUrl(0);
  });
  return threePromise;
}
function cube3dBest(k){ try{ return JSON.parse(localStorage.getItem(k)||"{}").best ?? null; }catch(e){ return null; } }
function cube3dSaveBest(k, ms){ try{ const v=JSON.parse(localStorage.getItem(k)||"{}"); v.best=ms; v.solves=(v.solves||0)+1; localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }

/* chaque résolution chronométrée au doigt compte aussi dans la page Progression de l'univers */
const cube3dProgress = skinKey => ms => { const d=loadS(); const sd=d[skinKey]||{}; const st=sd.cube3d||{ best:null, games:0, sessions:[] };
  if(st.best==null||ms<st.best) st.best=ms; st.games=(st.games||0)+1;
  st.sessions=[...(st.sessions||[]),{date:Date.now(),time:ms}].slice(-50); sd.cube3d=st; d[skinKey]=sd; saveS(d); };
function ChessCubeScreen({ onBack, t }){
  return <Cube3DScreen onBack={onBack} t={t} title="♞ RUR'U' CHESS" accent="#ffcc33" faces={CHESS3D_IMG} lsKey="rurucube_chess3d" onSolved={cube3dProgress("chesscube")}/>;
}
function ClassicCubeScreen({ onBack, t }){
  return <Cube3DScreen onBack={onBack} t={t} title={"🎨 "+t.cube3dTitle} accent="#3cc4b4" colors={CLASSIC3D_COLORS} lsKey="rurucube_classic3d"/>;
}

/* Cubes à cases : 9 images par face, dans l'ordre de lecture (haut-gauche -> bas-droite) */
function tiles3d(id){
  const col = S=>({ U:S.yellow, D:S.white, F:S.green, B:S.teal, R:S.orange, L:S.red });   /* même schéma que CUBE_COLOR */
  if(id==="monstro") return col(MONSTER_SPRITES);
  if(id==="sudoku")  return col(SUDOKUBE_SPRITES);
  if(id==="illusion")return col(ILLUSION_SPRITES);
  if(id==="savants") return { U:EINSTEIN_TILES, F:CURIE_TILES, R:TESLA_TILES, B:NEWTON_TILES, L:DARWIN_TILES, D:GALILEE_TILES };
  if(id==="civi")    return { U:RAPANUI_TILES, F:MAYA_TILES, R:ROME_TILES, B:EGYPT_TILES, L:MESO_TILES, D:CHINA_TILES };
  return null;
}
function TilesCubeScreen({ onBack, t, id }){
  const info = { monstro:["👾 MONSTRO 3D","#2fd46b"], sudoku:["🔢 SUDOCUBE 3D","#38b6ff"], illusion:["🌀 ILLUSION 3D","#8b5cf6"],
    savants:["🔬 "+t.savants+" 3D","#a066ff"], civi:["🏛️ "+t.civi.toUpperCase()+" 3D","#ff8a1a"] }[id];
  return <Cube3DScreen onBack={onBack} t={t} title={info[0]} accent={info[1]} tiles={tiles3d(id)} uniform={id==="illusion"}
    lsKey={"rurucube_"+id+"3d"} onSolved={cube3dProgress(id)}/>;
}
const SUDOMONO_IMG = { U:SM_U, D:SM_D, F:SM_F, B:SM_B, R:SM_R, L:SM_L };
function SudoMonoCubeScreen({ onBack, t }){
  return <Cube3DScreen onBack={onBack} t={t} title={"🔢 "+t.sudo3dTitle} accent="#ff3b4e" faces={SUDOMONO_IMG} sameFaces lsKey="rurucube_sudomono3d" onSolved={cube3dProgress("sudomono")}/>;
}

/* faces = 6 images (une grande image par face) · colors = 6 couleurs unies */
function Cube3DScreen({ onBack, t, title, accent, faces, colors, tiles, uniform, lsKey, sameFaces, onSolved }){
  /* tiles = 9 images par face (case par case) · uniform = les 9 cases d'une face sont pareilles */
  const pictured = !!faces || (!!tiles && !uniform);
  const stageRef = useRef(null);
  const api = useRef({});                         /* fonctions exposées par le moteur 3D */
  const [status,setStatus] = useState("loading"); /* loading | ready | error */
  const [moves,setMoves] = useState(0);
  const [solved,setSolved] = useState(true);
  const [busy,setBusy] = useState(false);
  const [win,setWin] = useState(null);            /* {ms, moves, record} */
  const [ms,setMs] = useState(0);
  const [best,setBest] = useState(()=>cube3dBest(lsKey));
  const [seq,setSeq] = useState([]);
  const [viewMoved,setViewMoved] = useState(false);   /* la vue a été pivotée -> bouton « Recentrer » */              /* derniers coups joués, en notation */
  const chrono = useRef({ armed:false, start:0, running:false });

  /* affichage du chrono */
  useEffect(()=>{
    const id = setInterval(()=>{ const c=chrono.current; if(c.running) setMs(Date.now()-c.start); }, 47);
    return ()=>clearInterval(id);
  },[]);

  useEffect(()=>{
    let dead=false, raf=0; const cleanups=[];
    loadThree().then(THREE=>{
      if(dead) return;
      const stage = stageRef.current;
      const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
      renderer.outputEncoding = THREE.sRGBEncoding;
      Object.assign(renderer.domElement.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"});
      stage.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32,1,0.1,100);
      scene.add(new THREE.AmbientLight(0xffffff,.55));
      const dl = new THREE.DirectionalLight(0xffffff,.8); dl.position.set(4,6,5); scene.add(dl);

      /* repères de chaque face : n = normale, r = droite de l'image, u = haut de l'image */
      const V=(x,y,z)=>new THREE.Vector3(x,y,z);
      const FACES={
        F:{n:V(0,0,1),r:V(1,0,0),u:V(0,1,0)}, B:{n:V(0,0,-1),r:V(-1,0,0),u:V(0,1,0)},
        R:{n:V(1,0,0),r:V(0,0,-1),u:V(0,1,0)}, L:{n:V(-1,0,0),r:V(0,0,1),u:V(0,1,0)},
        U:{n:V(0,1,0),r:V(1,0,0),u:V(0,0,-1)}, D:{n:V(0,-1,0),r:V(1,0,0),u:V(0,0,1)}
      };
      const loader=new THREE.TextureLoader(), maxAniso=renderer.capabilities.getMaxAnisotropy();
      const MAT={}, disposables=[];
      const TMAT={};
      const tileMat=url=>{ if(!TMAT[url]){ const tx=loader.load(url); tx.encoding=THREE.sRGBEncoding; tx.anisotropy=maxAniso;
        TMAT[url]=new THREE.MeshBasicMaterial({map:tx}); disposables.push(tx,TMAT[url]); } return TMAT[url]; };
      for(const k in FACES){ if(tiles) continue;
        if(faces){ const tx=loader.load(faces[k]); tx.encoding=THREE.sRGBEncoding; tx.anisotropy=maxAniso;
          MAT[k]=new THREE.MeshBasicMaterial({map:tx}); disposables.push(tx); }
        else MAT[k]=new THREE.MeshBasicMaterial({color:new THREE.Color(colors[k]).convertSRGBToLinear()});
        disposables.push(MAT[k]); }
      const bodyMat=new THREE.MeshStandardMaterial({color:0x0c0c0c,roughness:.45,metalness:.1});
      const bodyGeo=new THREE.BoxGeometry(.97,.97,.97); disposables.push(bodyMat,bodyGeo);

      /* autocollant aux coins arrondis */
      const S=.45,RAD=.08,shape=new THREE.Shape();
      shape.moveTo(-S+RAD,-S);shape.lineTo(S-RAD,-S);shape.quadraticCurveTo(S,-S,S,-S+RAD);
      shape.lineTo(S,S-RAD);shape.quadraticCurveTo(S,S,S-RAD,S);shape.lineTo(-S+RAD,S);
      shape.quadraticCurveTo(-S,S,-S,S-RAD);shape.lineTo(-S,-S+RAD);shape.quadraticCurveTo(-S,-S,-S+RAD,-S);
      const baseSticker=new THREE.ShapeGeometry(shape,6);

      const cubies=[],pickables=[],stickers=[];
      for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++){
        if(!x&&!y&&!z)continue;
        const c=new THREE.Group();c.position.set(x,y,z);c.userData.home=V(x,y,z);
        const body=new THREE.Mesh(bodyGeo,bodyMat);body.userData.cubie=c;c.add(body);pickables.push(body);
        for(const k in FACES){const f=FACES[k];if(c.position.dot(f.n)!==1)continue;
          const i=c.position.dot(f.r)+1,j=c.position.dot(f.u)+1;
          const g=baseSticker.clone(),pos=g.attributes.position,uv=g.attributes.uv;
          for(let q=0;q<pos.count;q++)uv.setXY(q, tiles?.5+pos.getX(q)/(2*S):(i+.5+pos.getX(q))/3, tiles?.5+pos.getY(q)/(2*S):(j+.5+pos.getY(q))/3);
          uv.needsUpdate=true; disposables.push(g);
          const m=new THREE.Mesh(g,tiles?tileMat(tiles[k][(2-j)*3+i]):MAT[k]); m.userData.src=tiles?k:(faces?faces[k]:colors[k]); m.userData.cell=[i,j]; stickers.push(m);
          m.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.r,f.u,f.n));
          m.position.copy(f.n).multiplyScalar(.487);m.userData.cubie=c;c.add(m);pickables.push(m);}
        scene.add(c);cubies.push(c);
      }

      /* caméra en orbite */
      const THETA0=.65, PHI0=1.05;
      let theta=THETA0,phi=PHI0,dist=11.5, camAnim=null;
      const placeCam=()=>{camera.position.set(dist*Math.sin(phi)*Math.sin(theta),dist*Math.cos(phi),dist*Math.sin(phi)*Math.cos(theta));camera.lookAt(0,0,0)};
      const resize=()=>{const w=stage.clientWidth,h=stage.clientHeight; if(!w||!h) return; renderer.setSize(w,h,false);camera.aspect=w/h;
        dist=w/h<1?11.5/(w/h)*.64+2:11.5;camera.updateProjectionMatrix();placeCam()};
      const ro=new ResizeObserver(resize); ro.observe(stage); resize(); cleanups.push(()=>ro.disconnect());

      /* mouvements */
      const AX=['x','y','z'],queue=[],history=[];let anim=null,nMoves=0,scrambling=false,wasSolved=true,seqArr=[];
      /* notation : face (couche ±1) ou tranche (couche 0 : M suit L, E suit D, S suit F) */
      /* Notation RELATIVE À TA VUE : F = la face qui te regarde, U = celle du haut à l'écran,
         R = celle de droite. Recalculé à chaque coup d'après la position de la caméra,
         donc si tu fais pivoter le cube, R reste toujours la face à ta droite. */
      const AXV=[V(1,0,0),V(0,1,0),V(0,0,1)];
      const nearestAxis=(v,skip=[])=>{ let best=null;
        for(let i=0;i<3;i++){ if(skip.includes(i)) continue; const d=v.getComponent(i);
          if(!best||Math.abs(d)>Math.abs(best.d)) best={i,d}; }
        return { i:best.i, s:best.d>=0?1:-1 }; };
      const viewFrame=()=>{
        camera.updateMatrixWorld(); const e=camera.matrixWorld.elements;
        const toCam=V(e[8],e[9],e[10]), up=V(e[4],e[5],e[6]);
        const F=nearestAxis(toCam), U=nearestAxis(up,[F.i]);
        const rv=AXV[U.i].clone().multiplyScalar(U.s).cross(AXV[F.i].clone().multiplyScalar(F.s));   /* R = U × F (repère direct) */
        const R=nearestAxis(rv);
        return { R, U, F };
      };
      /* face (R L U D F B) -> [axe, couche, sens] ; sens horaire vu de l'extérieur de la face */
      const faceToMove=(letter,prime)=>{
        const v=viewFrame(), base={R:v.R,L:v.R,U:v.U,D:v.U,F:v.F,B:v.F}[letter];
        const sg=("LDB".includes(letter)?-1:1)*base.s;          /* normale sortante = sg sur l'axe */
        return [AX[base.i], sg, prime?sg:-sg];
      };
      /* nom d'un coup fait en glissant, lui aussi relatif à la vue */
      const moveName=(axis,layer,dir)=>{
        const v=viewFrame(), i=AX.indexOf(axis);
        const k=["R","U","F"].find(n=>v[n].i===i), s=v[k].s;
        let face, sg;
        if(layer===0){ face={R:"M",U:"E",F:"S"}[k]; sg=(k==="F"?1:-1)*s; }   /* M suit L, E suit D, S suit F */
        else if(layer===s){ face=k; sg=s; }
        else { face={R:"L",U:"D",F:"B"}[k]; sg=-s; }
        return face+(dir===-sg?"":"'");
      };
      const pushSeq=n=>{ seqArr=[...seqArr,n].slice(-16); setSeq(seqArr); };
      const pivot=new THREE.Group();scene.add(pivot);
      const enqueue=(axis,layer,dir,opts={})=>queue.push({axis,layer,dir,dur:opts.dur||190,record:opts.record!==false,count:opts.count!==false,name:opts.name});
      const startNext=()=>{const mv=queue.shift();if(!mv)return;
        pivot.rotation.set(0,0,0);pivot.updateMatrixWorld();
        mv.items=mv.layer==='all'?cubies.slice():cubies.filter(c=>Math.round(c.position[mv.axis])===mv.layer);
        mv.items.forEach(c=>pivot.attach(c));mv.t0=performance.now();anim=mv;
        /* le chrono part au premier vrai coup après le mélange */
        const ch=chrono.current; if(mv.count && ch.armed && !ch.running){ ch.running=true; ch.start=Date.now(); }};
      const snap=c=>{c.position.set(Math.round(c.position.x),Math.round(c.position.y),Math.round(c.position.z));
        const m=new THREE.Matrix4().makeRotationFromQuaternion(c.quaternion),e=m.elements;
        for(const i of [0,1,2,4,5,6,8,9,10])e[i]=Math.round(e[i]);c.quaternion.setFromRotationMatrix(m)};
      /* Résolu = ce que l'on VOIT est juste, face par face :
         · couleurs unies (Classique) : chaque face d'une seule couleur ;
         · images (Chess, Sudocube Mono) : chaque autocollant montre la bonne case de l'image,
           à l'endroit, et (si les 6 images diffèrent) la même image que le centre de sa face.
         sameFaces = les 6 faces portent le même motif -> seules les cases comptent. */
      const ex=V(1,0,0), ey=V(0,1,0), ez=V(0,0,1);
      /* les 24 orientations possibles du cube entier (matrices de permutation signées, déterminant +1) */
      const ORIENTS=(()=>{ const out=[], P=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
        for(const p of P) for(let sx=-1;sx<=1;sx+=2) for(let sy=-1;sy<=1;sy+=2) for(let sz=-1;sz<=1;sz+=2){
          const M=[[0,0,0],[0,0,0],[0,0,0]], sg=[sx,sy,sz]; for(let i=0;i<3;i++) M[i][p[i]]=sg[i];
          const det=M[0][0]*(M[1][1]*M[2][2]-M[1][2]*M[2][1])-M[0][1]*(M[1][0]*M[2][2]-M[1][2]*M[2][0])+M[0][2]*(M[1][0]*M[2][1]-M[1][1]*M[2][0]);
          if(det===1) out.push(M); }
        return out; })();
      const mul=(M,v)=>V(M[0][0]*v.x+M[0][1]*v.y+M[0][2]*v.z, M[1][0]*v.x+M[1][1]*v.y+M[1][2]*v.z, M[2][0]*v.x+M[2][1]*v.y+M[2][2]*v.z);
      const tr=M=>[[M[0][0],M[1][0],M[2][0]],[M[0][1],M[1][1],M[2][1]],[M[0][2],M[1][2],M[2][2]]];
      const isSolved=()=>{
        scene.updateMatrixWorld(true);
        const groups={};
        for(const m of stickers){
          const q=new THREE.Quaternion(); m.getWorldQuaternion(q);
          const n=ez.clone().applyQuaternion(q), up=ey.clone().applyQuaternion(q), rt=ex.clone().applyQuaternion(q);
          const key=[Math.round(n.x),Math.round(n.y),Math.round(n.z)].join();
          const cp=new THREE.Vector3(); m.parent.getWorldPosition(cp);
          (groups[key]=groups[key]||[]).push({m,n,up,rt,cp:V(Math.round(cp.x),Math.round(cp.y),Math.round(cp.z))});
        }
        const centers={};
        for(const key in groups){
          const g=groups[key]; if(g.length!==9) return false;
          const N=V(...key.split(',').map(Number));
          const c=g.find(x=>x.cp.equals(N)); if(!c) return false; centers[key]={N,c};
          for(const x of g){
            if(!pictured){ if(x.m.userData.src!==c.m.userData.src) return false; continue; }
            if(!sameFaces && x.m.userData.src!==c.m.userData.src) return false;
            if(x.up.dot(c.up)<.99) return false;                 /* à l'endroit */
            const rel=x.cp.clone().sub(N), di=Math.round(rel.dot(c.rt)), dj=Math.round(rel.dot(c.up));
            const [ci,cj]=c.m.userData.cell, [i,j]=x.m.userData.cell;
            if(i!==ci+di || j!==cj+dj) return false;              /* la bonne case de l'image */
          }
        }
        if(!pictured) return true;
        /* images : les 6 faces doivent être à l'endroit dans UNE même orientation du cube
           (retourner tout le cube reste résolu ; un quart de tour d'une seule face non) */
        return ORIENTS.some(M=>{ const Mi=tr(M);
          return Object.values(centers).every(({N,c})=>{
            const n0=mul(Mi,N); const k=Object.keys(FACES).find(f=>FACES[f].n.distanceTo(n0)<.01);
            const upExp=mul(M,FACES[k].u);
            return c.up.dot(upExp)>.99 && (sameFaces || c.m.userData.src===(faces?faces[k]:k)); }); });
      };
      const updateUI=userMove=>{
        setMoves(nMoves); const s=isSolved(); setSolved(s);
        const ch=chrono.current;
        if(s && !wasSolved && userMove && nMoves>0){
          let rec=false, el=null;
          if(ch.running){ el=Date.now()-ch.start; ch.running=false; ch.armed=false; setMs(el);
            const b=cube3dBest(lsKey); if(b==null||el<b){ rec=true; setBest(el); } cube3dSaveBest(lsKey, rec?el:(b??el)); }
          setWin({ms:el, moves:nMoves, record:rec});
          if(el!=null && onSolved) onSolved(el, nMoves);
        }
        wasSolved=s;
      };
      const finish=mv=>{pivot.rotation[mv.axis]=mv.dir*Math.PI/2;pivot.updateMatrixWorld();
        mv.items.forEach(c=>{scene.attach(c);snap(c)});anim=null;
        if(mv.record)history.push(mv);
        if(mv.count){ nMoves++; pushSeq(mv.name||moveName(mv.axis,mv.layer,mv.dir)); }
        else if(mv.record && mv.name) pushSeq(mv.name);          /* rotation du cube entier : notée, pas comptée */
        if(!queue.length){ if(scrambling){ scrambling=false; nMoves=0; setBusy(false); chrono.current.armed=true; } updateUI(mv.count); }};
      const loop=now=>{
        if(camAnim){ const tt=Math.min(1,(now-camAnim.t0)/320), e=1-Math.pow(1-tt,3);
          theta=camAnim.th+(THETA0-camAnim.th)*e; phi=camAnim.ph+(PHI0-camAnim.ph)*e; placeCam(); if(tt>=1) camAnim=null; }
        if(!anim&&queue.length)startNext();
        if(anim){const tt=Math.min(1,(now-anim.t0)/anim.dur),e=tt<.5?2*tt*tt:1-Math.pow(-2*tt+2,2)/2;
          pivot.rotation[anim.axis]=anim.dir*Math.PI/2*e;if(tt>=1)finish(anim)}
        renderer.render(scene,camera); raf=requestAnimationFrame(loop)};
      raf=requestAnimationFrame(loop);

      /* doigt / souris : glisser un autocollant = tourner, glisser le fond = pivoter */
      const ray=new THREE.Raycaster();let drag=null;
      const cv=renderer.domElement;
      const ndc=e=>{const r=cv.getBoundingClientRect();return {x:(e.clientX-r.left)/r.width*2-1,y:-(e.clientY-r.top)/r.height*2+1,px:e.clientX-r.left,py:e.clientY-r.top}};
      const toScreen=v=>{const p=v.clone().project(camera),r=cv.getBoundingClientRect();return {x:(p.x+1)/2*r.width,y:(1-p.y)/2*r.height}};
      const onDown=e=>{try{cv.setPointerCapture(e.pointerId);}catch(_){} const p=ndc(e);ray.setFromCamera(p,camera);
        const hit=ray.intersectObjects(pickables)[0];
        if(hit&&!scrambling){const n=hit.face.normal.clone().transformDirection(hit.object.matrixWorld);
          n.set(Math.round(n.x),Math.round(n.y),Math.round(n.z));
          drag={mode:'layer',x:p.px,y:p.py,point:hit.point.clone(),n,cubie:hit.object.userData.cubie,done:false}}
        else drag={mode:'orbit',x:p.px,y:p.py};cv.style.cursor='grabbing'};
      const onMove=e=>{if(!drag)return;const p=ndc(e),dx=p.px-drag.x,dy=p.py-drag.y;
        if(drag.mode==='orbit'){ camAnim=null; theta-=dx*.009; phi=Math.max(.3,Math.min(2.84,phi-dy*.009)); placeCam();
          drag.x=p.px; drag.y=p.py; setViewMoved(true); return; }
        if(drag.done||Math.hypot(dx,dy)<12)return;
        let bestT=null;const s0=toScreen(drag.point);
        for(const tv of [V(1,0,0),V(0,1,0),V(0,0,1)]){if(Math.abs(tv.dot(drag.n))>.5)continue;
          const s1=toScreen(drag.point.clone().add(tv));let vx=s1.x-s0.x,vy=s1.y-s0.y;const L=Math.hypot(vx,vy)||1;
          const d=(dx*vx+dy*vy)/L/Math.hypot(dx,dy);if(!bestT||Math.abs(d)>Math.abs(bestT.d))bestT={t:tv,d}}
        const tw=bestT.t.clone().multiplyScalar(Math.sign(bestT.d)),a=drag.n.clone().cross(tw);
        const i=Math.abs(a.x)>.5?0:Math.abs(a.y)>.5?1:2,axis=AX[i],sa=Math.sign(a.getComponent(i));
        enqueue(axis,Math.round(drag.cubie.position[axis]),sa);drag.done=true};
      const onUp=()=>{drag=null;cv.style.cursor='grab'};
      cv.style.cursor='grab'; cv.style.touchAction='none';
      cv.addEventListener('pointerdown',onDown); cv.addEventListener('pointermove',onMove); window.addEventListener('pointerup',onUp);
      /* clavier (ordinateur) : U D L R F B, Maj = sens inverse */
      /* tourner tout le cube d'un quart de tour (caméra fixe) :
         x = vers le haut (comme R), x' = vers le bas, y = vers la gauche (comme U), y' = vers la droite, x2 = retourner */
      const turnCube=k=>{ if(scrambling) return; const v=viewFrame();
        if(k==='x2'){ enqueue(AX[v.R.i],'all',2,{count:false,dur:420,name:"x2"}); return; }
        const b=k[0]==='x'?v.R:v.U, prime=k.endsWith("'");
        enqueue(AX[b.i],'all',prime?b.s:-b.s,{count:false,dur:260,name:k}); };
      const playFace=(letter,prime)=>{ if(scrambling) return; const [a,l,d]=faceToMove(letter,prime); enqueue(a,l,d,{name:letter+(prime?"'":"")}); };
      const onKey=e=>{const k=(e.key||"").toUpperCase(); if(!"RLUDFB".includes(k)||k.length!==1||e.metaKey||e.ctrlKey)return; playFace(k,e.shiftKey)};
      window.addEventListener('keydown',onKey);
      cleanups.push(()=>{ cv.removeEventListener('pointerdown',onDown); cv.removeEventListener('pointermove',onMove);
        window.removeEventListener('pointerup',onUp); window.removeEventListener('keydown',onKey); });

      api.current = {
        move(face,prime){ playFace(face,prime); },
        /* retourner le cube : demi-tour autour de l'axe gauche-droite de ta vue (x2) */
        flip(){ turnCube('x2'); },
        recenter(){ camAnim={t0:performance.now(),th:theta,ph:phi}; setViewMoved(false); },
        turn(k){ turnCube(k); },
        scramble(){ if(scrambling)return; scrambling=true; setBusy(true); setWin(null); history.length=0;
          const ch=chrono.current; ch.running=false; ch.armed=false; setMs(0); seqArr=[]; setSeq([]);
          let last=null;for(let n=0;n<25;n++){let a,l;do{a=AX[Math.random()*3|0];l=[-1,1][Math.random()*2|0]}while(last&&last[0]===a&&last[1]===l);
            last=[a,l];enqueue(a,l,Math.random()<.5?1:-1,{dur:85,record:false,count:false})} },
        undo(){ if(scrambling||anim||queue.length)return;const m=history.pop();
          if(m){enqueue(m.axis,m.layer,-m.dir,{record:false,count:false,dur:m.layer==='all'?420:190}); if(m.count){nMoves=Math.max(0,nMoves-1);setMoves(nMoves);}
            seqArr=seqArr.slice(0,-1); setSeq(seqArr)} },
        reset(){ if(scrambling||anim)return;queue.length=0;history.length=0;
          cubies.forEach(c=>{c.position.copy(c.userData.home);c.quaternion.identity()});nMoves=0;wasSolved=true;seqArr=[];setSeq([]);
          const ch=chrono.current; ch.running=false; ch.armed=false; setMs(0); setWin(null); updateUI(false) },
      };
      cleanups.push(()=>{ cancelAnimationFrame(raf); disposables.forEach(d=>d.dispose&&d.dispose()); baseSticker.dispose();
        renderer.dispose(); if(renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement); });
      setStatus("ready");
    }).catch(()=>{ if(!dead) setStatus("error"); });
    return ()=>{ dead=true; cleanups.forEach(f=>f()); api.current={}; };
  },[]);

  const pill = (txt, bg, fg)=>(
    <span style={{background:bg||PAL.card,color:fg||PAL.text,borderRadius:999,padding:"7px 12px",fontWeight:800,fontSize:13,
      fontVariantNumeric:"tabular-nums",whiteSpace:"nowrap",boxShadow:`0 0 0 1.5px ${PAL.cardHi}`}}>{txt}</span>
  );
  const btn = (label, onClick, primary)=>(
    <button onClick={onClick} disabled={busy||status!=="ready"} style={{flex:primary?1.3:1,minWidth:0,border:"none",cursor:"pointer",borderRadius:16,padding:"13px 4px",
      fontWeight:800,fontSize:13.5,whiteSpace:"nowrap",opacity:(busy||status!=="ready")?.5:1,
      background:primary?`linear-gradient(180deg,${shade(accent,30)},${accent} 55%)`:PAL.card,
      color:primary?"#2a1c00":PAL.text,
      boxShadow:primary?`0 4px 0 ${shade(accent,-90)}`:`0 4px 0 ${PAL.bg2}, 0 0 0 1.5px ${PAL.cardHi}`}}>{label}</button>
  );

  return (
    <div style={{height:"100dvh",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",padding:"16px 14px calc(14px + env(safe-area-inset-bottom))",
      boxSizing:"border-box",position:"relative",zIndex:1,overflow:"hidden",
      background:"radial-gradient(circle at 50% 42%, #2a2250 0%, #141026 55%, #0b0916 100%)"}}>
      <div style={{width:"100%",maxWidth:560,display:"flex",alignItems:"center",gap:10}}>
        <GhostBtn onClick={onBack} color={accent}>{t.menu}</GhostBtn>
        <div style={{flex:1,textAlign:"right",fontWeight:800,fontSize:22,letterSpacing:1.5,color:accent,textShadow:`0 3px 0 ${PAL.bg2}`}}>{title}</div>
      </div>

      <div style={{width:"100%",maxWidth:560,display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap",marginTop:12}}>
        {pill("⏱ "+(ms/1000).toFixed(2)+"s")}
        {pill(moves+" "+(moves>1?t.ch3Moves:t.ch3Move))}
        {pill(solved?t.ch3Solved:t.ch3Mixed, solved?PAL.green:"#e8461e", solved?"#0b2a15":"#fff")}
        {best!=null&&pill("🏆 "+(best/1000).toFixed(2)+"s")}
      </div>

      <div ref={stageRef} style={{flex:1,minHeight:0,width:"100%",maxWidth:620,position:"relative",touchAction:"none"}}>
        {status!=="ready"&&(
          <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",
            color:PAL.textDim,fontWeight:700,fontSize:14,padding:20,lineHeight:1.5}}>
            {status==="loading"?t.ch3Loading:t.ch3Error}
          </div>
        )}
        {viewMoved&&status==="ready"&&(
          <button onClick={()=>api.current.recenter&&api.current.recenter()} style={{position:"absolute",right:6,bottom:8,border:"none",cursor:"pointer",
            borderRadius:999,padding:"8px 13px",fontWeight:800,fontSize:12.5,color:"#1a1228",background:accent,
            boxShadow:`0 3px 0 ${shade(accent,-80)}, 0 6px 14px rgba(0,0,0,.35)`,animation:"pop .25s ease-out",touchAction:"manipulation"}}>⌖ {t.ch3Recenter}</button>
        )}
        {win&&(
          <div style={{position:"absolute",left:"50%",top:10,transform:"translateX(-50%)",background:PAL.green,color:"#0b2a15",
            fontWeight:800,padding:"9px 18px",borderRadius:999,whiteSpace:"nowrap",animation:"pop .3s ease-out",boxShadow:"0 6px 18px rgba(0,0,0,.4)"}}>
            {win.record?"🏆 ":"🎉 "}{t.ch3Win}{win.ms!=null?` · ${(win.ms/1000).toFixed(2)}s`:""}
          </div>
        )}
      </div>

      {/* derniers coups joués */}
      <div style={{minHeight:22,maxWidth:"100%",display:"flex",gap:4,justifyContent:"center",flexWrap:"nowrap",overflow:"hidden",margin:"2px 0 6px"}}>
        {seq.length===0
          ? <span style={{fontSize:11.5,color:PAL.textDim,fontWeight:600,textAlign:"center",lineHeight:1.4}}>{t.ch3Hint}</span>
          : seq.slice(-10).map((m,i,a)=>(
            <span key={seq.length-a.length+i} style={{fontFamily:"ui-monospace,Menlo,monospace",fontWeight:800,fontSize:13,padding:"3px 6px",borderRadius:7,
              background:i===a.length-1?accent:"#2a2343",color:i===a.length-1?"#1a1228":PAL.text,opacity:.35+.65*(i+1)/a.length}}>{m}</span>))}
      </div>
      {/* tourner tout le cube d'un quart de tour, ou le retourner */}
      <div style={{width:"100%",maxWidth:460,display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1.6fr",gap:6,marginBottom:6}}>
        {[["y","◀",t.ch3Left],["x","▲",t.ch3Up],["x'","▼",t.ch3Down],["y'","▶",t.ch3Right],["x2","🔃 "+t.ch3Flip,t.ch3Flip]].map(([k,lab,aria])=>(
          <button key={k} aria-label={aria} title={aria} onClick={()=>api.current.turn&&api.current.turn(k)} disabled={busy||status!=="ready"}
            style={{border:"none",cursor:"pointer",borderRadius:12,padding:"9px 2px",fontWeight:800,fontSize:k==="x2"?13.5:17,lineHeight:1.1,
              color:PAL.text,background:"#2a2343",opacity:(busy||status!=="ready")?.5:1,whiteSpace:"nowrap",
              boxShadow:`0 3px 0 ${PAL.bg2}, 0 0 0 1.5px ${accent}99`,touchAction:"manipulation"}}>{lab}</button>
        ))}
      </div>
      {/* pavé de notation : appuie sur R, U, F… pour tourner la face */}
      <div style={{width:"100%",maxWidth:460,display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:6,marginBottom:8}}>
        {[false,true].map(prime=>["R","U","F","L","D","B"].map(f=>(
          <button key={f+prime} onClick={()=>api.current.move&&api.current.move(f,prime)} disabled={busy||status!=="ready"}
            style={{border:"none",cursor:"pointer",borderRadius:12,padding:"10px 0",fontFamily:"ui-monospace,Menlo,monospace",
              fontWeight:800,fontSize:17,lineHeight:1,color:prime?PAL.text:"#1a1228",opacity:(busy||status!=="ready")?.5:1,
              background:prime?"#2a2343":`linear-gradient(180deg,${shade(accent,35)},${shade(accent,5)})`,
              boxShadow:prime?`0 3px 0 ${PAL.bg2}, 0 0 0 1.5px ${accent}66`:`0 3px 0 ${shade(accent,-80)}`,
              touchAction:"manipulation"}}>{f}{prime?"'":""}</button>
        )))}
      </div>
      <div style={{width:"100%",maxWidth:460,display:"flex",gap:8}}>
        {btn("🔀 "+t.ch3Scramble, ()=>api.current.scramble&&api.current.scramble(), true)}
        {btn("↶ "+t.ch3Undo, ()=>api.current.undo&&api.current.undo())}
        {btn("⟲ "+t.ch3Reset, ()=>api.current.reset&&api.current.reset())}
      </div>
    </div>
  );
}

/* ═══ REVERSE CHRONO — résolution complète contre un compte à rebours ═══
   Le joueur choisit un temps limite, mélange son vrai cube, appuie sur GO
   et doit le résoudre en entier avant la fin. Statistiques : data[skin].chronorev
   (record = meilleur temps réussi ; les échecs comptent comme parties).
   ═══════════════════════════════════════════════════════════════ */
const REV_LIMITS = [60,120,180,300];
function ChronoRevScreen({ onBack, t, skin }){
  const wide = useWide();
  const C = PAL.orange;
  const [ph,setPh] = useState("ready");          // ready | count | playing | done
  const [limit,setLimit] = useState(()=>{ const s=(loadS()[skin]||{}).chronorev; return (s&&s.limit)||120; });
  const [ms,setMs] = useState(0);
  const [count,setCount] = useState(5);
  const [failed,setFailed] = useState(false);
  const [isRecord,setIsRecord] = useState(false);
  const timer = useRef(null);
  const startRef = useRef(0);
  const stats = (loadS()[skin]||{}).chronorev || { best:null, games:0, wins:0, sessions:[] };
  useEffect(()=>()=>clearInterval(timer.current),[]);

  function save(el, ok){
    const d=loadS(); const s2=d[skin]||{}; const st=s2.chronorev||{ best:null, games:0, wins:0, sessions:[] };
    let rec=false;
    if(ok){ st.wins=(st.wins||0)+1; if(st.best==null||el<st.best){ st.best=el; rec=true; } }
    st.games=(st.games||0)+1; st.limit=limit;
    st.sessions=[...(st.sessions||[]),{date:Date.now(),time:el,won:ok,limit:limit*1000}].slice(-50);
    s2.chronorev=st; d[skin]=s2; saveS(d); return rec;
  }
  function begin(){
    setIsRecord(false); setFailed(false); setMs(0); setCount(5); setPh("count");
    let c=5; clearInterval(timer.current);
    timer.current=setInterval(()=>{
      c-=1;
      if(c<=0){
        clearInterval(timer.current); setPh("playing"); startRef.current=Date.now();
        timer.current=setInterval(()=>{
          const el=Date.now()-startRef.current;
          if(el>=limit*1000){ clearInterval(timer.current); setMs(limit*1000); setFailed(true); save(limit*1000,false); setPh("done"); }
          else setMs(el);
        },47);
      } else setCount(c);
    },900);
  }
  function stop(){
    if(ph!=="playing") return;
    clearInterval(timer.current);
    const el=Date.now()-startRef.current; setMs(el);
    setIsRecord(save(el,true)); setPh("done");
  }
  useSpaceKey(()=>{ if(ph==="ready") begin(); else if(ph==="playing") stop(); else if(ph==="done") setPh("ready"); });

  const left = Math.max(0, limit*1000-ms);
  const danger = ph==="playing" && left<15000;
  const mmss = v=>{ const s=Math.ceil(v/1000); return Math.floor(s/60)+":"+String(s%60).padStart(2,"0"); };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <Header onBack={onBack} t={t} color={C} title={`⏳ ${t.revChronoTile}`} sub={t.revChronoSub}/>
      <div style={{fontWeight:700,fontSize:62,lineHeight:1,margin:"8px 0 4px",fontVariantNumeric:"tabular-nums",
        color:danger?PAL.red:C,textShadow:`0 0 22px ${danger?PAL.red:C}44`,animation:danger?"wiggle .6s ease-in-out infinite":"none"}}>
        {ph==="done"&&!failed ? fmt(ms) : mmss(ph==="ready"?limit*1000:left)}
      </div>
      {ph==="playing"&&<div style={{fontSize:12.5,fontWeight:700,color:PAL.textDim,marginBottom:10}}>{t.revChronoLeft}</div>}

      {ph==="ready"&&(
        <>
          <div style={{marginTop:10,marginBottom:14,width:"100%",display:"flex",justifyContent:"center"}}>
            <Hint color={C} icon="⏳">{t.revChronoReady}</Hint>
          </div>
          <div style={{fontSize:12,fontWeight:800,letterSpacing:1.5,color:PAL.textDim,marginBottom:8}}>{t.revChronoPick.toUpperCase()}</div>
          <div style={{display:"flex",gap:8,width:"100%",maxWidth:340,marginBottom:16}}>
            {REV_LIMITS.map(v=>{ const on=limit===v; return (
              <button key={v} onClick={()=>setLimit(v)} style={{flex:1,border:"none",cursor:"pointer",borderRadius:14,padding:"12px 2px",
                fontWeight:800,fontSize:16,fontFamily:"inherit",color:on?"#1a1228":PAL.textDim,
                background:on?`linear-gradient(180deg,${shade(C,30)},${C} 50%)`:PAL.card,
                boxShadow:on?`0 4px 0 ${shade(C,-60)}`:`0 4px 0 ${PAL.bg2}, 0 0 0 2px ${C}55`}}>{mmss(v*1000)}</button>); })}
          </div>
          <div style={{width:"100%",maxWidth:300}}><CandyBtn onClick={begin} color={C}>{t.go}</CandyBtn></div>
          {isDesktop&&<div style={{marginTop:8,fontSize:12,fontWeight:600,color:PAL.textFaint}}>{t.spaceStart}</div>}
          <div style={{display:"flex",gap:10,marginTop:18}}>
            <StatChip label={t.record} value={fmt(stats.best)} color={C}/>
            <StatChip label={t.games} value={stats.games||0} color={PAL.green}/>
            <StatChip label={t.revChronoWins} value={stats.wins||0} color={PAL.gold}/>
          </div>
          <ProgressPanel t={t} stats={{...stats,sessions:(stats.sessions||[]).filter(s=>s.won)}} color={C}/>
        </>
      )}
      {ph==="count"&&(
        <div style={{fontWeight:700,fontSize:110,color:PAL.gold,animation:"pop .3s ease-out",textShadow:`0 0 40px ${PAL.gold}66`}}>{count}</div>
      )}
      {ph==="playing"&&(
        <>
          <SkinSpinCube skin={skin} size={Math.min(170,window.innerWidth*.42)} glow={C} onClick={stop}/>
          <div style={{marginTop:8,fontSize:18,color:"#ffffff",fontWeight:700}}>{t.cubePlay}</div>
          <div style={{fontSize:15,color:"#ffffff",fontWeight:600,marginTop:6,opacity:.9}}>
            {t.tapCube}{isDesktop&&<span style={{opacity:.8,fontSize:13}}> {t.spaceStop}</span>}
          </div>
        </>
      )}
      {ph==="done"&&(
        <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>
          {isRecord&&<Confetti/>}
          <div style={{fontSize:64}}>{failed?"⌛":"🎉"}</div>
          <div style={{fontWeight:700,fontSize:19,color:failed?PAL.red:PAL.green,marginTop:6}}>{failed?t.revChronoFail:t.revChronoWin}</div>
          {isRecord&&<div style={{fontWeight:700,fontSize:17,color:PAL.gold,marginTop:8,animation:"wiggle .6s ease-in-out 3"}}>{t.newRecord}</div>}
          <div style={{marginTop:16,width:"100%",maxWidth:300}}><CandyBtn onClick={()=>setPh("ready")} color={C}>{t.replay}</CandyBtn></div>
        </div>
      )}
    </div>
  );
}

/* ═══ ÉCRAN UNIVERS — un cube, ses modes, bascule rapide ════════ */
function UniversScreen({ t, skin, setSkin, launch, onBack, openHelp }){
  const wide = useWide();
  const W = wide?760:380;
  const data = loadS();
  const dailyDone = data[skin]?.daily?.days?.[todayKey()] ?? null;
  const defs = {
    classic:{ logo:CLASSIC_LOGO, label:t.speedFace, sub:t.speedFaceSub },
    monstro:{ logo:LOGO, label:t.monstro, sub:t.monstroSub },
    sudoku: { logo:LG_SUDOKU, label:t.sudo, sub:t.sudoSub },
    illusion:{ logo:ILLUSION_LOGO, label:t.illusion, sub:t.illusionSub },
    sudomono:{ logo:SUDOMONO_LOGO, label:t.sudomono, sub:t.sudomonoSub },
    chesscube:{ logo:CHESS_LOGO, label:t.chesscube, sub:t.chesscubeSub },
  };
  const cur = defs[skin]; const c = SKINS[skin].color;
  const neon = skin==="sudoku";
  const wood = skin==="classic";
  const paper = skin==="monstro";
  const mono  = skin==="illusion";   /* noir et blanc, seules les cartes de mode sont colorées */
  const modes = [
    { id:"face",    icon:"🎯", title:t.faceTile,    sub:t.faceTileSub,    color:PAL.gold,   art:MD_FACE,    banner:"#fac750",
      mArt:MN_FACE,    mFrom:"#fdeea9", mTo:"#fdf4c8", mArrow:"#f0a318", sArt:SD_FACE,    sGlow:"#ffc61a", iIco:IL_FACE,    iCol:"#ffc61a" },
    { id:"reverse", icon:"⏳", title:t.reverseTile, sub:t.reverseTileSub, color:PAL.orange, art:MD_REVERSE, banner:"#ef8834",
      mArt:MN_REVERSE, mFrom:"#fdcd96", mTo:"#fde4c6", mArrow:"#e8621a", sArt:SD_REVERSE, sGlow:"#ff5a1e", iIco:IL_REVERSE, iCol:"#ff7a1e" },
    { id:"duel",    icon:"⚔️", title:t.duel,        sub:t.duelSub,        color:PAL.green,  art:MD_DUEL,    banner:"#6cb65e",
      mArt:MN_DUEL,    mFrom:"#bbf8c9", mTo:"#d8fbdf", mArrow:"#17a34a", sArt:SD_DUEL,    sGlow:"#3aee6b", iIco:IL_DUEL,    iCol:"#22e06a" },
    { id:"blind",   icon:"🙈", title:t.blind,       sub:t.blindSub,       color:PAL.blue,   art:MD_BLIND,   banner:"#4fa0e2",
      mArt:MN_BLIND,   mFrom:"#bde4fd", mTo:"#d8effe", mArrow:"#1d7fe0", sArt:SD_BLIND,   sGlow:"#43b0ff", iIco:IL_BLIND,   iCol:"#2f9bff" },
    { id:"motifs",  icon:"🔤", title:t.motifs,      sub:t.motifsSub,      color:PAL.pink,   art:MD_FACE,    banner:"#f7a8c4",
      mArt:MN_FACE,    mFrom:"#fdd3e6", mTo:"#fde8f2", mArrow:"#e0479a", sArt:SD_FACE,    sGlow:"#ff5ea8", iIco:IL_MOTIFS, iCol:"#ff3d9a" },
    { id:"chrono",  icon:"🧩", title:t.chrono,      sub:t.chronoSub,      color:PAL.purple, art:MD_CHRONO,  banner:"#b879e1",
      mArt:MN_CHRONO,  mFrom:"#e1bffd", mTo:"#eeddfe", mArrow:"#8b3fd4", sArt:SD_CHRONO,  sGlow:"#c65cff", iIco:IL_CHRONO,  iCol:"#a855f7" },
    { id:"duelsolve", icon:"🏆", title:t.duelSolveTile, sub:t.duelSolveSub, color:"#14b8a6", art:MD_DUEL,  banner:"#3fb5a0",
      mArt:MN_DUEL,    mFrom:"#b8f3ea", mTo:"#dcfaf5", mArrow:"#0f9d8f", sArt:SD_DUEL,    sGlow:"#2ee6cf", iIco:IL_DUEL,    iCol:"#14b8a6" },
    { id:"cube3d",  icon:"👆", title:t.cube3dTile,  sub:t.cube3dSub,      color:"#3cc4b4",  art:MD_CUBE3D,  banner:"#5fd3c4",
      mArt:MD_CUBE3D,  mFrom:"#c4f1ec", mTo:"#e0f8f5", mArrow:"#0f9d8f", sArt:MD_CUBE3D,  sGlow:"#3ce0cf", iIco:IL_CUBE3D,  iCol:"#3cc4b4" },
  ];
  /* Sudocube Mono : seulement de la résolution complète */
  if(FULL_SOLVE.includes(skin)){ const ch=modes.find(m=>m.id==="chrono"); modes.splice(0,modes.length,
    ch,
    { id:"chronorev", icon:"⏳", title:t.revChronoTile, sub:t.revChronoSub, color:PAL.orange },
    { id:"duelsolve", icon:"⚔️", title:t.duel,          sub:t.duelSolveSub, color:PAL.green },
    { id:skin==="chesscube"?"chess3d":"sudo3d", icon:"👆", title:t.cube3dTile, sub:t.cube3dSub, color:SKINS[skin].color }); }
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 48px",minHeight:"100vh",position:"relative",zIndex:1}}>
      {neon&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:SUDO_BG}}/>}
      {wood&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #fffdf8 0%, #fbeed8 55%, #f3ddb8 100%)"}}/>}
      {paper&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #ffffff 0%, #eef1f4 55%, #dfe3e8 100%)"}}/>}
      {mono&&<div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"radial-gradient(circle at 50% -10%, #1c1c1e 0%, #0d0d0f 55%, #000000 100%)"}}/>}
      {paper ? (
        <div style={{width:"100%",maxWidth:W,display:"flex",alignItems:"center",gap:10,marginBottom:18}}>
          <GhostBtn onClick={onBack} color="#132a4d" bg="#ffffff" border="#2a4570" shadow="#2a4570">{t.menu}</GhostBtn>
          <PlayerBadge tone="paper" t={t}/>
          <img key={skin} src={cur.logo} alt={cur.label} draggable={false}
            style={{flex:1,minWidth:0,maxHeight:92,objectFit:"contain",animation:"pop .3s ease-out",
              filter:"drop-shadow(0 6px 14px rgba(19,42,77,.28))"}}/>
        </div>
      ) : (
      <div style={{width:"100%",maxWidth:W,display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
        <GhostBtn onClick={onBack} color={mono?"#0d0d0d":(wood?"#4a3418":c)} bg={mono?"#ffffff":(wood?"#fbeed8":undefined)} border={mono?"#ffffff":(wood?"#c69c6d":undefined)} shadow={mono?"#8a8a8f":(wood?"#8a6539":undefined)}>{t.menu}</GhostBtn>
        <span style={{marginLeft:"auto"}}><PlayerBadge tone={wood?"wood":(neon?"neon":undefined)} t={t}/></span>
      </div>
      )}

      {/* Logo du cube courant */}
      {!paper&&<div key={skin} style={{width:"100%",maxWidth:W,display:"flex",alignItems:"center",justifyContent:"center",minHeight:140,padding:"4px 0",animation:"pop .3s ease-out"}}>
        {cur.logo
          ? <img src={cur.logo} alt={cur.label} draggable={false} style={{width:"100%",maxWidth:280,maxHeight:180,objectFit:"contain",filter:`drop-shadow(0 10px 26px rgba(0,0,0,.5)) drop-shadow(0 0 18px ${c}33)`}}/>
          : <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
              <ClassicEmblem/>
              <div style={{fontWeight:700,fontSize:24,color:PAL.text,letterSpacing:1.5,textShadow:`0 3px 0 ${PAL.cardHi}`}}>{t.speedFace}</div>
              <div style={{fontSize:12,color:PAL.textDim,fontWeight:600}}>{cur.sub}</div>
            </div>}
      </div>}

      {paper
        ? <MonstroHelpCard art={MN_HELP} title={t.helpCardTitle} sub={t.helpCardSub} onClick={openHelp}/>
        : <button onClick={openHelp} style={{marginBottom:20,background:mono?"#ffffff":neon?"#161236":(wood?"#fbeed8":(paper?"#eef2f7":`linear-gradient(135deg,${PAL.purple}55,${PAL.card})`)),border:`2px solid ${mono?"#ffffff":neon?c:(wood?"#c69c6d":(paper?"#2a4570":PAL.gold))}`,borderRadius:16,padding:"12px 22px",color:mono?"#0d0d0d":wood?"#4a3418":(paper?"#132a4d":"#ffffff"),fontWeight:700,fontSize:15,cursor:"pointer",boxShadow:mono?"0 4px 0 #8a8a8f":neon?`0 4px 0 ${PAL.bg2}, 0 0 14px ${c}55`:(wood?`0 4px 0 #8a6539`:(paper?`0 4px 0 #2a4570`:`0 4px 0 ${PAL.bg2}`))}}>{t.howTo}</button>}

      {/* Bascule rapide entre les 3 cubes */}
      <SectionLabel wood={wood}>{t.switchCube}</SectionLabel>
      <div style={{display:"flex",gap:6,width:"100%",maxWidth:W,justifyContent:"center",flexWrap:"wrap"}}>
        {["monstro","classic","sudoku","illusion"].map(id=>{
          const active = skin===id; const cc = SKINS[id].color;
          const label = id==="classic"?t.classic:(id==="monstro"?t.monstro:(id==="sudoku"?t.sudo:t.illusion));
          return (
            <button key={id} onClick={()=>setSkin(id)} style={{flex:1,minWidth:84,maxWidth:100,border:"none",cursor:"pointer",borderRadius:14,padding:"11px 4px",
              background:mono?(active?"#ffffff":"#1a1a1c"):active?`linear-gradient(180deg,${shade(cc,30)},${cc} 45%)`:(neon?"#161236":(wood?"#fbeed8":(paper?"#ffffff":PAL.card))),
              color:mono?(active?"#0d0d0d":"#c9c9cf"):active?"#1a1228":(wood?"#4a3418":(paper?"#132a4d":PAL.textDim)),fontWeight:700,fontSize:12,
              boxShadow:mono?(active?"0 4px 0 #8a8a8f":"0 0 0 2px #3a3a40"):active?`0 4px 0 ${shade(cc,-40)}, inset 0 2px 4px rgba(255,255,255,.4)`:(wood?`0 4px 0 #8a6539, 0 0 0 2px #c69c6d`:(paper?`0 4px 0 #2a4570, 0 0 0 2px #2a4570`:`0 4px 0 ${PAL.bg2}, 0 0 0 2px ${neon?c:PAL.gold}`)),
              transition:"all .12s"}}><span style={{opacity:.9,marginRight:5}}>{SKINS[id].emoji}</span>{label}</button>
          );
        })}
      </div>

      {/* Défi du jour (pas pour le Sudocube Mono : il repose sur une face à reproduire) */}
      {!FULL_SOLVE.includes(skin)&&<button onClick={()=>launch("daily")} style={{marginTop:18,width:"100%",maxWidth:W,border:"none",cursor:"pointer",
        background:neon?`linear-gradient(135deg,${c},#120e30)`:(wood?`linear-gradient(135deg,#c69c6d,#8a6539)`:(paper?`linear-gradient(135deg,#3a5a8c,#132a4d)`:`linear-gradient(135deg,${PAL.purple},${shade(PAL.purple,-40)})`)),borderRadius:18,padding:"13px 16px",
        display:"flex",alignItems:"center",gap:12,boxShadow:neon?`0 5px 0 #120e30, 0 8px 22px ${c}66, 0 0 0 2px ${c}`:(wood?`0 5px 0 #5c451f, 0 8px 20px #8a653966, 0 0 0 2px #fbeed8`:(paper?`0 5px 0 #0a1a30, 0 8px 20px #13284d66, 0 0 0 2px #ffffff`:`0 5px 0 ${shade(PAL.purple,-60)}, 0 8px 22px ${PAL.purple}44, 0 0 0 2px ${PAL.gold}`))}}>
        <span style={{fontSize:24}}>{dailyDone!=null?"🔒":"🗓️"}</span>
        <div style={{textAlign:"left",flex:1}}>
          <div style={{fontWeight:700,fontSize:15,color:"#fff"}}>{t.daily}</div>
          <div style={{fontSize:11,color:"#ffffffcc",fontWeight:600}}>
            {dailyDone!=null?`${t.dailyDone} ${fmt(dailyDone)} ✓`:t.dailyTodo}
          </div>
        </div>
        <span style={{fontSize:20,color:"#fff",opacity:dailyDone!=null?.6:1}}>→</span>
      </button>}

      {/* Modes */}
      <SectionLabel wood={wood}>{t.chooseMode}</SectionLabel>
      <div className="stagger" style={{width:"100%",maxWidth:W,display:wide?"grid":"flex",
        gridTemplateColumns:wide?"1fr 1fr":undefined,flexDirection:wide?undefined:"column",gap:12}}>
        {modes.map(m=>(
          wood
            ? <WoodModeTile key={m.id} art={m.art} banner={m.banner} title={m.title} sub={m.sub} onClick={()=>launch(m.id)}/>
            : paper
              ? <MonstroModeTile key={m.id} art={m.mArt} from={m.mFrom} to={m.mTo} arrow={m.mArrow} title={m.title} sub={m.sub} onClick={()=>launch(m.id)}/>
              : neon
                ? <SudoModeTile key={m.id} art={m.sArt} glow={m.sGlow} title={m.title} sub={m.sub} onClick={()=>launch(m.id)}/>
                : mono
                  ? <IllusionModeTile key={m.id} icon={m.iIco} color={m.iCol} title={m.title} sub={m.sub} onClick={()=>launch(m.id)}/>
                  : <ModeTile key={m.id} m={m} onClick={()=>launch(m.id)} neon={neon} wood={wood} paper={paper}/>
        ))}
      </div>

      {/* Accès au tableau de progression de cet univers */}
      {(paper||wood||mono) ? (
        <div style={{width:"100%",maxWidth:W,marginTop:14}}>
          <LogoBtn img={mono?PROG_ILLUSION:(paper?PROG_MONSTRO:PROG_PAPER)} alt={t.progressTitle} onClick={()=>launch("progress")}/>
        </div>
      ) : (
      <button onClick={()=>launch("progress")}
        style={{width:"100%",maxWidth:W,marginTop:16,border:"none",cursor:"pointer",borderRadius:18,
          padding:"14px 18px",display:"flex",alignItems:"center",gap:11,
          background:mono?"#ffffff":paper?"#ffffff":(wood?"#fffaf0":(neon?"#1c1745":PAL.card)),
          color:mono?"#111111":paper?"#132a4d":(wood?"#4a3418":PAL.text),
          boxShadow:mono?"0 4px 0 #111111, 0 0 0 2.5px #111111"
                 :paper?"0 4px 0 #c4d6e8, 0 0 0 2.5px #132a4d"
                 :(wood?"0 4px 0 #8a6539, 0 0 0 2.5px #c69c6d"
                 :(neon?`0 0 0 2px ${c}, 0 0 14px ${c}77`:`0 4px 0 ${PAL.bg2}, 0 0 0 2px ${PAL.gold}`))}}>
        <span style={{fontSize:22,flexShrink:0}}>📊</span>
        <span style={{flex:1,minWidth:0,textAlign:"left",fontWeight:800,fontSize:15}}>{t.progressTitle}</span>
        <span style={{fontSize:20,opacity:.7}}>›</span>
      </button>
      )}

      {paper&&(
        <img src={MONSTRO_PHOTO} alt={t.monstro} style={{width:"100%",maxWidth:280,borderRadius:18,marginTop:22,
          boxShadow:`0 4px 0 #2a4570, 0 0 0 3px #ffffff, 0 8px 18px rgba(0,0,0,.35)`}}/>
      )}
      {neon&&(
        <img src={SUDO_PHOTO} alt={t.sudo} style={{width:"100%",maxWidth:280,borderRadius:18,marginTop:22,
          boxShadow:`0 4px 0 #2a2370, 0 0 0 3px ${SKINS.sudoku.color}, 0 8px 20px ${SKINS.sudoku.color}55`}}/>
      )}
    </div>
  );
}
function ModeTile({ m, onClick, neon, wood, paper, mono }){
  const [press,setPress]=useState(false);
  const ring = mono ? "#111111" : (neon ? SKINS.sudoku.color : (wood ? "#c69c6d" : (paper ? "#2a4570" : PAL.gold)));
  return (
    <button onClick={onClick} onPointerDown={()=>setPress(true)} onPointerUp={()=>setPress(false)} onPointerLeave={()=>setPress(false)}
      style={{width:"100%",border:"none",cursor:"pointer",background:mono?`linear-gradient(135deg,${m.color}55,#ffffff)`:neon?`linear-gradient(135deg,${m.color}33,#161236)`:(wood?`linear-gradient(135deg,${m.color}33,#fffaf0)`:(paper?`linear-gradient(135deg,${m.color}4d,#f3f6fa)`:`linear-gradient(135deg,${m.color}1f,${PAL.card})`)),
        borderRadius:20,padding:"16px 18px",display:"flex",alignItems:"center",gap:14,textAlign:"left",
        boxShadow:press?`0 2px 0 ${mono?"#111111":wood?"#8a6539":(paper?"#2a4570":PAL.bg2)}, 0 0 0 ${paper?3:2}px ${ring}`:`0 6px 0 ${mono?"#111111":wood?"#8a6539":(paper?"#2a4570":PAL.bg2)}, 0 0 0 ${paper||mono?3:2}px ${ring}${neon?", 0 0 16px "+ring+"66":""}`,
        transform:press?"translateY(4px)":"none",transition:"all .1s"}}>
      <div style={{width:54,height:54,borderRadius:16,background:`linear-gradient(180deg,${shade(m.color,30)},${m.color} 50%)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:27,flexShrink:0,boxShadow:`0 4px 0 ${shade(m.color,-40)}, inset 0 2px 3px rgba(255,255,255,.5)`,transform:press?"scale(.93)":"scale(1)",transition:"transform .1s"}}>{m.icon}</div>
      <div style={{flex:1,minWidth:0}}>
        <div style={{fontWeight:700,fontSize:18,color:mono?"#111111":wood?"#4a3418":(paper?"#132a4d":PAL.text),letterSpacing:.5}}>{m.title}</div>
        <div style={{fontSize:12,color:mono?"#555555":wood?"#8a6539":(paper?"#2a4570":PAL.textDim),fontWeight:500,marginTop:2}}>{m.sub}</div>
      </div>
      <span style={{fontSize:20,color:m.color}}>→</span>
    </button>
  );
}


/* ═══ ÉCRAN CIVILISATION ANCIENNE ═══════════════════════════════ */
function CiviScreen({ onBack, t, kids, toggleKids, onChrono, on3d }){
  const wide = useWide();
  const W = wide?760:420;
  const [sel,setSel] = useState(null);
  const [open,setOpen] = useState(null);
  const s = CIVI.find(x=>x.id===sel);

  const lvl = (()=>{ const i = t.ageToggleHint.indexOf(":");
    return i>0 ? [t.ageToggleHint.slice(0,i+1), t.ageToggleHint.slice(i+1).trim()] : [t.ageToggleHint,""]; })();

  if(!s) return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"18px 14px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
      <div style={{position:"fixed",inset:0,zIndex:-1,pointerEvents:"none",
        background:"linear-gradient(180deg,#f4faff 0%,#e4f1fd 55%,#d9eafa 100%)"}}/>

      {/* En-tête : retour + titre */}
      <div style={{width:"100%",maxWidth:W,display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
        <GhostBtn onClick={onBack} color="#132a4d" bg="#ffffff" border="#2a4570" shadow="#2a4570">{t.menu}</GhostBtn>
        <div style={{flex:1,minWidth:0,textAlign:"right"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8}}>
            <span style={{fontSize:26,lineHeight:1}}>🏛️</span>
            <span style={{fontWeight:800,fontSize:22,lineHeight:1.1,color:"#ffcf3f",
              textShadow:"2px 0 0 #132a4d, -2px 0 0 #132a4d, 0 2px 0 #132a4d, 0 -2px 0 #132a4d, 0 5px 10px rgba(19,42,77,.3)"}}>{t.civi}</span>
          </div>
          <div style={{fontSize:12.5,fontWeight:600,color:"#4a6a96",marginTop:6}}>{t.civiSub}</div>
        </div>
      </div>

      {/* Visuel du cube */}
      <img src={CIVI_PHOTO} alt={t.civi} draggable={false}
        style={{width:"100%",maxWidth:W,borderRadius:20,marginBottom:14,display:"block",
          boxShadow:"0 0 0 3px #ffcf3f, 0 6px 18px rgba(19,42,77,.25)"}}/>

      {/* Résoudre le cube : chrono résolution complète + cube 3D */}
      <KnowSolveModes t={t} W={W} onChrono={onChrono} on3d={on3d}/>

      {/* Mode d'emploi */}
      <div style={{width:"100%",maxWidth:W,display:"flex",alignItems:"flex-start",gap:11,marginBottom:12,
        background:"linear-gradient(180deg,#fff9e3,#fdefc6)",borderRadius:18,padding:"14px 15px",
        boxShadow:"0 0 0 2px #f0c33c, 0 4px 12px rgba(19,42,77,.12)"}}>
        <span style={{fontSize:26,flexShrink:0,lineHeight:1.1}}>💡</span>
        <span style={{fontSize:13.5,color:"#132a4d",fontWeight:700,lineHeight:1.5,textAlign:"left"}}>
          {t.civiIntro.replace("🌍 ","")}
        </span>
      </div>

      {/* Niveau de lecture */}
      <div style={{width:"100%",maxWidth:W,display:"flex",alignItems:"flex-start",gap:11,marginBottom:12,
        background:"linear-gradient(180deg,#ecf7ff,#dcefff)",borderRadius:18,padding:"14px 15px",
        boxShadow:"0 0 0 2px #6bb6f0, 0 4px 12px rgba(19,42,77,.1)"}}>
        <span style={{fontSize:26,flexShrink:0,lineHeight:1.1}}>🎓</span>
        <div style={{textAlign:"left"}}>
          <div style={{fontSize:14,fontWeight:800,color:"#132a4d",lineHeight:1.3}}>{lvl[0]}</div>
          {lvl[1]&&<div style={{fontSize:12.5,fontWeight:600,color:"#4a6a96",lineHeight:1.45,marginTop:3}}>{lvl[1]}</div>}
        </div>
      </div>

      {/* Bascule Ado&Adulte / Enfant */}
      <div style={{width:"100%",maxWidth:W,display:"flex",gap:10,marginBottom:14}}>
        {[{v:false,label:t.teenLabel},{v:true,label:t.kidsLabel}].map(o=>{
          const on = kids===o.v;
          return (
            <button key={String(o.v)} onClick={()=>toggleKids(o.v)}
              style={{flex:1,border:"none",cursor:"pointer",borderRadius:16,padding:"13px 6px",
                background:on?"linear-gradient(180deg,#ffe27a,#f5bd1f)":"#ffffff",
                color:"#132a4d",fontWeight:800,fontSize:14.5,
                boxShadow:on?"0 4px 0 #c98f0a, 0 0 0 2.5px #132a4d":"0 4px 0 #c4d6e8, 0 0 0 2.5px #132a4d",
                transition:"all .12s"}}>{o.label}</button>
          );
        })}
      </div>

      {/* Les six civilisations */}
      <div className="stagger" style={{width:"100%",maxWidth:W,display:"grid",gridTemplateColumns:wide?"1fr 1fr 1fr":"1fr 1fr",gap:12}}>
        {CIVI.map(sv=>{
          /* la carte prend la couleur de la civilisation : Rapa Nui en blanc, Maya en jaune */
          const cc = sv.color;
          return (
          <button key={sv.id} onClick={()=>{setSel(sv.id);setOpen(null);}}
            style={{border:"none",cursor:"pointer",padding:0,background:"transparent",display:"block",height:"100%"}}>
            <div style={{position:"relative",overflow:"hidden",borderRadius:20,padding:"12px 10px",
              display:"flex",alignItems:"center",gap:9,minHeight:112,height:"100%",boxSizing:"border-box",
              background:`linear-gradient(135deg,${shade(cc,22)},${shade(cc,-22)})`,
              boxShadow:`0 5px 0 ${shade(cc,-80)}, 0 0 0 2.5px #132a4d, 0 6px 16px rgba(19,42,77,.22)`}}>
              <span style={{position:"absolute",right:6,top:4,fontSize:30,opacity:.22,pointerEvents:"none"}}>{sv.emoji}</span>
              <div style={{width:68,height:68,borderRadius:"50%",overflow:"hidden",flexShrink:0,
                display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,
                background:sv.tiles?"transparent":`linear-gradient(180deg,${shade(cc,30)},${cc} 55%)`,
                boxShadow:`0 0 0 3px #132a4d, 0 3px 8px rgba(19,42,77,.3)`}}>
                {sv.tiles
                  ? <img src={sv.tiles[4]} alt={sv.name} draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                  : sv.emoji}
              </div>
              <div style={{flex:1,minWidth:0,position:"relative",textAlign:"left"}}>
                <div style={{fontWeight:800,fontSize:13.5,color:"#132a4d",lineHeight:1.2}}>{sv.name}</div>
                <div style={{fontSize:10.5,color:"#2a4570",fontWeight:600,lineHeight:1.3,marginTop:3}}>{sv.tag}</div>
                <div style={{fontSize:11,color:shade(cc,-105),fontWeight:800,marginTop:7}}>8 {t.symbols} →</div>
              </div>
            </div>
          </button>
          );
        })}
      </div>
    </div>
  );

  const posOfIdx = {};
  for(let i=0;i<9;i++){ const ix = s.order ? s.order[i] : (i===4?-1:(i<4?i:i-1)); if(ix>=0) posOfIdx[ix]=i; }

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 44px",minHeight:"100vh",position:"relative",zIndex:1}}>
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

      {/* Grille des 8 symboles + l'emblème central, et sa définition */}
      <div style={{display:"flex",flexDirection:wide?"row":"column",alignItems:wide?"flex-start":"center",
        justifyContent:"center",gap:24,width:"100%",maxWidth:wide?720:undefined,flexWrap:"wrap"}}>
      <div style={{width:Math.min(300,window.innerWidth-60),background:"#171327",borderRadius:22,padding:6,
        display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,marginBottom:18,boxShadow:"0 10px 30px rgba(0,0,0,.45)",flexShrink:0}}>
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
      <div style={{width:"100%",maxWidth:380,flex:wide?"1 1 300px":undefined}}>
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
    </div>
  );
}

/* Boutons « Résous le cube » des pages Scientifiques et Civilisations */
function KnowSolveModes({ t, W, onChrono, on3d }){
  const tile = (icon, title, sub, color, onClick)=>(
    <button onClick={onClick} style={{flex:1,minWidth:0,border:"none",cursor:"pointer",borderRadius:18,padding:"13px 10px",
      display:"flex",flexDirection:"column",alignItems:"center",gap:5,textAlign:"center",
      background:`linear-gradient(180deg,#ffffff,${color}2e)`,
      boxShadow:`0 4px 0 ${shade(color,-40)}, 0 0 0 2.5px ${color}`}}>
      <span style={{width:46,height:46,borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,
        background:`linear-gradient(180deg,${shade(color,30)},${color} 55%)`,boxShadow:`0 3px 0 ${shade(color,-45)}`}}>{icon}</span>
      <span style={{fontWeight:800,fontSize:15.5,color:"#132a4d",letterSpacing:.3,lineHeight:1.1}}>{title}</span>
      <span style={{fontWeight:600,fontSize:11.5,color:"#4a6a96",lineHeight:1.3}}>{sub}</span>
    </button>);
  return (
    <div style={{width:"100%",maxWidth:W,marginBottom:14}}>
      <div style={{fontSize:12,fontWeight:800,letterSpacing:1.5,color:"#4a6a96",margin:"2px 0 9px",textAlign:"left"}}>{t.knowSolveTitle.toUpperCase()}</div>
      <div style={{display:"flex",gap:10}}>
        {tile("🧩", t.chrono, t.knowChronoSub, "#8a5cff", onChrono)}
        {tile("👆", t.cube3dTile, t.cube3dSub, "#14b8a6", on3d)}
      </div>
    </div>
  );
}

/* ═══ APP ═══════════════════════════════════════════════════════ */
export default function App(){
  const [screen,setScreen] = useState(()=>{ if(!isOnboarded()) finishOnboarding("", ""); return "home"; });   // home | univers | challenge | duel | chrono …
  const [skin,setSkinRaw] = useState(()=>{
    const s = loadS().skin;
    return SKINS[s] ? s : "classic";   // ancien skin supprimé (ex. sudocouleur) -> repli
  });
  const [lang,setLang] = useState(()=>loadS().lang||"fr");
  const [kids,setKids] = useState(()=>loadS().kids||false);
  function toggleKids(k){ setKids(k); const d=loadS(); d.kids=k; saveS(d); }
  Object.assign(PAL, THEMES.dark);
  const [showHelp,setShowHelp] = useState(false);
  const [showProfiles,setShowProfiles] = useState(false);
  const [profTick,setProfTick] = useState(0);
  const [drillIdx,setDrillIdx] = useState(0);
  const [kSkin,setKSkin] = useState("savants");   /* page Savoir d'où l'on vient (chrono / cube 3D) */
  const t = TR[lang];

  useEffect(()=>{
    const l=document.createElement("link");
    l.href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap";
    l.rel="stylesheet"; document.head.appendChild(l);
  },[]);

  // ─── Remonte tout en haut à chaque changement d'écran ───────────
  useEffect(()=>{ window.scrollTo(0,0); },[screen]);

  // ─── Anti-veille : garde l'écran allumé en permanence (Wake Lock API) ───
  const wakeRef = useRef(null);
  const wakeBusy = useRef(false);
  useEffect(()=>{
    let alive = true;
    async function acquire(){
      if(!("wakeLock" in navigator)) return;
      if(wakeRef.current || wakeBusy.current) return;          // déjà pris / en cours
      if(document.visibilityState!=="visible") return;         // refusé si l'onglet est caché
      wakeBusy.current = true;
      try{
        const lock = await navigator.wakeLock.request("screen");
        if(!alive){ try{ lock.release(); }catch(e){} return; }
        wakeRef.current = lock;
        // Le navigateur peut relâcher le verrou tout seul : on le note pour pouvoir le reprendre
        lock.addEventListener("release", ()=>{ wakeRef.current = null; });
      }catch(e){ /* non supporté, HTTP, ou refusé : on ignore silencieusement */ }
      finally{ wakeBusy.current = false; }
    }
    function onVis(){ if(document.visibilityState==="visible") acquire(); }
    function onInteract(){ acquire(); }   // certains navigateurs exigent un geste utilisateur

    acquire();
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("focus", onVis);
    window.addEventListener("pointerdown", onInteract);
    window.addEventListener("touchstart", onInteract, {passive:true});

    return ()=>{
      alive = false;
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("focus", onVis);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("touchstart", onInteract);
      try{ if(wakeRef.current){ wakeRef.current.release(); wakeRef.current=null; } }catch(e){}
    };
  },[]);

  function setSkin(s){ setSkinRaw(s); const d=loadS(); d.skin=s; saveS(d); }
  function toggleLang(){ const nl=lang==="fr"?"en":"fr"; setLang(nl); const d=loadS(); d.lang=nl; saveS(d); }
  function onWelcomeFinish(name, emoji){
    finishOnboarding(name, emoji);
    setProfTick(x=>x+1);
    setScreen("home");
  }
  const back = ()=>setScreen("home");
  const toUnivers = ()=>setScreen("univers");

  return (
    <div style={{minHeight:"100vh",background:PAL.bg,color:PAL.text,fontFamily:"'Fredoka',sans-serif",position:"relative"}}>
      <GlobalStyles/>
      <Bg/>
      {showHelp&&<HowToPlay t={t} skin={skin} onClose={()=>setShowHelp(false)}/>}
      {showProfiles&&<ProfileModal t={t} onClose={()=>setShowProfiles(false)} onChange={()=>setProfTick(x=>x+1)}/>}
      <div key={profTick} style={{paddingBottom:NAV_SCREENS.includes(screen)?66:0}}>
        {screen==="home"&&<HomeScreen t={t} setSkin={setSkin} launch={setScreen} openHelp={()=>setShowHelp(true)} lang={lang} toggleLang={toggleLang} profile={currentProfile()} openProfiles={()=>setShowProfiles(true)}/>}
        {screen==="univers"&&<UniversScreen t={t} skin={skin} setSkin={setSkin} launch={setScreen} onBack={()=>setScreen("home")} openHelp={()=>setShowHelp(true)}/>}
        {screen==="face"&&<ChallengeScreen onBack={toUnivers} t={t} skin={skin} forceMode="normal"/>}
        {screen==="reverse"&&<ChallengeScreen onBack={toUnivers} t={t} skin={skin} forceMode="reverse"/>}
        {screen==="daily"&&<ChallengeScreen onBack={toUnivers} t={t} skin={skin} daily/>}
        {screen==="duel"&&<DuelScreen onBack={toUnivers} t={t} skin={skin}/>}
        {screen==="blind"&&<ChallengeScreen onBack={toUnivers} t={t} skin={skin} forceMode="blind"/>}
        {screen==="motifs"&&<ChallengeScreen onBack={toUnivers} t={t} skin={skin} forceMode="motifs"/>}
        {screen==="civi"&&<CiviScreen onBack={()=>setScreen("home")} t={t} kids={kids} toggleKids={toggleKids}
          onChrono={()=>{ setKSkin("civi"); setScreen("kchrono"); }} on3d={()=>{ setKSkin("civi"); setScreen("k3d"); }}/>}
        {screen==="chrono"&&<ChronoScreen onBack={FULL_SOLVE.includes(skin)?toUnivers:back} t={t} skin={skin}/>}
        {screen==="hchrono"&&<ChronoScreen onBack={back} t={t} skin={skin} pick/>}
        {screen==="splitrace"&&<SplitRaceScreen onBack={back} t={t}/>}
        {screen==="chess3d"&&<ChessCubeScreen onBack={toUnivers} t={t}/>}
        {screen==="cube3d"&&(skin==="classic" ? <ClassicCubeScreen onBack={toUnivers} t={t}/> : <TilesCubeScreen key={skin} onBack={toUnivers} t={t} id={skin}/>)}
        {screen==="chronorev"&&<ChronoRevScreen onBack={toUnivers} t={t} skin={skin}/>}
        {screen==="duelsolve"&&<DuelScreen onBack={toUnivers} t={t} skin={skin} full/>}
        {screen==="sudo3d"&&<SudoMonoCubeScreen onBack={toUnivers} t={t}/>}
        {screen==="drills"&&<StageDrillPicker onBack={back} t={t} openDrill={(i)=>{ setDrillIdx(i); setScreen("drill"); }} openProgress={()=>setScreen("drillProgress")}/>}
        {screen==="drillProgress"&&<DrillProgressScreen onBack={()=>setScreen("drills")} t={t}/>}
        {screen==="drill"&&<StageDrillScreen onBack={()=>setScreen("drills")} t={t} targetIdx={drillIdx}/>}
        {screen==="savants"&&<SavantsScreen onBack={back} t={t} kids={kids} toggleKids={toggleKids}
          onChrono={()=>{ setKSkin("savants"); setScreen("kchrono"); }} on3d={()=>{ setKSkin("savants"); setScreen("k3d"); }}/>}
        {screen==="kchrono"&&<ChronoScreen onBack={()=>setScreen(kSkin)} t={t} skin={kSkin}/>}
        {screen==="k3d"&&<TilesCubeScreen onBack={()=>setScreen(kSkin)} t={t} id={kSkin}/>}
        {screen==="tuto"&&<TutoScreen onBack={back} t={t}/>}
        {screen==="progress"&&<ProgressScreen t={t} skin={skin} onBack={toUnivers} launch={setScreen}/>}
      </div>

      {/* Barre de navigation — uniquement sur les écrans principaux */}
      {NAV_SCREENS.includes(screen)&&(
        <div style={{position:"fixed",left:0,right:0,bottom:0,zIndex:60,display:"flex",
          background:PAL.card,boxShadow:`0 -4px 20px rgba(0,0,0,.4), 0 0 0 2px ${PAL.gold}`,
          paddingBottom:"env(safe-area-inset-bottom, 0px)"}}>
          {[
            {id:"home",icon:"🏠",label:t.navHome,onClick:()=>setScreen("home")},
            {id:"tuto",icon:"🎓",label:t.tuto,onClick:()=>setScreen("tuto")},
            {id:"help",icon:"❓",label:t.navTuto,onClick:()=>setShowHelp(true)},
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
