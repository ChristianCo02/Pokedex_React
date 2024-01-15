import React, { useState } from 'react';
import "./Card.css";
const coloreTipo = (tipo) => {
  switch (tipo.toLowerCase()) {
    case 'erba':
      return 'rgb(55, 149, 34)';  
      case 'fuoco':
        return 'rgb(184, 21, 22)';  
        case 'volante':
          return 'rgb(86, 149, 210)';  
          case 'veleno':
            return 'rgb(101, 30, 152)';  
            case 'acqua':
              return 'rgb(41, 128, 239)'; 
              case 'coleottero':
              return 'rgb(145, 161, 25)'; 
              case 'normale':
                return 'rgb(159, 161, 159)'; 
                case 'elettro':
                  return 'rgb(200, 154, 0'; 
                  case 'terra':
                    return 'rgb(107, 55, 15)'; 
                    case 'folletto':
                      return 'rgb(212, 76, 212)'; 
                      case 'lotta':
                      return 'rgb(201, 101, 0)'; 
                      case 'psico':
                      return 'rgb(191, 28, 80)'; 
                      case 'roccia':
                        return 'rgb(139, 131, 84)';
                        case 'acciaio':
                          return 'rgb(65, 129, 153)';
                          case 'spettro':
                            return 'rgb(87, 39, 87)';
                            case 'ghiaccio':
                              return 'rgb(38, 191, 230)';
                              case 'drago':
                              return 'rgb(46, 62, 189)';
                              
                            
                    
    default:
      return 'white';  
  }
};
const Card = () => {
  const Immagini = () => {
    const immagini = [
      {
        PokedexNum: "001",
        nome: 'Bulbasaur',
        tipo: 'Erba',
        tipo2: 'Veleno',
        url: 'public/600px-Artwork0001_RFVF.webp'
      },
      {
        PokedexNum: "002",
        nome: 'Ivysaur',
        tipo: 'Erba',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0002_RFVF.webp'
      },
      {
        PokedexNum: "003",
        nome: 'Venusaur',
        tipo: 'Erba',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0003_RFVF.webp'
      },
      {
        PokedexNum: "004",
        nome: 'Charmander',
        tipo: 'Fuoco',
        tipo2: '',
        url: 'public/200px-Artwork0004_RFVF.webp'
      },
      {
        PokedexNum: "005",
        nome: 'Charmeleon',
        tipo: 'Fuoco',
        tipo2: '',
        url: 'public/200px-Artwork0005_RFVF.webp'
      },
      {
        PokedexNum: "006",
        nome: 'Charizard',
        tipo: 'Fuoco',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0006_RFVF.webp'
      },
      {
        PokedexNum: "007",
        nome: 'Squirtle',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0007_RFVF.webp'
      },
      {
        PokedexNum: "008",
        nome: 'Wartortle',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0008_RFVF.webp'
      },
      {
        PokedexNum: "009",
        nome: 'Blastoise',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0009_RFVF.webp'
      },
      {
        PokedexNum: "010",
        nome: 'Caterpie',
        tipo: 'Coleottero',
        tipo2: '',
        url: 'public/200px-Artwork0010_RFVF.webp'
      },
      {
        PokedexNum: "011",
        nome: 'Metapod',
        tipo: 'Coleottero',
        tipo2: '',
        url: 'public/200px-Artwork0011_RFVF.webp'
      },
      {
        PokedexNum: "012",
        nome: 'Butterfree',
        tipo: 'Coleottero',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0012_RFVF.webp'
      },
      {
        PokedexNum: "013",
        nome: 'Weedle',
        tipo: 'Coleottero',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0013_RFVF.webp'
      },
      {
        PokedexNum: "014",
        nome: 'Kakuna',
        tipo: 'Coleottero',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0014_RFVF.webp'
      },
      {
        PokedexNum: "015",
        nome: 'Beedrill',
        tipo: 'Coleottero',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0015_RFVF.webp'
      },
      {
        PokedexNum: "016",
        nome: 'Pidgey',
        tipo: 'Normale',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0016_RFVF.webp'
      },
      {
        PokedexNum: "017",
        nome: 'Pidgeotto',
        tipo: 'Normale',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0017_RFVF.webp'
      },
      {
        PokedexNum: "018",
        nome: 'Pidgeot',
        tipo: 'Normale',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0018_RFVF.webp'
      },
      {
        PokedexNum: "019",
        nome: 'Rattata',
        tipo: 'Normale',
        tipo2: '',
        url: 'public/200px-Artwork0019_RFVF.webp'
      },
      {
        PokedexNum: "020",
        nome: 'Raticate',
        tipo: 'Normale',
        tipo2: '',
        url: 'public/200px-Artwork0020_RFVF.webp'
      },
      {
        PokedexNum: "021",
        nome: 'Spearow',
        tipo: 'Normale',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0021_RFVF.webp'
      },
      { 
        PokedexNum: "022",
        nome: 'Fearow',
        tipo: 'Normale',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0022_RFVF.webp'
      },
      { 
        PokedexNum: "023",
        nome: 'Ekans',
        tipo: 'Veleno',
        tipo2: '',
        url: 'public/200px-Artwork0023_RFVF.webp'
      },
      { 
        PokedexNum: "024",
        nome: 'Arbok',
        tipo: 'Veleno',
        tipo2: '',
        url: 'public/200px-Artwork0024_RFVF.webp'
      },
      { 
        PokedexNum: "025",
        nome: 'Pikachu',
        tipo: 'Elettro',
        tipo2: '',
        url: 'public/200px-Artwork0025_RFVF.webp'
      },
      { 
        PokedexNum: "026",
        nome: 'Raichu',
        tipo: 'Elettro',
        tipo2: '',
        url: 'public/200px-Artwork0026_RFVF.webp'
      },
      { 
        PokedexNum: "027",
        nome: 'Sandshrew',
        tipo: 'Terra',
        tipo2: '',
        url: 'public/200px-Artwork0027_RFVF.webp'
      },
      { 
        PokedexNum: "028",
        nome: 'Sandslash',
        tipo: 'Terra',
        tipo2: '',
        url: 'public/200px-Artwork0028_RFVF.webp'
      },
      { 
        PokedexNum: "029",
        nome: 'Nidoran♀',
        tipo: 'Veleno',
        tipo2: '',
        url: 'public/200px-Artwork0029_RFVF.webp'
      },
      { 
        PokedexNum: "030",
        nome: 'Nidorina',
        tipo: 'Veleno',
        tipo2: '',
        url: 'public/200px-Artwork0030_RFVF.webp'
      },
      { 
        PokedexNum: "031",
        nome: 'Nidoqueen',
        tipo: 'Veleno',
        tipo2: 'Terra',
        url: 'public/200px-Artwork0031_RFVF.webp'
      },
      { 
        PokedexNum: "032",
        nome: 'Nidoran♂',
        tipo: 'Veleno',
        tipo2: '',
        url: 'public/200px-Artwork0032_RFVF.webp'
      },
      { 
        PokedexNum: "033",
        nome: 'Nidorino',
        tipo: 'Veleno',
        tipo2: '',
        url: 'public/200px-Artwork0033_RFVF.webp'
      },
      { 
        PokedexNum: "034",
        nome: 'Nidoking',
        tipo: 'Veleno',
        tipo2: 'Terra',
        url: 'public/200px-Artwork0034_RFVF.webp'
      },
      { 
        PokedexNum: "035",
        nome: 'Clefairy',
        tipo: 'Folletto',
        tipo2: '',
        url: 'public/200px-Artwork0035_RFVF.webp'
      },
      { 
        PokedexNum: "036",
        nome: 'Clefable',
        tipo: 'Folletto',
        tipo2: '',
        url: 'public/200px-Artwork0036_RFVF.webp'
      },
      { 
        PokedexNum: "037",
        nome: 'Vulpix',
        tipo: 'Fuoco',
        tipo2: '',
        url: 'public/200px-Artwork0037_RFVF.webp'
      },
      { 
        PokedexNum: "038",
        nome: 'Ninetales',
        tipo: 'Fuoco',
        tipo2: '',
        url: 'public/200px-Artwork0038_RFVF.webp'
      },
      { 
        PokedexNum: "039",
        nome: 'Jigglypuff',
        tipo: 'Normale',
        tipo2: 'Folletto',
        url: 'public/200px-Artwork0039_RFVF.webp'
      },
      { 
        PokedexNum: "040",
        nome: 'Wigglytuff',
        tipo: 'Normale',
        tipo2: 'Folletto',
        url: 'public/200px-Artwork0040_RFVF.webp'
      },
      { 
        PokedexNum: "041",
        nome: 'Zubat',
        tipo: 'Veleno',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0041_RFVF.webp'
      },
      { 
        PokedexNum: "042",
        nome: 'Golbat',
        tipo: 'Veleno',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0042_RFVF.webp'
      },
      { 
        PokedexNum: "043",
        nome: 'Oddish',
        tipo: 'Erba',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0043_RFVF.webp'
      },
      { 
        PokedexNum: "044",
        nome: 'Gloom',
        tipo: 'Erba',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0044_RFVF.webp'
      },
      { 
        PokedexNum: "045",
        nome: 'Vileplume',
        tipo: 'Erba',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0045_RFVF.webp'
      },
      { 
        PokedexNum: "046",
        nome: 'Paras',
        tipo: 'Coleottero',
        tipo2: 'Erba',
        url: 'public/200px-Artwork0046_RFVF.webp'
      },
      { 
        PokedexNum: "047",
        nome: 'Parasect',
        tipo: 'Coleottero',
        tipo2: 'Erba',
        url: 'public/200px-Artwork0047_RFVF.webp'
      },
      { 
        PokedexNum: "048",
        nome: 'Venonat',
        tipo: 'Coleottero',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0048_RFVF.webp'
      },
      { 
        PokedexNum: "049",
        nome: 'Venomoth',
        tipo: 'Coleottero',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0049_RFVF.webp'
      },
      { 
        PokedexNum: "050",
        nome: 'Diglett',
        tipo: 'Terra',
        tipo2: '',
        url: 'public/200px-Artwork0050_RFVF.webp'
      },
      { 
        PokedexNum: "051",
        nome: 'Dugtrio',
        tipo: 'Terra',
        tipo2: '',
        url: 'public/200px-Artwork0051_RFVF.webp'
      },
      { 
        PokedexNum: "052",
        nome: 'Meowth',
        tipo: 'Normale',
        tipo2: '',
        url: 'public/200px-Artwork0052_RFVF.webp'
      },
      { 
        PokedexNum: "053",
        nome: 'Persian',
        tipo: 'Normale',
        tipo2: '',
        url: 'public/200px-Artwork0053_RFVF.webp'
      },
      { 
        PokedexNum: "054",
        nome: 'Psyduck',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0054_RFVF.webp'
      },
      { 
        PokedexNum: "055",
        nome: 'Golduck',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0055_RFVF.webp'
      },
      { 
        PokedexNum: "056",
        nome: 'Mankey',
        tipo: 'Lotta',
        tipo2: '',
        url: 'public/200px-Artwork0056_RFVF.webp'
      },
      { 
        PokedexNum: "057",
        nome: 'Primeape',
        tipo: 'Lotta',
        tipo2: '',
        url: 'public/200px-Artwork0057_RFVF.webp'
      },
      { 
        PokedexNum: "058",
        nome: 'Growlithe',
        tipo: 'Fuoco',
        tipo2: '',
        url: 'public/200px-Artwork0058_RFVF.webp'
      },
      { 
        PokedexNum: "059",
        nome: 'Arcanine',
        tipo: 'Fuoco',
        tipo2: '',
        url: 'public/200px-Artwork0059_RFVF.webp'
      },
      { 
        PokedexNum: "060",
        nome: 'Poliwag',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0060_RFVF.webp'
      },
      { 
        PokedexNum: "061",
        nome: 'Poliwhirl',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0061_RFVF.webp'
      },
      { 
        PokedexNum: "062",
        nome: 'Poliwrath',
        tipo: 'Acqua',
        tipo2: 'Lotta',
        url: 'public/200px-Artwork0062_RFVF.webp'
      },
      { 
        PokedexNum: "063",
        nome: 'Abra',
        tipo: 'Psico',
        tipo2: '',
        url: 'public/200px-Artwork0063_RFVF.webp'
      },
      { 
        PokedexNum: "064",
        nome: 'Kadabra',
        tipo: 'Psico',
        tipo2: '',
        url: 'public/200px-Artwork0064_RFVF.webp'
      },
      { 
        PokedexNum: "065",
        nome: 'Alakazam',
        tipo: 'Psico',
        tipo2: '',
        url: 'public/200px-Artwork0065_RFVF.webp'
      },
      { 
        PokedexNum: "066",
        nome: 'Machop',
        tipo: 'Lotta',
        tipo2: '',
        url: 'public/200px-Artwork0066_RFVF.webp'
      },
      { 
        PokedexNum: "067",
        nome: 'Machoke',
        tipo: 'Lotta',
        tipo2: '',
        url: 'public/200px-Artwork0067_RFVF.webp'
      },
      { 
        PokedexNum: "068",
        nome: 'Machamp',
        tipo: 'Lotta',
        tipo2: '',
        url: 'public/200px-Artwork0068_RFVF.webp'
      },
      { 
        PokedexNum: "069",
        nome: 'Bellsprout',
        tipo: 'Erba',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0069_RFVF.webp'
      },
      { 
        PokedexNum: "070",
        nome: 'Weepinbell',
        tipo: 'Erba',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0070_RFVF.webp'
      },
      { 
        PokedexNum: "071",
        nome: 'Victreebel',
        tipo: 'Erba',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0071_RFVF.webp'
      },
      { 
        PokedexNum: "072",
        nome: 'Tentacool',
        tipo: 'Acqua',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0072_RFVF.webp'
      },
      { 
        PokedexNum: "073",
        nome: 'Tentacruel',
        tipo: 'Acqua',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0073_RFVF.webp'
      },
      { 
        PokedexNum: "074",
        nome: 'Geodude',
        tipo: 'Roccia',
        tipo2: 'Terra',
        url: 'public/200px-Artwork0074_RFVF.webp'
      },
      { 
        PokedexNum: "075",
        nome: 'Graveler',
        tipo: 'Roccia',
        tipo2: 'Terra',
        url: 'public/200px-Artwork0075_RFVF.webp'
      },
      { 
        PokedexNum: "76",
        nome: 'Golem',
        tipo: 'Roccia',
        tipo2: 'Terra',
        url: 'public/200px-Artwork0076_RFVF.webp'
      },
      { 
        PokedexNum: "77",
        nome: 'Ponyta',
        tipo: 'Fuoco',
        tipo2: '',
        url: 'public/200px-Artwork0077_RFVF.webp'
      },

      { 
        PokedexNum: "78",
        nome: 'Rapidash',
        tipo: 'Fuoco',
        tipo2: '',
        url: 'public/200px-Artwork0078_RFVF.webp'
      },

      { 
        PokedexNum: "79",
        nome: 'Slowpoke',
        tipo: 'Acqua',
        tipo2: 'Psico',
        url: 'public/200px-Artwork0079_RFVF.webp'
      },

      { 
        PokedexNum: "80",
        nome: 'Slowbro',
        tipo: 'Acqua',
        tipo2: 'Psico',
        url: 'public/200px-Artwork0080_RFVF.webp'
      },

      { 
        PokedexNum: "81",
        nome: 'Magnemite',
        tipo: 'Elettro',
        tipo2: 'Acciaio',
        url: 'public/200px-Artwork0081_RFVF.webp'
      },

      { 
        PokedexNum: "82",
        nome: 'Magneton',
        tipo: 'Elettro',
        tipo2: 'Acciaio',
        url: 'public/200px-Artwork0082_RFVF.webp'
      },

      { 
        PokedexNum: "83",
        nome: "Farfetch'd",
        tipo: 'Normale',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0083_RFVF.webp'
      },

      { 
        PokedexNum: "84",
        nome: 'Doduo',
        tipo: 'Normale',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0084_RFVF.webp'
      },

      { 
        PokedexNum: "85",
        nome: 'Dodrio',
        tipo: 'Normale',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0085_RFVF.webp'
      },
      { 
        PokedexNum: "86",
        nome: 'Seel',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0086_RFVF.webp'
      },
      { 
        PokedexNum: "87",
        nome: 'Dewgong',
        tipo: 'Acqua',
        tipo2: 'Ghiaccio',
        url: 'public/200px-Artwork0087_RFVF.webp'
      },
      { 
        PokedexNum: "88",
        nome: 'Grimer',
        tipo: 'Veleno',
        tipo2: '',
        url: 'public/200px-Artwork0088_RFVF.webp'
      },
      { 
        PokedexNum: "89",
        nome: 'Muk',
        tipo: 'Veleno',
        tipo2: '',
        url: 'public/200px-Artwork0089_RFVF.webp'
      },
      { 
        PokedexNum: "90",
        nome: 'Shellder',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0090_RFVF.webp'
      },
      { 
        PokedexNum: "91",
        nome: 'Cloyster',
        tipo: 'Acqua',
        tipo2: 'Ghiaccio',
        url: 'public/200px-Artwork0091_RFVF.webp'
      },
      { 
        PokedexNum: "92",
        nome: 'Gastly',
        tipo: 'Spettro',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0092_RFVF.webp'
      }, { 
        PokedexNum: "93",
        nome: 'Haunter',
        tipo: 'Spettro',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0093_RFVF.webp'
      }, { 
        PokedexNum: "94",
        nome: 'Gengar',
        tipo: 'Spettro',
        tipo2: 'Veleno',
        url: 'public/200px-Artwork0094_RFVF.webp'
      }, { 
        PokedexNum: "95",
        nome: 'Onix',
        tipo: 'Roccia',
        tipo2: 'Terra',
        url: 'public/200px-Artwork0095_RFVF.webp'
      },
      { 
        PokedexNum: "96",
        nome: 'Drowzee',
        tipo: 'Psico',
        tipo2: '',
        url: 'public/200px-Artwork0096_RFVF.webp'
      },
      { 
        PokedexNum: "97",
        nome: 'Hypno',
        tipo: 'Psico',
        tipo2: '',
        url: 'public/200px-Artwork0097_RFVF.webp'
      },
      { 
        PokedexNum: "98",
        nome: 'Krabby',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0098_RFVF.webp'
      },
      { 
        PokedexNum: "99",
        nome: 'Kingler',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0099_RFVF.webp'
      },
      { 
        PokedexNum: "100",
        nome: 'Voltorb',
        tipo: 'Elettro',
        tipo2: '',
        url: 'public/200px-Artwork0100_RFVF.webp'
      },
      { 
        PokedexNum: "101",
        nome: 'Electrode',
        tipo: 'Elettro',
        tipo2: '',
        url: 'public/200px-Artwork0101_RFVF.webp'
      },
      { 
        PokedexNum: "102",
        nome: 'Exeggcute',
        tipo: 'Erba',
        tipo2: 'Psico',
        url: 'public/200px-Artwork0102_RFVF.webp'
      },
      { 
        PokedexNum: "103",
        nome: 'Exeggutor',
        tipo: 'Erba',
        tipo2: 'Psico',
        url: 'public/200px-Artwork0103_RFVF.webp'
      },
      { 
        PokedexNum: "104",
        nome: 'Cubone',
        tipo: 'Terra',
        tipo2: '',
        url: 'public/200px-Artwork0104_RFVF.webp'
      },
      { 
        PokedexNum: "105",
        nome: 'Marowak',
        tipo: 'Terra',
        tipo2: '',
        url: 'public/200px-Artwork0105_RFVF.webp'
      },
      { 
        PokedexNum: "106",
        nome: 'Hitmonlee',
        tipo: 'Lotta',
        tipo2: '',
        url: 'public/200px-Artwork0106_RFVF.webp'
      },{ 
        PokedexNum: "107",
        nome: 'Hitmonchan',
        tipo: 'Lotta',
        tipo2: '',
        url: 'public/200px-Artwork0107_RFVF.webp'
      },{ 
        PokedexNum: "108",
        nome: 'Lickitung',
        tipo: 'Normale',
        tipo2: '',
        url: 'public/200px-Artwork0108_RFVF.webp'
      },{ 
        PokedexNum: "109",
        nome: 'Koffing',
        tipo: 'Veleno',
        tipo2: '',
        url: 'public/200px-Artwork0109_RFVF.webp'
      },{ 
        PokedexNum: "110",
        nome: 'Weezing',
        tipo: 'Veleno',
        tipo2: '',
        url: 'public/200px-Artwork0110_RFVF.webp'
      },{ 
        PokedexNum: "111",
        nome: 'Rhyhorn',
        tipo: 'Terra',
        tipo2: 'Roccia',
        url: 'public/200px-Artwork0111_RFVF.webp'
      },{ 
        PokedexNum: "112",
        nome: 'Rhydon',
        tipo: 'Terra',
        tipo2: 'Roccia',
        url: 'public/200px-Artwork0112_RFVF.webp'
      },{ 
        PokedexNum: "113",
        nome: 'Chansey',
        tipo: 'Normale',
        tipo2: '',
        url: 'public/200px-Artwork0113_RFVF.webp'
      },{ 
        PokedexNum: "114",
        nome: 'Tangela',
        tipo: 'Erba',
        tipo2: '',
        url: 'public/200px-Artwork0114_RFVF.webp'
      },{ 
        PokedexNum: "115",
        nome: 'Kangaskhan',
        tipo: 'Normale',
        tipo2: '',
        url: 'public/200px-Artwork0115_RFVF.webp'
      },
      { 
        PokedexNum: "116",
        nome: 'Horsea',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0116_RFVF.webp'
      },
      { 
        PokedexNum: "117",
        nome: 'Seadra',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0117_RFVF.webp'
      },
      { 
        PokedexNum: "118",
        nome: 'Goldeen',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0118_RFVF.webp'
      },
      { 
        PokedexNum: "119",
        nome: 'Seaking',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0119_RFVF.webp'
      },
      { 
        PokedexNum: "120",
        nome: 'Staryu',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0120_RFVF.webp'
      },
      { 
        PokedexNum: "121",
        nome: 'Starmie',
        tipo: 'Acqua',
        tipo2: 'Psico',
        url: 'public/200px-Artwork0121_RFVF.webp'
      },
      { 
        PokedexNum: "122",
        nome: 'Mr. Mime',
        tipo: 'Psico',
        tipo2: 'Folletto',
        url: 'public/200px-Artwork0122_RFVF.webp'
      },
      { 
        PokedexNum: "123",
        nome: 'Scyther',
        tipo: 'Coleottero',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0123_RFVF.webp'
      },
      { 
        PokedexNum: "124",
        nome: 'Jynx',
        tipo: 'Ghiaccio',
        tipo2: 'Psico',
        url: 'public/200px-Artwork0124_RFVF.webp'
      },
      { 
        PokedexNum: "125",
        nome: 'Electabuzz',
        tipo: 'Elettro',
        tipo2: '',
        url: 'public/200px-Artwork0125_RFVF.webp'
      },
      { 
        PokedexNum: "126",
        nome: 'Magmar',
        tipo: 'Fuoco',
        tipo2: '',
        url: 'public/200px-Artwork0126_RFVF.webp'
      },
      { 
        PokedexNum: "127",
        nome: 'Pinsir',
        tipo: 'Coleottero',
        tipo2: '',
        url: 'public/200px-Artwork0127_RFVF.webp'
      }, { 
        PokedexNum: "128",
        nome: 'Tauros',
        tipo: 'Normale',
        tipo2: '',
        url: 'public/200px-Artwork0128_RFVF.webp'
      }, { 
        PokedexNum: "129",
        nome: 'Magikarp',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0129_RFVF.webp'
      }, { 
        PokedexNum: "130",
        nome: 'Gyarados',
        tipo: 'Acqua',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0130_RFVF.webp'
      },{
      PokedexNum: "131",
      nome: 'Lapras',
      tipo: 'Acqua',
      tipo2: 'Ghiaccio',
      url: 'public/200px-Artwork0131_RFVF.webp'
    },
    {
    PokedexNum: "132",
    nome: 'Ditto',
    tipo: 'Normale',
    tipo2: '',
    url: 'public/200px-Artwork0132_RFVF.webp'
  },
      { 
        PokedexNum: "133",
        nome: 'Eevee',
        tipo: 'Normale',
        tipo2: '',
        url: 'public/200px-Artwork0133_RFVF.webp'
      }, { 
        PokedexNum: "134",
        nome: 'Vaporeon',
        tipo: 'Acqua',
        tipo2: '',
        url: 'public/200px-Artwork0134_RFVF.webp'
      }, { 
        PokedexNum: "135",
        nome: 'Jolteon',
        tipo: 'Elettro',
        tipo2: '',
        url: 'public/200px-Artwork0135_RFVF.webp'
      }, { 
        PokedexNum: "136",
        nome: 'Flareon',
        tipo: 'Fuoco',
        tipo2: '',
        url: 'public/200px-Artwork0136_RFVF.webp'
      }, { 
        PokedexNum: "137",
        nome: 'Porygon',
        tipo: 'Normale',
        tipo2: '',
        url: 'public/200px-Artwork0137_RFVF.webp'
      }, { 
        PokedexNum: "138",
        nome: 'Omanyte',
        tipo: 'Roccia',
        tipo2: 'Acqua',
        url: 'public/200px-Artwork0138_RFVF.webp'
      }, { 
        PokedexNum: "139",
        nome: 'Omastar',
        tipo: 'Roccia',
        tipo2: 'Acqua',
        url: 'public/200px-Artwork0139_RFVF.webp'
      },
      { 
        PokedexNum: "140",
        nome: 'Kabuto',
        tipo: 'Roccia',
        tipo2: 'Acqua',
        url: 'public/200px-Artwork0140_RFVF.webp'
      },
      { 
        PokedexNum: "141",
        nome: 'Kabutops',
        tipo: 'Roccia',
        tipo2: 'Acqua',
        url: 'public/200px-Artwork0141_RFVF.webp'
      },
      { 
        PokedexNum: "142",
        nome: 'Aerodactyl',
        tipo: 'Roccia',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0142_RFVF.webp'
      },
      { 
        PokedexNum: "143",
        nome: 'Snorlax',
        tipo: 'Normale',
        tipo2: '',
        url: 'public/200px-Artwork0143_RFVF.webp'
      },
      { 
        PokedexNum: "144",
        nome: 'Articuno',
        tipo: 'Ghiaccio',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0144_RFVF.webp'
      },
      { 
        PokedexNum: "145",
        nome: 'Zapdos',
        tipo: 'Volante',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0145_RFVF.webp'
      },
      { 
        PokedexNum: "146",
        nome: 'Moltres',
        tipo: 'Fuoco',
        tipo2: 'Volante',
        url: 'public/200px-Artwork0146_RFVF.webp'
      },
      { 
        PokedexNum: "147",
        nome: 'Dratini',
        tipo: 'Drago',
        tipo2: '',
        url: 'public/200px-Artwork0147_RFVF.webp'
      },
      { 
        PokedexNum: "148",
        nome: 'Dragonair',
        tipo: 'Drago',
        tipo2: '',
        url: 'public/200px-Artwork0148_RFVF.webp'
      },
      { 
        PokedexNum: "149",
        nome: 'Dragonite',
        tipo: 'Drago',
        tipo2: '',
        url: 'public/200px-Artwork0149_RFVF.webp'
      },
      { 
        PokedexNum: "150",
        nome: 'Mewtwo',
        tipo: 'Psico',
        tipo2: '',
        url: 'public/200px-Artwork0150_RFVF.webp'
      },
      { 
        PokedexNum: "151",
        nome: 'Mew',
        tipo: 'Psico',
        tipo2: '',
        url: 'public/200px-Artwork0151_RFVF.webp'
      },
 

  
    ];

    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const handlePokemonClick = (url,PokedexNum, nome, tipo, tipo2) => {
      setSelectedPokemon({url, PokedexNum, nome, tipo, tipo2 });
    };

    return (
      <div className='CardSelect'>
        {immagini.map((immagine, index) => (
          <div key={index} className="divCard" onClick={() => handlePokemonClick(immagine.url,immagine.PokedexNum, immagine.nome, immagine.tipo, immagine.tipo2)}>
            <div className="imgContainer">
              <img className="imgP" src={immagine.url} alt={immagine.nome} />
            </div>
          </div>
        ))}
        
        
  
       <div className='container'></div>
        {selectedPokemon && (
          <div className="selectedPokemonInfo">
            <h2>Informazioni Pokemon</h2>
            <img src={selectedPokemon.url}></img>
            <p>Num: {selectedPokemon.PokedexNum}</p>
            <p>Nome: {selectedPokemon.nome}</p>
            <p style={{borderRadius: '10px' , backgroundColor: coloreTipo(selectedPokemon.tipo) }}>Tipo: {selectedPokemon.tipo}</p>
    {selectedPokemon.tipo2 && (
      <p style={{borderRadius: '10px' ,backgroundColor: coloreTipo(selectedPokemon.tipo2) }}>Tipo 2: {selectedPokemon.tipo2}</p>
    )}
          </div>
        )}
      </div>
      
    );
    
  };
  const Linkedin = () => {
    return (
      <div className="cont">
        <div className="iconLinkedin">
          <a href="https://www.linkedin.com/in/christian-cozzolino-2142b6286">
            <img src="public/174857.png" alt="LinkedIn" className="immagineHover" />
          </a>
        </div>
      </div>
    );
  };
  return (
    <div>
   
      <Immagini />
      <Linkedin />
    </div>
  );
};



export default Card;