export interface Animal {
  id: number;
  name: string;
  age: string;
  character: string;
  image: string;
  story?: string;
  type: 'adoption' | 'success';
}

export const successStories: Animal[] = [
  {
    id: 1,
    name: 'Luna',
    age: '3 anni',
    character: 'Dolce e affettuosa',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
    story: 'Luna è stata trovata abbandonata sul lungomare di Salerno con una zampa ferita. Dopo mesi di cure amorevoli, oggi vive felice con la famiglia Esposito e corre libera nei campi di Pontecagnano.',
    type: 'success',
  },
  {
    id: 2,
    name: 'Micio',
    age: '2 anni',
    character: 'Curioso e giocherellone',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop',
    story: 'Micio era uno dei tanti gatti del centro storico. I volontari VOLA lo hanno vaccinato, sterilizzato e trovato una casa amorevole nel quartiere Torrione, dove ora regna sovrano.',
    type: 'success',
  },
  {
    id: 3,
    name: 'Briciola',
    age: '5 anni',
    character: 'Tranquilla e leale',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop',
    story: 'Briciola viveva in un canile sovraffollato da tre anni. Grazie alla campagna adozioni di VOLA, ha trovato una famiglia con due bambini che la adorano e una grande cuccia tutta sua.',
    type: 'success',
  },
  {
    id: 4,
    name: 'Ciuffo',
    age: '1 anno',
    character: 'Energico e socievole',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=300&fit=crop',
    story: 'Ciuffo è stato soccorso da un vicolo buio di Pastena. Oggi è il cane da terapia di una RSA salernitana, dove porta gioia a decine di anziani ogni giorno.',
    type: 'success',
  },
  {
    id: 5,
    name: 'Rossella',
    age: '4 anni',
    character: 'Mite e riflessiva',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop',
    story: 'Trovata intrappolata in una rete da pesca sul litorale di Eboli, Rossella è stata curata per settimane. La famiglia Ferraro l\'ha adottata e ora vive a due passi dal mare che l\'aveva quasi inghiottita.',
    type: 'success',
  },
  {
    id: 6,
    name: 'Pepito',
    age: '6 anni',
    character: 'Saggio e pacato',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&h=300&fit=crop',
    story: 'Pepito era un anziano cane da caccia abbandonato sulle colline del Cilento. I volontari VOLA lo hanno recuperato e oggi vive i suoi anni d\'oro in un giardino fiorito a Cava de\' Tirreni.',
    type: 'success',
  },
];

export const adoptionAnimals: Animal[] = [
  {
    id: 7,
    name: 'Stella',
    age: '2 anni',
    character: 'Affettuosa, adora i bambini e altri cani',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop',
    type: 'adoption',
  },
  {
    id: 8,
    name: 'Tigre',
    age: '8 mesi',
    character: 'Vivace, curioso, ama giocare',
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=400&h=300&fit=crop',
    type: 'adoption',
  },
  {
    id: 9,
    name: 'Margherita',
    age: '4 anni',
    character: 'Tranquilla, perfetta per appartamento',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=300&fit=crop',
    type: 'adoption',
  },
  {
    id: 10,
    name: 'Rocco',
    age: '3 anni',
    character: 'Leale, adora le passeggiate lunghe',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
    type: 'adoption',
  },
  {
    id: 11,
    name: 'Fiocco',
    age: '1 anno',
    character: 'Giocoso, si adatta a tutto',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop',
    type: 'adoption',
  },
  {
    id: 12,
    name: 'Mora',
    age: '5 anni',
    character: 'Dolce, ama le coccole e il divano',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop',
    type: 'adoption',
  },
];
