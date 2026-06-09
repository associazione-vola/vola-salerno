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
    name: 'Briciola',
    gender: 'F',
    character: 'Timida ma curiosa',
    image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&h=600&q=80&auto=format&fit=crop',
    story:
      'Briciola è arrivata da noi scheletrica e spaventata, trovata dietro un cassonetto a Torrione. Dopo tre mesi di riabilitazione, è stata adottata da una famiglia con bambini che l\'hanno trasformata in una gatta coraggiosa e giocosa.',
    // instagramUrl: 'https://www.instagram.com/p/...',
  },
  {
    id: 5,
    name: 'Argo',
    gender: 'M',
    character: 'Fedele e protettivo',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&h=600&q=80&auto=format&fit=crop',
    story:
      'Argo vagava da mesi nella zona industriale di Pontecagnano. Nonostante gli anni trascorsi da solo, ha dimostrato fin dal primo giorno un carattere dolce e leale. Marco, il suo nuovo papà, dice che non si separano mai.',
    // instagramUrl: 'https://www.instagram.com/p/...',
  },
  {
    id: 6,
    name: 'Miele',
    gender: 'F',
    character: 'Vivace e affettuosa',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=600&q=80&auto=format&fit=crop',
    story:
      'Miele è nata in una cucciolata abbandonata sotto un ponte sul Sele. Adottata a soli tre mesi dalla famiglia Romano di Battipaglia, è cresciuta circondata d\'amore e oggi riempie la casa di allegria.',
    // instagramUrl: 'https://www.instagram.com/p/...',
  },
  {
    id: 7,
    name: 'Febo',
    gender: 'M',
    character: 'Calmo e intelligente',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=800&h=600&q=80&auto=format&fit=crop',
    story:
      'Febo è arrivato da noi con una vecchia frattura alla zampa posteriore, mai curata. Dopo un intervento chirurgico e mesi di fisioterapia, cammina perfettamente. Oggi fa il pendolare con il suo papà adottivo da Salerno a Napoli ogni mattina.',
    // instagramUrl: 'https://www.instagram.com/p/...',
  },
  {
    id: 8,
    name: 'Perla',
    gender: 'F',
    character: 'Pacata e saggia',
    image: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=800&h=600&q=80&auto=format&fit=crop',
    story:
      'Perla era la gatta del quartiere Mercatello, tutti la conoscevano ma nessuno la portava a casa. A sei anni, è stata finalmente adottata dalla signora Anna, vedova e sola. Ora sono inseparabili.',
    // instagramUrl: 'https://www.instagram.com/p/...',
  },
  {
    id: 9,
    name: 'Zeus',
    gender: 'M',
    character: 'Esuberante e giocoso',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&h=600&q=80&auto=format&fit=crop',
    story:
      'Zeus era troppo grande e vivace per i canili, nessuno lo voleva. I Giordano, una famiglia con un ampio giardino a Cava de\' Tirreni, lo hanno scelto proprio per questo. Oggi tira il papà in bici ogni mattina.',
    // instagramUrl: 'https://www.instagram.com/p/...',
  },
  {
    id: 10,
    name: 'Stella',
    gender: 'F',
    character: 'Dolce e sensibile',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&q=80&auto=format&fit=crop',
    story:
      'Stella è stata trovata in una scatola di cartone davanti alla stazione di Salerno, con appena tre settimane di vita. Allevata a biberon dai nostri volontari, è diventata una gatta straordinaria. Adottata da Chiara, studentessa universitaria.',
    // instagramUrl: 'https://www.instagram.com/p/...',
  },
];
