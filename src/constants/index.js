import {colors, images, strings} from '../utils';
import {cities} from '../utils/strings';
import {
  calculateKolkataMetroFare,
  calculateNoidaMetroFare,
  delhiMetroFareCalculator,
} from '../screens/FareAndRouteCalculator/components/logic';
import {
  calculateFLMDelhi,
  calculateFLMKolkata,
  calculateFLMNoida,
} from '../screens/FirstLastMetro/Logic';

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
    serial: 0,
    station_name: 'NOIDA SECTOR 51',
    station_code: 'NS51',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:00:00',
      'Toward NOIDA NOIDA SECTOR 51': '-',
    },
    last_Train: {
      'Toward DELPORT': '22:00:30',
      'Toward NOIDA NOIDA SECTOR 51': '-',
    },
    details: {},
  },
  {
    serial: 1,
    station_name: 'NOIDA SECTOR 50',
    station_code: 'NS50',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:02:10',
      'Toward NOIDA NOIDA SECTOR 51': '6:25:40',
    },
    last_Train: {
      'Toward DELPORT': '22:02:30',
      'Toward NOIDA NOIDA SECTOR 51': '22:45:20',
    },
    details: {},
  },
  {
    serial: 2,
    station_name: 'NOIDA SECTOR 76',
    station_code: 'NS76',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:04:38',
      'Toward NOIDA NOIDA SECTOR 51': '6:23:28',
    },
    last_Train: {
      'Toward DELPORT': '22:03:26',
      'Toward NOIDA NOIDA SECTOR 51': '22:43:56',
    },
    details: {},
  },
  {
    serial: 3,
    station_name: 'NOIDA SECTOR 101',
    station_code: 'NS101',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:07:12',
      'Toward NOIDA NOIDA SECTOR 51': '6:20:26',
    },
    last_Train: {
      'Toward DELPORT': '22:05:12',
      'Toward NOIDA NOIDA SECTOR 51': '22:41:45',
    },
    details: {},
  },
  {
    serial: 4,
    station_name: 'NOIDA SECTOR 81',
    station_code: 'NS81',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:09',
      'Toward NOIDA NOIDA SECTOR 51': '6:18',
    },
    last_Train: {
      'Toward DELPORT': '22:07',
      'Toward NOIDA NOIDA SECTOR 51': '22:39',
    },
    details: {},
  },
  {
    serial: 5,
    station_name: 'NSEZ',
    station_code: 'NSEZ',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:12',
      'Toward NOIDA NOIDA SECTOR 51': '6:14',
    },
    last_Train: {
      'Toward DELPORT': '22:09',
      'Toward NOIDA NOIDA SECTOR 51': '22:35',
    },
    details: {},
  },
  {
    serial: 6,
    station_name: 'NOIDA SECTOR 83',
    station_code: 'NS83',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:15',
      'Toward NOIDA NOIDA SECTOR 51': '6:11',
    },
    last_Train: {
      'Toward DELPORT': '22:12',
      'Toward NOIDA NOIDA SECTOR 51': '22:33',
    },
    details: {},
  },
  {
    serial: 7,
    station_name: 'NOIDA SECTOR 137',
    station_code: 'NS137',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:17',
      'Toward NOIDA NOIDA SECTOR 51': '6:08',
    },
    last_Train: {
      'Toward DELPORT': '22:14',
      'Toward NOIDA NOIDA SECTOR 51': '22:31',
    },
    details: {},
  },
  {
    serial: 8,
    station_name: 'NOIDA SECTOR 142',
    station_code: 'NS142',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:00',
      'Toward NOIDA NOIDA SECTOR 51': '6:05',
    },
    last_Train: {
      'Toward DELPORT': '22:17',
      'Toward NOIDA NOIDA SECTOR 51': '22:28',
    },
    details: {},
  },
  {
    serial: 9,
    station_name: 'NOIDA SECTOR 143',
    station_code: 'NS143',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:02',
      'Toward NOIDA NOIDA SECTOR 51': '6:02',
    },
    last_Train: {
      'Toward DELPORT': '22:19',
      'Toward NOIDA NOIDA SECTOR 51': '22:26',
    },
    details: {},
  },
  {
    serial: 10,
    station_name: 'NOIDA SECTOR 144',
    station_code: 'NS144',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:05',
      'Toward NOIDA NOIDA SECTOR 51': '6:00',
    },
    last_Train: {
      'Toward DELPORT': '22:22',
      'Toward NOIDA NOIDA SECTOR 51': '22:24',
    },
    details: {},
  },
  {
    serial: 11,
    station_name: 'NOIDA SECTOR 145',
    station_code: 'NS145',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:08',
      'Toward NOIDA NOIDA SECTOR 51': '6:27',
    },
    last_Train: {
      'Toward DELPORT': '22:24',
      'Toward NOIDA NOIDA SECTOR 51': '22:21',
    },
    details: {},
  },
  {
    serial: 12,
    station_name: 'NOIDA SECTOR 146',
    station_code: 'NS146',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:12',
      'Toward NOIDA NOIDA SECTOR 51': '6:24',
    },
    last_Train: {
      'Toward DELPORT': '22:27',
      'Toward NOIDA NOIDA SECTOR 51': '22:19',
    },
    details: {},
  },
  {
    serial: 13,
    station_name: 'NOIDA SECTOR 147',
    station_code: 'NS147',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:14',
      'Toward NOIDA NOIDA SECTOR 51': '6:21',
    },
    last_Train: {
      'Toward DELPORT': '22:29',
      'Toward NOIDA NOIDA SECTOR 51': '22:16',
    },
    details: {},
  },
  {
    serial: 14,
    station_name: 'NOIDA SECTOR 148',
    station_code: 'NS148',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:17',
      'Toward NOIDA NOIDA SECTOR 51': '6:17',
    },
    last_Train: {
      'Toward DELPORT': '22:31',
      'Toward NOIDA NOIDA SECTOR 51': '22:14',
    },
    details: {},
  },
  {
    serial: 15,
    station_name: 'Knowledge Park II',
    station_code: 'KPII',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:21',
      'Toward NOIDA NOIDA SECTOR 51': '6:13',
    },
    last_Train: {
      'Toward DELPORT': '22:35',
      'Toward NOIDA NOIDA SECTOR 51': '22:10',
    },
    details: {},
  },
  {
    serial: 16,
    station_name: 'PARI CHOWK',
    station_code: 'PC',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:24',
      'Toward NOIDA NOIDA SECTOR 51': '6:10',
    },
    last_Train: {
      'Toward DELPORT': '22:37',
      'Toward NOIDA NOIDA SECTOR 51': '22:08',
    },
    details: {},
  },
  {
    serial: 17,
    station_name: 'ALPHA 1',
    station_code: 'A1',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:27',
      'Toward NOIDA NOIDA SECTOR 51': '6:07',
    },
    last_Train: {
      'Toward DELPORT': '22:39',
      'Toward NOIDA NOIDA SECTOR 51': '22:06',
    },
    details: {},
  },
  {
    serial: 18,
    station_name: 'DELTA 1',
    station_code: 'D1',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:29',
      'Toward NOIDA NOIDA SECTOR 51': '6:04',
    },
    last_Train: {
      'Toward DELPORT': '22:42',
      'Toward NOIDA NOIDA SECTOR 51': '22:03',
    },
    details: {},
  },
  {
    serial: 19,
    station_name: 'GNIDA OFFICE',
    station_code: 'GO',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '6:32',
      'Toward NOIDA NOIDA SECTOR 51': '6:02',
    },
    last_Train: {
      'Toward DELPORT': '22:44',
      'Toward NOIDA NOIDA SECTOR 51': '22:01',
    },
    details: {},
  },
  {
    serial: 20,
    station_name: 'DEPORT',
    station_code: 'DE',
    lines: ['aqua'],
    lineNumber: [1],
    first_Train: {
      'Toward DELPORT': '-',
      'Toward NOIDA NOIDA SECTOR 51': '6:00',
    },
    last_Train: {
      'Toward DELPORT': '-',
      'Toward NOIDA NOIDA SECTOR 51': '22:00',
    },
    details: {},
  },
];
const kolkataStations = [
  {
    serial: 0,
    station_name: 'KAVI SUBHASH',
    station_code: 'KS',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 1,
    station_name: 'SHAHID KHUDIRAM',
    station_code: 'SKH',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 2,
    station_name: 'KAVI NAZRUL',
    station_code: 'KN',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 3,
    station_name: 'GITANJALI',
    station_code: 'GJI',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 4,
    station_name: 'MASTERDA SURYA SEN',
    station_code: 'MSS',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 5,
    station_name: 'NETAJI',
    station_code: 'NET',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 6,
    station_name: 'MAHANAYAK UTTAM KUMAR',
    station_code: 'MUK',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 7,
    station_name: 'RABINDRA SAROBAR',
    station_code: 'RS',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 8,
    station_name: 'KALIGHAT',
    station_code: 'KHGT',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 9,
    station_name: 'JATIN DAS PARK',
    station_code: 'JDP',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 10,
    station_name: 'NETAJI BHAVAN',
    station_code: 'NBHA',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 11,
    station_name: 'RABINDRA SADAN',
    station_code: 'RASD',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 12,
    station_name: 'MAIDAN',
    station_code: 'MDN',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 13,
    station_name: 'PARK STREET',
    station_code: 'PSTT',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 14,
    station_name: 'ESPLANADE',
    station_code: 'ESPL',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 15,
    station_name: 'CHANDNI CHOWK',
    station_code: 'CC',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 16,
    station_name: 'CENTRAL',
    station_code: 'CENTRAL',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 17,
    station_name: 'MAHATAMA GANDHI ROAD',
    station_code: 'MGROAD',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 18,
    station_name: 'GIRISH PARK',
    station_code: 'GPARK',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 19,
    station_name: 'SHOBHA BAZAR',
    station_code: 'SBAZ',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 20,
    station_name: 'SHAYAM BAZAR',
    station_code: 'SHABAZ',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 21,
    station_name: 'BELGACHHIA',
    station_code: 'BGA',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 22,
    station_name: 'DUM DUM',
    station_code: 'DUMDUM',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 23,
    station_name: 'NOAPARA',
    station_code: 'NOAP',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 24,
    station_name: 'BARANAGAR',
    station_code: 'BNAGAR',
    lines: ['blue'],
    details: {},
  },
  {
    serial: 25,
    station_name: 'DAKSHINESWAR',
    station_code: 'DSW',
    lines: ['blue'],
    details: {},
  },
  {
    station_name: 'SALT LAKE SECTOR-V',
    station_code: 'SLSV',
    lines: ['green'],
    details: {},
  },
  {
    station_name: 'KARUNAMOYEE',
    station_code: 'KAMYEE',
    lines: ['green'],
    details: {},
  },
  {
    station_name: 'CENTRAL PARK',
    station_code: 'CENPARK',
    lines: ['green'],
    details: {},
  },
  {
    station_name: 'CITY CENTER',
    station_code: 'CITYCENTER',
    lines: ['green'],
    details: {},
  },
  {
    station_name: 'BENGAL CHEMICAL',
    station_code: 'BENCHE',
    lines: ['green'],
    details: {},
  },
  {
    station_name: 'SALT LAKE STADIUM',
    station_code: 'SLS',
    lines: ['green'],
    details: {},
  },
  {
    station_name: 'PHOOLBAGAN',
    station_code: 'PHOOL',
    lines: ['green'],
    details: {},
  },
  {
    station_name: 'SEALDAH',
    station_code: 'SEALDAH',
    lines: ['green'],
    details: {},
  },
  {
    station_name: 'JOKA',
    station_code: 'JOKA',
    lines: ['purple'],
    details: {},
  },
  {
    station_name: 'THAKURPUKUR',
    station_code: 'THAKUR',
    lines: ['purple'],
    details: {},
  },
  {
    station_name: 'SAKHERBAZAR',
    station_code: 'SAKBAZ',
    lines: ['purple'],
    details: {},
  },
  {
    station_name: 'BEHALA CHOWRASTA',
    station_code: 'BEHALACHOW',
    lines: ['purple'],
    details: {},
  },
  {
    station_name: 'BEHALA BAZAR',
    station_code: 'BEHALABAZ',
    lines: ['purple'],
    details: {},
  },
  {
    station_name: 'TARATALA',
    station_code: 'TARAT',
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
    onPress: {
      routeName: 'GeneralInfo',
      params: {},
    },
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
    icon: images.mapSearchImg,
  },
  {
    label: strings.nearestMetro,
    onPress: {
      routeName: 'NearestMetro',
      params: {},
    },
    icon: images.metroImg,
  },
  {
    label: strings.firstLastMetro,
    onPress: {
      routeName: 'FirstLastMetro',
      params: {},
    },
    icon: images.clockImg,
  },
  {
    label: strings.onlineRecharge,
    onPress: {
      routeName: 'OnlineRecharge',
      params: {},
    },
    icon: images.rechargeImg,
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

export const lineNames: any = {
  yellow: 'Yellow Line',
  blue: 'Blue Line',
  orange: 'Orange Line',
  red: 'Red Line',
  pink: 'Pink Line',
  aqua: 'Aqua Line',
  grey: 'Grey Line',
  green: 'Green Line',
  mangenta: 'Mangenta Line',
  rmgl: 'RMGL',
  voilet: 'Voilet Line',
  purple: 'Purple Line',
};

export const lineColors: any = {
  yellow: colors.lightYellow,
  blue: colors.lightBlue,
  orange: colors.lightOrange,
  red: colors.red,
  pink: colors.lightPink,
  aqua: colors.aqua,
  voilet: colors.lightVoilet,
  mangenta: colors.lightMaganta,
  green: colors.green,
  grey: colors.black60,
  rmgl: colors.lightRMGL,
  purple: colors.lightPurple,
};
export const getCity: any = {
  'Noida Metro': noidaStations,
  'Delhi Metro': require('./stationName/delhiMetro.json'),
  'Kolkata Metro': kolkataStations,
};

export const generalInfo = {
  links: [
    {
      label: 'https://www.delhimetrorail.com/',
    },
    {
      label: 'https://nmrcnoida.com/',
    },
    {
      label: 'https://mtp.indianrailways.gov.in/',
    },
    {
      label: 'https://www.mmmocl.co.in/',
    },
    {
      label: 'https://chennaimetrorail.org/',
    },
    {
      label: 'https://www.lmrcl.com/',
    },
  ],
  numbers: [
    {
      label: 'All Emergencies',
      value: 108,
    },
    {
      label: 'Police',
      value: 100,
    },
    {
      label: 'Fire',
      value: 101,
    },
    {
      label: 'Ambulance',
      value: 102,
    },
  ],
};

const fareChart = {
  'Delhi Metro': delhiMetroFareCalculator,
  'Noida Metro': calculateNoidaMetroFare,
  'Kolkata Metro': calculateKolkataMetroFare,
};

const calculateFareByCity = {
  'Delhi Metro': calculateFLMDelhi,
  'Noida Metro': calculateFLMNoida,
  'Kolkata Metro': calculateFLMKolkata,
};

const fareRouteLineColor: any = {
  'Violet Line': colors.lightVoilet,
  'Orange Line': colors.orange,
  'Blue Line': colors.blue,
  'Pink Line': colors.lightPink,
  'Magenta Line': colors.lightMaganta,
  'Green Line': colors.green,
  'Yellow Line': colors.lightYellow,
  'Red Line': colors.red,
  'Aqua Line': colors.aqua,
  'Voilet Line': colors.lightVoilet,
  'Grey Line': colors.black50,
  'Purple Line': colors.lightPurple,
  'RMGL Line': colors.lightRMGL,
};

export {
  delhiStations,
  noidaStations,
  kolkataStations,
  drawerComponents,
  serviceItem,
  cityList,
  fareChart,
  calculateFareByCity,
  fareRouteLineColor,
};
