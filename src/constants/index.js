import {colors, strings} from '../utils';
import {cities} from '../utils/strings';

const delhiStations = [
  {
    name: 'ADARSH NAGAR',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {
      lat: 28.7165,
      long: 77.17041,
      otherDetails: [
        {value: [{no: '72900052062', no: '8800793122'}], label: 'Contact'},
        {
          value: [
            {type: 'Divyang Friendly Station'},
            {type: 'Lift/Escalator Available'},
          ],
          label: 'Station',
        },
        {
          label: 'Gates',
          value: [
            {
              no: 'Gate No 4',
              name: 'Sarai Pipal Thala',
              willChair: 'Yes',
            },
            {
              no: 'Gate No 3',
              name: 'Bharola Village',
              willChair: 'No',
            },
            {
              no: 'Gate No 2',
              name: 'Moolchand Colony',
              willChair: 'Yes',
            },
            {
              no: 'Gate No 1',
              name: 'Rajan Babu Road, Adarsh Nagar',
              willChair: 'No',
            },
          ],
        },
        {
          label: 'Platforms',
          value: [
            {
              no: 'Platform No. 2',
              dir: 'SAMAYPUR BADLI',
            },
            {
              no: 'Platform No. 1',
              dir: 'HUDA CITY CENTRE',
            },
          ],
        },
      ],
    },
  },
  {
    name: 'AIIMS',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {
      lat: 28.5668602,
      long: 77.2078058,
      otherDetails: [
        {contact: [{no: '7290024757', no: '8800793140'}]},
        {
          station: [
            {type: 'Divyang Friendly Station'},
            {type: 'Lift/Escalator Available'},
          ],
        },
        {
          gates: [
            {
              no: 'Gate No 4',
              name: 'Ring Road, Vardhman Mahavir Medical College & Safdarjung Hospital',
              willChair: 'No',
            },
            {
              no: 'Gate No 3',
              name: 'Ansari Nagar West, Post Office, Vardhman Mahavir Medical College & Safdarjung Hospital',
              willChair: 'Yes',
            },
            {
              no: 'Gate No 2',
              name: 'AIIMS Hospital, Ansari Nagar East, Yusuf Sarai',
              willChair: 'Yes',
            },
            {
              no: 'Gate No 1',
              name: 'AIIMS Hospital, Kidwai Nagar',
              willChair: 'Yes',
            },
          ],
        },
        {
          Platforms: [
            {
              no: 'Platform No. 2',
              dir: 'SAMAYPUR BADLI',
            },
            {
              no: 'Platform No. 1',
              dir: 'HUDA CITY CENTRE',
            },
          ],
        },
      ],
    },
  },
  {
    name: 'AIRPORT (T-3)',
    lines: ['orange'],
    lineNumber: [{no: 10, color: 'orange'}],
    details: {
      lat: 28.5668602,
      long: 77.2078058,
      contact: [{no: '7290027380', no: '8527390345'}],
      station: [
        {type: 'Divyang Friendly Station'},
        {type: 'Paid Porter/ Trolley Facility'},
        {type: 'Lift/Escalator Available'},
      ],
      gates: [
        {
          no: 'Multiple Gates',
          name: 'At Aiport there are multiple entries which connects Airport(T-3) to metro station',
          willChair: 'Yes',
        },
      ],
      Platforms: [
        {
          no: 'Platform No. 3',
          dir: 'NEW DELHI (Yellow & Airport Line)',
        },
        {
          no: 'Platform No. 2',
          dir: 'DWARKA SECTOR - 21',
        },
      ],
    },
  },
  {
    name: 'AKSHARDHAM',
    lines: ['blue'],
    lineNumber: [{no: 3, color: 'blue'}],
    details: {
      lat: 28.61784195,
      long: 77.27948814325397,
      contact: [{no: '7290021209', no: '8800793164'}],
      station: [
        {type: 'Divyang Friendly Station'},
        {type: 'Parking Available'},
        {type: 'Lift/Escalator Available'},
      ],
      gates: [
        {
          no: 'Gate No 3',
          name: 'Foot Over Bridge',
          willChair: 'No',
        },
        {
          no: 'Gate No 2',
          name: 'Parking Side',
          willChair: 'Yes',
        },
        {
          no: 'Gate No 1',
          name: 'Fast Aproach Road',
          willChair: 'Yes',
        },
      ],
      Platforms: [
        {
          no: 'Platform No. 2',
          dir: 'DWARKA SECTOR-21',
        },
        {
          no: 'Platform No. 1',
          dir: 'NOIDA ELECTRONIC CITY',
        },
      ],
    },
  },
  {
    name: 'ANAND VIHAR ISBT',
    lines: ['blue', 'pink'],
    lineNumber: [
      {no: 3, color: 'blue'},
      {no: 7, color: 'pink'},
    ],
    details: {
      lat: 28.6467533,
      long: 77.3180037,
      contact: [
        {
          no: '7290012939',
          no: '7290051077',
          no: '8800793198',
          no: '8448282934',
        },
      ],
      station: [
        {type: 'Divyang Friendly Station'},
        {type: 'Lift/Escalator Available'},
        {type: 'InterChange Station'},
      ],
      gates: [
        {
          no: 'Gate No 4',
          name: 'Between Aanand Vihar ISBT and Railway Station',
          willChair: 'Yes',
        },
        {
          no: 'Gate No 3',
          name: 'Bharola Village',
          willChair: 'No',
        },
        {
          no: 'Gate No 2',
          name: 'Moolchand Colony',
          willChair: 'Yes',
        },
        {
          no: 'Gate No 1',
          name: 'Rajan Babu Road, Adarsh Nagar',
          willChair: 'No',
        },
      ],
      Platforms: [
        {
          no: 'Platform No. 2',
          dir: 'SAMAYPUR BADLI',
        },
        {
          no: 'Platform No. 1',
          dir: 'HUDA CITY CENTRE',
        },
      ],
    },
  },
  {
    name: 'ARJAN GARH',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {
      lat: 28.4807352,
      long: 77.1257622,
    },
  },
  {
    name: 'ARTHALA',
    lines: ['red'],
    lineNumber: [{no: 1, color: 'red'}],
    details: {
      lat: 28.676999,
      long: 77.3918919,
    },
  },
  {
    name: 'ASHOK PARK MAIN',
    lines: ['green'],
    lineNumber: [{no: 2, color: 'green'}],
    details: {
      lat: 28.6716045,
      long: 77.155291,
    },
  },
  {
    name: 'ASHRAM',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'AZADPUR',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'BADARPUR BORDER',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'BADKAL MOR',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'BAHADURGARH CITY',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'BARAKHAMBA ROAD',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'BATA CHOWK',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'BELVEDERE TOWERS',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'BHIKAJI CAMA PLACE',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'BOTANICAL GARDEN',
    lines: ['blue'],
    lineNumber: [{no: 4, color: 'blue'}],
    details: {},
  },
  {
    name: 'BRIG. HOSHIAR SINGH',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'CENTRAL SECRETARIAT',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'CHANDNI CHOWK',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'CHAWRI BAZZAR',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'CHHATARPUR',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'CHIRAG DELHI',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'CIVIL LINES',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    lines: ['yellow'],
    name: 'CYBER CITY',
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'DABRI MOR - JANAKPURI SOUTH',
    lines: ['blue'],
    lineNumber: [{no: 3, color: 'blue'}],
    details: {},
  },
  {
    name: 'DASHRATHPURI',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'DELHI AEROCITY',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'DELHI CANTT',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'DELHI GATE',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
  {
    name: 'DHANSA BUS STAND',
    lines: ['yellow'],
    lineNumber: [{no: 2, color: 'yellow'}],
    details: {},
  },
];
const noidaStations = [
  {
    name: 'NOIDA SECTOR 51',
    lines: ['aqua'],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 50',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 76',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 101',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 81',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NSEZ',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 83',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 137',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 142',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 143',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 144',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 145',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 146',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 147',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'NOIDA SECTOR 148',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'PARI CHOWK',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'ALPHA 1',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'DELTA 1',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'GNIDA OFFICE',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
  {
    name: 'DEPORT',
    lines: ['aqua'],
    lineNumber: [1],
    details: {},
  },
];
const kolkataStations = [
  {
    name: 'KAVI SUBHASH',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'SHAHID KHUDIRAM',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'KAVI NAZRUL',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'GITANJALI',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'MASTERDA SURYA SEN',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'NETAJI',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'MAHANAYAK UTTAM KUMAR',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'RABINDRA SAROBAR',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'KALIGHAT',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'JATIN DAS PARK',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'NETAJI BHAVAN',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'RABINDRA SADAN',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'MAIDAN',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'PARK STREET',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'ESPLANADE',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'CHANDNI CHOWK',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'CENTRAL',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'MAHATAMA GANDHI ROAD',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'GIRISH PARK',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'SHOBHA BAZAR',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'SHAYAM BAZAR',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'BELGACHHIA',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'DUM DUM',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'NOAPARA',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'BARANAGAR',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'DAKSHINESWAR',
    lines: ['blue'],
    details: {},
  },
  {
    name: 'SALT LAKE SECTOR-V',
    lines: ['green'],
    details: {},
  },
  {
    name: 'KARUNAMOYEE',
    lines: ['green'],
    details: {},
  },
  {
    name: 'CENTRAL PARK',
    lines: ['green'],
    details: {},
  },
  {
    name: 'CITY CENTER',
    lines: ['green'],
    details: {},
  },
  {
    name: 'BENGAL CHEMICAL',
    lines: ['green'],
    details: {},
  },
  {
    name: 'SALT LAKE STADIUM',
    lines: ['green'],
    details: {},
  },
  {
    name: 'PHOOLBAGAN',
    lines: ['green'],
    details: {},
  },
  {
    name: 'SEALDAH',
    lines: ['green'],
    details: {},
  },
  {
    name: 'JOKA',
    lines: ['purple'],
    details: {},
  },
  {
    name: 'THAKURPUKUR',
    lines: ['purple'],
    details: {},
  },
  {
    name: 'SAKHERBAZAR',
    lines: ['purple'],
    details: {},
  },
  {
    name: 'BEHALA CHOWRASTA',
    lines: ['purple'],
    details: {},
  },
  {
    name: 'BEHALA BAZAR',
    lines: ['purple'],
    details: {},
  },
  {
    name: 'TARATALA',
    lines: ['purple'],
    details: {},
  },
];
const drawerComponents = [
  {
    name: 'Search Station',
    onPress: {
      routeName: 'StationList',
      params: {searchType: 'Search Station'},
    },
  },
  {
    name: 'Tokens and Smart Card',
    fileName: '',
  },
  {
    name: 'General Information',
    fileName: '',
  },
  {
    name: 'Lost & Found',
    fileName: '',
  },
  {
    name: 'HelpLine',
    fileName: '',
  },
  {
    name: 'FAQs',
    fileName: '',
  },
  {
    name: 'Important Websites',
    fileName: '',
  },
  {
    name: 'Refer the app',
    fileName: '',
  },
  {
    name: 'Feedback',
    fileName: '',
  },
];

const serviceItem = [
  {
    label: strings.searchStation,
    onPress: {
      routeName: 'StationList',
      params: {searchType: 'Search Station'},
    },
  },
  {
    label: strings.nearestMetro,
    onPress: {
      routeName: 'StationList',
      params: {},
    },
  },
  {
    label: strings.firstLastMetro,
    onPress: {
      routeName: 'StationList',
      params: {},
    },
  },
  {
    label: strings.onlineRecharge,
    onPress: {
      routeName: 'StationList',
      params: {},
    },
  },
];
const cityList = [
  {name: cities.noidaMetro},
  {name: cities.delhiMetro},
  {name: cities.kolkataMetro},
  {name: cities.mumbaiMetro},
  {name: cities.chennaiMetro},
  {name: cities.lucknowMetro},
];

export const lineNames = {
  yellow: 'Yellow Line',
  blue: 'Blue Line',
  orange: 'Orange Line',
  red: 'Red Line',
  pink: 'Pink Line',
  aqua: 'Aqua Line',
};

export const lineColors = {
  yellow: colors.lightYellow,
  blue: colors.lightBlue,
  orange: colors.lightOrange,
  red: colors.red,
  pink: colors.lightPink,
  aqua: colors.aqua,
};
export const getCity = {
  'Noida Metro': noidaStations,
  'Delhi Metro': delhiStations,
  'Kolkata Metro': kolkataStations,
};

export {
  delhiStations,
  noidaStations,
  kolkataStations,
  drawerComponents,
  serviceItem,
  cityList,
};
