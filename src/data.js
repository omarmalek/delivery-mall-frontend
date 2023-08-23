import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import item1 from "./images/item1.jfif"
import item2 from "./images/item2.jfif"
import item3 from "./images/item3.jfif"
import item4 from "./images/item4.jfif"
import item5 from "./images/item5.jfif"
import item6 from "./images/item6.jfif"
import item7 from "./images/item7.jfif"
import item8 from "./images/item8.jfif"
import item9 from "./images/item9.jfif"
import item10 from "./images/item10.jfif"
import item11 from "./images/item11.jfif"
import item12 from "./images/item12.jfif"
import item13 from "./images/item13.jfif"
import item14 from "./images/item14.jfif"
import item15 from "./images/item15.jfif"
import item16 from "./images/item16.jfif"
import item17 from "./images/item17.jfif"
import item18 from "./images/item18.jfif"
import item19 from "./images/item19.jfif"
import item20 from "./images/item20.jfif"
import item21 from "./images/item21.jfif"
import item22 from "./images/item22.jfif"
import item23 from "./images/item23.jfif"
import item24 from "./images/item24.jfif"
import item25 from "./images/item25.jfif"
import item26 from "./images/item26.jfif"
import item27 from "./images/item27.jfif"
import item28 from "./images/item28.jfif"
import item29 from "./images/item29.jfif"
import item30 from "./images/item30.jfif"
import item31 from "./images/item31.jfif"
import item32 from "./images/item32.jfif"
import item33 from "./images/item33.jfif"
import item34 from "./images/item34.jfif"
import item35 from "./images/item35.jfif"
import item36 from "./images/item36.jfif"
import item37 from "./images/item37.jfif"
import item38 from "./images/item38.jfif"
import item39 from "./images/item39.jfif"
import item40 from "./images/item40.jfif"

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];
export const temp_catgories = [
  { id: 1, name: "Can Food" },
  { id: 2, name: "Frozen Food" },
  { id: 3, name: "Beverages" },
  { id: 4, name: "choclate & Biscusts" }
];

