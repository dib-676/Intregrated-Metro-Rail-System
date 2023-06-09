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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5623',
    longitude: '77.3526',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5562',
    longitude: '77.3637',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5559',
    longitude: '77.3737',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5528',
    longitude: '77.3856',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.3969',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5308',
    longitude: '77.3405',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.4105',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.4250',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.4361',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.4452',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.4553',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.4655',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.4756',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.4858',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.4959',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.4795',
    longitude: '77.5346',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.5264',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.5061',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.5536',
    longitude: '77.5162',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.4846',
    longitude: '77.5365',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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
    metro_lines: [
      {
        id: 3,
        name: 'Line 1',
        line_color: 'Aqua Line',
        primary_color_code: '#3b76c0',
        secondary_color_code: '#edf5ff',
        class_primary: 'aqua',
        status: 'Normal Service',
      },
    ],
    station_type: 'Elevated',
    interchange: false,
    latitude: '28.4889',
    longitude: '77.5439',
    x_coords: 3816.0,
    y_coords: 3548.0,
    mobile: '8800793140',
    landline: '7290024757',
    station_facility: [
      {
        name: 'Divyang Friendly Station',
        class_name: 'flaticon-disabled',
        image: {
          title: 'disabled.png',
          file: '/media/original_images/disabled_nq1qwhI.png',
        },
      },
      {
        name: 'Parking Available',
        class_name: 'flaticon-parking-area',
        image: {
          title: '012-parking-area.png',
          file: '/media/original_images/012-parking-area_1BNoFOj.png',
        },
      },
      {
        name: 'Lift/Escalator Available',
        class_name: 'flaticon-elevator',
        image: {
          title: '007-elevator.png',
          file: '/media/original_images/007-elevator_ew8UOTr.png',
        },
      },
      {
        name: 'Interchange Station',
        class_name: 'flaticon-exchange',
        image: {
          title: '008-exchange.png',
          file: '/media/original_images/008-exchange_q4UnGQr.png',
        },
      },
    ],
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

const lost_and_found = [
  {
    label: 'Instructions to collect lost articles',
    instructions: [
      {
        serialNo: 1,
        label:
          'Visit customer care centre of nearby station within 48 hours. After 48 hours, contact Lost & Found office as mentioned below.',
      },
      {
        serialNo: 2,
        label:
          'Photocopy of any ID proof (having address) along with original is mandatory to collect articles.',
      },
      {
        serialNo: 3,
        label:
          'If the lost articles are not claimed within one month (for DMRC , NMRC, KMRC, MMRC, CMRC)',
      },
    ],
  },
  {
    label: 'DMRC',
    details: [
      {
        label: 'Please contact',
        data: [
          'Lost & Found office',
          'Concourse level, below platform no. 03',
          'Kashmere Gate Metro Station',
          'Contact Number - Mobile - 8527405555',
          'Land line - 011-23417910, Extn: 113701',
        ],
      },
      {
        label: 'Office Timing',
        data: [
          'Timing from 08:00 AM - 08:00 PM ( Except on Sunday',
          'all National and Gazetted Holiday.',
        ],
      },
    ],
  },
  {
    label: 'NMRC',
    details: [
      {
        label: 'Please contact',
        data: [
          'Lost & Found office',
          'Concourse level, below platform no. 03',
          'Kashmere Gate Metro Station',
          'Contact Number - Mobile - 8527405555',
          'Land line - 011-23417910, Extn: 113701',
        ],
      },
      {
        label: 'Office Timing',
        data: [
          'Timing from 08:00 AM - 08:00 PM ( Except on Sunday',
          'all National and Gazetted Holiday.',
        ],
      },
    ],
  },
  {
    label: 'KMRC',
    details: [
      {
        label: 'Please contact',
        data: [
          'Lost & Found office',
          'Concourse level, below platform no. 03',
          'Kashmere Gate Metro Station',
          'Contact Number - Mobile - 8527405555',
          'Land line - 011-23417910, Extn: 113701',
        ],
      },
      {
        label: 'Office Timing',
        data: [
          'Timing from 08:00 AM - 08:00 PM ( Except on Sunday',
          'all National and Gazetted Holiday.',
        ],
      },
    ],
  },
];

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
  noidaStations,
  kolkataStations,
  drawerComponents,
  serviceItem,
  cityList,
  fareChart,
  calculateFareByCity,
  fareRouteLineColor,
};
