export interface SuccessStory {
  id: number;
  name: string;
  gender: 'M' | 'F';
  character: string;
  image: string;
  story: string;
  instagramUrl?: string;
}

export const successStories: SuccessStory[] = [
  {
    id: 1,
    name: 'Shila',
    gender: 'F',
    character: 'L\'amore in carrozzina',
    image: '/animali/shila.webp',
    story:
      'Shila, Bracco Tedesco di 4 anni, è un cane da caccia. Un giorno, durante una spedizione, viene investita da un furgone, che la rende paralitica. Non volendole fare l\'eutanasia, grazie all\'aiuto dei nostri volontari e a varie raccolte fondi, Shila oggi si è ripresa, con il suo carrellino che l\'aiuta a camminare, la fisioterapia, e tanto amore.',
    // instagramUrl: 'https://www.instagram.com/p/...',
  },
  {
    id: 2,
    name: 'Akela',
    gender: 'M',
    character: 'Forza e dolcezza insieme',
    image: '/animali/akela.webp',
    story:
      'Akela è un cagnolino che è rimasto paralizzato in seguito a un incidente. La famiglia che lo aveva adottato ha deciso di non tenerlo, e il Vola è intervenuto. Akela ha fatto numerose visite e, grazie all\'aiuto ottenuto tramite le raccolte fondi, è stato possibile vedere in lui un piccolo miglioramento. Il veterinario che lo ha seguito in clinica non è più riuscito a separarsene e lo ha adottato, permettendogli di ricevere amore e le migliori cure.',
    instagramUrl: 'https://www.instagram.com/p/DVjcynHDt-l/',
  },
  {
    id: 3,
    name: 'Asia',
    gender: 'F',
    character: 'Coraggio in miniatura',
    image: '/animali/asia.webp',
    story:
      'Asia è stata vittima di un grave incidente che le aveva spostato gli organi nel diaframma, compromettendo la sua respirazione. Accolta da una famiglia tramite la nostra associazione, ha affrontato un delicatissimo intervento chirurgico. Grazie alle cure costanti, all\'amore incondizionato dei suoi adottanti e al legame speciale nato con Carlotta (una delle gatte di casa che le ha fatto da mamma), Asia è riuscita a superare i momenti critici, vivendo felice, amata e al sicuro.',
    // instagramUrl: 'https://www.instagram.com/p/...',
  },
  {
    id: 4,
    name: 'Ciro e Ugo',
    gender: 'M',
    character: 'Caos e coccole in coppia',
    image: '/animali/ugo_ciro.webp',
    story:
      'Arrivati a 40 giorni, minuscoli e curiosi, Ciro e Ugo hanno riempito di vita una casa che aspettava solo loro. La famiglia voleva adottarne uno solo, ma quando hanno scoperto che erano rimasti in due, non ci hanno pensato due volte. Oggi corrono, esplorano, combinano guai e ricordano ogni giorno che l\'amore di un cane cresce insieme a te.',
    // instagramUrl: 'https://www.instagram.com/p/...',
  },
  {
    id: 5,
    name: 'Giogiò',
    gender: 'M',
    character: 'Sorriso sdentato, cuore intero',
    image: '/animali/giogio.webp',
    story:
      'Giogiò, detto anche Giorgio, ha vagato per anni per le strade di Avellino, cercando riparo dove poteva e cibandosi di spazzatura. È stato picchiato: gli mancano due denti e porta ancora i segni di una lesione al tendine dell\'orecchio. Nonostante tutto, la fortuna ha bussato alla sua porta e Giogiò è stato accolto da una famiglia dove ha trovato fratelli per la vita.',
    // instagramUrl: 'https://www.instagram.com/p/...',
  },
  {
    id: 6,
    name: 'Arturo',
    gender: 'M',
    character: 'Dipendente dalle coccole',
    image: '/animali/arturo.webp',
    story:
      'Arturo è un gattino di circa 6 anni, probabilmente abbandonato, che ha cercato rifugio in una casa durante la notte. È arrivato da noi con ferite gravi, causate dall\'aggressione di altri animali, ed è stato ricoverato e operato. Ha sofferto molto, ma con pazienza e amore ha imparato a fare di nuovo amicizia con i cani e gli altri gatti della casa, rivelando un carattere giocoso e pieno di vita.',
    instagramUrl: 'https://www.instagram.com/p/DXZyKTejOqD/?img_index=1',
  },
];