export const ordersData = [
  {
    id: 7710,
    customerId: 10002,
    customerName: "Ali Jaber",
    orderSetterId: 4,
    deliveryManId: 60,
    delivaryCharg: 5,
    cart: [
      {
        id: "335",
        name: "شيبس  ",
        backagePrice: 1,
        unitPrice: 7,
        amount: 1,
        descountPrice: 0,
        unitName: "باكيت",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "114",
        name: "جبنة مثلثات  ",
        backagePrice: 2,
        unitPrice: 4,
        amount: 3,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvzg8-eZ5v_RVMlwUG0lEqv0aI0pwSTOZkRk47jG7HzHW1DSP3",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
    ],
    cartTotal: 120,
    date: "00.00.00.4/12/2022",
    paymentType: "cash on delivary",
    DelivaryServiceType: "ordenary",
    isPacked: true,
    isDelivared: false,
    isPaid: false,
    isCanselled: false,
    isRejected: false,
    customerEvaluation: "no commets",
    controlNotes: "no commets",
  },
  {
    id: 7711,
    customerId: 10040,
    customerName: "وليد البشير",
    orderSetterId: 4,
    deliveryManId: 62,
    delivaryCharg: 7,
    cart: [
      {
        id: "335",
        name: "كولا  ",
        backagePrice: 1,
        unitPrice: 7,
        amount: 10,
        descountPrice: 0,
        unitName: "باكيت",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "114",
        name: " عصير  ",
        backagePrice: 2,
        unitPrice: 5,
        amount: 1,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvzg8-eZ5v_RVMlwUG0lEqv0aI0pwSTOZkRk47jG7HzHW1DSP3",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
    ],
    cartTotal: 80,
    date: "00.00.00.4/12/2022",
    paymentType: "cash on delivary",
    DelivaryServiceType: "urgent",
    isPacked: false,
    isDelivared: false,
    isPaid: false,
    isCanselled: false,
    isRejected: false,
    customerEvaluation: "no commets",
    controlNotes: "no commets",
  },
];
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
export const temp_full_catgories = [
  {
    id: 1,
    name: "القهوة والمشروبات",
    contents: [
      {
        id: "72215",
        name: "طحينة عاشور ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvzg8-eZ5v_RVMlwUG0lEqv0aI0pwSTOZkRk47jG7HzHW1DSP3",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "666",
        name: " حليب ",
        backagePrice: 10,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "كيس",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "72044415",
        name: "لبن زبادي جنيدي",
        backagePrice: 4,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://esalatfood.ir/wp-content/uploads/2020/10/product-green-peas-min.png",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "777",
        name: "قهوة  ",
        backagePrice: 16,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "كرتونة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "258",
        name: "عصير  ",
        backagePrice: 8,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "زجاجة",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvzg8-eZ5v_RVMlwUG0lEqv0aI0pwSTOZkRk47jG7HzHW1DSP3",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "159",
        name: "جبنة",
        backagePrice: 7,
        unitPrice: 12,
        descountPrice: 0,
        unitName: "مرطبان",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "72036515",
        name: "مربي  ",
        backagePrice: 6,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "مرطبان",
        img:
          "https://esalatfood.ir/wp-content/uploads/2020/10/product-green-peas-min.png",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "222",
        name: "شاي  ",
        backagePrice: 10,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "باكيت",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "3331",
        name: "بسكويت",
        backagePrice: 4,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "باكيت",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvzg8-eZ5v_RVMlwUG0lEqv0aI0pwSTOZkRk47jG7HzHW1DSP3",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "999",
        name: "كوكاكولا",
        backagePrice: 3,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "زجاجة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "995",
        name: "طحينة  ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "صندوق",
        img:
          "https://esalatfood.ir/wp-content/uploads/2020/10/product-green-peas-min.png",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "335",
        name: "شيبس  ",
        backagePrice: 1,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "باكيت",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "114",
        name: "جبنة مثلثات  ",
        backagePrice: 2,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvzg8-eZ5v_RVMlwUG0lEqv0aI0pwSTOZkRk47jG7HzHW1DSP3",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "778",
        name: "مرتديلا  ",
        backagePrice: 5,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "3366",
        name: "زيت  ",
        backagePrice: 18,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "لتر",
        img:
          "https://esalatfood.ir/wp-content/uploads/2020/10/product-green-peas-min.png",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "2211",
        name: "ملح  ",
        backagePrice: 1,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "كيلو",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
    ],
  },
  // ======================================================================
  {
    id: 2,
    name: "الالبان والاجبان",
    contents: [
      {
        id: "6661",
        name: "بيض ",
        backagePrice: 0.5,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "458",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://esalatfood.ir/wp-content/uploads/2020/10/product-green-peas-min.png",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "b78",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },

      {
        id: "e21",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvzg8-eZ5v_RVMlwUG0lEqv0aI0pwSTOZkRk47jG7HzHW1DSP3",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "r65",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "t87",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://esalatfood.ir/wp-content/uploads/2020/10/product-green-peas-min.png",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "u89",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },

      {
        id: "i32",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvzg8-eZ5v_RVMlwUG0lEqv0aI0pwSTOZkRk47jG7HzHW1DSP3",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "w87",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "f22",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://esalatfood.ir/wp-content/uploads/2020/10/product-green-peas-min.png",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "c66",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
    ],
  },
  {
    id: 3,
    name: "المنظفات",
    contents: [
      {
        id: "c001",
        name: " مرتديلا ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvzg8-eZ5v_RVMlwUG0lEqv0aI0pwSTOZkRk47jG7HzHW1DSP3",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "c002",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "c003",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://esalatfood.ir/wp-content/uploads/2020/10/product-green-peas-min.png",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "c0004",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },

      {
        id: "c0005",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvzg8-eZ5v_RVMlwUG0lEqv0aI0pwSTOZkRk47jG7HzHW1DSP3",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "c0006",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "c0007",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://esalatfood.ir/wp-content/uploads/2020/10/product-green-peas-min.png",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "c0008",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },

      {
        id: "c0009",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvzg8-eZ5v_RVMlwUG0lEqv0aI0pwSTOZkRk47jG7HzHW1DSP3",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "c0010",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "c0011",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://esalatfood.ir/wp-content/uploads/2020/10/product-green-peas-min.png",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
      {
        id: "c0012",
        name: "طحينة بيضاء ",
        backagePrice: 7,
        unitPrice: 7,
        descountPrice: 0,
        unitName: "علبة",
        img:
          "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg",
        avilable: true,
        weight: "0.200",
        company: "الشركةالوطنية للصناعات الغذائية",
        country: "صنع في مصر ",
        desc:
          "حليب بقري سائل، غني بالبروتينات والمعادن، مناسب لجميع الأعمار، يساعد على توفير عناصر ضرورية، وكلام فارغ.",
        parcode: "",
        storeLocation: "0",
      },
    ],
  },
];
export const centers = [
  {
    id: 1,
    name: "center-A",
    address: "Al Wehda st",
    website:"",
    phone :""
  }
]
export const tempPhotosList = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17,item18,item19,item20,item21,item22,item23,item24,item25,item26,item27,item28,item29,item30,item31,item32,item33,item34,item35,item36,item37,item38,item39,item40]