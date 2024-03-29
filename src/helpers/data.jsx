import pic1 from '../img/dr1.jpg'
import pic2 from '../img/dr2.jpg'
import pic3 from '../img/dr3.jpg'
import pic4 from '../img/dr4.jpg'
import pic5 from '../img/dr5.jpg'
import pic6 from '../img/dr6.jpg'
import pic7 from '../img/dr7.jpg'
import pic8 from '../img/dr8.jpg'

export const appointmentData = [
  {
    id: 1,
    patient: "Barry Vermont",
    day: new Date(),
    consulted: true,
    doctor: "Dr. Hazel Valery",
  },
  {
    id: 2,
    patient: "Harry Coming",
    day: new Date(),
    consulted: false,
    doctor: "Dr. Jessica White",
  },
  {
    id: 3,
    patient: "Aaron Black",
    day: new Date(),
    consulted: true,
    doctor: "Dr. Jasmine Carpanter",
  },
]

export const doctorData = [
  {
    id: 1,
    name: "Dr.Hazel Valery",
    dep: "Cardiology",
    img: pic1,
  },
  {
    id: 2,
    name: "Dr. Jasmine Carpanter",
    dep: "Radiolgy",
    img: pic2,
  },
  {
    id: 3,
    name: "Dr. Arianna Mary",
    dep: "Orthopedy",
    img: pic3,
  },
  {
    id: 4,
    name: "Dr. Jessica White",
    dep: "Gastroentogoly",
    img: pic4,
  },
  {
    id: 5,
    name: "Harry Coming",
    dep: "Surgery",
    img: pic5,
  },
  {
    id: 6,
    name: "Dr. Kristensen Abraham",
    dep: "Neurology",
    img: pic6,
  },
  {
    id: 7,
    name: "Dr.Asley Graham",
    dep: "Pediatry",
    img: pic7,
  },
  {
    id: 8,
    name: "Dr. Mary Motley",
    dep: "Oncology",
    img: pic8,
  },
];
